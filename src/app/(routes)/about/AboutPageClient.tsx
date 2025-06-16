"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock,Star, Crown, MapPin, Gem, Trophy } from "lucide-react"

const stats = [
  { icon: Crown, label: "Years of Heritage", value: "120+" },
  { icon: Users, label: "Premium Customers", value: "1000+" },
  { icon: Clock, label: "24/7 Support", value: "Always" },
  { icon: Star, label: "Customer Rating", value: "4.9/5" },
]

const values = [
  {
    icon: Crown,
    title: "Premium Heritage",
    description:
      "Authentic Royal Enfield motorcycles with over 120 years of legendary craftsmanship and excellence.",
  },
  {
    icon: Users,
    title: "Expert Concierge",
    description:
      "Certified specialists and passionate riders who provide personalized motorcycle consultation.",
  },
  {
    icon: Gem,
    title: "Luxury Service",
    description:
      "From premium sales to white-glove maintenance, we provide exceptional motorcycle experiences.",
  },
  {
    icon: Trophy,
    title: "Trusted Excellence",
    description:
      "Authorized premium dealer ensuring quality, comprehensive warranty, and authentic parts.",
  },
]

const team = [
  {
    name: "Ram Bahadur Shahi",
    role: "Premium Concierge",
    image: "/team/concierge.jpg",
    description:
      "Certified Royal Enfield specialist with expertise in premium motorcycle consultation and customer experience",
  },
  {
    name: "Sita Kumari Shahi",
    role: "Sales Manager",
    image: "/team/sales.jpg",
    description: "Expert in premium motorcycle sales, customer relations, and luxury service delivery",
  },
  {
    name: "Krishna Bahadur KC",
    role: "Technical Expert",
    image: "/team/technical.jpg",
    description:
      "Certified Royal Enfield technician with expertise in premium maintenance and service",
  },
]

export default function AboutPageClient() {
  return (
    <>
      {/* SEO Schema for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Na_Bha Enterprises",
            description: "Authorized Royal Enfield Premium Dealer in Surkhet, Karnali Pradesh",
            url: "https://nabhaenterprises.com/about",
            mainEntity: {
              "@type": "AutoDealer",
              name: "Na_Bha Enterprises",
              foundingDate: "2020",
              founder: {
                "@type": "Person",
                name: "Ram Bahadur Shahi",
              },
              employee: team.map((member) => ({
                "@type": "Person",
                name: member.name,
                jobTitle: member.role,
                description: member.description,
              })),
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 py-16">
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
              <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Heritage</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
              About <span className="gradient-text-luxury">Na_Bha Enterprises</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Your exclusive Royal Enfield destination in Surkhet, where we bring you the finest motorcycles 
              and exceptional luxury service that honors the legacy of pure motorcycling excellence.
            </p>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <Card className="overflow-hidden shadow-2xl border-0 glass-luxury">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-16">
                  <Badge className="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 text-base mb-6">
                    <Crown className="w-4 h-4 mr-2" />
                    Premium Dealer
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-8">
                    Experience the <span className="gradient-text-luxury">Royal Enfield Legacy</span>
                  </h2>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      <strong className="text-yellow-500">Na_Bha Enterprises</strong> is your authorized Royal Enfield premium dealer in Surkhet, 
                      bringing you the finest motorcycles and exceptional service. We are committed to delivering 
                      the authentic Royal Enfield experience that has remained unchanged since 1901.
                    </p>
                    <p>
                      Our premium showroom offers a{" "}
                      <strong className="text-yellow-500">luxurious environment</strong> where you can explore the complete range of Royal Enfield 
                      motorcycles. Each motorcycle undergoes our{" "}
                      <strong className="text-yellow-500">premium quality check</strong> to ensure it meets the highest standards of excellence.
                    </p>
                    <p>
                      We understand that owning a Royal Enfield is more than just a purchase - it&apos;s joining a legacy. 
                      That&apos;s why we provide{" "}
                      <strong className="text-yellow-500">comprehensive warranty</strong> and{" "}
                      <strong className="text-yellow-500">lifetime support</strong> to ensure your motorcycling journey is exceptional.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 sm:h-96 lg:h-auto">
                  <Image
                    src="/showroom.jpg"
                    alt="Na_Bha Enterprises Royal Enfield Premium Showroom in Surkhet"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="glass-luxury text-white font-bold px-4 py-2 text-base">
                      <MapPin className="w-4 h-4 mr-2" />
                      Premium Showroom in Surkhet
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Our <span className="gradient-text-luxury">Premium Legacy</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-8 card-luxury border-0 shadow-2xl">
                    <div className="bg-yellow-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-10 h-10 text-yellow-500" />
                    </div>
                    <div className="text-4xl font-black text-white mb-3">{stat.value}</div>
                    <div className="text-lg text-gray-300 font-semibold">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8"
              >
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Our Values</span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                The Principles That <span className="gradient-text-luxury">Define Us</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                These core values shape our commitment to delivering the authentic Royal Enfield experience
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-luxury border-0 shadow-2xl">
                    <CardContent className="p-8 text-center">
                      <div className="bg-yellow-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <value.icon className="w-10 h-10 text-yellow-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full glass-luxury mb-8"
              >
                <Users className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Our Team</span>
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Meet Our <span className="gradient-text-luxury">Premium Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Passionate experts dedicated to delivering the authentic Royal Enfield experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-luxury border-0 shadow-2xl overflow-hidden">
                    <div className="relative h-80">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-yellow-500 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-300">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
