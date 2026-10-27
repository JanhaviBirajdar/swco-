import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Network, Calculator, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

export const HowItWorksSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const steps = [
    {
      num: '01',
      title: 'Define Outcomes',
      subtitle: 'Course & Programme Structuring',
      description:
        'Faculty and academic committees formulate measurable Course Outcomes aligned with Revised Bloom’s Taxonomy levels (L1–L6) and associate assessment rubrics.',
      icon: BookOpen,
      deliverable: 'Standardized course outcome statements & Bloom’s tags',
    },
    {
      num: '02',
      title: 'Map Outcomes',
      subtitle: 'Matrix Correlation & Rubrics',
      description:
        'Establish weighted correlation matrices connecting COs to 12 Programme Outcomes and PSOs using 0, 1, 2, or 3 scales with mandatory qualitative justifications.',
      icon: Network,
      deliverable: 'Auditable CO–PO–PSO mapping matrix with justifications',
    },
    {
      num: '03',
      title: 'Measure Attainment',
      subtitle: 'Direct & Indirect Evaluation',
      description:
        'Ingest continuous internal evaluation (CIE), semester examination results, and student course exit surveys (CES) to calculate weighted attainment scores against targets.',
      icon: Calculator,
      deliverable: 'Multi-component attainment scores & threshold analysis',
    },
    {
      num: '04',
      title: 'Review and Improve',
      subtitle: 'CQI & Audit Dossiers',
      description:
        'Identify outcomes falling below benchmarks, formulate Continuous Quality Improvement (CQI) pedagogical interventions, and export committee-ready dossiers.',
      icon: RefreshCw,
      deliverable: 'NBA SAR Criterion 3 & NAAC 2.6 compliant records',
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-24 bg-white dark:bg-[#050814] border-b border-slate-200/90 dark:border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Standard OBE Workflow
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            From Course Outcomes to Meaningful Academic Insights.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A clear, four-stage progressive framework that operationalizes Outcome-Based Education across all academic departments.
          </p>
        </div>

        {/* 4 Connected Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="relative rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-indigo-400/80 dark:hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    {/* Step Number & Icon Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#131C31] text-blue-600 dark:text-blue-400 shadow-xs flex items-center justify-center border border-slate-200/80 dark:border-white/[0.08] group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl font-extrabold text-slate-300 dark:text-slate-700">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/[0.06] text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{step.deliverable}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Workflow Action Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white border border-indigo-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
          <div className="text-center sm:text-left relative z-10">
            <h4 className="font-display font-bold text-base text-white">
              Ready to standardize this workflow in your institution?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              VasuNiti provides full onboarding and faculty training to adapt your existing syllabi schemes.
            </p>
          </div>
          <button
            type="button"
            onClick={openDemoModal}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 hover:from-blue-400 hover:to-indigo-400 text-white text-xs font-semibold transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-1.5 flex-shrink-0 relative z-10"
          >
            <span>Book a Guided Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
