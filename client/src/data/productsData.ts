import { Product } from '../types';

export const productsData: Product[] = [
  {
    slug: 'copo-mapping-engine',
    name: 'CO–PO–PSO Mapping Engine',
    tagline: 'Standardized Outcome Alignment & Correlation Matrix',
    shortDescription: 'Define Bloom’s-aligned Course Outcomes and seamlessly map them to Programme Outcomes and Programme-Specific Outcomes with qualitative justification rubrics.',
    fullDescription: 'The VasuNiti CO–PO–PSO Mapping Engine eliminates chaotic spreadsheets by providing an intuitive, multi-dimensional matrix. Faculty members define course outcomes according to Revised Bloom’s Taxonomy, correlate them to PO1–PO12 and PSOs at levels 0, 1, 2, or 3, and document explicit mapping justifications required by NBA SAR Criterion 3.',
    category: 'Enterprise Suite',
    badge: 'Core OBE Engine',
    icon: 'Network',
    color: '#315FEA',
    order: 1,
    featured: true,
    capabilities: [
      'Multi-tier Bloom’s Taxonomy tagging (L1 Remember to L6 Create)',
      '12 Programme Outcomes (PO1-PO12) & custom PSO alignment',
      'Correlation levels: 0 (None), 1 (Low), 2 (Medium), 3 (High)',
      'Justification notes & rubric rationale per mapped cell',
      'Automated course-level and department-level average matrices',
      'Curriculum change history & revision tracking'
    ],
    features: [
      {
        title: 'Interactive Correlation Matrix',
        description: 'Input mapping weights with instant visual heatmap indicators and calculated row/column averages.',
        icon: 'Grid',
        highlight: 'Automatic matrix normalization'
      },
      {
        title: 'Bloom’s Action Verb Library',
        description: 'Built-in taxonomy recommendations guide faculty to draft precise, measurable outcome statements.',
        icon: 'BookOpen',
        highlight: 'AICTE / Washington Accord aligned'
      },
      {
        title: 'Mapping Justification Logs',
        description: 'Attach contextual explanations to correlation values to demonstrate pedagogical intent during peer review audits.',
        icon: 'FileText',
        highlight: 'NBA Criterion 3 compliant'
      },
      {
        title: 'Batch & Regulation Versioning',
        description: 'Maintain distinct mapping schemes across autonomous, affiliated, and CBCS/NEP syllabus revisions.',
        icon: 'Layers',
        highlight: 'Zero data overwriting across batches'
      }
    ],
    benefits: [
      {
        metric: '100%',
        label: 'Traceable Outcome Alignment',
        detail: 'Every single assessment question links directly to validated course learning outcomes.'
      },
      {
        metric: 'Zero',
        label: 'Spreadsheet Calculation Errors',
        detail: 'Eliminates formula inconsistencies and broken links across departmental Excel files.'
      }
    ],
    faqs: [
      {
        question: 'How are correlation values defined?',
        answer: 'Values follow standard NBA guidelines: 0 = No correlation, 1 = Slight/Low (up to 30% contribution), 2 = Moderate/Medium (30-60%), and 3 = Substantial/High (>60% contribution).'
      },
      {
        question: 'Can we define custom PSOs for emerging specializations?',
        answer: 'Yes. Departments can define unlimited Programme-Specific Outcomes (e.g., PSO1, PSO2 for AI & Machine Learning, Robotics, etc.).'
      }
    ],
    specs: {
      deployment: 'Cloud SaaS / On-Premise Campus Option',
      compliance: 'NBA SAR & NAAC SSR Format Aligned',
      availability: '99.9% Uptime Guarantee',
      apiSupport: 'University ERP & LMS Data Ingestion'
    }
  },
  {
    slug: 'outcome-attainment-analytics',
    name: 'Outcome Attainment & Analytics Suite',
    tagline: 'Automated Direct & Indirect Attainment Computation',
    shortDescription: 'Compute accurate course outcome attainment from internal assessments, semester exams, and indirect exit surveys against institutional target benchmarks.',
    fullDescription: 'Say goodbye to error-prone manual calculations. VasuNiti automatically ingests student marks, maps question-level scores to specific COs, applies direct and indirect weighting (e.g., 80:20), and benchmarks attainment against institutional targets with instant variance identification.',
    category: 'Data & Intelligence',
    badge: 'Analytical Precision',
    icon: 'BarChart3',
    color: '#14213D',
    order: 2,
    featured: true,
    capabilities: [
      'Question-to-CO mark distribution and scoring',
      'Continuous Internal Evaluation (CIE) direct attainment',
      'Semester End Examination (SEE) grade integration',
      'Course Exit Survey (CES) indirect attainment conversion',
      'Target threshold benchmarking (e.g., 60% of students scoring > 60%)',
      'Multi-year outcome attainment trend analysis'
    ],
    features: [
      {
        title: 'Direct Attainment Calculation',
        description: 'Automated evaluation from unit tests, mid-terms, quizzes, and laboratory practical rubrics.',
        icon: 'Calculator',
        highlight: 'Configurable rubric levels 1, 2, and 3'
      },
      {
        title: 'Indirect Attainment Surveys',
        description: 'Built-in student course exit surveys converted into quantifiable indirect attainment scores.',
        icon: 'PieChart',
        highlight: 'Automated Likert-scale normalization'
      },
      {
        title: 'Target vs. Actual Gap Analysis',
        description: 'Visual alerts immediately flag outcomes where student attainment falls below the set target threshold.',
        icon: 'AlertTriangle',
        highlight: 'Actionable CQI recommendations'
      },
      {
        title: 'Batch Attainment Summaries',
        description: 'Consolidate 4-year undergraduate and 2-year postgraduate attainment for graduating cohorts.',
        icon: 'TrendingUp',
        highlight: 'Graduating batch attainment curves'
      }
    ],
    benefits: [
      {
        metric: '85%',
        label: 'Reduction in Calculation Time',
        detail: 'Automate complex mark weighting formulas across thousands of student exam answer sheets.'
      },
      {
        metric: '100%',
        label: 'Auditable Calculation Logic',
        detail: 'Every attainment score provides an inspectable drill-down into source assessment questions.'
      }
    ],
    faqs: [
      {
        question: 'Can colleges configure their own target benchmark percentages?',
        answer: 'Yes. Institutions can set custom targets (e.g., target 70% threshold, target 65% attainment) per course or department.'
      },
      {
        question: 'What direct-to-indirect weighting ratios are supported?',
        answer: 'Any ratio can be configured. Common standards include 80% Direct + 20% Indirect, or 70% Direct + 30% Indirect.'
      }
    ],
    specs: {
      deployment: 'Secure Institutional Cloud',
      compliance: 'Outcome-Based Education Standard',
      availability: '99.9% High Availability',
      apiSupport: 'CSV / Excel Bulk Import & REST APIs'
    }
  },
  {
    slug: 'academic-reporting-suite',
    name: 'NBA & NAAC Academic Reporting Suite',
    tagline: 'Audit-Ready Reports and Institutional Dossiers',
    shortDescription: 'Generate standardized, committee-ready CO–PO mapping summaries, attainment dossiers, and continuous quality improvement records in seconds.',
    fullDescription: 'Transform months of frantic accreditation preparation into a continuous, effortless workflow. VasuNiti synthesizes course data, faculty mappings, student assessments, and department reviews into audit-ready PDF and Excel dossiers formatted for NBA SAR Criterion 2 & 3 and NAAC Criterion 1 & 2.6.',
    category: 'Security & Compliance',
    badge: 'Accreditation Readiness',
    icon: 'FileCheck',
    color: '#4F7CFF',
    order: 3,
    featured: true,
    capabilities: [
      'One-click NBA Criterion 3.1, 3.2, and 3.3 summary tables',
      'NAAC Criterion 2.6.1 & 2.6.2 learning outcome reports',
      'Departmental Programme Outcome attainment profiles',
      'Continuous Quality Improvement (CQI) action records',
      'Export to formatted PDF dossiers and Excel workbooks',
      'Digitally signed academic approvals & audit trails'
    ],
    features: [
      {
        title: 'SAR-Aligned Matrix Exporter',
        description: 'Export Course-to-PO correlation tables with the exact column formatting required by accreditation manuals.',
        icon: 'Download',
        highlight: 'Ready for print & committee binder'
      },
      {
        title: 'Attainment Differential Graphs',
        description: 'High-contrast bar charts comparing attainment over 3 consecutive academic years.',
        icon: 'BarChart2',
        highlight: 'Visually compelling audit presentations'
      },
      {
        title: 'Continuous Quality Improvement (CQI)',
        description: 'Track documented faculty actions for weak outcomes and verify if improvement occurred next term.',
        icon: 'RefreshCw',
        highlight: 'Closed-loop pedagogical feedback'
      },
      {
        title: 'Institutional Archival System',
        description: 'Store multi-year academic records with immutable timestamps for re-accreditation cycles.',
        icon: 'Archive',
        highlight: '5-year historical preservation'
      }
    ],
    benefits: [
      {
        metric: '70%+',
        label: 'Less Documentation Stress',
        detail: 'Eliminate eleventh-hour panic before accreditation committee peer visits.'
      },
      {
        metric: '100%',
        label: 'Transparent Audit Traceability',
        detail: 'Instantly retrieve question papers and rubrics supporting any reported figure.'
      }
    ],
    faqs: [
      {
        question: 'Does VasuNiti guarantee accreditation approval?',
        answer: 'No software can guarantee accreditation. VasuNiti provides the rigorous data organization, calculation infrastructure, and report generation that supports institutional quality assurance workflows.'
      }
    ],
    specs: {
      deployment: 'Enterprise Cloud',
      compliance: 'Aligned to NBA Tier-I & Tier-II manuals',
      availability: '99.95% Enterprise SLA',
      apiSupport: 'Export to PDF, XLSX, and JSON'
    }
  },
  {
    slug: 'evidence-vault',
    name: 'Digital Course File & Evidence Vault',
    tagline: 'Structured Repository for Academic Records & Rubrics',
    shortDescription: 'Organize course files, question papers tagged to COs, evaluation rubrics, and sample student answer scripts in a tamper-proof digital archive.',
    fullDescription: 'Say goodbye to dusty physical ring-binders and scattered Google Drive folders. The VasuNiti Digital Course File & Evidence Vault provides a structured, role-governed digital folder for every course offering—linking syllabus, lesson plans, question papers, rubrics, and high/average/low sample scripts directly to course outcomes.',
    category: 'Workflow & Automation',
    badge: 'Digital Governance',
    icon: 'FolderArchive',
    color: '#16A34A',
    order: 4,
    featured: false,
    capabilities: [
      'Digital Course File 14-item standard checklist',
      'Direct linking of question papers to Bloom’s levels & COs',
      'Rubrics for laboratory experiments, mini-projects, and seminars',
      'Sample answer script digital repository (High, Average, Low)',
      'HOD review and digital sign-off workflow',
      'Secure encrypted cloud storage with role-based permissions'
    ],
    features: [
      {
        title: 'Standardized Course File Structure',
        description: 'Pre-built templates conforming to institutional IQAC quality audit standards.',
        icon: 'CheckSquare',
        highlight: 'Complete syllabus-to-exam dossier'
      },
      {
        title: 'Question Paper Quality Audit',
        description: 'Verify Bloom’s taxonomy distribution and CO coverage across internal question papers.',
        icon: 'Sliders',
        highlight: 'Balanced assessment verification'
      },
      {
        title: 'Rubrics Engine',
        description: 'Define clear multi-level rubrics for lab practicals, capstone projects, and presentations.',
        icon: 'Award',
        highlight: 'Objective qualitative assessment'
      },
      {
        title: 'HOD Approval Workflow',
        description: 'Formal digital sign-off and feedback loop between department heads and course instructors.',
        icon: 'UserCheck',
        highlight: 'Built-in revision requests'
      }
    ],
    benefits: [
      {
        metric: '100%',
        label: 'Digitized Course Records',
        detail: 'Replace heavy physical folders with searchable, structured digital portfolios.'
      },
      {
        metric: 'Instant',
        label: 'Peer Review Verification',
        detail: 'Audit committees can inspect any sample script or rubric with a single click.'
      }
    ],
    faqs: [
      {
        question: 'Can our college customize the course file checklist?',
        answer: 'Yes. Academic administrators can tailor the checklist items (e.g., adding lab manuals, guest lecture reports, or remedial class logs) to match institutional IQAC guidelines.'
      }
    ],
    specs: {
      deployment: 'High-Durability Cloud Object Storage',
      compliance: 'Encrypted in transit and at rest',
      availability: '99.9% Uptime',
      apiSupport: 'Direct PDF, DOCX, and Scan upload'
    }
  }
];
