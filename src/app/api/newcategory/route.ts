import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import CategoryList from "@/lib/models/categoryList";
import { verifyAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const user = await verifyAdmin(req);
    if (user instanceof NextResponse) return user;

    const { imageCategory } = await req.json();

    if (!imageCategory || typeof imageCategory !== "string") {
      return NextResponse.json({ error: "Category is required" }, { status: 400 });
    }

    // Find or create a single category document
    let categoryDoc = await CategoryList.findOne();

    if (!categoryDoc) {
      categoryDoc = await CategoryList.create({ categories: [imageCategory] });
    } else {
      if (categoryDoc.categories.includes(imageCategory)) {
        return NextResponse.json({ error: "Category already exists" }, { status: 409 });
      }
      categoryDoc.categories.push(imageCategory);
      await categoryDoc.save();
    }

    return NextResponse.json({
      message: "Category added successfully",
      categories: categoryDoc.categories,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// GET /api/gallery/category - get all categories
export async function GET() {
  try {
    await connectDB();

    const categoryDoc = await CategoryList.findOne();

    if (!categoryDoc) {
      // No categories yet
      return NextResponse.json({ categories: [] });
    }

    return NextResponse.json({ categories: categoryDoc.categories });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// DELETE /api/gallery/category - remove a specific category
export async function DELETE(req: NextRequest) {
    try {
      await connectDB();
  
      const user = await verifyAdmin(req);
      if (user instanceof NextResponse) return user;
  
      const { imageCategory } = await req.json();
  
      if (!imageCategory || typeof imageCategory !== "string") {
        return NextResponse.json({ error: "Category is required for deletion" }, { status: 400 });
      }
  
      const categoryDoc = await CategoryList.findOne();
  
      if (!categoryDoc) {
        return NextResponse.json({ error: "No category list found" }, { status: 404 });
      }
  
      if (!categoryDoc.categories.includes(imageCategory)) {
        return NextResponse.json({ error: "Category not found" }, { status: 404 });
      }
  
      categoryDoc.categories = categoryDoc.categories.filter((cat: string) => cat !== imageCategory);
      await categoryDoc.save();
  
      return NextResponse.json({
        message: "Category deleted successfully",
        categories: categoryDoc.categories,
      });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Server error";
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  }
  