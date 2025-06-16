import { Schema, model, models } from "mongoose";

const bikeDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    features: {
      engine: {
        type: {
          type: String,
          required: true,
        },
        displacement: {
          type: String,
          required: true,
        },
        power: {
          type: String,
          required: true,
        },
        torque: {
          type: String,
          required: true,
        },
        transmission: {
          type: String,
          required: true,
        },
        cooling: {
          type: String,
          required: true,
        },
      },
      dimensions: {
        length: {
          type: String,
          required: true,
        },
        width: {
          type: String,
          required: true,
        },
        height: {
          type: String,
          required: true,
        },
        wheelbase: {
          type: String,
          required: true,
        },
        groundClearance: {
          type: String,
          required: true,
        },
        seatHeight: {
          type: String,
          required: true,
        },
        fuelCapacity: {
          type: String,
          required: true,
        },
      },
      performance: {
        topSpeed: {
          type: String,
          required: true,
        },
        acceleration: {
          type: String,
          required: true,
        },
        mileage: {
          type: String,
          required: true,
        },
        braking: {
          type: String,
          required: true,
        },
      },
    },
    colors: [
      {
        name: { type: String, required: true },
        code: { type: String, required: true },
      },
    ],
    variants: [
      {
        name: { type: String, required: true },
        price: { type: String, required: true },
      },
    ],
    fileId: {
      type: String, // Google Drive fileId if needed
    },
  },
  {
    timestamps: true,
  }
);

const BikeDetails = models.BikeDetails || model("BikeDetails", bikeDetailsSchema);

export default BikeDetails;
