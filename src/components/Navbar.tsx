// // "use client"
// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import { usePathname } from "next/navigation"
// // import { Menu, X } from "lucide-react"
// // import { Button } from "@/components/ui/button"

// // const navItems = [
// //   { name: "Home", href: "/" },
// //   { name: "Notice", href: "/notice" },
// //   { name: "Result", href: "/result" },
// //   { name: "Staff", href: "/staff" },
// //   { name: "Gallery", href: "/gallery" },
// //   { name: "About", href: "/about" },
// //   { name: "Contact", href: "/contact" },
// // ]

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const pathname = usePathname()

// //   // Close the mobile menu when the pathname changes
// //   useEffect(() => {
// //     setIsOpen(false)
// //   }, [pathname])

// //   return (
// //     <nav className="bg-white/40 backdrop-blur-lg fixed w-full z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
// //           <div className="flex items-center">
// //             <Link href="/" className="text-luxury-gold font-serif text-xl font-bold">
// //               Abc Restaurant
// //             </Link>
// //           </div>
// //           <div className="hidden md:block">
// //             <div className="ml-10 flex items-baseline space-x-4">
// //               {navItems.map((item) => (
// //                 <Link
// //                   key={item.name}
// //                   href={item.href}
// //                   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
// //                     pathname === item.href ? "text-luxury-gold" : "text-luxury-cream hover:text-luxury-gold"
// //                   }`}
// //                 >
// //                   {item.name}
// //                 </Link>
// //               ))}
// //               <Button className="w-full mt-2 bg-luxury-gold hover:bg-luxury-silver text-luxury-charcoal transition-colors duration-300">
// //              <Link href="/admin">
// //               Admin Access
// //               </Link>
// //             </Button>
// //             </div>
// //           </div>
// //           <div className="md:hidden">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-luxury-cream hover:text-luxury-gold focus:outline-none"
// //             >
// //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       {isOpen && (
// //         <div className="md:hidden">
// //           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.name}
// //                 href={item.href}
// //                 className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
// //                   pathname === item.href ? "text-luxury-gold" : "text-luxury-cream hover:text-luxury-gold"
// //                 }`}
// //               >
// //                 {item.name}
// //               </Link>
// //             ))}
// //             <Button className="w-full mt-2 bg-luxury-gold hover:bg-luxury-silver text-luxury-charcoal transition-colors duration-300">
// //              <Link href="/admin">
// //               Admin Access
// //               </Link>
// //             </Button>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   )
// // }



// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, BookOpen, ChevronDown, Search, Phone, Mail } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

//   return (
//     <>
//       {/* Top Info Bar */}
//       <div className="bg-blue-800 text-white py-2 hidden md:block">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span className="text-sm">+977-123-456789</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="h-4 w-4 mr-2" />
//                 <span className="text-sm">info@suryaprakashshool.edu.np</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Link href="/admin" className="text-sm hover:text-blue-200">
//                 Colleage Portal
//               </Link>
//               <Link href="/parent-portal" className="text-sm hover:text-blue-200">
//                 Parent Portal
//               </Link>
//               <Link href="/alumni" className="text-sm hover:text-blue-200">
//                 Alumni
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-3">
//               <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center">
//                 <BookOpen className="h-7 w-7 text-white" />
//               </div>
//               <div>
//                 <h1 className="font-bold text-xl md:text-2xl text-gray-800">Surya Prakash Secondary School</h1>
//                 <p className="text-xs md:text-sm text-gray-500">Excellence in Education Since 1943</p>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-1">
//               <Link
//                 href="/"
//                 className="px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
//               >
//                 Home
//               </Link>

