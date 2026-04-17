"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Sayantan Acharya" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxtexc-black via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-platinum/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-platinum/20 bg-white/5 text-platinum/60 text-xs uppercase tracking-widest mb-6">
              <Award size={12} />
              <span>Founder & CEO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sayantan Acharya</h2>
            
            <p className="text-platinum/70 text-lg leading-relaxed mb-8 italic font-serif">
              "My mission is to bridge the gap between high-end wellness and cutting-edge technology. We don't just build software; we craft digital legacies for brands that define excellence."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                <h4 className="text-white font-bold mb-2">Strategic Vision</h4>
                <p className="text-platinum/50 text-sm">Expertise in scaling wellness brands through bespoke digital ecosystems and automated client journeys.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                <h4 className="text-white font-bold mb-2">Technical Excellence</h4>
                <p className="text-platinum/50 text-sm">Deep understanding of modern tech stacks to ensure your platform is fast, secure, and future-proof.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com/in/sayantan-acharya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-platinum/60 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
              <a 
                href="mailto:acharyasayantan716@gmail.com" 
                className="flex items-center gap-2 text-platinum/60 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm font-medium">Direct Inquiry</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;