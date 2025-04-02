'use client';


import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik"; // Import Formik
import { menuValidationSchema } from "@/lib/validation/validation";

// Predefined categories from the model
const categories: string[] = ["starter", "main course", "dessert", "beverages"]; // Explicit type for categories

// API call function to add menu item
const addMenuItem = async (menuItem: {
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  isAvailable: string;
}) => {
  const response = await $axios.post("/api/menu", menuItem);
  return response.data;
};

export default function AddMenuPage() {
  const router = useRouter();

  // Formik setup
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
      imageUrl: "",
      isAvailable: "available"
    },
    validationSchema: menuValidationSchema,
    onSubmit: (values) => {
      mutate(values);
    }
  });

  // Define a type for the error
  interface CustomError {
    response?: {
      data?: {
        message?: string;
      };
    };
  }

  // Using TanStack Query's useMutation to handle POST request
  const mutation = useMutation({
    mutationFn: addMenuItem,
    onSuccess: () => {
      toast.success("Menu item added successfully!");
      router.push("/admin/menu");
    },
    onError: (err: CustomError) => {
      const errorMessage = err.response?.data?.message || "Failed to add menu item.";
      toast.error(errorMessage);
      console.error("Error adding menu item:", err);
    }
  });

  // Access the properties from the mutation object
  const { mutate, isPending, isError, error, isSuccess } = mutation;

  // Use isSuccess to display a success message
  if (isSuccess) {
    console.log("Menu item was successfully added!");
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Menu Item</h1>

      <div className="bg-white p-6 shadow-md rounded-lg max-w-6xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <Label>Name</Label>
              <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter item name"
                className="w-full mt-1"
              />
              {touched.name && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Category */}
            <div>
              <Label>Category</Label>
              <Select
                value={values.category}
                onValueChange={(value) => setFieldValue("category", value)}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {touched.category && errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
            </div>

            {/* Description */}
            <div className="col-span-2">
              <Label>Description</Label>
              <Input
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter description"
                className="w-full mt-1"
              />
              {touched.description && errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            {/* Price */}
            <div>
              <Label>Price</Label>
              <Input
                type="text"
                name="price"
                value={values.price}
                onChange={(e) => {
                  // Only allow numeric input
                  const value = e.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setFieldValue("price", value);
                  }
                }}
                onBlur={handleBlur}
                placeholder="Enter price"
                className="w-full mt-1"
              />
              {touched.price && errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
            </div>

            {/* Image URL */}
            <div>
              <Label>Image URL</Label>
              <Input
                name="imageUrl"
                value={values.imageUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter image URL"
                className="w-full mt-1"
              />
              {touched.imageUrl && errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl}</p>}
            </div>

            {/* Status */}
            <div>
              <Label>Status</Label>
              <Select
                value={values.isAvailable}
                onValueChange={(value) => setFieldValue("isAvailable", value)}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="unavailable">Unavailable</SelectItem>
                </SelectContent>
              </Select>
              {touched.isAvailable && errors.isAvailable && <p className="text-red-500 text-sm">{errors.isAvailable}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white"
            disabled={isPending}
          >
            {isPending ? "Adding..." : "Add Item"}
          </Button>
        </form>
      </div>

      {/* Display error if any */}
      {isError && (
        <p className="mt-4 text-red-500">
          {(error as CustomError)?.response?.data?.message || "An error occurred."}
        </p>
      )}
    </div>
  );
}
