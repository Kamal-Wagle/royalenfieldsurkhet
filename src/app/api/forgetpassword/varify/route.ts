import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
// import { sendEmail } from "@/lib/emailServices";
import bcrypt from "bcryptjs";

// In your API for verifying OTP and resetting password
export async function POST(request: NextRequest) {
    try {
        const { email, otp, newPassword } = await request.json();

        // Connect to the database
        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Check if OTP matches and is not expired
        if (user.resetOtp !== otp || Date.now() > user.otpExpires) {
            return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
        }

        // OTP is valid, reset the password
        user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
        user.resetOtp = "";  // Clear OTP after successful password reset
        user.otpExpires = 0;  // Clear OTP expiry

        await user.save();

        // // Send email to the user confirming the password reset (optional)
        // await sendEmail(user.email);  // Your email confirmation function

        return NextResponse.json({ message: "Password reset successfully" }, { status: 200 });

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
