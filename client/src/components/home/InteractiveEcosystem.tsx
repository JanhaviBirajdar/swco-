import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Cloud, Cpu, Database, Globe, LineChart, Shield, Sparkles, Workflow, ArrowRight } from 'lucide-react';
import { Badge } from '../common/Badge';

interface EcosystemNode {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  angle: number; // in degrees
  distance: number; // in px
  color: string;
}

export const InteractiveEcosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('ai');

  const nodes: EcosystemNode[] = [
    {
      id: 'products',
      label: 'Products',
      description: 'Integrated multi-product architecture enabling seamless data flow across enterprise operations.',
      icon: <Box className="w-5 h-5" />,
      angle: 0,
      distance: 190,
      color: '#3888ff'
    },
    {
      id: 'data',
      label: 'Data Fabric',
      description: 'Unified real-time data streaming and columnar analytics querying across distributed systems.',
      icon: <Database className="w-5 h-5" />,
      angle: 51,
      distance: 190,
      color: '#06b6d4'
    },
    {
      id: 'automation',
      label: 'Automation',
      description: 'Durable execution engines and deterministic workflow state machines with sub-second triggers.',
      icon: <Workflow className="w-5 h-5" />,
      angle: 102,
      distance: 190,
      color: '#6366f1'
    },
    {
      id: 'cloud',
      label: 'Cloud & Edge',
      description: 'Active-active multi-cloud provisioning with sub-15ms global edge latency and autoscaling.',
      icon: <Cloud className="w-5 h-5" />,
      angle: 154,
      distance: 190,
      color: '#8b5cf6'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      description: 'Predictive machine learning models and executive KPI telemetry with instant anomaly alerts.',
      icon: <LineChart className="w-5 h-5" />,
      angle: 205,
      distance: 190,
      color: '#10b981'
    },
    {
      id: 'ai',
      label: 'Adaptive AI',
      description: 'Enterprise AI agents with strict security boundaries, OCR parsing, and autonomous reasoning.',
      icon: <Sparkles className="w-5 h-5" />,
      angle: 257,
      distance: 190,
      color: '#f59e0b'
    },
    {
      id: 'security',
      label: 'CyberCore Security',
      description: 'Continuous zero-trust posture verification, automated compliance dossiers, and threat interception.',
      icon: <Shield className="w-5 h-5" />,
      angle: 308,
      distance: 190,
      color: '#ef4444'
    }
  ];

  const selected = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <section className="relative py-28 overflow-hidden bg-white dark:bg-dark-bg transition-colors" id="ecosystem">
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="indigo" className="mb-3">
            Interconnected Architecture
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            The VasuNiti Software Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Every VasuNiti engine connects seamlessly to form a unified, autonomous software nervous system for your enterprise.
          </p>
        </div>

        {/* Interactive Orbital Ecosystem Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Orbital Graph */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[480px] sm:min-h-[520px] relative">
            {/* SVG Connecting Ring Lines & Beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-260 -260 520 520">
              {/* Outer orbit circle */}
              <circle cx="0" cy="0" r="190" fill="none" stroke="currentColor" strokeDasharray="6 6" className="text-black/10 dark:text-white/10" />
              {/* Inner orbit circle */}
              <circle cx="0" cy="0" r="110" fill="none" stroke="currentColor" strokeDasharray="3 3" className="text-black/5 dark:text-white/5" />

              {/* Radial connecting rays */}
              {nodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * node.distance;
                const y = Math.sin(rad) * node.distance;
                const isCurrent = node.id === activeNode;
                return (
                  <g key={node.id}>
                    <line
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke={isCurrent ? node.color : 'currentColor'}
                      strokeWidth={isCurrent ? '2' : '1'}
                      strokeOpacity={isCurrent ? '0.8' : '0.15'}
                      className="transition-all duration-300"
                    />
                    {isCurrent && (
                      <circle cx={x * 0.5} cy={y * 0.5} r="3" fill={node.color} className="animate-ping" />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Center Core Hub: VASUNITI */}
            <div className="relative z-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-brand-600 to-indigo-700 text-white flex flex-col items-center justify-center p-3 shadow-glow-md border border-white/30 text-center select-none">
              <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-1 font-bold text-sm">
                VN
              </div>
              <span className="font-display font-extrabold tracking-wider text-xs">
                VASUNITI
              </span>
              <span className="text-[9px] font-mono text-brand-200 mt-0.5">
                Core Engine
              </span>
            </div>

            {/* Orbital Surrounding Nodes */}
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * (node.distance * 0.95);
              const y = Math.sin(rad) * (node.distance * 0.95);
              const isSelected = node.id === activeNode;

              return (
                <motion.button
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute z-30 p-2.5 sm:p-3 rounded-2xl flex items-center gap-2 text-xs font-semibold transition-all duration-300 shadow-md ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 ring-4 ring-brand-500/30 shadow-glow-sm scale-105'
                      : 'bg-white/90 dark:bg-dark-card/90 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10 hover:border-brand-500'
                  }`}
                >
                  <div
                    className="p-1.5 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: node.color }}
                  >
                    {node.icon}
                  </div>
                  <span className="hidden sm:inline-block pr-1">{node.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Live Explanatory Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-3xl bg-light-surface/80 dark:bg-dark-card/90 border border-black/[0.08] dark:border-white/[0.08] shadow-xl backdrop-blur-md relative overflow-hidden"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md"
                  style={{ backgroundColor: selected.color }}
                >
                  {selected.icon}
                </div>

                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
                  Ecosystem Module
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {selected.label}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="p-4 rounded-xl bg-white dark:bg-dark-bg/60 border border-black/5 dark:border-white/5 space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-between font-mono">
                    <span>STATUS:</span>
                    <span className="text-emerald-500 font-semibold">SYNCHRONIZED (100%)</span>
                  </div>
                  <div className="flex items-center justify-between font-mono">
                    <span>SECURITY LAYER:</span>
                    <span>mTLS End-to-End</span>
                  </div>
                  <div className="flex items-center justify-between font-mono">
                    <span>COMMUNICATION:</span>
                    <span>Event-Driven gRPC Mesh</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:gap-3 transition-all cursor-pointer">
                  <span>Explore module interoperability</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
