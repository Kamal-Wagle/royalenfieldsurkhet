import { google } from "googleapis";
import { NextResponse } from "next/server";
import mime from "mime-types";
import { Readable } from "stream";
import Result from "@/lib/models/result";
import connectDB from "@/lib/db";

const folderId = process.env.GDRIVE_RESULT_FOLDER_ID;
if (!folderId) {
  throw new Error("GDRIVE_RESULT_FOLDER_ID is not defined");
}

const authenticateGoogle = () => {
  return new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS || "./data.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};

const uploadFileToDrive = async (folderId: string, file: File) => {
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  const mimeType = mime.lookup(file.name) || "application/octet-stream";

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

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

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const resultTitle = formData.get("resultTitle") as string | null;
    const examType = formData.get("examType") as string | null;
    const className = formData.get("class") as string | null;
    const statistics = formData.get("statistics") as string | null;
    const session = formData.get("session") as string | null;
    const totalStudents = formData.get("totalStudents") as string | null;
    const passPercentage = formData.get("passPercentage") as string | null;

    // Validate required fields
    if (!file || !resultTitle || !examType || !className || !statistics || !session) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { id, link, name, mimeType } = await uploadFileToDrive(folderId as string, file);

    const resultDoc = await Result.create({
      resultTitle,
      examType,
      class: className,
      statistics,
      session,
      fileId: id,
      link,
      originalName: name,
      mimeType,
      totalStudents: totalStudents ? parseInt(totalStudents) : undefined,
      passPercentage: passPercentage ? parseFloat(passPercentage) : undefined,
    });

    return NextResponse.json(
      { message: "Result uploaded successfully", result: resultDoc },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Upload error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    // Sort by createdAt descending
    const results = await Result.find()
      .sort({ createdAt: -1 });

    return NextResponse.json({
      message: "Results fetched successfully",
      success: true,
      results,
    });
  } catch (error: unknown) {
    console.error("Fetch error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
