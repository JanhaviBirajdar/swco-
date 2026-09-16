import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy — VasuNiti"
        description="VasuNiti Privacy Policy outlining data protection standards, SOC 2 compliance, and confidentiality measures."
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">
            Legal & Governance
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-10">
            Last Updated: January 1, 2026
          </p>

          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                1. Information We Collect
              </h2>
              <p>
                At VasuNiti Technologies Inc. ("VasuNiti"), we respect enterprise data privacy. We collect information provided directly to us when you contact our sales team, request access to our product suites, or authenticate into VasuNiti cloud services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                2. Enterprise Data Ownership
              </h2>
              <p>
                Our customers maintain 100% ownership and control over the business data processed by VasuNiti software products. We do not sell, rent, or monetize enterprise telemetry or confidential payloads.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                3. Security & Compliance Standards
              </h2>
              <p>
                All data in transit is encrypted using TLS 1.3 with forward secrecy. Data at rest is encrypted using AES-256 GCM. Our operations are audited annually in accordance with SOC 2 Type II and ISO/IEC 27001 certifications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                4. Data Retention & Erasure
              </h2>
              <p>
                Customer logs and telemetry records are retained strictly according to your service agreement or contract terms, with automated purging upon contract conclusion.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                5. Contact Privacy Office
              </h2>
              <p>
                For compliance requests, GDPR data export inquiries, or Data Protection Agreements (DPA), contact <span className="font-mono text-brand-500">privacy@vasuniti.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
