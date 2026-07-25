export type ActiveTab = 'expertise' | 'cv' | 'experience';

export interface CompetencyItem {
  title: string;
  items: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  percentage: number;
  icon: string;
  tags: string[];
  description: string;
  keyProjects: string[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  type: 'FULL-TIME' | 'CONTRACT' | 'LEAD';
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  imageAlt: string;
  metrics: string[];
  architectureOverview: string;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
  isCurrent?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  colorBg: string;
  colorText: string;
  credentialUrl?: string;
}

export interface BentoCardItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  highlightNumber?: string;
  highlightText?: string;
  bgClass: string;
  spanCol: string;
}
