"use client"

import { ChevronDown } from "lucide-react"

export default function AcademicCouncilTable() {
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
            Academic Council
          </h1>

          <p className="text-gray-600">
            Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
          </p>

          <div className="w-24 h-1 bg-lineaar-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= TABLE ================= */}
      <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-separate border-spacing-0">
      {/* HEADER */}
      <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
        <tr> 
          <th className="border-b border-orange-300 text-md px-6 py-4 text-left font-semibold rounded-tl-3xl">
            Designation
          </th>
          <th className="border-b border-orange-300 px-6 py-4 text-md text-left font-semibold">
            Role
          </th>
          <th className="border-b border-orange-300 px-6 py-4  text-md text-left font-semibold rounded-tr-3xl">
            Name
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-orange-100">
        {/* Vice Chancellor */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
            Vice-Chancellor
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Chairperson</td>
          <td className="px-6 py-4 text-gray-800">
            Prof. (Dr.) Bhagwan Nautiyal
          </td>
        </tr>

        {/* Head of Department */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
            Head of the Department
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">
            Dr. Anup Baluni
          </td>
        </tr>

        {/* Nominated by the President */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 ">
          <td rowSpan={3} className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100 align-top ">
            Nominated by the President
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. Hemchand Joshi</td>
        </tr>
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 ">
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. Rajesh Singh</td>
        </tr>
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">
            Dr. Yogesh Sharma, Principal
          </td>
        </tr>

        {/* Nominated by Vice Chancellor */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td rowSpan={2} className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100 align-top bg-orange-50/30">
            Nominated by the Vice-Chancellor
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. Ankur Agrawal</td>
        </tr>
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. Jitendra Malik</td>
        </tr>

        {/* Co-teacher */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
            Under the category of Co-teacher
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Mr. Naveen Kothari</td>
        </tr>

        {/* Assistant Professor */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
            Assistant Professor
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">
            Mr. Someshwar Dobhal
          </td>
        </tr>

        {/* Academicians */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td rowSpan={3} className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100 align-top bg-orange-50/30">
            Academicians
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. R. P. Singh</td>
        </tr>
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. R. K. Varma</td>
        </tr>
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Member</td>
          <td className="px-6 py-4 text-gray-800">Dr. D. C. Goswami</td>
        </tr>

        {/* Registrar */}
        <tr className="hover:bg-orange-50/50 transition-colors duration-200 even:bg-orange-50/20">
          <td className="px-6 py-4 font-semibold text-gray-900 border-r border-orange-100">
            Registrar
          </td>
          <td className="px-6 py-4 text-gray-700 border-r border-orange-100">Secretary</td>
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

/* ================= ROW COMPONENT ================= */

function TableRow({ designation, role, name, highlight }) {
  return (
    <tr
      className={`transition hover:bg-orange-50 ${
        highlight ? "bg-orange-100/60 font-semibold" : ""
      }`}
    >
      <td className="px-6 py-4 text-gray-700">
        {designation || "—"}
      </td>
      <td className="px-6 py-4 text-orange-700 font-medium">
        {role}
      </td>
      <td className="px-6 py-4 text-gray-900">
        {name}
      </td>
    </tr>
  )
}
