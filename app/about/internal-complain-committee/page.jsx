"use client"

import { ChevronDown } from "lucide-react"

export default function InternalComplaintCommittee() {
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
            Internal Complaint Committee
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
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left font-semibold border-r border-orange-300">
                    S. No.
                  </th>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left font-semibold border-r border-orange-300">
                    Name
                  </th>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left font-semibold border-r border-orange-300">
                    Designation
                  </th>
                  <th className="px-4 py-4 md:px-6 md:py-5 text-left font-semibold">
                    Category
                  </th>
                </tr>
              </thead>

              {/* ================= TBODY ================= */}
              <tbody className="divide-y divide-orange-200">

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">1</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mrs. Durgi Khanduri</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Chairperson</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Women's Faculty</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">2</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mrs. Sarita Chauhan</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Faculty Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">3</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mr. Khushpal Singh</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Faculty Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">4</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Ms. Sakshi Panwar</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Non-Teaching Staff</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">5</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mr. Kamalkant Awasthi</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Non-Teaching Staff</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">6</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mr. Aditya Nautiyal</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Student Representative</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">7</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Ms. Neha Gusain</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Student Representative</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">8</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Ms. Saraswati Painuly</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Student Representative</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">9</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mr. Rajesh Rana</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Nominated Member from NGO</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">10</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Ms. Antriksha Panwar</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Specially Invited Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">11</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Bilal Ahmad</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Specially Invited Member</td>
                </tr>

                <tr className="hover:bg-orange-50/60 transition-colors">
                  <td className="px-4 py-4 md:px-6 md:py-5 text-center font-medium border-r border-orange-200">12</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Mrs. Shweta Raturi</td>
                  <td className="px-4 py-4 md:px-6 md:py-5 border-r border-orange-200">Member</td>
                  <td className="px-4 py-4 md:px-6 md:py-5">Specially Invited Member</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}