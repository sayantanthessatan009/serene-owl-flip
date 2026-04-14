"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "AURA", "ZENITH", "SERENITY", "ELITE", "VITALITY", "PURE", "GLOW", "REPOSE"
];

const Partners = () => {
  return (
    <section className="py-12 bg-luxx-black/50 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-platinum/30 text-xs uppercase tracking-[0.3em] font-medium">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...partners, ...partners].map((partner, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-white/10 hover:text-white/30 transition-colors duration-500 tracking-tighter cursor-default"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;