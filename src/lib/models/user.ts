import { Schema, model, models } from "mongoose";

// Define the user schema
const userSchema = new Schema({
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
  userPhoto:{
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ["admin", "staff"],
  },
  resetOtp: {   // Add resetOtp field
    type: String,
    default: "",
  },
  otpExpires: {   // Add otpExpires field (timestamp for OTP expiry)
    type: Number,
    default: 0,
  }
});

// Prevent model overwriting by checking if it's already defined
const User = models.User || model("User", userSchema);

export default User;
