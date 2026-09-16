import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, CheckCircle2, LayoutDashboard, LineChart, Workflow, Cloud, Shield, Terminal, Filter } from 'lucide-react';
import { fetchProducts } from '../services/api';
import { Product } from '../types';
import { productsData } from '../data/productsData';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const categories = [
    'All',
    'Enterprise Suite',
    'Data & Intelligence',
    'Workflow & Automation',
    'Cloud & DevOps',
    'Security & Compliance',
    'Developer Tools',
  ];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchProducts(
        selectedCategory === 'All' ? undefined : selectedCategory,
        searchTerm || undefined
      );
      setProducts(data);
      setLoading(false);
    };

    const timer = setTimeout(load, 150);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

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
    <>
      <SEOHead
        title="Products Portfolio — VasuNiti Software"
        description="Explore VasuNiti's enterprise software products: Business Suite, Analytics, Automation, Cloud, CyberCore, and DevPulse."
      />

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="brand" className="mb-3">
              Software Ecosystem
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Software Products
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              High-performance, interconnected platforms built for scale, resilience, and operational clarity.
            </p>
          </div>

          {/* Search and Category Filter Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-500 text-white shadow-glow-sm'
                      : 'bg-white/80 dark:bg-dark-card/80 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white border border-black/5 dark:border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products or capabilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-dark-card border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {products.map((product, idx) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white dark:bg-dark-card border border-black/[0.08] dark:border-white/[0.08] hover:border-brand-500/40 dark:hover:border-brand-400/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-7 relative overflow-hidden group"
                >
                  {/* Subtle top background glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: product.color }}
                  />

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="p-3 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: product.color }}
                      >
                        {getProductIcon(product.icon)}
                      </div>
                      <Badge variant="brand">{product.badge}</Badge>
                    </div>

                    <div className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-1">
                      {product.category}
                    </div>

                    <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                      {product.name}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                      {product.shortDescription}
                    </p>

                    {/* Capabilities list */}
                    <div className="space-y-2 mb-6 pt-2 border-t border-black/5 dark:border-white/5">
                      <div className="text-[11px] font-mono font-semibold uppercase text-slate-400">
                        Highlights
                      </div>
                      {product.capabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="line-clamp-1">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      {product.specs.availability}
                    </span>
                    <Link to={`/products/${product.slug}`}>
                      <Button size="sm" variant="primary" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                        Explore Product
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {products.length === 0 && (
            <div className="text-center py-20 bg-white/50 dark:bg-dark-card/50 rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
              <p className="text-slate-500 dark:text-slate-400">
                No products match your current search query.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                className="mt-3 text-xs font-semibold text-brand-500 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
