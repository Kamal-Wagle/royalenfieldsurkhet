import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { verifyAdmin } from "@/lib/auth";
import Event from "@/lib/models/event";

// Get an event by ID (GET)
export async function GET(request: NextRequest) {
  try {
    // Extract ID from URL path
    const id = request.nextUrl.pathname.split('/').pop();

    if (!id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    await connectDB();

    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Event fetched successfully",
      success: true,
      event,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

// Update event by ID (PUT)
export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop();

    if (!id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    const reqBody = await request.json();
    const { eventName, eventdescprition, eventTag, date, time } = reqBody;

    await connectDB();

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) {
      return user; // Unauthorized
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { eventName, eventdescprition, eventTag, date, time },
      { new: true }
    );

    if (!updatedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Event updated successfully",
      success: true,
      updatedEvent,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}

// Delete event by ID (DELETE)
export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop();

    if (!id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    await connectDB();

    const user = await verifyAdmin(request);
    if (user instanceof NextResponse) {
      return user; // Unauthorized
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Event deleted successfully",
      success: true,
      deletedEvent,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
