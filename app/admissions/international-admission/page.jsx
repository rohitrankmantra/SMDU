"use client"

import { ChevronDown, Globe, Mail, Phone, CheckCircle } from "lucide-react"

export default function InternationalAdmissionsPage() {
  return (
    <section className="relative py-12 md:py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50">
      <div className="container mx-auto max-w-7xl px-4">

        {/* ================= CLEAN HEADER ================= */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-5">
            International Students
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admission Procedure & Facilities for International Students
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 max-w-4xl mx-auto overflow-hidden">
          <div className="p-6 md:p-10 lg:p-12 space-y-12">

            {/* University Overview */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-orange-600" />
                University Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Smt. Manjira Devi University (SMDU) is a UGC-recognized private university established in 2024 in Uttarkashi, Uttarakhand, India. It offers UG / PG / Diploma / Doctoral programmes across multiple disciplines.
              </p>
            </div>

            {/* Admission Procedure */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                1. Admission Procedure for International Students
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-6">Step-by-Step Process</h3>

              <ol className="space-y-8">
                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Application Submission</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Apply online through the University’s international portal or by email. Provide completed application and required academic documents.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Eligibility Verification</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Submit official transcripts/mark sheets and certificates from your home country. Foreign qualifications are checked for equivalence under UGC regulations.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Academic Review</h4>
                    <p className="text-gray-700 leading-relaxed">
                      University checks eligibility based on programme requirements (10+2 for UG, bachelor’s for PG).
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Offer Letter</h4>
                    <p className="text-gray-700 leading-relaxed">
                      An Offer of Admission Letter is issued once eligibility is confirmed.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Fee Payment & Confirmation</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Pay admission/enrolment and tuition fees to confirm your seat.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Visa Support Letter</h4>
                    <p className="text-gray-700 leading-relaxed">
                      University issues official visa support letter after fee confirmation.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    7
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Arrival & Orientation</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Attend pre-arrival orientation online or on campus.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-10 bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Points:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    Admission follows UGC guidelines for international students.
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    Multiple intakes may be available per UGC cycles.
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    Details on seats, eligibility and fees are published on the official website and prospectus.
                  </li>
                </ul>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                2. Eligibility Criteria (General Guidelines)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full min-w-125 border-collapse">
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Level</th>
                      <th className="px-6 py-4 text-left font-semibold">Minimum Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Undergraduate (UG)</td>
                      <td className="px-6 py-4">Completion of 10+2 or equivalent from recognized board</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Postgraduate (PG)</td>
                      <td className="px-6 py-4">Bachelor’s degree or equivalent from recognized institution</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Doctoral (PhD)</td>
                      <td className="px-6 py-4">Master’s degree with minimum percentage as required by the programme</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-gray-700 italic">
                Note: International qualifications are evaluated for equivalence as per UGC / University policy.
              </p>
            </div>

            {/* Documents Required */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                3. Documents Required
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  Passport copy
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  Academic transcripts & certificates
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  Proof of English proficiency (if required)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  Passport-size photos
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  Statement of Purpose (if required)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  Financial proof / letter (as required for visa)
                </li>
              </ul>
            </div>

            {/* UGC Guidelines */}
            <div className="bg-orange-50 rounded-2xl p-6 md:p-8 border border-orange-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                4. Special UGC Guidelines for International Students
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  Universities may create supernumerary seats for international students beyond regular seats.
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  Transparent, fair admission processes should be used.
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  Universities must maintain a support desk for international student needs.
                </li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                5. Facilities Provided to International Students
              </h2>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Campus Learning & Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Modern classrooms and lecture halls
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Laboratories and research facilities
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Library with academic resources
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Dedicated student support services
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Student Life & Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Orientation programmes
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      International student helpdesk
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Academic advising and mentorship
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Accommodation & Campus Life</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      On-campus / affiliated hostels (subject to availability)
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Cafeteria and dining facilities
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Wi-Fi enabled campus
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Facilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Cultural & extracurricular programs
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Sports and wellness facilities
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      Transport services
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      International student networking & clubs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= CONTACT - FULLY RESPONSIVE ================= */}
            <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                6. Contact & Support
              </h2>

              <div className="max-w-2xl mx-auto">
                <p className="text-center font-medium text-gray-800 mb-6">
                  International Student Admissions Office
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Mail className="w-8 h-8 text-orange-600" />
                    <span className="text-sm text-gray-600">Email</span>
                    <a href="mailto:international@smdu.edu.in" className="text-orange-600 font-semibold underline break-all">
                      international@smdu.edu.in
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Phone className="w-8 h-8 text-orange-600" />
                    <span className="text-sm text-gray-600">Phone</span>
                    <a href="tel:+91800634557" className="text-orange-600 font-semibold underline">
                      +91 800634557
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Globe className="w-8 h-8 text-orange-600" />
                    <span className="text-sm text-gray-600">Website</span>
                    <a href="http://smdu.edu.in" className="text-orange-600 font-semibold underline break-all">
                      smdu.edu.in
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-700 italic">
                Specific facilities and details are confirmed by the University and may vary by campus and programme.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}