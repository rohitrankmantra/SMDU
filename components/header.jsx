"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  Camera,
  Phone,
  FileText,
  Download,
  ArrowRight,
  ArrowLeft,
  Facebook,
  Linkedin,
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
  CigaretteOff
} from "lucide-react";
import { FaRegNewspaper } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoWomanOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuBookAudio } from "react-icons/lu";
import { VscLaw } from "react-icons/vsc";
import { CiLocationArrow1 } from "react-icons/ci";
const programmesData = {
  undergraduate: {
    title: "UNDERGRADUATE",
    schools: [
      {
        name: "School of Science And Technology",
        programs: ["B.Sc", "BCA"],
      },
      {
        name: "School Of Commerce And Management Studies",
        programs: ["B.Com", "BBA"],
      },
      {
        name: "School of Agriculture",
        programs: ["B.Sc (Agriculture)"],
      },
      {
        name: "School of Arts and Humanities",
        programs: [
          "BA (Hindi/Sanskrit/English/Sociology/Education/Political Science/History/Economics)",
        ],
      },
      {
        name: "School of Yogic Science and Naturopathy",
        programs: ["BNYS", "B.Sc Yogic Science"],
      },
      {
        name: "School of Nursing Paramedical & Allied Science",
        programs: ["B.Pharma", "B.Sc Nursing", "BPT"],
      },
      {
        name: "School of Legal Studies",
        programs: ["BA LLB", "LLB"],
      },
      {
        name: "School of Hotel Management & Tourism",
        programs: ["Bachelor of Hotel Management", "BBA - Tourism"],
      },
    ],
  },
  postgraduate: {
    title: "POSTGRADUATE",
    schools: [
      {
        name: "School of Science And Technology",
        programs: ["M.Sc", "MCA"],
      },
      {
        name: "School Of Commerce And Management Studies",
        programs: ["M.Com", "MBA", "Ph.D"],
      },
      {
        name: "School of Agriculture",
        programs: ["M.Sc in Agriculture", "M.Sc in Horticulture"],
      },
      {
        name: "School of Arts and Humanities",
        programs: ["M.A"],
      },
      {
        name: "School of Yogic Science and Naturopathy",
        programs: ["M.A Yogic Science", "M.Sc Yogic Science"],
      },
    ],
  },
  diploma: {
    title: "DIPLOMA",
    schools: [
      {
        name: "School of Engineering",
        programs: [
          "Diploma-Civil Engineering",
          "Diploma-Mechanical Engineering",
          "Diploma-Computer Science & Engineering",
        ],
      },
      {
        name: "School of Science And Technology",
        programs: [
          "AI and ML / Data Science & Cloud Technology / Cyber Security / Forensic Science",
        ],
      },
      {
        name: "School of Agriculture",
        programs: ["Diploma in Agriculture"],
      },
      {
        name: "School of Nursing Paramedical & Allied Science",
        programs: ["ANM", "GNM", "D.Pharma"],
      },
      {
        name: "School of Hotel Management & Tourism",
        programs: ["Diploma-Hotel Management"],
      },
    ],
  },
  doctorate: {
    title: "DOCTORATE",
    schools: [
      {
        name: "School Of Commerce And Management Studies",
        programs: ["Ph.D Commerce Management"],
      },
      {
        name: "School of Arts and Humanities",
        programs: ["Ph.D Arts"],
      },
    ]
  },
};

