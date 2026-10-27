import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, GraduationCap, Award, Users, FolderCheck, BookOpen, ChevronRight } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import { SEOHead } from '../components/common/SEOHead';
import { useDemoModal } from '../context/DemoModalContext';

export const SolutionsPage: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'FolderCheck': return <FolderCheck className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Institutional Solutions — VasuNiti Outcome-Based Education Software"
        description="Comprehensive OBE solutions for Autonomous Colleges, Universities, IQAC Accreditation Teams, and Academic Faculty."
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              Institutional Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Purpose-Built for <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">Higher Education</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Tailored academic frameworks designed to simplify outcome management, empower faculty, and support accreditation workflows across departments.
            </p>
          </div>

          {/* Solutions Stack */}
          <div className="space-y-12">
            {solutionsData.map((sol, index) => (
              <motion.div
                key={sol.id}
                id={sol.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:shadow-xl dark:hover:border-indigo-500/30 transition-all relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left solution details (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#131C31] text-blue-600 dark:text-blue-400 border border-slate-200/90 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                        {getSolutionIcon(sol.icon)}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          {sol.category}
                        </span>
                        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                          {sol.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 leading-snug">
                      {sol.tagline}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Key Outcomes */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">
                        Key Deliverables & Workflows
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sol.keyOutcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium">Audience:</span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white dark:bg-[#131C31] border border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-sm">
                        {sol.targetAudience}
                      </span>
                    </div>
                  </div>

                  {/* Right impact card (5 cols) */}
                  <div className="lg:col-span-5 bg-white dark:bg-[#131C31] rounded-2xl border border-slate-200/90 dark:border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between h-full shadow-md">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Institutional Case Context
                      </div>
                      <div className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                        {sol.caseStudySnippet.clientType}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {sol.caseStudySnippet.result}
                      </p>
                      <div className="p-3.5 bg-emerald-50/90 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-800/40 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                        Institutional Impact: {sol.caseStudySnippet.impact}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                      <button
                        type="button"
                        onClick={openDemoModal}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
                      >
                        <span>Schedule a Demonstration for this Solution</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
