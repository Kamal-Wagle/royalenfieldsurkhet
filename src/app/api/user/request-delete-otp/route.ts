import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
import { sendOtpEmailfordelete } from "@/lib/sendOtpEmailfordelete";
import { verifyAdmin } from "@/lib/auth";

export async function POST(request: NextRequest) {
    try {
        // Check if the request is coming from an authenticated admin
        const verified = await verifyAdmin(request);
        if (verified instanceof NextResponse) {
            return verified;  // Unauthorized response
        }

        await connectDB();

        // Get ID from request
        const { id } = await request.json();
        if (!id) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        // Find user by ID
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Check if the user is an admin
        if (user.role === "admin") {
            const adminCount = await User.countDocuments({ role: "admin" });

            // Prevent deleting the last admin
            if (adminCount <= 1) {
                return NextResponse.json({ error: "Cannot delete the last admin" }, { status: 403 });
            }
        }

        // Generate OTP and expiration time
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.resetOtp = otp;
        user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
        await user.save();

        // Send OTP email
        await sendOtpEmailfordelete(otp);

        return NextResponse.json({ message: "OTP sent to user's email" }, { status: 200 });

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}
