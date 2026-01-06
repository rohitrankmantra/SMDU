"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function DeansMessage({
  title = "Dean’s Message",
  message,
  deanName,
  designation,
}) {
  return (
    <section className="relative py-28 bg-linear-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* background pattern – same site language */}
      <div className="absolute inset-0 pattern-lines opacity-[0.06]" />
      {/* <div className="absolute inset-0 bg-linear-to-tr from-[#f56a14]/5 to-transparent" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-14 text-center">
            {title}
          </h2>

          {/* Message Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 md:p-14">
            {/* quote icon */}
            <div className="absolute -top-6 left-10 w-14 h-14 rounded-full bg-[#f56a14] flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* left accent line */}
            <div className="absolute left-0 top-10 bottom-10 w-1 bg-[#f56a14] rounded-full" />

            {/* message text */}
            <p className="text-gray-700 text-md leading-relaxed font-medium mb-10">
              {message}
            </p>

            {/* dean identity */}
            <div className="mt-8">
              <p className="text-xl font-bold text-gray-900">
                {deanName}
              </p>
              <p className="text-sm tracking-wide text-[#f56a14] uppercase font-semibold">
                {designation}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
