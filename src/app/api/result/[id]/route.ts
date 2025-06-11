import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import Result from "@/lib/models/result";

const folderId = process.env.GDRIVE_RESULT_FOLDER_ID;
if (!folderId) {
  throw new Error("GDRIVE_RESULT_FOLDER_ID is not defined");
}

const authenticateGoogle = () => {
  return new google.auth.GoogleAuth({
    keyFile: "./data.json", // or process.env.GOOGLE_APPLICATION_CREDENTIALS
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};

// Upload file to Google Drive from base64 content
const uploadFileToDrive = async (folderId: string, file: { name: string; mimeType?: string; content: string }) => {
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  const mimeType = file.mimeType || "application/octet-stream";
  const buffer = Buffer.from(file.content, "base64");

  const fileMetadata = {
    name: file.name,
    parents: [folderId],
  };

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: {
      mimeType,
      body: Readable.from(buffer),
    },
    fields: "id",
  });

  const fileLink = await drive.files.get({
    fileId: response.data.id!,
    fields: "webViewLink",
  });

  return {
    id: response.data.id!,
    link: fileLink.data.webViewLink || "",
    name: file.name,
    mimeType,
  };
};

// GET /api/result/:id - fetch single result by ID
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Result ID is required" }, { status: 400 });

    await connectDB();
    const result = await Result.findById(id);
    if (!result) return NextResponse.json({ error: "Result not found" }, { status: 404 });

    return NextResponse.json({ message: "Result fetched successfully", success: true, result });
  } catch (error: unknown) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

// DELETE /api/result/:id - delete result and Google Drive file
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Result ID is required" }, { status: 400 });

    await connectDB();

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const result = await Result.findById(id);
    if (!result) return NextResponse.json({ error: "Result not found" }, { status: 404 });

    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    await drive.files.delete({ fileId: result.fileId });

    const deletedResult = await Result.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Result and file deleted successfully",
      success: true,
      deletedResult,
    });
  } catch (error: unknown) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

// PUT /api/result/:id - update result, optionally update file on Drive
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Result ID is required" }, { status: 400 });

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "multipart/form-data not supported yet" }, { status: 400 });
    }

    const body = await request.json();

    // Expecting these fields based on your schema:
    const {
      resultTitle,
      examType,
      class: className,
      statistics,
      session,
      totalStudents,
      passPercentage,
      file, // optional, { name, mimeType?, content (base64) }
    } = body;

    await connectDB();

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const result = await Result.findById(id);
    if (!result) return NextResponse.json({ error: "Result not found" }, { status: 404 });

    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    let updatedFileData = {};
    if (file) {
      try {
        await drive.files.delete({ fileId: result.fileId });
      } catch (err) {
        console.error("Failed to delete old file from Drive:", err);
      }
      const uploaded = await uploadFileToDrive(folderId as string, file);
      updatedFileData = {
        fileId: uploaded.id,
        link: uploaded.link,
        originalName: uploaded.name,
        mimeType: uploaded.mimeType,
      };
    }

    const updatedResult = await Result.findByIdAndUpdate(
      id,
      {
        resultTitle: resultTitle ?? result.resultTitle,
        examType: examType ?? result.examType,
        class: className ?? result.class,
        statistics: statistics ?? result.statistics,
        session: session ?? result.session,
        totalStudents: totalStudents !== undefined ? Number(totalStudents) : result.totalStudents,
        passPercentage: passPercentage !== undefined ? Number(passPercentage) : result.passPercentage,
        ...updatedFileData,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Result updated successfully",
      success: true,
      updatedResult,
    });
  } catch (error: unknown) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
