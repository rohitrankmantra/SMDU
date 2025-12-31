"use client";

import { PageHero } from "../../../components/page-hero";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // 🔒 Body scroll lock when lightbox open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
      {/* Hero Section */}
      <PageHero
        title="Video Gallery"
        subtitle="Moments from Campus Life"
        description="Explore our university campus through videos showcasing academics, infrastructure, events, and student life."
        image="/news/news13.jpg"
      />

      {/* Video Gallery Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10">
            Videos
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative cursor-pointer rounded-xl overflow-hidden group"
                onClick={() => setActiveVideo(video)}
                onContextMenu={(e) => e.preventDefault()}
              >
                {/* Thumbnail */}
                <Image
                  src={video.thumb}
                  alt="Video Thumbnail"
                  width={600}
                  height={400}
                  className="w-full h-55 sm:h-60 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
                    ▶
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {activeVideo && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl sm:text-4xl"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              {/* Video Player */}
              <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
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
