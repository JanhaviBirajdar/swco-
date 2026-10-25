import React from 'react';
import { SEOHead } from '../components/common/SEOHead';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service — VasuNiti Academic Software Solutions"
        description="VasuNiti higher education software licensing terms, service parameters, and institutional commitments."
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            Institutional Licensing
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Terms of <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-10">
            Last Updated: January 1, 2026
          </p>

          <div className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50/70 dark:bg-[#0E1526] p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or licensing VasuNiti software modules, your institution agrees to these Terms of Service. These terms govern the deployment, institutional user accounts, and technical support provided by VasuNiti Academic Software Solutions ("VasuNiti").
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                2. Academic Software License
              </h2>
              <p>
                VasuNiti grants the subscribing college or university a non-exclusive license to utilize the CO–PO mapping, attainment calculation, and academic reporting modules across authorized departments, academic programs, and designated faculty members.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                3. Quality Assurance & Regulatory Compliance Notice
              </h2>
              <p>
                VasuNiti software is designed to assist higher education institutions in structuring, calculating, and presenting academic outcome data aligned with Outcome-Based Education (OBE) principles and standard NBA/NAAC format requirements. VasuNiti does not guarantee official accreditation status, compliance ratings, or audit results; final accreditation determinations are made exclusively by the authorized statutory bodies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                4. Support, Onboarding & Training
              </h2>
              <p>
                VasuNiti provides institutional onboarding, administrative scheme setup, and hands-on faculty workshops as defined in the institutional deployment agreement. Standard technical support is available during regular academic hours.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                5. Contact & Legal Notices
              </h2>
              <p>
                Formal notices regarding licensing agreements or institutional service levels may be directed to <strong className="text-indigo-600 dark:text-indigo-400">contact@vasuniti.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
