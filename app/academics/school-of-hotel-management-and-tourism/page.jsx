import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

/* ================= WHY CHOOSE ================= */
const whyChooseHotelManagement = [
  {
    title: "Industry-Oriented Curriculum",
    description:
      "Programs designed to equip students with practical skills and knowledge aligned with hospitality and tourism industry standards.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Trainers and educators with extensive industry experience and academic expertise in hotel management and tourism.",
  },
  {
    title: "Hands-on Training",
    description:
      "Practical exposure through internships, live projects, and industry visits to develop real-world competencies.",
  },
  {
    title: "Global Career Opportunities",
    description:
      "Preparation for diverse career paths in hotels, resorts, travel agencies, airlines, and tourism boards worldwide.",
  },
  {
    title: "Modern Facilities",
    description:
      "Well-equipped labs, mock hotels, kitchens, and tourism resource centers for experiential learning.",
  },
  {
    title: "Industry Partnerships",
    description:
      "Strong collaborations with leading hospitality and tourism organizations for placement and internships.",
  },
  {
    title: "Soft Skills Development",
    description:
      "Emphasis on communication, leadership, and customer service skills vital for success in hospitality and tourism.",
  },
  {
    title: "Cultural Awareness",
    description:
      "Focus on understanding diverse cultures and global tourism trends to serve international clientele effectively.",
  },
];

const page = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <PageHero
        title="School of Hotel Management & Tourism"
        description="Preparing skilled professionals for the dynamic hospitality and tourism industry through comprehensive education and practical training."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Hotel Management & Tourism" }]}
      />

      {/* ================= ABOUT ================= */}
      <SectionBlock
        subtitle="About Us"
        title="Excellence in Hospitality and Tourism Education"
        description="The School of Hotel Management & Tourism is dedicated to providing industry-relevant education and training for students aspiring to excel in hospitality, travel, and tourism sectors. Our programs integrate theoretical knowledge with hands-on experience, preparing graduates for a wide range of careers in hotels, resorts, airlines, travel agencies, event management, and more. We emphasize practical skills, professionalism, and cultural awareness to meet the demands of a globalized hospitality industry."
        image="/home/homebg.jpeg"
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseSection
        subtitle="School of Hotel Management & Tourism"
        items={whyChooseHotelManagement}
      />

      {/* ================= DEAN MESSAGE ================= */}
      <DeansMessage
        message="Welcome to the School of Hotel Management & Tourism, where we nurture the next generation of hospitality leaders. Our programs are designed to blend academic rigor with practical industry exposure, ensuring that our students are well-prepared to meet the evolving needs of the global hospitality and tourism sectors. We pride ourselves on our dedicated faculty, modern facilities, and strong industry connections that provide excellent learning and career opportunities."
        designation="Dean, School of Hotel Management & Tourism"
      />

      {/* ================= COURSES ================= */}
      <OurCoursesSection
        subtitle="Academics"
        title="School of Hotel Management & Tourism – Programmes"
        courses={[
          {
            title: "Bachelor of Hotel Management",
            description:
              "An undergraduate program focusing on hotel operations, food and beverage management, front office, and hospitality services.",
            href: "/programmes/bachelor-of-hotel-management",
          },
          {
            title: "BBA - Tourism",
            description:
              "A management degree emphasizing tourism industry knowledge, travel management, and tourism marketing.",
            href: "/programmes/bba---tourism",
          },
          {
            title: "Diploma in Hotel Management",
            description:
              "A diploma program offering practical skills and knowledge in hotel management and hospitality services.",
            href: "/programmes/diploma-hotel-management",
          },
        ]}
      />
    </>
  );
};

export default page;
