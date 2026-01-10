"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  BookOpen,
  Users,
  Building2,
  Camera,
  FileText,
  Download,
  Crown,
  UserCog,
  ClipboardList,
  Landmark,
  UsersRound,
  PiggyBank,
  FileCheck,
  Scale,
  Video,
  Mails,
  CalendarDays,
  TramFront,
  ReceiptText,
  FileSignature,
  MessageSquareMore,
  ShieldCheck,
  CigaretteOff,
  ChevronRight,
} from "lucide-react";
import { FaRegNewspaper } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoWomanOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuBookAudio } from "react-icons/lu";
import { VscServerProcess } from "react-icons/vsc";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CiLocationArrow1 } from 'react-icons/ci';
import { IoReceiptOutline } from "react-icons/io5";
import { HiOutlineBeaker } from "react-icons/hi2";

const footerLinks = {
  ourSchools: {
    title: "Our Schools",
    items: [
      { label: "School of Engineering", href: "/academics/school-of-engineering" },
      { label: "School of Science and Technology", href: "/academics/school-of-science-and-technology" },
      { label: "School of Commerce and Management Studies", href: "/academics/school-of-commerce-and-management-studies" },
      { label: "School of Agriculture", href: "/academics/school-of-agriculture" },
      { label: "School of Arts and Humanities", href: "/academics/school-of-arts" },
      { label: "School of Yogic Science and Naturopathy", href: "/academics/school-of-yoga-science-and-naturopathy" },
      { label: "School of Nursing, Paramedical & Allied Science", href: "/academics/school-of-nursing-paramedical-and-applied-science" },
      { label: "School of Legal Studies", href: "/academics/school-of-legal" },
      { label: "School of Hotel Management & Tourism", href: "/academics/school-of-hotel-management-and-tourism" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    items: [
      { label: "IQAC", href: "/iqac" },
      { label: "Events", href: "/media/news-events" },
      { label: "Login", href: "/login" },
      { label: "Career", href: "/career" },
      { label: "Alumni", href: "/alumni" },
      { label: "Public Disclosure", href: "/public-disclosure" },
      { label: "Ph.D Admissions 2026", href: "/admissions/phdadmission.pdf" },
    ],
  },
   programmes: {
    title: "Programmes",
    items: [
      { label: "Undergraduate", href: "/programmes/undergraduate" },
      { label: "Postgraduate", href: "/programmes/postgraduate" },
      { label: "Diploma", href: "/programmes/diploma" },
      { label: "Doctorate", href: "/programmes/doctorate" },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-linear-to-br from-[#1a3491] to-[#d9363c] text-white overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pattern-dots" />

      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-wide">
              Stay Connected with SMDU
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest updates, academic news, event invitations, and exclusive opportunities from Smt. Manjira Devi University.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white h-12"
              />
              <Button className="bg-white text-[#1a3491] hover:bg-white/90 h-12 font-semibold">
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 xl:gap-16">
          {/* Logo + University Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-4 mb-8 group cursor-pointer">
              <div className="w-20 h-20 relative overflow-hidden rounded-full bg-white/20 backdrop-blur-sm shadow-lg">
                <Image
                  src="/logo.webp"
                  alt="SMDU Logo"
                  width={80}
                  height={80}
                  className="object-contain p-4"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold group-hover:text-white transition-colors">
                  <span className="text-white">Smt. Manjira Devi</span>
                </h2>
                <p className="text-xl font-semibold uppercase tracking-wider text-white/90">
                  University
                </p>
              </div>
            </Link>

            <p className="text-white/70 mb-8 leading-relaxed">
              Empowering minds through innovative education, research, and holistic development in a nurturing environment.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                <span className="text-white/80">Uttarkashi, Uttarakhand, India</span>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-white/80 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918006345557" className="text-white/80 hover:text-white transition cursor-pointer">+91-80063-45557</a>
                  <a href="tel:+918006345558" className="text-white/80 hover:text-white transition cursor-pointer">+91-80063-45558</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-white/80 shrink-0" />
                <a href="mailto:info@smdu.edu.in" className="text-white/80 hover:text-white transition cursor-pointer">info@smdu.edu.in</a>
              </div>
            </div>

           
          </motion.div>

          {/* Footer Link Sections */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-serif text-xl font-bold mb-6 text-white uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.href.endsWith(".pdf") ? "_blank" : "_self"}
                      rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-white/70 hover:text-white transition group cursor-pointer"
                    >
                      {item.icon && <item.icon className="w-5 h-5 text-white/60 group-hover:text-white transition" />}
                      {item.label}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Social Icons */}
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all shadow-md hover:shadow-lg hover:shadow-white/20 cursor-pointer"
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white text-sm text-center">
              © {new Date().getFullYear()} Smt. Manjira Devi University. All Rights Reserved. | Designed & Developed with <a href="https://rankmantra.com" className="cursor-pointer">Rankmantra</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}