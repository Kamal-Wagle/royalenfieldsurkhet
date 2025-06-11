import { google } from "googleapis";
import { NextResponse } from "next/server";
import mime from "mime-types";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import Notice from "@/lib/models/notice";

const folderId = process.env.GDRIVE_Notice_FOLDER_ID;
if (!folderId) {
  throw new Error("GDRIVE_Notice_FOLDER_ID is not defined");
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
    const noticeTitle = formData.get("noticeTitle") as string | null;
    const noticeDescription = formData.get("noticeDescription") as string | null;
    const noticeCategory = formData.get("noticeCategory") as string | null;

    if (!file || !noticeTitle || !noticeCategory || !noticeDescription) {
      return NextResponse.json(
        { error: "Missing required fields: file, title, category, or description." },
        { status: 400 }
      );
    }

    const { id, link, name, mimeType } = await uploadFileToDrive(folderId as string, file);

    const noticeDoc = await Notice.create({
      noticeTitle,
      noticeDescription,
      noticeCategory,
      fileId: id,
      link,
      originalName: name,
      mimeType,
    });

    return NextResponse.json(
      { message: "Notice uploaded successfully", notice: noticeDoc },
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

    const notices = await Notice.find().sort({ uploadedAt: -1 });

    return NextResponse.json({
      message: "Notices fetched successfully",
      success: true,
      notices,
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
