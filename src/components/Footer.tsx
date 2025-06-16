'use client';

import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Crown,
  Star,
  Award
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:text-red-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Models', href: '#models' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const models = [
    { name: 'Classic 350', href: '#' },
    { name: 'Bullet 350', href: '#' },
    { name: 'Interceptor 650', href: '#' },
    { name: 'Himalayan', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-yellow-500/20">
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Premium Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center animate-golden-glow">
                  <Crown className="w-7 h-7 text-black" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Star className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white text-luxury">Royal Enfield</span>
                <span className="text-sm text-yellow-400 tracking-wider">PREMIUM SHOWROOM</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your exclusive Royal Enfield destination in Surkhet, bringing you the finest motorcycles 
              and exceptional luxury service since our establishment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 glass-luxury rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:glass-premium`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 text-luxury">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-yellow-500/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Models */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 text-luxury">Premium Models</h3>
            <ul className="space-y-4">
              {models.map((model) => (
                <li key={model.name}>
                  <a
                    href={model.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                  >
                    <Award className="w-4 h-4 mr-3 text-yellow-500/50 group-hover:text-yellow-400 transition-colors" />
                    {model.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 text-luxury">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Surkhet, Nepal</p>
                  <p className="text-gray-400">Main Commercial District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-400">+977-XXXX-XXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-400">concierge@nabhaenterprises.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Sun - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-400">Saturday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-yellow-500/20 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Na_Bha Enterprises. All rights reserved. Premium Royal Enfield Experience.
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Premium Warranty
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}