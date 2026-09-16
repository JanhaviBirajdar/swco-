import { Solution } from '../types';

export const solutionsData: Solution[] = [
  {
    id: 'sol-1',
    slug: 'enterprise-modernization',
    title: 'Enterprise Modernization & Core Migration',
    tagline: 'De-risk legacy migrations and build a composable event-driven software foundation.',
    category: 'Architecture & Transformation',
    description: 'Break monolithic bottlenecks and modernize core transaction engines without taking your business offline. We engineer high-throughput microservices, multi-region database sync, and zero-downtime cutover workflows.',
    targetAudience: 'CTOs, VP of Engineering, Enterprise Architects',
    icon: 'Layers',
    color: '#3888ff',
    keyOutcomes: [
      'Zero-downtime blue/green database synchronization',
      'Up to 70% reduction in legacy infrastructure maintenance fees',
      'Event-driven decoupling enabling independent team deployments',
      'SOC2 and ISO 27001 compliant architecture templates'
    ],
    technologies: ['React', 'Node.js', 'VasuNiti Cloud', 'Apache Kafka', 'Distributed SQL', 'OpenTelemetry'],
    caseStudySnippet: {
      clientType: 'Global Logistics Conglomerate',
      result: 'Transitioned 14 legacy ERP modules into an interconnected event mesh with 0 seconds of unplanned downtime.',
      impact: '10x release velocity increase'
    }
  },
  {
    id: 'sol-2',
    slug: 'intelligent-automation',
    title: 'Intelligent Process Automation & AI Agents',
    tagline: 'Augment human teams with deterministic state machines and verified AI agents.',
    category: 'Operations & AI',
    description: 'Automate high-volume back-office decisions, multi-party reconciliations, invoice extractions, and customer claims processing with rigorous guardrails and human-in-the-loop validation.',
    targetAudience: 'Chief Operating Officers, Heads of Digital Transformation',
    icon: 'Bot',
    color: '#6366f1',
    keyOutcomes: [
      '85% reduction in manual document handling and data verification',
      'Sub-second deterministic rule execution with audit non-repudiation',
      'AI agents constrained by strict enterprise security boundaries',
      'Continuous telemetry on automated ROI and time savings'
    ],
    technologies: ['VasuNiti Automation', 'Python AI SDK', 'OCR & LLM Pipeline', 'Temporal State Machines'],
    caseStudySnippet: {
      clientType: 'Tier-1 Insurance Provider',
      result: 'Automated 1.2M annual claims reconciliations with 99.7% first-pass accuracy.',
      impact: '4.2x faster claim resolution'
    }
  },
  {
    id: 'sol-3',
    slug: 'real-time-data-fabric',
    title: 'Unified Real-Time Data Fabric & Analytics',
    tagline: 'Deliver sub-second operational telemetry and predictive foresight to executive leadership.',
    category: 'Data & Intelligence',
    description: 'Stop waiting for overnight ETL batch jobs. VasuNiti connects operational datastores, clickstreams, and financial systems into a low-latency analytics fabric that alerts teams before anomalies become crises.',
    targetAudience: 'Chief Data Officers, VP of Analytics, Strategy Directors',
    icon: 'Activity',
    color: '#06b6d4',
    keyOutcomes: [
      'Sub-50ms query response times across multi-billion-row datasets',
      'Standardized semantic metric definitions eliminating divergent KPIs',
      'Automated executive briefings and anomaly detection alerts',
      'Seamless federated querying without data duplication costs'
    ],
    technologies: ['VasuNiti Analytics', 'Apache Arrow Flight', 'ClickHouse', 'PostgreSQL Wire', 'GraphQL'],
    caseStudySnippet: {
      clientType: 'Fintech Payment Gateway',
      result: 'Unified live transaction telemetry across 4 continents to catch payment routing degradation instantaneously.',
      impact: 'Saved $2.4M in potential failed routing transactions'
    }
  },
  {
    id: 'sol-4',
    slug: 'cloud-infrastructure-resilience',
    title: 'Mission-Critical Cloud Infrastructure & Edge Mesh',
    tagline: 'Scale to global millions with active-active multi-region reliability and hardened perimeter security.',
    category: 'Cloud & Security',
    description: 'Ensure your customer-facing applications remain responsive during unpredictable traffic spikes, regional outages, or sophisticated DDoS attempts. Built on zero-trust micro-segmentation and edge compute.',
    targetAudience: 'Heads of Infrastructure, Chief Information Security Officers',
    icon: 'ShieldCheck',
    color: '#10b981',
    keyOutcomes: [
      '99.999% platform availability across global active-active regions',
      'Edge compute execution within 15ms of 95% of world population',
      'Automated multi-layer DDoS mitigation and TLS certificate lifecycle',
      '60% infrastructure egress cost optimization'
    ],
    technologies: ['VasuNiti Cloud', 'VasuNiti CyberCore', 'Kubernetes Mesh', 'mTLS', 'WAF'],
    caseStudySnippet: {
      clientType: 'Global E-Commerce Platform',
      result: 'Maintained 100% uptime through Black Friday peak traffic surges reaching 280,000 requests/second.',
      impact: 'Zero degradation during 10x traffic spike'
    }
  }
];
