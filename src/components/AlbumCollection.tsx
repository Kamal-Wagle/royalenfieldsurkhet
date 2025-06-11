"use client";

import React from "react";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import $axios from "@/lib/axios.instance";
import { useQuery } from "@tanstack/react-query";

interface Album {
  _id: string;
  albumName: string;
  description: string;
  imagesUrl: string[];
  createdAt: string;
}

const AlbumCollection = () => {
  const { data, isLoading, isError, error } = useQuery<Album[], Error>({
    queryKey: ["album"],
    queryFn: async () => {
      const response = await $axios.get("/api/album");
      return response.data.albums;
    },
  });

  if (isLoading) return <p className="text-center py-20">Loading albums...</p>;
  if (isError) return <p className="text-center py-20 text-red-500">Error: {error.message}</p>;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Heart className="inline h-4 w-4 mr-2" />
            Recent Additions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Latest Memories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Check out the most recent photos and videos added to our gallery, capturing the latest happenings at our
            school.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data?.slice(0, 6).map((album) => (
            <Card
              key={album._id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={
                    album.imagesUrl[0]?.replace("/view?usp=drivesdk", "").replace("file/d/", "uc?id=") ||
                    "/placeholder.svg"
                  }
                  alt={album.albumName}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
               <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
  {new Date(album.createdAt).getFullYear()}
</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{album.albumName}</h3>
                  <p className="text-sm text-gray-200">
                    {new Date(album.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed line-clamp-3">{album.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">{album.imagesUrl.length} photos</span>
                  <Link href={`/gallery/${album._id}`}>
                    <Button size="sm" variant="outline">
                      View Album <Eye className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/gallery/all">
            <Button>View All Albums</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlbumCollection;
