import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../../data/companyData';
import { Badge } from '../common/Badge';
import { InfiniteMovingCards } from '../aceternity/InfiniteMovingCards';

export const TechStack: React.FC = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <Badge variant="brand" className="mb-3">
          Modern Engineering Stack
        </Badge>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Built With Modern Technology
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          We leverage the latest resilient web and cloud primitives to deliver high concurrency, strict type safety, and sub-millisecond execution.
        </p>
      </div>

      {/* Infinite Moving Cards Row 1 */}
      <div className="py-2">
        <InfiniteMovingCards items={companyData.techStack} direction="left" speed="normal" />
      </div>

      {/* Infinite Moving Cards Row 2 (Reverse) */}
      <div className="py-2">
        <InfiniteMovingCards items={companyData.techStack} direction="right" speed="normal" />
      </div>

      {/* Interactive Tech Grid Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {companyData.techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 rounded-2xl bg-light-surface dark:bg-dark-card/60 border border-black/5 dark:border-white/5 hover:border-brand-500/40 transition-all text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-brand-500 transition-colors">
                  {tech.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-500/40 group-hover:bg-brand-500" />
              </div>
              <div className="text-[11px] font-mono text-brand-600 dark:text-brand-400 mb-1">
                {tech.category}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
