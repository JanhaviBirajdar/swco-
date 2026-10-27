import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Shield, CheckCircle2, Award } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { productsData } from '../../data/productsData';
import { useDemoModal } from '../../context/DemoModalContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { openDemoModal } = useDemoModal();

  return (
    <footer className="relative bg-[#030611] text-slate-300 border-t border-white/[0.08] transition-colors overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/25 border border-white/20 group-hover:scale-105 transition-transform duration-200">
                <span className="font-display text-base font-extrabold text-cyan-300">VN</span>
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white uppercase">
                VASU<span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">NITI</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              VasuNiti develops specialized academic software for higher education institutions, simplifying Outcome-Based Education (OBE), CO–PO mapping, attainment analytics, and accreditation documentation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                OBE Software Architecture • Washington Accord Aligned
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4 text-indigo-300">
              Software Modules
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productsData.map((prod) => (
                <li key={prod.slug}>
                  <Link
                    to={`/products/${prod.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="text-indigo-400 hover:text-indigo-300 hover:underline font-semibold text-xs flex items-center gap-1"
                >
                  <span>Request Product Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Solutions */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4 text-indigo-300">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">
                  Autonomous Colleges & Universities
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">
                  NBA & NAAC Accreditation Teams
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">
                  HOD & Faculty Workload Reduction
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-400 hover:text-white transition-colors">
                  Digital Course File & Evidence Vault
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                  How OBE Works
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-slate-400 hover:text-white transition-colors">
                  Platform Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4 text-indigo-300">
              Institutional Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{companyData.inquiryEmail}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{companyData.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{companyData.locations[0].city}, {companyData.locations[0].country}</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/10 transition-colors shadow-sm"
                >
                  Contact Form & Map
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {companyData.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About VasuNiti
            </Link>
          </div>
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 text-center leading-relaxed">
          Disclaimer: VasuNiti educational software provides data mapping, calculation formulas, and documentation workflows to support higher education institutions; it does not guarantee NBA or NAAC accreditation, compliance, or official approval. All accreditation criteria belong to their respective statutory bodies.
        </div>
      </div>
    </footer>
  );
};
