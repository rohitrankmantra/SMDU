"use client";

import {
  FaBookOpen,        // Knowledge Sharing
  FaUserGraduate,    // Career Guidance
  FaHandsHelping,    // Support College Activities
  FaBuilding,        // Infrastructure Growth
  FaGlobeAsia,       // Social Awareness
  FaRocket,          // Entrepreneurship
  FaBriefcase        // Placement Support
} from "react-icons/fa";



const Page = () => {
  const cards = [
    {
      icon: <FaBookOpen />,
      title: "Knowledge Sharing",
      desc: "Arrange lectures by honorary members and respected personalities from diverse fields.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Career Guidance",
      desc: "Provide mentorship and guidance to students regarding career choices and professional development.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Support College Activities",
      desc: "Assist in organizing events and activities for student enrichment.",
    },
    {
      icon: <FaBuilding />,
      title: "Infrastructure Growth",
      desc: "Collaborate to enhance facilities and resources for students.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Social Awareness",
      desc: "Organize initiatives to benefit society and encourage social responsibility.",
    },
    {
      icon: <FaRocket />,
      title: "Entrepreneurship",
      desc: "Encourage and train students to become entrepreneurs through specialized programs.",
    },
    {
      icon: <FaBriefcase />,
      title: "Placement Support",
      desc: "Facilitate better placement opportunities via alumni networks.",
    },
  ];

  return (
    <>
      {/* ======================= Section 1 ======================= */}
      <section className="w-full py-16 relative overflow-hidden bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-5" />

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Top Heading */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              SMDU University Alumni Association
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
              Reconnect. Celebrate. Inspire.
            </p>
          </div>

          {/* Divider with Button */}
          <div className="relative flex items-center justify-center my-10">
            <div className="w-full border-t border-gray-300"></div>
            <button className="absolute bg-[#FD5F00] text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-black transition">
              Register Now
            </button>
          </div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              Welcome to SMDU Alumni Network
            </h3>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SMDU University values its alumni as vital participants in the
              growth and development of the institution. Our past students from
              Polytechnic, Pharmacy, B.Sc. Nursing, and B.Ed. departments have
              excelled in diverse fields including teaching, engineering, and
              healthcare.
            </p>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To foster structured engagement, the university has established
              the SMDU Alumni Association, creating lasting connections between
              past and current students.
            </p>
          </div>
        </div>
      </section>

      {/* ======================= Section 2 ======================= */}
      <section className="w-full py-16 bg-[#fbf6f3f8]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FD5F00] mb-12">
            Our Goals & Objectives
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center shadow-md border-b-4 border-[#FD5F00] 
                           transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="text-[#FD5F00] text-4xl mb-4 flex justify-center">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
