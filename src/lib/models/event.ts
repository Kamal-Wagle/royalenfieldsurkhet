import mongoose, {  model, models } from "mongoose";

// Define the school Event schema
const eventSchema = new mongoose.Schema(
  {
    eventName: { type: String, required: true },    
    eventdescprition: { type: String, required: true }, // write details about it
    eventTag: { type: String, required: true },         // tag like acedemic , sport , cultral
    date: { type: String, required: true },         // date like 18 june ok
    time: { type: String, required: true },         // time like 9:00 AM - 4:00 PM

  },
  {
    timestamps: true // Adds createdAt and updatedAt automatically
  }
);


const Event = models.Event || model("Event", eventSchema);

export default Event;
