import mongoose, {  model, models } from "mongoose";

// Define the school notice schema
const noticeSchema = new mongoose.Schema(
  {
    noticeTitle: { type: String, required: true },
    noticeDescription: { type: String, required: true },
    noticeCategory: { type: String, required: true },
    fileId: { type: String, required: true },
    link: { type: String, required: true },
    originalName: { type: String, required: true },
    mimeType: { type: String, required: true },
  },
  { timestamps: true }
);


const Notice = models.Notice || model("Notice", noticeSchema);

export default Notice;
