import type { Chapter, CreativeItem, TechProject, JourneyMilestone, ExperienceItem, FutureGoal, CollectiveProject } from '../types/universe';

export const UNIVERSE_META = {
  brand: "NITISH",
  universeTitle: "MY DIGITAL UNIVERSE",
  fullName: "Bheema Nitish Guru Datha",
  shortName: "Nitish",
  location: "Avadi, Tamil Nadu, India",
  tagline: "Exploring the Intersection of Technology, Creative Media, and Human Experience.",
  quote: "Not confined to a single box. A builder of software, a visual storyteller, a student of life.",
  email: "nitishbheema@gmail.com",
  phone: "+91-7780124320",
  github: "https://github.com/nitishbheema",
  linkedin: "https://www.linkedin.com/in/bheema-nitish-guru-datha",
  photoUrl: "/profile.jpg",
  resumeUrl: "/resume.pdf"
};

export const CHAPTERS: Chapter[] = [
  {
    id: "identity",
    num: "01",
    title: "WHO I AM",
    tagline: "Identity • Personality • Core Philosophy",
    themeColor: "#75F0A8",
    accentGlow: "rgba(117, 240, 168, 0.25)",
    description: "The core individual behind the screen. My mindset, values, eclectic curiosity, and perspective on the world."
  },
  {
    id: "journey",
    num: "02",
    title: "MY JOURNEY",
    tagline: "Milestones • Academics • College Life",
    themeColor: "#38BDF8",
    accentGlow: "rgba(56, 189, 248, 0.25)",
    description: "The chronological evolution from school to Vel Tech University. Academic grit, formative lessons, and personal growth."
  },
  {
    id: "creative",
    num: "03",
    title: "MY CREATIVE WORLD",
    tagline: "4VUE Collective • Video Production • Photography",
    themeColor: "#FB923C",
    accentGlow: "rgba(251, 146, 60, 0.25)",
    description: "Collaborative and personal media craft: 4VUE film productions, live music concerts, brand commercials, and visual storytelling."
  },
  {
    id: "tech",
    num: "04",
    title: "MY TECH WORLD",
    tagline: "PhishSense Flagship • NextRole India • IoT & Systems",
    themeColor: "#4ADE80",
    accentGlow: "rgba(74, 222, 128, 0.25)",
    description: "Engineering robust platforms: AI/blockchain cybersecurity, India-first recruitment technology, physical IoT hardware, and relational apps."
  },
  {
    id: "experiences",
    num: "05",
    title: "MY EXPERIENCES",
    tagline: "Arts & Drama Club • Campus Events • Collaborations",
    themeColor: "#C084FC",
    accentGlow: "rgba(192, 132, 252, 0.25)",
    description: "Stage performances, creative collaborations, club leadership, cultural festivals, and behind-the-scenes memories."
  },
  {
    id: "future",
    num: "06",
    title: "MY FUTURE",
    tagline: "Ambitions • Upcoming Projects • Uncharted Horizons",
    themeColor: "#F472B6",
    accentGlow: "rgba(244, 114, 182, 0.25)",
    description: "The road ahead. Next-generation ideas, future ventures, research areas to conquer, and lifelong dreams."
  }
];

export const IDENTITY_PILLARS = [
  {
    title: "Curiosity Without Borders",
    subtitle: "Multidisciplinary Mindset",
    text: "Refusing to be siloed into only code or only art. I find strength in connecting technical systems logic with creative media, visual framing, and human emotion."
  },
  {
    title: "Builder & Experimenter",
    subtitle: "Hands-on Discovery",
    text: "Whether wiring an ESP32 RFID module at 2 AM, training risk classifiers in Python, building recruitment platforms in Spring Boot, or color-grading cinematic b-roll, I learn by doing and creating."
  },
  {
    title: "Storyteller & Media Producer",
    subtitle: "4VUE & Arts & Drama",
    text: "Through the 4VUE creative media collective and the campus Arts & Drama Club, I love engaging audiences, staging ideas, directing camera crews, and transforming raw moments into lasting stories."
  },
  {
    title: "Relentless Persistence",
    subtitle: "Foundation & Growth",
    text: "Consistent academic performance (8.54 CGPA at Vel Tech, 99.3% in SSC) paired with continuous self-learning across full-stack development, networks, and creative suites."
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "2023 – 2027 (Current)",
    title: "B.Tech in Computer Science and Engineering",
    organization: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    type: "Education",
    score: "CGPA: 8.54 / 10",
    description: "Immersed in core computer science, software engineering, databases, and IoT research while co-founding creative initiatives like 4VUE and actively performing in campus arts & drama.",
    highlights: ["Algorithms & Data Structures", "Full-Stack & Cloud Architecture", "4VUE Media Collective Co-Founder", "Avadi, Tamil Nadu"]
  },
  {
    period: "2021 – 2023",
    title: "Senior Secondary Education (Intermediate)",
    organization: "APBIE Board (Board of Intermediate Education Andhra Pradesh)",
    type: "Education",
    score: "Percentage: 84.6%",
    description: "Deepened foundations in mathematics, physical sciences, and analytical problem-solving with rigorous preparation.",
    highlights: ["Mathematics & Physics", "Analytical Foundations", "Andhra Pradesh, India"]
  },
  {
    period: "2020 – 2021",
    title: "Secondary School Certificate (SSC)",
    organization: "SSC Board of Andhra Pradesh",
    type: "Education",
    score: "Percentage: 99.3%",
    description: "Graduated with top academic standing, laying the groundwork for disciplined engineering study and extracurricular pursuits.",
    highlights: ["State Distinction (99.3%)", "Academic Excellence", "Leadership & Activities"]
  }
];

