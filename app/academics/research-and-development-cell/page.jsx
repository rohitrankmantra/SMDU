"use client"

import { ChevronDown } from "lucide-react"

export default function ResearchDevelopmentCellPage() {
  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen bg-white">

      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-3 sm:px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-700 text-[10px] sm:text-xs font-semibold uppercase mb-3 sm:mb-4">
            Research & Innovation
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2">
            Research & Development Cell (RDC)
          </h1>

          <p className="text-xs sm:text-sm md:text-lg text-gray-600 mx-auto px-4 max-w-xl">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-14 sm:w-16 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">

          {/* ===== Overview ===== */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-4 sm:p-6 md:p-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Overview
            </h2>

            <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Smt. Manjira Devi University, with the motto of <strong>“Quest for Excellence”</strong>,
                is determined to be a centre of research and innovation. The University’s research
                strength lies in its research-oriented and dedicated faculty contributing to
                multidisciplinary research.
              </p>

              <p>
                The University aims to address regional, national, and international challenges by
                providing sustainable solutions to stakeholders. Faculty and students collectively
                create a dynamic research ecosystem fostering high-quality outcomes under the
                supervision of the Research Advisory Committee and University Management.
              </p>

              <p>
                The Research & Development Cell promotes academic and industry collaborations,
                offering a vibrant platform for sharing ideas, resources, and partnerships. It
                supports research scholars in transforming ideas into meaningful outcomes.
              </p>

              <p>
                The RDC encourages faculty, staff, and students to actively participate in
                research-based activities including publications, patents, and professional
                collaborations for the betterment of society.
              </p>
            </div>
          </div>

          {/* ===== Goals / Objectives ===== */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-4 sm:p-6 md:p-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Goals & Objectives
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
              <li>Encourage research in frontier areas of science, technology, and allied disciplines.</li>
              <li>Incentivize faculty publications in SCI, Scopus, and peer-reviewed journals.</li>
              <li>Enhance research output through quality publications and conferences.</li>
              <li>Promote University–Industry collaboration and consultancy projects.</li>
              <li>Encourage core proficiency and consultancy work.</li>
              <li>Organize workshops, seminars, and training programs to promote research culture.</li>
              <li>Create awareness about Patents & IPR and motivate patent filing.</li>
              <li>Coordinate with departments for periodic research activity planning.</li>
              <li>Establish MoUs with industries, institutions, and R&D organizations.</li>
              <li>Organize brainstorming sessions with industry experts and researchers.</li>
            </ul>
          </div>

          {/* ===== Key Highlights ===== */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-4 sm:p-6 md:p-8">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-3">
              Key Highlights
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm md:text-base text-gray-700">
              <li>Emerging as a preferred centre for government and non-government R&D projects.</li>
              <li>Faculty and researchers have secured over <strong>30 patents</strong>.</li>
              <li>Multiple MoUs and collaborations established for innovation.</li>
              <li>Regular national and international conferences and workshops conducted.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
