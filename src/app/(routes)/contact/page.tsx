import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Navigation,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-700 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="School contact and location"
              fill
              className="object-cover opacity-20"
              priority
            />
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-8 h-8 bg-cyan-300 rotate-45 opacity-15 animate-spin"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-4xl">
              <div className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <MessageCircle className="inline h-4 w-4 mr-2" />
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Contact <span className="text-yellow-300">Us</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 leading-relaxed max-w-3xl">
                We&apos;re here to help! Reach out to us for admissions, inquiries, or any questions about Surya Prakash
                Secondary School. We&apos;d love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  Send Message <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
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

        {/* Contact Information */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-cyan-100 text-cyan-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Phone className="inline h-4 w-4 mr-2" />
                Contact Information
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">How to Reach Us</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Multiple ways to connect with us. Choose the method that works best for you and we&apos;ll respond promptly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Address */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Address</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p className="font-medium">Surya Prakash Secondary School</p>
                    <p>Panchapuri-2, Surkhet</p>
                    <p>Karnali Pradesh, Nepal</p>
                  </div>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Phone className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">Phone</h3>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    <p className="font-medium">Main Office:</p>
                    <p>+977-123-456789</p>
                    <p className="font-medium">Admissions:</p>
                    <p>+977-987-654321</p>
                  </div>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Email</h3>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    <p className="font-medium">General Inquiries:</p>
                    <p className="text-sm">info@suryaprakashshool.edu.np</p>
                    <p className="font-medium">Admissions:</p>
                    <p className="text-sm">admissions@suryaprakashshool.edu.np</p>
                  </div>
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Clock className="h-8 w-8 text-orange-600 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-600 transition-colors">Office Hours</h3>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    <p className="font-medium">Monday - Friday:</p>
                    <p>10:00 AM - 4:00 PM</p>
                    <p className="font-medium">Saturday:</p>
                    <p>Closed</p>
                    <p className="font-medium">Sunday:</p>
                    <p>10:00 AM - 2:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-200 rounded-full opacity-10 animate-spin"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
                    <Send className="inline h-4 w-4 mr-2" />
                    Send Message
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Have a question or want to learn more about our school? Fill out the form below and we&apos;ll get back
                    to you as soon as possible.
                  </p>
                </div>

                <Card className="bg-white border-0 shadow-xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                            placeholder="Your first name"
                            required
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                            placeholder="Your last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                            placeholder="+977-XXX-XXXXXX"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="admissions">Admissions Inquiry</option>
                          <option value="academics">Academic Programs</option>
                          <option value="facilities">School Facilities</option>
                          <option value="events">Events & Activities</option>
                          <option value="general">General Information</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300 resize-none"
                          placeholder="Please share your message or inquiry..."
                          required
                        ></textarea>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card className="bg-white border-0 shadow-xl overflow-hidden">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="School location map"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                        <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="font-medium text-gray-800">Panchapuri-2, Surkhet</p>
                        <p className="text-sm text-gray-600">Karnali Pradesh, Nepal</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Find Us</h3>
                    <p className="text-gray-600 mb-4">
                      Located 44 km west of Birendranagar, our school is easily accessible by road. We&apos;re situated in
                      the heart of Panchapuri community.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Navigation className="mr-2 h-4 w-4" />
                      Open in Maps
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-white border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <Phone className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-800">Call Us</p>
                          <p className="text-sm text-gray-600">+977-123-456789</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <Mail className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-800">Email Us</p>
                          <p className="text-sm text-gray-600">info@suryaprakashshool.edu.np</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                        <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-800">Live Chat</p>
                          <p className="text-sm text-gray-600">Available during office hours</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-white border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                    <p className="text-gray-600 mb-4">
                      Stay connected with us on social media for the latest updates and news.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors transform hover:scale-110"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors transform hover:scale-110"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-100 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Star className="inline h-4 w-4 mr-2" />
                Frequently Asked Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Common Questions</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Find answers to the most commonly asked questions about our school, admissions, and programs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">What are the admission requirements?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Admission requirements vary by grade level. Generally, we require previous academic records, birth
                    certificate, and completion of our application form. Contact our admissions office for specific
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">What is the school fee structure?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our fee structure is competitive and varies by grade level. We offer various payment plans and
                    scholarship opportunities. Please contact our office for detailed fee information and financial aid
                    options.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Do you provide transportation?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, we provide school bus transportation to various routes within Surkhet district. Transportation
                    fees are separate from tuition fees. Contact us for route details and availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">
                    What extracurricular activities are available?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer a wide range of activities including sports, music, art, drama, science clubs, and
                    community service programs. Students are encouraged to participate in multiple activities for
                    holistic development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