// 4VUE CREATIVE MEDIA INITIATIVE (Separate collaborative team brand)
export const COLLECTIVE_4VUE: CollectiveProject = {
  id: "4vue",
  title: "4VUE",
  tagline: "WE SHOOT. WE EDIT. WE CREATE.",
  websiteUrl: "https://4vue.vercel.app/",
  githubUrl: "https://github.com/nitishbheema/4VUE",
  category: "Creative Media / Videography / Video Production / Team Initiative",
  overview: "4VUE is a collaborative creative media initiative focused on video production, videography, video editing, event coverage, commercial promotions, and visual storytelling. It represents my collaborative creative journey outside software development.",
  myContributions: [
    "Video shooting on location and stage",
    "Pacing, cuts, sound design & video editing",
    "Team coordination & production management",
    "Creative visual storytelling & color grading"
  ],
  areasOfWork: [
    "Music concerts and live performances",
    "Brand promotional films",
    "Corporate and live events",
    "Event highlights and cinematic aftermovies",
    "Creative promotional reels",
    "Supporting photography & behind-the-scenes"
  ],
  featuredWorks: [
    {
      title: "Anuv Jain Live Concert Coverage",
      type: "Music Concert & Live Performance",
      description: "Full multi-angle coverage capturing the electric atmosphere, stage lighting, and crowd euphoria during Anuv Jain's live concert performance.",
      posterUrl: "/media/4vue-anuv-concert.jpg"
    },
    {
      title: "Milano Restaurant Brand Film",
      type: "Commercial Brand Promotion",
      description: "Cinematic commercial promotional film showcasing culinary craftsmanship, restaurant ambiance, and signature dishes with dynamic camera movements.",
      posterUrl: "/media/4vue-milano.jpg"
    },
    {
      title: "Live Event Highlights & Aftermovies",
      type: "Event Videography",
      description: "High-energy festival coverage and cinematic aftermovies capturing high-octane stage moments and student celebrations.",
      posterUrl: "/media/4vue-event.jpg"
    }
  ],
  coreTeam: [
    { name: "Nitish", role: "Creative Producer / Video Editor / Shooter", avatarUrl: "/media/4vue-nitish.jpg" },
    { name: "Balaji", role: "Cinematographer / Camera Specialist", avatarUrl: "/media/4vue-balaji.jpg" },
    { name: "Harsha", role: "Media Strategist / Visual Stylist", avatarUrl: "/media/4vue-harsha.jpg" },
    { name: "Mahindra", role: "Production Coordinator / Visual Media", avatarUrl: "/media/4vue-mahindra.jpg" }
  ],
  collaborators: [
    { name: "Suhas", role: "Creative Collaborator / Production Support", avatarUrl: "/media/4vue-suhas.jpg" }
  ]
};

