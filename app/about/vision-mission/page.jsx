"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '../../../components/page-hero'
import { SectionHeading } from '../../../components/section-heading'
import { BookOpen, HeartHandshake, Sparkles } from "lucide-react"

export const missionVisionData = [
  {
    title: "Educational Excellence",
    description:
      "Deliver interdisciplinary, skill-oriented education that nurtures critical thinking, innovation, and creativity — preparing students to excel in a rapidly evolving world.",
    image:
      "/home/review3.webp",
  },
  {
    title: "Cultural Integration",
    description:
      "Preserve and celebrate the cultural heritage of Uttarakhand while harmoniously blending it with modern education and global perspectives.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    title: "Sustainability",
    description:
      "Promote social and environmental responsibility through eco-conscious learning, research, and community initiatives that protect our Himalayan ecosystem.",
    image:
      "/home/life3.jpg",
  },
  {
    title: "Community Engagement",
    description:
      "Empower rural and hilly communities through meaningful outreach, lifelong learning, and knowledge-sharing programs that improve quality of life.",
    image:
      "/home/life4.webp",
  },
  {
    title: "Global Citizenship",
    description:
      "Foster cross-cultural understanding, leadership, and compassion — preparing students to contribute responsibly to a connected world.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
  },
  {
    title: "Continuous Improvement",
    description:
      "Adapt, innovate, and evolve with changing global education landscapes — ensuring quality, relevance, and excellence at every level.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  },
]
export const missionData = [
  {
    title: "Comprehensive & Holistic Education",
    description:
      "Provide inclusive, multidisciplinary learning that nurtures competence, creativity, and strong moral character.",
  },
  {
    title: "Youth Empowerment",
    description:
      "Equip students — especially from rural and hilly regions — with skills and confidence to build sustainable livelihoods.",
  },
  {
    title: "Cultural Preservation",
    description:
      "Promote and protect the cultural heritage, values, and traditions of Uttarakhand through meaningful education.",
  },
  {
    title: "Sustainable Development",
    description:
      "Encourage environmentally responsible learning and research that support the Himalayan ecosystem.",
  },
  {
    title: "Healthcare & Wellbeing",
    description:
      "Advance holistic health through education in Naturopathy, Paramedical Sciences, and allied disciplines.",
  },
  {
    title: "Research & Innovation",
    description:
      "Foster inquiry, creativity, and innovation that contribute positively to society and knowledge growth.",
  },
]





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
       <section className="py-20 bg-linear-to-b from-white to-orange-50/40">
  <div className="container mx-auto px-6">

    <SectionHeading
      subtitle="Our Vision"
      title="Shaping Future Leaders"
      description="Smt. Manjira Devi University envisions becoming a premier Himalayan institution — nurturing knowledge, research, innovation, and inclusive global citizenship."
      alignment="center"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {missionVisionData.map((item, index) => (
        <div
          key={index}
          className="
            rounded-2xl
            bg-white/60
            backdrop-blur-xl
            border border-orange-100
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-1
            transition
            overflow-hidden
          "
        >

          {/* IMAGE */}
          <div className="h-40 w-full overflow-hidden relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="p-7">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-700 leading-relaxed text-[15.5px]">
              {item.description}
            </p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

{/* mission data  */}
<section className="py-24 relative overflow-hidden bg-white">
  {/* ===== BG PATTERN ===== */}
  <div className="absolute inset-0 pattern-lines opacity-60" />

  <div className="container mx-auto px-6 max-w-6xl relative">

    <SectionHeading
      subtitle="Our Mission"
      title="Empowering Individuals"
      description="We strive to build ethical, skilled, and compassionate individuals through transformative education rooted in Himalayan values and global perspectives."
      alignment="center"
    />

    {/* ===== GRID CARDS ===== */}
    <div className="grid md:grid-cols-2 gap-8 mt-16">

      {missionData.map((item, index) => (
        <div
          key={index}
          className="
            group
            bg-white/70 backdrop-blur-xl
            border border-[#f56a14]/20
            shadow-lg rounded-2xl p-7
            hover:shadow-2xl hover:-translate-y-1
            transition
          "
        >
          <div className="flex items-start gap-5">

            {/* ===== SQUARE NUMBER BOX ===== */}
            <div
              className="
                w-20 h-auto
                rounded-lg
                font-bold text-white text-lg
                flex items-center justify-center
                shadow-md
              "
              style={{ backgroundColor: '#f56a14' }}
            >
              {index + 1}
            </div>

            {/* ===== TEXT ===== */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>


{/* our philosphy  */}
<section className="py-24 relative overflow-hidden bg-[#fff7f0]">

  <div className="container mx-auto px-6 max-w-6xl relative">

    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span
        className="
          inline-flex items-center gap-2
          text-sm font-semibold tracking-wider uppercase mb-4
          px-4 py-1.5 rounded-full border
        "
        style={{
          color: '#f56a14',
          borderColor: '#f56a14',
          backgroundColor: '#f56a14' + '15'
        }}
      >
        Our Philosophy
      </span>

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
        Learning Rooted in Purpose & Humanity
      </h2>

      <p className="mt-4 text-gray-600 leading-relaxed">
        We believe true education nurtures the mind, heart, and spirit —
        fostering wisdom, compassion, leadership, and a deep connection
        with nature and society.
      </p>
    </div>

    {/* CONTENT CARD */}
    <div
      className="
        bg-white/80 backdrop-blur-xl
        border border-[#f56a14]/20
        rounded-3xl shadow-xl
        p-10 md:p-14
        max-w-5xl mx-auto
      "
    >
      <div className="grid md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="space-y-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow"
            style={{ backgroundColor: '#f56a14' }}
          >
            <BookOpen className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Purpose-Driven Learning
          </h3>

          <p className="text-gray-700">
            Education that builds clarity, confidence, and meaningful direction in life.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="space-y-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow"
            style={{ backgroundColor: '#f56a14' }}
          >
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Human-Centered Values
          </h3>

          <p className="text-gray-700">
            Developing empathy, ethics, and respect for culture, nature, and humanity.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="space-y-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow"
            style={{ backgroundColor: '#f56a14' }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900">
            Lifelong Curiosity
          </h3>

          <p className="text-gray-700">
            Inspiring learners to explore, question, innovate, and evolve — always.
          </p>
        </div>
      </div>

      <hr className="my-10 border-gray-200" />

      <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        At the heart of our philosophy lies a simple belief —
        when education is rooted in compassion, curiosity, and purpose,
        it transforms not just individuals, but the world around them.
      </p>
    </div>
  </div>
</section>





    </>
  )
}

export default page