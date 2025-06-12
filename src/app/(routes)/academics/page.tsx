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
  Heart,
  Globe,
  Trophy,
  Brain,
  Laptop,
  Palette,
  Calculator,
  Microscope,
  Languages,
  FileText,
  Download,
  Play,
  ChevronRight,
  Zap,
  Rocket,
  Atom,
  FlaskConical,
  TestTube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-700 overflow-hidden mt-1">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Students studying"
              fill
              className="object-cover opacity-20"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-300 rotate-45 opacity-15 animate-spin"></div>
            <div className="absolute top-60 right-40 w-8 h-8 bg-pink-300 rounded-full opacity-20 animate-ping"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-5xl">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Brain className="inline h-4 w-4 mr-2" />
                Academic Excellence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Comprehensive <span className="text-yellow-300">Academic Programs</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-4xl">
                From Nursery to Grade 12, we offer a well-rounded curriculum designed to nurture intellectual growth,
                critical thinking, and lifelong learning skills in every student.
              </p>

              {/* Quick Academic Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">14</div>
                  <div className="text-sm text-blue-200">Grade Levels</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">25+</div>
                  <div className="text-sm text-blue-200">Subjects</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">80+</div>
                  <div className="text-sm text-blue-200">Teachers</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-yellow-300">95%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  Explore Programs <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Curriculum
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

        {/* Academic Programs Overview */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Rocket className="inline h-4 w-4 mr-2" />
                Academic Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Academic Programs</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive educational programs designed to foster intellectual growth, creativity, and critical
                thinking from early childhood through higher secondary education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Early Childhood */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-pink-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Heart className="h-10 w-10 text-pink-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-pink-600 transition-colors">Early Childhood</CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Nursery to Grade 2
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-pink-600 transition-colors">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      Play-based learning
                    </li>
                    <li className="flex items-center hover:text-pink-600 transition-colors">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      Basic literacy & numeracy
                    </li>
                    <li className="flex items-center hover:text-pink-600 transition-colors">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      Social development
                    </li>
                    <li className="flex items-center hover:text-pink-600 transition-colors">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      Creative expression
                    </li>
                  </ul>
                  <Link
                    href="/academics/early-childhood"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              {/* Primary Education */}
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
                    href="/academics/primary"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              {/* Secondary Education */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <Laptop className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    Secondary Education
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Grades 6 to 10
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Advanced coursework
                    </li>
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      SEE exam preparation
                    </li>
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Technology integration
                    </li>
                    <li className="flex items-center hover:text-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Career exploration
                    </li>
                  </ul>
                  <Link
                    href="/academics/secondary"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              {/* Higher Secondary */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg">
                    <GraduationCap className="h-10 w-10 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    Higher Secondary
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors">
                    Grades 11 to 12
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Science & Management
                    </li>
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      College preparation
                    </li>
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Specialized subjects
                    </li>
                    <li className="flex items-center hover:text-purple-600 transition-colors">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Career counseling
                    </li>
                  </ul>
                  <Link
                    href="/academics/higher-secondary"
                    className="text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Learn More{" "}
                    <ArrowRight className="inline h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Subject Areas */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Brain className="inline h-4 w-4 mr-2" />
                Subject Areas
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Comprehensive Curriculum</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our diverse curriculum covers all essential subject areas, ensuring students receive a well-rounded
                education that prepares them for future academic and career success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mathematics */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Calculator className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Mathematics</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    From basic arithmetic to advanced calculus, our mathematics program builds strong analytical and
                    problem-solving skills.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Algebra & Geometry
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Statistics & Probability
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Applied Mathematics
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Science */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Microscope className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">Science</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Comprehensive science education covering physics, chemistry, and biology with hands-on laboratory
                    experiences.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Physics & Chemistry
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Biology & Environmental Science
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Laboratory Experiments
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Languages className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Languages</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Strong foundation in Nepali and English languages with emphasis on communication, literature, and
                    cultural understanding.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Nepali Language & Literature
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      English Communication
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Creative Writing
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Studies */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Globe className="h-8 w-8 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                    Social Studies
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Understanding society, history, geography, and civic responsibilities to develop informed global
                    citizens.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      History & Geography
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Civics & Government
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cultural Studies
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arts & Creativity */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Palette className="h-8 w-8 text-pink-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-pink-600 transition-colors">
                    Arts & Creativity
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Fostering creativity through visual arts, music, and performing arts to develop aesthetic
                    appreciation and self-expression.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Visual Arts & Drawing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Music & Dance
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Drama & Theater
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Computer Science */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Laptop className="h-8 w-8 text-indigo-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">
                    Computer Science
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Modern technology education including programming, digital literacy, and computer applications for
                    the digital age.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Programming Basics
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Digital Literacy
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Computer Applications
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Higher Secondary Streams */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <GraduationCap className="inline h-4 w-4 mr-2" />
                Higher Secondary Streams
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Specialized Academic Tracks</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose from our specialized streams in Grades 11-12, designed to prepare students for higher education
                and career paths in their areas of interest.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Science Stream */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Atom className="h-10 w-10 text-blue-600 group-hover:animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                        Science Stream
                      </CardTitle>
                      <CardDescription className="text-lg group-hover:text-gray-700 transition-colors">
                        Physics, Chemistry, Biology & Mathematics
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our Science stream provides comprehensive preparation for medical, engineering, and other
                    science-related fields with rigorous coursework and practical laboratory experience.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Core Subjects:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <FlaskConical className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm text-gray-600">Physics</span>
                        </div>
                        <div className="flex items-center">
                          <TestTube className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Chemistry</span>
                        </div>
                        <div className="flex items-center">
                          <Microscope className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-sm text-gray-600">Biology</span>
                        </div>
                        <div className="flex items-center">
                          <Calculator className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm text-gray-600">Mathematics</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Career Paths:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Medicine & Healthcare</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Engineering</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Research & Development</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Technology</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/academics/science-stream"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline transition-all"
                  >
                    Explore Science Stream
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>

              {/* Management Stream */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Building className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                        Management Stream
                      </CardTitle>
                      <CardDescription className="text-lg group-hover:text-gray-700 transition-colors">
                        Business, Economics & Social Sciences
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our Management stream prepares students for business, economics, and social science fields with
                    practical knowledge of commerce, accounting, and organizational management.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Core Subjects:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Business Studies</span>
                        </div>
                        <div className="flex items-center">
                          <Calculator className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm text-gray-600">Accountancy</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-sm text-gray-600">Economics</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm text-gray-600">Social Studies</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Career Paths:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Business Management</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Banking & Finance</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Public Administration</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">Social Work</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/academics/management-stream"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium group-hover:underline transition-all"
                  >
                    Explore Management Stream
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Assessment & Evaluation */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Award className="inline h-4 w-4 mr-2" />
                Assessment & Evaluation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Comprehensive Assessment System</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our multi-faceted assessment approach ensures holistic evaluation of student progress, focusing on both
                academic achievement and personal development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Continuous Assessment</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Regular quizzes, assignments, and projects to monitor ongoing progress and provide timely feedback.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Weekly quizzes
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Monthly assignments
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Project-based evaluation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Trophy className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Formal Examinations</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Structured term examinations and board exams to assess comprehensive understanding and knowledge
                    retention.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Terminal examinations
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Annual examinations
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Board examinations (SEE, +2)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Holistic Evaluation</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Assessment of co-curricular activities, behavior, and personal development alongside academic
                    performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Participation in activities
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Behavioral assessment
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Leadership skills
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Calendar className="inline h-4 w-4 mr-2" />
                Academic Calendar
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Academic Year Overview</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our structured academic calendar ensures optimal learning time while providing adequate breaks for
                student well-being and family time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-lg">Q1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">First Term</h3>
                  <p className="text-sm text-blue-600 mb-3">April - June</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• New session begins</li>
                    <li>• Orientation programs</li>
                    <li>• First terminal exams</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-lg">Q2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Second Term</h3>
                  <p className="text-sm text-green-600 mb-3">July - September</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Monsoon break</li>
                    <li>• Cultural programs</li>
                    <li>• Mid-term assessments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-lg">Q3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Third Term</h3>
                  <p className="text-sm text-purple-600 mb-3">October - December</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Festival celebrations</li>
                    <li>• Sports competitions</li>
                    <li>• Pre-board exams</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-lg">Q4</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-800">Fourth Term</h3>
                  <p className="text-sm text-orange-600 mb-3">January - March</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Annual examinations</li>
                    <li>• Graduation ceremony</li>
                    <li>• Summer preparations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white transform hover:scale-105 transition-all duration-200 hover:shadow-lg px-8 py-4">
                <Download className="mr-2 h-5 w-5" />
                Download Full Academic Calendar
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-800 via-blue-700 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-ping"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-8 animate-pulse">
                <Zap className="inline h-4 w-4 mr-2" />
                Start Your Academic Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Excel in Academics?</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Join Surya Prakash Secondary School and experience academic excellence with our comprehensive
                curriculum, dedicated teachers, and modern facilities designed for your success.
              </p>

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
                  <Play className="mr-2 h-5 w-5" />
                  Virtual Campus Tour
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
