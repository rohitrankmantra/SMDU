import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseLegal = [
  {
    title: "Comprehensive Legal Education",
    description:
      "Programs designed to provide a strong foundation in law, covering various branches like constitutional, criminal, civil, and corporate law.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Qualified legal experts and practitioners committed to mentoring students for academic and professional excellence.",
  },
  {
    title: "Practical Training",
    description:
      "Moot courts, internships, legal aid clinics, and workshops to develop practical skills and real-world legal experience.",
  },
  {
    title: "Research & Scholarship",
    description:
      "Opportunities to engage in legal research, publications, and participation in seminars and conferences.",
  },
  {
    title: "Career Opportunities",
    description:
      "Strong placement support and career counseling for diverse legal careers including advocacy, judiciary, corporate law, and public service.",
  },
  {
    title: "Ethical and Social Awareness",
    description:
      "Emphasis on ethics, social justice, and human rights in legal education and practice.",
  },
  {
    title: "Infrastructure & Resources",
    description:
      "Well-equipped library with extensive legal resources and access to digital databases for research.",
  },
  {
    title: "Industry and Judiciary Linkages",
    description:
      "Collaborations with law firms, courts, NGOs, and legal institutions for internships and exposure.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Legal Studies"
        description="Empowering future legal professionals through comprehensive education, practical training, and ethical values."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Legal Studies" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Shaping Legal Minds for Justice and Society"
        description="The School of Legal Studies is committed to offering high-quality legal education that balances theoretical knowledge with practical skills. Our programs include undergraduate and postgraduate courses such as BA LLB and LLB, aimed at preparing students for a successful career in law and related fields. We emphasize ethical practices, social justice, and critical thinking, empowering students to become competent and socially responsible legal professionals."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection subtitle="School of Legal Studies" items={whyChooseLegal} />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Legal Studies. Our mission is to nurture future leaders in law who are knowledgeable, skilled, and committed to justice and societal welfare. We provide an academically rigorous environment combined with practical opportunities to hone your legal expertise. Our faculty and staff strive to support every student’s journey towards excellence and ethical professionalism in the legal domain."
        designation="Dean, School of Legal Studies"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Legal Studies – Programmes"
        courses={[
          {
            title: "BA LLB",
            description:
              "An integrated five-year undergraduate program combining arts and law to provide a broad and in-depth legal education.",
            href: "/programmes/ba-llb",
          },
          {
            title: "LLB",
            description:
              "A three-year undergraduate law program designed to prepare students for legal practice and higher studies.",
            href: "/programmes/llb",
          },
        ]}
      />
    </>
  );
};

export default page;
