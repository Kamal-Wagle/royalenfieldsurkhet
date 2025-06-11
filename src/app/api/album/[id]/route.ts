import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Album from "@/lib/models/album";
import { verifyAdmin } from "@/lib/auth";
import { google } from "googleapis";

     
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
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const id = request.nextUrl.pathname.split("/").pop();
  
    if (!id) {
      return NextResponse.json({ error: "Image ID is required" }, { status: 400 });
    }
    const album = await Album.findById(id).lean();

    if (!album) {
      return NextResponse.json({ error: "Album not found" }, { status: 404 });
    }

    return NextResponse.json({ album });
  } catch (error: unknown) {
    console.error("Fetch album error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// make api for delete album and images form google drive

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Album ID is required" }, { status: 400 });
    }

    await connectDB();

    // Verify admin user
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    // Find album by ID
    const album = await Album.findById(id);
    if (!album) {
      return NextResponse.json({ error: "Album not found" }, { status: 404 });
    }

    // Authenticate Google Drive
    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    // Helper: Extract file ID from Google Drive URLs
    const extractFileId = (url: string): string | null => {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    };

    // Delete all images from Google Drive in parallel
    const deleteFilesPromises = album.imagesUrl.map(async (url: string) => {
      const fileId = extractFileId(url);
      if (!fileId) return;

      try {
        await drive.files.delete({ fileId });
      } catch (err) {
        console.error(`Failed to delete file ${fileId} from Drive:`, err);
        // Optional: Decide if you want to fail or continue on error
      }
    });

    await Promise.all(deleteFilesPromises);

    // Delete album from MongoDB
    await Album.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Album and all associated images deleted successfully",
      success: true,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
