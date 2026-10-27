import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { companyData } from '../data/companyData';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy — VasuNiti Academic Software Solutions"
        description="VasuNiti Privacy Policy outlining institutional academic data ownership, student privacy protections, and security measures."
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            Institutional Privacy & Governance
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Privacy <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-10">
            Last Updated: January 1, 2026
          </p>

          <div className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-50/70 dark:bg-[#0E1526] p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                1. Information We Collect
              </h2>
              <p>
                At VasuNiti Academic Software Solutions ("VasuNiti"), we uphold strict institutional data privacy standards. We collect information provided directly by higher education institutions when requesting demonstrations, configuring academic schemes, or accessing VasuNiti academic software services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                2. Institutional Data Ownership
              </h2>
              <p>
                Colleges and universities maintain 100% legal ownership and control over all syllabi, assessment records, student marks, and outcome attainment records ingested into or processed by VasuNiti software. VasuNiti does not sell, license, rent, or commercialize institutional academic records or student data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                3. Security & Access Control
              </h2>
              <p>
                All institutional data is secured in transit and at rest using modern encryption standards. Access within the application is strictly partitioned using Role-Based Access Control (RBAC), ensuring that faculty, HODs, IQAC coordinators, and institutional leadership access only authorized departmental records.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                4. Data Retention and Portability
              </h2>
              <p>
                Institutions may export complete mapping matrices, attainment tables, and digital course file archives at any time in standardized open formats (PDF, Excel, JSON). Upon contract conclusion or upon request, institutional repositories can be securely archived or deleted per agreed service parameters.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                5. Contacting Our Data Governance Officer
              </h2>
              <p>
                For inquiries regarding academic data processing, confidentiality agreements, or institutional compliance, contact our team at:{' '}
                <a href={`mailto:${companyData.inquiryEmail}`} className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                  {companyData.inquiryEmail}
                </a>{' '}
                or phone{' '}
                <a href={`tel:${companyData.phone.replace(/[^+\d]/g, '')}`} className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                  {companyData.phone}
                </a>{' '}
                (Registered Address: <strong>{companyData.address}</strong>).
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
