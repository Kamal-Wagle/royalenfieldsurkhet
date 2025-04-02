import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Offer from "@/lib/models/offer"; // Import Offer model
import { verifyAdmin } from "@/lib/auth";

// Get an offer by ID (GET)
export async function GET(request: NextRequest) {
    try {
        // Extracting ID from the URL path
        const id = request.nextUrl.pathname.split('/').pop();

        if (!id) {
            return NextResponse.json({ error: "Offer ID is required" }, { status: 400 });
        }

        console.log(id);

        // Connect to the database
        await connectDB();

        // Find the offer by ID
        const offer = await Offer.findById(id);

        if (!offer) {
            return NextResponse.json({ error: "Offer not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Offer fetched successfully",
            success: true,
            offer,
        });
    } catch (error: unknown) {
        // Handle unknown errors safely
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}

// Update offer by ID (PUT)
export async function PUT(request: NextRequest) {
    try {
        // Extracting ID from the URL path
        const id = request.nextUrl.pathname.split('/').pop();

        const reqBody = await request.json();
        console.log(reqBody);

        const { name, description, category, discountPercentage, imageUrl, isAvailable, remainingDays } = reqBody;

        if (!id) {
            return NextResponse.json({ error: "Offer ID is required" }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        // If not an authorized admin, return Unauthorized response
        if (user instanceof NextResponse) {
            return user;  // If `verifyAdmin` returns a NextResponse, it means the user is unauthorized
        }

        // Find the offer by ID and update it
        const updatedOffer = await Offer.findByIdAndUpdate(
            id,
            { name, description, category, discountPercentage, imageUrl, isAvailable, remainingDays },
            { new: true }
        );

        if (!updatedOffer) {
            return NextResponse.json({ error: "Offer not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Offer updated successfully",
            success: true,
            updatedOffer,
        });
    } catch (error: unknown) {
        // Handle unknown errors safely
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}

// Delete offer by ID (DELETE)
export async function DELETE(request: NextRequest) {
    try {
        // Extracting ID from the URL path
        const id = request.nextUrl.pathname.split('/').pop();

        if (!id) {
            return NextResponse.json({ error: "Offer ID is required" }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        // If not an authorized admin, return Unauthorized response
        if (user instanceof NextResponse) {
            return user;  // If `verifyAdmin` returns a NextResponse, it means the user is unauthorized
        }

        // Find the offer by ID and delete it
        const deletedOffer = await Offer.findByIdAndDelete(id);

        if (!deletedOffer) {
            return NextResponse.json({ error: "Offer not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Offer deleted successfully",
            success: true,
            deletedOffer,
        });
    } catch (error: unknown) {
        // Handle unknown errors safely
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
        }
    }
}
