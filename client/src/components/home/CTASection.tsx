import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Zap, Headphones } from 'lucide-react';
import { LampContainer } from '../aceternity/LampContainer';
import { Button } from '../common/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-400 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl font-display leading-[1.15]"
        >
          Build Software That Moves <br /> Your Business Forward.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl text-base sm:text-lg leading-relaxed text-center"
        >
          Transform fragmented workflows, legacy architecture, and manual processes into an interconnected, autonomous software engine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/contact">
            <Button size="lg" variant="glow" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
              Start a Conversation
            </Button>
          </Link>
          <Link to="/products">
            <Button size="lg" variant="secondary">
              Explore Product Catalog
            </Button>
          </Link>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-500" />
            <span>99.99% Guaranteed SLA</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-indigo-500" />
            <span>24/7 Enterprise Dedicated Support</span>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};
