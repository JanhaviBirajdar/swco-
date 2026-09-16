import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead title="404 — Page Not Found | VasuNiti" />

      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto mb-6">
            <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '10s' }} />
          </div>

          <div className="font-mono text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2">
            Error 404
          </div>

          <h1 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Route Not Found
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
            The resource or URL you requested is not located within the VasuNiti software cluster.
          </p>

          <Link to="/">
            <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
