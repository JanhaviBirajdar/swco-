import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Layers, Bot, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { solutionsData } from '../data/solutionsData';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const SolutionsPage: React.FC = () => {
  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Bot': return <Bot className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Solutions & Enterprise Architecture — VasuNiti"
        description="Explore VasuNiti's enterprise solutions: Enterprise Modernization, Intelligent Automation, Real-time Data Fabric, and Mission-Critical Cloud Resilience."
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="brand" className="mb-3">
              Strategic Solutions
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Transformation Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Architectural blueprints designed to solve high-stakes technical bottlenecks across operations, data, and cloud infrastructure.
            </p>
          </div>

          {/* Solutions Stack */}
          <div className="space-y-12">
            {solutionsData.map((sol, index) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
                  style={{ backgroundColor: sol.color }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left solution details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-2xl flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: sol.color }}
                      >
                        {getSolutionIcon(sol.icon)}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-medium text-brand-600 dark:text-brand-400">
                          {sol.category}
                        </span>
                        <div className="text-[11px] text-slate-400">
                          Target: {sol.targetAudience}
                        </div>
                      </div>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {sol.title}
                    </h2>

                    <p className="text-sm sm:text-base text-brand-600 dark:text-brand-400 font-medium">
                      {sol.tagline}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Key Outcomes */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Architectural Outcomes
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sol.keyOutcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {sol.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Case Study Snippet */}
                  <div className="lg:col-span-5 h-full flex flex-col justify-between">
                    <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-bg/80 border border-black/5 dark:border-white/5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase text-brand-600 dark:text-brand-400 font-semibold">
                          Verified Case Study
                        </span>
                        <span className="text-xs font-mono text-emerald-500 font-bold">
                          {sol.caseStudySnippet.impact}
                        </span>
                      </div>

                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {sol.caseStudySnippet.clientType}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                        "{sol.caseStudySnippet.result}"
                      </p>
                    </div>

                    <div className="pt-6">
                      <Link to="/contact">
                        <Button variant="primary" className="w-full" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                          Consult on this Solution
                        </Button>
                      </Link>
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
