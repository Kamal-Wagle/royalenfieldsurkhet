'use client';

import { Footer } from "@/components/Footer";
import  { Navigation } from "@/components/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navigation />

      {/* Main content area */}
      <main className=""> {/* Adjusted padding to push content below the Navigation */}
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


// import type React from "react"
// import type { Metadata } from "next"
// import { Poppins } from "next/font/google"
// import "./globals.css"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
//   variable: "--font-poppins",
//   display: "swap",
//   fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
// })

// export const metadata: Metadata = {
//   metadataBase: new URL("https://abcreconditionsurkhet.com"),
//   title: {
//     default: "Abc Recondition Surkhet - #1 Premium Second Hand Bikes & Scooters Dealer in Karnali Pradesh",
//     template: "%s | Abc Recondition Surkhet - Premium Used Bikes & Scooters",
//   },
//   description:
//     "🏍️ Nepal's most trusted second-hand bike & scooter dealer in Surkhet, Karnali Pradesh. ⭐ 2500+ happy customers, 4.9★ rating. 🛡️ 6-month warranty, expert 50-point inspection, best prices guaranteed! Honda, Yamaha, TVS, Bajaj available.",
//   keywords: [
//     "second hand bikes Surkhet",
//     "used scooters Karnali Pradesh",
//     "motorcycle dealer Nepal",
//     "bike showroom Surkhet",
//     "Honda bikes Surkhet",
//     "Yamaha scooters Nepal",
//     "TVS Jupiter Surkhet",
//     "Bajaj Pulsar used",
//     "pre-owned vehicles Nepal",
//     "reconditioned bikes Karnali",
//     "affordable motorcycles Surkhet",
//     "quality used bikes Nepal",
//     "bike financing Surkhet",
//     "motorcycle inspection Nepal",
//     "trusted bike dealer Karnali Pradesh",
//   ],
//   authors: [{ name: "Abc Recondition Surkhet", url: "https://abcreconditionsurkhet.com" }],
//   creator: "Abc Recondition Surkhet",
//   publisher: "Abc Recondition Surkhet",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://abcreconditionsurkhet.com",
//     siteName: "Abc Recondition Surkhet",
//     title: "Abc Recondition Surkhet - #1 Premium Second Hand Bikes & Scooters Dealer",
//     description:
//       "🏍️ Nepal's most trusted dealer with 2500+ happy customers. Premium quality second-hand bikes & scooters in Surkhet, Karnali Pradesh. 6-month warranty guaranteed!",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Abc Recondition Surkhet - Premium Second Hand Bikes and Scooters Showroom",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Abc Recondition Surkhet - #1 Premium Second Hand Bikes & Scooters",
//     description: "🏍️ Nepal's most trusted dealer with 2500+ happy customers in Karnali Pradesh. 6-month warranty!",
//     images: ["/twitter-image.jpg"],
//     creator: "@AbcReconditionSurkhet",
//   },
//   verification: {
//     google: "your-google-verification-code",
//     yandex: "your-yandex-verification-code",
//     yahoo: "your-yahoo-verification-code",
//   },
//   alternates: {
//     canonical: "https://abcreconditionsurkhet.com",
//   },
//   category: "Automotive",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <head>
//         <link rel="canonical" href="https://abcreconditionsurkhet.com" />
//         <meta name="geo.region" content="NP-KA" />
//         <meta name="geo.placename" content="Surkhet, Karnali Pradesh" />
//         <meta name="geo.position" content="28.6049;81.6230" />
//         <meta name="ICBM" content="28.6049, 81.6230" />
//         <meta name="theme-color" content="#8B5CF6" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="manifest" href="/site.webmanifest" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "AutoDealer",
//               name: "Abc Recondition Surkhet",
//               description: "Premium second-hand bikes and scooters dealer in Surkhet, Karnali Pradesh",
//               url: "https://abcreconditionsurkhet.com",
//               logo: "https://abcreconditionsurkhet.com/logo.png",
//               image: "https://abcreconditionsurkhet.com/showroom.jpg",
//               telephone: "+977-123-456-789",
//               email: "info@abcrecondition.com",
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "Main Market Road",
//                 addressLocality: "Surkhet",
//                 addressRegion: "Karnali Pradesh",
//                 addressCountry: "Nepal",
//               },
//               geo: {
//                 "@type": "GeoCoordinates",
//                 latitude: "28.6049",
//                 longitude: "81.6230",
//               },
//               openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
//               priceRange: "Rs. 50,000 - Rs. 300,000",
//               aggregateRating: {
//                 "@type": "AggregateRating",
//                 ratingValue: "4.9",
//                 reviewCount: "500",
//                 bestRating: "5",
//                 worstRating: "1",
//               },
//               sameAs: ["https://facebook.com/abcreconditionsurkhet", "https://instagram.com/abcreconditionsurkhet"],
//             }),
//           }}
//         />
//       </head>
//       <body className={poppins.className}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
