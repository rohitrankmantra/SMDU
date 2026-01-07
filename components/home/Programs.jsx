"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// ================= SCHOOLS DATA =================
const schools = [
  {
    title: "School of Engineering",
    courses: ["B.Tech", "M.Tech", "Diploma"],
    image: "/home/campus4.jpg",
    href: "/academics/school-of-engineering",
  },
  {
    title: "School of Science and Technology",
    courses: ["B.Sc", "M.Sc", "BCA", "MCA"],
    image: "/home/campus4.jpg",
    href: "/academics/school-of-science-and-technology",
  },
  {
    title: "School of Commerce and Management Studies",
    courses: ["B.Com", "BBA", "MBA", "Ph.D"],
    image: "/home/review1.webp",
    href: "/academics/school-of-commerce-and-management-studies",
  },
  {
    title: "School of Agriculture",
    courses: ["B.Sc (Agriculture)", "M.Sc Agriculture", "Diploma"],
    image: "/home/life3.jpg",
    href: "/academics/school-of-agriculture",
  },
  {
    title: "School of Arts",
    courses: ["BA", "MA", "Ph.D"],
    image: "/home/review3.webp",
    href: "/academics/school-of-arts",
  },
  {
    title: "School of Yoga Science and Naturopathy",
    courses: [
      "BNYS",
      "B.Sc Yogic Science",
      "M.A Yogic Science",
      "M.Sc Yogic Science",
    ],
    image: "/home/life3.jpg",
    href: "/academics/school-of-yoga-science-and-naturopathy",
  },
  {
    title: "School of Nursing, Paramedical & Applied Science",
    courses: ["B.Sc Nursing", "BPT", "ANM", "GNM", "D.Pharma"],
    image: "/home/campus4.jpg",
    href: "/academics/school-of-nursing-paramedical-and-applied-science",
  },
  {
    title: "School of Legal",
    courses: ["BA LLB", "LLB"],
    image: "/home/review1.webp",
    href: "/academics/school-of-legal",
  },
  {
    title: "School of Hotel Management and Tourism",
    courses: ["BHM", "BBA Tourism", "Diploma"],
    image: "/home/review3.webp",
    href: "/academics/school-of-hotel-management-and-tourism",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-text-dark relative overflow-hidden">
      {/* SAME BACKGROUND */}
      <div className="absolute inset-0 pattern-waves opacity-30" />

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          subtitle="Our Schools"
          title="Explore Academic Schools"
          description="Discover a wide range of schools offering undergraduate, postgraduate and professional programs."
          light
        />

        {/* ================= SLIDER ================= */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {schools.map((school, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="group pt-0 h-full flex flex-col overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={school.image}
                      alt={school.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-semibold text-white mb-3">
                      {school.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {school.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full text-xs bg-white text-[#f46b13]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON STAYS AT BOTTOM */}
                    <Link
                      href={school.href}
                      className="inline-flex items-center text-[#f46b13] font-semibold hover:gap-2 transition-all mt-auto"
                    >
                      Explore
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= CTA ================= */}
      </div>
    </section>
  );
}
