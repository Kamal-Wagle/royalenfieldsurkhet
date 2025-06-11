import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import Staff from "@/lib/models/staff";

interface UploadFile {
  name: string;
  content: string;
  mimeType?: string;
}

// Google Drive auth
const authenticateGoogle = () => {
  return new google.auth.GoogleAuth({
    keyFile: './data.json',
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
};

// Upload file to Google Drive
const uploadFileToDrive = async (folderId: string, file: UploadFile) => {
  const auth = authenticateGoogle();
  const drive = google.drive({ version: "v3", auth });

  const buffer = Buffer.from(file.content, "base64");

  const fileMetadata = {
    name: file.name,
    parents: [folderId],
  };

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: {
      mimeType: file.mimeType || "application/octet-stream",
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
    mimeType: file.mimeType || "application/octet-stream",
  };
};

// GET staff by ID
export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Staff ID required" }, { status: 400 });

    await connectDB();
    const staff = await Staff.findById(id);
    if (!staff) return NextResponse.json({ error: "Staff not found" }, { status: 404 });

    return NextResponse.json({ message: "Staff fetched successfully", success: true, staff });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// DELETE staff
// delete Operation ok
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    console.log("DELETE API called. Extracted staff id:", id);

    if (!id) {
      console.log("No staff ID provided in the request URL.");
      return NextResponse.json({ error: "Staff ID is required" }, { status: 400 });
    }

    await connectDB();
    console.log("Connected to MongoDB.");

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) {
      console.log("Admin verification failed or unauthorized.");
      return user;
    }
    console.log("Admin verified successfully.");

    const staff = await Staff.findById(id);
    if (!staff) {
      console.log("Staff not found with ID:", id);
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }
    console.log("Staff found:", staff);

    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });
    console.log("Google Drive client initialized.");

    if (staff.fileId) {
      try {
        console.log("Attempting to delete Google Drive file with ID:", staff.fileId);
        await drive.files.delete({ fileId: staff.fileId });
        console.log("Google Drive file deleted successfully.");
      } catch (err) {
        console.error("Failed to delete file from Google Drive:", err);
        // You can decide whether to proceed or return error here.
      }
    } else {
      console.log("No Google Drive fileId found on staff record, skipping Drive deletion.");
    }

    console.log("Deleting staff record from MongoDB.");
    const deletedResult = await Staff.findByIdAndDelete(id);

    if (!deletedResult) {
      console.log("Failed to delete staff record from MongoDB.");
      return NextResponse.json({ error: "Failed to delete staff record" }, { status: 500 });
    }
    console.log("Staff record deleted successfully:", deletedResult);

    return NextResponse.json({
      message: "Staff and Google Drive file deleted successfully",
      success: true,
      deletedResult,
    });
  } catch (error) {
    console.error("Error in DELETE API:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


// UPDATE staff
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split("/").pop();
    if (!id) return NextResponse.json({ error: "Staff ID required" }, { status: 400 });

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "multipart/form-data not supported" }, { status: 400 });
    }

    const body = await request.json();
    const {
      name,
      contactNumber,
      email,
      role,
      qualifications,
      gender,
      employmentType,
      file,
    } = body;

    const folderId = process.env.GDRIVE_Staff_FOLDER_ID;
    if (!folderId) throw new Error("Missing GDRIVE_Staff_FOLDER_ID");

    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return user;

    const staff = await Staff.findById(id);
    if (!staff) return NextResponse.json({ error: "Staff not found" }, { status: 404 });

    const auth = authenticateGoogle();
    const drive = google.drive({ version: "v3", auth });

    let updatedFileData = {};
    if (file) {
      try {
        if (staff.fileId) {
          await drive.files.delete({ fileId: staff.fileId });
        }
      } catch (err) {
        console.warn("Previous file delete failed:", err);
      }

      const uploaded = await uploadFileToDrive(folderId, file as UploadFile);
      updatedFileData = {
        fileId: uploaded.id,
        staffPhoto: uploaded.link,
      };
    }

    const updatedStaff = await Staff.findByIdAndUpdate(
      id,
      {
        name: name ?? staff.name,
        contactNumber: contactNumber ?? staff.contactNumber,
        email: email ?? staff.email,
        role: role ?? staff.role,
        gender: gender ?? staff.gender,
        employmentType: employmentType ?? staff.employmentType,
        qualifications: qualifications ?? staff.qualifications,
        ...updatedFileData,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Staff updated successfully .",
      success: true,
      updatedStaff,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
