import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/lib/models/user";

// Register admin
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);

        const { name, email, password, role } = reqBody;

        // Connect to the database
        await connectDB();

        // Check if the user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Send verification email (commented out for now)
        // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

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
