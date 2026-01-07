import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseArts = [
  {
    title: "Diverse Academic Disciplines",
    description:
      "A broad range of programmes in humanities and social sciences fostering intellectual depth and critical thinking.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Dedicated faculty members with strong academic backgrounds and research expertise in arts disciplines.",
  },
  {
    title: "Holistic Education",
    description:
      "Focus on analytical skills, communication abilities, ethical values, and social responsibility.",
  },
  {
    title: "Research & Scholarship",
    description:
      "Opportunities for academic research, interdisciplinary studies, and scholarly engagement.",
  },
  {
    title: "Career-Oriented Learning",
    description:
      "Preparation for careers in education, civil services, administration, media, and social sectors.",
  },
  {
    title: "Cultural & Intellectual Growth",
    description:
      "Encouragement of cultural awareness, creativity, and intellectual exploration.",
  },
  {
    title: "Interdisciplinary Approach",
    description:
      "Integration of humanities with contemporary social, political, and economic perspectives.",
  },
  {
    title: "Community Engagement",
    description:
      "Promoting social awareness through outreach, extension activities, and civic participation.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Arts"
        description="Nurturing critical thinkers, cultural understanding, and social leadership through quality education in arts and humanities."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Arts" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Inspiring Minds through Arts & Humanities"
        description="Welcome to the School of Arts, a center for learning, creativity, and intellectual development. Our school is dedicated to the study of humanities and social sciences, offering programmes that develop critical thinking, communication skills, and a deep understanding of society and culture. We offer undergraduate, postgraduate, and doctoral programmes such as BA, MA, and Ph.D in Arts, covering disciplines including Hindi, Sanskrit, English, Sociology, Education, Political Science, History, and Economics. Our academic environment encourages inquiry, debate, and research, preparing students for meaningful careers and responsible citizenship."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Arts"
        items={whyChooseArts}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Arts, where ideas, culture, and knowledge shape thoughtful leaders.
As Dean, I take pride in fostering an academic environment that values intellectual curiosity, ethical reasoning, and social awareness. Our programmes are designed to nurture independent thinking and a strong foundation in humanities and social sciences.
Through a blend of classroom learning, research, and community engagement, we aim to prepare students for diverse career paths including education, public service, research, and social development. We invite you to explore, question, and grow with us at the School of Arts."
        designation="Dean, School of Arts"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Arts – Programmes"
        courses={[
          {
            title:
              "BA (Hindi / Sanskrit / English / Sociology / Education / Political Science / History / Economics)",
            description:
              "An undergraduate programme offering a strong foundation in humanities and social sciences with multiple discipline options.",
            href: "/programmes/ba-hindisanskritenglishsociologyeducationpolitical-sciencehistoryeconomics",
          },
          {
            title: "M.A. (Arts)",
            description:
              "The Master of Arts (M.A.) programme offers advanced academic study in humanities and social science disciplines. It focuses on in-depth subject knowledge, analytical thinking, and research skills. ",
            href: "/programmes/ma",
          },
          {
            title: "Ph.D in Arts",
            description:
              "The Doctor of Philosophy (Ph.D.) in Arts is a research-intensive programme designed to promote original scholarly research in humanities and social sciences. The programme develops independent researchers capable of contributing to academic knowledge and social understanding.",
            href: "/programmes/phd-arts",
          },
        ]}
      />
    </>
  );
};

export default page;
