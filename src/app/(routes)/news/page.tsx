import {
  Calendar,
  Newspaper,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import NewsSection from "@/components/NewsSection"
import UpcomingEvents from "@/components/UpcomingEvents"

export default function NewsPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-red-900 via-orange-800 to-yellow-700 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="School news and events"
              fill
              className="object-cover opacity-20"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-8 h-8 bg-orange-300 rotate-45 opacity-15 animate-spin"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-4xl">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Newspaper className="inline h-4 w-4 mr-2" />
                Latest Updates
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                News & <span className="text-yellow-300">Events</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed max-w-3xl">
                Stay updated with the latest happenings, achievements, and upcoming events at Surya Prakash Secondary
                School. Discover our vibrant school community in action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  Latest News <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Event Calendar
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </section>

       
       {/* news Section ok */}
      <NewsSection/>
      
<UpcomingEvents/>
       
      </main>
    </>
  )
}
