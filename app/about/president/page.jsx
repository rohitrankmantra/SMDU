"use client"

import { ChevronDown } from "lucide-react"

export default function PresidentsMessage() {
  return (
    <section className="relative py-24 bg-linear-to-br from-orange-50 via-white to-orange-50/50 overflow-hidden">

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23fbbf24%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            Leadership Vision
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text  mb-4">
            President&apos;s Message
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – IMAGE */}
          <div className="relative group">
            <div className="aspect-4/3 bg-linear-to-br from-orange-500/5 to-orange-600/5 rounded-3xl shadow-xl overflow-hidden border border-orange-100 group-hover:border-orange-200 transition-all duration-500">
              <img
                src="/about/president.jpg"
                alt="President"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
           
          </div>

          {/* RIGHT – CONTENT */}
          <article className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              It is with immense pride and joy that I extend my warmest greetings to each of you as we embark on a momentous chapter in the history of our institution. From our humble beginnings as a group of institutions, we have now reached a significant milestone—the establishment of Smt. Manjira Devi University, nestled in the picturesque Himalayan region of Uttarakshi, Uttarakhand.
            </p>

            <p>
              For over 20 years, our journey has been guided by a steadfast commitment to excellence in education, innovation, and community service. Today, as we transition to university status, we celebrate not only our growth but also the enduring values that have shaped us into the institution we are today.
            </p>

            <p>
              Our university stands as a testament to the transformative power of education in the heart of the Himalayas. The majestic surroundings of Uttarakhand provide a unique backdrop for learning, research, and personal growth. As we embrace our new status, we reaffirm our dedication to providing a holistic educational experience that prepares our students to navigate the complexities of the modern world while honoring the rich cultural heritage and ecological significance of our region.
            </p>

            <p>
              At Smt. Manjira Devi University, we are committed to fostering academic excellence and innovation. Our diverse range of programs, informed by cutting-edge research and industry partnerships, equips our students with the knowledge and skills needed to succeed in their chosen fields. Our faculty members, renowned for their expertise and dedication, nurture a spirit of inquiry and critical thinking that inspires our students to push the boundaries of knowledge.
            </p>

            <p>
              As we look to the future, sustainability remains at the forefront of our mission. We recognize the importance of environmental stewardship in the Himalayan region and are committed to promoting sustainable practices in all aspects of university life. Through our research initiatives and community engagement efforts, we strive to address local and global challenges while preserving the natural beauty and biodiversity of Uttarakhand.
            </p>

            <p>
             I am deeply grateful to our faculty, staff, students, alumni, and partners who have contributed to our success over the years. Your dedication and passion have been instrumental in shaping the identity and legacy of our university. Together, we will continue to uphold our values of integrity, inclusivity, and social responsibility as we chart a course toward a future filled with promise and possibility.
            </p>

            <p>
              Thank you for being part of the Smt. Manjira Devi University community.
            </p>

            {/* SIGNATURE — RIGHT ALIGNED */}
            <div className="pt-10 mt-10 border-t border-orange-200">
              <div className="flex flex-col items-end text-right gap-2">

                <div className="flex items-center gap-3">

                  <div>
                    <p className="font-semibold text-gray-800">Warm regards,</p>
                    <p className="font-bold text-2xl text-[#F46B13]">
                      Dr. Harishankar Nautiyal
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  President — Smt. Manjira Devi University
                </p>

                <a
                  href="mailto:president@smdu.edu.in"
                  className="text-orange-600 hover:underline font-medium text-sm"
                >
                  president@smdu.edu.in
                </a>
              </div>
            </div>

          </article>
        </div>

        <div className="text-center mt-20">
          <div className="w-full h-px bg-linear-to-r from-transparent via-orange-300 to-transparent" />
        </div>

      </div>
    </section>
  )
}
