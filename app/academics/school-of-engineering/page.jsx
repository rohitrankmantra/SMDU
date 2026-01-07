import React from "react";
import { PageHero } from "../../../components/page-hero";
import SectionBlock from "../../../components/academics/SectionBlock";
import WhyChooseSection from "../../../components/academics/why-choose-section";
import DeansMessage from "../../../components/academics/DeansMessage";
import OurCoursesSection from "../../../components/academics/OurCoursesSection";

const whyChooseEngineering = [
  {
    title: "Comprehensive Programs",
    description:
      "A wide range of diploma, undergraduate and postgraduate programs designed to blend strong theoretical foundations with practical learning.",
  },
  {
    title: "Expert Faculty",
    description:
      "Highly qualified faculty members with strong academic credentials and industry experience, committed to mentoring students.",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Modern laboratories, workshops, and research centers equipped with the latest technology for hands-on learning.",
  },
  {
    title: "Research Opportunities",
    description:
      "Students collaborate with faculty on cutting-edge research projects that contribute to advancements in engineering.",
  },
  {
    title: "Industry Connections",
    description:
      "Strong partnerships with industry leaders through internships, industry projects, and expert guest lectures.",
  },
  {
    title: "Career Preparation",
    description:
      "Career counseling, skill development programs, and placement support to ensure professional success.",
  },
  {
    title: "Global Exposure",
    description:
      "Opportunities for international collaboration, global learning experiences, and exposure to worldwide practices.",
  },
  {
    title: "Community & Engagement",
    description:
      "A vibrant campus culture encouraging leadership, innovation, extracurricular participation, and holistic growth.",
  },
];

const page = () => {
  return (
    <>
      <PageHero
        title="School of Engineering"
        description="Empowering future engineers through industry-focused education, practical learning, and cutting-edge technology to meet global challenges."
        image="/home/homebg.jpeg"
        breadcrumbs={[{ label: "School of Engineering" }]}
      />
      <SectionBlock
        subtitle="About Us"
        title="Building Engineers for Tomorrow"
        description="Welcome to the School of Engineering, where innovation meets excellence in education. Our institution is dedicated to shaping the engineers of tomorrow, equipping them with the skills, knowledge, and mindset needed to tackle global challenges and drive technological advancements. At the School of Engineering, we offer a comprehensive range of undergraduate and postgraduate programs in various disciplines such as Mechanical Engineering, Electrical Engineering, Computer Science, Civil Engineering, and more. Each program is designed with a strong emphasis on hands-on learning, cutting-edge research, and practical application, ensuring that our graduates are well-prepared for successful careers in their respective fields.
"
        image="/home/homebg.jpeg"
      />

      <WhyChooseSection
        subtitle="School of Engineering"
        items={whyChooseEngineering}
      />
      <DeansMessage
        message="Welcome to the School of Engineering, a vibrant community dedicated to excellence in education, innovation, and impactful engineering solutions.
As Dean, I am honored to lead a distinguished faculty committed to nurturing aspiring engineers like you. Our mission is clear: to provide a transformative educational experience that prepares you not only for the challenges of today but also for the opportunities of tomorrow.
At the School of Engineering, you will find a dynamic environment where theoretical knowledge meets practical application. Our state-of-the-art laboratories, equipped with cutting-edge technology, provide the perfect platform for hands-on learning and experimentation. Whether you are exploring the intricacies of computer algorithms, designing sustainable structures, optimizing mechanical systems, or delving into the complexities of electrical circuits, our programs are designed to inspire creativity and innovation."
        //   deanName="Dr."
        designation="Dean, School of Engineering"
      />

      {/* Our courses  */}
<OurCoursesSection
  subtitle="Academics"
  title="School of Engineering – Diploma Programmes"
  courses={[
    {
      title: "Diploma in Civil Engineering",
      description:
        "A three-year diploma programme focusing on construction technology, structural basics, surveying, and infrastructure development with practical training.",
      href: "/programmes/diploma-civil-engineering",
    },
    {
      title: "Diploma in Mechanical Engineering",
      description:
        "Industry-oriented diploma covering manufacturing processes, thermal engineering, machine design, and workshop-based hands-on learning.",
      href: "/programmes/diploma-mechanical-engineering",
    },
    {
      title: "Diploma in Computer Science & Engineering",
      description:
        "A modern technical programme emphasizing programming fundamentals, computer networks, software development, and emerging IT skills.",
      href: "/programmes/diploma-computer-science--engineering",
    },
  ]}
/>



    </>
  );
};

export default page;
