"use client"

import React from "react"
import { PageHero } from "@/components/page-hero"
import { Mail, Phone, MapPin, Globe, Users, Briefcase, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const nursingOpenings = [
  {
    designation: "Principal",
    posts: "1 Post",
    qualification:
      "M.Sc. (Nursing) with 15 years experience, including 10 years post M.Sc. in a collegiate programme.",
  },
  {
    designation: "Associate Professor",
    posts: "2 Posts",
    qualification:
      "M.Sc. Nursing with 8 years experience including 5 years teaching. Ph.D desirable.",
  },
  {
    designation: "Assistant Professor",
    posts: "2 Posts",
    qualification:
      "M.Sc. Nursing with minimum 3 years teaching experience. Ph.D desirable.",
  },
  {
    designation: "Tutor",
    posts: "4 Posts",
    qualification:
      "M.Sc. / B.Sc. Nursing with minimum 1 year experience.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="Join Our Mission"
        subtitle="Shape the Future of Education & Healthcare"
        description="At Smt. Manjira Devi University, we are committed to excellence in teaching, research, and service. Join our passionate team and inspire the next generation."
        image="/home/campus2.jpg"
      />

      {/* ================= CURRENT OPENINGS ================= */}
        <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-5" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 text-[#F56A14] bg-[#fff3eb] px-4 py-2 rounded-full border border-[#ffd7bf]">
              Current Openings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              School of Nursing
            </h2>
            <div className="w-24 h-1 bg-[#F56A14] mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {nursingOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="bg-[#F56A14] text-white p-6">
                  <h3 className="text-xl font-bold">{job.designation}</h3>
                  <p className="opacity-90 mt-1">{job.posts}</p>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 text-gray-700">
                    <Briefcase className="w-5 h-5 text-[#F56A14] mt-1 shrink-0" />
                    <p className="leading-relaxed">{job.qualification}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
        <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5" />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-[#fff7f2] rounded-3xl shadow-xl border border-[#ffd7bf] p-10 md:p-14"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-[#F56A14] rounded-2xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Other Career Opportunities
                </h2>
                <p className="text-gray-700 mt-2">
                  We regularly hire across various departments
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                "Teaching Faculty (All Disciplines)",
                "Administrative Officers",
                "Research Scholars & Assistants",
                "Lab Technicians",
                "Librarians & IT Staff",
                "Hostel Wardens & Support Staff",
              ].map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
                >
                  <div className="p-3 bg-[#fff3eb] rounded-lg">
                    <Building2 className="w-6 h-6 text-[#F56A14]" />
                  </div>
                  <span className="font-medium text-gray-800">{role}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-[#fff3eb] rounded-2xl p-6 border border-[#ffd7bf]">
              <p className="font-medium text-gray-800">
                <strong>Eligibility:</strong> As per UGC / AICTE / INC norms
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Selection Process:</strong> Shortlisting → Interview → Document Verification
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT & APPLY ================= */}
         <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-5" />
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-[#F56A14] text-white p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Us?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Send your updated CV and cover letter to begin your journey with SMDU.
              </p>
            </div>

            <div className="p-10 md:p-14 grid md:grid-cols-2 gap-10">
              {/* CONTACT */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact HR Department
                </h3>

                <div className="space-y-5 text-gray-700">
                  {[{
                    icon: Mail,
                    label: "Email",
                    value: "careers@smdu.edu.in",
                    link: "mailto:careers@smdu.edu.in",
                  },{
                    icon: Phone,
                    label: "Phone",
                    value: "01371-299442 | 80063-45557 | 80063-45558",
                  },{
                    icon: MapPin,
                    label: "Campus Address",
                    value: "Uttarkashi, Uttarakhand, India",
                  },{
                    icon: Globe,
                    label: "Website",
                    value: "www.smdu.edu.in",
                    link: "https://www.smdu.edu.in",
                  }].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-3 bg-[#fff3eb] rounded-full">
                        <item.icon className="w-6 h-6 text-[#F56A14]" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-semibold text-[#F56A14] hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOW TO APPLY */}
              <div className="bg-[#fff7f2] rounded-2xl p-8 border border-[#ffd7bf]">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  How to Apply
                </h4>
                <ol className="space-y-3 text-gray-700">
                  {[
                    "Prepare your CV and supporting documents",
                    "Email to careers@smdu.edu.in",
                    "Mention the position in the subject line",
                    "Shortlisted candidates will be contacted",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-bold text-[#F56A14]">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>

                <p className="mt-8 text-sm text-gray-600 italic">
                  Appointments shall be made as per UGC / AICTE / Indian Nursing Council norms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default page
