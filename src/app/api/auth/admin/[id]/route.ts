import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import bcrypt from "bcryptjs";

// 🔹 Get Single Admin
export async function GET(
  request: NextRequest
) {
  try {
    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Access the id parameter directly from the URL
    const id = request.nextUrl.pathname.split('/').pop();
    
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const admin = await User.findById(id);
    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Admin retrieved successfully", admin }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

// 🔹 Update an Admin
export async function PUT(
  request: NextRequest
) {
  try {
    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Access the id parameter directly from the URL
    const id = request.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const { name, email, password } = await request.json();

    const admin = await User.findById(id);
    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    if (name) admin.name = name;
    if (email) admin.email = email;
    if (password) admin.password = await bcrypt.hash(password, 10);

    await admin.save();
    return NextResponse.json({ message: "Admin updated successfully", admin }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

// 🔹 Delete an Admin
export async function DELETE(
  request: NextRequest
) {
  try {
    await connectDB();
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Access the id parameter directly from the URL
    const id = request.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const admin = await User.findById(id);
    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "Admin deleted successfully" }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
