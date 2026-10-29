import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Calculator, Users, TrendingUp, FolderCheck, ShieldCheck, Award } from 'lucide-react';
import { companyData, leadershipData } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';
import { useDemoModal } from '../context/DemoModalContext';

export const AboutPage: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  const getPrincipleIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Calculator': return <Calculator className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'FolderCheck': return <FolderCheck className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEOHead
        title="About VasuNiti — Academic Software & Outcome Intelligence"
        description="Learn about VasuNiti's origin, academic principles, and mission to empower higher education institutions with intuitive OBE and outcome attainment software."
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Story Banner */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3.5 sm:p-4 rounded-3xl bg-slate-50/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-lg shadow-blue-500/5 backdrop-blur-sm">
                <img
                  src="/vasuniti-logo.png"
                  alt="VasuNiti Official Logo"
                  className="h-20 sm:h-24 w-auto object-contain block dark:hidden"
                />
                <img
                  src="/vasuniti-logo-dark.png"
                  alt="VasuNiti Official Logo"
                  className="h-20 sm:h-24 w-auto object-contain hidden dark:block"
                />
              </div>
            </div>
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              About VasuNiti
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              Advancing Academic Excellence Through <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">Outcomes</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              VasuNiti was founded by engineering educators and software architects to eliminate the manual spreadsheet grind from Outcome-Based Education, empowering colleges to focus on teaching quality, student competencies, and transparent academic audits.
            </p>
          </div>

          {/* Mission & Vision Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                  Our Mission
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Streamline Outcome-Based Education
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {companyData.mission}
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 border border-white/20 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
                  Our Vision
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Transparent Academic Governance
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {companyData.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                Core Philosophy
              </span>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                Principles That Guide Our Software
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyData.principles.map((pr) => (
                <div
                  key={pr.title}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#131C31] text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 border border-slate-200/90 dark:border-white/10 shadow-sm group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                    {getPrincipleIcon(pr.icon)}
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-1">
                    {pr.title}
                  </h3>
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    {pr.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Leadership & Advisory */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                Higher-Ed Leadership
              </span>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                Academic & Product Direction
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipData.map((lead) => (
                <div
                  key={lead.name}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white flex items-center justify-center font-display font-bold text-xl mb-4 shadow-md shadow-indigo-600/30 border border-white/20">
                      {lead.name.charAt(lead.name.startsWith('Dr.') ? 4 : 0)}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {lead.name}
                    </h3>
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                      {lead.role}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {lead.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                    {lead.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#131C31] text-slate-700 dark:text-slate-300 font-semibold border border-slate-200/60 dark:border-white/[0.06]"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white text-center border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
                Experience the Platform Firsthand
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
                Connect with our higher education solutions team for a personalized demonstration configured to your college’s current academic regulations.
              </p>
              <button
                type="button"
                onClick={openDemoModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Schedule Institutional Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
