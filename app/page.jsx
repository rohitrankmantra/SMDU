"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, Users, Building2, Award, Calendar, ChevronRight, Play, Quote } from "lucide-react"
import Hero from "../components/home/Hero"
import Highlights from "../components/home/Highlights"
import About from "../components/home/About"
import Programs from "../components/home/Programs"
import CTA from "../components/home/CTA"

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



// News data
const news = [
  {
    date: "Dec 15, 2024",
    title: "SMDU Ranks Among Top 50 Universities in India",
    category: "Achievement",
    image: "/university-ranking-trophy-award.jpg",
  },
  {
    date: "Dec 10, 2024",
    title: "International Conference on AI & Machine Learning",
    category: "Events",
    image: "/conference-hall-academic-event.jpg",
  },
  {
    date: "Dec 05, 2024",
    title: "MoU Signed with Leading Tech Companies",
    category: "Partnership",
    image: "/business-handshake-agreement-signing.jpg",
  },
]

// Testimonials
const testimonials = [
  {
    quote:
      "SMDU has transformed my career. The faculty's guidance and world-class infrastructure helped me achieve my dreams.",
    name: "Priya Sharma",
    role: "Software Engineer, Google",
    batch: "B.Tech 2022",
    image: "/professional-indian-woman-portrait.png",
  },
  {
    quote:
      "The holistic education at SMDU prepared me not just for a job, but for life. Forever grateful for this journey.",
    name: "Rahul Verma",
    role: "Management Consultant, McKinsey",
    batch: "MBA 2021",
    image: "/professional-indian-man-portrait.png",
  },
  {
    quote:
      "Research facilities at SMDU are unparalleled. The support for innovation is what makes this university special.",
    name: "Dr. Anjali Gupta",
    role: "Research Scientist, ISRO",
    batch: "Ph.D 2020",
    image: "/professional-woman-scientist.png",
  },
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
      {/* News & Events Section */}
      <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-gold">
                Stay Updated
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">Latest News & Events</h2>
            </div>
            <Link
              href="/media"
              className="inline-flex items-center text-gold font-semibold hover:gap-2 transition-all mt-4 md:mt-0"
            >
              View All News <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-white rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-dark mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <Link
                      href="/media"
                      className="inline-flex items-center text-gold font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Alumni Say"
            description="Hear from our successful graduates about their journey at SMDU."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-gold/30 mb-4" />
                    <p className="text-text-muted mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-text-dark">{testimonial.name}</div>
                        <div className="text-sm text-gold">{testimonial.role}</div>
                        <div className="text-xs text-text-muted">{testimonial.batch}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Preview */}
      <section className="py-20 bg-grey-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines" />
        <div className="container mx-auto px-6 relative">
          <SectionHeading
            subtitle="Our Campus"
            title="Experience World-Class Facilities"
            description="A sprawling campus with modern infrastructure designed for holistic learning."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: "/modern-university-building-architecture.jpg", span: "row-span-2" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=200&width=300" },
              { image: "/placeholder.svg?height=400&width=300", span: "row-span-2" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${item.span || ""} overflow-hidden rounded-2xl`}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt="Campus"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-white">
              Explore Campus
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
