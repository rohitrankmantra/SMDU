"use client"

import React, { useState } from "react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, CircleHelp, Phone, Mail } from "lucide-react"

const faqs = [
  {
    question: "Who is eligible to apply for courses at SMD University?",
    answer: "Any student who meets the program-specific eligibility criteria can apply. This includes Indian and international students who have completed the required qualifying exams (10+2 for UG, Bachelor's for PG) with the minimum percentage as mentioned in the eligibility section."
  },
  {
    question: "When does the admission process start?",
    answer: "Admissions typically begin in March–April every year for the upcoming academic session starting in July/August. Online applications open in early March. Keep checking the admissions portal for exact dates."
  },
  {
    question: "What entrance exams are accepted?",
    answer: "We accept national-level exams like JEE Main (for B.Tech), CLAT (for BA LLB), CAT/MAT/CMAT (for MBA), and GATE (for M.Tech). Additionally, we conduct our own SMDU Entrance Test for programs where national exams are not mandatory."
  },
  {
    question: "Can I get direct admission without an entrance exam?",
    answer: "Yes! Programs like BBA, B.Com, and some management courses offer merit-based direct admission based on 10+2 or graduation marks. B.Tech also has limited management quota seats."
  },
  {
    question: "What documents are required for admission?",
    answer: "10th & 12th marksheets and certificates, graduation marksheets (for PG), entrance exam scorecard, transfer/migration certificate, Aadhar card/PAN, passport-size photos, caste/category certificate (if applicable), and income certificate (for scholarships)."
  },
  {
    question: "Are hostel and mess facilities available?",
    answer: "Yes, we provide separate, modern hostels for boys and girls with AC/non-AC options, 24/7 security, Wi-Fi, mess serving hygienic vegetarian & non-vegetarian food, gym, and common recreation areas."
  },
  {
    question: "What scholarships are available?",
    answer: "We offer merit scholarships (up to 100% tuition waiver), need-based aid, girl child scholarships, sports/cultural excellence awards, defense quota, and special schemes for economically weaker sections (EWS)."
  },
  {
    question: "Is education loan assistance provided?",
    answer: "Yes, we have tie-ups with major banks (SBI, HDFC, Axis, etc.) for quick education loan processing. Our admission cell helps with documentation and bank coordination."
  },
  {
    question: "What is the placement record of the university?",
    answer: "We have a dedicated placement cell with 85%+ placement rate. Top recruiters include TCS, Infosys, Wipro, Capgemini, Deloitte, Amazon, and core companies for engineering students. Highest package: ₹24 LPA (2025 batch)."
  },
  {
    question: "Can NRI/International students apply?",
    answer: "Yes! We welcome NRI and foreign nationals. Separate quota available with admission through qualifying marks or SMDU International Entrance Test. Equivalence certificate from AIU required for foreign qualifications."
  },
  {
    question: "Is there a refund policy if I withdraw admission?",
    answer: "Yes, refund is processed as per UGC guidelines: Full refund (minus processing fee) before session start, partial refund within first month, no refund after 30 days from commencement of classes."
  },
  {
    question: "How can I contact the admissions team?",
    answer: "Email: admissions@smduniversity.edu.in | Phone: +91-98765-43210 (10 AM - 5 PM, Mon-Sat) | Visit campus or fill the enquiry form on our website for callback within 24 hours."
  },
]

const CustomAccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-5 py-5 sm:px-7 sm:py-6 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <CircleHelp className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
          <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-orange-700 transition-colors leading-snug">
            {question}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-orange-600" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 sm:px-7 pt-2 border-t border-gray-100">
              <p className="text-gray-600 text-base leading-relaxed pl-10 sm:pl-11">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const page = () => {
  const [openIndices, setOpenIndices] = useState(new Set())

  const handleToggle = (index) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <>
      <PageHero
        title="FAQs"
        subtitle="We’re Here to Help"
        description="Find quick answers to common questions about admissions, courses, facilities, and more."
        image="/home/headerbg.jpeg"
      />

      <section id="faq" className="relative py-20 sm:py-28 bg-linear-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading
            subtitle="Help Center"
            title="Frequently Asked Questions"
            description="Everything you need to know before applying"
          />

          <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                >
                  <CustomAccordionItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndices.has(index)}
                    onToggle={() => handleToggle(index)}
                  />
                </motion.div>
              ))}
            </div>

            {/* CTA with Background Image */}
            <div 
              className="mt-16 sm:mt-20 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden"
              style={{
                backgroundImage: "url('/cta-bg.jpg')", // Replace this path later with your actual image
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-linear-to-r from-orange-600/90 to-amber-600/90" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-95">
                  Our admission experts are ready to guide you personally.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold px-7 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    Call: +91-98765-43210
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white font-bold px-7 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page