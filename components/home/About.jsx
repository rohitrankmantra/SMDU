"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= IMAGE GRID ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/university-library-interior-modern.jpg"
                  alt="Library"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="/university-graduation-ceremony-students.jpg"
                  alt="Graduation"
                  className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
              </div>

              <div className="space-y-4 pt-8">
                <img
                  src="/university-classroom-students-learning.jpg"
                  alt="Classroom"
                  className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <img
                  src="/university-campus-garden-students.jpg"
                  alt="Campus"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-4 -right-4 
              bg-[#f46b13] text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="font-serif text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-[#f46b13]">
              About SMDU
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
              A Legacy of Academic Excellence
            </h2>

            <p className="text-text-muted mb-6 leading-relaxed">
              Established with a vision to provide quality higher education,
              Smt. Manjira Devi University has grown to become one of the most
              prestigious institutions in the region.
            </p>

            <p className="text-text-muted mb-8 leading-relaxed">
              With state-of-the-art infrastructure, experienced faculty, and
              strong industry partnerships, we prepare students to excel
              globally and responsibly.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f46b13]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#f46b13]" />
                </div>
                <div>
                  <div className="font-semibold text-text-dark">
                    NAAC A+ Grade
                  </div>
                  <div className="text-sm text-text-muted">Accredited</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f46b13]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#f46b13]" />
                </div>
                <div>
                  <div className="font-semibold text-text-dark">50,000+</div>
                  <div className="text-sm text-text-muted">Alumni Network</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-[#f46b13] hover:bg-[#e35c00] text-white">
              Discover Our Story
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
