import mongoose, { model, models } from "mongoose";

// Define the school Result schema
const resultSchema = new mongoose.Schema(
  {
    resultTitle: { type: String, required: true },
    examType: { type: String, required: true },
    class: { type: String, required: true },
    statistics: { type: String, required: true },
    session: { type: String, required: true },    
    fileId: { type: String, required: true },       // Google Drive file ID
    link: { type: String, required: true },         // Shareable Google Drive link
    originalName: { type: String, required: true }, // Original file name
    mimeType: { type: String, required: true },     // File mime type
    totalStudents: { type: Number },                // Total number of students
    passPercentage: { type: Number },               // Pass percentage
  },
  {
    timestamps: true // Adds createdAt and updatedAt automatically
  }
);

const Result = models.Result || model("Result", resultSchema);

export default Result;
