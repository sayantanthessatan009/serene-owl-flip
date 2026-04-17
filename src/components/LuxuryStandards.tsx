"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Eye, MousePointer2, Smartphone, Lock } from 'lucide-react';

const standards = [
  {
    title: "Performance First",
    desc: "Sub-second load times and 99.9% uptime for a seamless client experience.",
    icon: Zap
  },
  {
    title: "Elite Security",
    desc: "Enterprise-grade encryption and secure payment processing for peace of mind.",
    icon: Lock
  },
  {
    title: "Pixel Perfection",
    desc: "Meticulous attention to detail in every layout, animation, and interaction.",
    icon: Eye
  },
  {
    title: "Mobile Mastery",
    desc: "Native-feel performance across all devices, ensuring luxury on the go.",
    icon: Smartphone
  },
  {
    title: "Intuitive UX",
    desc: "User journeys designed to be as effortless as a premium spa treatment.",
    icon: MousePointer2
  },
  {
    title: "Brand Integrity",
    desc: "Digital extensions that perfectly mirror your physical space's excellence.",
    icon: ShieldCheck
  }
];

const LuxuryStandards = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Luxury Standard</h2>
          <p className="text-platinum/50 max-w-2xl mx-auto">
            We adhere to the highest benchmarks in digital craftsmanship to ensure your brand remains elite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-platinum mb-6 group-hover:border-platinum/50 group-hover:bg-platinum/10 transition-all duration-500">
                <standard.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{standard.title}</h3>
              <p className="text-platinum/40 text-sm leading-relaxed max-w-xs">
                {standard.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryStandards;