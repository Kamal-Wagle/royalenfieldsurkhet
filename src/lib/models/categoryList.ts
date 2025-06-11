// lib/models/categoryList.ts
import { Schema, model, models } from "mongoose";

const categoryListSchema = new Schema(
  {
    categories: {
      type: [String], // array of strings
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

const CategoryList = models.CategoryList || model("CategoryList", categoryListSchema);

export default CategoryList;
