"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Clock,
  GraduationCap,
  Briefcase,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function CourseOverview({ programme }) {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-lines opacity-1" />

      <div className="max-w-6xl mx-auto px-6">

        {/* ================= OVERVIEW + IMAGE ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Programme Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {programme.overview}
              </p>
            </div>

            {/* Duration */}
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#F46B13]/10">
                  <Clock className="w-5 h-5 text-[#F46B13]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Duration
                </h3>
              </div>
              <p className="text-gray-700 font-medium">
                {programme.duration}
              </p>
            </div>

            {/* Eligibility */}
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#F46B13]/10">
                  <GraduationCap className="w-5 h-5 text-[#F46B13]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Eligibility Criteria
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {programme.eligibility}
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src={programme.image}
                alt={programme.title}
                width={600}
                height={520}
                priority
                className="w-full h-115 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-linear-to-r from-[#F46B13] to-[#FF9F1C] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              Approved Programme
            </div>
          </div>
        </div>

        {/* ================= CAREER OPPORTUNITIES ================= */}
        <section className="rounded-3xl bg-[#F46B13]/5 p-12">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 px-7 py-3 bg-white rounded-full shadow">
              <Briefcase className="w-6 h-6 text-[#F46B13]" />
              <h2 className="text-3xl font-bold text-gray-900">
                Career Opportunities
              </h2>
            </div>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              This programme prepares graduates for rewarding careers across multiple professional domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {programme.careerOpportunities.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F46B13]/10 text-[#F46B13]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              href="/admissions/enquiry"
              className="inline-flex items-center gap-3 bg-[#F46B13]
                         text-white px-10 py-2 rounded-full text-lg font-semibold
                         hover:shadow-xl transition cursor-pointer"
            >
              <GraduationCap className="w-5 h-5" />
              Apply for Admission
            </Link>
          </div>
        </section>

      </div>
    </section>
  )
}
