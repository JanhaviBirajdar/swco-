import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Cpu, Globe, Key, Layers, Lock, ShieldCheck, Sparkles, Zap, Terminal } from 'lucide-react';
import { fetchProductBySlug } from '../services/api';
import { Product } from '../types';
import { productsData } from '../data/productsData';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const load = async () => {
      setLoading(true);
      if (slug) {
        const data = await fetchProductBySlug(slug);
        setProduct(data);
      }
      setLoading(false);
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
          <span className="text-xs font-mono text-slate-400">Loading Product Specifications...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center max-w-md p-8 rounded-3xl bg-white dark:bg-dark-card border border-black/10 dark:border-white/10">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Product Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            The product you are looking for may have been moved or updated in our catalog.
          </p>
          <Link to="/products">
            <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Product Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${product.name} — VasuNiti Enterprise Software`}
        description={product.shortDescription}
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back breadcrumb */}
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Products</span>
            </Link>
          </div>

          {/* Product Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-black/[0.08] dark:border-white/[0.08]">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="brand">{product.badge}</Badge>
                <span className="text-xs font-mono text-slate-500">{product.category}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                {product.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400">
                {product.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {product.fullDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" variant="primary" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                    Request Enterprise Access
                  </Button>
                </Link>
                <a href="#features">
                  <Button size="lg" variant="secondary">
                    Explore Architecture
                  </Button>
                </a>
              </div>
            </div>

            {/* Product Key Metrics Hero Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-900 border border-white/10 p-8 shadow-2xl text-white relative overflow-hidden">
                <div
                  className="absolute -right-20 -top-20 w-60 h-60 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: product.color }}
                />

                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <span className="text-xs font-mono uppercase text-slate-400">Performance Metrics</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                    Production Verified
                  </span>
                </div>

                <div className="space-y-6">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="font-display text-3xl font-extrabold text-brand-400 shrink-0 min-w-[75px]">
                        {benefit.metric}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-white">{benefit.label}</div>
                        <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{benefit.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>API SLA: {product.specs.availability}</span>
                  <span className="text-brand-400">SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Features Grid */}
          <div className="py-20 border-b border-black/[0.08] dark:border-white/[0.08]" id="features">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="indigo" className="mb-3">
                Core Architecture
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Engineered Capabilities
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                Discover the architectural pillars powering {product.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] hover:border-brand-500/40 transition-all shadow-sm group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    {feat.highlight && (
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-brand-600 dark:text-brand-400 font-medium">
                        {feat.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications & Compliance Table */}
          <div className="py-20 border-b border-black/[0.08] dark:border-white/[0.08]">
            <div className="max-w-3xl mb-12">
              <Badge variant="cyan" className="mb-3">
                Deployment & Governance
              </Badge>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Enterprise Technical Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">DEPLOYMENT MODELS</div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                  {product.specs.deployment}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">COMPLIANCE & ATTESTATION</div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                  {product.specs.compliance}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">AVAILABILITY SLA</div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm text-emerald-500">
                  {product.specs.availability}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-1">SUPPORTED PROTOCOLS</div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                  {product.specs.apiSupport}
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          {product.faqs && product.faqs.length > 0 && (
            <div className="py-20 border-b border-black/[0.08] dark:border-white/[0.08]">
              <div className="max-w-3xl mb-12">
                <Badge variant="brand" className="mb-3">
                  Frequently Asked Questions
                </Badge>
                <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Questions About {product.name}
                </h2>
              </div>

              <div className="space-y-4 max-w-4xl">
                {product.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
                      >
                        <span className="text-base">{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom CTA Banner */}
          <div className="mt-20 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-brand-900 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden shadow-2xl border border-white/10">
            <h3 className="font-display text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Deploy {product.name}?
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto text-base mb-8">
              Speak with our solution architects to design a customized pilot deployment for your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="glow" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                  Schedule Enterprise Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
