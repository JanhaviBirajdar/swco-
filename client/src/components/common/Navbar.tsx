import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, Layers, Box, Cpu, Shield, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './Button';
import { productsData } from '../../data/productsData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const getProductIcon = (name: string) => {
    if (name.includes('Business')) return <Box className="w-4 h-4 text-brand-500" />;
    if (name.includes('Analytics')) return <Sparkles className="w-4 h-4 text-cyan-500" />;
    if (name.includes('Automation')) return <Cpu className="w-4 h-4 text-indigo-500" />;
    if (name.includes('CyberCore')) return <Shield className="w-4 h-4 text-emerald-500" />;
    return <Layers className="w-4 h-4 text-brand-400" />;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light-bg/85 dark:bg-dark-bg/85 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="font-display tracking-tighter text-lg">V</span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-brand-400 to-indigo-500 opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-slate-900 dark:text-white uppercase transition-colors">
                VASU<span className="text-brand-500 dark:text-brand-400">NITI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                        isActive || location.pathname.startsWith('/products')
                          ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-brand-500' : ''
                        }`}
                      />
                    </Link>

                    {/* Desktop Dropdown Mega-Menu */}
                    <AnimatePresence>
                      {productsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px]"
                        >
                          <div className="p-4 rounded-2xl bg-white dark:bg-dark-card border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5 dark:border-white/5">
                              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Product Portfolio
                              </span>
                              <Link
                                to="/products"
                                className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                              >
                                View All Products <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {productsData.slice(0, 4).map((prod) => (
                                <Link
                                  key={prod.slug}
                                  to={`/products/${prod.slug}`}
                                  className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors group flex items-start gap-3"
                                >
                                  <div className="p-2 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 group-hover:bg-brand-500 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors shrink-0 mt-0.5">
                                    {getProductIcon(prod.name)}
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                                      {prod.name}
                                    </div>
                                    <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                      {prod.tagline}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <div className="hidden sm:block">
              <Link to="/products">
                <Button size="sm" variant="primary" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 shadow-xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
                <Link to="/contact" className="w-full">
                  <Button variant="secondary" className="w-full">
                    Talk to Us
                  </Button>
                </Link>
                <Link to="/products" className="w-full">
                  <Button variant="primary" className="w-full" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
