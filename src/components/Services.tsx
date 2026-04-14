"use client";

import React from 'react';
import GlassCard from './GlassCard';
import { Smartphone, Globe, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Custom Mobile Apps",
    description: "Bespoke booking, loyalty, and CRM systems designed for the elite wellness industry.",
    icon: Smartphone
  },
  {
    title: "Premium Web Design",
    description: "SEO-optimized, mobile-first digital storefronts that reflect your brand's luxury status.",
    icon: Globe
  },
  {
    title: "Automation Systems",
    description: "Seamless WhatsApp integration, scheduling, and payment flows to streamline operations.",
    icon: Zap
  },
  {
    title: "Brand Identity",
    description: "Strategic visual positioning for luxury wellness businesses looking to stand out.",
    icon: ShieldCheck
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-luxx-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Elite Services</h2>
          <p className="text-platinum/50 max-w-xl mx-auto">Tailored digital solutions for high-end spas and wellness centers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <service.icon className="text-platinum" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-platinum/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;