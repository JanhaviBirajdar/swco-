import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 ${
        isDark
          ? 'bg-dark-surface/80 border-white/10 text-slate-300 hover:text-white hover:border-white/20 shadow-sm'
          : 'bg-light-surface/90 border-black/10 text-slate-700 hover:text-black hover:border-black/20 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 15, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -15, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute"
            >
              <Moon className="w-4 h-4 text-brand-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 15, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -15, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute"
            >
              <Sun className="w-4 h-4 text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};