export const CREATIVE_COLLECTION: CreativeItem[] = [
  {
    id: "visual-portraits",
    title: "Natural Portraiture & Candid Light",
    category: "Photography",
    year: "2025–2026",
    description: "Exploring natural ambient lighting, candid human expressions, and environmental framing with prime lenses.",
    tags: ["Portrait", "Natural Light", "Depth of Field", "Street"],
    aspect: "portrait"
  },
  {
    id: "cinematic-edits",
    title: "Rhythm & Kinetic Video Editing",
    category: "Video Editing",
    year: "2025–2026",
    description: "Crafting pacing, beat-matched cuts, sound design, and color grading for campus reels, short promos, and creative montages.",
    tags: ["Premiere Pro", "Pacing", "Sound Design", "Color Grading"],
    aspect: "landscape"
  },
  {
    id: "event-visuals",
    title: "Campus Cultural & Festival Coverage",
    category: "Media Initiatives",
    year: "2024–2026",
    description: "Documenting fast-moving stage moments, high-energy performances, and behind-the-scenes crowd reactions during college festivities.",
    tags: ["Live Stage", "Event Media", "Dynamic Angles", "Speed"],
    aspect: "landscape"
  },
  {
    id: "poster-design",
    title: "Graphic Posters & Digital Visuals",
    category: "Design & Media",
    year: "2025",
    description: "Designing promotional posters, typography compositions, and event branding with strong visual hierarchy and dark-mode aesthetics.",
    tags: ["Typography", "Layout", "Visual Hierarchy", "Branding"],
    aspect: "portrait"
  },
  {
    id: "experimental-media",
    title: "Creative Experiments & Motion Graphics",
    category: "Visual Storytelling",
    year: "2026",
    description: "Combining typography motion, glitch artifacts, and audio reactive elements for modern social media storytelling.",
    tags: ["Motion", "Experimental", "Visual Art", "Storytelling"],
    aspect: "square"
  }
];

