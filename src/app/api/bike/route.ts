import { google } from "googleapis";
import { NextResponse } from "next/server";
import mime from "mime-types";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import BikeDetails from "@/lib/models/bike";

const folderId = process.env.GDRIVE_Bike_FOLDER_ID;
if (!folderId) throw new Error("GDRIVE_Bike_FOLDER_ID is not defined");

const privateKey = process.env.GDRIVE_PRIVATE_KEY
  ?.replace(/\\n/g, "\n")
  .replace(/^"(.*)"$/, "$1")
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

const uploadFileToDrive = async (folderId: string, file: File) => {
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  const mimeType = mime.lookup(file.name) || "application/octet-stream";
  const buffer = Buffer.from(await file.arrayBuffer());

  const fileMetadata = {
    name: file.name,
    parents: [folderId],
  };

  const uploadedFile = await drive.files.create({
    requestBody: fileMetadata,
    media: {
      mimeType,
      body: Readable.from(buffer),
    },
    fields: "id",
  });

  const fileLink = await drive.files.get({
    fileId: uploadedFile.data.id!,
    fields: "webViewLink",
  });

  return {
    id: uploadedFile.data.id!,
    link: fileLink.data.webViewLink || "",
  };
};

// POST: Upload a new bike
export async function POST(req: Request) {
  try {
    await connectDB();
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const originalPrice = formData.get("originalPrice") as string;
    const category = formData.get("category") as string;
    const badge = formData.get("badge") as string;
    const price = formData.get("price") as string;

    const features = JSON.parse(formData.get("features") as string); // nested object
    const variants = JSON.parse(formData.get("variants") as string); // array of { name, price }
    const colors = JSON.parse(formData.get("colors") as string);     // array of { name, code }

    const imageFiles = formData.getAll("images") as File[];

    if (!name || !description || !originalPrice || !category || !badge || !price || !features || !variants || !colors || imageFiles.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const uploadedImages = await Promise.all(
      imageFiles.map((file) => uploadFileToDrive(folderId!, file))
    );

    const imageUrls = uploadedImages.map((img) => img.link);
    const fileId = uploadedImages[0]?.id || "";

    const newBike = await BikeDetails.create({
      name,
      description,
      originalPrice,
      category,
      badge,
      price,
      features,
      variants,
      colors,
      images: imageUrls,
      fileId,
    });

    return NextResponse.json({ message: "Bike uploaded", bike: newBike }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// GET: Fetch all bikes
export async function GET() {
  try {
    await connectDB();
    const bikes = await BikeDetails.find().sort({ createdAt: -1 });

    if (!bikes || bikes.length === 0) {
      return NextResponse.json({
        message: "No bikes found",
        success: true,
        bikes: [],
      });
    }

    return NextResponse.json({
      message: "Bikes fetched successfully",
      success: true,
      bikes,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ 
      error: errorMessage,
      success: false,
      bikes: []
    }, { status: 500 });
  }
}
