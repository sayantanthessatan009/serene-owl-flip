"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-24 bg-luxx-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-platinum/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8 leading-tight">
              "Digital excellence is the new standard of luxury."
            </h2>
            <p className="text-platinum/60 text-lg leading-relaxed mb-8">
              We believe that a brand's digital presence should be a seamless extension of its physical atmosphere. In the world of elite wellness, every touchpoint must evoke a sense of calm, precision, and exclusivity.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold mb-2">Precision</h4>
                <p className="text-platinum/40 text-sm">Every pixel is placed with intent and purpose.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Elegance</h4>
                <p className="text-platinum/40 text-sm">Simplicity is the ultimate sophistication.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-platinum/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;