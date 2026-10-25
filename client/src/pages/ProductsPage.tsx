import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, CheckCircle2, Network, BarChart3, FileCheck, FolderArchive, Layers } from 'lucide-react';
import { productsData } from '../data/productsData';
import { Product } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { useDemoModal } from '../context/DemoModalContext';

export const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { openDemoModal } = useDemoModal();

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return <Network className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6" />;
      case 'FolderArchive': return <FolderArchive className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  const filteredProducts = productsData.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.tagline.toLowerCase().includes(term) ||
      p.shortDescription.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <SEOHead
        title="Software Modules — VasuNiti Outcome-Based Education Platform"
        description="Explore VasuNiti's specialized academic software modules: CO–PO Mapping Engine, Attainment Analytics, Accreditation Reports, and Digital Course Files."
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              Academic Software Suite
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Specialized Modules for <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">Higher Education</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every tool engineered to eliminate manual calculation errors, maintain curriculum traceability, and support accreditation workflows.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search modules, features, or compliance standards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-[#131C31] text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
              />
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredProducts.map((prod, idx) => (
              <motion.div
                key={prod.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-3xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl dark:hover:border-indigo-500/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#131C31] text-blue-600 dark:text-blue-400 border border-slate-200/90 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                      {getProductIcon(prod.icon)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                      {prod.badge}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                    {prod.name}
                  </h2>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {prod.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {prod.shortDescription}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {prod.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-3">
                  <Link
                    to={`/products/${prod.slug}`}
                    className="text-xs font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={openDemoModal}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
                  >
                    Book Walkthrough
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Ribbon */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white text-center border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Need a Custom Assessment Framework?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
                Our engineering team can configure VasuNiti to match your university’s specific examination patterns, grading schemas, and threshold attainment models.
              </p>
              <button
                type="button"
                onClick={openDemoModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
              >
                Request Institutional Consultation
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductsPage;
