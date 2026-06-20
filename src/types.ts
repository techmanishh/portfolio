export type HomeService = {
  id: string;
  sequence?: number;
  icon: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  sequence?: number;
  icon: string;
  image: string;
  title: string;
  description: string;
  detailed_description: string;
  services_included: string[];
  industries: string[];
  benefits: string[];
  use_cases: string[];
  problems_solved: string[];
  process: ProcessStep[];
  deliverables: string[];
  outcomes: string[];
};

export type Project = {
  id: string;
  order?: number;
  image: string;
  gallery?: string[];
  tags: string[];
  title: string;
  summary?: string;
  live_url?: string;
  is_public?: boolean;
  content: string;
  stack?: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  highlights?: string[];
  challenges?: string[];
  impact?: string[];
  learnings?: string[];
};

export type Blog = {
  id: string;
  date: string;
  time: string;
  title: string;
  image: string;
  content: string;
  category?: string;
  excerpt?: string;
};

export type Testimonial = {
  id?: string;
  text: string;
  name?: string;
  role?: string;
  image?: string;
  projectId?: string;
};

export type Faq = { q: string; a: string };

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
};

export type SkillRow = { icon: string; label: string }[];
