import { verifyAdmin } from "@/lib/auth";
import connectDB from "@/lib/db";
import Gallery from "@/lib/models/gallery";
import { NextRequest, NextResponse } from "next/server";
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

// delete Operation ok
export async function DELETE(request: NextRequest) {
    try {
      const id = request.nextUrl.pathname.split("/").pop();
  
      if (!id) {
        return NextResponse.json({ error: "Image ID is required" }, { status: 400 });
      }
  
      await connectDB();
  
      const user = await verifyAdmin(request);
      if (user instanceof NextResponse) return user;
  
      // Find the record to get Google Drive fileId
      const image = await Gallery.findById(id);
  
      if (!image) {
        return NextResponse.json({ error: "image not found" }, { status: 404 });
      }
  
      // Authenticate Google Drive
      const auth = authenticateGoogle();
      const drive = google.drive({ version: "v3", auth });
  
      // Delete file from Google Drive
      await drive.files.delete({
        fileId: image.fileId,
      });
  
      // Delete record from MongoDB after successful Drive deletion
      const deletedImage = await Gallery.findByIdAndDelete(id);
  
      return NextResponse.json({
        message: "Image deleted successfully",
        success: true,
        deletedImage,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }