"use client"

import { ChevronDown } from "lucide-react"

export default function FinanceCommitteeTable() {
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
            Finance Committee
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

              {/* HEADER */}
              <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                <tr>
                  <th className="border-b border-orange-300 px-6 py-4 text-left text-md font-semibold rounded-tl-3xl">
                    Name
                  </th>
                  <th className="border-b border-orange-300 px-6 py-4 text-left text-md font-semibold">
                    Designation
                  </th>
                  <th className="border-b border-orange-300 px-6 py-4 text-left text-md font-semibold rounded-tr-3xl">
                    Role
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y divide-orange-100">

                <TableRow
                  name="Prof. (Dr.) Bhagwan Nautiyal"
                  designation="Vice – Chancellor"
                  role="Chairperson"
                />

                <TableRow
                  name="Mr. Anand Mohan Nautiyal"
                  designation="—"
                  role="Member"
                />

                <TableRow
                  name="Mr. Rajendra Panwar"
                  designation="—"
                  role="Member"
                />

                <TableRow
                  name="Mr. Ajaad Bhusan Nautiyal"
                  designation="—"
                  role="Member"
                />

                <TableRow
                  name="Mr. Kamalkant Awasthi"
                  designation="—"
                  role="Member"
                />

                <TableRow
                  name="Dr. Amit Kumar"
                  designation="Registrar"
                  role="Member"
                />

                <TableRow
                  name="Mr. Suman Nautiyal"
                  designation="Finance Officer"
                  role="Secretary"
                />

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ================= ROW COMPONENT ================= */

function TableRow({ name, designation, role, highlight }) {
  return (
    <tr
      className={`hover:bg-orange-50/60 transition-colors duration-200 even:bg-orange-50/20 ${
        highlight ? "bg-orange-100/60 font-semibold" : ""
      }`}
    >
      <td className="px-6 py-4 text-gray-900">
        {name}
      </td>
      <td className="px-6 py-4 text-gray-700">
        {designation}
      </td>
      <td className="px-6 py-4 text-orange-700 font-medium">
        {role}
      </td>
    </tr>
  )
}
