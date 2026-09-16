import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface HoverCardItem {
  title: string;
  description: string;
  link?: string;
  icon?: React.ReactNode;
  tag?: string;
}

export const CardHoverEffect: React.FC<{
  items: HoverCardItem[];
  className?: string;
  onItemClick?: (item: HoverCardItem, idx: number) => void;
}> = ({ items, className = '', onItemClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4 ${className}`}
    >
      {items.map((item, idx) => (
        <div
          key={item.title + idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onItemClick && onItemClick(item, idx)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-brand-500/[0.08] dark:bg-brand-500/[0.12] block rounded-2xl -z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white/80 dark:bg-dark-card/90 border border-black/[0.08] dark:border-white/[0.08] group-hover:border-brand-500/40 dark:group-hover:border-brand-400/40 relative z-20 transition-all duration-300 shadow-sm group-hover:shadow-xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                {item.icon && (
                  <div className="p-2.5 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                )}
                {item.tag && (
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 font-medium">
                    {item.tag}
                  </span>
                )}
              </div>
              <h4 className="font-display font-semibold text-slate-900 dark:text-white tracking-wide text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 tracking-wide leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
            {item.link && (
              <div className="pt-4 mt-2 border-t border-black/5 dark:border-white/5 flex items-center text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform">
                Explore capability →
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
