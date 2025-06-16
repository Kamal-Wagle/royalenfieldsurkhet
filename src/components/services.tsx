'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Shield, 
  Clock, 
  CreditCard, 
  Users, 
  Phone,
  ArrowRight,
  CheckCircle,
  Crown,
  Gem,
  Award,
  Zap,
  Settings
} from 'lucide-react';
import Image from 'next/image';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Wrench,
      title: 'Premium Maintenance',
      description: 'White-glove service and maintenance by certified Royal Enfield master technicians.',
      features: ['Concierge Service', 'Performance Tuning', 'Premium Upgrades'],
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Shield,
      title: 'Authentic Parts',
      description: 'Genuine Royal Enfield components with comprehensive manufacturer warranty.',
      features: ['OEM Excellence', 'Express Delivery', 'Quality Guarantee'],
      color: 'text-green-400',
      bgGradient: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Clock,
      title: '24/7 Concierge',
      description: 'Round-the-clock premium support and emergency roadside assistance.',
      features: ['Priority Service', 'Mobile Support', 'Instant Response'],
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: CreditCard,
      title: 'Luxury Financing',
      description: 'Exclusive payment options and premium financing schemes for discerning customers.',
      features: ['Zero Interest', 'Flexible Terms', 'Instant Approval'],
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      icon: Users,
      title: 'Elite Community',
      description: 'Join our exclusive community of passionate Royal Enfield enthusiasts.',
      features: ['VIP Events', 'Exclusive Rides', 'Master Classes'],
      color: 'text-red-400',
      bgGradient: 'from-red-500/20 to-red-600/20'
    },
    {
      icon: Phone,
      title: 'Personal Consultation',
      description: 'One-on-one expert guidance to help you choose your perfect motorcycle.',
      features: ['Private Sessions', 'Custom Solutions', 'Lifestyle Matching'],
      color: 'text-indigo-400',
      bgGradient: 'from-indigo-500/20 to-indigo-600/20'
    },
  ];

  const benefits = [
    'Authorized Royal Enfield Premium Center',
    'Master Certified Technicians',
    'Genuine Parts & Luxury Accessories',
    'Comprehensive Platinum Warranty',
    'Competitive Premium Pricing',
    'White-Glove Customer Experience',
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800" ref={ref}>
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
            <Gem className="w-5 h-5 text-yellow-500 mr-2 animate-golden-glow" />
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Services</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            Our <span className="gradient-text-luxury">Luxury Services</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed text-premium">
            Complete premium motorcycle solutions from exclusive sales to white-glove service, 
            ensuring your Royal Enfield delivers perfection for every adventure ahead.
          </p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="card-luxury h-full border-0 shadow-2xl group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-500 relative z-10"
                  >
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 relative z-10 text-luxury">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 relative z-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-luxury mb-6">
                <Crown className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-yellow-500 text-sm font-semibold">Premium Excellence</span>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-8 text-luxury">
                Why Choose <span className="gradient-text-luxury">Na_Bha Enterprises?</span>
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We&apos;re not just a dealership; we&apos;re your exclusive partners in the Royal Enfield lifestyle. 
                Our commitment to luxury and passion for motorcycles sets us apart in the industry.
              </p>
              
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button className="btn-luxury text-lg px-8 py-4 group">
                <Award className="w-5 h-5 mr-3" />
                Get Premium Quote
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <div className="image-luxury rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg"
                alt="Premium Royal Enfield Service"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Premium Service Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-luxury rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-yellow-400 mb-1">1000+</div>
                      <div className="text-sm text-gray-300">Premium Services</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-400 mb-1">99%</div>
                      <div className="text-sm text-gray-300">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Service Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <Settings className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}