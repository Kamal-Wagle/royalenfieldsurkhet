"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useQuery } from "@tanstack/react-query"
import $axios from "@/lib/axios.instance"

// Format Google Drive image URL
const formatDriveUrl = (url: string): string =>
  url.replace("/view?usp=drivesdk", "").replace("file/d/", "uc?id=");

interface GalleryImage {
  _id: string;
  src: string;
  fileId: string;
  category: string;
  title?: string;
  createdAt: string;
  updatedAt: string;
}

const categories = ["All", "Showroom", "Bikes", "Scooters", "Service"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const { data: gallery, isLoading, isError } = useQuery<GalleryImage[]>({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = await $axios.get("/api/gallery");
      return response.data.galleryImages;
    },
  });

  const filteredGallery = gallery?.filter((item) => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error loading gallery</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our showroom, vehicles, and services. See why customers choose Abc Recondition Surkhet.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-colors ${
                selectedCategory === category 
                  ? "bg-blue-600 text-white" 
                  : "hover:bg-blue-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery?.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative">
                  <Image
                    src={formatDriveUrl(item.src)}
                    alt={item.title || "Gallery Image"}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <Badge className="absolute top-3 right-3 bg-blue-600">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title || "Untitled"}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Added {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredGallery?.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="bg-white p-12 rounded-2xl shadow-xl border-0 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No images found</h3>
              <p className="text-gray-600 mb-6">
                No images match your selected category. Try selecting a different category.
              </p>
              <Badge
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                onClick={() => setSelectedCategory("All")}
              >
                Show All Images
              </Badge>
            </div>
          </motion.div>
        )}

        {/* About Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-blue-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Experience our wide collection of quality second-hand bikes and scooters in person. Our friendly staff is
              ready to help you find your perfect ride.
            </p>
            <div className="text-sm text-gray-500">
              <p>📍 Surkhet, Karnali Pradesh</p>
              <p>📞 Contact us for showroom timings</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
