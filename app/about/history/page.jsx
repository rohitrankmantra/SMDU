"use client"
import React from 'react'
import { PageHero } from '../../../components/page-hero'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <>
    <PageHero
        title="Our History"
        subtitle="Roots, Vision & Growth"
        description="Explore the milestones and achievements that have defined our path to success over the years."
         breadcrumbs={[{ label: "Our History" }]}
         image=""
    />

    {/* About us section  */}
<section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT : CONTENT ================= */}
          <div>
            {/* ===== SECTION HEADING (INLINE, SAME AS SectionHeading) ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mb-8"
            >
              {/* Subtitle pill */}
              <span
                className="
                  inline-flex items-center gap-2
                  text-sm font-semibold tracking-wider uppercase mb-4
                  px-4 py-1.5 rounded-full
                  border
                  text-[#f46b13] border-[#f46b13]/30 bg-[#f46b13]/10
                "
              >
                About Us
              </span>

              {/* Title */}
              <h2
                className="
                  font-serif text-3xl md:text-4xl lg:text-5xl
                  font-bold mb-4 text-balance
                  text-text-dark
                "
              >
                Roots, Purpose & Academic Vision
              </h2>
            </motion.div>

            {/* ===== PARAGRAPHS ===== */}
            <p className="text-text-muted leading-relaxed">
              Smt. Manjira Devi University, Uttarkashi is established as a Private
              University of Uttarakhand vide State Government Notification No
              114/XXXVI(3)/2024/13(1)/2024 dated 16th March, 2024.
            </p>

            <p className="mt-4 text-text-muted leading-relaxed">
              The Smt. Manjira Devi Shikshan Avam Prashikshan Sanstan in this remote
              hilly region have established a new university in Hitanu Dhanari
              village, a small but historic town on the banks of Bhagirathi river
              in Uttarkashi, Uttarakhand with the objective of providing quality
              technical, scientific and vocational education with skills to make
              the area socio-economically prosperous and to prevent migration of
              youth.
            </p>

            <p className="mt-4 text-text-muted leading-relaxed">
              Smt. Manjira Devi University, located in the serene Himalayan region
              of Uttarkashi, Uttarakhand, emerged from over two decades of
              experience as a group of institutions. Founded on principles of
              academic excellence, cultural preservation, and environmental
              stewardship, the university stands as a beacon of holistic
              education and community empowerment.
            </p>
          </div>

          {/* ================= RIGHT : IMAGES ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/home/about2.webp"
                  alt="University Campus"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="/home/about1.jpg"
                  alt="Students Walking"
                  className="w-full h-56 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-4 pt-8">
                <img
                  src="/about/history1.jpg"
                  alt="Himalayan Region"
                  className="w-full h-56 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="/home/campus1.heic"
                  alt="Academic Discussion"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* OPTIONAL FLOATING BADGE */}
            {/* 
            <div className="absolute -bottom-5 -right-5 bg-[#f46b13] text-white px-6 py-5 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">Est.</div>
                <div className="text-sm leading-tight">
                  Uttarakhand
                  <br />
                  University
                </div>
              </div>
            </div>
            */}
          </motion.div>

        </div>
      </div>
    </section>

    {/* ================= HISTORY & CONTEXT SECTION ================= */}
<section className="py-20 bg-[#FAFAFA] relative overflow-hidden">
  <div className="container mx-auto px-6">

    {/* ===== SECTION HEADING ===== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mb-14"
    >
      <span
        className="
          inline-flex items-center gap-2
          text-sm font-semibold tracking-wider uppercase mb-4
          px-4 py-1.5 rounded-full
          border
          text-[#f46b13] border-[#f46b13]/30 bg-[#f46b13]/10
        "
      >
        History & Context
      </span>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
        Legacy of Uttarkashi & Cultural Foundations
      </h2>
    </motion.div>

    {/* ===== CONTENT GRID ===== */}
    <div className="grid lg:grid-cols-3 gap-12">

      {/* ===== LEFT : CONTEXT LINE ===== */}
      <div className="lg:col-span-2 relative">
        {/* vertical accent line */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-[#f46b13]/30" />

        <div className="pl-8 space-y-10">

          {/* BLOCK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
              About Uttarkashi
            </h3>

            <p className="text-text-muted leading-relaxed">
              Uttarkashi is renowned for its deep religious significance as a
              Hindu pilgrimage destination and its breathtaking Himalayan
              landscape. Often referred to as the
              <span className="text-[#f46b13] font-medium"> “Kashi of the North”</span>,
              it serves as a spiritual gateway to the revered Char Dham Yatra,
              particularly Gangotri.
            </p>
          </motion.div>

          {/* BLOCK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
              Kashi Vishwanath Temple
            </h3>

            <p className="text-text-muted leading-relaxed">
              The historic Kashi Vishwanath Temple, dedicated to Lord Shiva, is
              one of the town’s most prominent landmarks and is regarded as one
              of the twelve Jyotirlingas. Believed to have been constructed in
              the 8th century during the Parmar dynasty, the temple symbolizes
              centuries of devotion, resilience, and cultural continuity.
            </p>
          </motion.div>

          {/* BLOCK 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
              Somya Kashi & Char Dham Yatra
            </h3>

            <p className="text-text-muted leading-relaxed">
              Also known as <span className="font-medium text-text-dark">Somya Kashi</span>,
              Uttarkashi holds a sacred place in Hindu traditions. As a vital
              halt on the Char Dham pilgrimage route, the region blends
              spirituality, natural beauty, and cultural heritage—shaping an
              environment ideal for reflective learning and holistic education.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ===== RIGHT : QUICK FACTS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#eee] rounded-2xl p-8 shadow-sm h-fit"
      >
        <h4 className="font-serif text-xl font-semibold text-text-dark mb-6">
          Cultural Highlights
        </h4>

     <ul className="space-y-3 text-text-muted text-sm leading-relaxed">
  <li>• Spiritual capital of Uttarakhand</li>
  <li>• Gateway to the sacred Gangotri Dham</li>
  <li>• Home to ancient temples and revered ashrams</li>
  <li>• Known as the “Kashi of the North”</li>
  <li>• Integral stop in the Char Dham Yatra</li>
  <li>• Deeply rooted in Vedic and Shaivite traditions</li>
  <li>• Himalayan ecological and biodiversity heritage</li>
  <li>• Center of learning, meditation, and penance</li>
  <li>• Blend of spiritual wisdom and natural serenity</li>

</ul>
      </motion.div>
    </div>
  </div>
</section>

{/* heritage  */}
<section className="py-24 relative overflow-hidden bg-white">
  {/* ===== BG PATTERN ===== */}
  <div className="absolute inset-0 pattern-lines opacity-60" />

  <div className="container mx-auto px-6 relative">

    {/* ===== HEADING ===== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <span
        className="
          inline-flex items-center gap-2
          text-sm font-semibold tracking-wider uppercase mb-4
          px-4 py-1.5 rounded-full
          border
          text-[#f46b13] border-[#f46b13]/30 bg-[#f46b13]/10
        "
      >
        Heritage Snapshot
      </span>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
        Uttarkashi at a Glance
      </h2>

      <p className="mt-4 text-text-muted leading-relaxed">
        A sacred Himalayan land where spirituality, nature, and learning exist in harmony.
      </p>
    </motion.div>

    {/* ===== CARDS ===== */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* ================= CARD 1 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition"
      >
        <img
          src="/about/uttarkashi.jpg"
          alt="Spiritual Uttarkashi"
          className="w-full h-48 object-cover"
        />

        <div className="p-7">
          <h3 className="font-serif text-2xl font-semibold text-text-dark mb-4">
            Spiritual & Cultural Roots
          </h3>

          <ul className="space-y-2 text-text-muted text-sm leading-relaxed">
            <li>• Spiritual capital of Uttarakhand</li>
            <li>• Known as the “Kashi of the North”</li>
            <li>• Major stop in the Char Dham Yatra</li>
            <li>• Gateway to sacred Gangotri Dham</li>
            <li>• Ancient temples & ashrams</li>
          </ul>
        </div>
      </motion.div>

      {/* ================= CARD 2 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition"
      >
        <img
          src="https://i.pinimg.com/1200x/20/e7/c0/20e7c02408de28d1e932532376f2e688.jpg"
          alt="Himalayan Adventure"
          className="w-full h-48 object-cover"
        />

        <div className="p-7">
          <h3 className="font-serif text-2xl font-semibold text-text-dark mb-4">
            Natural Beauty & Adventure
          </h3>

          <ul className="space-y-2 text-text-muted text-sm leading-relaxed">
            <li>• Nestled deep in the Himalayas</li>
            <li>• Rich ecological biodiversity</li>
            <li>• Base for renowned trekking routes</li>
            <li>• Dayara Bugyal & Kedarkantha treks</li>
            <li>• Ideal for nature & adventure lovers</li>
          </ul>
        </div>
      </motion.div>

      {/* ================= CARD 3 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition"
      >
        <img
          src="https://i.pinimg.com/1200x/98/1e/50/981e50795fc7343ded93d30780cd2afc.jpg"
          alt="Learning and Landmarks"
          className="w-full h-48 object-cover"
        />

        <div className="p-7">
          <h3 className="font-serif text-2xl font-semibold text-text-dark mb-4">
            Learning & Landmarks
          </h3>

          <ul className="space-y-2 text-text-muted text-sm leading-relaxed">
            <li>• Home to Nehru Institute of Mountaineering</li>
            <li>• Near the origin of Ganga & Yamuna</li>
            <li>• Maneri Dam on Bhagirathi River</li>
            <li>• Region of discipline & exploration</li>
            <li>• Balance of tradition & modern education</li>
          </ul>
        </div>
      </motion.div>

    </div>
  </div>
</section>








    </>
  )
}

export default page