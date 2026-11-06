import type { Project, SkillCategory, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Bheema Nitish Guru Datha",
  shortName: "Nitish",
  navBrand: "NITISH.",
  role: "Computer Science Engineering Student",
  subtitle: "Computer Science Engineering Student | Aspiring Software Developer",
  university: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
  shortUniversity: "Vel Tech University",
  degree: "B.Tech in Computer Science and Engineering",
  duration: "2023–2027",
  cgpa: "8.54/10",
  email: "nitishbheema@gmail.com",
  phone: "+91-7780124320",
  location: "Avadi, Tamil Nadu, India",
  photoUrl: "/profile.jpg",
  github: "https://github.com/bheemanitish",
  linkedin: "https://www.linkedin.com/in/bheema-nitish-guru-datha",
  heroDescription:
    "I am a Computer Science Engineering student passionate about software development, problem-solving, and building technology-driven solutions. I enjoy exploring new technologies and transforming ideas into practical applications.",
  aboutParagraphs: [
    "I am pursuing my Bachelor of Technology in Computer Science and Engineering at Vel Tech University.",
    "I have foundational knowledge of programming, data structures, database management, and web development.",
    "Through academic projects and independent development, I have explored applications involving personal finance management, IoT-based inventory monitoring, and AI-driven cybersecurity.",
    "I am continuously improving my technical knowledge, problem-solving abilities, and software development skills."
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    iconName: "Code2",
    skills: ["Java", "C", "SQL"]
  },
  {
    title: "WEB DEVELOPMENT",
    iconName: "Globe",
    skills: ["HTML", "CSS"]
  },
  {
    title: "DATABASES",
    iconName: "Database",
    skills: ["MySQL", "Firebase", "SQL Joins", "Subqueries"]
  },
  {
    title: "CORE COMPUTER SCIENCE",
    iconName: "Cpu",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "phishsense",
    title: "PHISHSENSE",
    subtitle: "AI-Driven Behavioral Phishing Detection & Threat Intelligence",
    category: "Cybersecurity & AI Research",
    duration: "2026",
    description:
      "Developed a domain-independent phishing detection platform analyzing URLs, QR codes, webpages, and behavioral patterns.",
    contributions: [
      "Implemented behavioral fingerprinting and trusted-domain verification.",
      "Developed risk scoring and adaptive threat analysis.",
      "Integrated Python-based AI/ML processing for phishing feature analysis and risk classification.",
      "Integrated threat intelligence for reusable phishing indicators and tamper-evident threat records."
    ],
    techStack: ["Python", "Machine Learning", "Threat Intelligence", "Behavioral Analysis", "Cybersecurity"],
    githubUrl: "https://github.com/bheemanitish/PhishSense",
    isFlagship: true,
    visualType: 'cyber'
  },
  {
    id: "finlytics",
    title: "FINLYTICS",
    subtitle: "Personal Finance & Expense Tracker Web Application",
    category: "Web Development",
    duration: "March 2026 – April 2026",
    description:
      "Developed a personal finance and expense tracking web application with expense categorization and transaction management features.",
    contributions: [
      "Developed a personal finance tracking application.",
      "Implemented expense categorization and transaction management.",
      "Designed a MySQL database to store user and financial records."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "Database Design"],
    githubUrl: "https://github.com/bheemanitish/Finlytics",
    isFlagship: false,
    visualType: 'finance'
  },
  {
    id: "smart-kitchen",
    title: "AI-BASED RFID SMART KITCHEN MANAGEMENT SYSTEM",
    subtitle: "IoT Ingredient Tracking & Inventory Monitoring",
    category: "IoT & Web Development",
    duration: "December 2025 – May 2026",
    description:
      "Developed an RFID-based smart kitchen management system for ingredient tracking and inventory monitoring.",
    contributions: [
      "Integrated RFID technology with database synchronization.",
      "Implemented inventory monitoring.",
      "Built a web dashboard to monitor stock and usage information."
    ],
    techStack: ["RFID Hardware", "IoT", "MySQL", "Web Dashboard", "Inventory Tracking"],
    githubUrl: "https://github.com/bheemanitish/Smart-Kitchen-RFID",
    isFlagship: false,
    visualType: 'iot'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: "2023 – 2027",
    institution: "VEL TECH RANGARAJAN DR. SAGUNTHALA R&D INSTITUTE OF SCIENCE AND TECHNOLOGY",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    scoreLabel: "CGPA",
    score: "8.54/10",
    location: "Avadi, Tamil Nadu, India"
  },
  {
    period: "2021 – 2023",
    institution: "APBIE BOARD",
    degree: "Senior Secondary Education",
    scoreLabel: "Percentage",
    score: "84.6%",
    location: "Andhra Pradesh, India"
  },
  {
    period: "2020 – 2021",
    institution: "SSC BOARD",
    degree: "Secondary Education",
    scoreLabel: "Percentage",
    score: "99.3%",
    location: "Andhra Pradesh, India"
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Trailhead Modules",
    issuer: "Salesforce",
    date: "December 2025 – May 2026",
    category: "Cloud CRM & Architecture"
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "April 2025",
    category: "Networking & Protocols"
  },
  {
    title: "IBM z/OS Mainframe Practitioner",
    issuer: "IBM",
    date: "April 2026",
    category: "Enterprise Systems"
  },
  {
    title: "JPMorganChase Software Engineering Job Simulation",
    issuer: "Forage",
    date: "May 2026",
    category: "Software Engineering & Data Analysis"
  },
  {
    title: "Java Full Stack Course Completion",
    issuer: "Wipro TalentNext",
    date: "October 2026",
    category: "Full Stack Development"
  },
  {
    title: "AWS Foundations: Getting Started with the AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "November 2026",
    category: "Cloud Infrastructure"
  }
];
