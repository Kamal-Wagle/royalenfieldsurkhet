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
  description: Yup.string().required("Description is required"),
  originalPrice: Yup.string().required("Original price is required"),
  category: Yup.string().required("Category is required"),
  badge: Yup.string().required("Badge is required"),
  price: Yup.string().required("Price is required"),
  images: Yup.mixed().required("At least one image is required"),
  features: Yup.object({
    engine: Yup.object({
      type: Yup.string().required("Engine type is required"),
      displacement: Yup.string().required("Displacement is required"),
      power: Yup.string().required("Power is required"),
      torque: Yup.string().required("Torque is required"),
      transmission: Yup.string().required("Transmission is required"),
      cooling: Yup.string().required("Cooling type is required")
    }),
    dimensions: Yup.object({
      length: Yup.string().required("Length is required"),
      width: Yup.string().required("Width is required"),
      height: Yup.string().required("Height is required"),
      wheelbase: Yup.string().required("Wheelbase is required"),
      groundClearance: Yup.string().required("Ground clearance is required"),
      seatHeight: Yup.string().required("Seat height is required"),
      fuelCapacity: Yup.string().required("Fuel capacity is required")
    }),
    performance: Yup.object({
      topSpeed: Yup.string().required("Top speed is required"),
      acceleration: Yup.string().required("Acceleration is required"),
      mileage: Yup.string().required("Mileage is required"),
      braking: Yup.string().required("Braking system is required")
    })
  }),
  colors: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Color name is required"),
      code: Yup.string().required("Color code is required")
    })
  ).required("At least one color is required"),
  variants: Yup.array().of(
    Yup.object({
      name: Yup.string().required("Variant name is required"),
      price: Yup.string().required("Variant price is required")
    })
  ).required("At least one variant is required")
});

