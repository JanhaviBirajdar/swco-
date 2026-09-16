import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Clock } from 'lucide-react';
import { companyData } from '../../data/companyData';

export const TrustMetrics: React.FC = () => {
  const metricIcons = [
    <Layers className="w-5 h-5 text-brand-500" />,
    <Zap className="w-5 h-5 text-cyan-500" />,
    <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    <Clock className="w-5 h-5 text-indigo-500" />
  ];

  return (
    <section className="relative py-20 border-y border-black/[0.06] dark:border-white/[0.06] bg-light-surface/40 dark:bg-dark-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-3 inline-block">
            Technology With Purpose
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            VasuNiti combines engineering, design, and business thinking to create software products that solve real-world problems.
          </h2>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-dark-card/90 border border-black/[0.08] dark:border-white/[0.08] hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-300 shadow-sm hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-xl group-hover:bg-brand-500/15 transition-colors" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:scale-110 transition-transform">
                  {metricIcons[idx] || <Layers className="w-5 h-5 text-brand-500" />}
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500">
                  Verified SLA
                </span>
              </div>

              <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                {stat.value}
              </div>

              <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">
                {stat.label}
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
