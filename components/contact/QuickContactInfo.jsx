"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react"

const items = [
  {
    icon: MapPin,
    title: "University Campus",
    content:
      "Smt. Manjira Devi University (SMDU)\nRukmani Nagar, Hitanu Dhanari,\nDunda, Uttarkashi, Uttarakhand – 249151",
    link: null,
  },
  {
    icon: Phone,
    title: "HR Contact",
    content: "+91 80063-45557",
    subContent: "+91 80063-45558",
    link: "tel:+918006345557",
  },
  {
    icon: Mail,
    title: "Careers Email",
    content: "careers@smdu.edu.in",
    subContent: "For faculty & non-teaching positions",
    link: "mailto:careers@smdu.edu.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon – Sat: 10:00 AM – 4:00 PM",
    subContent: "Sunday: Closed",
    link: null,
  },
]

export default function QuickContactInfo() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 pattern-grid opacity-5" />

      {/* FULL WIDTH WRAPPER */}
      <div className="relative z-10 px-6 lg:px-14 xl:px-20">

        {/* ===== HEADER ===== */}
        <motion.div
          className="text-center mb-18"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 mb-5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold tracking-wider">
            CAREER CONNECT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Opportunities at SMDU
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with our HR team for faculty, administrative, and staff
            positions at Smt. Manjira Devi University.
          </p>
        </motion.div>

        {/* ===== FULL WIDTH GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            const hasLink = Boolean(item.link)

            return (
              <motion.a
                key={index}
                href={item.link || undefined}
                className={hasLink ? "block" : "pointer-events-none"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={hasLink ? { y: -8 } : {}}
              >
                <Card
                  className="group h-full bg-white
                  rounded-3xl
                  border border-gray-100
                  border-b-4 border-b-orange-500
                  shadow-md hover:shadow-2xl
                  transition-all duration-300"
                >
                  <CardContent className="p-8 text-center flex flex-col h-full">
                    {/* icon */}
                    <div
                      className="w-14 h-14 mx-auto mb-6 rounded-2xl
                      bg-orange-50 flex items-center justify-center
                      group-hover:bg-orange-100 transition"
                    >
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>

                    {item.subContent && (
                      <p className="text-sm text-gray-500 mt-3">
                        {item.subContent}
                      </p>
                    )}

                    {hasLink && (
                      <span className="mt-auto pt-6 text-sm font-medium text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Contact Now →
                      </span>
                    )}
                  </CardContent>
                </Card>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
