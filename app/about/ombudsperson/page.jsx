"use client"

import { ChevronDown, Award, Users, BookOpen, Globe, Mail } from "lucide-react"

export default function Ombudsperson() {
  return (
    <section className="relative py-24 bg-linear-to-br from-orange-50 via-amber-50/80 to-orange-100/50 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22%3E%3Cpath d=%22M0 50 Q25 25 50 50 T100 50%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 opacity=%220.1%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            University Ombudsman
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Ombudsperson
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
                  src="/about/ombudsperson.jpg"
                  alt="Prof. J. P. Pachauri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="lg:col-span-2 h-60 bg-white rounded-3xl shadow-2xl border border-orange-100 p-8 lg:p-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Prof. J. P. Pachauri
              </h2>
              <p className="text-lg text-orange-700 font-semibold mb-3">
                Ombudsman
              </p>
              <p className="text-gray-600 italic">
                Smt. Manjira Devi University, Uttarkashi (Uttarakhand)
              </p>
            </div>

          </div>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="grid xl:grid-cols-2 gap-10">

          {/* BRIEF PROFILE */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" />
                Brief Profile
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-700 leading-relaxed">
              <p>
                Prof. J. P. Pachauri is a distinguished academician and administrator
                with over <b>40 years</b> of experience in teaching, research, and
                university administration. He has held several key leadership positions
                and guided more than <b>45 research scholars</b>. His career reflects
                an unwavering commitment to academic excellence, ethical governance,
                and institutional development.
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Academic & Administrative Experience
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>Teaching Experience: 40 Years</li>
                <li>Research Experience: 40 Years</li>
                <li>Administrative Experience: 40 Years</li>
                <li>Research Scholars Guided: 45</li>
              </ul>
            </div>
          </div>

          {/* MAJOR POSITIONS */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Major Administrative Positions Held
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-700 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Head, Department of Sociology and Social Work</li>
                <li>Dean, Faculty of Arts</li>
                <li>Dean, School of Humanities and Social Sciences</li>
                <li>Dean, Students’ Welfare</li>
                <li>Controller of Examinations</li>
                <li>Chief Warden (Hostels)</li>
                <li>Chief Proctor</li>
                <li>NSS Coordinator</li>
              </ul>

              <p className="pt-3">
                <b>Last Position in H.N.B. Garhwal University:</b> Professor & Head,
                Department of Sociology & Social Work
              </p>
            </div>
          </div>

          {/* INTERNATIONAL */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Globe className="w-5 h-5" />
                International Exposure
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>
                  <b>United States of America:</b> Participated in academic conferences.
                </li>
                <li>
                  <b>Sweden:</b> Served as Visiting Professor at Linnaeus University,
                  Växjö, Sweden for three academic sessions.
                </li>
              </ul>
            </div>
          </div>

          {/* NAAC */}
          <div className="bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="w-5 h-5" />
                NAAC Involvement
              </h3>
            </div>
            <div className="p-6 text-sm text-gray-700">
              <p>
                Conducted more than <b>140 NAAC visits</b> as Chairman, Coordinator, and
                Member of Peer Teams across India, contributing significantly to quality
                assurance and higher education excellence.
              </p>
            </div>
          </div>

          {/* AFTER SUPERANNUATION */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Positions Held After Superannuation
              </h3>
            </div>

            <div className="p-6 text-sm text-gray-700 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Visitor’s (President of India) Nominee, Banaras Hindu University (BHU)</li>
                <li>Vice-Chancellor, Shree Sparsh Himalaya University, Dehradun</li>
                <li>NAAC Advisor, Institute of Technology and Management, Dehradun</li>
                <li>Advisor to the President, S.G.G.R. University, Dehradun</li>
                <li>Advisor to the President, Smt. Manjira Devi University, Uttarkashi</li>
                <li>Chairman, Search Committee for Selection of Vice-Chancellor, S.G.G.R. University</li>
                <li>Member, Executive Council, Doon University, Dehradun</li>
                <li>Member, Board of Governors, S.G.G.R. University, Dehradun</li>
                <li>Member, Board of Governors (BOG), Smt. Manjira Devi University, Uttarkashi</li>
                <li>Member, Board of Studies, Soban Singh Jeena University, Almora</li>
                <li>
                  External Expert (IQAC) in:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>D.A.V. (P.G.) College, Dehradun</li>
                    <li>M.K.P. (P.G.) College, Dehradun</li>
                    <li>C.L. Degree College, Landhora</li>
                    <li>Kumaun University, Nainital</li>
                    <li>ITM University, Dehradun</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden">
            <div className="bg-linear-to-r from-orange-500 to-amber-600 px-6 py-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Information
              </h3>
            </div>

            <div className="p-6 text-sm text-gray-700">
              <p>
                <b>Phone:</b> 9557511400 <br />
                <b>Email:</b>{" "}
                <a
                  href="mailto:jwalapachauri@gmail.com"
                  className="text-orange-600 font-medium"
                >
                  jwalapachauri@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
