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

  // Image paths for each category
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

  // Combine all images
  const getAllImages = () => {
    let allImages = [];
    Object.keys(imagePaths).forEach((category) => {
      imagePaths[category].forEach((path) => {
        allImages.push({
          path: path,
          category: category,
        });
      });
    });
    return allImages;
  };

  const allImages = getAllImages();

  const [activeTab, setActiveTab] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayImages, setDisplayImages] = useState(allImages);

  // Filter images based on active tab
  useEffect(() => {
    if (activeTab === "all") {
      setDisplayImages(allImages);
    } else {
      setDisplayImages(allImages.filter((img) => img.category === activeTab));
    }
  }, [activeTab]);

  // Open lightbox
  const openLightbox = (imagePath) => {
    const allImagesIndex = allImages.findIndex((img) => img.path === imagePath);
    setCurrentImageIndex(allImagesIndex);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentImageIndex + 1) % allImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImageIndex, allImages.length]);

  return (
    <>
      <PageHero
        title="Image Gallery"
        subtitle="Moments from Campus Life"
        description="Explore our university campus through images showcasing academics, infrastructure, events, and student life."
        image="/news/news10.jpg"
      />

      {/*--------------------------------------------- Section 2 --------------------------------------------------*/}

      <section className="py-12 px-4 bg-[#fbd9c33b]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Campus Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore photos from different categories
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:cursor-pointer transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#F56A14] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-[#F56A14] hover:text-white shadow"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="wait">
              {displayImages.map((image, index) => (
                <motion.div
                  key={`${image.path}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group"
                  onClick={() => openLightbox(image.path)}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={image.path}
                      alt="Gallery Image"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {displayImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No images in this category
              </p>
            </div>
          )}

          {/* Lightbox */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/90"
                onClick={closeLightbox}
              />

              {/* Lightbox Content */}
              <div className="relative z-10 w-full max-w-6xl mx-4">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <FiX size={28} />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateLightbox("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <FiChevronLeft size={36} />
                </button>

                <button
                  onClick={() => navigateLightbox("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <FiChevronRight size={36} />
                </button>

                {/* Image Display */}
                <div className="relative">
                  <div className="relative w-full h-[60vh]">
                    <Image
                      src={allImages[currentImageIndex].path}
                      alt="Gallery Image"
                      fill
                      className="object-contain rounded-lg"
                      sizes="100vw"
                    />
                  </div>

                  {/* Image Info */}
                  <div className="mt-4 text-center">
                    <p className="text-white text-lg">
                      Image {currentImageIndex + 1}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 mt-6 overflow-x-auto py-2">
                  {allImages.map((img, index) => (
                    <button
                      key={img.path}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`shrink-0 w-16 h-16 rounded overflow-hidden relative ${
                        index === currentImageIndex
                          ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black"
                          : "opacity-50 hover:opacity-75"
                      }`}
                    >
                      <Image
                        src={img.path}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="64px"
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
