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

// ✅ Yup validation schema
const noticeValidationSchema = Yup.object({
  noticeTitle: Yup.string().required("Title is required"),
  noticeDescription: Yup.string().required("Description is required"),
  noticeCategory: Yup.string().required("Category is required"),
  file: Yup.mixed().required("File is required"),
});

interface NoticePayload {
  noticeTitle: string;
  noticeDescription: string;
  noticeCategory: string;
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

// ✅ API call to add notice
const addNotice = async (data: FormData) => {
  try {
    const response = await $axios.post("/api/notice", data, {
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

export default function AddNoticePage() {
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
  } = useFormik<NoticePayload>({
    initialValues: {
      noticeTitle: "",
      noticeDescription: "",
      noticeCategory: "",
      file: null,
    },
    validationSchema: noticeValidationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("noticeTitle", values.noticeTitle);
      formData.append("noticeDescription", values.noticeDescription);
      formData.append("noticeCategory", values.noticeCategory);
      if (values.file) formData.append("file", values.file);

      mutate(formData);
    },
  });

  const { mutate, isPending } = useMutation<unknown, Error, FormData>({
    mutationFn: addNotice,
    onSuccess: () => {
      toast.success("Notice uploaded successfully!");
      resetForm();
      router.push("/admin/notice");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to upload notice.");
      console.error("Upload error:", error);
    },
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Notice</h1>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="noticeTitle">Notice Title</Label>
            <Input
              id="noticeTitle"
              name="noticeTitle"
              value={values.noticeTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter notice title"
            />
            {touched.noticeTitle && errors.noticeTitle && (
              <p className="text-red-500 text-sm">{errors.noticeTitle}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="noticeDescription">Description</Label>
            <Textarea
              id="noticeDescription"
              name="noticeDescription"
              value={values.noticeDescription}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter detailed description"
              rows={4}
            />
            {touched.noticeDescription && errors.noticeDescription && (
              <p className="text-red-500 text-sm">{errors.noticeDescription}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="noticeCategory">Category</Label>
            <Input
              id="noticeCategory"
              name="noticeCategory"
              value={values.noticeCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Academic, Exam, Holiday"
            />
            {touched.noticeCategory && errors.noticeCategory && (
              <p className="text-red-500 text-sm">{errors.noticeCategory}</p>
            )}
          </div>

          {/* File */}
          <div>
            <Label htmlFor="file">Select File</Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept="application/pdf,image/*"
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
          <Button type="submit" disabled={isPending} className="w-full bg-blue-600 text-white">
            {isPending ? "Uploading..." : "Upload Notice"}
          </Button>
        </form>
      </div>
    </div>
  );
}
