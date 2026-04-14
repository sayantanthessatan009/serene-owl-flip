"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand's DNA and business goals to map out a bespoke digital strategy."
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting high-fidelity prototypes that mirror the luxury and elegance of your physical space."
  },
  {
    number: "03",
    title: "Development",
    description: "Building your platform with cutting-edge tech for speed, security, and seamless performance."
  },
  {
    number: "04",
    title: "Launch",
    description: "A coordinated rollout followed by continuous optimization to ensure maximum ROI."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-luxx-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Luxury Journey</h2>
          <p className="text-platinum/50">How we transform your vision into a digital masterpiece.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-6xl font-bold text-white/5 mb-6 group-hover:text-platinum/10 transition-colors duration-500">
                {step.number}
              </div>
              <div className="absolute top-8 left-0">
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-platinum/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gradient-to-r from-platinum/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;