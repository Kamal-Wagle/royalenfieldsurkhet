import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const varified = await verifyAdmin(request);

        if (varified instanceof NextResponse) {
            return varified;  // If `verifyAdmin` returns a NextResponse, the user is unauthorized
        }
        
        const { id, otp } = await request.json(); // Get ID & OTP from frontend

        if (!id || !otp) {
            return NextResponse.json({ error: "User ID and OTP are required" }, { status: 400 });
        }

        // Find user by ID
        const user = await User.findById(id);
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        // Validate OTP
        if (user.resetOtp !== otp || user.otpExpires < Date.now()) {
            return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
        }

        // Delete user from database
        await User.deleteOne({ _id: id });

        return NextResponse.json({ message: "Account deleted successfully" }, { status: 200 });

    } catch (error: unknown) {
        // Narrow the type of error to Error
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        // Handle unexpected errors if needed
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
