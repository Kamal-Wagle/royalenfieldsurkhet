import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import BikeDetails from "@/lib/models/bike";

// Auth setup
const privateKey = process.env.GDRIVE_PRIVATE_KEY
  ?.replace(/\\n/g, "\n")
  .replace(/^"(.*)"$/, '$1')
  .trim();


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
    client_email: process.env.GDRIVE_CLIENT_EMAIL,
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
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  const buffer = Buffer.from(file.content, "base64");

  const response = await drive.files.create({
    requestBody: { name: file.name, parents: [folderId] },
    media: { mimeType: file.mimeType || "application/octet-stream", body: Readable.from(buffer) },
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
    mimeType: file.mimeType || "application/octet-stream",
  };
};

// GET
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Bike ID is required" }, { status: 400 });

    await connectDB();
    const bike = await BikeDetails.findById(id);
    if (!bike) return NextResponse.json({ error: "Bike not found" }, { status: 404 });

    return NextResponse.json({ message: "Bike fetched successfully", success: true, bike });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal error" }, { status: 500 });
  }
}

// DELETE
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Bike ID is required" }, { status: 400 });

    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const bike = await BikeDetails.findById(id);
    if (!bike) return NextResponse.json({ error: "Bike not found" }, { status: 404 });

    const drive = google.drive({ version: "v3", auth: authenticateGoogle() });

    // Delete associated file(s)
    if (bike.fileId) {
      await drive.files.delete({ fileId: bike.fileId });
    }

    const deletedBike = await BikeDetails.findByIdAndDelete(id);
    return NextResponse.json({ message: "Bike deleted successfully", success: true, deletedBike });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal error" }, { status: 500 });
  }
}

// PUT
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Bike ID is required" }, { status: 400 });

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "multipart/form-data not supported" }, { status: 400 });
    }

    const body = await request.json();
    const {
      name,
      price,
      year,
      mileage,
      condition,
      type,
      brand,
      engine,
      fuelType,
      transmission,
      color,
      owners,
      insurance,
      registration,
      description,
      features,
      specifications,
      file, // optional
    } = body;

    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const existingBike = await BikeDetails.findById(id);
    if (!existingBike) return NextResponse.json({ error: "Bike not found" }, { status: 404 });

    const folderId = process.env.GDRIVE_Bike_FOLDER_ID!;
    const drive = google.drive({ version: "v3", auth: authenticateGoogle() });

    let fileData = {};
    if (file) {
      try {
        if (existingBike.fileId) {
          await drive.files.delete({ fileId: existingBike.fileId });
        }
      } catch (err) {
        console.error("Failed to delete old file:", err);
      }

      const uploaded = await uploadFileToDrive(folderId, file);
      fileData = {
        fileId: uploaded.id,
        link: uploaded.link,
        originalName: uploaded.name,
        mimeType: uploaded.mimeType,
      };
    }

    const updatedBike = await BikeDetails.findByIdAndUpdate(
      id,
      {
        name,
        price,
        year,
        mileage,
        condition,
        type,
        brand,
        engine,
        fuelType,
        transmission,
        color,
        owners,
        insurance,
        registration,
        description,
        features,
        specifications,
        ...fileData,
      },
      { new: true }
    );

    return NextResponse.json({ message: "Bike updated successfully", success: true, updatedBike });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal error" }, { status: 500 });
  }
}