export const TECH_PROJECTS: TechProject[] = [
  {
    id: "phishsense",
    title: "PhishSense",
    tagline: "AI-Driven Behavioral Phishing Detection & Blockchain Threat Intelligence",
    category: "AI / Cybersecurity / Research / Full-Stack Development",
    year: "2026",
    description: "A multi-layer cybersecurity platform designed to detect modern phishing threats beyond traditional blacklist-based detection. Combines URL analysis, trusted-domain verification, QR code scanning, webpage inspection, behavioral intelligence, AI/ML classification, and blockchain-backed threat logging.",
    highlights: [
      "Multimodal phishing detection (URLs, QR codes, webpages, behavioral markers)",
      "Trusted-domain verification & behavioral fingerprinting",
      "Explainable AI-based risk analysis with adaptive threat scoring",
      "PhishChain blockchain ledger for tamper-evident threat intelligence records",
      "Real-time security analysis & zero-day threat defense"
    ],
    myContributions: [
      "Concept development & platform architecture",
      "Frontend & backend engineering across React and Spring Boot / Python",
      "AI model integration for behavioral phishing feature analysis",
      "Threat intelligence pipeline & blockchain logging deployment"
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "Machine Learning", "Blockchain"],
    githubUrl: "https://github.com/nitishbheema/PhishSense",
    liveUrl: "https://phish-sense-three.vercel.app/",
    isFlagship: true,
    mediaType: "radar",
    themeColor: "#4ADE80"
  },
  {
    id: "nextrole",
    title: "NextRole India",
    tagline: "Discover Opportunities. Build Your Next Role.",
    category: "Full-Stack Development / Recruitment Technology / Cybersecurity",
    year: "2026",
    description: "An India-first job discovery and employer verification platform designed to help students, fresh graduates, and professionals discover relevant career opportunities across India. Aggregates official company career pages and ATS sources with integrated PhishSense URL risk screening.",
    highlights: [
      "India-first multi-source job aggregation (company career pages, Greenhouse, Lever, Ashby)",
      "Advanced search and structured job descriptions rendering",
      "Employer job submission workflow with administrator verification & status tracking",
      "Integrated PhishSense-based application URL risk screening to prevent fake job postings",
      "Submission reference IDs, approval/rejection workflows, and audit trail"
    ],
    myContributions: [
      "Architected frontend & backend architecture using React, TypeScript, and Java Spring Boot",
      "Built multi-source job aggregation and robust filtering pipelines",
      "Developed employer submission & admin verification workflows with reference tracking",
      "Integrated PhishSense-based URL security screening for safe job applications",
      "Designed the NextRole India brand identity & deployed on Render with Neon PostgreSQL"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Java", "Spring Boot", "REST APIs", "PostgreSQL", "Neon", "Render", "PhishSense API"],
    githubUrl: "https://github.com/nitishbheema/NextRole-India",
    liveUrl: "https://nextrole-india.onrender.com",
    mediaUrl: "/media/nextrole-branding.png",
    mediaType: "branding",
    themeColor: "#10B981"
  },
  {
    id: "smart-kitchen",
    title: "AI-Based RFID Smart Kitchen Management",
    tagline: "Hardware-Integrated Inventory & Stock Telemetry System",
    category: "IoT & Hardware Prototyping",
    year: "Dec 2025 – May 2026",
    description: "Physical hardware system utilizing RC522 RFID reader, ESP32 microcontroller, load cells, and OLED display synchronized with a web dashboard for automated ingredient tracking.",
    highlights: [
      "Physical RFID tag synchronization with MySQL database",
      "Real-time weight and stock consumption monitoring",
      "Custom circuit schematic with ESP32, HX711, and OLED display",
      "Web telemetry dashboard for inventory reorder triggers"
    ],
    myContributions: [
      "Hardware circuit design and breadboard prototyping with ESP32 and RC522",
      "Database schema synchronization between microcontroller and web server",
      "Web dashboard telemetry interface for real-time inventory tracking"
    ],
    techStack: ["ESP32 Hardware", "RFID RC522", "C++ / Embedded", "MySQL", "Web Dashboard"],
    githubUrl: "https://github.com/nitishbheema/Smart-Kitchen-RFID",
    mediaUrl: "/media/smart-kitchen-hardware.jpg",
    mediaType: "image",
    themeColor: "#38BDF8"
  },
  {
    id: "finlytics",
    title: "Finlytics",
    tagline: "Personal Finance & Expense Tracker Web Application",
    category: "Web Engineering & Databases",
    year: "Mar 2026 – Apr 2026",
    description: "Web application designed for streamlined transaction logging, relational categorization, budget tracking, and statistical breakdown of spending habits.",
    highlights: [
      "Full relational MySQL schema for users & transactions",
      "Normalized expense categorization & monthly aggregations",
      "Interactive data visualizations and expense breakdowns",
      "Intuitive ledger workflow with subqueries & joins"
    ],
    myContributions: [
      "Engineered the full frontend interface and transaction ledger workflow",
      "Designed normalized 3NF MySQL database schema for users and records",
      "Built category breakdown and monthly aggregation algorithms"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL", "Relational Database Design"],
    githubUrl: "https://github.com/nitishbheema/Finlytics",
    mediaType: "image",
    themeColor: "#FBBF24"
  }
];

export const EXPERIENCES_COLLECTION: ExperienceItem[] = [
  {
    id: "arts-drama-club",
    title: "Arts & Drama Club",
    role: "Core Performer & Creative Contributor",
    category: "Arts & Drama Club",
    period: "2024 – Present",
    description: "Active member contributing to stage performances, theatrical skits, script coordination, and creative expression on campus. Developing stage presence, public speaking, and team improvisation.",
    takeaways: [
      "Stage confidence & character portrayal",
      "Collaborative script ideation and rehearsal discipline",
      "Creative synergy between drama, music, and lighting"
    ],
    status: "Active"
  },
  {
    id: "college-festivals",
    title: "Campus Cultural & Tech Fests",
    role: "Event Participant & Media Contributor",
    category: "College Events",
    period: "2023 – 2026",
    description: "Engaging in inter-college tech symposiums, cultural nights, and festival coordination. Documenting high-energy memories through visual media and collaborating across branches.",
    takeaways: [
      "Cross-department team collaboration",
      "Live event problem-solving under tight schedules",
      "Creating lifelong college memories and networking"
    ],
    status: "Ongoing"
  },
  {
    id: "academic-collaborations",
    title: "Peer Engineering & Team Builds",
    role: "Project Developer & Team Collaborator",
    category: "Collaborations",
    period: "2024 – 2026",
    description: "Collaborative project squads building applied solutions across IoT hardware and web apps. Mentoring peers in SQL queries and participating in software engineering simulations.",
    takeaways: [
      "Hardware-software bridging & circuit debugging",
      "Version control workflows & peer code reviews",
      "Translating academic concepts into working prototypes"
    ],
    status: "Completed"
  }
];

export const FUTURE_HORIZONS: FutureGoal[] = [
  {
    id: "cyber-ml-deepdive",
    title: "Autonomous Threat Intelligence Engines",
    category: "Technology",
    horizon: "Short-term",
    description: "Extending PhishSense into a real-time behavioral defense agent capable of analyzing zero-day phishing vectors with lightweight local LLMs and decentralized threat feeds.",
    inProgress: true
  },
  {
    id: "creative-media-studio",
    title: "4VUE Independent Visual Media Expansion",
    category: "Creative & Media",
    horizon: "Mid-term",
    description: "Scaling 4VUE into an independent creative powerhouse delivering commercial films, high-production music videos, and cinematic event coverage across India.",
    inProgress: true
  },
  {
    id: "nextrole-scale",
    title: "Scaling NextRole India Nationwide",
    category: "Technology",
    horizon: "Short-term",
    description: "Expanding automated ATS connectors, integrating AI resume parsing, and partnering with Indian tech universities to empower fresh graduate placement.",
    inProgress: true
  },
  {
    id: "lifelong-archive-vision",
    title: "The Living Digital Archive",
    category: "Vision",
    horizon: "Vision",
    description: "Continuously evolving this Digital Universe over the next decade into an interactive chronicle of software, creative art, ventures, and human connections.",
    inProgress: true
  }
];
