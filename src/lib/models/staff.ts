import { Schema, model, models } from "mongoose";

const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  qualifications: [{ type: String, trim: true }],
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  employmentType: { type: String, enum: ['Full-time', 'Part-time', 'Contract'], default: 'Full-time' },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 65,
    unique: true,
    lowercase: true,
  },
  staffPhoto: {
    type: String, // Google Drive webViewLink
    required: false,
  },
  fileId: {
    type: String, // Google Drive file ID for deleting/updating files
    required: false,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

const Staff = models.Staff || model("Staff", staffSchema);

export default Staff;
