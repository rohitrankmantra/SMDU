"use client"

import { motion } from "framer-motion"

export default function SectionBlock({
  title,
  subtitle,
  description,
  image,
  reverse = false,
}) {
  return (
    <section className="relative overflow-hidden py-20 ">
          <div className="absolute inset-0 pattern-lines " />

      <div className="container mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {subtitle && (
              <span className="text-[#f56a14] font-semibold uppercase tracking-wide text-sm bg-orange-100 px-3 py-1 rounded-full inline-block">
                {subtitle}
              </span>
            )}

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6  bg-clip-text text-black leading-tight">
              {title}
            </h2>

            <p className="text-gray-600 leading-relaxed text-md max-w-xl">
              {description}
            </p>
          </motion.div>

          {/* ================= IMAGE ================= */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
    
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}