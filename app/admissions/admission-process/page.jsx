"use client"

import { ChevronDown, CheckCircle } from "lucide-react"

export default function AdmissionProcessPage() {
  return (
    <section className="relative py-12 md:py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50">
      <div className="container mx-auto max-w-7xl px-4">

        {/* ================= CLEAN HEADER ================= */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-5">
            Admission
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admission Process & Guidelines
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= MAIN CONTENT - CLEAN & READABLE ================= */}
        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 max-w-4xl mx-auto overflow-hidden">
          <div className="p-6 md:p-10 lg:p-12 space-y-12">

            {/* General Admission Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                General Admission Process
                <span className="block text-lg md:text-xl font-medium text-orange-600 mt-1">
                  (UG, PG, Diploma & Other Courses)
                </span>
              </h2>

              <ol className="space-y-10">
                {/* Step 1 */}
                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Eligibility & Admission Rules</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A student shall be eligible for admission to any course offered by the University if they fulfill the eligibility criteria and follow the prescribed admission process.
                    </p>
                  </div>
                </li>

                {/* Step 2 */}
                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Migration / Transfer</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Students may be admitted on migration from other recognized universities if their examination is equivalent. Refer to the Ordinance (Transfer of Credits) on the website for details.
                    </p>
                  </div>
                </li>

                {/* Step 3 */}
                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Enrolment & Required Documents</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Enrolment requires an application forwarded by the Head of Department and submission of original mark sheets, NOC (if applicable) and prescribed fee.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                        Mark sheet of qualifying examination (original)
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                        No objection certificate (original)
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                        Prescribed fees
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Step 4 */}
                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Application & Fees</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Application forms are available from the admission office or the official portal. Application fee: <strong>Rs. 2000 (general)</strong> & <strong>Rs. 5000 (B.Sc. Nursing & BNYS)</strong>.
                    </p>
                  </div>
                </li>

                {/* Step 5 */}
                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Portal Submission</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Submit applications via the official admissions portal or by emailing{" "}
                      <a href="mailto:info@smdu.edu.in" className="text-orange-600 font-medium underline">
                        info@smdu.edu.in
                      </a>
                      . Upload required documents and pay the application fee online.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        Complete personal & educational details
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        Upload 10th & 12th certificates, ID proof
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        Qualified candidates will be invited for an interview
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        Receive provisional admission letter and pay provisional fees to secure your seat
                      </li>
                      <li className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        Undergo document verification and pay semester fees within the stipulated timeframe
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>

            {/* Admission via Entrance Exam */}
            <div className="bg-orange-50 rounded-2xl p-6 md:p-8 border border-orange-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Admission via Entrance Exam
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Applicants must apply through the official portal (
                <a href="mailto:info@smdu.edu.in" className="text-orange-600 font-medium underline">
                  info@smdu.edu.in
                </a>
                ), fill basic details, pay the application fee, qualify the entrance exam and follow the same subsequent steps as the general admission process.
              </p>
            </div>

            {/* Required Documents */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Required Documents
              </h2>

              <div className="grid sm:grid-cols-2 gap-8">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    10th & 12th Mark Sheets
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Aadhaar Card / ID Proof
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Migration Certificate / Transfer Certificate
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Character Certificate
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    6 Passport Size Photographs
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Bachelor’s & Master’s Degree Certificates (for PG/PhD)
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    State Domicile Certificate
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    SC/ST/OBC/Caste Certificate
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Gap Certificate
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Fitness Certificate
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    Admission Condition & Anti-Ragging Affidavits
                  </li>
                </ul>
              </div>
            </div>

            {/* Fee Payment Guidelines */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Fee Payment Guidelines
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-gray-700">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">•</span>
                  </div>
                  <span>Fees can be paid in installments via designated banks / payment gateways.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-700">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">•</span>
                  </div>
                  <span>No capitation fees or donations are accepted for admissions.</span>
                </li>
                <li className="flex items-start gap-4 text-gray-700">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm font-bold">•</span>
                  </div>
                  <span>No separate management / reservation / donation quota is available.</span>
                </li>
              </ul>
            </div>

            {/* Final Contact Note */}
            <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl p-6 text-center border border-orange-200">
              <p className="text-base md:text-lg text-gray-800">
                For detailed fee structure, seat availability and programme-specific eligibility, please visit the official admissions portal or contact the admissions office at{" "}
                <a href="mailto:info@smdu.edu.in" className="text-orange-600 font-semibold underline">
                  info@smdu.edu.in
                </a>.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}