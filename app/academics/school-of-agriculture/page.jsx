import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseAgriculture = [
  {
    title: "Modern Agricultural Education",
    description:
      "Programmes designed to integrate traditional agricultural knowledge with modern scientific practices.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Highly qualified faculty with expertise in agriculture, horticulture, and allied sciences.",
  },
  {
    title: "Hands-on Field Training",
    description:
      "Extensive practical exposure through fieldwork, farm training, and laboratory-based learning.",
  },
  {
    title: "Research & Innovation",
    description:
      "Opportunities to participate in agricultural research, innovation, and sustainable farming practices.",
  },
  {
    title: "Sustainable Agriculture Focus",
    description:
      "Strong emphasis on eco-friendly, climate-resilient, and sustainable agricultural systems.",
  },
  {
    title: "Career-Oriented Programmes",
    description:
      "Preparation for careers in agribusiness, farming enterprises, research, and government services.",
  },
  {
    title: "Industry & Farmer Engagement",
    description:
      "Direct interaction with agricultural industries, agri-entrepreneurs, and farming communities.",
  },
  {
    title: "Rural Development Impact",
    description:
      "Encouraging students to contribute towards rural development and food security initiatives.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Agriculture"
        description="Advancing agricultural education through innovation, sustainability, and practical learning for rural and global development."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Agriculture" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Cultivating Knowledge for Sustainable Growth"
        description="Welcome to the School of Agriculture, a dedicated center for agricultural education, research, and innovation. Our school aims to empower students with scientific knowledge and practical skills essential for modern agriculture and allied sectors. We offer undergraduate, postgraduate, and diploma programmes such as B.Sc (Agriculture), M.Sc in Agriculture, M.Sc in Horticulture, and Diploma in Agriculture. With a strong focus on field-based learning, sustainable farming practices, and agri-entrepreneurship, our programmes prepare students to address challenges related to food security, climate change, and rural development."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Agriculture"
        items={whyChooseAgriculture}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Agriculture, where science meets soil and innovation nurtures sustainability.
As Dean, I am proud to lead a school committed to excellence in agricultural education, research, and community engagement. Our mission is to develop skilled professionals capable of transforming agriculture through scientific approaches and sustainable practices.
At our school, students gain extensive hands-on experience through field training, experimental farms, and modern laboratories. Whether your goal is agribusiness, research, government service, or entrepreneurial farming, our programmes are designed to equip you with the knowledge and confidence to succeed in the evolving agricultural landscape."
        designation="Dean, School of Agriculture"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Agriculture – Programmes"
        courses={[
          {
            title: "B.Sc (Agriculture)",
            description:
              "An undergraduate programme focusing on crop science, soil science, agronomy, plant protection, and farm management.",
            href: "/programmes/bsc-agriculture",
          },
          {
            title: "M.Sc in Agriculture",
            description:
              "A postgraduate programme offering advanced knowledge in agricultural sciences, research, and sustainable farming systems.",
            href: "/programmes/msc-in-agriculture",
          },
          {
            title: "M.Sc in Horticulture",
            description:
              "An advanced programme specializing in fruit, vegetable, floriculture, and plantation crop production.",
            href: "/programmes/msc-in-horticulture",
          },
          {
            title: "Diploma in Agriculture",
            description:
              "A skill-based diploma programme emphasizing practical farming techniques and agri-extension practices.",
            href: "/programmes/diploma-in-agriculture",
          },
        ]}
      />
    </>
  );
};

export default page;
