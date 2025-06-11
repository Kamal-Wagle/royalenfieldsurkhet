import mongoose, {  model, models } from "mongoose";

// Define the school Elibrary schema
const elibrarySchema = new mongoose.Schema(
  {
    documentName: { type: String, required: true }, 
    fileId: { type: String, required: true },       // Google Drive file ID
    link: { type: String, required: true },         // Shareable Google Drive link
    originalName: { type: String, required: true }, // Original file name
    mimeType: { type: String, required: true },     // File mime type
  },
  {
    timestamps: true // Adds createdAt and updatedAt automatically
  }
);


const Elibrary = models.Elibrary || model("Elibrary", elibrarySchema);

export default Elibrary;
