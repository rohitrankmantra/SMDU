"use client"

import { motion } from "framer-motion"
import { Clock, GraduationCap, Briefcase, CheckCircle } from "lucide-react"

export default function CourseOverview({ programme }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* TITLE */}
          <div>
            <h2 className="text-2xl font-bold text-[#3B2F1E] mb-4">
              Course Overview
            </h2>
            <p className="text-lg text-[#5C4A34] leading-relaxed">
              {programme.overview}
            </p>
          </div>

          {/* DURATION */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-[#7A5C32]" />
              <h2 className="text-2xl font-semibold text-[#3B2F1E]">
                Duration
              </h2>
            </div>
            <p className="text-lg text-[#5C4A34]">
              {programme.duration}
            </p>
          </div>

          {/* ELIGIBILITY */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-[#7A5C32]" />
              <h2 className="text-2xl font-semibold text-[#3B2F1E]">
                Eligibility Criteria
              </h2>
            </div>
            <p className="text-lg text-[#5C4A34] leading-relaxed">
              {programme.eligibility}
            </p>
          </div>

          {/* CAREER */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-[#7A5C32]" />
              <h2 className="text-2xl font-semibold text-[#3B2F1E]">
                Career Opportunities
              </h2>
            </div>

            <ul className="space-y-3">
              {programme.careerOpportunities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-[#5C4A34]"
                >
                  <CheckCircle className="w-5 h-5 text-[#7A5C32] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="sticky top-28"
        >
          <img
            src={programme.image}
            alt={programme.title}
            className="w-full h-130 object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  )
}
