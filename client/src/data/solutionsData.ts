import { Solution } from '../types';

export const solutionsData: Solution[] = [
  {
    id: 'sol-1',
    slug: 'engineering-obe-transformation',
    title: 'Autonomous Colleges & University OBE Transformation',
    tagline: 'Implement a comprehensive Outcome-Based Education system with zero spreadsheet friction.',
    category: 'Curriculum & Governance',
    description: 'Transition your autonomous or affiliated engineering institution from syllabus-focused tracking to a living Outcome-Based Education framework aligned with AICTE and Washington Accord benchmarks.',
    targetAudience: 'Principals, Deans of Academics, Curriculum Chairs',
    icon: 'GraduationCap',
    color: '#315FEA',
    keyOutcomes: [
      'Standardized Bloom’s-compliant Course Outcomes across all departments',
      'Systematic correlation to 12 National Graduate Attributes (PO1–PO12)',
      'Automated batch progression and curriculum revision versioning',
      'Unified institutional governance cockpit for academic review committees'
    ],
    technologies: ['VasuNiti Mapping Engine', 'Attainment Matrix', 'Multi-tenant College Hierarchy', 'Role-Based Access Control'],
    caseStudySnippet: {
      clientType: 'Autonomous Engineering College (Pune)',
      result: 'Standardized CO–PO correlation and question rubrics across 9 engineering departments for 4,200 students.',
      impact: '100% digital course file compliance before academic peer review'
    }
  },
  {
    id: 'sol-2',
    slug: 'nba-naac-accreditation-readiness',
    title: 'IQAC, NBA & NAAC Accreditation Workflow Support',
    tagline: 'Produce audit-ready outcome attainment dossiers and eliminate eleventh-hour document panic.',
    category: 'Accreditation & Quality Assurance',
    description: 'Structure, calculate, and document outcome attainment for NBA SAR Criterion 2 & 3 and NAAC Criterion 1 & 2.6 with verified calculation logic, qualitative rubrics, and continuous quality improvement records.',
    targetAudience: 'IQAC Coordinators, NBA / NAAC Steering Committee Heads',
    icon: 'Award',
    color: '#14213D',
    keyOutcomes: [
      'Exportable SAR-ready Course-PO mapping tables and attainment matrices',
      'Consolidated multi-year attainment profiles (3 consecutive graduating batches)',
      'Traceable drill-down from macro attainment scores to individual exam questions',
      'Closed-loop Continuous Quality Improvement (CQI) documentation'
    ],
    technologies: ['NBA Criterion 3 Generator', 'NAAC 2.6 Dossier Builder', 'Attainment Variance Engine'],
    caseStudySnippet: {
      clientType: 'State University Affiliated College (Karnataka)',
      result: 'Streamlined documentation for 5 eligible engineering programmes during their NBA re-accreditation cycle.',
      impact: 'Eliminated manual calculation errors across 350+ semester course offerings'
    }
  },
  {
    id: 'sol-3',
    slug: 'hod-faculty-outcome-automation',
    title: 'HOD & Faculty Workload Reduction',
    tagline: 'Replace complex Excel sheets with fast, intuitive course mapping and attainment tools.',
    category: 'Faculty Experience',
    description: 'Empower teaching faculty with quick matrix inputs, Bloom’s taxonomy verb suggestions, question-to-CO tagging, and automated exit survey computation so they can focus on classroom instruction.',
    targetAudience: 'Heads of Departments (HODs), Professors, Assistant Professors',
    icon: 'Users',
    color: '#4F7CFF',
    keyOutcomes: [
      'Effortless question-paper rubric creation with Bloom’s level distribution',
      'Direct calculation from continuous internal evaluation (CIE) and semester exams',
      'Built-in digital course exit surveys converted into indirect attainment',
      'Immediate identification of students needing remedial attention'
    ],
    technologies: ['Faculty Portal', 'Bloom’s Taxonomy Assistant', 'Automated Mark Ingestion', 'Course File Vault'],
    caseStudySnippet: {
      clientType: 'Department of Computer Science & Engineering',
      result: 'Reduced semester-end attainment computation time from 3 weeks of manual work to under 2 hours per faculty.',
      impact: 'Faculty satisfaction increased with zero broken Excel formulas'
    }
  },
  {
    id: 'sol-4',
    slug: 'digital-course-file-evidence',
    title: 'Digital Course File & Evidence Management',
    tagline: 'Centralize syllabi, rubrics, question papers, and sample scripts in a secure digital vault.',
    category: 'Evidence & Records',
    description: 'Replace bulky paper ring binders with structured, tamper-proof digital course files. Link lesson plans, evaluation rubrics, and high/average/low sample answer scripts directly to individual course outcomes.',
    targetAudience: 'Academic Audit Committees, Department Quality Champions, Library & Records',
    icon: 'FolderCheck',
    color: '#16A34A',
    keyOutcomes: [
      'Standardized 14-item IQAC course file checklist with progress tracking',
      'Digital preservation of sample evaluated scripts (High, Average, Low bands)',
      'Direct correlation between exam question papers and syllabus modules',
      'One-click dossier compilation for external peer committee review visits'
    ],
    technologies: ['Encrypted Evidence Vault', 'Rubric Digitizer', 'Batch Archival Storage'],
    caseStudySnippet: {
      clientType: 'Polytechnic & Engineering Institute',
      result: 'Digitized over 1,200 course binders across 6 semesters, saving over 45,000 sheets of paper and audit prep hours.',
      impact: 'Instant searchability during internal academic audits'
    }
  }
];
