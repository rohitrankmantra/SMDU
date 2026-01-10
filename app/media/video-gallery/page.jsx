"use client";

import { PageHero } from "../../../components/page-hero";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // 🔒 Body scroll lock when lightbox open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "auto";
  }, [activeVideo]);

  const videos = [
    {
      id: 1,
      thumb: "/videos/thumbnail/savidhan.png",
      src: "/videos/savidhan-diwas.mp4",
    },
    {
      id: 2,
      thumb: "/videos/thumbnail/shivaji.png",
      src: "/videos/shivaji.mp4",
    },
    {
      id: 3,
      thumb: "/videos/thumbnail/sports.png",
      src: "/videos/sports.mp4",
    },
    {
      id: 4,
      thumb: "/videos/thumbnail/yoga.png",
      src: "/videos/yogaday.mp4",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="Video Gallery"
        subtitle="Moments from Campus Life"
        description="Explore our university campus through videos showcasing academics, infrastructure, events, and vibrant student life."
        image="/new/annualday.jpeg"
      />

      {/* ================= VIDEO GALLERY ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        
        {/* Background Pattern (same as Gallery Section) */}
        <div className="absolute inset-0 pattern-grid opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          {/* ===== Heading Block ===== */}
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-orange-600 bg-orange-50 px-4 py-1 rounded-full border border-orange-200">
              Campus Media
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              University Video Gallery
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into academic excellence, cultural events, sports,
              celebrations, and everyday campus life through curated videos.
            </p>

            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-600 mx-auto mt-6 rounded-full" />
          </div>

          {/* ===== Video Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative cursor-pointer rounded-2xl overflow-hidden group shadow-lg bg-white"
                onClick={() => setActiveVideo(video)}
                onContextMenu={(e) => e.preventDefault()}
              >
                {/* Thumbnail */}
                <Image
                  src={video.thumb}
                  alt="Video Thumbnail"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl font-bold shadow-md group-hover:scale-110 transition">
                    ▶
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===== Lightbox ===== */}
          {activeVideo && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-white text-4xl hover:scale-110 transition"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              {/* Video Player */}
              <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
