"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Offer", href: "/offer" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when the pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav className="bg-white/40 backdrop-blur-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-luxury-gold font-serif text-xl font-bold">
              Abc Restaurant
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    pathname === item.href ? "text-luxury-gold" : "text-luxury-cream hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-luxury-gold hover:bg-luxury-silver text-luxury-charcoal transition-colors duration-300">
                Reserve
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-luxury-cream hover:text-luxury-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  pathname === item.href ? "text-luxury-gold" : "text-luxury-cream hover:text-luxury-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-2 bg-luxury-gold hover:bg-luxury-silver text-luxury-charcoal transition-colors duration-300">
              Reserve
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