const navigationItems = [
  {
    label: "About",
    href: "#",
    megaMenu: {
      columns: [
        {
          title: "Our University",
          items: [
            {
              label: "History & Legacy",
              href: "/about/history",
              icon: BookOpen,
            },
            {
              label: "Vision & Mission",
              href: "/about/vision-mission",
              icon: GraduationCap,
            },
            {
              label: "Approvals",
              href: "/about/UGCApproval.pdf",
              icon: FileText,
            },
            {
              label: "Gazette Notification",
              href: "/about/Gazette.pdf",
              icon: FaRegNewspaper,
            },
          ],
        },
        {
          title: "Leadership",
          items: [
            {
              label: "President",
              href: "/about/president",
              icon: Crown,
            },
            {
              label: "Vice Chancellor",
              href: "/about/vice-chancellor",
              icon: GraduationCap,
            },
            {
              label: "Pro Vice Chancellor",
              href: "#",
              icon: RiUserSettingsLine,
            },
            {
              label: "Registrar",
              href: "/about/registrar",
              icon: ClipboardList,
            },
            {
              label: "Control of Examination",
              href: "/about/control-of-examination",
              icon: UserCog,
            },
            {
              label: "Officers of the University",
              href: "#",
              icon: Users,
            },
          ],
        },

        {
          title: "Government Bodies",
          items: [
            {
              label: "Board of Governors",
              href: "/about/board-of-governor.pdf",
              icon: Landmark,
            },
            {
              label: "Board of Management",
              href: "#",
              icon: UsersRound,
            },
            {
              label: "Admission Council",
              href: "/about/admission-council",
              icon: FileCheck,
            },
            {
              label: "Finance Committee",
              href: "/about/finance-committee",
              icon: PiggyBank,
            },
            {
              label: "Board of Examination",
              href: "#",
              icon: Scale,
            },
          ],
        },
      ],
      featured: {
        title: "Discover SMDU",
        description:
          "Experience world-class education in a nurturing environment.",
        image: "/home/about2.jpeg",
        link: "/contact",
      },
    },
  },
  {
    label: "Programmes",
    href: "/academics",
    isProgrammesMega: true,
  },
  {
    label: "Academics",
    href: "/academics",
    megaMenu: {
      columns: [
        {
          title: "Our Schools",
          items: [
            {
              label: "School of Engineering",
              href: "/academics/school-of-engineering",
            },
            {
              label: "School of Science and Technology",
              href: "/academics/school-of-science-and-technology",
            },
            {
              label: "School of Commerce and Management Studies",
              href: "/academics/school-of-commerce-and-management-studies",
            },
            {
              label: "School of Agriculture",
              href: "/academics/school-of-agriculture",
            },
            {
              label: "School of Arts",
              href: "/academics/school-of-arts",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              label: "School of Yoga Science and Naturopathy",
              href: "/academics/school-of-yoga-science-and-naturopathy",
            },
            {
              label: "School of Nursing, Paramedical & Applied Science",
              href: "/academics/school-of-nursing-paramedical-and-applied-science",
            },
            {
              label: "School of Legal",
              href: "/academics/school-of-legal",
            },
            {
              label: "School of Hotel Management and Tourism",
              href: "/academics/school-of-hotel-management-and-tourism",
            },
          ],
        },
        {
  title: "Academic Resources",
  items: [
    {
      label: "Student Feedback",
      href: "/academics/student-feedback",
      icon: MessageSquareMore, 
    },
    {
      label: "Woman Cell",
      href: "/academics/woman-cell",
      icon: IoWomanOutline, 
    },
    {
      label: "Anti-Ragging Cell",
      href: "/academics/anti-ragging-cell",
      icon: ShieldCheck, 
    },
    {
      label: "Anti-Drug Cell",
      href: "/academics/anti-drug-cell",
      icon: CigaretteOff, 
    },
    {
      label: "Grievance Redressal Cell",
      href: "/academics/grievance-redressal-cell",
      icon: ClipboardList, 
    },
    {
      label: "Anti Disciplinary Committee",
      href: "/academics/anti-disciplinary-committee",
      icon: VscLaw,
    },
    {
      label: "Right to Information",
      href: "/academics/right-to-information",
      icon: LuBookAudio,
    },
  ],
}
      ],
      featured: {
        title: "ACADEMIC EXCELLENCE",
        description:
          "Explore our diverse range of programs designed for tomorrow's leaders.",
        image: "/university-classroom-students-learning.jpg",
        link: "/academics/learn-more",
      },
    },
  },
  {
    label: "Admissions",
    href: "#",
    megaMenu: {
      columns: [
        {
          title: "Apply Now",
          items: [
            {
              label: "Admission Form",
              href: "/admissions/admission-form.pdf",
              icon: FileSignature,
            },
            {
              label: "Enquiry Form",
              href: "/admissions/enquiry",
              icon: MessageSquareMore,
            },
            {
              label: "Registration Form",
              href: "/admissions/registration",
              icon: FileSignature,
            },
          ],
        },
        {
          title: "Information",
          items: [
            {
              label: "Fee Structure",
              href: "#",
              icon: ReceiptText,
            },
            {
              label: "Courses Requirements",
              href: "/admissions/courses-requirements",
              icon: FileText,
            },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "FAQs", href: "/admissions/faqs", icon: BookOpen },
            { label: "Contact Admissions", href: "/contact", icon: Phone },
          ],
        },
      ],
      featured: {
        title: "Start Your Journey",
        description: "Take the first step towards a bright future at SMDU.",
        image: "/home/campus3.heic",
        link: "/contact",
      },
    },
  },
  {
    label: "Media & Events",
    href: "#",
    megaMenu: {
      columns: [
        {
          title: "News & Events",
          items: [
            { label: "News/Events", href: "/media/news-events", icon: Mails },
            { label: "Blogs", href: "/media/blogs", icon: FileText },
          ],
        },
        {
          title: "Gallery",
          items: [
            {
              label: "Photo Gallery",
              href: "/media/image-gallery",
              icon: Camera,
            },
            {
              label: "Video Gallery",
              href: "/media/video-gallery",
              icon: Video,
            },
          ],
        },
        {
          title: "Calendars",
          items: [
            {
              label: "Academic Calendar",
              href: "/news/academic-calendar.pdf",
              icon: CalendarDays,
            },
            { label: "List of Holidays", href: "#", icon: TramFront },
          ],
        },
      ],
      featured: {
        title: "Stay Updated",
        description: "Keep up with the latest happenings at SMDU.",
        image: "/home/campus11.jpeg",
        link: "/contact",
      },
    },
  },
  {
    label: "Career",
    href: "/career",
    megaMenu: null,
  },
  {
    label: "Contact",
    href: "/contact",
    megaMenu: null,
  },
];

