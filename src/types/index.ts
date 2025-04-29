export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  imageUrl?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  date: string;
  score?: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  icon?: string;
}