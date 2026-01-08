"use client"

import { ChevronDown } from "lucide-react"

export default function StudentGrievanceCommitteePage() {
  return (
    <section className="relative py-6 sm:py-10 md:py-24 min-h-screen">

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

        {/* ================= HEADER ================= */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-100 rounded-full text-orange-700 text-[10px] sm:text-xs font-semibold uppercase mb-3 sm:mb-4">
            University Governance
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2">
            Student Grievance Redressal Committee
          </h1>

          <p className="text-xs sm:text-sm md:text-lg text-gray-600 mx-auto px-4 max-w-md">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-14 sm:w-16 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl border border-orange-100 max-w-4xl mx-auto overflow-hidden">
          <div className="p-3 sm:p-5 md:p-10 lg:p-12">

            {/* Mobile scroll hint */}
            <div className="text-[10px] text-gray-500 text-right mb-2 md:hidden">
              ← Swipe horizontally →
            </div>

            {/* ================= SMOOTH SCROLL TABLE ================= */}
            <div
              className="
                relative
                -mx-3 sm:-mx-5 md:mx-0
                overflow-x-auto
                overscroll-x-contain
                scroll-smooth
                scrollbar-thin
                scrollbar-thumb-orange-300
                scrollbar-track-orange-100/40
                will-change-transform
              "
            >
              <table className="w-full min-w-160 border-collapse">
                <thead>
                  <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                    <th className="px-3 py-3 text-center text-[11px] sm:text-sm font-semibold whitespace-nowrap">
                      S. No.
                    </th>
                    <th className="px-3 py-3 text-left text-[11px] sm:text-sm font-semibold">
                      Name
                    </th>
                    <th className="px-3 py-3 text-left text-[11px] sm:text-sm font-semibold">
                      Designation
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-orange-200">
                  {[
                    ["1", "Prof. Dr. J. P. Pachauri", "Ex. V.C. / University Advisor — Chairperson"],
                    ["2", "Dr. Amit Kumar", "Registrar — Member"],
                    ["3", "Mr. Naveen Nautiyal", "In-Charge Exam — Member"],
                    ["4", "Mr. Yatendra Singh Rawat", "Agri. Department — Member"],
                    ["5", "Dr. Kaushiki Kumari", "Counsellor — Member"],
                  ].map(([id, name, role]) => (
                    <tr
                      key={id}
                      className="hover:bg-orange-50/60 transition-colors"
                    >
                      <td className="px-3 py-4 text-center text-xs sm:text-sm font-medium">
                        {id}
                      </td>
                      <td className="px-3 py-4">
                        <div className="font-semibold text-xs sm:text-sm leading-snug">
                          {name}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-xs sm:text-sm leading-snug">
                        {role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
