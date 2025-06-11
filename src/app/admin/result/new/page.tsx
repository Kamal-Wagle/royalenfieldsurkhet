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

// Validation schema for all fields
const resultValidationSchema = Yup.object({
  resultTitle: Yup.string().required("Result Title is required"),
  examType: Yup.string().required("Exam Type is required"),
  class: Yup.string().required("Class is required"),
  statistics: Yup.string().required("Statistics is required"),
  session: Yup.string().required("Session is required"),
  totalStudents: Yup.number()
    .typeError("Total Students must be a number")
    .positive("Total Students must be positive")
    .nullable(),
  passPercentage: Yup.number()
    .typeError("Pass Percentage must be a number")
    .min(0, "Pass Percentage must be between 0 and 100")
    .max(100, "Pass Percentage must be between 0 and 100")
    .nullable(),
  file: Yup.mixed().required("File is required"),
});

interface ResultPayload {
  resultTitle: string;
  examType: string;
  class: string;
  statistics: string;
  session: string;
  totalStudents?: string;
  passPercentage?: string;
  file: File | null;
}

interface ApiError {
  response?: {
    data?: {
      error?: string;
    };
  };
  message?: string;
}

// API call: send multipart/form-data to allow file upload
const addResult = async (data: FormData) => {
  try {
    const response = await $axios.post("/api/result", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: unknown) {
    const apiError = error as ApiError;
    const message =
      apiError?.response?.data?.error ||
      apiError?.message ||
      "Something went wrong while uploading.";
    throw new Error(message);
  }
};

export default function AddResultPage() {
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
  } = useFormik<ResultPayload>({
    initialValues: {
      resultTitle: "",
      examType: "",
      class: "",
      statistics: "",
      session: "",
      totalStudents: "",
      passPercentage: "",
      file: null,
    },
    validationSchema: resultValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("resultTitle", values.resultTitle);
      formData.append("examType", values.examType);
      formData.append("class", values.class);
      formData.append("statistics", values.statistics);
      formData.append("session", values.session);
      if (values.totalStudents) formData.append("totalStudents", values.totalStudents);
      if (values.passPercentage) formData.append("passPercentage", values.passPercentage);
      if (values.file) formData.append("file", values.file);

      mutate(formData);
    },
  });

  const mutation = useMutation<unknown, Error, FormData>({
    mutationFn: addResult,
    onSuccess: () => {
      toast.success("Result uploaded successfully!");
      resetForm();
      router.push("/admin/result");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to upload result.");
      console.error("Upload error:", error);
    },
  });

  const { mutate, isPending } = mutation;

  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Result File</h1>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Result Title */}
          <div>
            <Label htmlFor="resultTitle">Result Title</Label>
            <Input
              id="resultTitle"
              name="resultTitle"
              type="text"
              value={values.resultTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter result title"
            />
            {touched.resultTitle && errors.resultTitle && (
              <p className="text-red-500 text-sm">{errors.resultTitle}</p>
            )}
          </div>

          {/* Exam Type */}
          <div>
            <Label htmlFor="examType">Exam Type</Label>
            <Input
              id="examType"
              name="examType"
              type="text"
              value={values.examType}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter exam type"
            />
            {touched.examType && errors.examType && (
              <p className="text-red-500 text-sm">{errors.examType}</p>
            )}
          </div>

          {/* Class */}
          <div>
            <Label htmlFor="class">Class</Label>
            <Input
              id="class"
              name="class"
              type="text"
              value={values.class}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter class"
            />
            {touched.class && errors.class && (
              <p className="text-red-500 text-sm">{errors.class}</p>
            )}
          </div>

          {/* Statistics */}
          <div>
            <Label htmlFor="statistics">Statistics</Label>
            <Input
              id="statistics"
              name="statistics"
              type="text"
              value={values.statistics}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter statistics"
            />
            {touched.statistics && errors.statistics && (
              <p className="text-red-500 text-sm">{errors.statistics}</p>
            )}
          </div>

          {/* Session */}
          <div>
            <Label htmlFor="session">Session</Label>
            <Input
              id="session"
              name="session"
              type="text"
              value={values.session}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter session"
            />
            {touched.session && errors.session && (
              <p className="text-red-500 text-sm">{errors.session}</p>
            )}
          </div>

          {/* Total Students */}
          <div>
            <Label htmlFor="totalStudents">Total Students (Optional)</Label>
            <Input
              id="totalStudents"
              name="totalStudents"
              type="number"
              value={values.totalStudents}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter total number of students"
              min="0"
            />
            {touched.totalStudents && errors.totalStudents && (
              <p className="text-red-500 text-sm">{errors.totalStudents}</p>
            )}
          </div>

          {/* Pass Percentage */}
          <div>
            <Label htmlFor="passPercentage">Pass Percentage (Optional)</Label>
            <Input
              id="passPercentage"
              name="passPercentage"
              type="number"
              value={values.passPercentage}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter pass percentage"
              min="0"
              max="100"
              step="0.01"
            />
            {touched.passPercentage && errors.passPercentage && (
              <p className="text-red-500 text-sm">{errors.passPercentage}</p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <Label htmlFor="file">Select File</Label>
            <Input
              id="file"
              name="file"
              type="file"
              onChange={(e) => {
                const file = e.currentTarget.files?.[0] || null;
                setFieldValue("file", file);
              }}
              onBlur={handleBlur}
            />
            {touched.file && errors.file && (
              <p className="text-red-500 text-sm">{errors.file as string}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full"
          >
            {isPending ? "Uploading..." : "Upload Result"}
          </Button>
        </form>
      </div>
    </div>
  );
}
