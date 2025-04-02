"use client";

import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

// Define Offer Type
interface Offer {
  name: string;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
  isAvailable: string;
  remainingDays: number;
}

// API call function to add an offer
const addOffer = async (offer: Offer) => {
  const response = await $axios.post("/api/offer", offer);
  return response.data;
};

export default function AddOfferPage() {
  const router = useRouter();

  // Formik setup
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik<Offer>({
    initialValues: {
      name: "",
      description: "",
      category: "",
      discountPercentage: 0,
      imageUrl: "",
      isAvailable: "available",
      remainingDays: 0,
    },
    onSubmit: (values) => {
      mutation.mutate(values); // Trigger the mutation on form submit
    },
  });

  // Using TanStack Query's useMutation to handle POST request
  const mutation = useMutation({
    mutationFn: addOffer,
    onSuccess: () => {
      toast.success("Offer added successfully!");
      router.push("/admin/offer"); // Redirect to the offers page
    },
    onError: (err: unknown) => {
      if (err instanceof Error) {
        toast.error("Failed to add offer.");
        console.error("Error adding offer:", err.message);
      } else {
        toast.error("An unknown error occurred.");
        console.error("Unknown error adding offer:", err);
      }
    },
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Offer</h1>

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
                placeholder="Enter offer name"
                className="w-full mt-1"
              />
              {touched.name && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Category */}
            <div className="col-span-2">
              <Label>Category</Label>
              <Input
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter category"
                className="w-full mt-1"
              />
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

            {/* Discount Percentage */}
            <div>
              <Label>Discount Percentage</Label>
              <Input
                type="number"
                name="discountPercentage"
                value={values.discountPercentage}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter discount percentage"
                className="w-full mt-1"
              />
              {touched.discountPercentage && errors.discountPercentage && <p className="text-red-500 text-sm">{errors.discountPercentage}</p>}
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

            {/* Remaining Days */}
            <div>
              <Label>Remaining Days</Label>
              <Input
                type="number"
                name="remainingDays"
                value={values.remainingDays}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter remaining days"
                className="w-full mt-1"
              />
              {touched.remainingDays && errors.remainingDays && <p className="text-red-500 text-sm">{errors.remainingDays}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Adding..." : "Add Offer"}
          </Button>
        </form>
      </div>

      {/* Display error if any */}
      {mutation.isError && <p className="mt-4 text-red-500">{(mutation.error instanceof Error ? mutation.error.message : "Unknown error")}</p>}
    </div>
  );
}
