import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import Event from "@/lib/models/event";

// Create a new event (POST)
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { eventName, eventdescprition, eventTag, date, time } = reqBody;
    console.log("Received request body:", reqBody);

    // Connect to DB
    await connectDB();

    // Verify admin auth
    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) {
      return user; // Unauthorized response
    }

    // Check if event already exists by eventName
    const existingEvent = await Event.findOne({ eventName });

    if (existingEvent) {
      return NextResponse.json(
        { error: "Event with this name already exists" },
        { status: 400 }
      );
    }

    // Create new event document
    const newEvent = new Event({
      eventName,
      eventdescprition,
      eventTag,
      date,
      time,
    });

    // Save to DB
    const savedEvent = await newEvent.save();

    return NextResponse.json({
      message: "Event created successfully",
      success: true,
      savedEvent,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error creating event:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}

// Get all events (GET)
export async function GET() {
  try {
    await connectDB();

    // Fetch all events
    const eventsList = await Event.find();

    return NextResponse.json({
      message: "Events fetched successfully",
      success: true,
      eventsList,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
