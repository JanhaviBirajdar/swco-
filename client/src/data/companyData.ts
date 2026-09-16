import { LeadershipMember, Testimonial } from '../types';

export const companyData = {
  name: 'VASUNITI',
  legalName: 'VasuNiti Technologies Inc.',
  tagline: 'Software Built for the Way the World Works.',
  heroDescription: 'VasuNiti builds intelligent, scalable software products that help businesses simplify complexity, automate operations, and move faster.',
  mission: 'To engineer enduring, high-performance software products that eliminate operational friction and empower global enterprises to build the future with absolute reliability.',
  vision: 'A world where enterprise software is as seamless, intuitive, and resilient as the modern web itself — free from technical debt, operational blindspots, and architectural fragility.',
  foundedYear: '2023',
  locations: [
    { city: 'San Francisco', country: 'United States', address: '500 Howard Street, Suite 400', type: 'Global HQ' },
    { city: 'Bengaluru', country: 'India', address: 'Outer Ring Road, Tech Corridor', type: 'Engineering & R&D Hub' },
    { city: 'London', country: 'United Kingdom', address: '100 Bishopsgate', type: 'EMEA Operations' }
  ],
  stats: [
    { value: '10+', label: 'Software Products & Engines', detail: 'Built from first principles for mission-critical workloads' },
    { value: '500K+', label: 'Daily Business Events Processed', detail: 'Across financial, logistic, and enterprise stacks' },
    { value: '99.99%', label: 'Platform Reliability Target', detail: 'Multi-region failover and distributed resilience' },
    { value: '24/7', label: 'Continuous Autonomous Telemetry', detail: 'Proactive health auditing and instant anomaly detection' }
  ],
  principles: [
    {
      title: 'Built for Scale',
      subtitle: 'Architectural Rigor',
      description: 'We reject short-term hacks. Every line of code, schema, and API contract is engineered to handle 100x traffic expansion without degradation.',
      icon: 'Maximize'
    },
    {
      title: 'Human-Centered Design',
      subtitle: 'Intuitive Depth',
      description: 'Enterprise software should not be clunky. We craft interfaces that respect human cognitive load with instant feedback and sublime aesthetics.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Engineering Excellence',
      subtitle: 'Craft & Precision',
      description: 'From memory allocation to millisecond UI rendering, we obsess over performance benchmarks, type safety, and clean software craftsmanship.',
      icon: 'Cpu'
    },
    {
      title: 'Security by Design',
      subtitle: 'Zero-Trust Default',
      description: 'Security is not an afterthought or checkbox. Continuous encryption, automated compliance posture, and least-privilege access are baked into our DNA.',
      icon: 'Shield'
    },
    {
      title: 'Continuous Innovation',
      subtitle: 'Adaptive Technology',
      description: 'We integrate breakthroughs in distributed systems and artificial intelligence directly into practical, production-ready enterprise tools.',
      icon: 'Sparkles'
    },
    {
      title: 'Long-Term Partnership',
      subtitle: 'Customer Commitment',
      description: 'We measure our success by the longevity and durability of the businesses running their core workflows on VasuNiti software.',
      icon: 'Users'
    }
  ],
  techStack: [
    { name: 'React', category: 'Frontend', description: 'Declarative, ultra-fast UI rendering' },
    { name: 'TypeScript', category: 'Core Language', description: 'Strict end-to-end type safety' },
    { name: 'Node.js', category: 'Backend Engine', description: 'High-concurrency event-driven runtime' },
    { name: 'Express.js', category: 'API Layer', description: 'Battle-tested RESTful endpoints' },
    { name: 'MongoDB', category: 'Data Store', description: 'Flexible, high-velocity document storage' },
    { name: 'Three.js & R3F', category: '3D Graphics', description: 'GPU-accelerated interactive web experiences' },
    { name: 'Tailwind CSS', category: 'Design System', description: 'Bespoke, responsive atomic styling' },
    { name: 'Framer Motion', category: 'Motion Physics', description: 'Smooth, 60fps spring-based micro-interactions' },
    { name: 'Docker & K8s', category: 'Infrastructure', description: 'Cloud-agnostic container orchestration' },
    { name: 'OpenTelemetry', category: 'Observability', description: 'Full-stack distributed tracing & metrics' }
  ]
};

export const leadershipData: LeadershipMember[] = [
  {
    name: 'Aarav Sharma',
    role: 'Chief Executive Officer & Founder',
    bio: 'Former distributed systems lead with 14+ years building high-frequency cloud architectures and enterprise software platforms across Silicon Valley and Asia.',
    expertise: ['Enterprise Strategy', 'Distributed Systems', 'Product Design'],
    imagePlaceholderColor: '#3888ff'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Chief Technology Officer',
    bio: 'Ph.D. in Computer Science specializing in autonomous state machines, predictive data fabrics, and fault-tolerant concurrency models.',
    expertise: ['AI Systems', 'Compiler Architecture', 'Security Protocol'],
    imagePlaceholderColor: '#6366f1'
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Product Design',
    bio: 'Pioneered award-winning design systems for global SaaS leaders, focusing on micro-interactions, 3D spatial UI, and enterprise cognitive efficiency.',
    expertise: ['Design Systems', '3D WebGL', 'User Psychology'],
    imagePlaceholderColor: '#06b6d4'
  },
  {
    name: 'Priya Narang',
    role: 'VP of Enterprise Solutions',
    bio: 'Guided enterprise digital transformations for Fortune 500 financial institutions, orchestrating zero-downtime core banking and logistics deployments.',
    expertise: ['Client Architecture', 'Cloud Governance', 'DevOps'],
    imagePlaceholderColor: '#10b981'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "VasuNiti replaced four legacy tools with a single unified operating layer. Our deployment cycle went from weeks to less than 20 minutes, with zero downtime.",
    author: "Devon Bradley",
    role: "VP of Engineering",
    company: "Apex Global Logistics",
    metric: "14x",
    metricLabel: "Release Velocity"
  },
  {
    quote: "The visual polish and raw analytical speed of VasuNiti Analytics gave our executive team instant visibility across global supply chains. A true game-changer.",
    author: "Samantha Cheng",
    role: "Chief Data Officer",
    company: "Veritas Financial Group",
    metric: "68%",
    metricLabel: "Reporting Time Saved"
  },
  {
    quote: "Automating high-stakes claims with VasuNiti Automation eliminated human bottlenecks completely. Their deterministic fallback engine gave our compliance team total peace of mind.",
    author: "Michael Ross",
    role: "Head of Digital Operations",
    company: "Crestview Underwriters",
    metric: "99.7%",
    metricLabel: "First-Pass Precision"
  }
];
