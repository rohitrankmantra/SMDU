"use client"
import React from 'react'
import { PageHero } from '@/components/page-hero';
import { motion } from 'framer-motion';

const eligibilityCriteria = [
  {
    program: "B.Tech - Computer Science & Engineering",
    criteria: "10+2 (PCM) with minimum 60% aggregate (55% for SC/ST/OBC). Physics, Mathematics compulsory; Chemistry/Computer Science/Biology as third subject.",
    entrance: "JEE Main valid score OR SMDU Entrance Test",
    notes: "Lateral Entry (2nd Year): Diploma in Engineering with 60% marks"
  },
  {
    program: "B.Tech - Electronics & Communication Engineering",
    criteria: "10+2 (PCM) with minimum 60% aggregate (55% for reserved categories)",
    entrance: "JEE Main OR SMDU Entrance Test",
    notes: ""
  },
  {
    program: "B.Tech - Mechanical Engineering",
    criteria: "10+2 (PCM) with minimum 60% aggregate (55% for reserved categories)",
    entrance: "JEE Main OR SMDU Entrance Test",
    notes: ""
  },
  {
    program: "B.Tech - Civil Engineering",
    criteria: "10+2 (PCM) with minimum 60% aggregate (55% for reserved categories)",
    entrance: "JEE Main OR SMDU Entrance Test",
    notes: ""
  },
  {
    program: "BBA - Bachelor of Business Administration",
    criteria: "10+2 from any recognized board with minimum 50% aggregate (45% for reserved categories)",
    entrance: "Merit-based OR SMDU Entrance Test",
    notes: "No specific stream required"
  },
  {
    program: "B.Com (Hons)",
    criteria: "10+2 with Commerce/Mathematics with minimum 50% aggregate (45% for reserved categories)",
    entrance: "Merit-based OR SMDU Entrance Test",
    notes: ""
  },
  {
    program: "BA LLB (Integrated)",
    criteria: "10+2 from any recognized board with minimum 45% aggregate (40% for SC/ST)",
    entrance: "CLAT / LSAT / SMDU Law Entrance Test",
    notes: "Maximum age: 20 years (22 for SC/ST) as on July 1 of admission year"
  },
  {
    program: "MBA - Master of Business Administration",
    criteria: "Bachelor's degree in any discipline with minimum 50% aggregate (45% for reserved categories)",
    entrance: "CAT / MAT / CMAT valid score OR SMDU MBA Entrance Test + GD/PI",
    notes: "Work experience preferred but not mandatory"
  },
  {
    program: "M.Tech - Computer Science",
    criteria: "B.Tech/B.E. in CSE/IT or related field with minimum 60% aggregate (55% for reserved categories)",
    entrance: "GATE valid score OR SMDU PG Entrance Test",
    notes: ""
  },
  {
    program: "Ph.D Program",
    criteria: "Master's degree in relevant discipline with minimum 55% aggregate (50% for reserved categories)",
    entrance: "SMDU Research Aptitude Test (RAT) + Interview",
    notes: "UGC-NET/JRF qualified candidates exempted from RAT"
  },
]

const page = () => {
  return (
    <>
      <PageHero
        title="Course Requirements"
        subtitle="Eligibility and admission guidelines"
        description="This section outlines the academic qualifications, prerequisite knowledge, and admission criteria required for each program. Review the requirements carefully to ensure a smooth application process."
        image="/home/headerbg.jpeg"
      />

      <section
        id="eligibility"
        className="relative py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          {/* ===== Heading ===== */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-orange-600 bg-orange-50 px-4 py-1 rounded-full border border-orange-200">
              Requirements
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Eligibility Criteria
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Check the detailed eligibility requirements, entrance examinations, and additional notes for our academic programmes.
            </p>

            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-600 mx-auto mt-6 rounded-full" />
          </div>

          {/* ===== Table ===== */}
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-linear-to-r from-orange-500 to-amber-600 text-white">
                  <th className="px-6 py-5 text-left text-sm font-semibold">Programme</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold">Eligibility Criteria</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold">Entrance Examination</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold">Additional Notes</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {eligibilityCriteria.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="hover:bg-orange-50/70 transition-colors"
                  >
                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {item.program}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-700 leading-relaxed">
                      {item.criteria}
                    </td>

                    <td className="px-6 py-5 text-sm font-medium text-orange-600">
                      {item.entrance}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600 italic">
                      {item.notes || "-"}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== Note Section ===== */}
          <div className="mt-12 bg-orange-50 border border-orange-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>Note:</strong> Relaxation of 5% in minimum aggregate marks is applicable for SC/ST/OBC candidates across most programs. All admissions are subject to verification of original documents. For any queries, contact the admissions office.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default page