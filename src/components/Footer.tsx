import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white rounded-full p-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Surya Prakash Secondary School</h3>
                <p className="text-sm text-blue-200">Excellence in Education Since 1943</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Surya Prakash Secondary School is committed to providing quality education from Nursery to Grade 12,
              focusing on academic excellence and personal development to help shape the future of our students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-blue-200 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-blue-200 hover:text-white transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-blue-200 hover:text-white transition-colors">
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-blue-200 hover:text-white transition-colors">
                  School Calendar
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-200 hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-200 hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">Student & Parent Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/student-portal" className="text-blue-200 hover:text-white transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/parent-portal" className="text-blue-200 hover:text-white transition-colors">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/elibrary" className="text-blue-200 hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/exam-schedule" className="text-blue-200 hover:text-white transition-colors">
                  Exam Schedule
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-blue-200 hover:text-white transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-blue-200 hover:text-white transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-blue-200 hover:text-white transition-colors">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-blue-700 pb-2">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Surya Prakash Secondary School</p>
                  <p className="text-blue-200">Panchapuri-2, Surkhet</p>
                  <p className="text-blue-200">Karnali Pradesh, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">+977-123-456789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">info@suryaprakashshool.edu.np</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">School Hours</h5>
              <p className="text-blue-200 text-sm">Sunday - Friday: 10:00 AM - 4:00 PM</p>
              <p className="text-blue-200 text-sm">Saturday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Surya Prakash Secondary School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="text-blue-200 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
