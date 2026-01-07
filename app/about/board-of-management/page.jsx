"use client"

import { ChevronDown } from "lucide-react"

export default function BoardOfManagementTable() {
  return (
    <section className="relative py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50">
      <div className="container mx-auto max-w-7xl px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-4">
            University Governance
            <ChevronDown className="w-3 h-3" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            Board of Management
          </h1>

          <p className="text-gray-600">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-0">

              {/* ================= THEAD ================= */}
              <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                <tr>
                  <th className="border-b border-orange-300 text-md px-6 py-4 text-left font-semibold rounded-tl-3xl">
                    Designation
                  </th>
                  <th className="border-b border-orange-300 px-6 py-4 text-md text-left font-semibold">
                    Role
                  </th>
                  <th className="border-b border-orange-300 px-6 py-4 text-md text-left font-semibold rounded-tr-3xl">
                    Name
                  </th>
                </tr>
              </thead>

              {/* ================= TBODY ================= */}
              <tbody className="divide-y divide-orange-100">

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
                    Vice - Chancellor
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">
                    Chairperson
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    Prof. (Dr.) Bhagwan Nautiyal
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td
                    rowSpan={5}
                    className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100 align-top"
                  >
                    Eminent persons nominated by Sponsoring Body from different fields
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Sant Siromani Swami Chidanand Maharaj
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Sant Shri Murlihar Ji Maharaj
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Mr. Dinesh Patel
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Mr. Rishikesh Patel
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Mr. Survardhan Shah
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
                    Nominated by Principal Secretary, Deptt. Higher Education, Govt. of Uttarakhand
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Mr. Yomesh Dubey
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
                    Principal, Nominated by President
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">-</td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td
                    rowSpan={3}
                    className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100 align-top"
                  >
                    Director / Finance Officer
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Dr. Anup Baluni
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Dr. Anukur Agrwal
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Mr. Suman Nautiyal
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td
                    rowSpan={2}
                    className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100 align-top"
                  >
                    Nominated by Vice – Chancellor
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Dr. Varsha, Principal
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
                  <td className="px-6 py-4 text-gray-800">
                    Mr. Kamlesh Uniyal
                  </td>
                </tr>

                <tr className="hover:bg-orange-50/50 transition-colors duration-200">
                  <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
                    Registrar
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-r border-orange-100">
                    Secretary
                  </td>
                  <td className="px-6 py-4 text-gray-800">
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