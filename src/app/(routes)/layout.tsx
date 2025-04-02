'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow pt-16 px-4 bg-gray-50"> {/* Adjusted padding to push content below the navbar */}
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
