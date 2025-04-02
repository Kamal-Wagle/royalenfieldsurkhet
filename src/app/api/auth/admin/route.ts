import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/models/user";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth"; // Import the verifyAdmin function

// Get All Admin List
export async function GET(request: NextRequest) {
  try {
    // Verify if the requester is an admin
    const user = await verifyAdmin(request); // This will check the user's token and role

    if (user instanceof NextResponse) {
      // If the response is an instance of NextResponse, it means the user is not authorized
      return user; // Return the unauthorized response
    }
    
    await connectDB();

    // Fetch all users with the role of 'admin'
    const admins = await User.find({ role: "admin" });

    // Return the list of admins
    return NextResponse.json({
      message: "Admins retrieved successfully",
      admins,
    }, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
