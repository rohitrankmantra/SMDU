"use client"

import { ChevronDown, Award, Users, BookOpen } from "lucide-react"

export default function FinanceOfficer() {
  return (
    <section className="relative py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Cpath d=%22M0 50 Q25 25 50 50 T100 50%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            Financial Administration
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Finance Officer
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* ================= PROFILE CARD ================= */}
        <div className="relative mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">

            {/* IMAGE */}
            <div className="lg:col-span-1">
              <div className="h-60 rounded-3xl shadow-2xl overflow-hidden border border-orange-200">
                <img
                  src="/about/financeofficer.jpg"
                  alt="Adv. Mr. Suman Nautiyal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="lg:col-span-2 h-60 bg-white rounded-3xl shadow-2xl border border-orange-100 p-8 lg:p-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Adv. Mr. Suman Nautiyal
              </h2>
              <p className="text-lg text-orange-700 font-semibold mb-3">
                Finance Officer
              </p>
              <p className="text-gray-600 italic">
                Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
              </p>
            </div>

          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid xl:grid-cols-2 gap-10">

          {/* MESSAGE / ABOUT */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Message from the Finance Officer
              </h3>
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-opacity duration-500" />
            </div>

            <div className="p-6 space-y-5 text-gray-700 text-sm leading-relaxed">

              <p>
                Nestled in the pristine lap of the Himalayas, on the banks of the
                revered Mother Ganga in Uttarkashi's district, Smt. Manjira Devi
                University stands as a profound blessing for the residents of this
                historically remote and backward region. Far from being isolated,
                this Himalayan expanse is now poised to play a pivotal role in the
                rise of a new India.
              </p>

              <p>
                The university is dedicated to advancing modern technology and
                employment-focused education, coupled with enhanced healthcare
                services. Here, young individuals are nurtured to harness their
                talents and establish their presence not only across India but
                also globally.
              </p>

              <p>
                The vision extends to empowering the youth to benefit the nation
                and the world with their capabilities, aspiring to take ancient
                Ayurvedic medical practices and education to a global audience.
                This university is actively shaping a future where the region's
                rich heritage of knowledge and its vibrant youth converge to
                create a powerful force for progress.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-xl">
                <p className="italic font-medium text-orange-800">
                  “To the residents of this region, sincerest best wishes are
                  offered for a brilliant future. Smt. Manjira Devi University
                  cordially welcomes and honors you.”
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
