// Constants for Arocean Nexus LLC
import { SERVICE_CATEGORIES, Service, PortfolioItem, Testimonial, StatItem, FAQItem, FormField, BUDGET_OPTIONS } from './types';

// Company information
export const COMPANY_INFO = {
  name: 'Arocean Nexus LLC',
  shortName: 'Arocean Nexus',
  description: 'Delivering exceptional digital solutions since 2024. We help businesses thrive in the digital age.',
  founded: 2024,
  phone: '(213) 784-1841',
  email: 'info@aroceannexus.com',
  address: {
    street: '21423 Baldovin Way',
    city: 'Tomball',
    state: 'TX',
    zip: '77375-1928',
  },
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
} as const;

// Site metadata
export const SITE_METADATA = {
  title: 'Arocean Nexus LLC - Premium Digital Services & IT Solutions',
  description: 'Professional e-books, digital marketing, software development, and IT solutions. Arocean Nexus LLC helps companies improve online presence and streamline operations.',
  keywords: [
    'digital services',
    'IT solutions',
    'software development',
    'digital marketing',
    'e-book publishing',
    'business automation',
    'cloud solutions',
    'web development',
    'mobile apps',
    'consulting',
  ],
  author: 'Arocean Nexus LLC',
  url: 'https://aroceannexusllc.com',
  image: '/images/og-image.jpg',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

// Services data
export const SERVICES: Service[] = [
  {
    id: 'publishing',
    title: 'E-Books & Publishing',
    description: 'Unlock boundless worlds with the turn of a page, where imagination knows no limits in digital display.',
    icon: 'BookOpen',
    category: 'publishing',
    href: '/services#publishing',
    features: [
      'Professional formatting and design',
      'Multi-platform distribution',
      'Interactive multimedia experiences',
      'Custom publishing solutions',
      'Complete author support packages',
      'Global market access',
    ],
    technologies: [
      'EPUB 3',
      'MOBI',
      'PDF Professional',
      'Amazon KDP',
      'Apple Books',
      'Google Play Books',
      'Interactive Media',
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Navigate the digital landscape with strategic precision, where every click echoes a brand\'s vision.',
    icon: 'TrendingUp',
    category: 'marketing',
    href: '/services#marketing',
    features: [
      'Search engine visibility enhancement',
      'Strategic content creation & distribution',
      'Brand presence optimization',
      'Targeted advertising solutions',
      'Automated customer engagement',
      'Data-driven performance insights',
    ],
    technologies: [
      'Google Analytics',
      'SEMrush',
      'HubSpot',
      'Mailchimp',
      'Hootsuite',
      'Google Ads',
      'Facebook Ads',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Transforming lines of code into seamless solutions, software development bridges imagination with execution.',
    icon: 'Code',
    category: 'software',
    href: '/services#software',
    features: [
      'Tailored business solutions',
      'iOS & Android applications',
      'Scalable business systems',
      'Software as a Service solutions',
      'System integration & connectivity',
      'Ongoing optimization & updates',
    ],
    technologies: [
      'JavaScript/TypeScript',
      'React.js/Vue.js',
      'Node.js/Python',
      'React Native/Flutter',
      'Docker/Kubernetes',
      'AWS/Azure/GCP',
    ],
  },
  {
    id: 'it',
    title: 'IT Solutions',
    description: 'Harnessing innovation to untangle complexity, IT solutions pave the path for streamlined efficiency.',
    icon: 'Server',
    category: 'it',
    href: '/services#it',
    features: [
      'Complete system implementation',
      'Secure and optimized networks',
      'Seamless transition to cloud platforms',
      'Comprehensive protection',
      'Strategic technology planning',
      'Managed IT services',
    ],
    technologies: [
      'Cisco/Meraki',
      'VMware/Hyper-V',
      'Office 365/G Suite',
      'Firewall Security',
      'Backup Solutions',
      'Network Monitoring',
    ],
  },
];

// Portfolio items
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'ebook-platform',
    title: 'Interactive E-Book Publishing Platform',
    description: 'Multi-format digital publishing platform with interactive features, DRM protection, and analytics dashboard for publishers.',
    category: ['publishing', 'software'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    metrics: [
      { value: '500%', label: 'Reader Engagement' },
      { value: '10K+', label: 'E-books Published' },
    ],
    href: '/portfolio#ebook-platform',
  },
  {
    id: 'marketing-dashboard',
    title: 'AI-Powered Marketing Analytics Dashboard',
    description: 'Comprehensive marketing platform with real-time campaign performance tracking, ROI analysis, and predictive analytics.',
    category: ['marketing'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    metrics: [
      { value: '250%', label: 'ROI Increase' },
      { value: '40%', label: 'Cost Reduction' },
    ],
    href: '/portfolio#marketing-dashboard',
  },
  {
    id: 'erp-system',
    title: 'Enterprise Resource Planning System',
    description: 'Custom-built ERP solution integrating inventory management, CRM, and financial modules for a manufacturing company.',
    category: ['software'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    metrics: [
      { value: '60%', label: 'Efficiency Gain' },
      { value: '$1.2M', label: 'Annual Savings' },
    ],
    href: '/portfolio#erp-system',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & IT Infrastructure Overhaul',
    description: 'Complete migration from legacy systems to cloud infrastructure with enhanced security and scalability for a financial institution.',
    category: ['it'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    metrics: [
      { value: '99.99%', label: 'Uptime' },
      { value: '50%', label: 'Cost Reduction' },
    ],
    href: '/portfolio#cloud-migration',
  },
  {
    id: 'publishing-pipeline',
    title: 'Automated Digital Publishing Pipeline',
    description: 'End-to-end automated publishing system for converting manuscripts into multiple digital formats with quality assurance.',
    category: ['publishing'],
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    metrics: [
      { value: '80%', label: 'Faster Publishing' },
      { value: '95%', label: 'Accuracy Rate' },
    ],
    href: '/portfolio#publishing-pipeline',
  },
  {
    id: 'content-platform',
    title: 'Content Marketing Automation Platform',
    description: 'AI-driven content creation, distribution, and performance tracking platform for marketing agencies.',
    category: ['marketing', 'software'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    metrics: [
      { value: '300%', label: 'Content Output' },
      { value: '4.8★', label: 'Client Rating' },
    ],
    href: '/portfolio#content-platform',
  },
];

// Statistics
export const STATS: StatItem[] = [
  { value: '200+', label: 'Successful Projects', description: 'We\'ve worked across diverse sectors, growing brands and scaling businesses.' },
  { value: '100+', label: 'Partners', description: 'A trusted partner to hundreds of clients, from startups to enterprises.' },
  { value: '$2M+', label: 'Raised Capital', description: 'Our track record of success and innovation has helped businesses grow exponentially.' },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: 'Working with Arocean Nexus has been transformative. Their team\'s expertise and dedication are exceptional.',
    author: {
      name: 'David Wilson',
      title: 'CEO',
      company: 'TechVision Inc.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
  },
  {
    id: '2',
    content: 'Their process is transparent, their communication excellent, and the results speak for themselves.',
    author: {
      name: 'Emily Roberts',
      title: 'Marketing Director',
      company: 'RetailPlus',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
  },
  {
    id: '3',
    content: 'The team at Arocean Nexus feels like an extension of our own. True partners in every sense.',
    author: {
      name: 'James Thompson',
      title: 'Operations Manager',
      company: 'Manufacturing Corp',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
  },
];

// FAQ items
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'What happens after I submit the contact form?',
    answer: 'Within 24 hours, one of our project managers will contact you to discuss your project in detail. We\'ll schedule a free consultation call to understand your requirements and provide initial recommendations.',
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website typically takes 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines during the proposal phase.',
  },
  {
    id: '3',
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing models: fixed-price projects, time & materials, and monthly retainers. After understanding your requirements, we provide detailed quotes with transparent breakdowns.',
  },
  {
    id: '4',
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we offer comprehensive support packages including maintenance, updates, security monitoring, and performance optimization. Support plans start at $500/month.',
  },
  {
    id: '5',
    question: 'What industries do you serve?',
    answer: 'We serve multiple industries including publishing, retail, healthcare, manufacturing, finance, education, and technology. Our team has diverse industry expertise.',
  },
];

// Values
export const COMPANY_VALUES = [
  {
    title: 'Client Success First',
    description: 'We measure our success by our clients\' success. Every decision is made with your business goals in mind.',
    icon: 'Target',
  },
  {
    title: 'Innovation Driven',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.',
    icon: 'Zap',
  },
  {
    title: 'Quality & Excellence',
    description: 'We never compromise on quality. Every project undergoes rigorous testing and quality assurance.',
    icon: 'Shield',
  },
  {
    title: 'Collaborative Partnership',
    description: 'We work as an extension of your team, ensuring transparent communication and true partnership.',
    icon: 'Users',
  },
  {
    title: 'Continuous Growth',
    description: 'We believe in continuous learning and improvement, both for our team and our clients\' businesses.',
    icon: 'TrendingUp',
  },
  {
    title: 'Social Responsibility',
    description: 'We\'re committed to making a positive impact through sustainable practices and community involvement.',
    icon: 'Heart',
  },
];

// Process steps
export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed workshops and analysis.',
    href: '/contact?step=discovery',
  },
  {
    number: 2,
    title: 'Design & Prototyping',
    description: 'Our designers create wireframes, mockups, and interactive prototypes to visualize the final product before development begins.',
    href: '/portfolio#design',
  },
  {
    number: 3,
    title: 'Development & Testing',
    description: 'Agile development with continuous testing, regular demos, and quality assurance at every stage to ensure flawless performance.',
    href: '/services#development',
  },
  {
    number: 4,
    title: 'Deployment & Launch',
    description: 'Smooth deployment with comprehensive testing, documentation, and training to ensure successful launch and adoption.',
    href: '/services#deployment',
  },
  {
    number: 5,
    title: 'Support & Optimization',
    description: 'Ongoing support, monitoring, and continuous optimization to ensure long-term success, security, and performance improvements.',
    href: '/contact#support',
  },
];

// Industries served
export const INDUSTRIES = [
  {
    title: 'Publishing & Media',
    description: 'Digital publishing platforms, e-book solutions, and content management systems.',
    icon: 'BookOpen',
    href: '/portfolio?industry=publishing',
  },
  {
    title: 'Marketing & Advertising',
    description: 'Digital marketing strategies, analytics platforms, and campaign management solutions.',
    icon: 'TrendingUp',
    href: '/portfolio?industry=marketing',
  },
  {
    title: 'Technology',
    description: 'Custom software development, SaaS platforms, and enterprise solutions.',
    icon: 'Code',
    href: '/portfolio?industry=technology',
  },
  {
    title: 'Enterprise IT',
    description: 'IT infrastructure, cloud migration, security solutions, and system integration.',
    icon: 'Server',
    href: '/portfolio?industry=it',
  },
];

// Form field definitions
export const CONTACT_FORM_FIELDS: FormField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
  },
  {
    name: 'company',
    label: 'Company Name',
    type: 'text',
    required: false,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: false,
  },
  {
    name: 'service',
    label: 'Service Interested In',
    type: 'select',
    required: false,
    options: ['', ...Object.entries(SERVICE_CATEGORIES).map(([key, value]) => value as string)],
  },
  {
    name: 'budget',
    label: 'Project Budget',
    type: 'select',
    required: false,
    options: ['', ...Object.entries(BUDGET_OPTIONS).map(([key, value]) => value as string)],
  },
  {
    name: 'message',
    label: 'Project Details',
    type: 'textarea',
    required: true,
    placeholder: 'Tell us about your project, goals, timeline, and any specific requirements...',
  },
];