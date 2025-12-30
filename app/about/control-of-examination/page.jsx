"use client"

import { ChevronDown, Award, Calendar, Users, BookOpen } from "lucide-react"

export default function ControllerOfExaminations() {
  return (
    <section className="relative py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Cpath d=%22M0 50 Q25 25 50 50 T100 50%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            Examination Authority
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Controller of Examinations
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* ================= PROFILE CARD ================= */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">

            {/* IMAGE */}
            <div className="lg:col-span-1">
              <div className="h-60 rounded-3xl shadow-2xl overflow-hidden border border-orange-200">
                <img
                  src="/about/coe.jpg"
                  alt="Mr. Naveen Nautiyal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="lg:col-span-2 h-60 bg-white rounded-3xl shadow-2xl border border-orange-100 p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Mr. Naveen Nautiyal
              </h2>
              <p className="text-lg text-orange-700 font-semibold mb-3">
                Controller of Examinations
              </p>
              <p className="text-gray-600 italic">
                Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
              </p>
            </div>

          </div>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid xl:grid-cols-2 gap-10">

            

          {/* EDUCATION */}
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
                  <span className="text-sm">Master of Arts (Education)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Bachelor of Education (B.Ed.)</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Master of Science (Mathematics)</span>
                </li>
                 <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Bachelor of Science (Physics, Statistics, Mathematics)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* EXPERIENCE */}
         <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Academic and Professional Experience
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>
            <div className="p-6 space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Lecturer, Smt. Manjira Devi Shikshan & Prashikshan Institute, Uttarkashi (2015–2018), Department of Polytechnic</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Nodal Officer (NSP), Smt. Manjira Devi Institutions</span>
                </li>
                <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
                  <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
                  <span className="text-sm">Biostatistician, Department of BAMS (2017–Present)</span>
                </li>
              
              </ul>
            </div>
          </div>

          {/* RESPONSIBILITIES */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
  <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
    <h3 className="text-xl font-bold flex items-center gap-2">
      <Users className="w-5 h-5" />
      Administrative Responsibilities
    </h3>
    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
  </div>

  <div className="p-6">
    <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
      {[
        "Examination In-charge, Smt. Manjira Devi Shikshan & Prashikshan Institute (2015–Present)",
        "Examination In-charge, Smt. Manjira Devi Ayurvedic Medical College (2017–Present)",
        "Examination In-charge, Smt. Manjira Devi Nursing & Paramedical College (2020–Present)",
        "Controller of Examinations  – UKPSC, UKSSSC, Group-C Examinations,B.Sc. Nursing, M.Sc. Nursing, GNM Entrance Exams (HNGBU)",
        "Organizer: Various Seminars/Webinars conducted by Central & State Government",
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
          <div className="w-2 h-2 bg-[#F97316] rounded-full mt-2 shrink-0" />
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>


          {/* SEMINARS */}
         <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
  <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
    <h3 className="text-xl font-bold flex items-center gap-2">
      <BookOpen className="w-5 h-5" />
      Seminars & Conferences
    </h3>
    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
  </div>

  <div className="p-6 space-y-4">
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
        <span className="text-sm">
          Participated in International Seminar (World Congress for Man and Nature) on
          Global Climate Change and Biodiversity Conservation.
        </span>
      </li>
    </ul>
  </div>
</div>


          {/* AWARDS */}
         <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
  <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
    <h3 className="text-xl font-bold flex items-center gap-2">
      <Award className="w-5 h-5" />
      Awards & Recognition
    </h3>
    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
  </div>

  <div className="p-6 space-y-4">
    <ul className="space-y-3 text-gray-700">
      <li className="flex items-start gap-3 pl-4 border-l-2 border-orange-200">
        <span className="text-sm">
          Seva Ratan Samman – Awarded for outstanding humanitarian services and
          exceptional contribution during COVID-19 pandemic and natural disasters.
        </span>
      </li>
    </ul>
  </div>
</div>


        </div>
      </div>
    </section>
  )
}
