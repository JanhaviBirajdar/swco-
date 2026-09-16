export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
  highlight?: string;
}

export interface ProductBenefit {
  metric: string;
  label: string;
  detail: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductSpecs {
  deployment: string;
  compliance: string;
  availability: string;
  apiSupport: string;
}

export interface Product {
  _id?: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Enterprise Suite' | 'Data & Intelligence' | 'Workflow & Automation' | 'Cloud & DevOps' | 'Security & Compliance' | 'Developer Tools';
  badge: string;
  icon: string;
  color: string;
  order: number;
  featured: boolean;
  capabilities: string[];
  features: ProductFeature[];
  benefits: ProductBenefit[];
  faqs: ProductFAQ[];
  specs: ProductSpecs;
  status?: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  targetAudience: string;
  icon: string;
  color: string;
  keyOutcomes: string[];
  technologies: string[];
  caseStudySnippet: {
    clientType: string;
    result: string;
    impact: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  imagePlaceholderColor: string;
}
