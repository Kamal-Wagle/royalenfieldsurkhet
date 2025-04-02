import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Menu from "@/lib/models/menu";
import { verifyAdmin } from "@/lib/auth";

// Get a menu item by ID (GET)
export async function GET(request: NextRequest) {
    try {
        // Extracting ID from the URL path
        const id = request.nextUrl.pathname.split('/').pop();

        if (!id) {
            return NextResponse.json({ error: "Menu item ID is required" }, { status: 400 });
        }

        console.log(id);

        // Connect to the database
        await connectDB();

        // Find the menu item by ID
        const menuItem = await Menu.findById(id);

        if (!menuItem) {
            return NextResponse.json({ error: "Menu item not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Menu item fetched successfully",
            success: true,
            menuItem,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

// Update menu item by ID (PUT)
export async function PUT(request: NextRequest) {
    try {
        // Extracting ID from the URL path
        const id = request.nextUrl.pathname.split('/').pop();

        const reqBody = await request.json();
        console.log(reqBody);

        const { name, description, price, category, imageUrl, isAvailable } = reqBody;

        if (!id) {
            return NextResponse.json({ error: "Menu item ID is required" }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        // If not an authorized admin, return Unauthorized response
        if (user instanceof NextResponse) {
            return user; // If `verifyAdmin` returns a NextResponse, it means the user is unauthorized
        }

        // Find the menu item by ID and update it
        const updatedMenuItem = await Menu.findByIdAndUpdate(
            id,
            { name, description, price, category, imageUrl, isAvailable },
            { new: true }
        );

        if (!updatedMenuItem) {
            return NextResponse.json({ error: "Menu item not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Menu item updated successfully",
            success: true,
            updatedMenuItem,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

// Delete menu item by ID (DELETE)
export async function DELETE(request: NextRequest) {
    try {
        // Extracting ID from the URL path
        const id = request.nextUrl.pathname.split('/').pop();

        if (!id) {
            return NextResponse.json({ error: "Menu item ID is required" }, { status: 400 });
        }

        // Connect to the database
        await connectDB();

        // Check if the request is coming from an authenticated admin
        const user = await verifyAdmin(request);

        // If not an authorized admin, return Unauthorized response
        if (user instanceof NextResponse) {
            return user;  // If `verifyAdmin` returns a NextResponse, it means the user is unauthorized
        }

        // Find the menu item by ID and delete it
        const deletedMenuItem = await Menu.findByIdAndDelete(id);

        if (!deletedMenuItem) {
            return NextResponse.json({ error: "Menu item not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Menu item deleted successfully",
            success: true,
            deletedMenuItem,
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
