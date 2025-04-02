import { NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function POST() {
  try {
    await connectDB();

    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );

    // Remove the token cookie by setting it to an empty value and expiring it immediately
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // Expire immediately
      path: "/", // Ensure it clears from all paths
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
