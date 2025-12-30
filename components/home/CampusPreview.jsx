"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const campusImages = [
  { src: "home/bg.jpeg" },
  { src: "home/about2.jpeg" },
  { src: "home/campus1.heic" },
  { src: "home/campus2.jpg" },
  { src: "home/campus3.heic" },
  { src: "home/campus4.jpg" },
  { src: "home/campus5.heic" },
  { src: "home/campus6.heic" },
  { src: "home/campus7.heic" },
  { src: "home/campus8.heic" },
  { src: "home/campus9.jpeg" },
  { src: "home/campus10.jpeg" },
  { src: "home/campus11.jpeg" },
  { src: "home/campus12.jpeg" },
  { src: "home/campus13.jpeg" },
  { src: "home/campus14.jpeg" },
]

export default function CampusPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? campusImages.length - 1 : prev - 1
    )

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === campusImages.length - 1 ? 0 : prev + 1
    )

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handler = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxOpen])

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          subtitle="Our Campus"
          title="Experience World-Class Facilities"
          description="A vibrant campus with modern infrastructure, designed to inspire learning, innovation, and growth."
        />

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {campusImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt="SMDU Campus"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-6 text-white p-3 bg-white/10 rounded-full"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.img
                key={currentIndex}
                src={campusImages[currentIndex].src}
                className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              />

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-6 text-white p-3 bg-white/10 rounded-full"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

