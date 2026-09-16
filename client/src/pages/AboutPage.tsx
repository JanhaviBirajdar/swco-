import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, ShieldCheck, Zap, Globe, Users, Award, Code2 } from 'lucide-react';
import { companyData, leadershipData } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About VasuNiti — Engineering Software for a Smarter Tomorrow"
        description="Learn about VasuNiti: our origins, architectural principles, global leadership, and mission to engineer enduring software products."
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Story Banner */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge variant="brand" className="mb-4">
              Our Identity
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              Technology With Purpose.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              VasuNiti was founded on a simple conviction: enterprise software shouldn’t be a fragile patchwork of legacy scripts. It should be as fast, elegant, and reliable as the modern web.
            </p>
          </div>

          {/* Mission & Vision Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-semibold uppercase text-brand-600 dark:text-brand-400 mb-2">
                  Our Mission
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Eliminate Enterprise Complexity
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {companyData.mission}
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-semibold uppercase text-indigo-600 dark:text-indigo-400 mb-2">
                  Our Vision
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  The Autonomous Enterprise
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {companyData.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Story Section */}
          <div className="py-16 border-y border-black/[0.08] dark:border-white/[0.08] mb-24">
            <div className="max-w-3xl mx-auto space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <span className="text-xs font-mono uppercase font-bold text-brand-600 dark:text-brand-400">
                The VasuNiti Narrative
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Engineered from First Principles
              </h2>
              <p>
                In the modern software landscape, organizations are often forced to choose between rigid enterprise monoliths that take months to configure or flimsy developer tools lacking enterprise governance.
              </p>
              <p>
                VasuNiti was conceived to dissolve this false dichotomy. By pairing cutting-edge distributed computing engines with intentional, human-centered user experiences, we craft software that engineers love to run and executives trust to power multi-billion-dollar transactions.
              </p>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="indigo" className="mb-3">
                Executive Leadership
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Led by Builders and Architects
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Our founders and leaders have spent decades scaling distributed backends and mission-critical cloud infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipData.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Avatar Placeholder with gradient */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mb-4 shadow-md"
                      style={{ backgroundColor: member.imagePlaceholderColor }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-medium text-brand-600 dark:text-brand-400 mb-3">
                      {member.role}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-3 border-t border-black/5 dark:border-white/5">
                    {member.expertise.map((exp) => (
                      <span key={exp} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                        {exp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Presence */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-sm">
            <div className="max-w-3xl mb-10">
              <Badge variant="cyan" className="mb-3">
                Global Footprint
              </Badge>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Where We Build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companyData.locations.map((loc) => (
                <div key={loc.city} className="p-6 rounded-2xl bg-light-surface dark:bg-dark-bg/60 border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2 text-brand-500 mb-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-xs font-mono font-semibold">{loc.type}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {loc.city}, {loc.country}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
