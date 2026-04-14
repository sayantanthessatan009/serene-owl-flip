"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LuxxButton from './LuxxButton';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-luxx-black z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-platinum/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-platinum/20 bg-white/5 backdrop-blur-sm text-platinum/80 text-sm mb-8">
            <Sparkles size={14} className="text-platinum" />
            <span>Luxury Apps Delivered</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            Luxury Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-platinum via-white to-platinum animate-platinum-shine bg-[length:200%_auto]">
              Experiences
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-platinum/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We craft high-end apps & websites for elite wellness brands that elevate client experience and maximize bookings.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LuxxButton>
              Get Your Luxury App
              <ChevronRight size={18} />
            </LuxxButton>
            <LuxxButton variant="outline">
              View Portfolio
            </LuxxButton>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-platinum/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;