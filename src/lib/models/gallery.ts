import { Schema, model, models } from "mongoose";

const gallerySchema = new Schema(
  {
    src: {
      type: String,
      required: true,      // URL of the image, required
    },
    fileId: {
      type: String, // Google Drive file ID for deleting/updating files
      required: false,
    },
    category: {
      type: String,
      required: true,      // Category like "College Images", "Welcome Program 2025", etc.
    },
    createdAt: {
      type: Date,
      default: Date.now,   // Date when the image was created/uploaded
    },
  },
  { timestamps: true }      // This adds createdAt and updatedAt automatically
);

const Gallery = models.Gallery || model("Gallery", gallerySchema);

export default Gallery;
