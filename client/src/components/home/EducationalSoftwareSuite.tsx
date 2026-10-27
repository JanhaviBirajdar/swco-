import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Network,
  BarChart3,
  FileCheck,
  FolderArchive,
  Building2,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  Layers,
  BookOpen
} from 'lucide-react';
import { productsData } from '../../data/productsData';
import { useDemoModal } from '../../context/DemoModalContext';

export const EducationalSoftwareSuite: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const [activeSlug, setActiveSlug] = useState<string>(productsData[0]?.slug || 'copo-mapping-engine');

  // Extended product list to also include Institutional Governance
  const allEducationalProducts = [
    ...productsData,
    {
      slug: 'institutional-governance',
      name: 'Institutional Governance & Academic Hub',
      tagline: 'Multi-Department & Campus-Wide Academic Administration',
      shortDescription:
        'Centralize academic operations across engineering departments and campuses. Configure autonomous schemes, faculty allocations, and executive leadership dashboards from one unified portal.',
      fullDescription:
        'Engineered for Principals, Deans, and IQAC Directors to govern academic programs across diverse departments (CSE, ECE, MECH, CIVIL, AI/DS) with centralized regulations, batch management, and role-based permissions.',
      category: 'Governance & Administration',
      badge: 'Campus-Wide Governance',
      icon: 'Building2',
      color: '#8B5CF6',
      order: 5,
      featured: true,
      capabilities: [
        'Multi-department academic schema & syllabus consolidation',
        'Autonomous, Affiliated, and CBCS/NEP regulation management',
        'Executive KPI telemetry with target-versus-actual analytics',
        'Department-wise accreditation readiness monitoring',
        'Role-Based Access Control (RBAC) for Deans, HODs, and Faculty',
        'Single source of truth for Governing Council & Academic Advisory'
      ],
      features: [
        {
          title: 'Campus Department Matrix',
          description: 'Oversee outcome metrics, course files, and attainment across every engineering division.',
          icon: 'Building2',
          highlight: 'Cross-department benchmarking'
        },
        {
          title: 'Multi-Batch Regulation Engine',
          description: 'Manage distinct curriculum schemes without data overwrites across transitioning batches.',
          icon: 'Layers',
          highlight: 'NEP 2020 & CBCS compatible'
        }
      ],
      benefits: [
        { metric: '100%', label: 'Governance Visibility', detail: 'Real-time academic oversight across departments.' },
        { metric: 'Zero', label: 'Department Silos', detail: 'Seamless data flow from course instructors to IQAC.' }
      ],
      specs: {
        deployment: 'Cloud SaaS / Private Institutional VPC',
        compliance: 'UGC & AICTE Academic Norms Aligned',
        availability: '99.95% High Availability',
        apiSupport: 'University ERP / SIS Integration Ready'
      }
    }
  ];

  const currentProduct = allEducationalProducts.find((p) => p.slug === activeSlug) || allEducationalProducts[0];

  const getProductIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Network':
        return <Network className={className} />;
      case 'BarChart3':
        return <BarChart3 className={className} />;
      case 'FileCheck':
        return <FileCheck className={className} />;
      case 'FolderArchive':
        return <FolderArchive className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-[#070C18] border-b border-slate-200/90 dark:border-white/[0.06] transition-colors relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Our Educational Software Suite</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Specialized Software Products for{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
              Higher Education
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            VasuNiti is an educational software company engineering modular, audit-ready products for engineering colleges and universities.
            <span className="font-semibold text-slate-900 dark:text-white"> CO–PO mapping is one of our flagship products</span> — discover our complete academic software suite.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {allEducationalProducts.map((prod) => {
            const isSelected = prod.slug === activeSlug;
            const isCopo = prod.slug === 'copo-mapping-engine';

            return (
              <button
                key={prod.slug}
                type="button"
                onClick={() => setActiveSlug(prod.slug)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border-transparent shadow-lg shadow-indigo-600/25 scale-[1.02]'
                    : 'bg-white/90 dark:bg-[#0E1526] text-slate-700 dark:text-slate-300 border-slate-200/90 dark:border-white/10 hover:border-indigo-400/50 hover:bg-white dark:hover:bg-[#131C31]'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-blue-600 dark:text-blue-400'}>
                  {getProductIcon(prod.icon, 'w-4 h-4')}
                </span>
                <span>{prod.name}</span>
                {isCopo && (
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  }`}>
                    Product 01
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Product Showcase Cockpit */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-white dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-2xl p-6 sm:p-8 lg:p-12 mb-16 relative overflow-hidden"
          >
            {/* Ambient Background Spot */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: currentProduct.color || '#315FEA' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Product Info Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                    {currentProduct.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Category: {currentProduct.category}
                  </span>
                  {currentProduct.slug === 'copo-mapping-engine' && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      Modular Software Product
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                    {currentProduct.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {currentProduct.shortDescription}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Product Capabilities &amp; Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentProduct.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  {currentProduct.slug !== 'institutional-governance' ? (
                    <Link
                      to={`/products/${currentProduct.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 flex items-center gap-1.5"
                    >
                      <span>Product Specifications</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      to="/products"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 flex items-center gap-1.5"
                    >
                      <span>Explore Suite Products</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}

                  <button
                    type="button"
                    onClick={openDemoModal}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#131C31] text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#1B2744] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Request Product Walkthrough
                  </button>
                </div>
              </div>

              {/* Product Live UI Simulation Cockpit */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-[#090E1A] border border-white/10 p-5 sm:p-6 shadow-2xl text-slate-200 relative">
                  
                  {/* Browser Window Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-3 py-1 rounded-md border border-white/5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      vasuniti.app/{currentProduct.slug}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Academic SLA</span>
                    </div>
                  </div>

                  {/* Inner Cockpit Grid */}
                  <div className="space-y-4 text-xs font-mono">
                    
                    {/* Metric Badges */}
                    <div className="grid grid-cols-2 gap-3">
                      {currentProduct.benefits.map((b, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="text-[11px] text-slate-400 font-sans">{b.label}</div>
                          <div className="text-xl font-bold text-white mt-1" style={{ color: currentProduct.color }}>
                            {b.metric}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-1 font-sans leading-tight">
                            {b.detail}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Software Module Highlights Box */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="uppercase tracking-wider">Software Module Highlights</span>
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          READY FOR AUDIT
                        </span>
                      </div>

                      <div className="space-y-2">
                        {currentProduct.features.map((feat, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentProduct.color }} />
                              <span className="text-white text-xs font-sans font-medium">{feat.title}</span>
                            </div>
                            <span className="text-[11px] text-indigo-400 font-mono">{feat.highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compliance & Deployment Spec Footer */}
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-sans">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                        <span>Compliance: {currentProduct.specs.compliance}</span>
                      </div>
                      <span className="text-indigo-300 font-mono">{currentProduct.specs.availability}</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 Bento Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productsData.map((prod, idx) => (
            <motion.div
              key={prod.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`p-6 rounded-2xl bg-white dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] flex flex-col justify-between hover:shadow-xl dark:hover:border-indigo-500/40 transition-all group ${
                prod.slug === activeSlug ? 'ring-2 ring-indigo-500/50' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all">
                    {getProductIcon(prod.icon, 'w-5 h-5')}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    Product {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {prod.name}
                </h3>
                <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 mb-2.5">
                  {prod.tagline}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {prod.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                <Link
                  to={`/products/${prod.slug}`}
                  className="text-xs font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors"
                >
                  <span>Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveSlug(prod.slug)}
                  className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Preview Module
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Positioning Ribbon: CO-PO Mapping is one product among our educational suite */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white border border-white/10 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 border border-blue-400/30 text-[11px] font-bold uppercase tracking-wider mb-2">
                Modular Educational Software
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">
                Adopt Standalone Software Modules or the Unified Campus Suite
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need our <strong>CO–PO Mapping Engine</strong> to fix spreadsheet errors, or our complete suite spanning Attainment Analytics, Digital Course Files, and Accreditation Reporting, VasuNiti adapts flexibly to your college’s budget and roadmap.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/products"
                className="px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                View All Products
              </Link>
              <button
                type="button"
                onClick={openDemoModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-indigo-600/30"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
