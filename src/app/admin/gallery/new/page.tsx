"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";


const staticCategories = ["Showroom", "Bike", "Scooters", "Services"];

const Page = () => {
  const router = useRouter();
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [category, setCategory] = useState<string>(staticCategories[0]);
  const [title, setTitle] = useState<string>(""); // New state for title
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    if (!selectedFiles || selectedFiles.length === 0) {
      setMessage("Please select at least one image.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const formData = new FormData();
        formData.append("title", title); // Add title
        formData.append("category", category);
        formData.append("image", file);

        const res = await fetch("/api/gallery", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.error || "Upload failed");
        }
      }

      setMessage("All images uploaded successfully!");
       router.push("/admin/gallery");
      setSelectedFiles(null);
      setTitle(""); // Reset title
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
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-semibold">
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="e.g., Showroom Interior"
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="font-semibold">
          Select Category:
          <select
            value={category}
            onChange={handleCategoryChange}
            className="block w-full mt-1 p-2 border rounded"
          >
            {staticCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
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
