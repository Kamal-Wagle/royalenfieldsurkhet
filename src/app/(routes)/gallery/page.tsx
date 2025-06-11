import {
  Camera,
  Eye,
  Download,
  Share2,
  Play,
  ChevronRight,
  Sparkles,
  Star,
  Calendar,
  Users,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AlbumCollection from "@/components/AlbumCollection"

export default function GalleryPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-purple-900 via-pink-800 to-rose-700 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="School gallery showcase"
              fill
              className="object-cover opacity-20"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-8 h-8 bg-pink-300 rotate-45 opacity-15 animate-spin"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-4xl">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Camera className="inline h-4 w-4 mr-2" />
                Visual Journey
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                School <span className="text-yellow-300">Gallery</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed max-w-3xl">
                Explore the vibrant life at Surya Prakash Secondary School through our comprehensive photo gallery
                showcasing academic achievements, cultural events, sports activities, and memorable moments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  Explore Gallery <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Virtual Tour
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

        {/* Gallery Categories */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="inline h-4 w-4 mr-2" />
                Photo Categories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Explore Our Collections</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse through different categories of our school life, from academic achievements to cultural
                celebrations and sports victories.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" className="bg-purple-600 text-white border-purple-600 hover:bg-purple-700">
                All Photos
              </Button>
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600">
                Academic
              </Button>
              <Button variant="outline" className="hover:bg-green-50 hover:text-green-600 hover:border-green-600">
                Sports
              </Button>
              <Button variant="outline" className="hover:bg-pink-50 hover:text-pink-600 hover:border-pink-600">
                Cultural
              </Button>
              <Button variant="outline" className="hover:bg-orange-50 hover:text-orange-600 hover:border-orange-600">
                Events
              </Button>
              <Button variant="outline" className="hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-600">
                Campus Life
              </Button>
            </div>

            {/* Featured Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Large featured image */}
              <div className="md:col-span-2 md:row-span-2 relative group">
                <div className="relative h-96 md:h-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="School building exterior"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                      Campus
                    </div>
                    <h3 className="font-bold text-2xl mb-2">Our Beautiful Campus</h3>
                    <p className="text-gray-200">Main school building and grounds</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Regular gallery images */}
              <div className="relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Students in classroom"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Academic
                    </div>
                    <p className="text-sm font-medium">Classroom Learning</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Science laboratory"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Science
                    </div>
                    <p className="text-sm font-medium">Science Lab</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Library"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Academic
                    </div>
                    <p className="text-sm font-medium">Library</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sports activities"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Sports
                    </div>
                    <p className="text-sm font-medium">Sports Day</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Cultural program"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Cultural
                    </div>
                    <p className="text-sm font-medium">Cultural Festival 2024</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Computer lab"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Technology
                    </div>
                    <p className="text-sm font-medium">Computer Lab</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-48 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
                      Events
                    </div>
                    <p className="text-sm font-medium">Graduation Day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Statistics */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-pink-100 text-pink-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Star className="inline h-4 w-4 mr-2" />
                Gallery Highlights
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Capturing Memories</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our gallery showcases the rich tapestry of school life, documenting achievements, celebrations, and
                everyday moments that make our school special.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Camera className="h-10 w-10 text-purple-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  2000+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Photos Captured</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Calendar className="h-10 w-10 text-pink-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  50+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Events Documented</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Users className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  1200+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Students Featured</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Award className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  100+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Achievements Celebrated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Additions */}
       <AlbumCollection/>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-800 via-pink-700 to-rose-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
                <Camera className="inline h-4 w-4 mr-2" />
                Share Your Memories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Be Part of Our Story</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto text-purple-100 leading-relaxed">
                Have photos from school events? We&apos;d love to feature them in our gallery. Share your memories and help
                us document the amazing journey at Surya Prakash Secondary School.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  Submit Photos <Share2 className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-800 text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Photos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
