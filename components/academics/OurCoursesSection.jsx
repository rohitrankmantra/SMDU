"use client"

import { motion } from "framer-motion"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OurCoursesSection({
  subtitle = "Our Courses",
  title = "Academic Programs",
  courses = [],
}) {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pattern-grid opacity-[0.06]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block mb-4 px-6 py-2 rounded-full bg-orange-100 text-[#f56a14] text-sm font-bold uppercase">
            {subtitle}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {title}
          </h2>
        </motion.div>

        {/* Courses */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[#f56a14]" />

              {/* Floating index */}
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-gray-100 group-hover:text-[#f56a14]/20 transition">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#f56a14]/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-[#f56a14]" />
                </div>

                {/* content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f56a14] transition">
                  {course.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  {course.description}
                </p>

                {/* CTA */}
                <Link
                  href={course.href || "#"}
                  className="inline-flex items-center gap-2 font-semibold text-[#f56a14] hover:gap-3 transition-all"
                >
                  Explore Program
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
