import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronRight, LayoutDashboard, LineChart, Workflow, Cloud, Shield, Terminal } from 'lucide-react';
import { productsData } from '../../data/productsData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const ProductShowcase: React.FC = () => {
  const [activeSlug, setActiveSlug] = useState(productsData[0].slug);
  const activeProduct = productsData.find((p) => p.slug === activeSlug) || productsData[0];

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5" />;
      case 'LineChart': return <LineChart className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      default: return <LayoutDashboard className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative py-28 overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="brand" className="mb-3">
              Product Portfolio
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Our Products
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Purpose-built software designed to solve real business challenges.
            </p>
          </div>

          <Link to="/products">
            <Button variant="outline" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              View All 6 Products
            </Button>
          </Link>
        </div>

        {/* Product Selector Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {productsData.slice(0, 4).map((product) => {
            const isSelected = product.slug === activeSlug;
            return (
              <button
                key={product.slug}
                onClick={() => setActiveSlug(product.slug)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 border ${
                  isSelected
                    ? 'bg-brand-500 text-white border-brand-400 shadow-glow-sm scale-[1.02]'
                    : 'bg-white/70 dark:bg-dark-card/80 text-slate-700 dark:text-slate-300 border-black/10 dark:border-white/10 hover:border-brand-500/40'
                }`}
              >
                <span>{getProductIcon(product.icon)}</span>
                <span>{product.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Showcase Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] shadow-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Background accent light */}
            <div
              className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: activeProduct.color }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Info Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="brand">{activeProduct.badge}</Badge>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Category: {activeProduct.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {activeProduct.name}
                  </h3>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400 mb-4">
                    {activeProduct.tagline}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {activeProduct.shortDescription}
                  </p>
                </div>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProduct.capabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link to={`/products/${activeProduct.slug}`}>
                    <Button variant="primary" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                      Explore Product Details
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button variant="outline">
                      Schedule Live Demo
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Live UI Simulation / Cockpit Card */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-slate-900 border border-white/10 p-5 shadow-2xl text-slate-200">
                  {/* Window Browser Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-md border border-white/5">
                      app.vasuniti.com/{activeProduct.slug}
                    </div>
                    <div className="w-4 h-4 text-slate-500">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Cockpit Inner Grid */}
                  <div className="space-y-4 font-mono text-xs">
                    {/* Telemetry Row */}
                    <div className="grid grid-cols-3 gap-3">
                      {activeProduct.benefits.map((benefit, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                          <div className="text-[10px] text-slate-400">{benefit.label}</div>
                          <div className="text-base font-bold text-white mt-1" style={{ color: activeProduct.color }}>
                            {benefit.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Visual Workflow / Stream Graphic */}
                    <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>PIPELINE ORCHESTRATION</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> LIVE
                        </span>
                      </div>

                      <div className="space-y-2">
                        {activeProduct.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProduct.color }} />
                              <span className="text-white text-xs font-sans font-medium">{feat.title}</span>
                            </div>
                            <span className="text-[10px] text-slate-400">{feat.highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SLA Spec Footer */}
                    <div className="p-2.5 rounded-lg bg-white/[0.02] flex items-center justify-between text-[11px] text-slate-400">
                      <span>Deployment: {activeProduct.specs.deployment.split(',')[0]}</span>
                      <span className="text-brand-400">{activeProduct.specs.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
