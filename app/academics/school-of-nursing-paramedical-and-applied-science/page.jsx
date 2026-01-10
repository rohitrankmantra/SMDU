import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseNursing = [
  {
    title: "Experienced Healthcare Faculty",
    description:
      "Dedicated faculty with clinical experience and academic expertise in nursing, pharmacy, and physiotherapy.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Programs designed to cover theoretical knowledge and practical skills across healthcare disciplines.",
  },
  {
    title: "Clinical Exposure",
    description:
      "Extensive hands-on training in hospitals, clinics, and community health settings.",
  },
  {
    title: "Modern Labs & Facilities",
    description:
      "Well-equipped laboratories and simulation centers supporting practical learning and research.",
  },
  {
    title: "Research & Development",
    description:
      "Opportunities for students to engage in healthcare research, evidence-based practice, and innovation.",
  },
  {
    title: "Career Support",
    description:
      "Strong placement assistance and professional development for successful healthcare careers.",
  },
  {
    title: "Interdisciplinary Learning",
    description:
      "Collaborative programs integrating nursing, pharmacy, and physiotherapy education.",
  },
  {
    title: "Community Health Engagement",
    description:
      "Programs encouraging participation in public health initiatives and outreach activities.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Nursing ParamedicaL "
        description="Training compassionate and skilled healthcare professionals through rigorous academic and clinical programs."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Nursing Paramedical & Allied Science" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Empowering Healthcare Professionals"
        description="The School of Nursing Paramedical & Allied Science is committed to educating and training healthcare practitioners who deliver high-quality patient care. We offer undergraduate programs such as B.Pharma, B.Sc Nursing, and BPT that blend theory with clinical practice. Our mission is to develop knowledgeable, ethical, and compassionate professionals equipped to meet the healthcare needs of society through evidence-based practice, research, and community service."
        image="/new/img10.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Nursing Paramedical & Allied Science"
        items={whyChooseNursing}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Nursing Paramedical & Allied Science, where we nurture healthcare professionals dedicated to excellence in patient care.
As Dean, I am proud to lead a school that fosters clinical expertise, compassion, and innovation. Our programs emphasize hands-on training, ethical practice, and continuous learning to prepare students for impactful careers in healthcare.
Join us to become part of a vibrant community committed to improving health outcomes and advancing medical knowledge."
        designation="Dean, School of Nursing Paramedical & Allied Science"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Nursing Paramedical & Allied Science – Programmes"
        courses={[
          {
            title: "B.Pharma",
            description:
              "Bachelor of Pharmacy program focusing on pharmaceutical sciences, drug development, and patient care.",
            href: "/programmes/bpharma",
          },
          {
            title: "B.Sc Nursing",
            description:
              "Undergraduate nursing program emphasizing patient care, clinical skills, and healthcare management.",
            href: "/programmes/bsc-nursing",
          },
          {
            title: "BPT",
            description:
              "Bachelor of Physiotherapy program providing comprehensive education in physical therapy and rehabilitation sciences.",
            href: "/programmes/bpt",
          },
        ]}
      />
    </>
  );
};

export default page;
