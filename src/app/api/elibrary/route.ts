import { google } from "googleapis";
import { NextResponse } from "next/server";
import mime from "mime-types";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import Elibrary from "@/lib/models/elibrary";

const folderId = process.env.GDRIVE_Elibrary_FOLDER_ID;
if (!folderId) {
  throw new Error("GDRIVE_Elibrary_FOLDER_ID is not defined");
}

     
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

const uploadFileToDrive = async (folderId: string, file: File) => {
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  // Validate file type & size here if needed

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
    const documentName = formData.get("documentName") as string | null;

    if (!file || !documentName) {
      return NextResponse.json(
        { error: "Missing required fields: file or documentName" },
        { status: 400 }
      );
    }

    // Optional: sanitize title here

    const { id, link, name, mimeType } = await uploadFileToDrive(folderId as string , file);

    const elibraryDoc = await Elibrary.create({
      documentName,
      fileId: id,
      link,
      originalName: name,
      mimeType,
      uploadedAt: new Date(),
    });

    return NextResponse.json({ message: "File uploaded", elibraryDoc }, { status: 200 });
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

    const results = await Elibrary.find().sort({ uploadedAt: -1 });

    return NextResponse.json({
      message: "Elibrary fetched successfully",
      success: true,
      results,
    });
  } catch (error: unknown) {
    console.error("Fetch error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
