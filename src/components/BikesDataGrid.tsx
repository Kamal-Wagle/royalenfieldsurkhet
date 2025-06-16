"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Gauge, Star, Crown, Award } from 'lucide-react';
import Link from 'next/link';
import { useQuery } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import Image from 'next/image';

interface BikeFeatures {
  engine: {
    type: string;
    displacement: string;
    power: string;
  };
  performance: {
    topSpeed: string;
    mileage: string;
    braking: string;
  };
}

interface Bike {
  _id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  category: string;
  badge: string;
  badgeColor: string;
  rating: number;
  images: string[];
  features: BikeFeatures;
}

const BikesDataGrida = () => {
  // Format Google Drive image URL
  const formatDriveUrl = (url: string): string => {
    if (!url) return '';
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'drive.google.com') {
        const fileId = url.split('/d/')[1]?.split('/')[0];
        return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : url;
      }
      return url;
    } catch {
      return url;
    }
  };
  
  const { data, isLoading, isError } = useQuery<Bike[]>({
    queryKey: ["bikes"],
    queryFn: async () => {
      const response = await $axios.get("/api/bike");
      return response.data.bikes;
    },
  });

  if (isLoading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error loading bikes</div>;
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container-luxury">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8"
          >
            <Crown className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Collection</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            Our <span className="gradient-text-luxury">Exclusive Models</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed text-premium">
            Discover the complete range of Royal Enfield motorcycles in our premium showroom, 
            each with its own character and purpose, all sharing the DNA of pure motorcycling excellence.
          </p>
        </motion.div>

        {/* Premium Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data?.map((bikes, index) => (
            <motion.div
              key={bikes.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-luxury overflow-hidden border-0 shadow-2xl group">
                <div className="relative overflow-hidden image-luxury h-[400px] w-full">
                  <Image
                    src={formatDriveUrl(bikes.images[0])}
                    alt={bikes.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Premium Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <Badge className={`${bikes.badgeColor} text-white font-semibold px-3 py-1`}>
                      {bikes.badge}
                    </Badge>
                    <Badge className="bg-gray-900/80 text-yellow-400 border border-yellow-500/30 font-semibold px-3 py-1">
                      {bikes.category}
                    </Badge>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-6 right-6 flex items-center glass-luxury rounded-full px-3 py-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white font-semibold ml-1">{bikes.rating}</span>
                  </div>
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2 text-luxury">{bikes.name}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-bold text-yellow-400">{bikes.price}</p>
                      {bikes.originalPrice && (
                        <p className="text-lg text-gray-400 line-through">{bikes.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <CardContent className="p-8 bg-gradient-to-br from-gray-900 to-black">
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {bikes.description}
                  </p>
                  
                  {/* Premium Specs */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3 glass-luxury rounded-lg p-4">
                      <Zap className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="text-gray-400 text-sm">Engine</p>
                        <p className="text-white font-semibold">{bikes.features?.engine?.displacement}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 glass-luxury rounded-lg p-4">
                      <Gauge className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="text-gray-400 text-sm">Power</p>
                        <p className="text-white font-semibold">{bikes.features?.engine?.power}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-300 text-sm">{bikes.features.engine.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-300 text-sm">{bikes.features.performance.topSpeed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-300 text-sm">{bikes.features.performance.mileage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-300 text-sm">{bikes.features.performance.braking}</span>
                    </div>
                  </div>

                  <Link href={`/models/${bikes._id}`}>
                    <Button className="w-full btn-luxury text-lg py-4 group">
                      <Award className="w-5 h-5 mr-3" />
                      View Details
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Card className="glass-luxury border border-yellow-500/20 overflow-hidden">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  🏍️
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-6 text-luxury">
                  Ready to Experience <span className="gradient-text-luxury">Royal Enfield Excellence?</span>
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Visit our premium showroom and experience the thump that has captivated riders for generations. 
                  Schedule your exclusive test ride today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="btn-luxury text-lg px-8 py-4"
                  >
                    <Crown className="w-5 h-5 mr-3" />
                    Schedule Premium Test Ride
                  </Button>
                  <Link href="/models">
                    <Button
                      size="lg"
                      className="btn-premium text-lg px-8 py-4"
                    >
                      <Award className="w-5 h-5 mr-3" />
                      View All Models
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BikesDataGrida;
