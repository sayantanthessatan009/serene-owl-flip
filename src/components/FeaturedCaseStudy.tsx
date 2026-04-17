"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LuxxButton from './LuxxButton';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-platinum/20 bg-white/5 text-platinum/60 text-xs uppercase tracking-widest mb-6">
              <span>Flagship Project</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              The Aura <br />
              <span className="text-platinum">Digital Transformation</span>
            </h2>
            <p className="text-platinum/60 text-lg leading-relaxed mb-8">
              We completely reimagined the digital presence for Aura Wellness, a premier spa in London. The result was a seamless, high-conversion ecosystem that redefined their client journey.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Custom iOS & Android Booking App",
                "AI-Powered Scheduling Optimization",
                "Premium Brand Identity Refresh",
                "Integrated Loyalty & CRM System"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-platinum/80">
                  <CheckCircle2 size={18} className="text-platinum" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-12 py-8 border-y border-white/5 mb-10">
              <div>
                <div className="text-3xl font-bold text-white">45%</div>
                <div className="text-platinum/40 text-xs uppercase tracking-widest">Booking Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2.4x</div>
                <div className="text-platinum/40 text-xs uppercase tracking-widest">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white"><1s</div>
                <div className="text-platinum/40 text-xs uppercase tracking-widest">Load Time</div>
              </div>
            </div>

            <LuxxButton>
              View Full Case Study
              <ArrowRight size={18} />
            </LuxxButton>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200" 
                alt="Aura Wellness App" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxtexc-black via-transparent to-transparent opacity-60" />
              
              {/* Floating UI Element Mockup */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 right-12 w-48 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-platinum/20" />
                  <div className="h-2 w-20 bg-white/20 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded" />
                  <div className="h-2 w-2/3 bg-white/10 rounded" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;