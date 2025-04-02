import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Image from 'next/image'; // Import Image from next/image
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-luxury-cream flex flex-col pt-16"> {/* Added pt-16 for navbar height */}

        {/* Hero Section */}
        <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-hero-image.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-6 py-16 md:px-12">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to [Restaurant Name]</h1>
            <p className="text-2xl mb-6">Experience the finest food and exceptional service.</p>
            <Button
  variant="default" // or any other valid variant like "outline", "ghost"
  color="primary"
  size="lg"
  className="bg-primary-600 text-white text-lg py-3 px-8 rounded-lg hover:bg-primary-700 transition"

>
<Link href="/reservation">
    Make a Reservation
  </Link>
</Button>

          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 sm:px-12 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              At [Restaurant Name], we bring together the finest ingredients, creative culinary expertise, and a
              welcoming atmosphere to create an unforgettable dining experience.
            </p>
            <Button
              variant="link"
              color="primary"
              size="lg"
              className="text-primary-500 text-lg font-medium hover:text-primary-600 transition"
              
            >
              <Link href="/about">
              Learn More About Us
  </Link>
             
            </Button>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16 px-6 sm:px-12 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Featured Dishes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Dish 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Image src="/path-to-dish1.jpg" alt="Dish 1" width={400} height={300} className="w-full h-48 object-cover mb-6 rounded-lg" />
                <h3 className="text-xl font-semibold text-gray-800">Dish Name 1</h3>
                <p className="text-gray-600 mt-2">A brief description of the dish goes here.</p>
              </div>
              {/* Dish 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Image src="/path-to-dish2.jpg" alt="Dish 2" width={400} height={300} className="w-full h-48 object-cover mb-6 rounded-lg" />
                <h3 className="text-xl font-semibold text-gray-800">Dish Name 2</h3>
                <p className="text-gray-600 mt-2">A brief description of the dish goes here.</p>
              </div>
              {/* Dish 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <Image src="/path-to-dish3.jpg" alt="Dish 3" width={400} height={300} className="w-full h-48 object-cover mb-6 rounded-lg" />
                <h3 className="text-xl font-semibold text-gray-800">Dish Name 3</h3>
                <p className="text-gray-600 mt-2">A brief description of the dish goes here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 px-6 sm:px-12 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">What Our Guests Are Saying</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Review 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs text-center hover:shadow-xl transition duration-300">
                <p className="text-lg italic text-gray-600 mb-4">
                  &quot;The food was absolutely amazing! I couldn&apos;t have asked for a better dining experience.&quot;
                </p>
                <p className="font-semibold text-gray-800">Customer Name</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="text-yellow-500 h-6 w-6" />
                  ))}
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs text-center hover:shadow-xl transition duration-300">
                <p className="text-lg italic text-gray-600 mb-4">
                  &quot;A true gem in the city! The ambiance and service were phenomenal.&quot;
                </p>
                <p className="font-semibold text-gray-800">Customer Name</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="text-yellow-500 h-6 w-6" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section id="reservation" className="py-16 px-6 sm:px-12 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Make a Reservation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-800 mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-800 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Reservation Date</label>
                <Input
                  type="date"
                  name="reservationDate"
                  required
                  className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <Button
                type="submit"
                variant="default" // or any other valid variant like "outline", "ghost"
                color="primary"
                size="lg"
                className="w-full bg-primary-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-primary-700 transition"
              >

                Reserve a Table
              </Button>
            </form>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-6 sm:px-12 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have questions or need assistance? Feel free to contact us anytime!
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary-500 h-8 w-8" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">[Restaurant Address]</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary-500 h-8 w-8" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">[Phone Number]</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">[Email Address]</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
