import mongoose, { model, models } from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: true },
    fileId: { type: String, required: true },
    link: { type: String, required: true },
    originalName: { type: String, required: true },
    mimeType: { type: String, required: true },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const News = models.News || model("News", newsSchema);

export default News;
