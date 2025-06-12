import {
  Users,
  BookOpen,
  Award,
  Calendar,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Building,
  Star,
  Target,
  Heart,
  Globe,
  Shield,
  Trophy,
  Eye,
  Sparkles,
  History,
  Flag,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
              alt="School campus"
              fill
              className="object-cover opacity-20"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-8 h-8 bg-yellow-300 rotate-45 opacity-15 animate-spin"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-4xl">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <History className="inline h-4 w-4 mr-2" />
                Established 1943
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-yellow-300">Surya Prakash</span> Secondary School
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl">
                Discover our rich heritage of educational excellence spanning over 80 years, shaping minds and building
                futures in the heart of Karnali Pradesh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  Our History <ArrowRight className="ml-2 h-5 w-5" />
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

        {/* School Overview Section */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium animate-pulse">
                  <Target className="inline h-3 w-3 md:h-4 md:w-4 mr-2" />
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  A Legacy of <span className="text-blue-600">Educational Excellence</span>
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Surya Prakash Secondary School stands as a beacon of educational excellence in Panchapuri-2,
                    Surkhet, Karnali Pradesh. Founded in 1943 (2000 BS), our institution has been nurturing young minds
                    for over eight decades, making us one of the oldest and most respected educational institutions in
                    the region.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Located 44 kilometers west of Birendranagar, our school serves as a cornerstone of the local
                    community, providing quality education from Nursery to Grade 12. We officially gained recognition as
                    a secondary school in 1984 (2041 BS) and received formal registration from the Ministry of Education
                    in 2052 BS.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Today, we proudly serve over 1,200 students with a dedicated team of 80+ qualified teachers,
                    maintaining our commitment to academic excellence while embracing modern educational methodologies.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    <span className="text-sm md:text-base text-gray-700 font-medium">Community-Based Institution</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                    <span className="text-sm md:text-base text-gray-700 font-medium">Government Recognized</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                    <span className="text-sm md:text-base text-gray-700 font-medium">SEE & +2 Authorized</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
                    <span className="text-sm md:text-base text-gray-700 font-medium">80+ Years Heritage</span>
                  </div>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <div className="relative group">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="School building and campus"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300 w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="bg-blue-100 p-3 md:p-4 rounded-full">
                      <Calendar className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-base md:text-lg">Since 1943</h4>
                      <p className="text-sm md:text-base text-gray-600">Serving the Community</p>
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

        {/* Mission, Vision & Values Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Compass className="inline h-4 w-4 mr-2" />
                Our Foundation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Mission, Vision & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our guiding principles that shape every aspect of education and character development at Surya Prakash
                Secondary School.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Target className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To provide quality education that nurtures intellectual curiosity, critical thinking, and moral
                    values, preparing students to become responsible global citizens and lifelong learners who
                    contribute positively to society.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Quality Education for All</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Character Development</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Global Citizenship</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Eye className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To be the leading educational institution in Karnali Pradesh, recognized for academic excellence,
                    innovative teaching methods, and holistic development of students who are equipped to face future
                    challenges with confidence and integrity.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Regional Leadership</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Innovation in Education</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Future-Ready Students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Heart className="h-10 w-10 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We uphold the highest standards of integrity, respect, excellence, and compassion in all our
                    endeavors, fostering an environment where every individual can thrive and reach their full
                    potential.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Integrity & Honesty</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Respect & Inclusion</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Excellence & Growth</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* School Leadership Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Users className="inline h-4 w-4 mr-2" />
                Leadership Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet Our Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our experienced leadership team brings decades of educational expertise and unwavering commitment to
                student success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Principal */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Principal"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Mr. Ram Bahadur Thapa</h3>
                    <p className="text-sm text-gray-200">Principal</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    With over 25 years of educational experience, Mr. Thapa leads our institution with vision and
                    dedication to academic excellence.
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    M.Ed. Educational Leadership
                  </div>
                </CardContent>
              </Card>

              {/* Vice Principal */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Vice Principal"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Mrs. Sita Kumari Sharma</h3>
                    <p className="text-sm text-gray-200">Vice Principal</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Mrs. Sharma oversees academic programs and curriculum development with 20+ years of teaching
                    experience.
                  </p>
                  <div className="flex items-center text-sm text-green-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    M.A. English Literature
                  </div>
                </CardContent>
              </Card>

              {/* Academic Coordinator */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Academic Coordinator"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Mr. Krishna Prasad Oli</h3>
                    <p className="text-sm text-gray-200">Academic Coordinator</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Mr. Oli coordinates academic activities and ensures quality education delivery across all grade
                    levels.
                  </p>
                  <div className="flex items-center text-sm text-purple-600">
                    <Award className="h-4 w-4 mr-2" />
                    M.Sc. Mathematics
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements & Recognition Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Trophy className="inline h-4 w-4 mr-2" />
                Achievements & Recognition
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Proud Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Recognition and awards that reflect our commitment to educational excellence and community service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Trophy className="h-12 w-12 text-yellow-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                  50+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Awards & Recognition</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Star className="h-12 w-12 text-green-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  95%
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">SEE Success Rate</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <GraduationCap className="h-12 w-12 text-blue-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  2000+
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Successful Alumni</p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <Flag className="h-12 w-12 text-purple-600 group-hover:animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  #1
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">School in Surkhet</p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Best School Award 2024</h3>
                      <p className="text-gray-600">Karnali Pradesh Education Board</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Recognized for outstanding academic performance, innovative teaching methods, and significant
                    contribution to community development in the education sector.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Excellence in Education</h3>
                      <p className="text-gray-600">Ministry of Education, Nepal</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Honored for maintaining high educational standards, exceptional student outcomes, and dedication to
                    quality education in rural Nepal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* School Facilities Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Building className="inline h-4 w-4 mr-2" />
                Our Facilities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">World-Class Infrastructure</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Modern facilities and resources designed to enhance learning experiences and support holistic
                development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Science Laboratory"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Science Laboratories</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Well-equipped physics, chemistry, and biology labs with modern instruments for hands-on learning and
                    experimentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Computer Lab"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Computer Laboratory</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Modern computer lab with high-speed internet connectivity, latest software, and digital learning
                    resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Library"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Library & Reading Hall</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Extensive collection of books, journals, and digital resources with quiet study spaces for research
                    and learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sports Facilities"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Sports Complex</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Multi-purpose sports ground, basketball court, and indoor facilities for various sports and physical
                    activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Auditorium"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Auditorium</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Modern auditorium with audio-visual equipment for cultural programs, seminars, and school events.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Cafeteria"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">Cafeteria</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Hygienic cafeteria serving nutritious meals and snacks, promoting healthy eating habits among
                    students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
                <Globe className="inline h-4 w-4 mr-2" />
                Connect With Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Join Our Community?</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Discover how Surya Prakash Secondary School can provide your child with the foundation for a bright
                future. Contact us today to learn more about our programs and admission process.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-10 py-4 transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  Schedule Visit <Calendar className="ml-2 h-5 w-5" />
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
