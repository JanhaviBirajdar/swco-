import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin, Heart, Shield, Activity } from 'lucide-react';
import { productsData } from '../../data/productsData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-light-surface/60 dark:bg-dark-card/60 border-t border-black/[0.08] dark:border-white/[0.08] transition-colors overflow-hidden">
      {/* Background glow element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-black/[0.06] dark:border-white/[0.06]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-glow-sm">
                <span className="font-display text-base">V</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-wider text-slate-900 dark:text-white uppercase">
                VASU<span className="text-brand-500 dark:text-brand-400">NITI</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Software Built for the Way the World Works. VasuNiti builds intelligent, scalable software products that help global businesses simplify complexity and automate operations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                All Systems Operational (99.99%)
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productsData.slice(0, 5).map((prod) => (
                <li key={prod.slug}>
                  <Link
                    to={`/products/${prod.slug}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-brand-600 dark:text-brand-400 font-medium hover:underline text-xs"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Company */}
          <div>
            <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  About VasuNiti
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Contact & Sales
                </Link>
              </li>
              <li>
                <a href="#ecosystem" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Ecosystem Architecture
                </a>
              </li>
              <li>
                <a href="#why-vasuniti" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Engineering Principles
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Trust & Connect
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-500 text-xs">
                  SOC 2 Type II & ISO 27001 Certified
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VasuNiti on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors border border-black/5 dark:border-white/5"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VasuNiti on X"
                className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors border border-black/5 dark:border-white/5"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="VasuNiti on GitHub"
                className="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-white/5 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors border border-black/5 dark:border-white/5"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div>
            © {currentYear} VasuNiti Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Building software for a smarter tomorrow.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
