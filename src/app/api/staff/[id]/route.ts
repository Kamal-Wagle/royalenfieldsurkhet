import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Staff from "@/lib/models/staff";
import { verifyAdmin } from "@/lib/auth";

// Get a staff member by ID (GET)
export async function GET(request: NextRequest) {
    try {
        const id = request.nextUrl.pathname.split('/').pop();

        if (!id) {
            return NextResponse.json({ error: "Staff ID is required" }, { status: 400 });
        }

        await connectDB();

        const staffMember = await Staff.findById(id);

        if (!staffMember) {
            return NextResponse.json({ error: "Staff member not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Staff member fetched successfully",
            success: true,
            staff: staffMember,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}

// Update staff member by ID (PUT)
export async function PUT(request: NextRequest) {
    try {
        const id = request.nextUrl.pathname.split('/').pop();
        const reqBody = await request.json();
        const { name, email, contactNumber, staffPhoto, role } = reqBody;

        if (!id) {
            return NextResponse.json({ error: "Staff ID is required" }, { status: 400 });
        }

        await connectDB();

        const user = await verifyAdmin(request);
        if (user instanceof NextResponse) {
            return user;
        }

        const updatedStaff = await Staff.findByIdAndUpdate(
            id,
            { name, email, contactNumber, staffPhoto, role },
            { new: true }
        );

        if (!updatedStaff) {
            return NextResponse.json({ error: "Staff member not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Staff member updated successfully",
            success: true,
            staff: updatedStaff,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}

// Delete staff member by ID (DELETE)
export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.pathname.split('/').pop();

        if (!id) {
            return NextResponse.json({ error: "Staff ID is required" }, { status: 400 });
        }

        await connectDB();

        const user = await verifyAdmin(request);
        if (user instanceof NextResponse) {
            return user;
        }

        const deletedStaff = await Staff.findByIdAndDelete(id);

        if (!deletedStaff) {
            return NextResponse.json({ error: "Staff member not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Staff member deleted successfully",
            success: true,
            staff: deletedStaff,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}
