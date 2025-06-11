'use client';

import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema for staff form
const staffValidationSchema = Yup.object({
  name: Yup.string().max(30).required("Name is required"),
  contactNumber: Yup.string().max(30).required("Contact Number is required"),
  email: Yup.string().email("Invalid email").max(65).required("Email is required"),
  role: Yup.string().required("Role is required"),
  gender: Yup.string().oneOf(["Male", "Female", "Other"]).nullable(),
  employmentType: Yup.string().oneOf(["Full-time", "Part-time", "Contract"]).nullable(),
  qualifications: Yup.array().of(Yup.string().trim()),
  staffPhoto: Yup.mixed().nullable(),
});

// API call to add staff
const addStaff = async (data: FormData) => {
  try {
    const response = await $axios.post("/api/staff", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while saving staff.";
    throw new Error(message);
  }
};

export default function AddStaffPage() {
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
  } = useFormik({
    initialValues: {
      name: "",
      contactNumber: "",
      qualifications: [""],
      gender: "",
      employmentType: "Full-time",
      email: "",
      role: "",
      staffPhoto: null as File | null,
    },
    validationSchema: staffValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("contactNumber", values.contactNumber);
      values.qualifications.forEach((q) => formData.append("qualifications", q));
      if (values.gender) formData.append("gender", values.gender);
      if (values.employmentType) formData.append("employmentType", values.employmentType);
      formData.append("email", values.email);
      formData.append("role", values.role);
      if (values.staffPhoto) formData.append("staffPhoto", values.staffPhoto);

      mutate(formData);
    },
  });

  const mutation = useMutation({
    mutationFn: addStaff,
    onSuccess: () => {
      toast.success("Staff added successfully!");
      resetForm();
      router.push("/admin/staff"); // Redirect to staff list page
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : "Failed to add staff.";
      toast.error(message);
      console.error("Add staff error:", error);
    },
  });

  const { mutate, isPending } = mutation;

  // Handle dynamic qualifications inputs
  const addQualification = () => {
    setFieldValue("qualifications", [...values.qualifications, ""]);
  };

  const removeQualification = (index: number) => {
    const newQuals = values.qualifications.filter((_, i) => i !== index);
    setFieldValue("qualifications", newQuals);
  };

  const handleQualificationChange = (index: number, value: string) => {
    const newQuals = [...values.qualifications];
    newQuals[index] = value;
    setFieldValue("qualifications", newQuals);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Staff</h1>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter staff name"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <Label htmlFor="contactNumber">Contact Number *</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="text"
              value={values.contactNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter contact number"
            />
            {touched.contactNumber && errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber}</p>
            )}
          </div>

          {/* Qualifications (dynamic list) */}
          <div>
            <Label>Qualifications</Label>
            {values.qualifications.map((qual, idx) => (
              <div key={idx} className="flex items-center space-x-2 mb-2">
                <Input
                  type="text"
                  value={qual}
                  onChange={(e) => handleQualificationChange(idx, e.target.value)}
                  placeholder="Enter qualification"
                />
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => removeQualification(idx)}
                  disabled={values.qualifications.length === 1}
                  className="px-2 py-1"
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addQualification} className="mt-2">
              + Add Qualification
            </Button>
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="gender">Gender</Label>
            <select
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full rounded border border-gray-300 p-2"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {touched.gender && errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Employment Type */}
          <div>
            <Label htmlFor="employmentType">Employment Type</Label>
            <select
              id="employmentType"
              name="employmentType"
              value={values.employmentType}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full rounded border border-gray-300 p-2"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            {touched.employmentType && errors.employmentType && (
              <p className="text-red-500 text-sm">{errors.employmentType}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter email"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <Label htmlFor="role">Role *</Label>
            <Input
              id="role"
              name="role"
              type="text"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter role"
            />
            {touched.role && errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>

          {/* Staff Photo */}
          <div>
            <Label htmlFor="staffPhoto">Staff Photo</Label>
            <Input
              id="staffPhoto"
              name="staffPhoto"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.currentTarget.files?.[0] || null;
                setFieldValue("staffPhoto", file);
              }}
              onBlur={handleBlur}
            />
            {touched.staffPhoto && errors.staffPhoto && (
              <p className="text-red-500 text-sm">{errors.staffPhoto as string}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white"
          >
            {isPending ? "Saving..." : "Save Staff"}
          </Button>
        </form>
      </div>
    </div>
  );
}
