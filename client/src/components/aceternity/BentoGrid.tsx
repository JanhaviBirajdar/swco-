import React from 'react';

export const BentoGrid: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem: React.FC<{
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tag?: string;
}> = ({
  className = '',
  title,
  description,
  header,
  icon,
  tag,
}) => {
  return (
    <div
      className={`row-span-1 rounded-2xl group/bento hover:shadow-2xl transition duration-300 shadow-input p-6 bg-white/70 dark:bg-dark-card/80 border border-black/[0.08] dark:border-white/[0.08] justify-between flex flex-col space-y-4 hover:border-brand-500/40 dark:hover:border-brand-400/40 relative overflow-hidden backdrop-blur-md ${className}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/[0.03] dark:bg-brand-500/[0.05] rounded-full blur-2xl group-hover/bento:bg-brand-500/[0.1] transition-colors" />

      {header && <div className="w-full flex-1">{header}</div>}

      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center justify-between mb-2">
          {icon && <div className="text-brand-500 dark:text-brand-400">{icon}</div>}
          {tag && (
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
              {tag}
            </span>
          )}
        </div>
        <div className="font-display font-semibold text-slate-900 dark:text-white text-lg mb-1">
          {title}
        </div>
        <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
