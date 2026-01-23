"use client"

import { ChevronDown, Eye, Download, FileText } from "lucide-react"

export default function ApprovalsPage() {
  const approvalsData = [
    { title: "UGC Approval", file: "/about/UGCApproval.pdf" },
    { title: "Pharmacy Council of India (PCI)", file: "/approvals/PCI.pdf" },
    { title: "National Council for Teacher Education (NCTE)", file: "/approvals/NCTE.pdf" },
    { title: "Uttarakhand Paramedical Council Letter", file: "/approvals/Uttarakhand_Paramedical_Council.pdf" },
    { title: "Uttarakhand Board of Technical Education (UBTER)", file: "/approvals/UBTER.pdf" },
  ]

  return (
    <section className="relative py-8 sm:py-12 md:py-24 min-h-screen bg-white">

      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs sm:text-sm font-semibold uppercase mb-4">
            Approvals & Compliance
            <ChevronDown className="w-4 h-4" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Approvals & Recognitions
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mx-auto max-w-3xl">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {approvalsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-orange-100 p-6 flex flex-col justify-between hover:shadow-2xl transition"
            >
              {/* Icon + Title */}
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                  <FileText size={22} className="text-orange-600" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  Official approval document issued by the concerned statutory authority.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition"
                >
                  <Eye size={16} />
                  View
                </a>

                <a
                  href={item.file}
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
