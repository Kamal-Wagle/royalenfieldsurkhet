import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Abc Recondition Surkhet - 12+ Years Trusted Second Hand Bike Dealer in Karnali Pradesh",
  description:
    "🏢 Learn about Abc Recondition Surkhet - Karnali Pradesh's most trusted second-hand bike dealer since 2012. 👥 2500+ happy customers, expert team, 50-point inspection process. Our story, values & commitment to quality.",
  keywords: [
    "about Abc Recondition Surkhet",
    "trusted bike dealer Karnali Pradesh",
    "second hand bike dealer history Nepal",
    "motorcycle dealer experience Surkhet",
    "vehicle inspection process Nepal",
    "customer testimonials bike dealer",
    "quality assurance used bikes Nepal",
  ],
  openGraph: {
    title: "About Abc Recondition Surkhet - 12+ Years Trusted Dealer",
    description:
      "🏢 Karnali Pradesh's most trusted second-hand bike dealer since 2012. 2500+ happy customers, expert team.",
    url: "https://abcreconditionsurkhet.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
