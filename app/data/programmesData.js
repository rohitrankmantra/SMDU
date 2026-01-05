const programmesData = [
  // UNDERGRADUATE COURSES (existing)
  {
    slug: "bsc",
    title: "B.Sc Course",
    image: "/home/coursebg.jpeg",
    overview:
      "Provides foundational knowledge in Physics, Chemistry, Mathematics (PCM), Physics, Chemistry, Biology (PCB), Zoology, Botany, Chemistry (ZBC), or Computer Science (CS) based on the chosen stream. The programme includes a balanced mix of theoretical concepts and practical laboratory work to build strong scientific understanding and analytical skills.",
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
    image: "/home/coursebg.jpeg",
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
    slug: "bcom",
    title: "B.Com (Bachelor of Commerce)",
    image: "/home/coursebg.jpeg",
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
    image: "/home/coursebg.jpeg",
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
    slug: "bsc-agriculture",
    title: "B.Sc (Agriculture)",
    image: "/home/coursebg.jpeg",
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
    slug: "ba-hindisanskritenglishsociologyeducationpolitical-sciencehistoryeconomics",
    title: "BA (Bachelor of Arts) ",
    image: "/home/coursebg.jpeg",
    overview:
      "Offers specialization in humanities subjects like Hindi, Sanskrit, English, Sociology, Education, Political Science, History and Economics. Encourages critical thinking, research, and cultural understanding through interdisciplinary studies.",
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
    image: "/home/coursebg.jpeg",
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
    slug: "bsc-yogic-science", 
    title: "B.Sc (Yogic Science)",
    image: "/home/coursebg.jpeg",
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
    slug: "bpharma",
    title: "B.Pharma (Bachelor of Pharmacy)",
    image: "/home/coursebg.jpeg",
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
    slug: "bsc-nursing",
    title: "B.Sc Nursing",
    image: "/home/coursebg.jpeg",
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
    image: "/home/coursebg.jpeg",
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
    image: "/home/coursebg.jpeg",
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
    image: "/home/coursebg.jpeg",
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
    image: "/home/coursebg.jpeg",
    overview:
      "Covers hospitality operations, food production, front office, and event management. Includes industry internships for practical exposure.",
    duration: "3 Years",
    eligibility:
      "10+2 any stream; minimum 50% aggregate.",
    careerOpportunities: [
      "Hotel Manager, Chef, Event Planner, Tourism Executive.",
      "Roles in hotels, resorts, airlines, event companies.",
      "Further: MBA Hospitality."
    ]
  },
  {
    slug: "bba---tourism",
    title: "BBA - Tourism",
    image: "/home/coursebg.jpeg",
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
  },
  // POSTGRADUATE COURSES (updated with expanded overviews and 4-6 career opportunities)
{
  slug: "msc",
  title: "M.Sc (Master of Science)",
  image: "/home/coursebg.jpeg",
  overview:
    "Advanced study in scientific disciplines such as physics, chemistry, mathematics, or applied sciences, building on undergraduate foundations with cutting-edge coursework. Emphasizes research methodologies, experimental techniques, data analysis, and specialized knowledge to drive innovation, problem-solving, and contributions to scientific advancements. Students engage in lab projects, seminars, and thesis work to prepare for dynamic roles in research and industry.",
  duration: "2 Years",
  eligibility:
    "B.Sc in relevant field; minimum 50% aggregate; entrance exam may apply.",
  careerOpportunities: [
    "Research Scientist in national labs or private R&D centers.",
    "Data Analyst specializing in scientific datasets and modeling.",
    "University Lecturer or Assistant Professor in STEM subjects.",
    "Industry Consultant for tech and biotech firms.",
    "Quality Control Specialist in pharmaceuticals.",
    "Environmental Analyst for sustainability projects."
  ]
},
{
  slug: "mca",
  title: "MCA (Master of Computer Applications)",
  image: "/home/coursebg.jpeg",
  overview:
    "In-depth exploration of advanced programming paradigms, software engineering principles, artificial intelligence, machine learning, and cloud computing architectures. The curriculum focuses on real-world projects, system design, cybersecurity protocols, and emerging technologies like blockchain and IoT to equip students for IT leadership and innovation. Hands-on internships and capstone projects ensure graduates are ready to tackle complex digital challenges in a rapidly evolving tech landscape.",
  duration: "2 Years",
  eligibility:
    "BCA/B.Sc CS or equivalent; minimum 50% aggregate; entrance exam.",
  careerOpportunities: [
    "Software Architect designing scalable enterprise systems.",
    "AI/ML Engineer developing intelligent applications.",
    "IT Project Manager overseeing tech implementations.",
    "Cybersecurity Expert protecting digital infrastructures.",
    "Cloud Solutions Architect for AWS/Azure platforms.",
    "Full-Stack Developer in fintech startups."
  ]
},
{
  slug: "mcom",
  title: "M.Com (Master of Commerce)",
  image: "/home/coursebg.jpeg",
  overview:
    "Delves into advanced topics like international finance, corporate governance, e-commerce strategies, auditing standards, and taxation policies, with a focus on global economic trends. Builds expertise through financial modeling, case studies, and analytical tools to enhance strategic decision-making and ethical business practices. The program includes industry collaborations and research papers to prepare students for high-stakes roles in finance and commerce.",
  duration: "2 Years",
  eligibility:
    "B.Com or equivalent; minimum 50% aggregate.",
  careerOpportunities: [
    "Financial Controller managing corporate budgets.",
    "Investment Banker handling mergers and acquisitions.",
    "Internal Auditor ensuring compliance and risk management.",
    "Corporate Treasurer optimizing cash flows.",
    "Tax Consultant for multinational enterprises.",
    "E-commerce Strategist in digital marketplaces."
  ]
},
{
  slug: "mba",
  title: "MBA (Master of Business Administration)",
  image: "/home/coursebg.jpeg",
  overview:
    "Comprehensive management education spanning strategic planning, leadership development, global business operations, supply chain analytics, and digital transformation. Includes interactive case studies, business simulations, live projects, and extensive networking opportunities to foster entrepreneurial mindset and executive acumen. Graduates emerge equipped to navigate competitive markets, drive organizational growth, and lead cross-functional teams in diverse industries.",
  duration: "2 Years",
  eligibility:
    "Graduation any stream; minimum 50% aggregate; entrance exam (CAT/MAT).",
  careerOpportunities: [
    "Chief Executive Officer leading corporate visions.",
    "Marketing Director crafting global campaigns.",
    "Operations Head streamlining supply chains.",
    "Business Development Consultant for expansions.",
    "HR Director building talent strategies.",
    "Strategy Analyst in consulting firms like McKinsey."
  ]
},
{
  slug: "phd",
  title: "Ph.D (Doctor of Philosophy)",
  image: "/home/coursebg.jpeg",
  overview:
    "Research-intensive program designed to foster original contributions across disciplines, from humanities to sciences, through rigorous thesis development and peer-reviewed publications. Involves advanced seminars, interdisciplinary collaborations, grant writing, and academic mentorship to cultivate expertise and thought leadership. The journey emphasizes ethical research practices, innovation, and knowledge dissemination for long-term impact in academia and beyond.",
  duration: "3-5 Years",
  eligibility:
    "Master's degree; minimum 55% aggregate; research proposal and entrance test.",
  careerOpportunities: [
    "University Professor mentoring future scholars.",
    "Research Director heading innovation labs.",
    "Policy Advisor influencing government strategies.",
    "Industry R&D Lead in tech conglomerates.",
    "Think Tank Fellow analyzing global issues.",
    "Patent Examiner in intellectual property offices."
  ]
},
{
  slug: "msc-in-agriculture",
  title: "M.Sc in Agriculture",
  image: "/home/coursebg.jpeg",
  overview:
    "Specialized study in crop science, soil fertility management, precision farming, and agribusiness economics, integrating GIS tools and biotechnology for modern agriculture. Advanced research components focus on climate-smart practices, pest management, and value chain optimization to address global food security challenges. Fieldwork, lab experiments, and industry partnerships prepare students for sustainable agricultural leadership.",
  duration: "2 Years",
  eligibility:
    "B.Sc Agriculture; minimum 50% aggregate; entrance exam.",
  careerOpportunities: [
    "Agricultural Scientist developing hybrid crops.",
    "Extension Officer educating rural farmers.",
    "Agribusiness Manager in seed companies.",
    "Soil Conservation Consultant for NGOs.",
    "Farm Policy Analyst in government bodies.",
    "Agrotech Entrepreneur launching startups."
  ]
},
{
  slug: "msc-in-horticulture",
  title: "M.Sc in Horticulture",
  image: "/home/coursebg.jpeg",
  overview:
    "Focuses on fruit and vegetable production techniques, ornamental landscaping, post-harvest preservation, and floriculture innovations, with emphasis on organic methods and supply chain logistics. Incorporates biotechnology for genetic improvement, greenhouse management, and market-oriented research to enhance productivity and quality. Practical training through orchards, labs, and export simulations builds expertise for the global horticulture sector.",
  duration: "2 Years",
  eligibility:
    "B.Sc Horticulture/Agriculture; minimum 50% aggregate; entrance exam.",
  careerOpportunities: [
    "Horticulturist managing commercial orchards.",
    "Plantation Manager in tea/coffee estates.",
    "Export Specialist for fresh produce trade.",
    "Landscape Designer for urban green spaces.",
    "Post-Harvest Technologist reducing waste.",
    "Floriculture Researcher in breeding programs."
  ]
},
{
  slug: "ma",
  title: "M.A (Master of Arts)",
  image: "/home/coursebg.jpeg",
  overview:
    "Advanced exploration of humanities subjects including literature, history, economics, sociology, and political science, promoting deep critical analysis and theoretical frameworks. Encourages interdisciplinary research, archival studies, and cultural discourse through seminars, fieldwork, and dissertation writing. The program hones skills in communication, ethics, and global perspectives for impactful contributions to society and academia.",
  duration: "2 Years",
  eligibility:
    "BA in relevant field; minimum 50% aggregate.",
  careerOpportunities: [
    "Academician teaching at higher education institutions.",
    "Policy Analyst in think tanks and governments.",
    "Cultural Heritage Manager for museums.",
    "Journalist or Content Writer in media outlets.",
    "Social Researcher for NGOs and surveys.",
    "Diplomat or International Relations Specialist."
  ]
},
{
  slug: "ma-yogic-science",
  title: "M.A (Yogic Science)",
  image: "/home/coursebg.jpeg",
  overview:
    "In-depth study of yoga philosophy, ancient texts, comparative religion, and therapeutic applications, blending traditional wisdom with contemporary wellness science. Includes advanced asana sequences, pranayama techniques, meditation retreats, and research on yoga's psychological benefits. The curriculum fosters holistic development, ethical teaching, and scholarly inquiry for promoting global mental and physical health.",
  duration: "2 Years",
  eligibility:
    "BA/BNYS or equivalent; minimum 50% aggregate.",
  careerOpportunities: [
    "Yoga Scholar authoring philosophical texts.",
    "Therapist Trainer certifying wellness instructors.",
    "Wellness Program Director in corporate settings.",
    "Yoga Retreat Organizer for international centers.",
    "Researcher in mind-body health studies.",
    "Spiritual Counselor in therapeutic practices."
  ]
},
{
  slug: "msc-yogic-science",
  title: "M.Sc (Yogic Science)",
  image: "/home/coursebg.jpeg",
  overview:
    "Scientific approach to yoga physiology, neuroscience of meditation, biomechanics of asanas, and evidence-based therapeutic interventions for stress and chronic conditions. Combines empirical research methods, clinical trials, and physiological assessments with practical training in yoga therapy protocols. Students conduct original studies on yoga's impact on health metrics, preparing for interdisciplinary roles in healthcare and fitness.",
  duration: "2 Years",
  eligibility:
    "B.Sc Yogic Science or equivalent; minimum 50% aggregate; entrance exam.",
  careerOpportunities: [
    "Yoga Researcher publishing in scientific journals.",
    "Clinical Yoga Specialist in hospitals.",
    "Health Consultant for preventive care programs.",
    "Educator in yoga science curricula.",
    "Neuro-Yoga Therapist for mental health.",
    "Fitness Tech Developer integrating yoga apps."
  ]
},
// DIPLOMA COURSES (new additions)
{
  slug: "diploma-civil-engineering",
  title: "Diploma - Civil Engineering",
  image: "/home/coursebg.jpeg",
  overview:
    "Practical training in construction, surveying, structural design, and infrastructure development. Focuses on site management, materials testing, and CAD software for building resilient civil projects.",
  duration: "3 Years",
  eligibility:
    "10th pass with minimum 35% aggregate; entrance exam may apply.",
  careerOpportunities: [
    "Civil Site Supervisor overseeing construction sites.",
    "Junior Engineer in public works departments.",
    "Surveyor for land and infrastructure mapping.",
    "Drafting Technician using AutoCAD for designs.",
    "Quality Inspector in building materials.",
    "Project Assistant in real estate firms."
  ]
},
{
  slug: "diploma-mechanical-engineering",
  title: "Diploma - Mechanical Engineering",
  image: "/home/coursebg.jpeg",
  overview:
    "Hands-on learning in thermodynamics, machine design, manufacturing processes, and automation. Includes workshops on welding, CNC machining, and maintenance for industrial machinery.",
  duration: "3 Years",
  eligibility:
    "10th pass with minimum 35% aggregate; entrance exam may apply.",
  careerOpportunities: [
    "Mechanical Technician in automotive workshops.",
    "Maintenance Engineer for factory equipment.",
    "Production Supervisor in manufacturing units.",
    "CAD Designer for mechanical components.",
    "Quality Control Inspector in assembly lines.",
    "Service Engineer for HVAC systems."
  ]
},
{
  slug: "diploma-computer-science--engineering",
  title: "Diploma - Computer Science & Engineering",
  image: "/home/coursebg.jpeg",
  overview:
    "Core skills in programming, networking, database systems, and web development. Emphasizes practical labs, software testing, and hardware troubleshooting for IT support roles.",
  duration: "3 Years",
  eligibility:
    "10th pass with minimum 35% aggregate; entrance exam may apply.",
  careerOpportunities: [
    "IT Support Specialist resolving technical issues.",
    "Junior Software Developer coding applications.",
    "Network Technician maintaining LAN/WAN setups.",
    "Web Developer building responsive sites.",
    "Data Entry Operator with database skills.",
    "Hardware Troubleshooter in repair centers."
  ]
},
{
  slug: "ai-and-ml--data-science--cloud-technology--cyber-security--forensic-science",
  title: "Diploma in AI and ML",
  image: "/home/coursebg.jpeg",
  overview:
    "Introduction to artificial intelligence, machine learning algorithms, data preprocessing, and predictive modeling. Includes Python programming and projects on neural networks for real-world AI applications.",
  duration: "1 Year",
  eligibility:
    "10+2 with Mathematics; minimum 40% aggregate.",
  careerOpportunities: [
    "AI Assistant in chatbot development.",
    "ML Data Annotator for training datasets.",
    "Junior Data Scientist in analytics firms.",
    "AI Tester validating model outputs.",
    "Automation Specialist in process optimization.",
    "Predictive Analyst for business forecasting."
  ]
},

{
  slug: "diploma-in-agriculture",
  title: "Diploma in Agriculture",
  image: "/home/coursebg.jpeg",
  overview:
    "Basics of crop cultivation, soil conservation, irrigation methods, and farm management. Field training in pest control, organic farming, and market linkages for sustainable agriculture.",
  duration: "2 Years",
  eligibility:
    "10th pass; minimum 35% aggregate.",
  careerOpportunities: [
    "Farm Supervisor managing crop cycles.",
    "Agricultural Assistant in extension services.",
    "Seed Technician in production units.",
    "Irrigation Operator for water systems.",
    "Organic Farmer in rural cooperatives.",
    "Market Linkage Coordinator for produce sales."
  ]
},
{
  slug: "anm",
  title: "ANM (Auxiliary Nurse Midwife)",
  image: "/home/coursebg.jpeg",
  overview:
    "Training in community health, maternal-child care, immunization, and basic nursing procedures. Includes clinical practice for rural healthcare delivery and patient education.",
  duration: "2 Years",
  eligibility:
    "10th pass; minimum 40% aggregate; age 17-35.",
  careerOpportunities: [
    "Community Health Worker in villages.",
    "Midwife assisting deliveries.",
    "ANM Nurse in primary health centers.",
    "Immunization Coordinator for campaigns.",
    "Patient Educator on hygiene practices.",
    "Rural Clinic Assistant."
  ]
},
{
  slug: "gnm",
  title: "GNM (General Nursing and Midwifery)",
  image: "/home/coursebg.jpeg",
  overview:
    "Comprehensive nursing skills in patient care, anatomy, pharmacology, and midwifery. Hospital rotations for hands-on experience in wards, OPD, and emergency services.",
  duration: "3 Years",
  eligibility:
    "10+2 with Science; minimum 40% aggregate.",
  careerOpportunities: [
    "Staff Nurse in hospitals.",
    "Midwifery Nurse in maternity wards.",
    "Community Nurse for home visits.",
    "Operation Theatre Assistant.",
    "Critical Care Nurse in ICUs.",
    "Nursing Supervisor in clinics."
  ]
},
{
  slug: "dpharma",
  title: "D.Pharma (Diploma in Pharmacy)",
  image: "/home/coursebg.jpeg",
  overview:
    "Pharmaceutical chemistry, drug formulation, dispensing, and hospital pharmacy practices. Lab sessions on compounding and regulatory compliance for safe medication handling.",
  duration: "2 Years",
  eligibility:
    "10+2 with PCB; minimum 40% aggregate.",
  careerOpportunities: [
    "Community Pharmacist in retail stores.",
    "Hospital Pharmacist managing stocks.",
    "Medical Representative for pharma sales.",
    "Quality Control Technician in labs.",
    "Drug Inspector in regulatory roles.",
    "Compounder in clinics."
  ]
},
{
  slug: "diploma-hotel-management",
  title: "Diploma - Hotel Management",
  image: "/home/coursebg.jpeg",
  overview:
    "Skills in front office operations, housekeeping, food production, and guest services. Includes practical training in hotels for hospitality management and customer satisfaction.",
  duration: "1 Year",
  eligibility:
    "10th pass; minimum 35% aggregate.",
  careerOpportunities: [
    "Front Desk Executive in hotels.",
    "Housekeeping Supervisor managing rooms.",
    "Kitchen Assistant in food production.",
    "Guest Relations Officer for services.",
    "Reservation Clerk in tourism desks.",
    "Event Coordinator for banquets."
  ]
},
// DOCTORATE COURSES (new additions)
{
  slug: "phd-commerce-management",
  title: "Ph.D (Commerce & Management Studies)",
  image: "/home/coursebg.jpeg",
  overview:
    "Advanced research in business strategy, financial economics, organizational behavior, and marketing analytics. Involves original thesis, publications, and seminars for scholarly contributions to commerce and management.",
  duration: "3-5 Years",
  eligibility:
    "Master's in Commerce/Management; minimum 55% aggregate; entrance test and proposal.",
  careerOpportunities: [
    "Business Professor in management schools.",
    "Corporate Research Head in consulting firms.",
    "Economic Policy Advisor for governments.",
    "Management Consultant in strategy roles.",
    "Academic Dean overseeing programs.",
    "Entrepreneurship Scholar in incubators."
  ]
},
{
  slug: "phd-arts",
  title: "Ph.D (Arts & Humanities)",
  image: "/home/coursebg.jpeg",
  overview:
    "In-depth inquiry into literature, history, philosophy, sociology, and cultural studies. Focuses on theoretical frameworks, archival research, and interdisciplinary thesis for advancing humanistic knowledge.",
  duration: "3-5 Years",
  eligibility:
    "Master's in Arts/Humanities; minimum 55% aggregate; entrance test and proposal.",
  careerOpportunities: [
    "Humanities Professor in universities.",
    "Cultural Policy Analyst in heritage bodies.",
    "Historical Researcher for archives.",
    "Social Scientist in think tanks.",
    "Literary Critic or Author in publishing.",
    "NGO Director for cultural programs."
  ]
}
];

export default programmesData;