"use client"

export default function EnquiryForm() {
  return (
    <section className="relative py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 overflow-hidden">

      {/* Background Pattern (Same as News Section) */}
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="container mx-auto max-w-5xl px-4 relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-[#f46b13] bg-orange-50 px-4 py-1 rounded-full border border-orange-200">
            Admissions
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Admission Enquiry
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to receive official information regarding
            programmes, eligibility criteria, fee structure and admission process.
          </p>

          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12">

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Applicant’s Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="As per academic records"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="number"
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                State / UT
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Programme of Interest <span className="text-red-500">*</span>
              </label>
              <select
                name="course"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">— Select Programme —</option>

                <optgroup label="Undergraduate Programmes">
                  <option>B.Sc</option>
                  <option>BCA</option>
                  <option>B.Com</option>
                  <option>BBA</option>
                  <option>B.Sc (Agriculture)</option>
                  <option>BA (Arts & Humanities)</option>
                  <option>BNYS</option>
                  <option>B.Sc (Yogic Science & Naturopathy)</option>
                  <option>B.Pharma</option>
                  <option>B.Sc Nursing</option>
                  <option>BPT</option>
                  <option>BA LLB</option>
                  <option>LLB</option>
                  <option>Bachelor of Hotel Management</option>
                  <option>BBA – Tourism</option>
                </optgroup>

                <optgroup label="Postgraduate Programmes">
                  <option>M.Sc</option>
                  <option>MCA</option>
                  <option>M.Com</option>
                  <option>MBA</option>
                  <option>M.A</option>
                  <option>M.Sc (Agriculture)</option>
                  <option>M.Sc (Horticulture)</option>
                  <option>M.A (Yogic Science)</option>
                  <option>M.Sc (Yogic Science)</option>
                  <option>Ph.D (Commerce)</option>
                </optgroup>

                <optgroup label="Diploma Programmes">
                  <option>Diploma – Civil Engineering</option>
                  <option>Diploma – Mechanical Engineering</option>
                  <option>Diploma – Computer Science & Engineering</option>
                  <option>AI / ML / Data Science / Cyber Security</option>
                  <option>Diploma in Agriculture</option>
                  <option>ANM</option>
                  <option>GNM</option>
                  <option>D.Pharma</option>
                  <option>Diploma – Hotel Management</option>
                </optgroup>

                <optgroup label="Doctoral Programmes">
                  <option>Ph.D (Commerce & Management)</option>
                  <option>Ph.D (Arts & Humanities)</option>
                </optgroup>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Your Query / Message
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder="Write your enquiry here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Consent */}
            <div className="sm:col-span-2 text-sm text-gray-600">
              By submitting this form, you consent to be contacted by
              <strong> Smt. Manjira Devi University</strong> regarding admission-related information.
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 text-center mt-8">
              <button
                type="submit"
                className="rounded-full bg-linear-to-r from-orange-500 to-amber-600 px-14 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                Submit Enquiry
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
