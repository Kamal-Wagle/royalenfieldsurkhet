import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import Result from "@/lib/models/result";





const authenticateGoogle = () => {
  return new google.auth.GoogleAuth({
    keyFile: './data.json', // Replace with your service account key file path
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};

interface FileUpload {
  name: string;
  mimeType?: string;
  content: string;
}

// Get a notice by ID (GET)
export async function GET(request: NextRequest) {
    try {
        const id = request.nextUrl.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json({ error: "Result ID is required" }, { status: 400 });
        }

        await connectDB();

        const result = await Result.findById(id);

        if (!result) {
            return NextResponse.json({ error: "Result not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Result fetched successfully",
            success: true,
            result,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

// delete Operation ok
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Result ID is required" }, { status: 400 });
    }

    await connectDB();

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    // Find the record to get Google Drive fileId
    const result = await Result.findById(id);

    if (!result) {
      return NextResponse.json({ error: "Result not found" }, { status: 404 });
    }

    // Authenticate Google Drive
    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    // Delete file from Google Drive
    await drive.files.delete({
      fileId: result.fileId,
    });

    // Delete record from MongoDB after successful Drive deletion
    const deletedResult = await Result.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Result and file deleted successfully",
      success: true,
      deletedResult,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}


const uploadFileToDrive = async (folderId: string, file: FileUpload) => {
    console.log("[uploadFileToDrive] Start uploading file:", file.name);
    console.log("[uploadFileToDrive] File mimeType:", file.mimeType);
  
    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });
  
    const mimeType = file.mimeType || "application/octet-stream";
    const buffer = Buffer.from(file.content, "base64");
  
    console.log("[uploadFileToDrive] Decoded base64 content length:", buffer.length);
  
    const fileMetadata = {
      name: file.name,
      parents: [folderId],
    };
  
    console.log("[uploadFileToDrive] Creating file on Drive with metadata:", fileMetadata);
  
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType,
        body: Readable.from(buffer),
      },
      fields: "id",
    });
  
    console.log("[uploadFileToDrive] File created with ID:", response.data.id);
  
    const fileLink = await drive.files.get({
      fileId: response.data.id!,
      fields: "webViewLink",
    });
  
    console.log("[uploadFileToDrive] Retrieved webViewLink:", fileLink.data.webViewLink);
  
    return {
      id: response.data.id!,
      link: fileLink.data.webViewLink || "",
      name: file.name,
      mimeType,
    };
  };
  
  export async function PUT(request: NextRequest) {
    try {
      const id = request.nextUrl.pathname.split("/").pop();
      console.log("[PUT] Received PUT request for ID:", id);
  
      if (!id) {
        console.log("[PUT] Missing result ID");
        return NextResponse.json({ error: "Result ID is required" }, { status: 400 });
      }
  
      const contentType = request.headers.get("content-type") || "";
      console.log("[PUT] Content-Type header:", contentType);
  
      if (contentType.includes("multipart/form-data")) {
        console.log("[PUT] multipart/form-data content-type not supported");
        return NextResponse.json({ error: "multipart/form-data not supported yet" }, { status: 400 });
      }
  
      const body = await request.json();
      console.log("[PUT] Parsed JSON body:", body);
  
      const { title, file } = body;
   
      const folderId = process.env.GDRIVE_RESULT_FOLDER_ID;
if (!folderId) throw new Error("Missing GDRIVE_RESULT_FOLDER_ID env variable");

  
      await connectDB();
      console.log("[PUT] Connected to DB");
  
      const user = await verifyAdmin(request);
      if (user instanceof NextResponse) {
        console.log("[PUT] Admin verification failed or not authorized");
        return user;
      }
      console.log("[PUT] Admin verified:", user);
  
      const result = await Result.findById(id);
      if (!result) {
        console.log("[PUT] Result not found for ID:", id);
        return NextResponse.json({ error: "Result not found" }, { status: 404 });
      }
      console.log("[PUT] Found existing result:", result);
  
      const auth = authenticateGoogle();
      const drive = google.drive({ version: "v3", auth });
  
      let updatedFileData = {};
      if (file) {
        console.log("[PUT] File provided. Proceeding to delete old file:", result.fileId);
        try {
          await drive.files.delete({ fileId: result.fileId });
          console.log("[PUT] Deleted old file from Drive:", result.fileId);
        } catch (err) {
          console.error("[PUT] Failed to delete old file:", err);
        }
  
        const uploaded = await uploadFileToDrive(folderId, file);
        updatedFileData = {
          fileId: uploaded.id,
          link: uploaded.link,
          originalName: uploaded.name,
          mimeType: uploaded.mimeType,
          uploadedAt: new Date(),
        };
  
        console.log("[PUT] Uploaded new file data:", updatedFileData);
      } else {
        console.log("[PUT] No new file uploaded, skipping file upload.");
      }
  
      const updatedResult = await Result.findByIdAndUpdate(
        id,
        {
          title: title ?? result.title,
          ...updatedFileData,
        },
        { new: true }
      );
  
      console.log("[PUT] Result updated successfully:", updatedResult);
  
      return NextResponse.json({
        message: "Result updated successfully",
        success: true,
        updatedResult,
      });
    } catch (error: unknown) {
      console.error("[PUT] Error caught in catch block:", error);
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }