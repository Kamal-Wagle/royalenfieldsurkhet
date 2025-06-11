"use client";

import React from "react";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";

// Album type
interface Album {
  _id: string;
  albumName: string;
  description: string;
  imagesUrl: string[];
  createdAt: string;
}

// Format Google Drive image URL
const formatDriveUrl = (url: string): string =>
  url.replace("/view?usp=drivesdk", "").replace("file/d/", "uc?id=");

const Page = () => {
  const { data, isLoading, isError, error } = useQuery<Album[], Error>({
    queryKey: ["album"],
    queryFn: async () => {
      const response = await $axios.get("/api/album");
      return response.data.albums;
    },
  });

  return (
    <>
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-32 h-32 bg-yellow-100 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-16 right-16 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
              <Heart className="w-4 h-4" />
              Recent Additions
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              All Album Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore memorable moments captured in photos and videos from recent school events.
            </p>
          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-80 bg-gray-100 rounded-lg animate-pulse shadow-inner"
                />
              ))}

            {isError && (
              <p className="text-red-500 col-span-full text-center">
                Error loading albums: {error.message}
              </p>
            )}

            {!isLoading &&
              !isError &&
              data?.map((album) => (
                <Card
                  key={album._id}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={
                        album.imagesUrl?.[0]
                          ? formatDriveUrl(album.imagesUrl[0])
                          : "/placeholder.svg"
                      }
                      alt={album.albumName}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                             <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
  {new Date(album.createdAt).getFullYear()}
</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-lg">{album.albumName}</h3>
                      <p className="text-xs text-gray-200">
                        {new Date(album.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {album.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-500">
                        {album.imagesUrl.length} photo{album.imagesUrl.length > 1 ? "s" : ""}
                      </span>
                      <Link href={`/gallery/${album._id}`}>
                        <Button size="sm" variant="outline" className="gap-1">
                          View Album <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 text-sm px-4 sm:px-8 md:px-16 pb-10">
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
          Previous
        </Button>

        <Separator orientation="vertical" className="h-5" />

        {[1, 2, 3].map((pg) => (
          <Button
            key={pg}
            variant={pg === 1 ? "default" : "outline"}
            size="sm"
            className="w-8 h-8 p-0"
          >
            {pg}
          </Button>
        ))}

        <Separator orientation="vertical" className="h-5" />

        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
          Next
        </Button>
      </div>
    </>
  );
};

export default Page;
