"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Users, GraduationCap } from "lucide-react"

const stats = [
  { value: "25+", label: "Years of Excellence", icon: Award },
  { value: "120+", label: "Academic Programs", icon: BookOpen },
  { value: "15K+", label: "Global Students", icon: Users },
  { value: "300+", label: "Faculty Members", icon: GraduationCap },
]

export default function StatsSection() {
  return (
    <section className="relative py-12 ">
      <div className="container mx-auto px-6 sm:px-12">

        <div
          className="
            grid grid-cols-2 md:grid-cols-4 gap-6 
            bg-white
            rounded-3xl p-6 sm:p-10
            shadow-lg
          "
        >

          {stats.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="
                  text-center p-4 rounded-2xl border border-orange-100
                   transition
                "
              >
                <div className="flex justify-center mb-2">
                  <Icon className="w-8 h-8 text-[#f46b13]" />
                </div>

                <p className="text-4xl font-bold text-[#f46b13]">
                  {item.value}
                </p>

                <p className="text-gray-700 mt-2 text-sm font-medium">
                  {item.label}
                </p>
              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
