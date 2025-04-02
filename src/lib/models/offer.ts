import { Schema, model, models } from "mongoose";

// Define the offer schema
const offerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 255,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  isAvailable: {
    type: String,
    enum: ["available", "unavailable"],
    required: true,
  },
  remainingDays: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model overwriting by checking if it's already defined
const Offer = models.Offer || model("Offer", offerSchema);

export default Offer;
