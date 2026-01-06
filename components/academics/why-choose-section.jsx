"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Microscope,
  Cpu,
  Briefcase,
  Globe,
  Users,
  Layers,
  Award,
} from "lucide-react"

/* icon mapper – page se sirf title/description aayega */
const ICONS = [
  GraduationCap,
  Award,
  Microscope,
  Cpu,
  Briefcase,
  Layers,
  Globe,
  Users,
]

export default function WhyChooseSection({ subtitle, items = [] }) {
  return (
    <section className="relative py-28 overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">
      {/* ===== SAME BG FEEL AS OTHER SECTIONS ===== */}
      <div className="absolute inset-0 pattern-lines opacity-[0.07]" />
      <div className="absolute inset-0 bg-linear-to-tr from-[#f56a14]/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          {subtitle && (
            <span className="inline-block mb-6 px-6 py-2 rounded-full text-sm font-bold tracking-wide bg-orange-100 text-[#f56a14] uppercase">
              {subtitle}
            </span>
          )}

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Why Choose </span>
            <span className="text-[#f56a14]">Us</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what makes our academic ecosystem future-ready, industry-aligned
            and student-focused.
          </p>
        </motion.div>

        {/* ===== Cards Grid ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]
                hover:shadow-[0_25px_60px_-20px_rgba(245,106,20,0.45)]
                transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              >
                {/* accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#f56a14]/10 rounded-bl-full" />

                {/* hover gradient wash */}
                <div className="absolute inset-0 bg-linear-to-br from-[#f56a14]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center
                    bg-linear-to-br from-[#f56a14] to-orange-500 text-white
                    shadow-lg shadow-orange-500/30
                    group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f56a14] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
