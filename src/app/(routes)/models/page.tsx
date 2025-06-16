"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
import BikesDataGrid from "@/components/BikesDataGrid"


export default function ModelsPage() {
  
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
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Premium Collection</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-luxury">
            Royal Enfield <span className="gradient-text-luxury">Models</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our exclusive collection of Royal Enfield motorcycles, each carrying the legacy of pure motorcycling excellence.
          </p>
        </motion.div>

        {/* Premium Features
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
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
        </div> */}

      {/* <BikeDataGrid/> */}
      <BikesDataGrid/>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="card-luxury border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Experience Premium Motorcycling</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Visit our premium showroom to experience the legacy of Royal Enfield motorcycles.
                Our expert team is ready to guide you through your motorcycling journey.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-yellow-500 text-gray-900 hover:bg-yellow-600 px-8">
                  Book Appointment
                </Button>
                <Button className="glass-luxury text-white hover:bg-yellow-500 hover:text-gray-900 px-8">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}


////

// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { 
//   Star, 
//   Zap, 
//   Gauge, 
//   Award, 
//   ArrowRight 
// } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useQuery } from "@tanstack/react-query"
// import $axios from "@/lib/axios.instance"
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'

// interface Bike {
//   _id: string;
//   name: string;
//   description: string;
//   price: string;
//   images: string[];
//   features: {
//     engine: {
//       type: string;
//       displacement: string;
//       power: string;
//       torque: string;
//       transmission: string;
//       cooling: string;
//     };
//     dimensions: {
//       length: string;
//       width: string;
//       height: string;
//       wheelbase: string;
//       groundClearance: string;
//       seatHeight: string;
//       fuelCapacity: string;
//     };
//     performance: {
//       topSpeed: string;
//       acceleration: string;
//       mileage: string;
//       braking: string;
//     };
//   };
//   colors: Array<{
//     name: string;
//     code: string;
//     _id: string;
//   }>;
//   variants: Array<{
//     name: string;
//     price: string;
//     _id: string;
//   }>;
// }

// const BikeDataGrid = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });


 // Format Google Drive image URL
//  const formatDriveUrl = (url: string): string =>   
  // url.replace("/view?usp=drivesdk", "").replace("file/d/", "uc?id=");

//   const { data, isLoading, isError } = useQuery<Bike[]>({
//     queryKey: ["bikes"],
//     queryFn: async () => {
//       const response = await $axios.get("/api/bike")
//       return response.data.bikes;
//     },
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading bikes</div>;
//   if (!data) return null;

//   return (
//     <>
//       {/* Premium Models Grid */}
//       <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {data.map((bike, index) => (
//           <motion.div
//             key={bike._id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             <Card className="card-luxury overflow-hidden border-0 shadow-2xl group">
//               <div className="relative overflow-hidden image-luxury">
//                 <img
//                   src={bike.images[0]}
//                   alt={bike.name}
//                   className="w-full h-80 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
//                 {/* Premium Badges */}
//                 <div className="absolute top-6 left-6 flex flex-col gap-2">
//                   <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-semibold px-3 py-1">
//                     Premium
//                   </Badge>
//                   <Badge className="bg-gray-900/80 text-yellow-400 border border-yellow-500/30 font-semibold px-3 py-1">
//                     {bike.features.engine.type.split(',')[0]}
//                   </Badge>
//                 </div>
                
//                 {/* Rating */}
//                 <div className="absolute top-6 right-6 flex items-center glass-luxury rounded-full px-3 py-2">
//                   <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                   <span className="text-white font-semibold ml-1">4.8</span>
//                 </div>
                
//                 {/* Price Overlay */}
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h3 className="text-3xl font-bold mb-2 text-luxury">{bike.name}</h3>
//                   <div className="flex items-center gap-3">
//                     <p className="text-2xl font-bold text-yellow-400">₹{bike.price}</p>
//                   </div>
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
//               </div>
              
//               <CardContent className="p-8 bg-gradient-to-br from-gray-900 to-black">
//                 <p className="text-gray-300 mb-6 leading-relaxed text-lg">
//                   {bike.description}
//                 </p>
                
//                 {/* Premium Specs */}
//                 <div className="grid grid-cols-2 gap-6 mb-8">
//                   <div className="flex items-center space-x-3 glass-luxury rounded-lg p-4">
//                     <Zap className="w-6 h-6 text-yellow-500" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Engine</p>
//                       <p className="text-white font-semibold">{bike.features.engine.type}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-3 glass-luxury rounded-lg p-4">
//                     <Gauge className="w-6 h-6 text-yellow-500" />
//                     <div>
//                       <p className="text-gray-400 text-sm">Power</p>
//                       <p className="text-white font-semibold">{bike.features.engine.power}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Premium Features */}
//                 <div className="flex flex-wrap gap-3 mb-8">
//                   <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors">
//                     {bike.features.performance.topSpeed}
//                   </Badge>
//                   <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors">
//                     {bike.features.performance.mileage}
//                   </Badge>
//                   <Badge className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors">
//                     {bike.features.performance.braking}
//                   </Badge>
//                 </div>

//                 <Link href={`/models/${bike._id}`}>
//                   <Button className="w-full btn-luxury text-lg py-4 group">
//                     <Award className="w-5 h-5 mr-3" />
//                     View Details
//                     <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default BikeDataGrid