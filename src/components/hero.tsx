'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Crown, Star, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section 
      id="home" 
      className=" py-28 relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
      aria-label="Hero Section"
    >
      {/* Premium Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full relative"
        >

           <div className="relative w-full h-full">
           <Image
           src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg"
           alt="Royal Enfield Showroom"
          fill
          className="object-cover"
          priority // Replaces loading="eager" and fetchPriority="high"
          />
</div>

          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-gray-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Luxury Floating Elements - Optimized for mobile */}
      <motion.div
        initial={{ opacity: 0, x: -200, rotate: -45 }}
        animate={{ opacity: 0.1, x: 0, rotate: 0 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute top-[10%] sm:top-20 left-[5%] sm:left-10 w-20 sm:w-40 h-20 sm:h-40 border-2 border-yellow-500/30 rounded-full animate-luxury-pulse"
      />
      <motion.div
        initial={{ opacity: 0, y: 200, rotate: 45 }}
        animate={{ opacity: 0.1, y: 0, rotate: 0 }}
        transition={{ duration: 3, delay: 1.5 }}
        className="absolute bottom-[10%] sm:bottom-20 right-[5%] sm:right-10 w-16 sm:w-32 h-16 sm:h-32 border-2 border-yellow-400/40 rounded-full animate-premium-float"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute top-1/2 left-[15%] sm:left-1/4 w-12 sm:w-20 h-12 sm:h-20 bg-yellow-500/20 rounded-full animate-golden-glow"
      />

      {/* Premium Particles - Reduced count on mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [-100, -300],
            x: [0, Math.random() * 200 - 100]
          }}
          transition={{
            duration: 6,
            delay: 3 + i * 0.8,
            repeat: Infinity,
            repeatDelay: 4
          }}
          className="absolute bottom-0 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500/60 rounded-full"
          style={{ left: `${15 + i * 15}%` }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container-luxury text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-full glass-luxury mb-6 sm:mb-8 group hover:glass-premium transition-all duration-500"
          >
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2 sm:mr-3 animate-golden-glow" />
            <span className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-wider uppercase">Premium Royal Enfield Showroom</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="ml-2 sm:ml-3"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 sm:mb-8 leading-tight text-luxury"
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="block"
            >
              Royal Enfield
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="block gradient-text-luxury text-transparent bg-clip-text"
            >
              Showroom
            </motion.span>
          </motion.h1>

          {/* Premium Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-premium"
          >
            Experience the legendary motorcycles in our 
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-yellow-400 font-semibold"
            > premium showroom </motion.span>
            where heritage meets luxury in   <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-yellow-400 font-semibold"
            > Surkhet</motion.span>
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-12 sm:mb-20"
          >
            <Link href="/models" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full"
              >
                <Button
                  size="lg"
                  className="btn-luxury w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    Explore Collection
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </Link>
            <Link href="/gallery" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full"
              >
                <Button
                  size="lg"
                  className="btn-premium w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                    Virtual Tour
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Premium Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 sm:pt-12 border-t border-yellow-500/20"
          >
            {[
              { number: '120+', label: 'Years of Heritage', icon: '👑', color: 'text-yellow-400' },
              { number: '1000+', label: 'Happy Customers', icon: '🏍️', color: 'text-yellow-500' },
              { number: '24/7', label: 'Premium Service', icon: '⭐', color: 'text-yellow-300' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center group cursor-pointer"
              >
                <div className="glass-luxury rounded-2xl p-6 sm:p-8 hover:glass-premium transition-all duration-500">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className={`text-3xl sm:text-5xl font-bold ${stat.color} mb-2 sm:mb-3 group-hover:text-yellow-300 transition-colors animate-shimmer`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors text-base sm:text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 sm:w-8 h-10 sm:h-14 border-2 border-yellow-500/60 rounded-full flex justify-center cursor-pointer hover:border-yellow-400/80 transition-colors glass-luxury"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 sm:w-2 h-3 sm:h-4 bg-yellow-500/80 rounded-full mt-2 sm:mt-3"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-yellow-400/80 text-xs sm:text-sm mt-2 sm:mt-3 text-center font-medium tracking-wider"
        >
          Discover Excellence
        </motion.p>
      </motion.div>

      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #d4af37 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #d4af37 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>
    </section>
  );
}