import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, BarChart3, FileText, FolderArchive, ArrowUpRight, Check, Eye, Download, Info } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

export const ProductScreenshotsSection: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const [activeTab, setActiveTab] = useState<'matrix' | 'attainment' | 'reports' | 'evidence'>('matrix');

  const tabs = [
    { id: 'matrix' as const, label: 'Mapping Matrix', icon: Layers },
    { id: 'attainment' as const, label: 'Attainment Engine', icon: BarChart3 },
    { id: 'reports' as const, label: 'Accreditation Reports', icon: FileText },
    { id: 'evidence' as const, label: 'Digital Course File', icon: FolderArchive },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#070C18] border-b border-slate-200/90 dark:border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Product Walkthrough
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            See How VasuNiti Fits Your Institution.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore key views from our outcome-based education software, designed for clarity, compliance, and departmental collaboration.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Screen Showcase Container */}
        <div className="bg-white dark:bg-[#0E1526] rounded-2xl border border-slate-200/90 dark:border-white/[0.08] shadow-2xl overflow-hidden p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'matrix' && (
              <motion.div
                key="matrix"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/[0.08]">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      Course Outcome to Programme Outcome (CO–PO–PSO) Matrix Editor
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Module: CS301 Database Systems • 2024-Scheme Autonomous Regulation
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> All 5 COs Mapped
                  </span>
                </div>

                {/* Mockup Preview Content */}
                <div className="p-4 bg-slate-50 dark:bg-[#131C31] rounded-2xl border border-slate-200/80 dark:border-white/[0.08] space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08]">
                      <span className="text-slate-400 block text-[11px]">Bloom's Level Distribution</span>
                      <strong className="text-slate-900 dark:text-white text-sm">L2: 20%, L3: 40%, L4: 40%</strong>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08]">
                      <span className="text-slate-400 block text-[11px]">Target Benchmark Threshold</span>
                      <strong className="text-slate-900 dark:text-white text-sm">60% marks scored by 65% students</strong>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08]">
                      <span className="text-slate-400 block text-[11px]">Mapping Justification Log</span>
                      <strong className="text-slate-900 dark:text-white text-sm">18 Documented Rationales</strong>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-300 p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center justify-between">
                    <span>Includes automated normalization to prevent subjective correlation inflation.</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs">NBA Criterion 3.1 Format Aligned</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'attainment' && (
              <motion.div
                key="attainment"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/[0.08]">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      Outcome Attainment Calculation Engine (Direct & Indirect)
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Ingests CIE Internal Tests, Assignment Rubrics, SEE University Exams & Course Exit Surveys
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold">
                    80% Direct : 20% Indirect
                  </span>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#131C31] rounded-2xl border border-slate-200/80 dark:border-white/[0.08] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-xs space-y-2">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">Direct Assessment Attainment (CIE + SEE)</div>
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">74.5%</div>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">Computed across 2 mid-term tests (30%), 3 quizzes (10%), lab rubrics (20%) and university exam (40%).</p>
                    </div>

                    <div className="p-4 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] text-xs space-y-2">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">Indirect Assessment Attainment (CES)</div>
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">82.0%</div>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">Normalized 5-point Likert scale responses from 68 enrolled students upon course completion.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center justify-between text-xs font-semibold">
                    <span>Combined Course Attainment Score:</span>
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">76.0% (Benchmark: 65.0% — Exceeded by 11.0%)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'reports' && (
              <motion.div
                key="reports"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/[0.08]">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      NBA Self-Assessment Report (SAR) & NAAC Dossier Generator
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Standardized tables for Criterion 3.1, 3.2, 3.3 and NAAC 2.6.2
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Committee Binder Ready
                  </span>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#131C31] rounded-2xl border border-slate-200/80 dark:border-white/[0.08] space-y-3">
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center justify-between">
                      <div>
                        <strong className="text-slate-900 dark:text-white block">Table B.3.1.b: Course-PO Mapping Matrix for all Courses</strong>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Includes all 1st through 8th semester core & professional elective courses.</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#131C31] text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200/60 dark:border-white/10">PDF / XLSX</span>
                    </div>

                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center justify-between">
                      <div>
                        <strong className="text-slate-900 dark:text-white block">Table B.3.3.b: Programme Outcome Attainment (3 Graduating Batches)</strong>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Comparative multi-year attainment with trend line visualization.</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#131C31] text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200/60 dark:border-white/10">PDF / XLSX</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'evidence' && (
              <motion.div
                key="evidence"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/[0.08]">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                      Digital Course File & Evidence Vault
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Standardized 14-Item Digital Dossier with Evaluation Rubrics & Sample Scripts
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">
                    100% Digitized Records
                  </span>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-[#131C31] rounded-2xl border border-slate-200/80 dark:border-white/[0.08] space-y-2 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Approved Syllabus & Lesson Plan
                    </div>
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Question Papers with Bloom's CO Tags
                    </div>
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Lab Rubrics & Assignment Briefs
                    </div>
                    <div className="p-3 bg-white dark:bg-[#0E1526] rounded-xl border border-slate-200/70 dark:border-white/[0.08] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Sample Scripts (High, Med, Low)
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action Ribbon */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span>Illustrative product mockups representing VasuNiti's software interfaces.</span>
            </div>

            <button
              type="button"
              onClick={openDemoModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <span>Schedule a Live Product Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
