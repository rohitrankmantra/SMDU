"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-[#f46b13]/70 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Begin Your Journey at SMDU
            </h2>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Admissions are now open for the academic year 2025–26. Take the
              first step towards a bright future and join our community of
              learners and achievers.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#f46b13] hover:bg-grey-light"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Download Prospectus
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
