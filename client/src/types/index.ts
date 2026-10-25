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
  company?: string;
  institution?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  email: string;
  institution: string;
  designation: string;
  phone: string;
  interest: string;
  message?: string;
}

export interface COItem {
  id: string;
  code: string;
  title: string;
  bloomsLevel: string;
  description: string;
  targetAttainment: number; // e.g. 70%
  actualAttainment: number; // e.g. 74.5%
}

export interface POItem {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  description: string;
  targetAttainment: number;
  actualAttainment: number;
}

export interface MappingMatrixData {
  coList: COItem[];
  poList: POItem[];
  matrix: {
    [coId: string]: {
      [poId: string]: number; // 0, 1, 2, 3
    };
  };
}
