export const defaultProducts = [
  {
    slug: 'vasuniti-business-suite',
    name: 'VasuNiti Business Suite',
    tagline: 'Unified Enterprise Operations & Workflow Platform',
    shortDescription: 'An integrated operating system designed for modern enterprises to orchestrate operations, govern complex workflows, and synchronize global organizational data.',
    fullDescription: 'VasuNiti Business Suite bridges the gap between disconnected software silos. From enterprise resource governance and intelligent pipeline management to dynamic resource allocation and unified communication, it delivers real-time operational clarity across departments.',
    category: 'Enterprise Suite',
    badge: 'Flagship Platform',
    icon: 'LayoutDashboard',
    color: '#3888ff',
    order: 1,
    featured: true,
    capabilities: [
      'Multi-entity Organization Governance',
      'Dynamic Business Logic Orchestration',
      'Cross-department Collaboration Hub',
      'Real-time Financial & Operational Telemetry',
      'Enterprise Role-Based Access Control (RBAC)',
      'Custom Workflow Builder with Visual Canvas'
    ],
    features: [
      {
        title: 'Unified Operational Hub',
        description: 'Aggregate operations, projects, personnel, and compliance metrics into a single high-performance cockpit.',
        icon: 'LayoutGrid',
        highlight: 'Real-time synchronization across 50+ integrations'
      },
      {
        title: 'Adaptive Process Engine',
        description: 'Design, execute, and monitor multi-tiered business processes with zero code and rule-based triggering.',
        icon: 'Cpu',
        highlight: '99.99% workflow completion reliability'
      },
      {
        title: 'Enterprise Audit Trail',
        description: 'Immutable transaction and modification logs complying with global corporate governance standards.',
        icon: 'ShieldCheck',
        highlight: 'SOC2 & ISO 27001 ready'
      },
      {
        title: 'Predictive Resource Planning',
        description: 'AI-assisted capacity planning, headcount utilization, and budgetary forecasting.',
        icon: 'TrendingUp',
        highlight: 'Reduces operational overhead by up to 34%'
      }
    ],
    benefits: [
      {
        metric: '42%',
        label: 'Faster Workflow Execution',
        detail: 'Reduces cycle times by automating multi-step approval and data reconciliation procedures.'
      },
      {
        metric: '99.99%',
        label: 'System Uptime SLA',
        detail: 'Guaranteed platform availability with redundant distributed multi-zone failovers.'
      },
      {
        metric: '3.8x',
        label: 'ROI in Year One',
        detail: 'Average efficiency return reported across enterprise deployments in finance and logistics.'
      }
    ],
    faqs: [
      {
        question: 'How quickly can VasuNiti Business Suite be deployed in an enterprise?',
        answer: 'Typical enterprise rollouts take between 2 to 4 weeks, with pre-built connectors for legacy ERPs, CRM systems, and identity providers like Okta and Azure AD.'
      },
      {
        question: 'Does Business Suite support multi-currency and global subsidiaries?',
        answer: 'Yes, full multi-entity, multi-currency, and localized regulatory compliance modules are built into the core architecture.'
      },
      {
        question: 'Can we host VasuNiti Business Suite on private cloud infrastructure?',
        answer: 'We support Managed Cloud (VasuNiti Cloud), Dedicated VPC deployments on AWS/Azure/GCP, and on-premise air-gapped Kubernetes clusters.'
      }
    ],
    specs: {
      deployment: 'Cloud, Dedicated VPC, Hybrid, or Air-Gapped Kubernetes',
      compliance: 'SOC 2 Type II, ISO 27001, HIPAA, GDPR Compliant',
      availability: '99.99% Guaranteed SLA with Multi-Region High Availability',
      apiSupport: 'REST, GraphQL, gRPC, and Realtime WebSocket Webhooks'
    },
    status: 'active'
  },
  {
    slug: 'vasuniti-analytics',
    name: 'VasuNiti Analytics',
    tagline: 'Predictive Intelligence & Real-Time Data Fabric',
    shortDescription: 'Transform petabyte-scale distributed business data into ultra-low-latency insights, automated anomaly detection, and actionable forward-looking intelligence.',
    fullDescription: 'Engineered for organizations that cannot afford stale data, VasuNiti Analytics provides a unified real-time data engine that connects seamlessly to transactional databases, event streams, and cloud lakes to deliver sub-second querying and automated decision intelligence.',
    category: 'Data & Intelligence',
    badge: 'Real-time Intelligence',
    icon: 'LineChart',
    color: '#06b6d4',
    order: 2,
    featured: true,
    capabilities: [
      'Sub-second Ingestion of 1M+ Events/sec',
      'Autonomous Anomaly Detection with ML',
      'Executive KPI Cockpits & Semantic Layer',
      'Natural Language Data Querying',
      'Federated Query Engine across Data Silos',
      'Automated Executive Digest Generation'
    ],
    features: [
      {
        title: 'Distributed Query Engine',
        description: 'Execute analytical computations directly across your data lakes without expensive data duplications.',
        icon: 'Zap',
        highlight: '10x faster query execution than legacy OLAP'
      },
      {
        title: 'Self-Healing ML Forecasting',
        description: 'Self-tuning time-series models detect market shifts, customer churn indicators, and operational bottlenecks.',
        icon: 'Sparkles',
        highlight: '94.8% baseline forecasting accuracy'
      },
      {
        title: 'Unified Semantic Modeling',
        description: 'Define metrics once in code and serve consistent KPIs across all BI tools, applications, and APIs.',
        icon: 'Database',
        highlight: 'Zero metric divergence'
      },
      {
        title: 'Real-time Alerting Mesh',
        description: 'Configure intelligent multi-channel alerts that trigger instantaneous webhooks when anomalies occur.',
        icon: 'BellRing',
        highlight: 'Under 100ms notification latency'
      }
    ],
    benefits: [
      {
        metric: '10x',
        label: 'Faster Analytical Queries',
        detail: 'Columnar memory-mapped execution yields answers to complex aggregations in milliseconds.'
      },
      {
        metric: '68%',
        label: 'Reduction in Reporting Prep',
        detail: 'Automated data pipelines eliminate manual CSV extraction and spreadsheet consolidation.'
      },
      {
        metric: '< 50ms',
        label: 'Dashboard Render Latency',
        detail: 'Instantaneous UI interactivity even when slicing millions of dimensional records.'
      }
    ],
    faqs: [
      {
        question: 'Does VasuNiti Analytics require moving all data to a proprietary warehouse?',
        answer: 'No. Our federated query engine queries your existing Postgres, Snowflake, BigQuery, ClickHouse, or S3 data lakes in place without vendor lock-in.'
      },
      {
        question: 'Can business analysts query data using natural language?',
        answer: 'Yes, our integrated semantic Copilot enables non-technical team members to ask plain English questions and receive verified charts and SQL explanations.'
      }
    ],
    specs: {
      deployment: 'SaaS Multi-tenant, Single-tenant VPC, or Self-hosted Engine',
      compliance: 'SOC 2 Type II, HIPAA, ISO 27001, CCPA Compliant',
      availability: '99.95% Query Processing Availability SLA',
      apiSupport: 'High-throughput Arrow Flight, REST, PostgreSQL Wire Protocol'
    },
    status: 'active'
  },
  {
    slug: 'vasuniti-automation',
    name: 'VasuNiti Automation',
    tagline: 'Autonomous Workflow Engine & AI Agent Orchestration',
    shortDescription: 'Eliminate repetitive manual bottlenecks with intelligent bots, event-driven decision trees, and fault-tolerant background execution pipelines.',
    fullDescription: 'VasuNiti Automation combines deterministic state machines with adaptive AI agents. It gives engineering and business teams the power to orchestrate complex multi-step workflows, reconcile billing, handle asynchronous background queues, and automate customer touchpoints safely.',
    category: 'Workflow & Automation',
    badge: 'Hyper-Automation',
    icon: 'Workflow',
    color: '#6366f1',
    order: 3,
    featured: true,
    capabilities: [
      'Event-Driven Distributed State Machines',
      'Human-in-the-Loop Approval Checkpoints',
      '200+ Enterprise Connectors & SDKs',
      'Deterministic Rollback & Retry Protocols',
      'AI Document Parsing & Extraction',
      'Visual Timeline & Execution Replay'
    ],
    features: [
      {
        title: 'Durable Execution Engine',
        description: 'Workflows persist state across network blips, server restarts, and multi-day waiting periods without losing data.',
        icon: 'Repeat',
        highlight: 'Zero dropped events or orphaned processes'
      },
      {
        title: 'Intelligent Document Intelligence',
        description: 'Extract structured data from unstructured invoices, contracts, and receipts with 99.4% precision.',
        icon: 'FileText',
        highlight: 'Supports 40+ global languages and formats'
      },
      {
        title: 'Visual Workflow Studio',
        description: 'Drag-and-drop builder for business leaders paired with code-first TypeScript/Python SDKs for engineers.',
        icon: 'Sliders',
        highlight: 'Seamless code-to-visual bidirectional sync'
      },
      {
        title: 'Dynamic Agent Swarms',
        description: 'Deploy specialized AI micro-agents that reason over tasks, fetch data, and complete verified actions.',
        icon: 'Bot',
        highlight: 'Strict guardrails and role boundaries'
      }
    ],
    benefits: [
      {
        metric: '85%',
        label: 'Manual Effort Reduction',
        detail: 'Routine back-office verification and data entry workflows are fully automated.'
      },
      {
        metric: '0.001%',
        label: 'Error Rate',
        detail: 'Algorithmic validation ensures precision far exceeding human manual data entry.'
      },
      {
        metric: '100M+',
        label: 'Daily Tasks Executed',
        detail: 'Battle-tested architecture handling peak surges during month-end closes and holidays.'
      }
    ],
    faqs: [
      {
        question: 'How do you handle workflow failures or third-party API downtime?',
        answer: 'Our durable execution model automatically manages backoffs, exponential retries, and compensation/rollback sequences without code duplication.'
      },
      {
        question: 'Can we build custom nodes in Python or TypeScript?',
        answer: 'Yes. Write standard functions in your favorite language and import them as custom verified nodes within the studio.'
      }
    ],
    specs: {
      deployment: 'Serverless Cloud, Hybrid Edge Runners, or Dedicated Container',
      compliance: 'SOC 2 Type II, ISO 27001, FedRAMP In-Process',
      availability: '99.99% Pipeline Trigger & Execution SLA',
      apiSupport: 'Webhooks, gRPC Streams, REST, Node/Python/Go SDKs'
    },
    status: 'active'
  },
  {
    slug: 'vasuniti-cloud',
    name: 'VasuNiti Cloud',
    tagline: 'Resilient Infrastructure & Global Edge Network',
    shortDescription: 'High-performance cloud infrastructure designed for modern distributed architectures, zero-downtime deployments, and edge data processing.',
    fullDescription: 'Built from the ground up for microservices, high-traffic SaaS products, and latency-critical backends, VasuNiti Cloud offers automated multi-cloud provisioning, global edge caching, distributed database replication, and enterprise autoscaling with zero operational drag.',
    category: 'Cloud & DevOps',
    badge: 'Ultra-Scalable',
    icon: 'Cloud',
    color: '#8b5cf6',
    order: 4,
    featured: true,
    capabilities: [
      'Global Edge CDN with 300+ PoPs',
      'Automated Zero-Downtime Blue-Green Deploys',
      'Multi-Cloud Disaster Recovery Failover',
      'Built-in DDoS & Web Application Firewall (WAF)',
      'Automated Distributed Database Replication',
      'Real-time Performance & Log Telemetry'
    ],
    features: [
      {
        title: 'Global Edge Fabric',
        description: 'Execute compute and cache dynamic responses within 15ms of 95% of the world connected population.',
        icon: 'Globe',
        highlight: '<15ms Global TTFB Average'
      },
      {
        title: 'Autonomous Autoscaling',
        description: 'Scale from zero to tens of thousands of concurrent container pods in seconds based on traffic surges.',
        icon: 'Maximize2',
        highlight: 'Scales in <2.4 seconds'
      },
      {
        title: 'Zero-Trust Network Mesh',
        description: 'Every container, edge point, and database communication is encrypted with automatic mutual TLS (mTLS).',
        icon: 'Lock',
        highlight: 'Continuous posture verification'
      },
      {
        title: 'Unified Observability',
        description: 'Integrated distributed tracing, aggregated log indexing, and CPU/memory flamegraphs built in.',
        icon: 'Activity',
        highlight: 'Zero third-party agent overhead'
      }
    ],
    benefits: [
      {
        metric: '99.999%',
        label: 'Target Uptime Availability',
        detail: 'Multi-cloud active-active routing ensures zero impact even during complete datacenter outages.'
      },
      {
        metric: '60%',
        label: 'Cost Savings on Cloud Egress',
        detail: 'Optimized routing topology and built-in edge caching slash infrastructure bandwidth expenses.'
      },
      {
        metric: '< 15ms',
        label: 'Edge Compute Response',
        detail: 'Proximity-based request handling delivers instant app loading across all continents.'
      }
    ],
    faqs: [
      {
        question: 'Can VasuNiti Cloud connect to our existing AWS or Google Cloud accounts?',
        answer: 'Yes! You can use VasuNiti Cloud as an overlay control plane managing workloads directly across your AWS, GCP, Azure, and bare-metal servers.'
      },
      {
        question: 'How does deployment automation work?',
        answer: 'Native Git integration automatically spins up preview environments for pull requests and promotes verified builds to production with zero downtime.'
      }
    ],
    specs: {
      deployment: 'Global Edge Mesh, Dedicated Bare Metal, Sovereign Cloud',
      compliance: 'SOC 2 Type II, ISO 27001, PCI-DSS Level 1, HIPAA',
      availability: '99.999% SLA across Multi-Region Clusters',
      apiSupport: 'Kubernetes API, Terraform Provider, OpenTelemetry, CLI'
    },
    status: 'active'
  },
  {
    slug: 'vasuniti-cybercore',
    name: 'VasuNiti CyberCore',
    tagline: 'Zero-Trust Identity, Compliance & Threat Intelligence',
    shortDescription: 'Enterprise-grade cybersecurity platform providing continuous threat detection, identity governance, secret orchestration, and automated regulatory reporting.',
    fullDescription: 'VasuNiti CyberCore empowers security teams to enforce zero-trust policies with granular precision. It provides behavioral threat mitigation, automated cryptographic key management, and continuous posture monitoring across all software stacks and cloud assets.',
    category: 'Security & Compliance',
    badge: 'Enterprise Security',
    icon: 'Shield',
    color: '#10b981',
    order: 5,
    featured: false,
    capabilities: [
      'Universal Zero-Trust Identity & SSO Integration',
      'Automated Penetration & Vulnerability Scanning',
      'Centralized Secret & Cryptographic Key Vault',
      'Continuous Compliance Auditing (SOC2, ISO, HIPAA)',
      'AI-Powered Behavioral Threat Detection',
      'Automated Incident Response Runbooks'
    ],
    features: [
      {
        title: 'Dynamic Identity Mesh',
        description: 'Contextual access evaluation based on device health, geolocation, and behavioral telemetry.',
        icon: 'Key',
        highlight: 'Continuous adaptive authentication'
      },
      {
        title: 'Automated Compliance Engine',
        description: 'Collects evidence automatically from cloud resources and generates audit-ready compliance dossiers.',
        icon: 'FileCheck',
        highlight: 'Over 80% audit preparation time saved'
      },
      {
        title: 'Proactive Threat Surface Radar',
        description: 'Monitors public repos, dark web channels, and infrastructure endpoints for leaks and misconfigurations.',
        icon: 'Radar',
        highlight: '24/7 automated perimeter reconnaissance'
      }
    ],
    benefits: [
      {
        metric: '99.8%',
        label: 'Threat Interception Rate',
        detail: 'Proactive heuristics intercept malicious attempts before sensitive data is exposed.'
      },
      {
        metric: '100%',
        label: 'Audit Traceability',
        detail: 'Cryptographically signed audit logs ensure absolute non-repudiation in regulatory reviews.'
      }
    ],
    faqs: [
      {
        question: 'Does CyberCore replace our existing SIEM or EDR tools?',
        answer: 'CyberCore can act as your standalone security posture platform or ingest telemetry into Splunk, Datadog, or Microsoft Sentinel.'
      }
    ],
    specs: {
      deployment: 'Zero-Trust Cloud, Private Enclave, Air-Gapped',
      compliance: 'SOC 2 Type II, ISO 27001, FIPS 140-3, HIPAA, GDPR',
      availability: '99.99% Security Telemetry Pipeline SLA',
      apiSupport: 'Syslog, CEF, OpenTelemetry, Webhooks, GraphQL'
    },
    status: 'active'
  },
  {
    slug: 'vasuniti-devpulse',
    name: 'VasuNiti DevPulse',
    tagline: 'Developer Velocity, CI/CD Telemetry & API Observability',
    shortDescription: 'Empower engineering teams with intelligent code insight, rapid deployment pipelines, live API contract testing, and developer productivity analytics.',
    fullDescription: 'Designed by engineers for engineers, VasuNiti DevPulse streamlines the modern software delivery lifecycle. It provides end-to-end visibility into build speeds, flaky test identification, API contract monitoring, and pull request velocity.',
    category: 'Developer Tools',
    badge: 'Developer First',
    icon: 'Terminal',
    color: '#f59e0b',
    order: 6,
    featured: false,
    capabilities: [
      'Ultra-Fast Distributed CI/CD Cache Mesh',
      'Automated API Contract Testing & Mocking',
      'Flaky Test Detection & Smart Retries',
      'DORA Metrics & Engineering Health Analytics',
      'Ephemeral Feature Branch Previews',
      'SDK Generation for 12+ Languages'
    ],
    features: [
      {
        title: 'Intelligent Build Accelerator',
        description: 'Share compiled artifacts across the entire engineering team to reduce build times by up to 80%.',
        icon: 'FastForward',
        highlight: 'Remote cache hit rates > 85%'
      },
      {
        title: 'Live API Contract Guardian',
        description: 'Detect breaking changes in schemas and endpoints before pull requests are merged into production.',
        icon: 'Code2',
        highlight: 'Zero unintended breaking changes'
      },
      {
        title: 'DORA Velocity Telemetry',
        description: 'Track Lead Time, Deployment Frequency, MTTR, and Change Failure Rate in real-time.',
        icon: 'BarChart3',
        highlight: 'Actionable bottleneck suggestions'
      }
    ],
    benefits: [
      {
        metric: '4.5x',
        label: 'Faster Build & Deploy Cycles',
        detail: 'Distributed compilation caching cuts developer wait times from hours to minutes.'
      },
      {
        metric: '72%',
        label: 'Reduction in API Regressions',
        detail: 'Automated contract verification prevents downstream microservice breakages.'
      }
    ],
    faqs: [
      {
        question: 'Does DevPulse integrate with GitHub Actions, GitLab, and Jenkins?',
        answer: 'Yes! DevPulse acts as a drop-in accelerator with standard plugins for GitHub Actions, GitLab CI, Bitbucket, and Jenkins.'
      }
    ],
    specs: {
      deployment: 'Cloud SaaS, Hybrid Build Runners, On-Premise',
      compliance: 'SOC 2 Type II, ISO 27001',
      availability: '99.95% Build Telemetry SLA',
      apiSupport: 'CLI, Webhooks, GitHub App, VSCode & JetBrains Extensions'
    },
    status: 'active'
  }
];
