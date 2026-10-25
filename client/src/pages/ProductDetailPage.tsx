import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown, Network, BarChart3, FileCheck, FolderArchive, Layers, ShieldCheck } from 'lucide-react';
import { fetchProductBySlug } from '../services/api';
import { Product } from '../types';
import { productsData } from '../data/productsData';
import { SEOHead } from '../components/common/SEOHead';
import { useDemoModal } from '../context/DemoModalContext';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      setLoading(true);
      if (slug) {
        const found = productsData.find((p) => p.slug === slug);
        setProduct(found || null);
      }
      setLoading(false);
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050814]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Loading Module Specifications...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-white dark:bg-[#050814]">
        <div className="text-center max-w-md p-8 rounded-3xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Module Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            The module you are looking for may have been moved or updated.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Modules</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${product.name} — VasuNiti Academic Platform`}
        description={product.shortDescription}
      />

      <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#050814] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Software Modules</span>
            </Link>
          </div>

          {/* Module Hero Section */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white mb-14 shadow-2xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold uppercase tracking-wider">
                  {product.badge}
                </span>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h1>

                <p className="text-base sm:text-lg text-indigo-200 font-semibold">
                  {product.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {product.fullDescription}
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={openDemoModal}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <span>Schedule Demonstration for this Module</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Specs Box */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3.5 text-xs shadow-inner">
                <h3 className="font-display font-bold text-sm text-cyan-300 uppercase tracking-wider mb-2">
                  System Specifications
                </h3>
                <div className="space-y-2.5 text-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Deployment:</span>
                    <strong className="text-white">{product.specs.deployment}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Accreditation Alignment:</span>
                    <strong className="text-white">{product.specs.compliance}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Service Availability:</span>
                    <strong className="text-white">{product.specs.availability}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Data Ingestion:</span>
                    <strong className="text-white">{product.specs.apiSupport}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
              Functional Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Breakdown */}
          <div className="mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
              Core Technical Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {feat.description}
                  </p>
                  {feat.highlight && (
                    <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {feat.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <div className="mb-16 max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                Module FAQ
              </h2>
              <div className="space-y-4">
                {product.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50/70 dark:bg-[#0E1526] border border-slate-200/90 dark:border-white/[0.08] shadow-sm"
                  >
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action CTA */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white text-center border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Ready to explore {product.name} for your faculty?
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
                Our academic consultants can conduct an interactive walkthrough with your department syllabus.
              </p>
              <button
                type="button"
                onClick={openDemoModal}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
              >
                Book a Free Institutional Demo
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
