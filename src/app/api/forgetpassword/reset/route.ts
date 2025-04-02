import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/lib/emailServices";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const { email, otp } = await request.json();
        if (!email || !otp) return NextResponse.json({ error: "Email and OTP are required" }, { status: 400 });

        const user = await User.findOne({ email });
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        // Validate OTP again before resetting password
        if (user.resetOtp !== otp || Date.now() > user.otpExpires) {
            return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 });
        }

        // Generate new random password
        const newPassword = Math.random().toString(36).slice(-8); // 8-char random password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Save new password and clear OTP data
        user.password = hashedPassword;
        user.resetOtp = undefined;
        user.otpExpires = undefined;
        await user.save();

        // Send the new password via email
        await sendEmail(email, `Your new password is: ${newPassword}`);

        return NextResponse.json({ message: "New password has been sent to your email" }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
