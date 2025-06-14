'use client';

import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

// ✅ Yup schema for bike fields
const bikeValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  price: Yup.string().required("Price is required"),
  year: Yup.string().required("Year is required"),
  mileage: Yup.string().required("Mileage is required"),
  condition: Yup.string().required("Condition is required"),
  type: Yup.string().required("Type is required"),
  brand: Yup.string().required("Brand is required"),
  engine: Yup.string().required("Engine is required"),
  fuelType: Yup.string().required("Fuel type is required"),
  transmission: Yup.string().required("Transmission is required"),
  color: Yup.string().required("Color is required"),
  owners: Yup.string().required("Ownership detail is required"),
  insurance: Yup.string().required("Insurance is required"),
  registration: Yup.string().required("Registration is required"),
  description: Yup.string().required("Description is required"),
  features: Yup.string().required("Features (JSON string) required"),
  specifications: Yup.string().required("Specifications (JSON string) required"),
  images: Yup.mixed().required("At least one image is required"),
});

interface BikePayload {
  name: string;
  price: string;
  year: string;
  mileage: string;
  condition: string;
  type: string;
  brand: string;
  engine: string;
  fuelType: string;
  transmission: string;
  color: string;
  owners: string;
  insurance: string;
  registration: string;
  description: string;
  features: string;
  specifications: string;
  images: FileList | null;
}

const addBike = async (data: FormData) => {
  const response = await $axios.post("/api/bike", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export default function AddBikePage() {
  const router = useRouter();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik<BikePayload>({
    initialValues: {
      name: "",
      price: "",
      year: "",
      mileage: "",
      condition: "",
      type: "",
      brand: "",
      engine: "",
      fuelType: "",
      transmission: "",
      color: "",
      owners: "",
      insurance: "",
      registration: "",
      description: "",
      features: '["Electric Start", "LED Headlight"]', // Default JSON
      specifications: '{"Engine Displacement":"125cc"}', // Default JSON
      images: null,
    },
    validationSchema: bikeValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "images" && value instanceof FileList) {
          Array.from(value).forEach((file) => formData.append("images", file));
        } else {
          formData.append(key, value as string);
        }
      });
      mutate(formData);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addBike,
    onSuccess: () => {
      toast.success("Bike uploaded successfully!");
      resetForm();
      router.push("/admin/bike");
    },
    onError: (err: Error) => {
      toast.error(err.message || "Failed to upload.");
    },
  });

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Upload Bike</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
        {[
          "name", "price", "year", "mileage", "condition", "type", "brand",
          "engine", "fuelType", "transmission", "color", "owners", "insurance", "registration"
        ].map((field) => (
          <div key={field}>
            <Label htmlFor={field}>{field}</Label>
            <Input
              id={field}
              name={field}
              value={values[field as keyof Omit<BikePayload, 'images'>] as string}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={`Enter ${field}`}
            />
            {touched[field as keyof Omit<BikePayload, 'images'>] && errors[field as keyof Omit<BikePayload, 'images'>] && (
              <p className="text-sm text-red-500">{errors[field as keyof Omit<BikePayload, 'images'>]}</p>
            )}
          </div>
        ))}

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={3}
          />
          {touched.description && errors.description && (
            <p className="text-sm text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Features (JSON) */}
        <div>
          <Label htmlFor="features">Features (JSON Array)</Label>
          <Textarea
            id="features"
            name="features"
            value={values.features}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='e.g. ["Electric Start", "LED Headlight"]'
          />
          {touched.features && errors.features && (
            <p className="text-sm text-red-500">{errors.features}</p>
          )}
        </div>

        {/* Specifications (JSON) */}
        <div>
          <Label htmlFor="specifications">Specifications (JSON Object)</Label>
          <Textarea
            id="specifications"
            name="specifications"
            value={values.specifications}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='e.g. {"Engine Displacement": "125cc"}'
          />
          {touched.specifications && errors.specifications && (
            <p className="text-sm text-red-500">{errors.specifications}</p>
          )}
        </div>

        {/* Images */}
        <div>
          <Label htmlFor="images">Images (select multiple)</Label>
          <Input
            id="images"
            name="images"
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setFieldValue("images", e.currentTarget.files)}
          />
          {touched.images && errors.images && (
            <p className="text-sm text-red-500">{errors.images as string}</p>
          )}
        </div>

        <Button type="submit" disabled={isPending} className="w-full bg-blue-600 text-white">
          {isPending ? "Uploading..." : "Upload Bike"}
        </Button>
      </form>
    </div>
  );
}
