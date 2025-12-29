"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '../../../components/page-hero'

const missionVisionData = [
  {
    title: "Educational Excellence",
    description:
      "Interdisciplinary, skill-oriented education that develops critical thinking and creativity.",
    image:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
  },
  {
    title: "Cultural Integration",
    description:
      "Education rooted in the cultural heritage and values of Uttarakhand.",
    image:
      "https://images.pexels.com/photos/8112120/pexels-photo-8112120.jpeg",
  },
  {
    title: "Sustainability",
    description:
      "Promoting environmental and social responsibility through learning and research.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "Community Engagement",
    description:
      "Empowering rural and hilly communities through outreach and knowledge sharing.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
  {
    title: "Global Citizenship",
    description:
      "Preparing students to lead with empathy in a connected global society.",
    image:
      "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg",
  },
  {
    title: "Continuous Improvement",
    description:
      "Adapting and innovating with evolving global educational standards.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
];

const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <PageHero
        title="Vision & Mission"
        subtitle="Empowering Minds • Inspiring Innovation • Transforming the Future"
        description="Discover the core values and aspirations that drive our institution forward."
        bgImage="/about/vision-mission/vision-mission-hero.jpg"
        breadcrumbs={[{ label: "Vision & Mission" }]}
      />
      <section className="py-28 bg-relative-to-br from-gray-50 to-orange-50/20">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#f56a14] mb-6 bg-relative-to-r from-[#f56a14] to-orange-600 bg-clip-text ">
              Our  Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
             Smt. Manjira Devi University envisions itself as a leading center of excellence nestled in the Himalayas, dedicated to knowledge, innovation, and inclusivity. Our vision is to blend tradition with technology — creating global citizens rooted in cultural heritage.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {missionVisionData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-orange-100/50 transition-all duration-500 hover:-translate-y-2 hover:border-[#f56a14]/30"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-relative-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 relative">
                  <div className="absolute -top-6 left-4 w-12 h-12 bg-[#f56a14] rounded-full flex items-center justify-center text-white text-lg font-bold opacity-80">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default page