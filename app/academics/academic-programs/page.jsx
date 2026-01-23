"use client"

import React from "react";

export default function AcademicPrograms() {
  const programs = [
    {
      sno: 1,
      school: "School of Engineering (SoE)",
      courses: "Diploma – CSE/CE/ME/EE\nB.Tech – CSE"
    },
    {
      sno: 2,
      school: "School of Yogic Science & Naturopathy (SoYS&N)",
      courses: "Certificate – Yoga\nPG Diploma – Yoga\nB.Sc.\nM.Sc. / M.A.\nPh.D. – Yoga\nBNYS"
    },
    {
      sno: 3,
      school: "School of Agriculture (SoAG)",
      courses: "Diploma – Agriculture\nB.Sc. – Agriculture\nM.Sc. – Agronomy / Horticulture"
    },
    {
      sno: 4,
      school: "School of Commerce & Management Studies (SoC&MS)",
      courses: "Diploma – Retail Management\nB.Com.\nM.Com.\nPh.D. – Commerce\nBBA (General)\nMBA (Finance / Marketing / HR)\nPh.D. – Management / Commerce"
    },
    {
      sno: 5,
      school: "School of Arts & Humanities (SoA&H)",
      courses: "B.A. (English / Hindi / Sanskrit / History / Political Science / Sociology / Education / Economics)\nB.Lib.\nB.Ed.\nM.A. (English / Hindi / Sanskrit / History / Political Science / Sociology / Education / Economics)\nM.Lib.\nPh.D. (English / Hindi / Sanskrit / History / Political Science / Sociology / Education / Economics / Library Science)"
    },
    {
      sno: 6,
      school: "School of Hotel Management and Tourism (SoHM&T)",
      courses: "Diploma – Travel & Tourism Management\nDiploma – HM\nBBA – Hospitality & Tourism\nB.Voc – Hotel & Resort Management\nBHMCT"
    },
    {
      sno: 7,
      school: "School of Science and Technology (SoS&T)",
      courses: "B.Sc. – Physics, Chemistry, Biology, Zoology, Computer Science\nBCA\nDiploma – AI & ML / Data Science & Cloud Tech / Cyber Security / Forensic Science\nM.Sc. – Physics, Chemistry, Biology, Zoology, Computer Science\nMCA"
    },
    {
      sno: 8,
      school: "School of Paramedical & Health Science (SoP&HS)",
      courses: "Diploma – Healthcare Management\nDiploma – Pharmacy\nB.Sc. – Nursing\nB.Voc – Healthcare\nANM\nGNM\nB.Pharma\nD.Pharma\nBPT\nBMLT"
    },
    {
      sno: 9,
      school: "School of Aviation and Logistics (SoA&L)",
      courses: "Diploma – Aviation\nBBA – Aviation & Hospitality\nApprenticeship Based BBA Program in Logistics\nB.Voc – Airport Management\nMBA – Aviation\nMBA – Aviation & Hospitality"
    },
    {
      sno: 10,
      school: "School of Legal Studies (SoLS)",
      courses: "B.A. LL.B. (Integrated)\nLL.B."
    }
  ];

  return (
    <section className="relative py-12 md:py-24 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Details of Academic Programs
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Programs Table */}
        <div className="overflow-x-auto bg-white rounded-3xl shadow-2xl border border-orange-100">
          <table className="min-w-full table-auto divide-y divide-orange-200">
            <thead className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
              <tr>
                <th className="px-6 py-4 text-center font-semibold">S. No.</th>
                <th className="px-6 py-4 text-left font-semibold">School</th>
                <th className="px-6 py-4 text-left font-semibold">Courses Offered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-200">
              {programs.map((program) => (
                <tr key={program.sno} className="hover:bg-orange-50/50 transition">
                  <td className="px-6 py-5 text-center font-medium">{program.sno}</td>
                  <td className="px-6 py-5">{program.school}</td>
                  <td className="px-6 py-5 whitespace-pre-line">{program.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
