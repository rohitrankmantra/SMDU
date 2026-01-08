"use client"

import { ChevronDown } from "lucide-react"

export default function AntiRaggingCommitteePage() {
  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen bg-white">

      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-3 sm:px-4">

        {/* ================= HEADER (SAME AS STUDENT GRIEVANCE) ================= */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-700 text-[10px] sm:text-xs font-semibold uppercase mb-3 sm:mb-4">
            University Governance
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2">
            Anti Ragging Committee (ARC)
          </h1>

          <p className="text-xs sm:text-sm md:text-lg text-gray-600 mx-auto px-4 max-w-md">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-14 sm:w-16 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        {/* ================= TABLE CARD ================= */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl border border-orange-100 overflow-hidden">

          {/* Mobile scroll hint */}
          <div className="md:hidden text-[10px] text-gray-500 text-right px-4 pt-3">
            ← Swipe horizontally →
          </div>

          {/* ================= TABLE ================= */}
          <div
            className="
              relative
              overflow-x-auto
              overscroll-x-contain
              scroll-smooth
              scrollbar-thin
              scrollbar-thumb-orange-300
              scrollbar-track-orange-100/40
            "
          >
            <table className="w-full min-w-225 border-collapse text-sm">
              <thead>
                <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                  <th className="px-4 py-4 text-left font-semibold">S. No.</th>
                  <th className="px-4 py-4 text-left font-semibold">Name</th>
                  <th className="px-4 py-4 text-left font-semibold">Designation</th>
                  <th className="px-4 py-4 text-left font-semibold">Mob. No.</th>
                  <th className="px-4 py-4 text-left font-semibold">Mail ID</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-orange-100">
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">1</td>
                  <td className="px-4 py-4">Dr. Kapil Mohan</td>
                  <td className="px-4 py-4">Principal BNYS — Chairperson</td>
                  <td className="px-4 py-4">9897088251</td>
                  <td className="px-4 py-4">kmohanupadhyay762@gmail.com</td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">2</td>
                  <td className="px-4 py-4">Bilal Ahmad</td>
                  <td className="px-4 py-4">Nursing Department — Member</td>
                  <td className="px-4 py-4">9149459127</td>
                  <td className="px-4 py-4">bilalahmaddar19@gmail.com</td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">3</td>
                  <td className="px-4 py-4">Mr. Sachin Nautiyal</td>
                  <td className="px-4 py-4">Pharmacy Department — Member</td>
                  <td className="px-4 py-4">7302648734</td>
                  <td className="px-4 py-4">sachinnoty1@gmail.com</td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">4</td>
                  <td className="px-4 py-4">Mr. Ashish Ramola</td>
                  <td className="px-4 py-4">Agriculture Department — Member</td>
                  <td className="px-4 py-4">8171914097</td>
                  <td className="px-4 py-4">ashishchand902@gmail.com</td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">5</td>
                  <td className="px-4 py-4">Mrs. Sarita Ramola</td>
                  <td className="px-4 py-4">Paramedical Department — Member</td>
                  <td className="px-4 py-4">8755422436</td>
                  <td className="px-4 py-4">Saritaramola82@gmail.com</td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-4">6</td>
                  <td className="px-4 py-4">Dr. Kaushiki</td>
                  <td className="px-4 py-4">Pharmacy Department — Member</td>
                  <td className="px-4 py-4">9102840515</td>
                  <td className="px-4 py-4">kaushikikumari020@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