//               <div
//                 className="relative group"
//                 onMouseEnter={() => setActiveDropdown("about")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <button className="px-3 py-2 flex items-center text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors">
//                   About <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 {(activeDropdown === "about" || activeDropdown === null) && (
//                   <div
//                     className={`absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-200 ${
//                       activeDropdown === "about"
//                         ? "opacity-100 visible transform translate-y-0"
//                         : "opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
//                     }`}
//                   >
//                     <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700">
//                       School History
//                     </Link>
//                     <Link
//                       href="/mission"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Mission & Vision
//                     </Link>
//                     <Link
//                       href="/leadership"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Leadership
//                     </Link>
//                     <Link
//                       href="/facilities"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Facilities
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <div
//                 className="relative group"
//                 onMouseEnter={() => setActiveDropdown("academics")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <button className="px-3 py-2 flex items-center text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors">
//                   Academics <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 {(activeDropdown === "academics" || activeDropdown === null) && (
//                   <div
//                     className={`absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-100 transition-all duration-200 ${
//                       activeDropdown === "academics"
//                         ? "opacity-100 visible transform translate-y-0"
//                         : "opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
//                     }`}
//                   >
//                     <Link
//                       href="/primary"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Primary School (1-5)
//                     </Link>
//                     <Link href="/middle" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700">
//                       Middle School (6-8)
//                     </Link>
//                     <Link
//                       href="/secondary"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Secondary School (9-10)
//                     </Link>
//                     <Link
//                       href="/higher-secondary"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Higher Secondary (11-12)
//                     </Link>
//                     <Link
//                       href="/curriculum"
//                       className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
//                     >
//                       Curriculum
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/admissions"
//                 className="px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
//               >
//                 Admissions
//               </Link>
//               <Link
//                 href="/student-life"
//                 className="px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
//               >
//                 Student Life
//               </Link>
//               <Link
//                 href="/news"
//                 className="px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
//               >
//                 News & Events
//               </Link>
//               <Link
//                 href="/gallery"
//                 className="px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
//               >
//                 Gallery
//               </Link>
//               <Link
//                 href="/contact"
//                 className="px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
//               >
//                 Contact
//               </Link>

//               <div className="ml-4 flex items-center space-x-2">
//                 <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-full">
//                   <Search className="h-5 w-5" />
//                 </button>
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5">Apply Now</Button>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-blue-700 hover:text-blue-600 focus:outline-none"
//               >
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="lg:hidden py-4 space-y-2 border-t">
//               <Link href="/" className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md">
//                 Home
//               </Link>
//               <div className="border-b border-gray-100 my-2"></div>
//               <div className="px-4 py-2">
//                 <div className="font-medium text-blue-700">About</div>
//                 <Link href="/about" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   School History
//                 </Link>
//                 <Link href="/mission" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Mission & Vision
//                 </Link>
//                 <Link href="/leadership" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Leadership
//                 </Link>
//                 <Link href="/facilities" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Facilities
//                 </Link>
//               </div>
//               <div className="border-b border-gray-100 my-2"></div>
//               <div className="px-4 py-2">
//                 <div className="font-medium text-blue-700">Academics</div>
//                 <Link href="/primary" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Primary School (1-5)
//                 </Link>
//                 <Link href="/middle" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Middle School (6-8)
//                 </Link>
//                 <Link href="/secondary" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Secondary School (9-10)
//                 </Link>
//                 <Link href="/higher-secondary" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Higher Secondary (11-12)
//                 </Link>
//                 <Link href="/curriculum" className="block py-2 pl-4 text-gray-700 hover:text-blue-700">
//                   Curriculum
//                 </Link>
//               </div>
//               <div className="border-b border-gray-100 my-2"></div>
//               <Link href="/admissions" className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md">
//                 Admissions
//               </Link>
//               <Link href="/student-life" className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md">
//                 Student Life
//               </Link>
//               <Link href="/news" className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md">
//                 News & Events
//               </Link>
//               <Link href="/gallery" className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md">
//                 Gallery
//               </Link>
//               <Link href="/contact" className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md">
//                 Contact
//               </Link>
//               <div className="pt-4 px-4">
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, BookOpen, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-blue-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+977-123-456789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@suryaprakashshool.edu.np</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="text-sm hover:text-blue-200">
                Admin Portal
              </Link>
              <Link href="/parent-portal" className="text-sm hover:text-blue-200">
                Parent Portal
              </Link>
              <Link href="/alumni" className="text-sm hover:text-blue-200">
                Alumni
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-base md:text-xl lg:text-2xl text-gray-800">Surya Prakash Secondary School</h1>
                <p className="text-xs md:text-sm text-gray-500">Excellence in Education Since 1943</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/academics", label: "Academics" },
                { href: "/student-life", label: "Student Life" },
                { href: "/news", label: "News & Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
                { href: "/notice", label: "Notice" },
                { href: "/result", label: "Result" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-sm md:text-base lg:text-sm xl:text-base text-blue-700 hover:bg-blue-50 rounded-md font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/academics", label: "Academics" },
                { href: "/student-life", label: "Student Life" },
                { href: "/news", label: "News & Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
                { href: "/notice", label: "Notice" },
                { href: "/result", label: "Result" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-blue-700 hover:bg-blue-50 rounded-md"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 px-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
