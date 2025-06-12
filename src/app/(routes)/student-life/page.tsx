import {
  Users,
  BookOpen,
  Calendar,
  Trophy,
  Music,
  Palette,
  Camera,
  Heart,
  Globe,
  Star,
  Zap,
  Play,
  ChevronRight,
  Sparkles,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-green-900 via-emerald-800 to-teal-700 overflow-hidden mt-1">
          <div className="absolute inset-0">
            <Image
              src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
              alt="Students enjoying school life"
              fill
              className="object-cover opacity-20"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-300 rotate-45 opacity-15 animate-spin"></div>
            <div className="absolute top-60 right-40 w-8 h-8 bg-blue-300 rounded-full opacity-20 animate-ping"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-5xl">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Heart className="inline h-4 w-4 mr-2" />
                Vibrant Campus Life
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Experience <span className="text-yellow-300">Student Life</span> at Surya Prakash
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed max-w-4xl">
                Beyond academics, discover a world of opportunities, friendships, and personal growth through our
                diverse clubs, sports, cultural activities, and community service programs.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">15+</div>
                  <div className="text-sm text-green-200">Clubs & Societies</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">20+</div>
                  <div className="text-sm text-green-200">Sports Activities</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">50+</div>
                  <div className="text-sm text-green-200">Annual Events</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-green-200">Participation</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  Explore Activities <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Student Stories
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

        {/* Clubs & Societies */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Users className="inline h-4 w-4 mr-2" />
                Clubs & Societies
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Join Our Vibrant Communities</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover your passions and develop new skills through our diverse range of clubs and societies designed
                to foster creativity, leadership, and personal growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Science Club */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Rocket className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Science Club</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Explore the wonders of science through experiments, projects, and science fairs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Weekly experiments
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Science exhibitions
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Research projects
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Literary Club */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                    Literary Club
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Express creativity through writing, poetry, and storytelling competitions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Creative writing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Poetry recitation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      School magazine
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Art Club */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Palette className="h-8 w-8 text-pink-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-pink-600 transition-colors">Art Club</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Develop artistic skills through painting, drawing, and various art forms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Painting workshops
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Art exhibitions
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Craft activities
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Music Club */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Music className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">Music Club</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Learn instruments, vocal training, and participate in musical performances.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Instrument lessons
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Choir practice
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Musical concerts
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Photography Club */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Camera className="h-8 w-8 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                    Photography Club
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Capture memories and learn photography techniques through hands-on practice.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Photo walks
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Digital editing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Photo contests
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eco Club */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Globe className="h-8 w-8 text-emerald-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">Eco Club</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Promote environmental awareness and participate in conservation activities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Tree plantation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Recycling drives
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      Awareness campaigns
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sports & Athletics */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-20 md:w-40 h-20 md:h-40 bg-blue-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-20 left-20 w-16 md:w-32 h-16 md:h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 animate-pulse">
                <Trophy className="inline h-3 w-3 md:h-4 md:w-4 mr-2" />
                Sports & Athletics
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">Champions in the Making</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Build physical fitness, teamwork, and sportsmanship through our comprehensive sports programs and
                competitive athletics.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 md:p-6">
                      <div className="bg-blue-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                        <Trophy className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg mb-2">Football</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Inter-house and inter-school competitions</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 md:p-6">
                      <div className="bg-green-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                        <Trophy className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg mb-2">Volleyball</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Team building and coordination skills</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 md:p-6">
                      <div className="bg-purple-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                        <Trophy className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg mb-2">Cricket</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Strategic thinking and precision</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4 md:p-6">
                      <div className="bg-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                        <Trophy className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg mb-2">Athletics</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Track and field events</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Sports Achievements</h3>
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">25+</div>
                      <p className="text-xs md:text-sm text-gray-600">District Championships</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">50+</div>
                      <p className="text-xs md:text-sm text-gray-600">Inter-school Victories</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">100+</div>
                      <p className="text-xs md:text-sm text-gray-600">Individual Awards</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Students playing sports"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300 w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="bg-blue-100 p-3 md:p-4 rounded-full">
                      <Trophy className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base md:text-lg">Annual Sports Day</h4>
                      <p className="text-xs md:text-sm text-gray-600">Celebrating Athletic Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Activities */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-pink-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-pink-100 text-pink-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Music className="inline h-4 w-4 mr-2" />
                Cultural Activities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Celebrating Our Heritage</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Embrace and celebrate our rich cultural heritage through traditional and modern performances, festivals,
                and artistic expressions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Cultural dance performance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Traditional Dance</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Learn and perform traditional Nepali dances during cultural festivals and special occasions.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Music performance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Musical Concerts</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Showcase musical talents through regular concerts featuring both traditional and contemporary music.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Drama performance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Drama & Theater</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Develop acting skills and storytelling abilities through dramatic performances and theater
                    productions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Service */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 md:w-40 h-20 md:h-40 bg-green-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-10 right-10 w-16 md:w-32 h-16 md:h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-block bg-green-100 text-green-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 animate-pulse">
                <Heart className="inline h-3 w-3 md:h-4 md:w-4 mr-2" />
                Community Service
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">Giving Back to Society</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Develop empathy, social responsibility, and leadership skills through meaningful community service
                projects and social initiatives.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="bg-green-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <Heart className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-gray-800">Health Awareness Campaigns</h3>
                        <p className="text-sm md:text-base text-gray-600">Community health education programs</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Students organize health awareness programs in local communities, promoting hygiene, nutrition,
                      and preventive healthcare practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-gray-800">Literacy Programs</h3>
                        <p className="text-sm md:text-base text-gray-600">Teaching underprivileged children</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Senior students volunteer to teach basic literacy and numeracy skills to children from
                      disadvantaged backgrounds in the community.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="bg-purple-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                        <Globe className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl text-gray-800">Environmental Conservation</h3>
                        <p className="text-sm md:text-base text-gray-600">Protecting our natural heritage</p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Participate in tree plantation drives, clean-up campaigns, and environmental awareness programs to
                      protect our local ecosystem.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Students doing community service"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300 w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-yellow-400 p-3 md:p-4 rounded-full shadow-lg animate-bounce">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-800 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
                <Zap className="inline h-4 w-4 mr-2" />
                Join Our Community
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Be Part of Something Amazing</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto text-green-100 leading-relaxed">
                Experience the vibrant student life at Surya Prakash Secondary School. Join clubs, participate in
                sports, celebrate culture, and make lifelong friendships.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  Join Our School <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Visit Our Campus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default page
