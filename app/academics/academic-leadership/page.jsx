"use client"

import { ChevronDown, Phone, Mail } from "lucide-react"

const leadershipData = [
  {
    name: "Dr. Jyoti Upadhyay",
    role: "Head of the Department",
    department: "Department of Naturopathy & Yogic Science",
    phone: "9639496825",
    email: "jyotikm462@gmail.com",
  },
  {
    name: "Mr. Rajesh Kohli",
    role: "Head of the Department",
    department: "Department of Education",
    phone: "8755935814",
    email: "rajeshsinghuk12@gmail.com",
  },
  {
    name: "Mr. Yatendra Singh Rawat",
    role: "Head of the Department",
    department: "Department of Agriculture",
    phone: "7310974518",
    email: "yatendrasingh2122@gmail.com",
  },
  {
    name: "Mr. Rajesh Singh Rana",
    role: "Head of the Department",
    department: "Department of Engineering",
    phone: "8979291178",
    email: "rajeshrana487@gmail.com",
  },
  {
    name: "Mr. Vikas Dhawan",
    role: "Head of the Department",
    department: "Department of Pharmacy",
    phone: "8791668656",
    email: "Vikash.rke@gmail.com",
  },
  {
    name: "Mr. Bilal Ahmad",
    role: "Head of the Department",
    department: "Department of Paramedical",
    phone: "9149459127",
    email: "bilalahmeddar619@gmail.com",
  },
]

export default function AcademicLeadershipPage() {
  return (
    <section className="relative py-12 md:py-24 min-h-screen">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative container mx-auto max-w-7xl px-4">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-100 rounded-full text-orange-700 text-xs font-semibold uppercase mb-5">
            University Leadership
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Leadership
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Smt. Manjira Devi University — Uttarkashi (Uttarakhand)
          </p>

          <div className="w-20 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* ================= LEADERS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipData.map((person, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-orange-100 shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              {/* Top Accent */}
              <div className="h-2 bg-linear-to-r from-orange-500 to-amber-500" />

              <div className="p-8 text-center">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-3xl font-bold">
                  {person.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {person.name}
                </h3>

                <p className="text-orange-600 font-semibold mb-2">
                  {person.role}
                </p>

                <p className="text-gray-600 text-sm mb-6">
                  {person.department}
                </p>

                {/* Contact */}
                <div className="space-y-3 text-sm">
                  <a
                    href={`tel:${person.phone}`}
                    className="flex items-center justify-center gap-2 text-gray-700 hover:text-orange-600 transition"
                  >
                    <Phone className="w-4 h-4" />
                    {person.phone}
                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center justify-center gap-2 text-gray-700 hover:text-orange-600 transition break-all"
                  >
                    <Mail className="w-4 h-4" />
                    {person.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
