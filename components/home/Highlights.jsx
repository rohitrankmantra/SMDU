"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  GraduationCap,
  Building2,
  Users,
  Award,
} from "lucide-react"

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Highlights data (local)
const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "World-class curriculum designed by industry experts and academicians.",
    link: "/academics",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art facilities including smart classrooms and advanced labs.",
    link: "/campus",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from distinguished professors with vast industry experience.",
    link: "/about#leadership",
  },
  {
    icon: Award,
    title: "Placements",
    description: "95% placement record with top recruiters from across industries.",
    link: "/academics#placements",
  },
]

export default function Highlights() {
  return (
    <section className="py-20 bg-grey-light relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines" />

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Excellence in Every Dimension"
          description="Discover what makes SMDU the preferred choice for thousands of students every year."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                className="h-full group bg-white border-0
                transition-all duration-300
                hover:shadow-xl hover:shadow-[#f46b13]/20"
              >
                <CardContent className="p-6">
                  <div
                    className="w-14 h-14 mb-5 rounded-xl
                    bg-[#f46b13]/10 flex items-center justify-center
                    group-hover:bg-[#f46b13] group-hover:scale-110
                    transition-all duration-300"
                  >
                    <item.icon className="w-7 h-7 text-[#f46b13] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {item.title}
                  </h3>

                  <p className="text-text-muted mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center text-[#f46b13] font-semibold hover:gap-2 transition-all"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
