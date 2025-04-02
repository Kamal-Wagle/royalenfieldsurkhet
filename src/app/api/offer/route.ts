import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Offer from "@/lib/models/offer"; // Import Offer model
import { verifyAdmin } from "@/lib/auth";

// Create a new offer (POST)
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, description, category, discountPercentage, imageUrl, isAvailable, remainingDays } = reqBody;

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        // If not an authorized admin, return Unauthorized response
        if (user instanceof NextResponse) {
            return user; // If `verifyAdmin` returns a NextResponse, it means the user is unauthorized
        }

        // Check if the offer already exists
        const existingOffer = await Offer.findOne({ name });

        if (existingOffer) {
            return NextResponse.json({ error: "Offer already exists" }, { status: 400 });
        }

        // Create a new offer
        const newOffer = new Offer({
            name,
            description,
            category,
            discountPercentage,
            imageUrl,
            isAvailable,
            remainingDays, // Add the remainingDays field
        });

        // Save the new offer to the database
        const savedOffer = await newOffer.save();

        return NextResponse.json({
            message: "Offer created successfully",
            success: true,
            savedOffer,
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

// Get all offer items (GET)
export async function GET() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all offer items from the database
        const offerList = await Offer.find();

        return NextResponse.json({
            message: "Offer items fetched successfully",
            success: true,
            offerList,
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
