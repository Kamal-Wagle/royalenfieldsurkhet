"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();
  const [albumName, setAlbumName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!albumName.trim()) {
      setMessage("Please enter an album name.");
      return;
    }

    if (!description.trim()) {
      setMessage("Please enter a description.");
      return;
    }

    if (!selectedFiles || selectedFiles.length === 0) {
      setMessage("Please select at least one image.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("albumName", albumName);
      formData.append("description", description);

      // Append all selected files under the same key 'images'
      Array.from(selectedFiles).forEach((file) => {
        formData.append("images", file);
      });

      const res = await fetch("/api/album", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Upload failed");
      }

      setMessage("Album created successfully!");
      setAlbumName("");
      setDescription("");
      setSelectedFiles(null);
      router.push("/admin/album"); // Redirect to page

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setMessage(`Upload error: ${errorMessage}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Create New Album</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-semibold">
          Album Name:
          <input
            type="text"
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
            required
          />
        </label>

        <label className="font-semibold">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mt-1 p-2 border rounded"
            rows={3}
            required
          />
        </label>

        <label className="font-semibold">
          Select Images (multiple):
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full mt-1"
            required
          />
        </label>

        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Create Album"}
        </Button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.toLowerCase().includes("error") ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Page;
