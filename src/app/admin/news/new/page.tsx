'use client';

import { useMutation } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this component
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema with title, description, tag, and file
const newsValidationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  tag: Yup.string().required("Tag is required"),
  file: Yup.mixed().required("File is required"),
});

interface NewsPayload {
  title: string;
  description: string;
  tag: string;
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

// API call to upload news with error handling
const addNews = async (data: FormData) => {
  try {
    const response = await $axios.post("/api/news", data, {
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

export default function AddNewsPage() {
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
  } = useFormik<NewsPayload>({
    initialValues: {
      title: "",
      description: "",
      tag: "",
      file: null,
    },
    validationSchema: newsValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("tag", values.tag);
      if (values.file) formData.append("file", values.file);
      mutate(formData);
    },
  });

  const mutation = useMutation<unknown, Error, FormData>({
    mutationFn: addNews,
    onSuccess: () => {
      toast.success("News uploaded successfully!");
      resetForm();
      router.push("/admin/news"); // Redirect to news list page
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to upload news.");
      console.error("Upload error:", error);
    },
  });

  const { mutate, isPending } = mutation;

  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload News</h1>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter news title"
            />
            {touched.title && errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter news description"
              rows={4}
            />
            {touched.description && errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Tag Input */}
          <div>
            <Label htmlFor="tag">Tag</Label>
            <Input
              id="tag"
              name="tag"
              type="text"
              value={values.tag}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter tag (e.g., academic, sport, cultural)"
            />
            {touched.tag && errors.tag && (
              <p className="text-red-500 text-sm">{errors.tag}</p>
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
            className="w-full bg-blue-600 text-white"
          >
            {isPending ? "Uploading..." : "Upload"}
          </Button>
        </form>
      </div>
    </div>
  );
}
