"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, MapPin } from 'lucide-react';

const locations = [
  { city: "London", region: "Europe" },
  { city: "Dubai", region: "Middle East" },
  { city: "New York", region: "North America" },
  { city: "Paris", region: "Europe" },
  { city: "Singapore", region: "Asia Pacific" },
  { city: "Kolkata", region: "HQ" },
];

const GlobalPresence = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-platinum mb-8">
              <Globe2 size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Global Reach, <br />
              <span className="text-platinum">Bespoke Service</span>
            </h2>
            <p className="text-platinum/60 text-lg mb-10 leading-relaxed">
              From our headquarters in Kolkata to the luxury hubs of the world, we partner with elite wellness brands to redefine their digital presence across borders.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {locations.map((loc, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <MapPin size={16} className="text-platinum/40 group-hover:text-platinum transition-colors" />
                  <div>
                    <p className="text-white font-medium">{loc.city}</p>
                    <p className="text-platinum/30 text-[10px] uppercase tracking-widest">{loc.region}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-platinum/5 rounded-full blur-[120px] animate-pulse" />
            <div className="relative w-full h-full rounded-full border border-white/5 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full border border-white/20 flex items-center justify-center">
                  <Globe2 size={48} className="text-platinum/20" />
                </div>
              </div>
              
              {/* Animated Orbits */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-platinum/${20 + i * 10}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;