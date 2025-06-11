"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Album {
  _id: string;
  albumName: string;
  description: string;
  imagesUrl: string[];
  fileId?: string;
  createdAt: string;
  updatedAt?: string;
}

// Convert Google Drive link to direct image URL
const convertDriveLinkToImage = (url: string) => {
  const regex = /\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const Page = () => {
  const params = useParams();
  const id = params?.id as string;

  const {
    data: album,
    isLoading,
    isError,
  } = useQuery<Album>({
    queryKey: ["album", id],
    queryFn: async () => {
      const response = await $axios.get(`/api/album/${id}`);
      return response.data.album;
    },
    enabled: !!id, // prevent running until `id` is available
  });

  if (isLoading) return <div className="text-center mt-10">Loading album...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Failed to load album.</div>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{album?.albumName}</h1>
      <p className="mb-6 text-gray-600">{album?.description}</p>

      {album?.imagesUrl.length === 0 ? (
        <p>No images in this album.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {album?.imagesUrl.map((url) => {
            const regex = /\/d\/([a-zA-Z0-9_-]+)/;
            const match = url.match(regex);
            const key = match ? match[1] : url;

            return (
              <div key={key} className="overflow-hidden rounded shadow">
                <Image
                  width={300}
                  height={200}
                  src={convertDriveLinkToImage(url)}
                  alt={`${album.albumName} image`}
                  className="object-cover w-full h-48"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-end mt-8">
        <Link href="/gallery">
          <Button variant="outline">Back to Gallery</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
