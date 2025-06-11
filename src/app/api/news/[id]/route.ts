import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import News from "@/lib/models/news";

    
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

interface FileUpload {
  name: string;
  mimeType?: string;
  content: string;
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

// GET News by ID
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json({ error: "News ID is required" }, { status: 400 });
    }

    await connectDB();

    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "News fetched successfully",
      success: true,
      news,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

// DELETE News by ID
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "News ID is required" }, { status: 400 });
    }

    await connectDB();

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    await drive.files.delete({ fileId: news.fileId });

    await News.findByIdAndDelete(id);

    return NextResponse.json({
      message: "News and file deleted successfully",
      success: true,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

// PUT Update News by ID
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    console.log("[PUT] Received PUT request for ID:", id);

    if (!id) {
      console.log("[PUT] Missing News ID");
      return NextResponse.json({ error: "News ID is required" }, { status: 400 });
    }

    const contentType = request.headers.get("content-type") || "";
    console.log("[PUT] Content-Type header:", contentType);

    if (contentType.includes("multipart/form-data")) {
      console.log("[PUT] multipart/form-data content-type not supported");
      return NextResponse.json({ error: "multipart/form-data not supported yet" }, { status: 400 });
    }

    const body = await request.json();
    console.log("[PUT] Parsed JSON body:", body);

    const { title, description, tag, file } = body;

    const folderId = process.env.GDRIVE_NEWS_FOLDER_ID;
    if (!folderId) throw new Error("Missing GDRIVE_NEWS_FOLDER_ID env variable");

    await connectDB();
    console.log("[PUT] Connected to DB");

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) {
      console.log("[PUT] Admin verification failed or not authorized");
      return user;
    }
    console.log("[PUT] Admin verified:", user);

    const news = await News.findById(id);
    if (!news) {
      console.log("[PUT] News not found for ID:", id);
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }
    console.log("[PUT] Found existing news:", news);

    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    let updatedFileData = {};
    if (file) {
      console.log("[PUT] File provided. Deleting old file:", news.fileId);
      try {
        await drive.files.delete({ fileId: news.fileId });
        console.log("[PUT] Deleted old file from Drive:", news.fileId);
      } catch (err) {
        console.error("[PUT] Failed to delete old file:", err);
      }

      const uploaded = await uploadFileToDrive(folderId, file);
      updatedFileData = {
        fileId: uploaded.id,
        link: uploaded.link,
        originalName: uploaded.name,
        mimeType: uploaded.mimeType,
      };

      console.log("[PUT] Uploaded new file data:", updatedFileData);
    } else {
      console.log("[PUT] No new file uploaded, skipping file upload.");
    }

    const updatedNews = await News.findByIdAndUpdate(
      id,
      {
        title: title ?? news.title,
        description: description ?? news.description,
        tag: tag ?? news.tag,
        ...updatedFileData,
      },
      { new: true }
    );

    console.log("[PUT] News updated successfully:", updatedNews);

    return NextResponse.json({
      message: "News updated successfully",
      success: true,
      updatedNews,
    });
  } catch (error: unknown) {
    console.error("[PUT] Error caught in catch block:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
