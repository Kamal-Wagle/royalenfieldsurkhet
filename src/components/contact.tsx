'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {  Users,  Crown, Star, Gem, Trophy } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Crown,
      title: 'Premium Heritage',
      description: 'Authentic Royal Enfield motorcycles with over 120 years of legendary craftsmanship and excellence.',
      color: 'text-yellow-500',
      bgColor: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      icon: Users,
      title: 'Expert Concierge',
      description: 'Certified specialists and passionate riders who provide personalized motorcycle consultation.',
      color: 'text-blue-400',
      bgColor: 'from-blue-400/20 to-blue-500/20'
    },
    {
      icon: Gem,
      title: 'Luxury Service',
      description: 'From premium sales to white-glove maintenance, we provide exceptional motorcycle experiences.',
      color: 'text-purple-400',
      bgColor: 'from-purple-400/20 to-purple-500/20'
    },
    {
      icon: Trophy,
      title: 'Trusted Excellence',
      description: 'Authorized premium dealer ensuring quality, comprehensive warranty, and authentic parts.',
      color: 'text-green-400',
      bgColor: 'from-green-400/20 to-green-500/20'
    },
  ];

  const stats = [
    { number: '120+', label: 'Years of Heritage', icon: '👑' },
    { number: '1000+', label: 'Premium Customers', icon: '🏍️' },
    { number: '24/7', label: 'Concierge Support', icon: '⭐' },
    { number: '99%', label: 'Satisfaction Rate', icon: '💎' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black" ref={ref}>
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
            <Crown className="w-5 h-5 text-yellow-500 mr-2 animate-golden-glow" />
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Showroom</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            About <span className="gradient-text-luxury">Na_Bha Enterprises</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed text-premium">
            Your exclusive Royal Enfield destination in Surkhet, where we bring you the finest motorcycles 
            and exceptional luxury service that honors the legacy of pure motorcycling excellence.
          </p>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <div className="glass-luxury rounded-2xl p-6 hover:glass-premium transition-all duration-500">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="text-4xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              <Card className="card-luxury h-full border-0 shadow-2xl group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500 relative z-10`}
                  >
                    <feature.icon className={`w-10 h-10 ${feature.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 relative z-10 text-luxury">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-luxury mb-6">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-yellow-500 text-sm font-semibold">Our Legacy</span>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-8 text-luxury">
                Our <span className="gradient-text-luxury">Premium Story</span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Na_Bha Enterprises has been serving the motorcycling elite in Surkhet 
                  with unparalleled dedication and passion. As an authorized premium Royal Enfield dealer, 
                  we bring you the legendary motorcycles in a luxury showroom environment.
                </p>
                <p>
                  Our commitment transcends traditional sales. We&apos;re your
                  your partners in the 
                  complete Royal Enfield journey, providing expert consultation, genuine parts, 
                  and white-glove service that keeps you riding in style.
                </p>
                <p>
                  From the timeless Bullet to the sophisticated Interceptor series, we showcase 
                  the complete range of Royal Enfield motorcycles, each carrying the DNA of 
                  pure motorcycling that has remained unchanged since 1901.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            <div className="image-luxury rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
              alt="Premium Royal Enfield Showroom"
              fill
              className="object-cover"
              priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Premium Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-luxury rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg">Premium Experience</h4>
                      <p className="text-yellow-400 text-sm">Since 1901</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg animate-golden-glow"
            >
              <Crown className="w-8 h-8 text-black" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}