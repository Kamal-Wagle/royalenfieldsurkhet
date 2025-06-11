import { google } from "googleapis";
import { NextResponse } from "next/server";
import mime from "mime-types";
import { Readable } from "stream";
import Gallery from "@/lib/models/gallery"; // your Gallery model
import connectDB from "@/lib/db";

const folderId = process.env.GDRIVE_Gallery_FOLDER_ID;
if (!folderId) {
  throw new Error("GDRIVE_Gallery_FOLDER_ID is not defined");
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
  };
};

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const category = formData.get("category") as string | null;
    const imageFile = formData.get("image") as File | null;

    if (!category || !imageFile) {
      return NextResponse.json(
        { error: "Missing required fields: category or image" },
        { status: 400 }
      );
    }

    // Upload the image to Google Drive
    const uploaded = await uploadFileToDrive(folderId as string, imageFile);

    // Save the gallery entry in MongoDB
    const newImage = await Gallery.create({
      src: uploaded.link,
      category,
      createdAt: new Date(),
      fileId: uploaded.id, // optional to store Drive file ID
    });

    return NextResponse.json(
      { message: "Image uploaded successfully", image: newImage },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error uploading gallery image:", error);
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

    const galleryImages = await Gallery.find().sort({ uploadedAt: -1 });

    return NextResponse.json({
      message: "Notices fetched successfully",
      success: true,
      galleryImages,
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
