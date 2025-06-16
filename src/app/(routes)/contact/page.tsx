"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Crown, Shield, Users, Wrench } from "lucide-react"

export default function ContactPage() {
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
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Showroom</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            Contact <span className="gradient-text-luxury">Na_Bha Enterprises</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your exclusive Royal Enfield destination in Surkhet. Get in touch with us for premium motorcycle consultation,
            test rides, and exceptional service that honors the legacy of pure motorcycling excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-luxury border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Crown className="w-5 h-5 text-yellow-500" />
                    Na_Bha Enterprises
                  </CardTitle>
                  <CardDescription className="text-gray-300">Authorized Royal Enfield Premium Dealer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Showroom Address</div>
                      <div className="text-gray-300">Surkhet, Karnali Pradesh</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-yellow-500 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Premium Concierge</div>
                      <div className="text-gray-300">+977-123-456-789</div>
                      <div className="text-gray-300">+977-987-654-321</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-yellow-500 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">info@nabhaenterprises.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Showroom Hours</div>
                      <div className="text-gray-300">
                        <div>Sunday - Friday: 9:00 AM - 6:00 PM</div>
                        <div>Saturday: 9:00 AM - 4:00 PM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="card-luxury border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Premium Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-yellow-500 text-gray-900 hover:bg-yellow-600" variant="default">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Test Ride
                  </Button>
                  <Button className="w-full justify-start glass-luxury text-white hover:bg-yellow-500 hover:text-gray-900" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Premium Consultation
                  </Button>
                  <Button className="w-full justify-start glass-luxury text-white hover:bg-yellow-500 hover:text-gray-900" variant="outline">
                    <MapPin className="w-4 h-4 mr-2" />
                    Visit Showroom
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="card-luxury border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    Visit Our Showroom
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Experience the premium Royal Enfield showroom in Surkhet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.1234567890123!2d81.6184!3d28.6016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzA1LjgiTiA4McKwMzcnMDYuMiJF!5e0!3m2!1sen!2snp!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      <span>Open Now</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-yellow-500" />
                      <span>Surkhet, Karnali Pradesh</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="card-luxury border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Premium Enquiry</CardTitle>
                  <CardDescription className="text-gray-300">
                    Experience the legacy of Royal Enfield. Fill out the form below and our premium concierge will assist you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-gray-300">I&apos;m interested in</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700">
                          <SelectItem value="test-ride" className="text-white hover:bg-yellow-500 hover:text-gray-900">Book a Test Ride</SelectItem>
                          <SelectItem value="purchase" className="text-white hover:bg-yellow-500 hover:text-gray-900">Purchase a Royal Enfield</SelectItem>
                          <SelectItem value="service" className="text-white hover:bg-yellow-500 hover:text-gray-900">Premium Service</SelectItem>
                          <SelectItem value="parts" className="text-white hover:bg-yellow-500 hover:text-gray-900">Genuine Parts</SelectItem>
                          <SelectItem value="general" className="text-white hover:bg-yellow-500 hover:text-gray-900">General Enquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model" className="text-gray-300">Preferred Model</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                          <SelectValue placeholder="Select your preferred model" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700">
                          <SelectItem value="bullet" className="text-white hover:bg-yellow-500 hover:text-gray-900">Royal Enfield Bullet</SelectItem>
                          <SelectItem value="classic" className="text-white hover:bg-yellow-500 hover:text-gray-900">Royal Enfield Classic</SelectItem>
                          <SelectItem value="interceptor" className="text-white hover:bg-yellow-500 hover:text-gray-900">Royal Enfield Interceptor</SelectItem>
                          <SelectItem value="himalayan" className="text-white hover:bg-yellow-500 hover:text-gray-900">Royal Enfield Himalayan</SelectItem>
                          <SelectItem value="meteor" className="text-white hover:bg-yellow-500 hover:text-gray-900">Royal Enfield Meteor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your Royal Enfield journey..." 
                        rows={5} 
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-600" 
                      size="lg"
                    >
                      Send Premium Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="card-luxury border-0 shadow-2xl text-center p-6">
              <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Heritage</h3>
              <p className="text-gray-300">120+ years of legendary craftsmanship</p>
            </Card>
            <Card className="card-luxury border-0 shadow-2xl text-center p-6">
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Expert Concierge</h3>
              <p className="text-gray-300">Certified specialists at your service</p>
            </Card>
            <Card className="card-luxury border-0 shadow-2xl text-center p-6">
              <Wrench className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Service</h3>
              <p className="text-gray-300">White-glove maintenance & care</p>
            </Card>
            <Card className="card-luxury border-0 shadow-2xl text-center p-6">
              <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Genuine Parts</h3>
              <p className="text-gray-300">Authentic Royal Enfield parts</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}