import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Layers, Calculator, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

export const ProblemsSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const problems = [
    {
      icon: FileSpreadsheet,
      title: 'Repetitive Spreadsheet-Based Mapping',
      description:
        'Faculty maintain disconnected Excel files across dozens of courses. Inconsistent correlation scales, broken formulas, and version conflicts turn simple matrix updates into frustrating administrative chores.',
      impact: 'High risk of formula errors across departmental files',
    },
    {
      icon: Layers,
      title: 'Difficulty Consolidating Departmental Data',
      description:
        'IQAC coordinators and HODs spend weeks chasing individual faculty members to collect course files, mapping sheets, and assessment rubrics before external audits.',
      impact: 'Departmental silos delay institutional compliance reviews',
    },
    {
      icon: Calculator,
      title: 'Manual Attainment Calculations & Reviews',
      description:
        'Weighting question-level marks against Bloom’s taxonomy levels, factoring in internal tests versus university exams, and calculating survey percentages requires tedious manual number-crunching.',
      impact: 'Complex calculations prone to inadvertent calculation errors',
    },
    {
      icon: Clock,
      title: 'Time-Consuming Academic Documentation',
      description:
        'Compiling course exit surveys, sample high-medium-low student answer scripts, and continuous quality improvement (CQI) documentation creates eleventh-hour panic before peer visits.',
      impact: 'Disrupts classroom teaching and research responsibilities',
    },
    {
      icon: AlertTriangle,
      title: 'Difficulty Identifying Gaps in Outcome Attainment',
      description:
        'Without centralized analytics, academic leaders struggle to see which specific course outcomes consistently fell short of target benchmarks, hindering closed-loop curricular improvements.',
      impact: 'Blind spots prevent timely remedial pedagogical actions',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070C18] border-y border-slate-200/90 dark:border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-200/80 dark:border-rose-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Institutional Challenges
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Academic Outcome Management Shouldn't Be Complicated.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Engineering colleges and higher education institutions face recurring operational bottlenecks when managing outcome-based curriculum workflows with spreadsheets and physical binders.
          </p>
        </div>

        {/* 5 Clean Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            const tints = [
              { bg: 'bg-rose-50 dark:bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200/70 dark:border-rose-500/20', dot: 'bg-rose-500' },
              { bg: 'bg-amber-50 dark:bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200/70 dark:border-amber-500/20', dot: 'bg-amber-500' },
              { bg: 'bg-violet-50 dark:bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-200/70 dark:border-violet-500/20', dot: 'bg-violet-500' },
              { bg: 'bg-sky-50 dark:bg-sky-500/10', text: 'text-sky-600 dark:text-sky-400', border: 'border-sky-200/70 dark:border-sky-500/20', dot: 'bg-sky-500' },
              { bg: 'bg-emerald-50 dark:bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200/70 dark:border-emerald-500/20', dot: 'bg-emerald-500' },
            ];
            const tint = tints[idx % tints.length];

            return (
              <motion.div
                key={prob.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`rounded-2xl bg-white dark:bg-[#0E1526] p-6 border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/[0.18] transition-all flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${tint.bg} ${tint.text} flex items-center justify-center mb-5 border ${tint.border} shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className={`w-1.5 h-1.5 rounded-full ${tint.dot} flex-shrink-0`} />
                  <span>{prob.impact}</span>
                </div>
              </motion.div>
            );
          })}

          {/* Action Card — Centerpiece "The VasuNiti Way" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="rounded-2xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white p-6 border border-indigo-500/30 shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-1 relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/30 border border-white/20">
                <span className="font-display font-extrabold text-base tracking-tight text-white flex items-center">
                  V<span className="text-cyan-300">N</span>
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2.5">
                The VasuNiti Way
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Replace fragmented spreadsheets with a single, collaborative institutional platform built specifically for higher-ed outcome-based education.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-white/10 relative z-10">
              <button
                type="button"
                onClick={openDemoModal}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold text-xs transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
              >
                <span>See the Difference in a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
