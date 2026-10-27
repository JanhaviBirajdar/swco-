import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronDown, GraduationCap, BarChart2, FileCheck, FolderCheck, Sparkles, BookOpen } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useDemoModal } from '../../context/DemoModalContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    {
      name: 'Solutions',
      path: '/solutions',
      hasDropdown: true,
      items: [
        {
          title: 'Autonomous Colleges & OBE',
          desc: 'Curriculum-wide outcome frameworks and graduate attribute tracking',
          path: '/solutions#engineering-obe-transformation',
          icon: GraduationCap,
        },
        {
          title: 'NBA & NAAC Accreditation',
          desc: 'Audit-ready dossiers for Criterion 2, 3 and NAAC 2.6',
          path: '/solutions#nba-naac-accreditation-readiness',
          icon: FileCheck,
        },
        {
          title: 'HOD & Faculty Workflows',
          desc: 'Spreadsheet-free direct & indirect attainment calculations',
          path: '/solutions#hod-faculty-outcome-automation',
          icon: BarChart2,
        },
        {
          title: 'Digital Course File Vault',
          desc: 'Structured evidence archiving for syllabi, rubrics & scripts',
          path: '/solutions#digital-course-file-evidence',
          icon: FolderCheck,
        },
      ],
    },
    { name: 'Features', path: '/#features' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#050814]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-white/[0.08] shadow-sm py-3'
          : 'bg-white/80 dark:bg-[#050814]/80 backdrop-blur-sm border-b border-slate-100 dark:border-white/[0.05] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* VasuNiti Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="VasuNiti Home">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 border border-white/20 transition-transform duration-200 group-hover:scale-105">
              <span className="font-display font-extrabold text-base tracking-tight text-white flex items-center">
                V<span className="text-cyan-300">N</span>
              </span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#050814] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
                VASU<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">NITI</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Educational Software
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive || location.pathname.startsWith('/solutions')
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 font-semibold'
                          : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          solutionsDropdownOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Solutions Dropdown Menu */}
                    <AnimatePresence>
                      {solutionsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-80 bg-white dark:bg-[#0E1526] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-white/[0.08] p-2 z-50 backdrop-blur-xl"
                        >
                          <div className="space-y-1">
                            {link.items?.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  to={item.path}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.title}
                                    </div>
                                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                                      {item.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-white/[0.06] px-2 py-1">
                            <Link
                              to="/solutions"
                              className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-between"
                            >
                              <span>Explore all institutional workflows</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Normal Link or hash link
              return (
                <a
                  key={link.name}
                  href={link.path.startsWith('/#') ? link.path.substring(1) : link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-500/10 border border-blue-200/60 dark:border-blue-500/20 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Theme Toggle & Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={openDemoModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>Book a Free Demo</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right Bar: Theme Toggle & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0A101F] px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
              >
                Home
              </Link>
              <Link
                to="/solutions"
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
              >
                Solutions
              </Link>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
              >
                How It Works
              </a>
              <Link
                to="/about"
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
              >
                About VasuNiti
              </Link>
              <Link
                to="/contact"
                className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/70"
              >
                Contact
              </Link>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book a Free Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
