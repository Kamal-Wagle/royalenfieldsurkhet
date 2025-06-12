import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import {
  Users,
  BookOpen,
  Award,
  Calendar,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Building,
  Clock,
  ChevronRight,
  Lightbulb,
  Laptop,
  Music,
  Trophy,
  Heart,
  Newspaper,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Target,
  Zap,
  Globe,
  Shield,
  Rocket,
  Camera,
  Eye,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <Image
              src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
      alt="School building"
      fill
      className="object-cover opacity-20"
      priority
    />
    {/* Floating Geometric Shapes */}
    <div className="absolute top-10 left-4 w-10 h-10 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
    <div className="absolute top-24 right-4 w-8 h-8 md:w-16 md:h-16 bg-white rounded-full opacity-10 animate-pulse"></div>
    <div className="absolute bottom-20 left-8 w-6 h-6 md:w-12 md:h-12 bg-yellow-300 rotate-45 opacity-15 animate-spin"></div>
    <div className="absolute top-48 right-10 w-4 h-4 md:w-8 md:h-8 bg-white rounded-full opacity-20 animate-ping"></div>
  </div>

  <div className="relative container mx-auto px-4 h-full flex items-center py-12 sm:py-16">
    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
      {/* Left Content */}
      <div className="text-white text-center lg:text-left">
        <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 animate-pulse">
          🎓 Admissions Open for 2025-26
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-yellow-300 animate-pulse">Surya Prakash</span> Secondary School
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
          Providing quality education in Panchapuri, Surkhet since 1943. Nurturing young minds from Nursery to
          Grade 12 with excellence and care.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
          {[
            { label: "Years", value: "80+" },
            { label: "Students", value: "1200+" },
            { label: "Pass Rate", value: "95%" },
          ].map((item, idx) => (
            <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-xl sm:text-2xl font-bold text-yellow-300">{item.value}</div>
              <div className="text-xs sm:text-sm text-blue-200">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-6 py-3 md:px-8 md:py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
          >
            Apply for Admission <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-blue-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  About Us
                </Button>
        </div>
      </div>

      {/* Right Content - Floating Achievement Cards */}
      <div className="relative hidden lg:block">
        {/* Main Achievement Card */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:shadow-3xl">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Excellence Award</h3>
              <p className="text-gray-600 text-sm">Best School in Surkhet</p>
            </div>
          </div>
          <p className="text-gray-600">
            Recognized for outstanding academic performance and student development.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="absolute -top-8 -right-8 bg-yellow-400 rounded-xl p-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 hover:shadow-xl">
          <div className="text-center">
            <GraduationCap className="h-8 w-8 text-white mx-auto mb-2" />
            <div className="font-bold text-white">2000+</div>
            <div className="text-xs text-yellow-100">Alumni</div>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-4 bg-green-500 rounded-xl p-4 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 hover:shadow-xl">
          <div className="text-center">
            <Trophy className="h-8 w-8 text-white mx-auto mb-2" />
            <div className="font-bold text-white">50+</div>
            <div className="text-xs text-green-100">Awards</div>
          </div>
        </div>

        <div className="absolute top-1/2 -right-12 bg-purple-500 rounded-full p-4 shadow-lg animate-bounce hover:animate-pulse">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <div className="flex flex-col items-center">
      <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
      <div className="w-5 h-9 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </div>

  {/* Decorative Wave */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
</section>


        {/* Announcement Bar */}
        <section className="bg-gradient-to-r from-yellow-100 to-yellow-50 py-4 border-y border-yellow-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-200 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-2 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute top-4 right-20 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-3 md:mb-0">
                <div className="bg-yellow-500 p-2 rounded-full mr-3 animate-pulse">
                  <Newspaper className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium text-yellow-800">Latest Announcements:</span>
              </div>
              <div className="flex-1 md:ml-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                  <div className="flex items-start space-x-2 mb-2 md:mb-0 hover:bg-yellow-200 p-2 rounded-lg transition-colors">
                    <Calendar className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      <span className="font-medium">Admission Open:</span> Applications for 2025-26 academic year now
                      being accepted
                    </p>
                  </div>
                  <div className="flex items-start space-x-2 mb-2 md:mb-0 hover:bg-yellow-200 p-2 rounded-lg transition-colors">
                    <Calendar className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      <span className="font-medium">Parent-Teacher Meeting:</span> Scheduled for June 15, 2025
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/announcements"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center mt-3 md:mt-0 bg-white px-4 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
                <Sparkles className="inline h-4 w-4 mr-2" />
                Our Achievements
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Numbers That Speak</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Users className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  1,200+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Students Enrolled</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <BookOpen className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  80+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Experienced Teachers</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Award className="h-10 w-10 text-purple-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  95%
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">SEE Pass Rate</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <GraduationCap className="h-10 w-10 text-orange-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  80
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-20 md:w-40 h-20 md:h-40 bg-blue-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-20 left-20 w-16 md:w-32 h-16 md:h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium animate-pulse">
                  <Target className="inline h-4 w-4 mr-2" />
                  About Our School
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Excellence in Education Since <span className="text-blue-600">1943</span>
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Surya Prakash Secondary School is a community-based school located in Panchapuri, 44 km west of
                    Birendranagar, Surkhet, in Karnali Province, Nepal. Founded in 1943 (2000 BS), we have a long
                    history of providing quality education to the local community.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Our school was officially registered as a secondary school in 1984 (2041 BS) and received formal
                    registration from the Ministry of Education in 2052 BS, allowing students to take the School Leaving
                    Certificate (SLC) exams.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-center space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    <span className="text-sm md:text-base text-gray-700">Nursery to Grade 12</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    <span className="text-sm md:text-base text-gray-700">Qualified Teachers</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    <span className="text-sm md:text-base text-gray-700">Modern Facilities</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 md:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    <span className="text-sm md:text-base text-gray-700">Holistic Development</span>
                  </div>
                </div>
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Students in classroom"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300 w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="bg-blue-100 p-3 md:p-4 rounded-full">
                      <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base md:text-lg">80+ Years</h4>
                      <p className="text-sm md:text-base text-gray-600">Of Educational Excellence</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-yellow-400 p-3 md:p-4 rounded-full shadow-lg animate-bounce">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Programs Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-40 w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
              <div className="absolute bottom-40 left-40 w-12 h-12 bg-purple-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Rocket className="inline h-4 w-4 mr-2" />
                Academic Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Academic Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive educational programs designed to nurture young minds from early childhood
                through higher secondary education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Heart className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Early Childhood</CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Nursery to Grade 2
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Foundation for lifelong learning
                    </li>
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Play-based learning approach
                    </li>
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Basic literacy and numeracy
                    </li>
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Social and emotional development
                    </li>
                  </ul>
                  <Link
                    href="/early-childhood"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <BookOpen className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    Primary Education
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Grades 3 to 5
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-green-600 transition-colors">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Core subject foundations
                    </li>
                    <li className="flex items-center hover:text-green-600 transition-colors">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Critical thinking skills
                    </li>
                    <li className="flex items-center hover:text-green-600 transition-colors">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Project-based learning
                    </li>
                    <li className="flex items-center hover:text-green-600 transition-colors">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Character development
                    </li>
                  </ul>
                  <Link
                    href="/primary"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Laptop className="h-10 w-10 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    Secondary Education
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Grades 6 to 10
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Advanced subject matter
                    </li>
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      SEE exam preparation
                    </li>
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Technology integration
                    </li>
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Career exploration
                    </li>
                  </ul>
                  <Link
                    href="/secondary"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <GraduationCap className="h-10 w-10 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    Higher Secondary
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Grades 11 to 12
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-orange-600 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Science & Management streams
                    </li>
                    <li className="flex items-center hover:text-orange-600 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      College preparation
                    </li>
                    <li className="flex items-center hover:text-orange-600 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Advanced coursework
                    </li>
                    <li className="flex items-center hover:text-orange-600 transition-colors">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Career counseling
                    </li>
                  </ul>
                  <Link
                    href="/higher-secondary"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg px-8 py-4"
              >
                View All Programs <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-200 rounded-full opacity-10 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Shield className="inline h-4 w-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">The Surya Prakash Advantage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover what makes our school the preferred choice for families in Surkhet and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Lightbulb className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-600 transition-colors">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our rigorous curriculum and dedicated teachers ensure students achieve their highest potential. We
                  consistently achieve outstanding results in national examinations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">95% SEE pass rate</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Qualified teaching staff</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Regular assessments and feedback</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Users className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-green-600 transition-colors">
                  Holistic Development
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We believe in nurturing the whole child. Our programs develop academic, physical, social, and
                  emotional skills to prepare students for life beyond school.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Sports and physical education</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Arts and cultural programs</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-green-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Character development</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Building className="h-10 w-10 text-purple-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-purple-600 transition-colors">
                  Modern Facilities
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our campus features well-equipped classrooms, laboratories, library, and sports facilities to enhance
                  the learning experience of our students.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Science and computer labs</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Well-stocked library</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg hover:bg-purple-50 transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-600">Sports grounds and facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Life Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Globe className="inline h-4 w-4 mr-2" />
                Student Life
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Life at Surya Prakash</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our school offers a vibrant environment where students can explore their interests and develop their
                talents beyond academics.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Trophy className="h-8 w-8 text-red-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-red-600 transition-colors">
                      Sports & Athletics
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Participate in various sports including football, volleyball, cricket, and athletics with regular
                      inter-house and inter-school competitions.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Music className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-green-600 transition-colors">
                      Arts & Culture
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Express creativity through music, dance, drama, and visual arts with regular cultural programs and
                      exhibitions.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Users className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                      Clubs & Activities
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Join various clubs including science, eco, literary, and debate clubs to pursue interests and
                      develop leadership skills.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Heart className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 transition-colors">
                      Community Service
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Participate in social service activities to develop empathy and contribute positively to the local
                      community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Students in sports activity"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">Sports Day 2024</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Cultural program"
                    width={600}
                    height={300}
                    className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">Cultural Festival</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg px-8 py-4">
                Explore Student Life <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Camera className="inline h-4 w-4 mr-2" />
                School Gallery
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Moments That Matter</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore the vibrant life at Surya Prakash Secondary School through our photo gallery showcasing academic
                achievements, cultural events, and memorable moments.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Large featured image */}
              <div className="col-span-2 row-span-2 relative group">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="School building exterior"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Our Beautiful Campus</h3>
                    <p className="text-sm text-gray-200">Main school building</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Smaller gallery images */}
              <div className="relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Students in classroom"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Classroom Learning</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Science laboratory"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Science Lab</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Library"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Library</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sports activities"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Sports Day</p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Cultural program"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Cultural Festival 2024</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Computer lab"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Computer Lab</p>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="relative h-36 md:h-44 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Graduation ceremony"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Graduation Day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg px-8 py-4">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Updates Grid Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Bell className="inline h-4 w-4 mr-2" />
                Latest Updates
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Stay Informed</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get the latest notices, results, and upcoming events all in one place to stay connected with school
                activities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Latest Notices */}
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white/20 p-2 rounded-full mr-3">
                        <Bell className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Latest Notices</h3>
                    </div>
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      New
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors rounded-r-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-blue-600 font-medium">June 10, 2025</span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">Important</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">Admission Form Submission Deadline</h4>
                      <p className="text-sm text-gray-600">Last date for admission form submission is June 20, 2025.</p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors rounded-r-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-green-600 font-medium">June 8, 2025</span>
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">General</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">Parent-Teacher Meeting</h4>
                      <p className="text-sm text-gray-600">Scheduled for June 15, 2025 from 10:00 AM to 4:00 PM.</p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4 py-2 hover:bg-purple-50 transition-colors rounded-r-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-purple-600 font-medium">June 5, 2025</span>
                        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">Academic</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">Summer Vacation Notice</h4>
                      <p className="text-sm text-gray-600">School will remain closed from June 25 to July 15, 2025.</p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 py-2 hover:bg-orange-50 transition-colors rounded-r-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-orange-600 font-medium">June 3, 2025</span>
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">Event</span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">Annual Sports Day</h4>
                      <p className="text-sm text-gray-600">Annual sports day will be held on June 18, 2025.</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href="/notices"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center group"
                    >
                      View All Notices
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Latest Results */}
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white/20 p-2 rounded-full mr-3">
                        <Award className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Latest Results</h3>
                    </div>
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Fresh
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700">SEE Results 2025</span>
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">95% Pass</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Outstanding Performance</h4>
                      <p className="text-sm text-gray-600">45 students scored A+ grades out of 120 students.</p>
                      <div className="mt-2 flex items-center">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                        <span className="ml-2 text-xs text-green-600 font-medium">95%</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-700">Class 12 Results 2025</span>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">92% Pass</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">Excellent Achievement</h4>
                      <p className="text-sm text-gray-600">Science stream: 96% pass rate, Management: 88% pass rate.</p>
                      <div className="mt-2 flex items-center">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                        <span className="ml-2 text-xs text-blue-600 font-medium">92%</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-200 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-purple-700">Monthly Test Results</span>
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Available</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">May 2025 Assessment</h4>
                      <p className="text-sm text-gray-600">Monthly test results for all grades are now available.</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href="/results"
                      className="text-green-600 hover:text-green-800 font-medium flex items-center justify-center group"
                    >
                      View All Results
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Latest Events */}
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-white/20 p-2 rounded-full mr-3">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Upcoming Events</h3>
                    </div>
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Soon
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-purple-50 transition-colors border border-purple-100">
                      <div className="bg-purple-600 text-white rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-lg font-bold">18</div>
                        <div className="text-xs">JUN</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Annual Sports Day</h4>
                        <p className="text-sm text-gray-600 mb-1">Inter-house sports competition</p>
                        <div className="flex items-center text-xs text-purple-600">
                          <Clock className="h-3 w-3 mr-1" />
                          9:00 AM - 4:00 PM
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-blue-50 transition-colors border border-blue-100">
                      <div className="bg-blue-600 text-white rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-lg font-bold">22</div>
                        <div className="text-xs">JUN</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Science Exhibition</h4>
                        <p className="text-sm text-gray-600 mb-1">Student project showcase</p>
                        <div className="flex items-center text-xs text-blue-600">
                          <Clock className="h-3 w-3 mr-1" />
                          10:00 AM - 3:00 PM
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-green-50 transition-colors border border-green-100">
                      <div className="bg-green-600 text-white rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-lg font-bold">25</div>
                        <div className="text-xs">JUN</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Cultural Program</h4>
                        <p className="text-sm text-gray-600 mb-1">Traditional dance and music</p>
                        <div className="flex items-center text-xs text-green-600">
                          <Clock className="h-3 w-3 mr-1" />
                          2:00 PM - 5:00 PM
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-orange-50 transition-colors border border-orange-100">
                      <div className="bg-orange-600 text-white rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-lg font-bold">30</div>
                        <div className="text-xs">JUN</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Graduation Ceremony</h4>
                        <p className="text-sm text-gray-600 mb-1">Class 12 farewell program</p>
                        <div className="flex items-center text-xs text-orange-600">
                          <Clock className="h-3 w-3 mr-1" />
                          11:00 AM - 2:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href="/events"
                      className="text-purple-600 hover:text-purple-800 font-medium flex items-center justify-center group"
                    >
                      View All Events
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
                <Rocket className="inline h-4 w-4 mr-2" />
                Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our School Community</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Applications for the 2025-26 academic year are now open. Take the first step towards providing your
                child with quality education at Surya Prakash Secondary School.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Easy Application</h3>
                  <p className="text-blue-200 text-sm">Simple online application process</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Scholarships Available</h3>
                  <p className="text-blue-200 text-sm">Merit-based financial assistance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Personal Guidance</h3>
                  <p className="text-blue-200 text-sm">Dedicated admission counselors</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  Apply for Admission <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  Download Prospectus <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Phone className="inline h-4 w-4 mr-2" />
                Get in Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions? We&apos;re here to help. Reach out to us for any inquiries about admissions, programs, or
                general information.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Contact Information</h3>
                  <div className="space-y-8">
                    <div className="flex items-start group">
                      <div className="bg-blue-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Surya Prakash Secondary School
                          <br />
                          Panchapuri-2, Surkhet
                          <br />
                          Karnali Pradesh, Nepal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-green-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                        <p className="text-gray-600">+977-123-456789</p>
                        <p className="text-gray-600">+977-987-654321</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                        <p className="text-gray-600">info@suryaprakashshool.edu.np</p>
                        <p className="text-gray-600">admissions@suryaprakashshool.edu.np</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-orange-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Office Hours</h4>
                        <p className="text-gray-600">Sunday - Friday: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Saturday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8 text-gray-800">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                        placeholder="Subject of your message"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300 resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


