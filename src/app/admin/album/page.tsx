"use client";

import React, { useEffect, useState } from "react";

interface Album {
  _id: string;
  albumName: string;
  description: string;
  imagesUrl: string[];
  createdAt: string;
}

const Page = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch("/api/album");
        const data = await res.json();
        if (res.ok) {
          setAlbums(data.albums || []);
        } else {
          setError(data.error || "Failed to fetch albums");
        }
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <div className="p-4">Loading albums...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      {albums.length === 0 && <p>No albums found.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {albums.map(({ _id, albumName, description, imagesUrl, createdAt }) => (
          <div
            key={_id}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{albumName}</h2>
            <p className="text-sm text-gray-600 mb-2">{new Date(createdAt).toLocaleDateString()}</p>
            <p className="mb-2">{description}</p>
            <p className="font-medium">{imagesUrl.length} photos</p>
            {/* Replace this with actual album view link */}
            <a
              href={`/admin/album/${_id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Album
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
