import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileCheck2, FolderCheck, ShieldAlert, CheckCircle2, ArrowUpRight, Scale } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

export const AccreditationSupportSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const records = [
    {
      title: 'CO–PO Mapping Records with Justifications',
      description: 'Document correlation weights (1, 2, 3) alongside explicit pedagogical justifications required for NBA Criterion 3.1 and NAAC Criterion 1.',
      criteria: 'NBA Criterion 3.1 • NAAC 1.1',
    },
    {
      title: 'Multi-Component Attainment Summaries',
      description: 'Consolidate direct continuous internal evaluations (CIE), semester exams, and indirect course exit surveys into auditable matrices.',
      criteria: 'NBA Criterion 3.2 • NAAC 2.6.2',
    },
    {
      title: 'Organized Digital Academic Evidence',
      description: 'Store syllabus copies, question papers mapped to COs with Bloom’s taxonomy levels, evaluation rubrics, and high/average/low sample scripts.',
      criteria: 'NBA Criterion 2.2 • NAAC 2.5',
    },
    {
      title: 'Departmental Reviews & Benchmarking',
      description: 'Review batch-wise attainment trends over 3 consecutive graduating cohorts with target-versus-actual variance analytics.',
      criteria: 'NBA Criterion 3.3 • IQAC Annual Reports',
    },
    {
      title: 'Continuous Quality Improvement (CQI) Records',
      description: 'Maintain formal action-taken logs for course outcomes falling below benchmark thresholds, demonstrating closed-loop academic governance.',
      criteria: 'NBA Criterion 7 • NAAC IQAC Minutes',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#070C18] border-b border-slate-200/90 dark:border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Accreditation & Institutional Quality
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Support Your Institution's Quality Assurance Journey.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            VasuNiti provides structured records, verified calculations, and standardized dossiers that support institutional preparation for NBA and NAAC accreditation reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 5 Structured Outcome Records (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            {records.map((rec, idx) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.07 }}
                className="rounded-xl bg-white dark:bg-[#0E1526] p-5 border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex items-start gap-4 hover:border-indigo-400 dark:hover:border-indigo-500/40 hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100 dark:border-blue-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {rec.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#131C31] text-slate-600 dark:text-slate-300 font-semibold border border-slate-200/60 dark:border-white/[0.06]">
                      {rec.criteria}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Accreditation Context & Factual Disclaimer (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* NBA & NAAC Pillar Card */}
            <div className="rounded-2xl bg-white dark:bg-[#0E1526] p-6 border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                    Workflow-Aligned Documentation
                  </h3>
                  <span className="text-xs text-slate-500">Supporting Higher Education Standards</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.06]">
                  <strong className="text-slate-900 dark:text-white block mb-0.5 font-semibold">NBA Tier-I & Tier-II SAR Support:</strong>
                  Focuses on Criterion 3 (Course Outcomes and Programme Outcomes), Criterion 2 (Teaching-Learning Practices), and continuous curricular improvement.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.06]">
                  <strong className="text-slate-900 dark:text-white block mb-0.5 font-semibold">NAAC SSR Support:</strong>
                  Focuses on Criterion 1 (Curricular Aspects) and Criterion 2.6 (Student Performance and Learning Outcomes) with transparent calculation mechanisms.
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Request Accreditation Support Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mandatory Factual Disclaimer Required by Master Prompt */}
            <div className="rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 p-4 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
              <Scale className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <div>
                <strong className="block font-semibold mb-1">Accreditation Advisory Note:</strong>
                VasuNiti software assists higher education institutions in organizing, calculating, and presenting academic outcome data; it does not guarantee NBA or NAAC accreditation, compliance, or official approval. Accreditation decisions rest solely with the respective statutory accrediting bodies.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
