"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Crown, 
   
  Shield, 
  Users, 
  Wrench, 
   
  Trophy,  
  Clock, 
  MapPin, 
  Phone,
  Ruler,
  Palette
} from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import $axios from "@/lib/axios.instance"

interface Color {
  _id: string;
  name: string;
  code: string;
}

interface Variant {
  _id: string;
  name: string;
  price: string;
}

interface BikeFeatures {
  engine: Record<string, string>;
  dimensions: Record<string, string>;
  performance: Record<string, string>;
}

interface Bike {
  name: string;
  description: string;
  images: string[];
  price: string;
  features: BikeFeatures;
  colors: Color[];
  variants: Variant[];
}

// Format Google Drive image URL
const formatDriveUrl = (url: string): string =>
  url.replace("/view?usp=drivesdk", "").replace("file/d/", "uc?id=")

export default function ModelDetailsPage() {
  const params = useParams()
  const modelId = params.id as string

  const { data: bike, isLoading, isError } = useQuery<Bike>({
    queryKey: ["bike", modelId],
    queryFn: async () => {
      const response = await $axios.get(`/api/bike/${modelId}`)
      return response.data.bike
    }
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  if (isError || !bike) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Model Not Found</h1>
          <Link href="/models">
            <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
              Back to Models
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
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
            <Crown className="w-5 h-5 text-yellow-500 mr-2 animate-golden-glow" />
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Model</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            {bike.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {bike.description}
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={formatDriveUrl(bike.images[0])}
                alt={bike.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {bike.images.slice(1).map((image: string, index: number) => (
                <div key={index} className="relative h-[240px] rounded-2xl overflow-hidden">
                  <Image
                    src={formatDriveUrl(image)}
                    alt={`${bike.name} - View ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Specifications */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="specifications" className="space-y-8">
              <TabsList className="glass-luxury p-1">
                <TabsTrigger value="specifications" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="features" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900">
                  Features
                </TabsTrigger>
                <TabsTrigger value="variants" className="text-white data-[state=active]:bg-yellow-500 data-[state=active]:text-gray-900">
                  Variants
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications">
                <Card className="card-luxury border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Engine Specifications */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <Wrench className="w-5 h-5 text-yellow-500" />
                          Engine
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(bike.features.engine).map(([key, value]: [string, string]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <span className="text-white font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dimensions */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <Ruler className="w-5 h-5 text-yellow-500" />
                          Dimensions
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(bike.features.dimensions).map(([key, value]: [string, string]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <span className="text-white font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card className="card-luxury border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Performance */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          Performance
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(bike.features.performance).map(([key, value]: [string, string]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <span className="text-white font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Available Colors */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <Palette className="w-5 h-5 text-yellow-500" />
                          Available Colors
                        </h3>
                        <div className="space-y-4">
                          {bike.colors.map((color: Color) => (
                            <div key={color._id} className="flex items-center gap-3">
                              <div 
                                className="w-6 h-6 rounded-full border border-gray-700" 
                                style={{ backgroundColor: color.code }}
                              />
                              <span className="text-white">{color.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="variants">
                <Card className="card-luxury border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {bike.variants.map((variant: Variant) => (
                        <div key={variant._id} className="flex items-center justify-between p-4 glass-luxury rounded-xl">
                          <div>
                            <h4 className="text-lg font-semibold text-white">{variant.name}</h4>
                            <p className="text-gray-300">Starting from</p>
                          </div>
                          <div className="text-2xl font-bold text-yellow-500">{variant.price}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - CTA and Info */}
          <div className="space-y-8">
            {/* Price Card */}
            <Card className="card-luxury border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">₹{bike.price}</div>
                  <p className="text-gray-300">Starting Price</p>
                </div>
                <div className="space-y-4">
                  <Button className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                    Book Test Ride
                  </Button>
                  <Button className="w-full glass-luxury text-white hover:bg-yellow-500 hover:text-gray-900">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="card-luxury border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-300">+977-123-456-789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-300">Surkhet, Karnali Pradesh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-300">Mon-Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Premium Features */}
            <Card className="card-luxury border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Premium Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-300">Genuine Parts Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-300">Expert Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-300">Premium Service</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
