"use client"

import { ChevronDown } from "lucide-react"

export default function ViceChancellorsMessage() {
  return (
    <section className="relative py-24 bg-linear-to-br from-orange-50 via-white to-orange-50/50 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23fbbf24%22%20fill-opacity=%220.03%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#F46B13] text-xs font-semibold uppercase tracking-wider mb-4">
            Academic Leadership
            <ChevronDown className="w-3 h-3" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Vice Chancellor&apos;s Message
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – IMAGE */}
          <div className="relative group">
            <div className="aspect-4/3 bg-linear-to-br from-orange-500/5 to-orange-600/5 rounded-3xl shadow-xl overflow-hidden border border-orange-100 transition-all duration-500">
              <img
                src="/about/vc.jpg"
                alt="Vice Chancellor"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <article className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              Dear Students, Faculty, Staff, and Esteemed Members of the Smt.
              Manjira Devi University Community,
            </p>

            <p>
              It is with great pleasure and pride that I extend my warmest
              greetings to all of you. As we embark on a new phase of our journey
              at Smt. Manjira Devi University, nestled in the serene Himalayan
              region of Uttarkashi, Uttarakhand, we reaffirm our commitment to
              excellence in education and community service.
            </p>

            <p>
              Our university holds a profound responsibility to our local community and the broader Himalayan region. With a legacy of promoting education that respects and integrates the rich cultural heritage and environmental significance of our surroundings, we are dedicated to nurturing future leaders and professionals who will contribute meaningfully to society.
            </p>

            <p>
              At Smt. Manjira Devi University, we offer a diverse array of programs designed to provide excellence in education across various disciplines. From Science and Technology to Commerce and Management, from Yoga to Environmental Studies, and from Legal Studies to Naturopathy and Health Sciences, our curriculum is crafted to equip our students with not only theoretical knowledge but also practical skills that are relevant to the evolving global landscape.
            </p>

            <p>
              Our commitment to promoting education in the Himalayan region extends beyond academic excellence. We emphasize holistic development, nurturing well-rounded individuals who are not only proficient in their fields but also ethical, compassionate, and socially responsible. Our faculty, known for their expertise and dedication, are committed to fostering a learning environment that encourages critical thinking, innovation, and a deep appreciation for our natural environment.
            </p>

            <p>
            As we look forward to the future, we remain steadfast in our mission to advance knowledge, promote sustainable practices, and contribute positively to our community and society at large. Through research, community engagement, and partnerships with local stakeholders, we aim to address the unique challenges and opportunities presented by our Himalayan context.
            </p>

            <p>
             I extend my heartfelt gratitude to our faculty, staff, students, alumni, and supporters who have contributed to our journey thus far. Your dedication and enthusiasm are the driving forces behind our success and accomplishments.
            </p>

            <p>
             Together, let us continue to uphold the values of integrity, inclusivity, and excellence that define Smt. Manjira Devi University. As we embark on this journey together, I am confident that we will inspire positive change and make a lasting impact in our region and beyond.
            </p>

            <p>
          Thank you for choosing Smt. Manjira Devi University as your academic home. Here's to a future filled with learning, discovery, and achievement..
            </p>

            {/* SIGNATURE */}
            <div className="pt-10 mt-10 border-t border-orange-200">
              <div className="flex flex-col items-end text-right gap-2">

                <p className="font-semibold text-gray-800">Warm regards,</p>

                <p className="font-bold text-2xl text-[#F46B13]">
                  Prof. (Dr.) Bhagwan Nautiyal
                </p>

                <p className="text-sm text-gray-500">
                  Vice Chancellor — Smt. Manjira Devi University
                </p>

                <a
                  href="mailto:vc@smdu.edu.in"
                  className="text-orange-600 hover:underline font-medium text-sm"
                >
                  vc@smdu.edu.in
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
