"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LuxxButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const LuxxButton = ({ children, variant = 'primary', className, ...props }: LuxxButtonProps) => {
  const variants = {
    primary: "bg-gradient-to-r from-platinum-neon via-white to-platinum-neon text-black shadow-neon-platinum hover:shadow-neon-platinum-strong",
    outline: "border border-platinum/30 text-platinum hover:bg-platinum/10 hover:border-platinum/60",
    ghost: "text-platinum/70 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative overflow-hidden px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Shimmer Effect for Primary Variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default LuxxButton;