interface BikePayload {
  name: string;
  description: string;
  originalPrice: string;
  category: string;
  badge: string;
  price: string;
  images: FileList | null;
  features: {
    engine: {
      type: string;
      displacement: string;
      power: string;
      torque: string;
      transmission: string;
      cooling: string;
    };
    dimensions: {
      length: string;
      width: string;
      height: string;
      wheelbase: string;
      groundClearance: string;
      seatHeight: string;
      fuelCapacity: string;
    };
    performance: {
      topSpeed: string;
      acceleration: string;
      mileage: string;
      braking: string;
    };
  };
  colors: Array<{
    name: string;
    code: string;
  }>;
  variants: Array<{
    name: string;
    price: string;
  }>;
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
      description: "",
      originalPrice: "",
      category: "",
      badge: "",
      price: "",
      images: null,
      features: {
        engine: {
          type: "",
          displacement: "",
          power: "",
          torque: "",
          transmission: "",
          cooling: ""
        },
        dimensions: {
          length: "",
          width: "",
          height: "",
          wheelbase: "",
          groundClearance: "",
          seatHeight: "",
          fuelCapacity: ""
        },
        performance: {
          topSpeed: "",
          acceleration: "",
          mileage: "",
          braking: ""
        }
      },
      colors: [{ name: "", code: "" }],
      variants: [{ name: "", price: "" }]
    },
    validationSchema: bikeValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "images" && value instanceof FileList) {
          Array.from(value).forEach((file) => formData.append("images", file));
        } else {
          formData.append(key, JSON.stringify(value));
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
    <div className="p-8 mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Upload Bike</h1>
      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {/* Basic Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Basic Information</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Royal Enfield Bullet 350"
                className="mt-2"
              />
              {touched.name && errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="originalPrice" className="text-gray-700 font-medium">Original Price</Label>
              <Input
                id="originalPrice"
                name="originalPrice"
                value={values.originalPrice}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. ₹2,50,000"
                className="mt-2"
              />
              {touched.originalPrice && errors.originalPrice && (
                <p className="text-sm text-red-500 mt-1">{errors.originalPrice}</p>
              )}
            </div>

            <div>
              <Label htmlFor="category" className="text-gray-700 font-medium">Category</Label>
              <Input
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Cruiser"
                className="mt-2"
              />
              {touched.category && errors.category && (
                <p className="text-sm text-red-500 mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <Label htmlFor="badge" className="text-gray-700 font-medium">Badge</Label>
              <Input
                id="badge"
                name="badge"
                value={values.badge}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. New Launch"
                className="mt-2"
              />
              {touched.badge && errors.badge && (
                <p className="text-sm text-red-500 mt-1">{errors.badge}</p>
              )}
            </div>

            <div>
              <Label htmlFor="price" className="text-gray-700 font-medium">Base Price</Label>
              <Input
                id="price"
                name="price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. ₹2,00,000"
                className="mt-2"
              />
              {touched.price && errors.price && (
                <p className="text-sm text-red-500 mt-1">{errors.price}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-gray-700 font-medium">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={3}
              placeholder="e.g. The legendary Bullet 350, carrying forward the legacy of pure motorcycling since 1901."
              className="mt-2"
            />
            {touched.description && errors.description && (
              <p className="text-sm text-red-500 mt-1">{errors.description}</p>
            )}
          </div>
        </div>

        {/* Engine Features */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Engine Features</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="features.engine.type" className="text-gray-700 font-medium">Engine Type</Label>
              <Input
                id="features.engine.type"
                name="features.engine.type"
                value={values.features.engine.type}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Single Cylinder, 4 Stroke, SOHC"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.engine.displacement" className="text-gray-700 font-medium">Displacement</Label>
              <Input
                id="features.engine.displacement"
                name="features.engine.displacement"
                value={values.features.engine.displacement}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 349cc"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.engine.power" className="text-gray-700 font-medium">Power</Label>
              <Input
                id="features.engine.power"
                name="features.engine.power"
                value={values.features.engine.power}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 20.2 BHP @ 6100 rpm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.engine.torque" className="text-gray-700 font-medium">Torque</Label>
              <Input
                id="features.engine.torque"
                name="features.engine.torque"
                value={values.features.engine.torque}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 27 Nm @ 4000 rpm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.engine.transmission" className="text-gray-700 font-medium">Transmission</Label>
              <Input
                id="features.engine.transmission"
                name="features.engine.transmission"
                value={values.features.engine.transmission}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 5 Speed Manual"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.engine.cooling" className="text-gray-700 font-medium">Cooling</Label>
              <Input
                id="features.engine.cooling"
                name="features.engine.cooling"
                value={values.features.engine.cooling}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Air Cooled"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Dimensions</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="features.dimensions.length" className="text-gray-700 font-medium">Length</Label>
              <Input
                id="features.dimensions.length"
                name="features.dimensions.length"
                value={values.features.dimensions.length}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 2140 mm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.dimensions.width" className="text-gray-700 font-medium">Width</Label>
              <Input
                id="features.dimensions.width"
                name="features.dimensions.width"
                value={values.features.dimensions.width}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 800 mm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.dimensions.height" className="text-gray-700 font-medium">Height</Label>
              <Input
                id="features.dimensions.height"
                name="features.dimensions.height"
                value={values.features.dimensions.height}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 1090 mm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.dimensions.wheelbase" className="text-gray-700 font-medium">Wheelbase</Label>
              <Input
                id="features.dimensions.wheelbase"
                name="features.dimensions.wheelbase"
                value={values.features.dimensions.wheelbase}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 1370 mm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.dimensions.groundClearance" className="text-gray-700 font-medium">Ground Clearance</Label>
              <Input
                id="features.dimensions.groundClearance"
                name="features.dimensions.groundClearance"
                value={values.features.dimensions.groundClearance}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 135 mm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.dimensions.seatHeight" className="text-gray-700 font-medium">Seat Height</Label>
              <Input
                id="features.dimensions.seatHeight"
                name="features.dimensions.seatHeight"
                value={values.features.dimensions.seatHeight}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 805 mm"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.dimensions.fuelCapacity" className="text-gray-700 font-medium">Fuel Capacity</Label>
              <Input
                id="features.dimensions.fuelCapacity"
                name="features.dimensions.fuelCapacity"
                value={values.features.dimensions.fuelCapacity}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 13.5 L"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Performance</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="features.performance.topSpeed" className="text-gray-700 font-medium">Top Speed</Label>
              <Input
                id="features.performance.topSpeed"
                name="features.performance.topSpeed"
                value={values.features.performance.topSpeed}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 110 km/h"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.performance.acceleration" className="text-gray-700 font-medium">Acceleration</Label>
              <Input
                id="features.performance.acceleration"
                name="features.performance.acceleration"
                value={values.features.performance.acceleration}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 0-60 km/h in 5.5s"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.performance.mileage" className="text-gray-700 font-medium">Mileage</Label>
              <Input
                id="features.performance.mileage"
                name="features.performance.mileage"
                value={values.features.performance.mileage}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 35-40 km/l"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="features.performance.braking" className="text-gray-700 font-medium">Braking System</Label>
              <Input
                id="features.performance.braking"
                name="features.performance.braking"
                value={values.features.performance.braking}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Dual Channel ABS"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Colors</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="space-y-4">
            {values.colors.map((_, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor={`colors.${index}.name`} className="text-gray-700 font-medium">Color Name</Label>
                  <Input
                    id={`colors.${index}.name`}
                    name={`colors.${index}.name`}
                    value={values.colors[index].name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Black"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor={`colors.${index}.code`} className="text-gray-700 font-medium">Color Code</Label>
                  <Input
                    id={`colors.${index}.code`}
                    name={`colors.${index}.code`}
                    value={values.colors[index].code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. #000000"
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => setFieldValue("colors", [...values.colors, { name: "", code: "" }])}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Add Color
            </Button>
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Variants</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="space-y-4">
            {values.variants.map((_, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor={`variants.${index}.name`} className="text-gray-700 font-medium">Variant Name</Label>
                  <Input
                    id={`variants.${index}.name`}
                    name={`variants.${index}.name`}
                    value={values.variants[index].name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Standard"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor={`variants.${index}.price`} className="text-gray-700 font-medium">Variant Price</Label>
                  <Input
                    id={`variants.${index}.price`}
                    name={`variants.${index}.price`}
                    value={values.variants[index].price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. ₹2,00,000"
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => setFieldValue("variants", [...values.variants, { name: "", price: "" }])}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              Add Variant
            </Button>
          </div>
        </div>

        {/* Images */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold text-gray-800">Images</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div>
            <Label htmlFor="images" className="text-gray-700 font-medium">Upload Images (select multiple)</Label>
            <Input
              id="images"
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setFieldValue("images", e.currentTarget.files)}
              className="mt-2"
            />
            {touched.images && errors.images && (
              <p className="text-sm text-red-500 mt-1">{errors.images as string}</p>
            )}
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isPending} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium rounded-lg transition-colors"
        >
          {isPending ? "Uploading..." : "Upload Bike"}
        </Button>
      </form>
    </div>
  );
}
