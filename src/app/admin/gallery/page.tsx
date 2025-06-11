'use client';
import React, { useState } from 'react';
import $axios from "@/lib/axios.instance";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from 'next/image';
import ImageDeleteModal from '@/components/ImageDeleteModal';
import { GalleryImage } from "@/types";



const convertDriveLinkToImage = (url: string) => {
  const match = url.match(/\/d\/(.+?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  // Fetch gallery images
  const { data: images, isLoading, error } = useQuery<GalleryImage[], Error>({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = await $axios.get("/api/gallery");
      return response.data.galleryImages;
    },
  });

  // Fetch categories
  const { data: categories, isLoading: catLoading } = useQuery<string[], Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await $axios.get("/api/newcategory");
      return res.data.categories;
    },
  });

  const handleDelete = async () => {
    if (!selectedImage) return;
    try {
      setIsDeleting(true);
      await $axios.delete(`/api/gallery/${selectedImage._id}`);
      await queryClient.invalidateQueries({ queryKey: ["gallery"] });
      setSelectedImage(null);
    } catch {
      alert("Failed to delete image.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading || catLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading gallery: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>

      {/* Show categories at the top */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories?.map((cat) => (
          <span
            key={cat}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm shadow"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Show all images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images?.map((img) => (
          <div
            key={img._id}
            className="border rounded-lg shadow-sm overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={convertDriveLinkToImage(img.src)}
              alt={img.category}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-xl shadow"
            />
            <div className="p-2">
              <p className="text-sm font-semibold">{img.category}</p>
              <p className="text-xs text-gray-500">
                {new Date(img.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ImageDeleteModal
        image={selectedImage}
        isDeleting={isDeleting}
        onClose={() => setSelectedImage(null)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Page;
