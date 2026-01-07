"use client"

import { ChevronDown } from "lucide-react"

export default function BoardOfManagementTable() {
  return (
    <section className="relative py-12 md:py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50">
      <div className="container mx-auto max-w-7xl px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-4">
            University Governance
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Board of Management
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">

              {/* ================= THEAD ================= */}
              <thead>
                <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                  <th className="px-6 py-5 text-left font-semibold border-r border-orange-300">
                    Designation
                  </th>
                  <th className="px-6 py-5 text-left font-semibold border-r border-orange-300">
                    Role
                  </th>
                  <th className="px-6 py-5 text-left font-semibold">
                    Name
                  </th>
                </tr>
              </thead>

              {/* ================= TBODY ================= */}
              <tbody className="divide-y divide-orange-200">

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 font-semibold border-r border-orange-200">
                    Vice - Chancellor
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Chairperson
                  </td>
                  <td className="px-6 py-5">
                    Prof. (Dr.) Bhagwan Nautiyal
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td
                    rowSpan={5}
                    className="px-6 py-5 font-semibold align-top border-r border-orange-200"
                  >
                    Eminent persons nominated by Sponsoring Body from different fields
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Sant Siromani Swami Chidanand Maharaj
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Sant Shri Murlihar Ji Maharaj
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Mr. Dinesh Patel
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Mr. Rishikesh Patel
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Mr. Survardhan Shah
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 font-semibold border-r border-orange-200">
                    Nominated by Principal Secretary, Deptt. Higher Education, Govt. of Uttarakhand
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Mr. Yomesh Dubey
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 font-semibold border-r border-orange-200">
                    Principal, Nominated by President
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">-</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td
                    rowSpan={3}
                    className="px-6 py-5 font-semibold align-top border-r border-orange-200"
                  >
                    Director / Finance Officer
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Dr. Anup Baluni
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Dr. Anukur Agrwal
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Mr. Suman Nautiyal
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td
                    rowSpan={2}
                    className="px-6 py-5 font-semibold align-top border-r border-orange-200"
                  >
                    Nominated by Vice – Chancellor
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Dr. Varsha, Principal
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 border-r border-orange-200">Member</td>
                  <td className="px-6 py-5">
                    Mr. Kamlesh Uniyal
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-6 py-5 font-semibold border-r border-orange-200">
                    Registrar
                  </td>
                  <td className="px-6 py-5 border-r border-orange-200">
                    Secretary
                  </td>
                  <td className="px-6 py-5">
                    Dr. Amit Kumar
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}