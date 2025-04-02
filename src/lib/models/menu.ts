import { Schema, model, models } from "mongoose";

// Define the restaurant menu schema
const menuSchema = new Schema({
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
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: ["starter", "main course", "dessert", "beverages"],
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  isAvailable: {
    type: String,
    enum: ["available", "not available"],
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
const Menu = models.Menu || model("Menu", menuSchema);

export default Menu;  