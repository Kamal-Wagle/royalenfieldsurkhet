import { Schema, model, models } from "mongoose";

const albumSchema = new Schema(
  {
    albumName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagesUrl: {
      type: [String], // Array of image URLs
      required: true,
    },
    fileId: {
      type: String, // Optional Google Drive file ID
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const Album = models.Album || model("Album", albumSchema);

export default Album;
