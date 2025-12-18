"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Hero from "../components/home/Hero"
import Highlights from "../components/home/Highlights"
import About from "../components/home/About"
import Programs from "../components/home/Programs"
import CTA from "../components/home/CTA"
import Blogs from "../components/home/Blogs"
import Testimonials from "../components/home/Testimonials";
import CampusPreview from "../components/home/CampusPreview";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Stats data
const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Programs Offered" },
  { value: "10,000+", label: "Students" },
  { value: "500+", label: "Faculty Members" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero/>
      <Highlights/>
      <About/>
      <Programs/>
      <CTA/>
      <Blogs/>
      <Testimonials/>
      <CampusPreview/>
      <Footer />
    </main>
  )
}
