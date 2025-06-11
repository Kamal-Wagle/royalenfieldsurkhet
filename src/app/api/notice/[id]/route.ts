import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import Notice from "@/lib/models/notice";

    
const privateKey = process.env.GDRIVE_PRIVATE_KEY
  ?.replace(/\\n/g, "\n")       // replace literal \n with actual newlines
  .replace(/^"(.*)"$/, '$1')    // remove wrapping quotes if any
  .trim();                     // remove leading/trailing whitespace
  
const authenticateGoogle = () => {
  const credentials = {
    type: "service_account",
    project_id: process.env.GDRIVE_PROJECT_ID,
    private_key_id: process.env.GDRIVE_PRIVATE_KEY_ID,
    private_key: privateKey!,
    client_id: process.env.GDRIVE_CLIENT_ID,
    auth_uri: process.env.GDRIVE_AUTH_URI,
    token_uri: process.env.GDRIVE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GDRIVE_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.GDRIVE_CLIENT_CERT_URL,
    client_email:process.env.GDRIVE_CLIENT_EMAIL,
  };

  return new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};

// Upload file to Google Drive
interface FileUpload {
  name: string;
  mimeType?: string;
  content: string;
}

const uploadFileToDrive = async (folderId: string, file: FileUpload) => {
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

// GET a single notice by ID
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Notice ID is required" }, { status: 400 });

    await connectDB();

    const notice = await Notice.findById(id);
    if (!notice) return NextResponse.json({ error: "Notice not found" }, { status: 404 });

    return NextResponse.json({
      message: "Notice fetched successfully",
      success: true,
      notice,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// DELETE a notice and its Drive file
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Notice ID is required" }, { status: 400 });

    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const notice = await Notice.findById(id);
    if (!notice) return NextResponse.json({ error: "Notice not found" }, { status: 404 });

    const drive = google.drive({ version: "v3", auth: authenticateGoogle() });

    // Delete file from Drive
    await drive.files.delete({ fileId: notice.fileId });

    // Delete notice from DB
    const deletedNotice = await Notice.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Notice and file deleted successfully",
      success: true,
      deletedNotice,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// PUT (Update a notice)
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Notice ID is required" }, { status: 400 });

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "multipart/form-data not supported" }, { status: 400 });
    }

    const body = await request.json();
    const { noticeTitle, noticeDescription, noticeCategory, file } = body;

    const folderId = process.env.GDRIVE_Notice_FOLDER_ID;
    if (!folderId) throw new Error("Missing GDRIVE_Notice_FOLDER_ID env variable");

    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const existingNotice = await Notice.findById(id);
    if (!existingNotice) return NextResponse.json({ error: "Notice not found" }, { status: 404 });

    const drive = google.drive({ version: "v3", auth: authenticateGoogle() });

    let updatedFileData = {};
    if (file) {
      try {
        await drive.files.delete({ fileId: existingNotice.fileId });
      } catch (err) {
        console.error("Error deleting old file from Drive:", err);
      }

      const uploaded = await uploadFileToDrive(folderId, file);
      updatedFileData = {
        fileId: uploaded.id,
        link: uploaded.link,
        originalName: uploaded.name,
        mimeType: uploaded.mimeType,
      };
    }

    const updatedNotice = await Notice.findByIdAndUpdate(
      id,
      {
        noticeTitle: noticeTitle ?? existingNotice.noticeTitle,
        noticeDescription: noticeDescription ?? existingNotice.noticeDescription,
        noticeCategory: noticeCategory ?? existingNotice.noticeCategory,
        ...updatedFileData,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Notice updated successfully",
      success: true,
      updatedNotice,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
