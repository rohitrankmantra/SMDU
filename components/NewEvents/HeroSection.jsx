"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function HeroSection({
  title,
  subtitle,
  image,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative min-h-[70vh] flex items-end  pb-24 overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image || "/home/about2.jpeg"}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

   

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= BREADCRUMBS ================= */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <ol
              className="inline-flex items-center gap-2 text-sm
              bg-black/40 backdrop-blur-lg
              px-5 py-2.5 rounded-full text-white/80
              border border-white/10"
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-[#EA580C] transition"
                >
                  Home
                </Link>
              </li>

              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 opacity-60" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#f56a14] transition"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#f56a14] font-semibold">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Subtitle pill */}
          {subtitle && (
            <span
              className="relative inline-flex items-center gap-2
              px-6 py-2.5 rounded-full mb-6
              text-sm font-semibold text-white
              bg-[#f56a14]
              shadow-lg shadow-[#f56a14]/40"
            >
              {subtitle}

              {/* glow */}
              {/* <span className="absolute inset-0  bg-[#f56a14] rounded-full -z-10" /> */}
            </span>
          )}

          {/* Title */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl
            font-bold text-white mb-6 leading-tight"
          >
            <span className="relative inline-block">
              {title}
              {/* underline accent */}
              <span className="absolute left-0 -bottom-2 w-1/3 h-1 bg-[#f56a14] rounded-full" />
            </span>
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
