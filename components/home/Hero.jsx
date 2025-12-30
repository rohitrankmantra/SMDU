"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  // "/home/homebg.jpeg",
  "/home/bg.jpeg",
  // "/home/about2.jpeg",
]

export default function Hero({
  title = "Shaping Tomorrow’s Leaders",
  highlight = "Today",
  subtitle = "World-class education, innovative research, and holistic development for future leaders.",
}) {
  const [index, setIndex] = useState(0)

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  const nextSlide = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  // (OPTIONAL) Auto slide — remove if not needed
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black/40">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt="Hero Background"
              fill
              priority
              className="object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 pt-32 sm:pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 
              text-white text-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#f46b13] animate-pulse" />
              Excellence in Higher Education
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl 
              font-bold text-white leading-tight"
            >
              {title}{" "}
              <span className="relative text-[#f46b13]">
                {highlight}
                <span className="absolute left-0 -bottom-3 w-full h-1 
                bg-[#f46b13]/40 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                className="bg-[#f46b13] hover:bg-[#e35c00] 
                text-white px-9 py-6 rounded-xl 
                shadow-xl hover:shadow-[#f46b13]/40 
                transition group"
              >
                Apply Now
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white 
                px-9 py-6 rounded-xl backdrop-blur-md 
                hover:bg-white/20"
              >
                <Play className="mr-3 h-5 w-5" />
                Virtual Tour
              </Button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ================= NAV BUTTONS =================
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 
        z-20 bg-white/20 hover:bg-white/30 text-white 
        p-3 rounded-full backdrop-blur-md border border-white/30"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 
        z-20 bg-white/20 hover:bg-white/30 text-white 
        p-3 rounded-full backdrop-blur-md border border-white/30"
      >
        <ArrowRight />
      </button> */}

      <div className="pointer-events-none absolute inset-0 
        shadow-[inset_0_0_220px_rgba(0,0,0,0.75)]" />

    </section>
  )
}
