import React from 'react';
import { Bot, Cloud, LayoutGrid, LineChart, ShieldCheck, Code2 } from 'lucide-react';
import { CardHoverEffect, HoverCardItem } from '../aceternity/CardHoverEffect';
import { Badge } from '../common/Badge';

export const FeaturesGrid: React.FC = () => {
  const capabilities: HoverCardItem[] = [
    {
      title: 'AI & Automation',
      description: 'Autonomous micro-agents, intelligent document processing, and deterministic workflow engines with human-in-the-loop governance.',
      icon: <Bot className="w-6 h-6" />,
      tag: 'Autonomous',
      link: '/solutions'
    },
    {
      title: 'Cloud Platforms',
      description: 'Resilient multi-cloud mesh architectures, automated blue/green zero-downtime rollouts, and global edge computing.',
      icon: <Cloud className="w-6 h-6" />,
      tag: 'Edge Native',
      link: '/solutions'
    },
    {
      title: 'Business Software',
      description: 'Integrated operations cockpit connecting ERP, CRM, inventory, and cross-department collaboration into one source of truth.',
      icon: <LayoutGrid className="w-6 h-6" />,
      tag: 'Enterprise OS',
      link: '/solutions'
    },
    {
      title: 'Data & Analytics',
      description: 'High-throughput columnar data fabrics delivering real-time streaming queries, predictive ML forecasting, and anomaly detection.',
      icon: <LineChart className="w-6 h-6" />,
      tag: 'Sub-50ms',
      link: '/solutions'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Hardened zero-trust identity frameworks, SOC2/ISO compliance automation, and audit-ready cryptographic transaction logging.',
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: 'Zero-Trust',
      link: '/solutions'
    },
    {
      title: 'Custom Software',
      description: 'High-performance bespoke engineering for mission-critical core engines, developer platforms, and high-frequency APIs.',
      icon: <Code2 className="w-6 h-6" />,
      tag: 'Tailored Core',
      link: '/solutions'
    }
  ];

  return (
    <section className="relative py-24 bg-light-surface/40 dark:bg-dark-bg/60 border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="brand" className="mb-3">
            Core Capabilities
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            What We Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From foundational cloud platforms to AI-driven automation, our software engines are built for scale, resilience, and speed.
          </p>
        </div>

        {/* Aceternity-inspired Hover Grid */}
        <CardHoverEffect items={capabilities} />
      </div>
    </section>
  );
};
