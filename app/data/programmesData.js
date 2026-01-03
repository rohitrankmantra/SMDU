const programmesData = [
  {
    slug: "bsc",
    title: "B.Sc Course",
    image:"/home/coursebg.jpeg",
    overview:
      "Provides foundational knowledge in Physics, Chemistry, Mathematics, Biology or Computer Science based on the chosen stream. The programme includes a balanced mix of theoretical concepts and practical laboratory work to build strong scientific understanding and analytical skills.",
    duration: "3 Years",
    eligibility:
      "Completion of higher secondary education (10+2) with Physics, Chemistry and Mathematics (PCM), Physics, Chemistry and Biology (PCB), Zoology, Botany and Chemistry (ZBC) or Computer Science as per the chosen stream.",
    careerOpportunities: [
      "PCM: Careers in engineering, technology, scientific research, analytics, data science, finance, and related technical fields.",
      "PCB: Opportunities in medical sciences, healthcare, biotechnology, pharmaceuticals, research laboratories and allied health sectors.",
      "ZBC: Careers in zoology, botany, environmental sciences, wildlife biology, ecology, forestry and conservation-related fields.",
      "CS: Career paths in software development, information technology, cybersecurity, data analytics, artificial intelligence and emerging tech domains."
    ]
  },
  {
    slug: "bca",
    title: "BCA (Bachelor of Computer Applications)",
    overview:
      "A comprehensive program focusing on computer applications, software development, programming languages, database management, and web technologies. Emphasizes practical skills through projects and industry-relevant tools.",
    duration: "3 Years",
    eligibility:
      "10+2 with Mathematics or Computer Science; minimum 50% aggregate.",
    careerOpportunities: [
      "Software Developer, Web Developer, Database Administrator, System Analyst.",
      "Roles in IT consulting, app development, cybersecurity, and tech startups.",
      "Further studies: MCA, MBA in IT Management."
    ]
  },
  {
    slug: "b-com",
    title: "B.Com (Bachelor of Commerce)",
    overview:
      "Covers accounting, finance, business law, economics, and taxation. Includes practical training in financial analysis and commercial practices for a strong foundation in commerce.",
    duration: "3 Years",
    eligibility:
      "10+2 in Commerce stream; minimum 45% aggregate.",
    careerOpportunities: [
      "Accountant, Financial Analyst, Tax Consultant, Banking Professional.",
      "Opportunities in corporate finance, auditing firms, and government sectors.",
      "Further: M.Com, CA, CS, MBA."
    ]
  },
  {
    slug: "bba",
    title: "BBA (Bachelor of Business Administration)",
    overview:
      "Focuses on management principles, marketing, HR, operations, and entrepreneurship. Develops leadership and decision-making skills through case studies and internships.",
    duration: "3 Years",
    eligibility:
      "10+2 any stream; minimum 50% aggregate.",
    careerOpportunities: [
      "Business Manager, Marketing Executive, HR Specialist, Entrepreneur.",
      "Roles in consulting, retail, startups, and corporate management.",
      "Further: MBA, PGDM."
    ]
  },
  {
    slug: "b-sc-agriculture",
    title: "B.Sc (Agriculture)",
    overview:
      "Integrates agronomy, soil science, plant pathology, and agricultural economics. Includes hands-on training in modern farming techniques and sustainable practices.",
    duration: "4 Years",
    eligibility:
      "10+2 with PCB/PCM; minimum 50% aggregate; entrance exam may apply.",
    careerOpportunities: [
      "Agronomist, Farm Manager, Agricultural Officer, Research Scientist.",
      "Opportunities in agribusiness, government agriculture departments, NGOs.",
      "Further: M.Sc Agriculture, Ph.D."
    ]
  },
  {
    slug: "ba",
    title: "BA (Bachelor of Arts) - Hindi/Sanskrit/English/Sociology/Education/Political Science/History/Economics",
    overview:
      "Offers specialization in humanities subjects like languages, social sciences, and history. Encourages critical thinking, research, and cultural understanding through interdisciplinary studies.",
    duration: "3 Years",
    eligibility:
      "10+2 any stream; minimum 45% aggregate.",
    careerOpportunities: [
      "Civil Services, Journalism, Teaching, Social Work, Policy Analyst.",
      "Roles in media, education, government, and cultural organizations.",
      "Further: M.A, Journalism, Law."
    ]
  },
  {
    slug: "bnys",
    title: "BNYS (Bachelor of Naturopathy and Yogic Sciences)",
    overview:
      "Blends naturopathy, yoga, and alternative medicine. Covers holistic health, anatomy, and therapeutic practices for wellness and preventive healthcare.",
    duration: "5.5 Years (incl. internship)",
    eligibility:
      "10+2 with PCB; minimum 50% aggregate.",
    careerOpportunities: [
      "Naturopath, Yoga Therapist, Wellness Consultant, Researcher.",
      "Opportunities in spas, hospitals, wellness centers, and private practice.",
      "Further: MD in Naturopathy."
    ]
  },
  {
    slug: "bsc", // Assuming this is another BSc variant, e.g., in Yogic Science
    title: "B.Sc (Yogic Science)",
    overview:
      "Explores yoga philosophy, physiology, and therapeutic applications. Includes practical training in asanas, pranayama, and meditation for health and mental well-being.",
    duration: "3 Years",
    eligibility:
      "10+2 any stream; minimum 45% aggregate.",
    careerOpportunities: [
      "Yoga Instructor, Therapist, Wellness Coach, Academic Researcher.",
      "Roles in fitness centers, schools, corporate wellness programs.",
      "Further: M.Sc Yoga."
    ]
  },
  {
    slug: "b-pharma",
    title: "B.Pharma (Bachelor of Pharmacy)",
    overview:
      "Covers pharmaceutical sciences, drug formulation, pharmacology, and quality control. Prepares for roles in drug development and healthcare.",
    duration: "4 Years",
    eligibility:
      "10+2 with PCB; minimum 50% aggregate; entrance exam required.",
    careerOpportunities: [
      "Pharmacist, Drug Inspector, Medical Representative, Researcher.",
      "Opportunities in pharma companies, hospitals, regulatory bodies.",
      "Further: M.Pharma, Pharm.D."
    ]
  },
  {
    slug: "b-sc-nursing",
    title: "B.Sc Nursing",
    overview:
      "Comprehensive nursing education with anatomy, community health, and clinical training. Focuses on patient care, ethics, and advanced medical procedures.",
    duration: "4 Years",
    eligibility:
      "10+2 with PCB; minimum 45% aggregate; entrance exam.",
    careerOpportunities: [
      "Staff Nurse, Nurse Educator, Community Health Nurse, Administrator.",
      "Roles in hospitals, clinics, public health, and international opportunities.",
      "Further: M.Sc Nursing, NP."
    ]
  },
  {
    slug: "bpt",
    title: "BPT (Bachelor of Physiotherapy)",
    overview:
      "Trains in rehabilitation, exercise therapy, and musculoskeletal disorders. Includes clinical rotations for hands-on patient management.",
    duration: "4.5 Years (incl. internship)",
    eligibility:
      "10+2 with PCB; minimum 50% aggregate.",
    careerOpportunities: [
      "Physiotherapist, Sports Therapist, Rehab Specialist, Consultant.",
      "Opportunities in hospitals, sports teams, private clinics.",
      "Further: MPT."
    ]
  },
  {
    slug: "ba-llb",
    title: "BA LLB (Bachelor of Arts + Bachelor of Laws)",
    overview:
      "Integrated program combining arts and law, covering constitutional law, contracts, and humanities. Builds legal acumen with social sciences.",
    duration: "5 Years",
    eligibility:
      "10+2 any stream; minimum 45% aggregate; entrance exam (CLAT).",
    careerOpportunities: [
      "Advocate, Legal Advisor, Corporate Lawyer, Judge.",
      "Roles in law firms, judiciary, corporate legal departments.",
      "Further: LLM."
    ]
  },
  {
    slug: "llb",
    title: "LLB (Bachelor of Laws)",
    overview:
      "Focuses on legal principles, criminal law, civil procedure, and jurisprudence. Prepares for litigation and advisory roles.",
    duration: "3 Years",
    eligibility:
      "Graduation; minimum 45% aggregate; entrance exam.",
    careerOpportunities: [
      "Litigator, Legal Consultant, Public Prosecutor, Compliance Officer.",
      "Opportunities in courts, firms, government legal services.",
      "Further: LLM, Judiciary."
    ]
  },
  {
    slug: "bachelor-of-hotel-management",
    title: "Bachelor of Hotel Management",
    overview:
      "Covers hospitality operations, food production, front office, and event management. Includes industry internships for practical exposure.",
    duration: "4 Years",
    eligibility:
      "10+2 any stream; minimum 50% aggregate.",
    careerOpportunities: [
      "Hotel Manager, Chef, Event Planner, Tourism Executive.",
      "Roles in hotels, resorts, airlines, event companies.",
      "Further: MBA Hospitality."
    ]
  },
  {
    slug: "bba-tourism",
    title: "BBA - Tourism",
    overview:
      "Explores tourism management, travel agency operations, eco-tourism, and marketing. Emphasizes sustainable tourism and global trends.",
    duration: "3 Years",
    eligibility:
      "10+2 any stream; minimum 50% aggregate.",
    careerOpportunities: [
      "Tour Operator, Travel Agent, Destination Manager, Cruise Staff.",
      "Opportunities in travel agencies, tourism boards, airlines.",
      "Further: MBA Tourism."
    ]
  }
];

export default programmesData;