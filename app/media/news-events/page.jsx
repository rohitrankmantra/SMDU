"use client";

import { PageHero } from "../../../components/page-hero";
import { FaRegNewspaper } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import { GrAnnounce } from "react-icons/gr";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { TiArrowForward } from "react-icons/ti";
import { MdDoubleArrow } from "react-icons/md";



const campusImages = [
  { src: "/news/news1.jpg" },
  { src: "/news/news2.jpg" },
  { src: "/news/news3.jpg" },
  { src: "/news/news4.jpg" },
  { src: "/news/news5.jpg" },
  { src: "/news/news6 (1).jpg" },
  { src: "/news/news6.jpg" },
  { src: "/news/news7.jpg" },
  { src: "/news/news8.jpg" },
  { src: "/news/news9.jpg" },
  { src: "/news/news10.jpg" },
  { src: "/news/news11.jpg" },
  { src: "/news/news12.jpg" },
  { src: "/news/news13.jpg" },
  { src: "/news/news14.jpg" },
  { src: "/news/news15.jpg" },
  { src: "/news/news16.jpg" },
  { src: "/news/news17.jpg" },
  { src: "/news/news18.jpg" },
  { src: "/news/news19.jpg" },
  { src: "/news/news20.jpg" },
  { src: "/news/news21.jpg" },
]
const page = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const openLightbox = (index) => {
      setCurrentIndex(index)
      setLightboxOpen(true)
    }
  
    const closeLightbox = () => setLightboxOpen(false)
  
    const prevImage = () =>
      setCurrentIndex((prev) =>
        prev === 0 ? campusImages.length - 1 : prev - 1
      )
  
    const nextImage = () =>
      setCurrentIndex((prev) =>
        prev === campusImages.length - 1 ? 0 : prev + 1
      )
  
    // Keyboard navigation
    useEffect(() => {
      if (!lightboxOpen) return
  
      const handler = (e) => {
        if (e.key === "Escape") closeLightbox()
        if (e.key === "ArrowLeft") prevImage()
        if (e.key === "ArrowRight") nextImage()
      }
  
      window.addEventListener("keydown", handler)
      return () => window.removeEventListener("keydown", handler)
    }, [lightboxOpen])
  return (
    <>
      <PageHero
        title="News/Events"
        subtitle="Latest News"
        description="Stay informed about the latest developments, campus activities, and achievements at Smt. Manjira Devi University, Uttarkashi."
        breadcrumbs={[{ label: "News/Events" }]}
        image="/news/news1.jpg"
      />
      {/*-------------------------------------------- Section 2 --------------------------------------------------------------*/}

      <section className="w-full bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaRegNewspaper className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Latest News
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Smt. Manjira Devi University continues to focus on quality
                    education and holistic student development.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    New academic initiatives and skill-based programs are being
                    introduced for students.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Admissions and academic activities are running smoothly for
                    the current academic session.
                  </p>
                </li>
              </ul>
            </div>

            {/* RIGHT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <SlCalender className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Recent Events
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Orientation programs conducted for newly admitted students.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Seminars, workshops, and guest lectures organized across
                    various departments.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Cultural and sports activities held to encourage overall
                    student growth.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <TiArrowForward className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Awareness programs and social outreach activities organized
                    by the university.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------------------------- Section 3 ------------------------------------------------------*/}

      <section className="w-full bg-gray-50 pb-10 pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <GrAchievement className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Achievements
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <MdDoubleArrow className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Students actively participated in academic, cultural, and
                    sports events.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <MdDoubleArrow className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Faculty members contributed to research, publications, and
                    academic development.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <MdDoubleArrow className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    The university continues to strengthen its academic
                    standards and campus facilities.
                  </p>
                </li>
              </ul>
            </div>

            {/* RIGHT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <GrAnnounce className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Upcoming Updates
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <MdDoubleArrow className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    More academic events, competitions, and training programs
                    are planned.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <MdDoubleArrow className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Students are encouraged to regularly check the notice board
                    and official website for updates.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*-------------------------------------------------------- Section 4 --------------------------------------------------*/}

      <section className="py-20 bg-white px-5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative ">
          <SectionHeading
            subtitle="News Articles"
            title="News"
          />

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {campusImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt="SMDU Campus"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* LIGHTBOX */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                className="fixed inset-0 bg-black/90 backdrop-blur-lg z-999  flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Prev */}
                <button
                  onClick={prevImage}
                  className="absolute left-6 text-white p-3 bg-white/10 rounded-full"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>

                {/* Image */}
                <motion.img
                  key={currentIndex}
                  src={campusImages[currentIndex].src}
                  className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                />

                {/* Next */}
                <button
                  onClick={nextImage}
                  className="absolute right-6 text-white p-3 bg-white/10 rounded-full"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default page;
