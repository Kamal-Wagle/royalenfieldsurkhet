'use client';

import { About } from '@/components/about';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/Navbar';
import { Services } from '@/components/services';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Gauge, Star, Crown, Award } from 'lucide-react';
import Link from 'next/link';
import { useQuery } from "@tanstack/react-query";
import $axios from "@/lib/axios.instance";
import Image from 'next/image';
import { Bike } from '@/types/bike';

export default function Home() {
  // Format Google Drive image URL
  const formatDriveUrl = (url: string): string =>
    url.replace("/view?usp=drivesdk", "").replace("file/d/", "uc?id=");

  const { data, isLoading, error } = useQuery<Bike[]>({
    queryKey: ["bikes-home"],
    queryFn: async () => {
      const response = await $axios.get("/api/bike");
      return response.data.bikes;
    },
  });

  const displayBikes = data?.slice(0, 6) || [];

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Navigation />
        <Hero />
        <About />

        <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container-luxury relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="text-center max-w-4xl mx-auto mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8 backdrop-blur-sm border border-yellow-500/20"
              >
                <Crown className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Collection</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
                Our <span className="gradient-text-luxury relative">
                  Exclusive Models
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed text-premium">
                Discover the complete range of Royal Enfield motorcycles in our premium showroom,
                each with its own character and purpose, all sharing the DNA of pure motorcycling excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {isLoading ? (
                <div className="col-span-full flex items-center justify-center min-h-[400px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
                </div>
              ) : error ? (
                <div className="col-span-full text-center text-red-500 bg-red-500/10 p-8 rounded-lg border border-red-500/20">
                  <p className="text-lg">Error loading bikes. Please try again later.</p>
                </div>
              ) : !data || data.length === 0 ? (
                <div className="col-span-full text-center text-white bg-white/5 p-8 rounded-lg border border-white/10">
                  <p className="text-lg">No bikes available at the moment.</p>
                </div>
              ) : (
                displayBikes.map((bike, index) => (
                  <motion.div
                    key={bike.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group h-full"
                  >
                    <Card className="card-luxury overflow-hidden border-0 shadow-2xl group-hover:shadow-yellow-500/20 transition-all duration-500 h-full flex flex-col">
                      <div className="relative overflow-hidden image-luxury h-[300px] w-full">
                        <Image
                          src={formatDriveUrl(bike.images[0])}
                          alt={bike.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <Badge className={`${bike.badgeColor} text-white font-semibold px-3 py-1 backdrop-blur-sm`}>
                            {bike.badge}
                          </Badge>
                          <Badge className="bg-gray-900/80 text-yellow-400 border border-yellow-500/30 font-semibold px-3 py-1 backdrop-blur-sm">
                            {bike.category}
                          </Badge>
                        </div>

                        <div className="absolute top-4 right-4 flex items-center glass-luxury rounded-full px-3 py-2 backdrop-blur-sm">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-white font-semibold ml-1">{bike.rating}</span>
                        </div>

                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-2xl font-bold mb-2 text-luxury group-hover:text-yellow-400 transition-colors duration-300">{bike.name}</h3>
                          <div className="flex items-center gap-3">
                            <p className="text-xl font-bold text-yellow-400">{bike.price}</p>
                            {bike.originalPrice && (
                              <p className="text-base text-gray-400 line-through">{bike.originalPrice}</p>
                            )}
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>

                      <CardContent className="p-6 bg-gradient-to-br from-gray-900 to-black flex-1 flex flex-col">
                        <p className="text-gray-300 mb-4 leading-relaxed text-base line-clamp-2">{bike.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-3 glass-luxury rounded-lg p-3 backdrop-blur-sm border border-white/5 group-hover:border-yellow-500/20 transition-colors duration-300">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <div>
                              <p className="text-gray-400 text-xs">Engine</p>
                              <p className="text-white font-semibold text-sm">{bike.features?.engine?.displacement}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 glass-luxury rounded-lg p-3 backdrop-blur-sm border border-white/5 group-hover:border-yellow-500/20 transition-colors duration-300">
                            <Gauge className="w-5 h-5 text-yellow-500" />
                            <div>
                              <p className="text-gray-400 text-xs">Power</p>
                              <p className="text-white font-semibold text-sm">{bike.features?.engine?.power}</p>
                            </div>
                          </div>
                        </div>

                        

                        <Link href={`/models/${bike._id}`} className="mt-auto">
                          <Button className="w-full btn-luxury text-base py-3 group-hover:bg-yellow-500/20 transition-colors duration-300">
                            <Award className="w-4 h-4 mr-2" />
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
              <Link href="/models" className="col-span-full flex justify-center">
                <Button size="lg" className="btn-premium text-lg px-8 py-4 mt-4 group hover:bg-yellow-500/20 transition-colors duration-300">
                  <Award className="w-5 h-5 mr-3" />
                  View All Models
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-center mt-20"
            >
              <Card className="glass-luxury border border-yellow-500/20 overflow-hidden backdrop-blur-sm">
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
                      Ready to Experience <span className="gradient-text-luxury relative">
                        Royal Enfield Excellence?
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-300"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </span>
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      Visit our premium showroom and experience the thump that has captivated riders for generations.
                      Schedule your exclusive test ride today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Button size="lg" className="btn-luxury text-lg px-8 py-4 group hover:bg-yellow-500/20 transition-colors duration-300">
                        <Crown className="w-5 h-5 mr-3" />
                        Schedule Premium Test Ride
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                      </Button>
                      <Link href="/models">
                        <Button size="lg" className="btn-premium text-lg px-8 py-4 group hover:bg-yellow-500/20 transition-colors duration-300">
                          <Award className="w-5 h-5 mr-3" />
                          View All Models
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Services />
        <Footer />
      </motion.main>
    </>
  );
}
