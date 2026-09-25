export type ProjectStatus = 'live' | 'in-development' | 'completed' | 'archived';
export type ProductStatus = 'live' | 'in-development' | 'beta' | 'paused';

export interface Technology {
  name: string;
  category?: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'other';
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  approach: string;
  solution: string;
  role: string[];
  outcome: string;
  lessons?: string;
  technologies: Technology[];
  featured: boolean;
  status: ProjectStatus;
  coverImage?: string;
  screenshots?: string[];
  externalUrl?: string;
  year: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  deliverables: string[];
  technologies?: string[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProductStatus;
  coverImage?: string;
  externalUrl?: string;
  featured: boolean;
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface InsightMeta {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime?: string;
  tags: string[];
  featured: boolean;
}

export interface CVExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface CVEducation {
  qualification: string;
  institution: string;
  year: string;
  notes?: string;
}
