"use client"

import { ChevronDown, Mail, Award, Calendar, BookOpen, Users, Sparkles } from "lucide-react"

export default function RegistrarMessage() {
  return (
    <section className="relative py-24  bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50 overflow-hidden">
      {/* Multi-layered Himalayan-inspired BG */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Cpath d=%22M0 50 Q25 25 50 50 T100 50%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3Cpath d=%22M0 60 Q25 35 50 60 T100 60%22 stroke=%22%23f59e0b%22 stroke-width=%220.3%22 opacity=%220.05%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent via-orange-200/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-linear-to-l from-orange-300/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Dynamic Header with Icon Accents */}
          {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            Leadership Vision
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text  mb-4">
            Registrar
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* Enhanced Profile Hero Card - Full-width with Overlap */}
        <div className="relative mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Image Side */}
            <div className="lg:col-span-1 relative group">
              <div className="h-60 bg-relative-to-br from-amber-500/10 via-orange-600/5 to-orange-500/10 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/30 group-hover:border-orange-200/60 transition-all duration-700 hover:shadow-3xl">
                <img
                  src="/about/registrar.jpg"
                  alt="Dr. Amit Kumar, Registrar of Smt. Manjira Devi University"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6">
                  <div className="text-white text-sm bg-black/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    20+ Years of Dedication
                  </div>
                </div>
              </div>
             
            </div>

            {/* Profile Info Side */}
            <div className="lg:col-span-2 h-60  bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100/50 p-8 lg:p-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Dr. Amit Kumar</h2>
              <p className="text-lg text-orange-700 mb-4 font-semibold">Registrar</p>
              <p className="text-gray-600 mb-6 italic">Smt. Manjira Devi University, Uttarkashi, Uttarakhand</p>
             
            </div>
          </div>
        </div>

        {/* Timeline-Style Sections Grid - Unique Accordion-Like Cards */}
        <div className="grid xl:grid-cols-2 gap-8 lg:gap-10 space-y-8 xl:space-y-0">
          {/* Educational Qualifications - Timeline Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" />
                Educational Qualifications
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Ph.D. in Pharmacy, P.K. University, Shivpuri (M.P.)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">M.Pharm, S.G.R.R. University, Dehradun, Uttarakhand</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">B.Pharm, Ramesh Institute, Greater Noida, Uttar Pradesh</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Experience - Timeline Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Professional Experience
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Lecturer, Roorkee College of Pharmacy (2007–2008)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Assistant Professor, Om Bio Science & Pharmacy College, Roorkee (Oct 2010 – Aug 2011)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Assistant Professor, Smt. Manjira Devi Shikshan & Prashikshan Institute, Uttarkashi (Aug 2011 – Oct 2014)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Principal, Smt. Manjira Devi Shikshan & Prashikshan Institute, Uttarkashi (Oct 2014 – Oct 2024)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Deputy Registrar, Smt. Manjira Devi University, Rukmani Nagar, Uttarkashi (Sep 2024 – Jul 2025)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Administrative Responsibilities - Full Width */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500 xl:row-start-3">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Administrative Responsibilities
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Deputy Registrar, Smt. Manjira Devi University, Uttarkashi
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Principal, Department of Pharmacy, Smt. Manjira Devi Shikshan & Prashikshan Institute
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Member, Executive Council – Smt. Manjira Devi University
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Member, Board of Studies – Department of Pharmacy
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                 Acting Principal, Department of Engineering (2013–2019)
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Co-ordinator/Nodal Officer – AISHE, AICTE, PCI, NSP, SMDU
                </li>
                <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Coordinator – Staff Selection Committee, ICC/GSH, Cultural Committee
                </li>
                 <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  Controller of Examinations – Various exams conducted by UKPSC, UKSSSC, Group C, and UBTER
                </li>
                 <li className="flex items-center gap-3 pl-4 border-l-2 border-orange-200 text-sm">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                 Organizer – Various Seminars/Webinars conducted by the Central Government of India and Uttarakhand State Government
                </li>
              </ul>
            </div>
          </div>

          {/* Research Interests - Timeline Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Research Interests
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Ethnopharmacological Studies</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Pharmacological Screening: wound healing potential, antioxidant, anti-inflammatory, and antimicrobial activities</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Pharmacokinetic parameters</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Bioassay of drugs</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Clinical trials (collection of patient data)</span>
                </li>
                  <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Molecular docking studies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Research Publications - Compact Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Research Publications
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-6">
              <div className="text-center py-6 bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl">
                <p className="text-4xl font-black text-orange-600 mb-2">22+</p>
                <p className="text-sm text-gray-600 uppercase tracking-wide">International Publications</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Presented 20+ papers at national & international conferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      

       
      </div>
    </section>
  )
}