import React from 'react';
import { motion } from 'framer-motion';
import { Network, BarChart3, FileCheck, Building2, FolderArchive, TrendingUp, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoModal } from '../../context/DemoModalContext';

export const SolutionsGrid: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const capabilities = [
    {
      id: 'feature-mapping',
      title: 'CO–PO–PSO Mapping',
      tag: 'Core Alignment',
      description:
        'Map course outcomes to national Programme Outcomes (PO1–PO12) and Programme-Specific Outcomes with standardized correlation weights (1, 2, or 3) and qualitative pedagogical justifications.',
      icon: Network,
      color: '#315FEA',
      visual: (
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 font-mono text-[11px] space-y-1.5">
          <div className="flex justify-between text-slate-500 font-sans font-semibold text-[10px]">
            <span>Outcome</span>
            <span>PO1</span>
            <span>PO2</span>
            <span>PO3</span>
            <span>PSO1</span>
          </div>
          <div className="flex justify-between items-center py-1 border-t border-slate-200/60 dark:border-slate-700">
            <span className="font-sans font-bold text-[#315FEA]">CO1: Algorithms</span>
            <span className="px-1.5 py-0.5 rounded bg-[#315FEA] text-white font-bold">3</span>
            <span className="px-1.5 py-0.5 rounded bg-[#bfd3fe] text-[#1b2f87]">2</span>
            <span className="px-1.5 py-0.5 rounded bg-[#eff4ff] text-[#315FEA]">1</span>
            <span className="px-1.5 py-0.5 rounded bg-[#315FEA] text-white font-bold">3</span>
          </div>
          <div className="text-[10px] text-slate-500 font-sans italic">
            Justification: "Direct application of asymptotic complexity analysis."
          </div>
        </div>
      ),
    },
    {
      id: 'feature-attainment',
      title: 'Outcome Attainment Analytics',
      tag: 'Mathematical Rigor',
      description:
        'Review direct attainment from continuous internal evaluations and semester exams, combined with indirect course exit surveys, measured against custom institutional benchmark targets.',
      icon: BarChart3,
      color: '#14213D',
      visual: (
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 text-[11px] space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-800 dark:text-slate-200">Overall Course Attainment</span>
            <span className="font-bold text-[#16A34A] text-sm">76.8%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div className="bg-[#315FEA] h-full rounded-full" style={{ width: '76.8%' }} />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>Direct (80% CIE+SEE): 74.2%</span>
            <span>Indirect (20% CES): 87.0%</span>
          </div>
        </div>
      ),
    },
    {
      id: 'feature-reporting',
      title: 'Academic Reporting',
      tag: 'Audit Ready',
      description:
        'Generate structured mapping summaries, attainment tables, and academic audit dossiers formatted to support NBA SAR Criterion 2 & 3 and NAAC Criterion 1 & 2.6 review preparation.',
      icon: FileCheck,
      color: '#4F7CFF',
      visual: (
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-800 dark:text-slate-200">NBA SAR Table 3.1</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-medium">Verified Format</span>
          </div>
          <div className="text-[11px] text-slate-600 dark:text-slate-400">
            Course-PO Correlation & Attainment Summary
          </div>
          <div className="flex gap-2 pt-1">
            <span className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
              PDF Dossier
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
              Excel Sheet
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'feature-departments',
      title: 'Department & Programme Management',
      tag: 'Multi-Tenant Governance',
      description:
        'Organize academic information across multiple engineering disciplines. Configure distinct regulations, course schemes, semester batches, and faculty course allocations from one hub.',
      icon: Building2,
      color: '#315FEA',
      visual: (
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1.5">
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Programmes</div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-800 dark:text-slate-200">B.Tech Computer Science</span>
              <span className="text-slate-500">Tier-I Autonomous</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-800 dark:text-slate-200">B.Tech Mechanical Engg</span>
              <span className="text-slate-500">CBCS Regulation</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'feature-evidence',
      title: 'Evidence Organization',
      tag: 'Digital Course Files',
      description:
        'Structure syllabi, question papers mapped to COs, evaluation rubrics, and sample student answer scripts in a standardized digital course file ready for peer committee inspection.',
      icon: FolderArchive,
      color: '#16A34A',
      visual: (
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-slate-800 dark:text-slate-200">Course File Checklist (14/14)</span>
            <span className="text-[#16A34A] font-bold">100%</span>
          </div>
          <div className="space-y-1 text-[10px] text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-[#16A34A]" /> Syllabus & Lesson Plan Attached
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3 h-3 text-[#16A34A]" /> CO-Mapped Question Papers & Rubrics
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'feature-insights',
      title: 'Academic Insights & CQI',
      tag: 'Continuous Improvement',
      description:
        'Visualize student attainment distributions to identify weak outcomes early. Formulate and document continuous quality improvement (CQI) actions to strengthen future academic cycles.',
      icon: TrendingUp,
      color: '#14213D',
      visual: (
        <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs space-y-1.5">
          <div className="flex justify-between items-center text-[11px]">
            <span className="font-semibold text-slate-800 dark:text-slate-200">CQI Remedial Actions</span>
            <span className="text-amber-600 font-semibold text-[10px]">1 Outcome Below Target</span>
          </div>
          <div className="text-[10px] text-slate-600 dark:text-slate-400 bg-amber-50 dark:bg-amber-950/30 p-1.5 rounded border border-amber-200/50">
            "CO3 attainment was 58% (Target 65%). Action: Introduce mandatory lab tutorial sessions."
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-[#050814] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Platform Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Everything You Need to Connect Teaching with Outcomes.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            VasuNiti connects curriculum design, examination assessments, and institutional quality assurance into a unified academic operating layer.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className="rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] p-6 shadow-sm hover:shadow-xl hover:border-indigo-400/80 dark:hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.08] px-2.5 py-1 rounded-full shadow-xs">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {cap.description}
                  </p>
                </div>

                <div>
                  {/* Custom visual mockup */}
                  <div className="mt-2 mb-4">
                    {cap.visual}
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/[0.06]">
                    <button
                      type="button"
                      onClick={openDemoModal}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-indigo-300 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                    >
                      <span>Explore this module</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
