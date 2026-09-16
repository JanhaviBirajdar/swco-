import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../data/companyData';
import { Badge } from '../common/Badge';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-light-surface/40 dark:bg-dark-card/20 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="mb-3">
            Enterprise Impact
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Trusted by Engineering & Operations Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Discover how global organizations use VasuNiti software to scale infrastructure and automate business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-extrabold text-brand-500 dark:text-brand-400">
                      {item.metric}
                    </span>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                  {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}, <span className="text-brand-600 dark:text-brand-400 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
