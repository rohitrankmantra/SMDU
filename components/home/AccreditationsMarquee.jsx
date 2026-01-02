"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const accreditations = [
  { name: "Government of Uttarakhand", logo: "/home/uk2.webp" },
  { name: "Pharmacy Council of India (PCI)", logo: "/home/uk3.webp" },
  { name: "Indian Nursing Council (INC)", logo: "/home/uk4.webp" },
  { name: "Uttarakhand Board of Technical Education (UBTER)", logo: "/home/uk1.webp" },
]

export default function AccreditationsMarquee() {

  const [index, setIndex] = useState(0)

  const next = () => setIndex((p) => (p + 1) % accreditations.length)
  const prev = () => setIndex((p) => (p === 0 ? accreditations.length - 1 : p - 1))

  return (
    <section className="relative py-28 bg-white bg-[url('/home/pattern1.jpg')] bg-cover bg-center overflow-hidden">

      <div className="container mx-auto px-6 relative">

        <SectionHeading
          subtitle="Accreditations"
          title="Accreditations & Recognitions"
          description="Recognized by prestigious national and professional regulatory bodies."
        />

        {/* DESKTOP MARQUEE */}
        <div className="hidden md:block relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-12 items-stretch"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {[...accreditations, ...accreditations].map((item, i) => (
              <LogoCard key={i} item={item} />
            ))}
          </motion.div>
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden relative mt-12">

          {/* NAV BUTTON LEFT */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md border border-gray-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-[#f46b13]" />
          </button>

          {/* CARD */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto w-72"
          >
            <LogoCard item={accreditations[index]} />
          </motion.div>

          {/* NAV BUTTON RIGHT */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white shadow-md border border-gray-200 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-[#f46b13]" />
          </button>

        </div>

      </div>
    </section>
  )
}

function LogoCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="relative shrink-0 md:w-72 w-full rounded-[28px] bg-white/80 backdrop-blur-xl border border-[#f46b13]/20 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden mx-auto"
    >
      <div className="relative p-10 flex flex-col items-center justify-center h-full">
        <div className="relative h-28 w-full">
          <Image src={item.logo} alt={item.name} fill className="object-contain" />
        </div>

        <p className="mt-7 text-sm font-semibold text-[#1a365d] text-center tracking-wide">
          {item.name}
        </p>
      </div>
    </motion.div>
  )
}
