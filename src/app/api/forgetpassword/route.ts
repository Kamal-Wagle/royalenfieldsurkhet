import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
import { sendEmail } from "@/lib/emailServices";

// for forget password Send otp to email
export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const { email } = await request.json();
        if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

        const user = await User.findOne({ email });
        console.log(user);
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        // Generate OTP and expiration time
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.resetOtp = otp;
        user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
        await user.save();

        // Send OTP email
        await sendEmail(email, otp);

        return NextResponse.json({ message: "OTP sent to email" }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}