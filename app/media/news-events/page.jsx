"use client";

import { PageHero } from "../../../components/page-hero";
import { CheckCircle, Stethoscope } from "lucide-react";
import { FaRegNewspaper } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import { GrAnnounce } from "react-icons/gr";

const page = () => {
  return (
    <>
      <PageHero
        title="News/Events"
        subtitle="Latest News"
        description="Stay informed about the latest developments, campus activities, and achievements at Smt. Manjira Devi University, Uttarkashi."
        breadcrumbs={[{ label: "News/Events" }]}
        image="/news/news1.jpg"
      />
      {/*-------------------------------------------- Section 2 --------------------------------------------------------------*/}

      <section className="w-full bg-gray-50 pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaRegNewspaper className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Latest News
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Smt. Manjira Devi University continues to focus on quality
                    education and holistic student development.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    New academic initiatives and skill-based programs are being
                    introduced for students.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Admissions and academic activities are running smoothly for
                    the current academic session.
                  </p>
                </li>
              </ul>
            </div>

            {/* RIGHT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <SlCalender className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Recent Events
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Orientation programs conducted for newly admitted students.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Seminars, workshops, and guest lectures organized across
                    various departments.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Cultural and sports activities held to encourage overall
                    student growth.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Awareness programs and social outreach activities organized
                    by the university.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------------------------- Section 3 ------------------------------------------------------*/}

      <section className="w-full bg-gray-50 pb-16 pt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <GrAchievement className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Achievements
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Students actively participated in academic, cultural, and sports events.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Faculty members contributed to research, publications, and academic development.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                   The university continues to strengthen its academic standards and campus facilities.
                  </p>
                </li>
              </ul>
            </div>

            {/* RIGHT DIV */}
            <div className="bg-white rounded-xl border border-[#FF8235] shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <GrAnnounce className="text-[#FF8235] w-7 h-7 shrink-0" />
                <h3 className="text-2xl font-semibold text-[#FF8235]">
                  Upcoming Updates
                </h3>
              </div>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    More academic events, competitions, and training programs are planned.
                  </p>
                </li>

                <li className="flex items-center gap-3">
                  <VscDebugBreakpointData className="text-[#FF8235] w-6 h-6 shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Students are encouraged to regularly check the notice board and official website for updates.
                  </p>
                </li>        
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