const topBarLinks = [
  { label: "IQAC", href: "/iqac" },
  { label: "EVENTS", href: "/events" },
  { label: "LOGIN", href: "/login" },
  { label: "CAREER", href: "/career" },
  { label: "ALUMNI", href: "/alumni" },
  { label: "OTHER", href: "/other" },
];

const megaHorizontalPosition = {
  About: "left-0",
  Media: "left-[8%] -translate-x-1/2",
  Academics: "left-1/2 -translate-x-1/2",
  Admissions: "left-1/2 -translate-x-1/2",
  Campus: "left-1/2 -translate-x-1/2",
};

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9-]/g, "");


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative w-full z-50 ${
          isScrolled
            ? "glass shadow-lg shadow-black/5"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        {/* Top Announcement Bar */}
        <div className="bg-linear-to-r from-[#1a3491] to-[#d9363c] text-white text-sm py-2 md:px-32 px-0">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Scrolling Announcement */}
            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <Link href="/fee-payment" className="hover:underline font-medium">
                Click here for fee Payment
              </Link>
              <button className="text-white/80 hover:text-white">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Top Bar Links */}
            <div className="hidden lg:flex items-center gap-4">
              {topBarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:underline font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 ml-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-orange-400 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white border-b border-gray-100 md:px-32">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo & University Name */}
              <Link href="/" className="flex items-center gap-3 group shrink-0">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/logo.webp"
                    alt="SMDU Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xs font-semibold  sm:text-lg">
                    <span className="text-[#F46B13]">Smt. Manjira Devi</span>{" "}
                    <span className="text-[#1a365d]">University</span>
                  </h1>
                </div>
              </Link>

              {/* Contact & CTA Buttons - Fixed layout */}
              <div className="hidden lg:flex items-center gap-6 shrink-0">
                {/* Phone Numbers */}
                <div className="flex flex-col gap-0.5">
                  <a
                    href="tel:+918006345557"
                    className="flex items-center gap-2 text-[#0891b2] font-medium hover:underline text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +91-80063-45557
                  </a>
                  <a
                    href="tel:+918006345558"
                    className="flex items-center gap-2 text-[#0891b2] font-medium hover:underline text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +91-80063-45558
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <Link
                    href="/admissions/enquiry"
                    className="bg-[#f97316] hover:bg-[#ea580c] text-sm text-white py-2 font-semibold px-6 rounded-full"
                  >
                    Enquiry Form
                  </Link>
                  {/* <Link href="/fee-payment" className="text-[#0891b2] text-xs hover:underline mt-1 whitespace-nowrap">
                    Click here for Fee Payment
                  </Link> */}
                </div>

                {/* Ph.D Admissions Button */}
                <Link
                  target="_blank"
                  href="/admissions/phdadmission.pdf"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-sm text-white py-2 font-semibold px-6 rounded-full shrink-0"
                >
                  Ph.D Admissions 2025
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#1a365d] hover:text-[#f97316] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="w-full bg-linear-to-r from-[#1a3491] to-[#d9363c] hidden lg:block">
          <div className="flex items-center justify-center h-20 ">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1  ">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 py-2 px-4  font-medium text-md text-white hover:text-[#F46B13] transition-colors relative group"
                  >
                    {item.label}
                    {(item.megaMenu || item.isProgrammesMega) && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#F46B13] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>

                  {/* Programmes Mega Menu */}
                  <AnimatePresence>
                    {item.isProgrammesMega && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-full px-4 z-50"
                      >
                        <div
                          className="max-w-full mx-auto bg-white rounded-xl
                   shadow-2xl shadow-black/10
                   border border-grey-soft"
                        >
                          {/* GRID — NO SCROLL HERE */}
                          <div className="grid grid-cols-4 divide-x divide-grey-soft">
                            {/* ================= UNDERGRADUATE ================= */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#f46b13] mb-4">
                                {programmesData.undergraduate.title}
                              </h3>

                              {/* 👇 COLUMN SCROLL */}
                              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                                {programmesData.undergraduate.schools.map(
                                  (school, idx) => (
                                    <div key={idx}>
                                      <h4 className="text-sm font-semibold text-text-dark mb-1">
                                        {school.name}
                                      </h4>
                                      <ul className="flex flex-wrap gap-3">
                                        {school.programs.map(
                                          (program, pIdx) => (
                                            <li key={pIdx}>
                                              <Link
                                                 href={`/programmes/${toSlug(program)}`}
                                                className="text-sm text-[#f46b13] hover:underline transition"
                                              >
                                                {program}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* ================= POSTGRADUATE ================= */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#E65100] mb-4">
                                {programmesData.postgraduate.title}
                              </h3>

                              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                                {programmesData.postgraduate.schools.map(
                                  (school, idx) => (
                                    <div key={idx}>
                                      <h4 className="text-sm font-semibold text-text-dark mb-1">
                                        {school.name}
                                      </h4>
                                      <ul className="flex flex-wrap gap-3">
                                        {school.programs.map(
                                          (program, pIdx) => (
                                            <li key={pIdx}>
                                              <Link
                                                href={`/programmes/${toSlug(program)}`}
                                                className="text-sm text-[#f46b13] hover:underline transition"
                                              >
                                                {program}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* ================= DIPLOMA ================= */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#f46b13] mb-4">
                                {programmesData.diploma.title}
                              </h3>

                              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                                {programmesData.diploma.schools.map(
                                  (school, idx) => (
                                    <div key={idx}>
                                      <h4 className="text-sm font-semibold text-text-dark mb-1">
                                        {school.name}
                                      </h4>
                                      <ul className="flex flex-wrap gap-3">
                                        {school.programs.map(
                                          (program, pIdx) => (
                                            <li key={pIdx}>
                                              <Link
                                               href={`/programmes/${toSlug(program)}`}
                                                className="text-sm text-[#f46b13] hover:underline transition"
                                              >
                                                {program}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>

                            {/* ================= DOCTORATE ================= */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-[#f46b13] mb-4">
                                {programmesData.doctorate.title}
                              </h3>

                              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                                {programmesData.doctorate.schools.map(
                                  (school, idx) => (
                                    <div key={idx}>
                                      <h4 className="text-sm font-semibold text-text-dark mb-1">
                                        {school.name}
                                      </h4>
                                      <ul className="flex flex-wrap gap-3">
                                        {school.programs.map(
                                          (program, pIdx) => (
                                            <li key={pIdx}>
                                              <Link
                                               href={`/programmes/${toSlug(program)}`}
                                                className="text-sm text-[#f46b13] hover:underline transition"
                                              >
                                                {program}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Regular Mega Menu */}
                  <AnimatePresence>
                    {item.megaMenu && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full pt-4
  ${megaHorizontalPosition[item.label] || "left-1/2 -translate-x-1/2"}
`}
                      >
                        <div className="w-200 bg-white rounded-xl shadow-2xl shadow-black/10 border border-grey-soft overflow-hidden">
                          {/* Pattern Background */}
                          <div className="absolute inset-0 pattern-dots pointer-events-none" />

                          <div className="relative grid grid-cols-4 gap-0">
                            {/* Menu Columns */}
                            {item.megaMenu.columns.map((column, idx) => (
                              <div
                                key={idx}
                                className="py-6 px-4 border-r border-grey-soft last:border-r-0"
                              >
                                <h3 className="text-md font-bold text-[#F46B13] uppercase tracking-wider mb-4">
                                  {column.title}
                                </h3>
                                <ul className="space-y-2">
                                  {column.items.map((subItem) => (
                                    <li key={subItem.label}>
                                      <Link
                                        href={subItem.href}
                                        target={
                                          subItem.href.endsWith(".pdf")
                                            ? "_blank"
                                            : "_self"
                                        }
                                        rel={
                                          subItem.href.endsWith(".pdf")
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        className="flex items-center gap-2  font-cenzil  py-2 text-sm text-gray-600y hover:text-[#F46B13] transition-colors group"
                                      >
                                        {subItem.icon && <subItem.icon className="w-6 h-6 text-[#F46B13]/60 group-hover:text-[#F46B13] transition-colors" />}
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            {/* Featured Section */}
                            <div className="p-6 bg-grey-light">
                              <div className="rounded-lg overflow-hidden mb-4">
                                <img
                                  src={
                                    item.megaMenu.featured.image ||
                                    "/placeholder.svg"
                                  }
                                  alt={item.megaMenu.featured.title}
                                  className="w-full h-32 object-cover"
                                />
                              </div>
                              <h4 className="font-serif font-semibold text-text-dark mb-2">
                                {item.megaMenu.featured.title}
                              </h4>
                              <p className="text-xs text-text-muted mb-3">
                                {item.megaMenu.featured.description}
                              </p>
                              <Link
                                href={item.megaMenu.featured.link}
                                className="inline-flex items-center gap-1 text-sm font-semibold text-[#F46B13] hover:gap-2 transition-all"
                              >
                                Learn More <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-dark hover:text-[#F46B13] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                {/* Logo & University Name */}
                <Link
                  href="/"
                  className="flex items-center gap-3 group shrink-0"
                >
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logo.webp"
                      alt="SMDU Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-xs sm:text-md font-semibold ">
                      <span className="text-[#F46B13]">Smt. Manjira Devi</span>{" "}
                      <span className="text-[#1a365d]">University</span>
                    </h1>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-dark hover:text-[#F46B13] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.isProgrammesMega ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedMobileItem(
                              expandedMobileItem === item.label
                                ? null
                                : item.label
                            )
                          }
                          className="w-full flex items-center justify-between py-3 px-4 text-text-dark font-medium hover:bg-grey-light rounded-lg transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              expandedMobileItem === item.label
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedMobileItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-4">
                                {Object.values(programmesData).map(
                                  (category, idx) => (
                                    <div key={idx}>
                                      <h4 className="text-xs font-bold text-[#F46B13] uppercase tracking-wider mb-2">
                                        {category.title}
                                      </h4>
                                      <ul className="space-y-1">
                                        {category.schools.map(
                                          (school, sIdx) => (
                                            <li key={sIdx}>
                                              <span className="block py-1 text-xs font-semibold text-text-dark">
                                                {school.name}
                                              </span>
                                              {school.programs.map(
                                                (program, pIdx) => (
                                                  <Link
                                                    key={pIdx}
                                                    href={`/programmes/${toSlug(program)}`}
                                                    onClick={() =>
                                                      setIsMobileMenuOpen(false)
                                                    }
                                                    className="block py-1 px-3 text-sm text-[#F46B13] hover:bg-grey-light rounded transition-colors"
                                                  >
                                                    {program}
                                                  </Link>
                                                )
                                              )}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setExpandedMobileItem(
                              expandedMobileItem === item.label
                                ? null
                                : item.label
                            )
                          }
                          className="w-full flex items-center justify-between py-3 px-4 text-text-dark font-medium hover:bg-grey-light rounded-lg transition-colors"
                        >
                          {item.label}
                          {item.megaMenu && (
                            <ChevronDown
                              className={`w-5 h-5 transition-transform ${
                                expandedMobileItem === item.label
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {item.megaMenu &&
                            expandedMobileItem === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-4">
                                  {item.megaMenu.columns.map((column, idx) => (
                                    <div key={idx}>
                                      <h4 className="text-xs font-bold text-[#F46B13] uppercase tracking-wider mb-2">
                                        {column.title}
                                      </h4>
                                      <ul className="space-y-1">
                                        {column.items.map((subItem) => (
                                          <li key={subItem.label}>
                                            <Link
                                              href={subItem.href}
                                              onClick={() =>
                                                setIsMobileMenuOpen(false)
                                              }
                                              className="block py-2 px-3 text-sm text-text-muted hover:text-[#F46B13] hover:bg-grey-light rounded transition-colors"
                                            >
                                              {subItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}