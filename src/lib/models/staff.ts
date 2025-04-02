import { Schema, model, models } from "mongoose";

// Define the staff schema
const staffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 65,
      unique: true,
      lowercase: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: 15, // Limited to common phone number lengths
      match: [/^\d{7,15}$/, "Invalid phone number"], // Basic validation for digits only
    },
    staffPhoto: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255, // Increased to accommodate long image URLs
    },
    role: {
      type: String,
      required: true,
      trim: true,
      enum: ["cook", "staff", "bartender", "worker", "cleaner"], // Fixed "cleaner" typo
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Prevent model overwriting by checking if it's already defined
const Staff = models.Staff || model("Staff", staffSchema);

export default Staff;
