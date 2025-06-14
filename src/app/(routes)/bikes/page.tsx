import type { Metadata } from "next"
import BikesClientPage from "./BikesClientPage"

export const metadata: Metadata = {
  title: "All Second Hand Bikes & Scooters for Sale in Surkhet | 200+ Premium Vehicles",
  description:
    "🏍️ Browse 200+ premium second-hand bikes & scooters in Surkhet, Karnali Pradesh. Honda, Yamaha, TVS, Bajaj available. ✅ Expert inspection, 6-month warranty, best prices guaranteed!",
  keywords: [
    "second hand bikes for sale Surkhet",
    "used scooters Karnali Pradesh",
    "Honda CB Shine used Surkhet",
    "Yamaha FZ second hand Nepal",
    "TVS Jupiter scooter Surkhet",
    "Bajaj Pulsar used bike Nepal",
    "affordable motorcycles Surkhet",
    "pre-owned vehicles Karnali Pradesh",
  ],
  openGraph: {
    title: "All Second Hand Bikes & Scooters for Sale in Surkhet | 200+ Premium Vehicles",
    description:
      "🏍️ Browse 200+ premium second-hand bikes & scooters. Expert inspection, 6-month warranty, best prices!",
    url: "https://abcreconditionsurkhet.com/bikes",
  },
}

export default function BikesPage() {
  return <BikesClientPage />
}
