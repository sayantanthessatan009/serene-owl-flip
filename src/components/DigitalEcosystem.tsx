"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Zap, Database, Share2, Layers } from 'lucide-react';

const nodes = [
  { icon: Globe, label: "Web Presence", pos: "top-0 left-1/2 -translate-x-1/2" },
  { icon: Smartphone, label: "Mobile App", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { icon: Zap, label: "Automation", pos: "top-1/2 left-0 -translate-y-1/2" },
  { icon: Database, label: "Client CRM", pos: "top-1/2 right-0 -translate-y-1/2" },
];

const DigitalEcosystem = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Digital Ecosystem</h2>
          <p className="text-platinum/50 max-w-2xl mx-auto">
            We don't just build isolated tools. We create a seamless, interconnected digital world for your brand.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-square md:aspect-[16/9] flex items-center justify-center">
          {/* Central Hub */}
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 20px rgba(229,228,226,0.1)", "0 0 40px rgba(229,228,226,0.2)", "0 0 20px rgba(229,228,226,0.1)"] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center p-4"
          >
            <Layers className="text-platinum mb-2" size={32} />
            <span className="text-white font-bold text-sm md:text-lg">LUXTEXC CORE</span>
          </motion.div>

          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <line x1="50%" y1="0%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="100%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0%" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="100%" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`absolute ${node.pos} z-10 flex flex-col items-center gap-3`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-platinum hover:text-white hover:border-platinum/50 transition-all duration-500">
                <node.icon size={28} />
              </div>
              <span className="text-platinum/60 text-xs md:text-sm font-medium uppercase tracking-widest">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalEcosystem;