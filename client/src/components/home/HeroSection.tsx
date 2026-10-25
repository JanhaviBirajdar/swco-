import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Spotlight } from '../aceternity/Spotlight';
import { HeroEcosystem3D } from '../3d/HeroEcosystem3D';
import { BackgroundBeams } from '../aceternity/BackgroundBeams';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Lights & Grids */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-70 pointer-events-none radial-mask" />
      <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#3888ff" />
      <Spotlight className="top-10 -right-20 md:right-10 opacity-60" fill="#6366f1" />
      <BackgroundBeams />

      {/* Central Ambient Atmosphere that bridges the text and 3D canvas seamlessly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1100px] h-[520px] bg-gradient-to-r from-brand-500/10 via-indigo-500/12 to-cyan-400/8 dark:from-brand-500/15 dark:via-indigo-500/15 dark:to-cyan-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-20"
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="brand" dot className="py-1.5 px-4 shadow-sm backdrop-blur-md">
                <span className="font-mono text-xs font-semibold tracking-wide">
                  Building Software That Moves Businesses Forward
                </span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-6">
              Software Built for the Way the{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-blue-600 dark:from-brand-400 dark:via-indigo-300 dark:to-cyan-400">
                World Works.
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-cyan-400 rounded-full opacity-70" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-xl leading-relaxed mb-8 font-normal">
              VasuNiti builds intelligent, scalable software products that help businesses simplify complexity, automate operations, and move faster.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto group shadow-glow-sm"
                  rightIcon={<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                >
                  Explore Our Products
                </Button>
              </Link>

              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto font-semibold"
                >
                  Talk to Us
                </Button>
              </Link>
            </div>

            {/* Trust Highlights - Sleek interactive badges with crystal-clear contrast */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 backdrop-blur-md shadow-sm text-slate-800 dark:text-slate-200 hover:border-brand-500/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="font-semibold">Enterprise SLA Ready</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 backdrop-blur-md shadow-sm text-slate-800 dark:text-slate-200 hover:border-emerald-500/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold">SOC 2 &amp; ISO 27001</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 backdrop-blur-md shadow-sm text-slate-800 dark:text-slate-200 hover:border-indigo-500/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="font-semibold">&lt; 1ms Edge APIs</span>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Visual Experience - Harmoniously blended with the typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:-ml-6 xl:-ml-12 z-10 w-full"
          >
            <div className="relative w-full">
              {/* Interactive 3D Canvas */}
              <HeroEcosystem3D />

              {/* Floating Futuristic Metric Badges - Strategically positioned with crisp typography */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-4 sm:right-10 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 shadow-2xl border border-slate-200/90 dark:border-white/15 flex items-center gap-3 pointer-events-none backdrop-blur-xl z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-500/15 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold tracking-wide">Event Stream</div>
                  <div className="text-xs font-bold text-slate-950 dark:text-white">&lt; 15ms Latency</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-0 sm:left-6 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 shadow-2xl border border-slate-200/90 dark:border-white/15 flex items-center gap-3 pointer-events-none backdrop-blur-xl z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold tracking-wide">Platform Health</div>
                  <div className="text-xs font-bold text-slate-950 dark:text-white">99.99% Availability</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
