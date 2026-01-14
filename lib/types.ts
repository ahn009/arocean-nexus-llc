// TypeScript type definitions for Arocean Nexus LLC

// Navigation types
export interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  href: string;
  category: 'publishing' | 'marketing' | 'software' | 'it';
}

// Portfolio types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string[];
  image: string;
  metrics: {
    value: string;
    label: string;
  }[];
  href: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
}

// Contact form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  newsletter?: boolean;
  agreement: boolean;
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Statistics types
export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

// Company information
export interface CompanyInfo {
  name: string;
  description: string;
  founded: number;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}

// Page metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    images: string[];
  };
}

// Animation props
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  whileInView?: object;
  viewport?: object;
}

// Component props
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

// Form validation types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Service categories
export const SERVICE_CATEGORIES = {
  publishing: 'E-Books & Publishing',
  marketing: 'Digital Marketing',
  software: 'Software Development',
  it: 'IT Solutions',
} as const;

export type ServiceCategory = keyof typeof SERVICE_CATEGORIES;

// Budget options
export const BUDGET_OPTIONS = {
  'under-5k': 'Under $5,000',
  '5k-15k': '$5,000 - $15,000',
  '15k-50k': '$15,000 - $50,000',
  '50k-100k': '$50,000 - $100,000',
  'over-100k': 'Over $100,000',
  'not-sure': 'Not sure yet',
} as const;

export type BudgetOption = keyof typeof BUDGET_OPTIONS;