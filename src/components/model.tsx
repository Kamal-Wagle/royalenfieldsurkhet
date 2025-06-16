'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Gauge, Star, Crown, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Models() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motorcycles = [
    {
      id: 'classic-350',
      name: 'Classic 350',
      price: 'NPR 4,50,000',
      originalPrice: 'NPR 4,80,000',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg',
      category: 'Heritage',
      engine: '349cc',
      power: '20.2 bhp',
      features: ['Retro Styling', 'Modern Engine', 'LED Lighting'],
      description: 'The quintessential Royal Enfield experience with modern reliability.',
      rating: 4.8,
      badge: 'Best Seller',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 'bullet-350',
      name: 'Bullet 350',
      price: 'NPR 4,20,000',
      originalPrice: 'NPR 4,50,000',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
      category: 'Classic',
      engine: '346cc',
      power: '19.1 bhp',
      features: ['Cast Iron Engine', 'Authentic Design', 'Timeless Appeal'],
      description: 'The original Royal Enfield that started the legend.',
      rating: 4.6,
      badge: 'Heritage',
      badgeColor: 'bg-amber-600'
    },
    {
      id: 'interceptor-650',
      name: 'Interceptor 650',
      price: 'NPR 8,50,000',
      originalPrice: 'NPR 9,00,000',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg',
      category: 'Twin',
      engine: '648cc',
      power: '47 bhp',
      features: ['Parallel Twin', 'Cafe Racer Style', 'Premium Finish'],
      description: 'Modern classic with parallel twin engine and cafe racer DNA.',
      rating: 4.9,
      badge: 'Premium',
      badgeColor: 'bg-purple-600'
    },
    {
      id: 'himalayan',
      name: 'Himalayan',
      price: 'NPR 6,80,000',
      originalPrice: 'NPR 7,20,000',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg',
      category: 'Adventure',
      engine: '411cc',
      power: '24.3 bhp',
      features: ['Adventure Ready', 'Long Travel Suspension', 'Rugged Build'],
      description: 'Built for adventure, ready for any terrain you dare to explore.',
      rating: 4.7,
      badge: 'Adventure',
      badgeColor: 'bg-green-600'
    },
  ];

  return (
    <section id="models" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800" ref={ref}>
      <div className="container-luxury">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
          {motorcycles.map((bike, index) => (
            <motion.div
              key={bike.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-luxury overflow-hidden border-0 shadow-2xl group">
                <div className="relative overflow-hidden image-luxury">
                  <Image
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Premium Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <Badge className={`${bike.badgeColor} text-white font-semibold px-3 py-1`}>
                      {bike.badge}
                    </Badge>
                    <Badge className="bg-gray-900/80 text-yellow-400 border border-yellow-500/30 font-semibold px-3 py-1">
                      {bike.category}
                    </Badge>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-6 right-6 flex items-center glass-luxury rounded-full px-3 py-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white font-semibold ml-1">{bike.rating}</span>
                  </div>
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2 text-luxury">{bike.name}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-2xl font-bold text-yellow-400">{bike.price}</p>
                      {bike.originalPrice && (
                        <p className="text-lg text-gray-400 line-through">{bike.originalPrice}</p>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                
                <CardContent className="p-8 bg-gradient-to-br from-gray-900 to-black">
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {bike.description}
                  </p>
                  
                  {/* Premium Specs */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3 glass-luxury rounded-lg p-4">
                      <Zap className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="text-gray-400 text-sm">Engine</p>
                        <p className="text-white font-semibold">{bike.engine}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 glass-luxury rounded-lg p-4">
                      <Gauge className="w-6 h-6 text-yellow-500" />
                      <div>
                        <p className="text-gray-400 text-sm">Power</p>
                        <p className="text-white font-semibold">{bike.power}</p>
                      </div>
                    </div>
                  </div>

                  {/* Premium Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {bike.features.map((feature) => (
                      <Badge
                        key={feature}
                        className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/models/${bike.id}`}>
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
}