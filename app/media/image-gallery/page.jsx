"use client";

import { PageHero } from "../../../components/page-hero";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const page = () => {
  const tabs = [
    { id: "all", name: "All" },
    { id: "campus", name: "Our Campus" },
    { id: "cultural", name: "Cultural & Sports" },
    { id: "news", name: "News & Events" },
    { id: "student", name: "Student Life" },
  ];

  const imagePaths = {
    campus: [
      "/home/about1.jpg",
      "/home/about2.jpeg",
      "/home/bg.jpeg",
      "/home/campus8.heic",
      "/home/campus10.jpeg",
      "/home/campus11.jpeg",
      "/home/life5.heic",
      "/home/life6.heic",
      "/home/program.jpeg",
      "/home/program1.jpeg",
      "/home/homebg.jpeg",
      "/home/campus12.jpeg",
    ],
    cultural: [
      "/home/campus1.heic",
      "/home/campus2.jpg",
      "/home/campus3.heic",
      "/home/campus5.heic",
      "/home/campus6.heic",
      "/home/campus7.heic",
      "/home/campus8.heic",
      "/home/campus9.jpeg",
      "/home/feature3.jpg",
      "/home/feature4.webp",
      "/home/campus10.jpeg",
      "/home/campus11.jpeg",
      "/home/campus12.jpeg",
      "/home/campus14.jpeg",
      "/home/feature1.jpg",
      "/home/feature2.heic",
    ],
    news: [
      "/news/news1.jpg",
      "/news/news2.jpg",
      "/news/news3.jpg",
      "/news/news4.jpg",
      "/news/news5.jpg",
      "/news/news6.jpg",
      "/news/news7.jpg",
      "/news/news8.jpg",
      "/news/news9.jpg",
      "/news/news10.jpg",
      "/news/news11.jpg",
      "/news/news12.jpg",
      "/news/news13.jpg",
      "/news/news14.jpg",
      "/news/news15.jpg",
      "/news/news16.jpg",
    ],
    student: [
      "/home/review1.webp",
      "/home/review2.webp",
      "/home/review3.webp",
      "/home/life1.png",
      "/home/life2.jpg",
      "/home/life3.jpg",
      "/home/life4.webp",
    ],
  };

  const getAllImages = () => {
    let all = [];
    Object.keys(imagePaths).forEach((cat) => {
      imagePaths[cat].forEach((path) => {
        all.push({ path, category: cat });
      });
    });
    return all;
  };

  const allImages = getAllImages();

  const [activeTab, setActiveTab] = useState("all");
  const [displayImages, setDisplayImages] = useState(allImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setDisplayImages(
      activeTab === "all"
        ? allImages
        : allImages.filter((img) => img.category === activeTab)
    );
  }, [activeTab]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
  }, [lightboxOpen]);

  const openLightbox = (path) => {
    const index = allImages.findIndex((img) => img.path === path);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const navigateLightbox = (dir) => {
    setCurrentImageIndex((prev) =>
      dir === "next"
        ? (prev + 1) % allImages.length
        : (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <>
      <PageHero
        title="Image Gallery"
        subtitle="Moments from Campus Life"
        description="Explore our university campus through images showcasing academics, infrastructure, events, and student life."
        image="/news/news10.jpg"
      />

      {/* ================= GALLERY SECTION ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-lines opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-orange-600 bg-orange-50 px-4 py-1 rounded-full border border-orange-200">
              Campus Media
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              University Image Gallery
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              A visual journey through academics, events, celebrations and
              student life at our university.
            </p>

            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-600 mx-auto mt-6 rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#F56A14] text-white shadow"
                    : "bg-white text-gray-700 border hover:bg-[#F56A14] hover:text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {displayImages.map((img, i) => (
                <motion.div
                  key={`${img.path}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openLightbox(img.path)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={img.path}
                      alt="Gallery"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white"
              >
                <FiX size={34} />
              </button>

              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-6 text-white"
              >
                <FiChevronLeft size={44} />
              </button>

              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-6 text-white"
              >
                <FiChevronRight size={44} />
              </button>

              <div className="relative w-full max-w-5xl h-[60vh]">
                <Image
                  src={allImages[currentImageIndex].path}
                  alt="Preview"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Thumbnails with SCROLLBAR */}
              <div className="absolute bottom-6 left-0 right-0 px-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                <div className="flex gap-2 w-max mx-auto">
                  {allImages.map((img, index) => (
                    <button
                      key={img.path}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded overflow-hidden shrink-0 ${
                        index === currentImageIndex
                          ? "ring-2 ring-orange-500"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.path}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
