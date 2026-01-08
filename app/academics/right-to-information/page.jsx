"use client"

import { ChevronDown, Download, Eye } from "lucide-react"

export default function RTIPage() {
  return (
    <section className="relative py-12 md:py-24 min-h-screen">
      {/* Background with subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-5">
            University Governance
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Central Public Information Officer (RTI)
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= MAIN CONTENT CARD ================= */}
        <div className="relative bg-white rounded-3xl shadow-2xl border border-orange-100 max-w-4xl mx-auto overflow-hidden">
          <div className="p-6 md:p-10 lg:p-12 space-y-12">

            {/* Table Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Details of Central Public Information Officer
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full min-w-125">
                  <thead>
                    <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                      <th className="px-6 py-4 text-center font-semibold">S. No.</th>
                      <th className="px-6 py-4 text-left font-semibold">Name & Designation</th>
                      <th className="px-6 py-4 text-left font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-200">
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-6 py-5 text-center font-medium">1</td>
                      <td className="px-6 py-5">
                        <div className="font-semibold">Mr. Naveen Nautiyal</div>
                        <div className="text-gray-600 text-sm">Controller of Examination</div>
                      </td>
                      <td className="px-6 py-5">Public Information Officer</td>
                    </tr>
                    <tr className="hover:bg-orange-50/50 transition">
                      <td className="px-6 py-5 text-center font-medium">2</td>
                      <td className="px-6 py-5">
                        <div className="font-semibold">Dr. Amit Kumar</div>
                        <div className="text-gray-600 text-sm">Registrar</div>
                      </td>
                      <td className="px-6 py-5">Appellate Officer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* PDF Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                RTI Document (PDF)
              </h2>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/admissions/RTI.pdf" // Your actual PDF path
                  download="RTI_SMDU.pdf"
                  className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
                >
                  <Download className="w-5 h-5" />
                  Download RTI (PDF)
                </a>

                <button
                  onClick={() => window.open('/admissions/RTI.pdf', '_blank')}
                  className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-orange-600 font-semibold py-3 px-8 rounded-full shadow-md border-2 border-orange-500 transition"
                >
                  <Eye className="w-5 h-5" />
                  View RTI online
                </button>
              </div>

              {/* PDF Preview */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
                <div className="bg-gray-900 text-white text-center py-3 font-medium text-sm md:text-base">
                  RTI.pdf
                </div>
                <div className="w-full h-96 md:h-200 lg:h-screen max-h-screen">
                  <iframe
                    src="/admissions/RTI.pdf"
                    className="w-full h-full border-0"
                    title="RTI Document Preview"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}