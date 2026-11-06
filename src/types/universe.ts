export interface Chapter {
  id: string;
  num: string;
  title: string;
  tagline: string;
  themeColor: string;
  accentGlow: string;
  description: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'Photography' | 'Video Editing' | 'Design & Media' | 'Media Initiatives' | 'Visual Storytelling';
  year: string;
  description: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  mediaUrl?: string;
  tags: string[];
}

export interface CollectiveProject {
  id: string;
  title: string;
  tagline: string;
  websiteUrl: string;
  githubUrl: string;
  category: string;
  overview: string;
  myContributions: string[];
  areasOfWork: string[];
  featuredWorks: {
    title: string;
    type: string;
    description: string;
    posterUrl: string;
  }[];
  coreTeam: {
    name: string;
    role: string;
    avatarUrl: string;
  }[];
  collaborators?: {
    name: string;
    role: string;
    avatarUrl: string;
  }[];
}

export interface TechProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  isFlagship?: boolean;
  mediaUrl?: string;
  mediaType?: 'image' | 'radar' | 'branding';
  myContributions?: string[];
  architectureNotes?: string;
  themeColor?: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  type: 'Education' | 'College Life' | 'Milestone';
  score?: string;
  description: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  category: 'Arts & Drama Club' | 'College Events' | 'Cultural Initiatives' | 'Collaborations';
  period: string;
  description: string;
  takeaways: string[];
  status: string;
}

export interface FutureGoal {
  id: string;
  title: string;
  category: 'Technology' | 'Creative & Media' | 'Personal Growth' | 'Vision';
  horizon: 'Short-term' | 'Mid-term' | 'Vision';
  description: string;
  inProgress?: boolean;
}
