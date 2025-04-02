import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Staff from "@/lib/models/staff";
import { verifyAdmin } from "@/lib/auth";

// Create a new staff member (POST)
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, contactNumber, staffPhoto, role } = reqBody;
        console.log(reqBody);

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        if (user instanceof NextResponse) {
            return user;  // If `verifyAdmin` returns a NextResponse, the user is unauthorized
        }

        // Check if the staff member already exists (by email)
        const existingStaff = await Staff.findOne({ email });

        if (existingStaff) {
            return NextResponse.json({ error: "Staff member already exists" }, { status: 400 });
        }

        // Create a new staff member
        const newStaff = new Staff({
            name,
            email,
            contactNumber,
            staffPhoto,
            role,
        });

        // Save the new staff member to the database
        const savedStaff = await newStaff.save();

        return NextResponse.json({
            message: "Staff member created successfully",
            success: true,
            savedStaff,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}

// Get all staff members (GET)
export async function GET() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all staff members from the database
        const staffMembers = await Staff.find();

        return NextResponse.json({
            message: "Staff members fetched successfully",
            success: true,
            staffMembers,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}
