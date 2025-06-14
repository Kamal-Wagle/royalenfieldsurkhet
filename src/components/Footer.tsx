"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Car, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Clock, Award, Shield, Users } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "All Bikes", href: "/bikes" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const services = [
  "Second-hand Bikes",
  "Second-hand Scooters",
  "Vehicle Inspection",
  "Documentation Help",
  "After-sales Support",
  "Trade-in Services",
  "Financing Options",
  "Insurance Assistance",
]

const features = [
  { icon: Award, text: "12+ Years Experience" },
  { icon: Shield, text: "6-Month Warranty" },
  { icon: Users, text: "2500+ Happy Customers" },
  { icon: Clock, text: "Quick Service" },
]

const  Footer = () =>  {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Abc Recondition
                </div>
                <div className="text-sm text-blue-200 font-medium">Surkhet • Premium Quality</div>
              </div>
            </Link>

            <p className="text-blue-100 leading-relaxed">
              Your most trusted partner for premium quality second-hand bikes and scooters in Surkhet, Karnali Pradesh.
              Serving the community with excellence since 2012.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href="#"
                    className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all duration-300 block"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-yellow-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-blue-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6 text-yellow-400">Contact Info</h3>
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-start space-x-3 group">
                <MapPin className="h-6 w-6 text-purple-400 mt-1 group-hover:text-yellow-400 transition-colors duration-300" />
                <div className="text-blue-200">
                  <div className="font-semibold text-white">Surkhet Showroom</div>
                  <div>Karnali Pradesh, Nepal</div>
                  <div className="text-sm">Near Main Market</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 group">
                <Phone className="h-6 w-6 text-purple-400 group-hover:text-yellow-400 transition-colors duration-300" />
                <div className="text-blue-200">
                  <div className="font-semibold text-white">+977-123-456-789</div>
                  <div>+977-987-654-321</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 group">
                <Mail className="h-6 w-6 text-purple-400 group-hover:text-yellow-400 transition-colors duration-300" />
                <div className="text-blue-200">
                  <div className="font-semibold text-white">info@abcrecondition.com</div>
                  <div className="text-sm">24/7 Customer Support</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 group">
                <Clock className="h-6 w-6 text-purple-400 group-hover:text-yellow-400 transition-colors duration-300" />
                <div className="text-blue-200">
                  <div className="font-semibold text-white">Business Hours</div>
                  <div className="text-sm">Sun-Fri: 9AM-6PM</div>
                  <div className="text-sm">Saturday: 9AM-4PM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm"
              >
                <feature.icon className="h-6 w-6 text-yellow-400" />
                <span className="text-white font-semibold">{feature.text}</span>
                <span className="text-white font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200">
              &copy; 2024 Abc Recondition Surkhet. All rights reserved. |
              <span className="text-yellow-400 font-semibold"> Trusted by 2500+ customers</span>
            </p>
            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">
                Warranty
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer