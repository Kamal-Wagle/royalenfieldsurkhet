import { google } from "googleapis";
import { NextResponse } from "next/server";
import mime from "mime-types";
import { Readable } from "stream";
import Staff from "@/lib/models/staff"; // your staff model
import connectDB from "@/lib/db";

const folderId = process.env.GDRIVE_Staff_FOLDER_ID;
if (!folderId) {
  throw new Error("GDRIVE_Staff_FOLDER_ID is not defined");
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

    const name = formData.get("name") as string | null;
    const contactNumber = formData.get("contactNumber") as string | null;
    const qualificationsRaw = formData.getAll("qualifications") as string[];
    const gender = formData.get("gender") as string | null;
    const employmentType = formData.get("employmentType") as string | null;
    const email = formData.get("email") as string | null;
    const role = formData.get("role") as string | null;
    const staffPhotoFile = formData.get("staffPhoto") as File | null;

    if (!name || !contactNumber || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields: name, contactNumber, email, or role" },
        { status: 400 }
      );
    }

    let staffPhotoLink = "";
    let fileId = "";

    if (staffPhotoFile) {
      const uploaded = await uploadFileToDrive(folderId as string, staffPhotoFile);
      staffPhotoLink = uploaded.link;
      fileId = uploaded.id;
    }

    const newStaff = await Staff.create({
      name,
      contactNumber,
      qualifications: qualificationsRaw || [],
      gender,
      employmentType,
      email,
      role,
      staffPhoto: staffPhotoLink,
      fileId, // <-- save Drive file ID here
    });

    return NextResponse.json({ message: "Staff saved successfully", staff: newStaff }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error saving staff:", error);
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

    const staffList = await Staff.find().sort({ createdAt: -1 });

    return NextResponse.json({
      message: "Staff fetched successfully",
      success: true,
      staffList,
    });
  } catch (error: unknown) {
    console.error("Fetch error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}