"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    title: "Niche Specialization",
    description: "We speak the language of massage and spa owners. Our systems are built specifically for your workflow.",
    icon: Target
  },
  {
    title: "Luxury-First Design",
    description: "We don't just build apps; we build digital extensions of your high-end physical space.",
    icon: Shield
  },
  {
    title: "Fast, Scalable Builds",
    description: "Launch your premium platform in weeks, not months, with our optimized development stack.",
    icon: Zap
  },
  {
    title: "ROI-Focused Systems",
    description: "Every feature is designed to increase bookings, retention, and average ticket value.",
    icon: TrendingUp
  }
];

const WhyLuxtexc = () => {
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Elite Brands <br />
              <span className="text-platinum">Choose Luxtexc</span>
            </h2>
            <p className="text-platinum/60 text-lg mb-8 leading-relaxed">
              We bridge the gap between high-end wellness and cutting-edge technology. Our mission is to ensure your digital presence is as luxurious as your service.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-platinum/20 flex items-center justify-center text-platinum bg-white/5">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-platinum/50 text-sm leading-relaxed">{feature.description}</p>
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
            className="relative"
          >
            <div className="absolute inset-0 bg-platinum/10 blur-[100px] rounded-full" />
            <div className="relative rounded-3xl border border-white/10 overflow-hidden aspect-square bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-1">
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Spa Interior" 
                className="w-full h-full object-cover rounded-[22px] opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-luxtexc-black/40" />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                <div className="text-platinum font-bold text-2xl mb-1">98%</div>
                <div className="text-platinum/60 text-sm">Client Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLuxtexc;