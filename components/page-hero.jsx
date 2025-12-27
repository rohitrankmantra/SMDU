"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageHero({
  title,
  subtitle,
  description,
  image,
  breadcrumbs = [],
}) {
  return (
    <section className="relative min-h-[70vh] flex items-end pt-36 pb-24 overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#050814]/95 via-[#0b1324]/70 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* ================= ORANGE GLOW BLOOM ================= */}
      <div className="absolute -top-40 -left-40 w-130 h-130 bg-[#EA580C]/30 blur-[140px] rounded-full z-0" />
      <div className="absolute top-1/3 -right-32 w-105 h-105 bg-[#EA580C]/20 blur-[120px] rounded-full z-0" />

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
                      className="hover:text-[#EA580C] transition"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#EA580C] font-semibold">
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
              bg-linear-to-r from-[#EA580C] to-amber-400
              shadow-lg shadow-[#EA580C]/40"
            >
              {subtitle}

              {/* glow */}
              <span className="absolute inset-0 blur-xl bg-[#EA580C]/40 rounded-full -z-10" />
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
              <span className="absolute left-0 -bottom-2 w-1/3 h-1 bg-linear-to-r from-[#EA580C] to-amber-400 rounded-full" />
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
