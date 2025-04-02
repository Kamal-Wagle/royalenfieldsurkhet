import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Menu from "@/lib/models/menu";
import { verifyAdmin } from "@/lib/auth";

// Create a new menu item (POST)
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, description, price, category, imageUrl, isAvailable } = reqBody;
        console.log("Received request body:", reqBody);

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);
        if (user instanceof NextResponse) {
            return user; // If `verifyAdmin` returns a NextResponse, it means the user is unauthorized
        }

        // Check if the menu item already exists
        const existingItem = await Menu.findOne({ name });

        if (existingItem) {
            return NextResponse.json({ error: "Menu item already exists" }, { status: 400 });
        }

        // Create a new menu item
        const newMenuItem = new Menu({
            name,
            description,
            price,
            category,
            imageUrl,
            isAvailable,
        });

        // Save the new menu item to the database
        const savedMenuItem = await newMenuItem.save();

        return NextResponse.json({
            message: "Menu item created successfully",
            success: true,
            savedMenuItem,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error creating menu item:", error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

// Get all menu items (GET)
export async function GET() {
    try {
        // Connect to the database
        await connectDB();

        // Fetch all menu items from the database
        const menuItems = await Menu.find();

        return NextResponse.json({
            message: "Menu items fetched successfully",
            success: true,
            menuItems,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
