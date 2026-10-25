import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDemoModal } from '../../context/DemoModalContext';

export const HighConversionCTA: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-24 bg-white dark:bg-[#050814] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-indigo-500/30">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-5 border border-white/15 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              Institutional Outcome Software
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Ready to Simplify Academic Outcome Management?
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Discover how VasuNiti can fit your institution's CO–PO mapping and academic reporting workflow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                type="button"
                onClick={openDemoModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 flex items-center justify-center gap-2 group"
              >
                <span>Schedule a Product Demo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-200" />
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 text-center">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Custom College Syllabi Scheme Setup</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Faculty & IQAC Training Included</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Secure On-Premise or Cloud Deployments</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
