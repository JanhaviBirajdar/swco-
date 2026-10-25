import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, FolderKanban, Check, ArrowRight } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

export const StakeholderBenefitsSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const stakeholders = [
    {
      title: 'College Leadership & Deans',
      role: 'Executive Academic Governance',
      description:
        'Gain real-time institutional visibility into outcome attainment across all engineering departments, identifying academic strengths and gap areas without waiting for manual reports.',
      icon: Building2,
      points: [
        'College-wide dashboard with cross-department benchmarking',
        'Target-versus-actual attainment variance indicators',
        'Objective data for Governing Councils and Academic Advisory boards',
      ],
    },
    {
      title: 'IQAC & Accreditation Teams',
      role: 'Standardized Quality Assurance',
      description:
        'Access structured academic information, standardized data formats, and verified calculation logic aligned with NBA SAR Criterion 2 & 3 and NAAC Criterion 1 & 2.6.',
      icon: Award,
      points: [
        'Exportable SAR-ready mapping and attainment matrices',
        'Centralized digital evidence repository for audit visits',
        'Eliminates formula inconsistencies and calculation errors',
      ],
    },
    {
      title: 'HODs and Faculty Members',
      role: 'Effortless Course Management',
      description:
        'Enjoy fast, intuitive access to course outcomes, mapping matrices, and automated attainment calculations—freeing up valuable time for classroom teaching and student mentoring.',
      icon: Users,
      points: [
        'Intuitive matrix editor with correlation weights 1, 2, and 3',
        'Question-to-CO mapping with Bloom’s taxonomy levels',
        'Automated Course Exit Survey analysis for indirect attainment',
      ],
    },
    {
      title: 'Academic Coordinators',
      role: 'Curriculum & Programme Oversight',
      description:
        'Coordinate programme-level academic reviews across sections, track syllabus revisions across batches, and maintain multi-year attainment records with complete audit trails.',
      icon: FolderKanban,
      points: [
        'Batch-wise and semester-wise attainment progression tracking',
        'Continuous Quality Improvement (CQI) action monitoring',
        'Unified course file compliance checklists',
      ],
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#050814] border-b border-slate-200/90 dark:border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Institutional Stakeholders
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Who Benefits from VasuNiti?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Designed to bring clarity, collaboration, and measurable efficiency to every tier of academic administration.
          </p>
        </div>

        {/* 4 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stakeholders.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-indigo-400/80 dark:hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#131C31] text-blue-600 dark:text-blue-400 shadow-xs flex items-center justify-center border border-slate-200/80 dark:border-white/[0.08] group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {s.title}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {s.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60 dark:border-white/[0.06]">
                    {s.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/[0.06]">
                  <button
                    type="button"
                    onClick={openDemoModal}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request a role-specific demonstration</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
