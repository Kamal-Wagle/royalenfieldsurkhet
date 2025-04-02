import * as Yup from "yup";

// Yup validation schema for menu item form
export const menuValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .max(50, "Name must be less than or equal to 50 characters"),
  description: Yup.string()
    .required("Description is required")
    .max(255, "Description must be less than or equal to 255 characters"),
  category: Yup.string()
    .oneOf(["starter", "main course", "dessert", "beverages"], "Invalid category")
    .required("Category is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  imageUrl: Yup.string()
    .required("Image URL is required")
    .url("Invalid URL format"),
  isAvailable: Yup.string()
    .oneOf(["available", "unavailable"], "Invalid availability status")
    .required("Availability status is required"),
});
