export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  description: string;
  contributions: string[];
  techStack: string[];
  githubUrl: string;
  isFlagship?: boolean;
  visualType?: 'cyber' | 'finance' | 'iot';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  scoreLabel: string;
  score: string;
  location?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
}
