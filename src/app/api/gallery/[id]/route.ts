import { verifyAdmin } from "@/lib/auth";
import connectDB from "@/lib/db";
import Gallery from "@/lib/models/gallery";
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";



const authenticateGoogle = () => {
    return new google.auth.GoogleAuth({
      keyFile: './data.json', // Replace with your service account key file path
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