import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseYoga = [
  {
    title: "Holistic Education",
    description:
      "Integrated learning of Yoga Science and Naturopathy for complete physical, mental, and spiritual well-being.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Qualified yoga practitioners, naturopathy experts, and academicians with clinical and teaching experience.",
  },
  {
    title: "Practical Training",
    description:
      "Extensive hands-on training in yoga practices, therapy sessions, and naturopathy techniques.",
  },
  {
    title: "Natural Healing Approach",
    description:
      "Strong focus on drugless, non-invasive, and lifestyle-based healthcare systems.",
  },
  {
    title: "Wellness & Preventive Care",
    description:
      "Emphasis on preventive healthcare, stress management, and healthy living practices.",
  },
  {
    title: "Research Orientation",
    description:
      "Opportunities to engage in research related to yoga therapy, wellness sciences, and holistic health.",
  },
  {
    title: "Career Opportunities",
    description:
      "Preparation for careers in wellness centers, yoga therapy clinics, hospitals, and self-practice.",
  },
  {
    title: "Social Health Impact",
    description:
      "Encouraging students to contribute towards community health and well-being through natural therapies.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Yoga Science & Naturopathy"
        description="Promoting holistic health and well-being through Yoga, Naturopathy, and natural healing sciences."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Yoga Science & Naturopathy" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Healing Through Natural Sciences"
        description="Welcome to the School of Yoga Science & Naturopathy, a center dedicated to holistic healthcare education rooted in ancient Indian wisdom and natural healing systems. The school focuses on Yoga, Naturopathy, and lifestyle-based therapies to promote physical, mental, and spiritual well-being. Our programmes emphasize preventive healthcare, self-healing, and natural treatment methods, preparing students for professional roles in wellness centers, healthcare institutions, research, and community health services."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Yoga Science & Naturopathy"
        items={whyChooseYoga}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Yoga Science & Naturopathy, where health is viewed as harmony between body, mind, and soul.
As Dean, I am proud to lead a school committed to promoting holistic health through education, practice, and research. Our mission is to preserve traditional systems of wellness while integrating scientific understanding and practical application.
Through disciplined training, hands-on practice, and research-based learning, we aim to develop skilled professionals who can contribute meaningfully to individual well-being and societal health."
        designation="Dean, School of Yoga Science & Naturopathy"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Yoga Science & Naturopathy – Programmes"
        courses={[
          {
            title: "BNYS",
            description:
              "Bachelor of Naturopathy and Yogic Sciences program combining traditional yogic practices with modern naturopathy treatments.",
            href: "/programmes/bnys",
          },
          {
            title: "B.Sc Yogic Science",
            description:
              "Undergraduate program focusing on yogic philosophy, postures, meditation, and therapeutic applications.",
            href: "/programmes/bsc-yogic-science",
          },
          {
            title: "M.A Yogic Science",
            description:
              "Postgraduate program emphasizing advanced yoga therapy, research, and wellness sciences.",
            href: "/programmes/ma-yogic-science",
          },
          {
            title: "M.Sc Yogic Science",
            description:
              "Master’s level study focused on scientific approaches to yoga therapy and applied health sciences.",
            href: "/programmes/msc-yogic-science",
          },
          // {
          //   title: "Ph.D in Yoga Science / Naturopathy",
          //   description:
          //     "Doctoral research program advancing knowledge and practice in yoga therapy and naturopathic medicine.",
          //   href: "/programmes/phd-yoga-science-naturopathy",
          // },
        ]}
      />
    </>
  );
};

export default page;
