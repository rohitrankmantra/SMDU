"use client"

import { ChevronDown } from "lucide-react"

export default function InstitutionalDevelopmentPlanPage() {
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

      <div className="relative container mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs sm:text-sm font-semibold uppercase mb-4">
            Institutional Planning
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight px-2">
            Institutional Development Plan (IDP)
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mx-auto max-w-3xl px-4">
            Smt. Manjira Devi University — Rukmani Nagar, Hitamu Dharani, Dunda, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">

          {/* I. Preamble */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-4">
              I. Preamble
            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
              <p>
               Smt. Manjira Devi University, located in the serene and culturally rich district of Uttarkashi, is dedicated to providing holistic higher education that integrates knowledge, skills, and values. Established with the vision of empowering rural and hilly regions through accessible and quality education, the University seeks to nurture globally competent graduates who are deeply rooted in Indian ethos.<br></br>

Aligned with the National Education Policy (NEP) 2020, the University emphasizes skill-based, multidisciplinary, and inclusive education, while ensuring its contribution to nation building, Sustainable Development Goals (SDGs), and local community development.
              </p>
            </div>
          </div>

          {/* II. Social and Academic Mission */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-4">
              II. Social and Academic Mission
            </h2>

            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Social Mission</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Provide equitable access to higher education in hilly and rural regions.</li>
                <li>Promote gender equity, inclusivity, and environmental consciousness.</li>
                <li>Foster community-oriented research and outreach for regional development.</li>
                <li>Support local traditions, culture, and sustainable livelihoods through education and innovation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Academic Mission</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                <li>Offer multidisciplinary and skill-development programs to meet global standards.</li>
                <li>Promote holistic development of students with focus on ethics, creativity, and lifelong learning.</li>
                <li>Ensure integration of vocational education and skilling into mainstream academics.</li>
                <li>Foster research, innovation, and knowledge creation addressing local and global challenges.</li>
              </ul>
            </div>
          </div>

          {/* III. Strategic Goals */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-4">
              III. Strategic Goals
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Ensure affordable and transparent admissions with special focus on rural and underprivileged students.</li>
              <li>Develop strong faculty recruitment, retention, and continuous capacity-building policies.</li>
              <li>Integrate skill development and entrepreneurship enhancement in curricula.</li>
              <li>Establish a strong research and innovation ecosystem with focus on local needs.</li>
              <li>Build international collaborations and student/faculty exchange programs.</li>
              <li>Create a green, sustainable, and industry-linked campus.</li>
              <li>Strengthen alumni, community, and industry linkages for holistic growth.</li>
            </ol>
          </div>

          {/* IV. Development Objectives */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-4">
              IV. Development Objectives
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Establish good governance structures (Board of Governors, Academic Council, Finance Committee).</li>
              <li>Expand financial sustainability through tuition, grants, CSR, and research consultancy.</li>
              <li>Introduce multidisciplinary programs in sciences, arts, humanities, and vocational studies.</li>
              <li>Promote Naturopathy, Ayurveda, Yoga, and Himalayan studies as niche areas.</li>
              <li>Build advanced laboratories, ICT-enabled classrooms, and digital learning platforms.</li>
              <li>Encourage community-based participatory research in environment and traditional knowledge systems.</li>
              <li>Provide student support systems — scholarships, counseling, incubation centres.</li>
            </ul>
          </div>

     {/* V. Enablers Framework (as per UGC Guidelines) */}
<div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-6">
    V. Enablers Framework (as per UGC Guidelines)
  </h2>

  <div className="space-y-8">
    {/* 1. Governance Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        1. Governance Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Transparent and accountable governance through statutory bodies.</li>
        <li>Effective quality assurance and accreditation mechanisms.</li>
        <li>Stakeholder quality inclusion (faculty, accreditation, alumni, local community).</li>
      </ul>
    </div>

    {/* 2. Financial Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        2. Financial Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Develop a long-term sustainable financial model.</li>
        <li>Generate resources through government grants, CSR, endowments, and industry partnerships.</li>
      </ul>
    </div>

    {/* 3. Academic Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        3. Academic Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Curriculum aligned with NEP, NCF, and Academic Bank of Credits.</li>
        <li>Offer blended learning programs (offline + digital).</li>
        <li>Adopt multidisciplinary models with vocational integration.</li>
      </ul>
    </div>

    {/* 4. Research & Innovation Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        4. Research & Innovation Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Establish Research & Innovation Cell.</li>
        <li>Focus on regional priorities – environment, agriculture, traditional medicine, disaster management.</li>
        <li>Promote IPR, patents, and start-up incubation.</li>
      </ul>
    </div>

    {/* 5. Human Resource Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        5. Human Resource Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Recruit qualified faculty with Ph.D./industry expertise.</li>
        <li>Implement professional development programs.</li>
        <li>Provide recognition, incentives, and international exposure.</li>
      </ul>
    </div>

    {/* 6. Networking & Collaboration */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        6. Networking & Collaboration
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Partner with national and international universities.</li>
        <li>Engage alumni networks for mentoring and outreach.</li>
        <li>Collaborate with industries, NGOs, and government bodies.</li>
      </ul>
    </div>

    {/* 7. Physical Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        7. Physical Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Develop an eco-friendly and inclusive campus.</li>
        <li>Ensure adequate hostels, libraries, labs, sports, and wellness centres.</li>
        <li>Provide accessibility for PwD and ensure safety for all.</li>
      </ul>
    </div>

    {/* 8. Digital Enablers */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
        8. Digital Enablers
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
        <li>Smart classrooms, LMS, e-library, and online learning platforms.</li>
        <li>Implement Digital University initiatives and repositories.</li>
        <li>Adopt real-time data management and monitoring systems.</li>
      </ul>
    </div>
  </div>
</div>

          {/* VI. Implementation & Monitoring */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-4">
              VI. Implementation & Monitoring
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>PPrepare Annual Action Plans with measurable KPIs.</li>
              <li>Regular reviews by Academic Council and Board of Governors.</li>
              <li>Feedback from students, faculty, alumni, and community.</li>
              <li>Continuous improvement aligned with NAAC/NBA standards.</li>
            </ul>
          </div>

          {/* VII. Conclusion */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-orange-100 p-5 sm:p-7 md:p-9">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700 mb-4">
              VII. Conclusion
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Smt. Manjira Devi University aims to emerge as a centre of excellence in higher education, deeply connected to the Himalayas yet reaching out globally. Through its Institutional Development Plan (IDP), the University commits itself to academic excellence, research innovation, inclusivity, sustainability, and community service – thereby fulfilling its role as a torchbearer of knowledge and development in Uttarkashi and beyond.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}