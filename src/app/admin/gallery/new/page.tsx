"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ApiError {
  message: string;
  error?: string;
}

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [category, setCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/newcategory");
        const data = await res.json();
        if (res.ok && data.categories) {
          setCategories(data.categories);
          setCategory(data.categories[0] || ""); // set default category
        } else {
          throw new Error(data.error || "Failed to load categories");
        }
      } catch (error: unknown) {
        const err = error as Error;
        setMessage(err.message || "Error loading categories");
      }
    };

    fetchCategories();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFiles || selectedFiles.length === 0) {
      setMessage("Please select at least one image.");
      return;
    }

    if (!category) {
      setMessage("Please select a category.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const formData = new FormData();
        formData.append("category", category);
        formData.append("image", file);

        const res = await fetch("/api/gallery", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const error = await res.json() as ApiError;
          throw new Error(error.error || "Upload failed");
        }
      }

      setMessage("All images uploaded successfully!");
      setSelectedFiles(null);
    } catch (error: unknown) {
      const err = error as Error;
      setMessage(`Upload error: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Upload Gallery Images</h1>
        <Link href="/admin/gallery/newcategory">
          <Button>Create New Category</Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-semibold">
          Select Category:
          <select
            value={category}
            onChange={handleCategoryChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            {categories.length === 0 ? (
              <option disabled>Loading categories...</option>
            ) : (
              categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))
            )}
          </select>
        </label>

        <label className="font-semibold">
          Select Images (multiple):
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full mt-1"
          />
        </label>

        <button
          type="submit"
          disabled={uploading || !category}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Images"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
    </div>
  );
};

export default Page;
