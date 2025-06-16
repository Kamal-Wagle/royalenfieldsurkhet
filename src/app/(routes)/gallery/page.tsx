"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useQuery } from "@tanstack/react-query"
import $axios from "@/lib/axios.instance"
import { Crown, Star, MapPin, Phone } from "lucide-react"

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error loading gallery</h2>
          <p className="text-gray-300">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8"
          >
            <Crown className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Gallery</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            Our <span className="gradient-text-luxury">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed text-premium max-w-3xl mx-auto">
            Take a look at our showroom, vehicles, and services. See why customers choose Abc Recondition Surkhet.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-yellow-500 text-gray-900 font-semibold" 
                  : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-500"
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
              <Card className="card-luxury overflow-hidden group cursor-pointer border-0 shadow-2xl">
                <div className="relative">
                  <Image
                    src={formatDriveUrl(item.src)}
                    alt={item.title || "Gallery Image"}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-gray-900 font-semibold">
                    {item.category}
                  </Badge>
                </div>
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm">
                  <h3 className="font-semibold text-white text-lg mb-2">{item.title || "Untitled"}</h3>
                  <p className="text-sm text-gray-400">
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
            <div className="glass-luxury p-12 rounded-2xl border border-yellow-500/20 max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No images found</h3>
              <p className="text-gray-300 mb-6">
                No images match your selected category. Try selecting a different category.
              </p>
              <Badge
                variant="outline"
                className="px-4 py-2 cursor-pointer bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-colors"
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
          className="mt-20 text-center"
        >
          <Card className="glass-luxury p-10 border border-yellow-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white">Visit Our Showroom</h2>
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Experience our wide collection of quality second-hand bikes and scooters in person. Our friendly staff is
              ready to help you find your perfect ride.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Surkhet, Karnali Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>Contact us for showroom timings</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
