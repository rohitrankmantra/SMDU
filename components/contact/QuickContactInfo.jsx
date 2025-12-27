"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react"

const items = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Smt. Manjira Devi University, Uttarkashi (श्रीमती मंजीरा देवी विश्वविद्यालय, उत्तरकाशी)\nRukmani Nagar, Hitanu Dhanari, Dunda, Uttarkashi, Hitaru, Uttarakhand 249151",
    link: "#location",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 80063-45557 ",
    subContent: "+91 80063-45558",
    link: "tel:+918006345557",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "General: info@smdu.edu.in",
    subContent: "Admissions: admissioncell@smdu.edu.in",
    link: "mailto:info@smdu.edu.in",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon - Sat: 9:00 AM - 5:00 PM",
    subContent: "Sunday: Closed",
    link: "#hours",
  },
]

export default function QuickContactInfo() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* subtle dot texture */}
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className=" mx-auto px-6 relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 mb-5 rounded-full
            bg-[#EA580C]/10 text-[#f97316]
            text-sm font-semibold tracking-wide">
            QUICK CONNECT
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Get in Touch With Us
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Reach out to our team for admissions, campus visits, or general
            inquiries.
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="group relative h-full
                  rounded-t-4xl rounded-b-2xl
                  bg-white/60 backdrop-blur-xl
                  border border-white/70
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300"
                >
                  {/* top accent strip */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f97316] rounded-t-4xl" />

                  <CardContent className="p-8 text-center h-full flex flex-col">

                    {/* icon */}
                    <div
                      className="w-16 h-16 mx-auto mb-6 rounded-2xl
                      bg-white/70 backdrop-blur
                      border border-white/60
                      shadow-sm
                      flex items-center justify-center
                      group-hover:bg-[#EA580C]/15 transition"
                    >
                      <Icon className="w-7 h-7 text-[#f97316]" />
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-[#0F172A] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.content}
                    </p>

                    {item.subContent && (
                      <p className="text-sm text-slate-500 mt-1">
                        {item.subContent}
                      </p>
                    )}

                    {/* CTA
                    <button
                      onClick={() => {
                        if (
                          item.link?.startsWith("tel:") ||
                          item.link?.startsWith("mailto:")
                        ) {
                          window.location.href = item.link
                        } else {
                          document
                            .querySelector(item.link)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="mt-auto pt-6 inline-flex items-center justify-center
                      text-sm font-semibold text-[#EA580C]
                      hover:text-[#c2410c] transition"
                    >
                      Connect Now
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button> */}

                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
