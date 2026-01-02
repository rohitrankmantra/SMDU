"use client"

import { useState } from "react"
import { ChevronRight, Send, Phone, Mail, User, MessageSquare } from "lucide-react"

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section className="relative py-24 lg:py-32 bg-linear-to-br from-blue-50 via-white to-blue-100 overflow-hidden">

      {/* Elegant geometric pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(29,78,216,0.08),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(147,197,253,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,215,0,0.05)_0%,rgba(255,255,255,0)_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Send className="w-4 h-4" />
            Admissions Enquiry
            <ChevronRight className="w-3 h-3" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold mt-6 bg-linear-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
            Enquiry Form
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            We’re here to guide you at every step of your academic journey. 
            Submit your enquiry and our admissions team will connect with you shortly.
          </p>

          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-yellow-400 mx-auto mt-8 rounded-full" />
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-2xl border border-blue-100 rounded-3xl backdrop-blur-sm">

          <div className="p-8 lg:p-12">

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your enquiry has been submitted successfully. 
                  We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md font-medium"
                >
                  Submit Another
                </button>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">

                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-blue-50/40 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                  <input
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-blue-50/40 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-4 bg-blue-50/40 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (Optional)"
                    className="w-full pl-12 pr-4 py-4 bg-blue-50/40 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                  />
                </div>

                {/* Message */}
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-4 bg-blue-50/40 border border-blue-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-blue-700 to-blue-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
