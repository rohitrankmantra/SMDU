"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    quote: "SMDU has been a game-changer in my career. The exceptional faculty empowered me.",
    name: "Priya Sharma",
    role: "B.Tech 2022 · Google",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
  {
    quote: "The holistic approach at SMDU prepared me for life, not just a job.",
    name: "Rahul Verma",
    role: "MBA 2021 · McKinsey",
    image: "https://images.pexels.com/photos/3772504/pexels-photo-3772504.jpeg",
  },
  {
    quote: "Unparalleled research facilities that foster real innovation.",
    name: "Dr. Anjali Gupta",
    role: "PhD 2020 · ISRO",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    quote: "Campus life and mentorship prepared me for global challenges.",
    name: "Amit Singh",
    role: "B.Sc 2023 · Deloitte",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    quote: "Academics + industry exposure helped me launch my startup.",
    name: "Sneha Patel",
    role: "BBA 2024 · Founder",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    quote: "SMDU has been a game-changer in my career. The exceptional faculty empowered me.",
    name: "Priya Sharma",
    role: "B.Tech 2022 · Google",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
]

const ITEMS_PER_SLIDE = 3

export default function TestimonialSlider({ autoplay = true, interval = 4500 }) {
  const [index, setIndex] = useState(0)
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides)
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, totalSlides])

  const prev = () => setIndex((prev) => Math.max(0, prev - 1))
  const next = () => setIndex((prev) => Math.min(totalSlides - 1, prev + 1))

  return (
    <section className="py-20 bg-[#faf9f6] relative overflow-hidden border border-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,107,19,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="Our Students Review"
          description="Real stories from students who shaped their future at SMDU"
        />

        <div className="relative mt-14 overflow-hidden">
          {/* SLIDER */}
          <motion.div
            className="flex will-change-transform"
            animate={{ x: `-${index * 100}%` }}
            transition={{
              duration: 1.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials
                    .slice(
                      slideIndex * ITEMS_PER_SLIDE,
                      slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                    )
                    .map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="group"
                      >
                        <Card className="relative rounded-3xl bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl overflow-hidden">

                          {/* ✅ TOP BORDER — FIXED */}
                          <div className="absolute top-0 left-0 right-0 h-0.75
                            bg-linear-to-r from-[#f46b13] via-orange-500 to-[#f46b13]
                            z-20 pointer-events-none" />

                          {/* Glass shine BELOW border */}
                          <div className="absolute inset-0 z-10 
                            bg-linear-to-r from-transparent via-white/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <CardContent className="p-7 relative z-30">
                            <p className="italic text-gray-800 mb-6 leading-relaxed font-light">
                              "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                              <div className="relative">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 rounded-full object-cover ring-2 ring-white/50 shadow-lg"
                                />
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#f46b13] rounded-full flex items-center justify-center shadow-md">
                                  <Star className="w-2.5 h-2.5 fill-white" />
                                </div>
                              </div>

                              <div>
                                <div className="font-serif font-bold text-lg text-gray-900">
                                  {item.name}
                                </div>
                                <div className="text-sm text-[#f46b13] font-medium mb-2">
                                  {item.role}
                                </div>
                                <div className="flex gap-0.5">
                                  {[...Array(5)].map((_, s) => (
                                    <Star
                                      key={s}
                                      className="w-4 h-4 fill-[#f46b13] text-[#f46b13]"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl shadow-2xl p-3 rounded-full hover:bg-[#f46b13] hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl shadow-2xl p-3 rounded-full hover:bg-[#f46b13] hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-[#f46b13]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
