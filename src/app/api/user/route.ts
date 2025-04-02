import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";

// Create a new user member (POST)
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, password, userPhoto, role } = reqBody;

        // Validate required fields
        if (!name || !email || !password || !role) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        // If not an authorized admin, return Unauthorized response
        if (user instanceof NextResponse) {
            return user;  // If `verifyAdmin` returns a NextResponse, the user is unauthorized
        }

        // Check if the user already exists (by email)
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            userPhoto,
            role,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

// Get all staff members (GET)
export async function GET() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all staff members but exclude sensitive fields
        const userMembers = await User.find().select("-password -resetOtp -otpExpires");

        return NextResponse.json({
            message: "Staff members fetched successfully",
            success: true,
            userMembers,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
