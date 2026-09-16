import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service — VasuNiti"
        description="VasuNiti enterprise terms of service, SLA guarantees, and licensing provisions."
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-4">
            Legal & Licensing
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-slate-500 mb-10">
            Last Updated: January 1, 2026
          </p>

          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                1. Agreement to Terms
              </h2>
              <p>
                By deploying, accessing, or integrating VasuNiti software products and API endpoints, your organization agrees to be bound by these Terms of Service and any Master Services Agreement (MSA) executed between the parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                2. Software License & Intellectual Property
              </h2>
              <p>
                VasuNiti grants your enterprise a non-exclusive, worldwide license to utilize the subscribed software modules according to your active tier, subject to the concurrency and tenant limitations specified in your order form.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                3. Uptime Service Level Agreement (SLA)
              </h2>
              <p>
                We commit to maintaining a minimum monthly uptime availability of 99.99% for our cloud-hosted engines. In the event of an SLA breach, customer accounts are eligible for prorated service credits as defined in our SLA addendum.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                4. Acceptable Use Policy
              </h2>
              <p>
                You agree not to reverse engineer, decompile, or perform unauthorized stress tests against the multi-tenant infrastructure that could adversely degrade platform availability for other customers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                5. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the State of California, United States, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
