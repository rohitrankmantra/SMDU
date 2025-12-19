"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus Life", href: "/campus" },
    { label: "Research", href: "/academics#research" },
    { label: "Placements", href: "/academics#placements" },
  ],
  programs: [
    { label: "Engineering", href: "/academics#engineering" },
    { label: "Management", href: "/academics#management" },
    { label: "Sciences", href: "/academics#sciences" },
    { label: "Humanities", href: "/academics#humanities" },
    { label: "Commerce", href: "/academics#commerce" },
    { label: "Law", href: "/academics#law" },
  ],
  resources: [
    { label: "Student Portal", href: "#" },
    { label: "Faculty Portal", href: "#" },
    { label: "Library", href: "/campus#library" },
    { label: "Downloads", href: "/media#downloads" },
    { label: "Career", href: "#" },
    { label: "Alumni", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-text-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 pattern-grid" />

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Stay Connected with SMDU
            </h3>
            <p className="text-white/70 mb-6">
              Subscribe for latest updates, news, and events.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f46b13]"
              />
              <Button className="bg-[#f46b13] hover:bg-[#e35c00] text-white">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* LOGO + INFO */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              {/* LOGO IMAGE */}
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg">
                <img
                  src="/logo.webp"   // 👈 put your logo here
                  alt="SMDU Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold group-hover:text-[#f46b13] transition">
                  Smt. Manjira Devi
                </h2>
                <p className="text-[#f46b13] text-sm font-semibold uppercase">
                  University
                </p>
              </div>
            </Link>

            <p className="text-white/70 mb-6">
              Delivering world-class education, innovation, and research.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#f46b13]" />
                <span className="text-white/70">Campus, India</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#f46b13]" />
                <span className="text-white/70">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#f46b13]" />
                <span className="text-white/70">info@smdu.edu.in</span>
              </div>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif font-semibold text-lg mb-6 text-[#f46b13] capitalize">
                {title.replace(/([A-Z])/g, " $1")}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#f46b13] transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.15, y: -4, rotate: 4 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="
                  relative w-10 h-10 rounded-full
                  bg-white/10
                  flex items-center justify-center
                  hover:bg-[#f46b13]
                  hover:shadow-xl hover:shadow-[#f46b13]/40
                  transition-all duration-300
                "
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>

          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} SMDU. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
