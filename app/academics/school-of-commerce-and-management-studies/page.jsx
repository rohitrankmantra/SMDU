import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseCommerceManagement = [
  {
    title: "Industry-Oriented Curriculum",
    description:
      "Programmes designed to align with current business practices, financial systems, and management trends.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Faculty members with strong academic expertise and real-world industry exposure in commerce and management.",
  },
  {
    title: "Practical Learning",
    description:
      "Case studies, projects, presentations, and internships to ensure hands-on exposure to business environments.",
  },
  {
    title: "Entrepreneurial Focus",
    description:
      "Encouraging innovation, startups, leadership skills, and entrepreneurial thinking among students.",
  },
  {
    title: "Career Readiness",
    description:
      "Strong emphasis on employability, corporate skills, communication, and professional development.",
  },
  {
    title: "Research & Higher Studies",
    description:
      "Opportunities for advanced research, postgraduate studies, and doctoral programmes in commerce and management.",
  },
  {
    title: "Corporate Exposure",
    description:
      "Guest lectures, seminars, workshops, and interactions with industry professionals and business leaders.",
  },
  {
    title: "Holistic Development",
    description:
      "Focus on ethics, leadership, teamwork, and personality development for future business professionals.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Commerce and Management Studies"
        description="Developing future business leaders through quality education in commerce, management, and entrepreneurship."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Commerce and Management Studies" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Shaping Business Leaders of Tomorrow"
        description="Welcome to the School of Commerce and Management Studies, a center of excellence dedicated to nurturing future professionals in business, finance, and management. Our school focuses on developing analytical thinking, leadership qualities, and decision-making skills essential for today’s dynamic corporate world. We offer undergraduate, postgraduate, and doctoral programmes in commerce and management, including B.Com, BBA, M.Com, MBA, and Ph.D. programmes. With a strong blend of theoretical knowledge, practical exposure, and industry interaction, our programmes prepare students for successful careers in corporate sectors, entrepreneurship, academia, and research."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Commerce and Management Studies"
        items={whyChooseCommerceManagement}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Commerce and Management Studies, where knowledge meets leadership and innovation.
As Dean, I take pride in leading a school that is committed to academic excellence, ethical values, and professional growth. Our mission is to empower students with the skills and confidence required to succeed in the competitive world of business and management.
At our school, learning goes beyond textbooks. Through case studies, live projects, industry interactions, and research-oriented teaching, we ensure that students gain practical insights into real-world business challenges. Whether you aspire to become a corporate professional, entrepreneur, researcher, or academician, our programmes are designed to help you achieve your goals."
        designation="Dean, School of Commerce and Management Studies"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Commerce and Management Studies – Programmes"
        courses={[
          {
            title: "B.Com (Bachelor of Commerce)",
            description:
              "An undergraduate programme focusing on accounting, finance, taxation, economics, and business fundamentals.",
            href: "/programmes/bcom",
          },
          {
            title: "BBA (Bachelor of Business Administration)",
            description:
              "A professional programme designed to develop managerial, leadership, and entrepreneurial skills.",
            href: "/programmes/bba",
          },
          {
            title: "M.Com (Master of Commerce)",
            description:
              "An advanced programme offering specialization in commerce, finance, accounting, and research-oriented studies.",
            href: "/programmes/mcom",
          },
          {
            title: "MBA (Master of Business Administration)",
            description:
              "A career-driven postgraduate programme focusing on management, strategy, leadership, and business excellence.",
            href: "/programmes/mba",
          },
          {
            title: "Ph.D in Commerce & Management",
            description:
              "A doctoral programme aimed at advanced research, academic excellence, and contribution to business knowledge.",
            href: "/programmes/phd-commerce-management",
          },
        ]}
      />
    </>
  );
};

export default page;
