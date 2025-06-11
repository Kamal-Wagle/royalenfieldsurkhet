"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import AlbumDeleteModal from "@/components/AlbumDeleteModal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Album {
  _id: string;
  albumName: string;
  description: string;
  imagesUrl: string[];
  fileId?: string;
  createdAt: string;
  updatedAt?: string;
}

const convertDriveLinkToImage = (url: string) => {
  // Extract the Google Drive file ID from the shared link
  const regex = /\/d\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    // Convert to a direct image link usable in <img> tag
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const AlbumPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchAlbum = async () => {
      try {
        const res = await fetch(`/api/album/${id}`);
        const data = await res.json();

        if (res.ok) {
          setAlbum(data.album);
        } else {
          setError(data.error || "Failed to load album");
        }
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);


  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!selectedAlbum) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/album/${selectedAlbum._id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        // Success logic here (e.g., refresh page or remove from UI)
        console.log("Album deleted", data);
        router.push("/admin/album"); // Redirect to page
        setSelectedAlbum(null);
      } else {
        alert(data.error || "Failed to delete album");
      }
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) return <div className="p-4">Loading album...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!album) return <div className="p-4">Album not found</div>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{album.albumName}</h1>
      <p className="mb-6">{album.description}</p>

      {album.imagesUrl.length === 0 ? (
        <p>No images in this album.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {album.imagesUrl.map((url) => {
            // Use fileId from URL as key to avoid React warnings
            const regex = /\/d\/([a-zA-Z0-9_-]+)/;
            const match = url.match(regex);
            const key = match ? match[1] : url;

            return (
              <div key={key} className="overflow-hidden rounded shadow">
                <Image
                width={200}
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
       {/* Trigger delete modal */}
       <div className="flex justify-center mt-40">
  <Button 
    onClick={() => setSelectedAlbum(album)} 
    className="bg-red-600 hover:bg-red-700 text-white  rounded-md shadow-md"
  >
    Delete Album
  </Button>
</div>


<AlbumDeleteModal
  album={selectedAlbum}
  isDeleting={isDeleting}
  onClose={() => setSelectedAlbum(null)}
  onDelete={handleDelete}
/>
      
      {/* Important: 
          Make sure your Google Drive images are shared with 
          "Anyone with the link" permission to make them publicly accessible. 
          Otherwise, the images won't load. */}
    </div>
  );
};

export default AlbumPage;
