import React from 'react';
import { motion } from 'framer-motion';
import { Maximize, HeartHandshake, Cpu, Shield, Sparkles, Users } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { Badge } from '../common/Badge';

export const WhyVasuNiti: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize': return <Maximize className="w-5 h-5 text-brand-500" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-indigo-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Users': return <Users className="w-5 h-5 text-violet-500" />;
      default: return <Cpu className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section className="relative py-28 bg-light-surface/50 dark:bg-dark-card/40 border-t border-black/[0.06] dark:border-white/[0.06]" id="why-vasuniti">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <Badge variant="cyan" className="mb-3">
            Core Philosophy
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why VasuNiti
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We reject the dogma of temporary fixes and slow enterprise bureaucracy. Every system we build is guided by six non-negotiable architectural principles.
          </p>
        </div>

        {/* Asymmetric Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] hover:border-brand-500/40 dark:hover:border-brand-400/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/15 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:scale-110 transition-transform">
                    {getIcon(principle.icon)}
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono font-medium text-brand-600 dark:text-brand-400 mb-1">
                  {principle.subtitle}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {principle.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>STANDARD</span>
                <span className="text-brand-500 font-semibold">ENTERPRISE-GRADE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
