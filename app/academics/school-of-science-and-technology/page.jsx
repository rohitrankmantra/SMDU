import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseScienceTechnology = [
  {
    title: "Interdisciplinary Learning",
    description:
      "Programs designed to integrate science, technology, and innovation, enabling students to solve real-world problems effectively.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Highly qualified faculty members with strong academic backgrounds and research expertise in science and technology disciplines.",
  },
  {
    title: "Modern Laboratories",
    description:
      "Advanced laboratories and computing facilities that support experimentation, analysis, and hands-on technical learning.",
  },
  {
    title: "Research & Innovation",
    description:
      "Opportunities for students to participate in research projects, innovation activities, and technology-driven initiatives.",
  },
  {
    title: "Industry-Relevant Curriculum",
    description:
      "Curriculum aligned with emerging trends such as AI, data science, cloud computing, cybersecurity, and applied sciences.",
  },
  {
    title: "Career-Oriented Education",
    description:
      "Strong focus on employability, higher education pathways, and skill development for diverse career opportunities.",
  },
  {
    title: "Technology-Driven Environment",
    description:
      "A future-ready academic ecosystem encouraging innovation, critical thinking, and digital transformation.",
  },
  {
    title: "Holistic Development",
    description:
      "Emphasis on academic excellence, ethical values, teamwork, and overall personality development.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Science and Technology"
        description="Fostering scientific temper and technological excellence through innovative education, research, and practical learning."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Science and Technology" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Advancing Science Through Technology"
        description="Welcome to the School of Science and Technology, a dynamic academic hub dedicated to nurturing scientific knowledge and technological innovation. Our school aims to develop analytical thinking, problem-solving abilities, and technical competence among students. We offer a diverse range of undergraduate, postgraduate, and diploma programmes in science and technology disciplines such as Computer Applications, Data Science, Artificial Intelligence, Cyber Security, Forensic Science, and core sciences. Each programme is structured to balance strong theoretical foundations with practical exposure, laboratory work, and real-world applications, preparing students for both industry and research-oriented careers."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Science and Technology"
        items={whyChooseScienceTechnology}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Science and Technology, where curiosity, innovation, and knowledge converge.
As Dean, I am proud to lead a school that is committed to excellence in scientific education and technological advancement. Our mission is to empower students with the skills, knowledge, and mindset required to thrive in an increasingly technology-driven world.
At our school, students are encouraged to explore, experiment, and innovate. Our modern laboratories, advanced computing resources, and research-oriented environment provide an ideal platform for hands-on learning. Whether you are studying computer applications, emerging technologies, or applied sciences, our programs are designed to prepare you for successful careers, higher studies, and meaningful contributions to society."
        designation="Dean, School of Science and Technology"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Science and Technology – Programmes"
        courses={[
          {
            title: "B.Sc (Bachelor of Science)",
            description:
              "An undergraduate programme offering strong foundations in scientific principles, analytical skills, and practical laboratory experience.",
            href: "/programmes/bsc",
          },
          {
            title: "BCA (Bachelor of Computer Applications)",
            description:
              "A career-focused programme emphasizing programming, software development, databases, and modern computing technologies.",
            href: "/programmes/bca",
          },
          {
            title: "M.Sc (Master of Science)",
            description:
              "An advanced postgraduate programme focused on specialization, research orientation, and in-depth scientific knowledge.",
            href: "/programmes/msc",
          },
          {
            title: "MCA (Master of Computer Applications)",
            description:
              "A postgraduate programme designed to develop advanced software skills, system design expertise, and professional competence.",
            href: "/programmes/mca",
          },
          {
            title: "Diploma in AI, Data Science & Emerging Technologies",
            description:
              "Skill-oriented diploma programmes covering Artificial Intelligence, Data Science, Cloud Technology, Cyber Security, and Forensic Science.",
            href: "/programmes/ai-and-ml--data-science--cloud-technology--cyber-security--forensic-science",
          },
        ]}
      />
    </>
  );
};

export default page;
