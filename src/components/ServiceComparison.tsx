"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';

const features = [
  { name: "Custom UI/UX Design", starter: true, growth: true, premium: true },
  { name: "Mobile Responsive", starter: true, growth: true, premium: true },
  { name: "SEO Optimization", starter: true, growth: true, premium: true },
  { name: "Booking Integration", starter: "Basic", growth: "Advanced", premium: "Custom" },
  { name: "WhatsApp Automation", starter: false, growth: true, premium: true },
  { name: "Client CRM", starter: false, growth: true, premium: true },
  { name: "Native Mobile App", starter: false, growth: false, premium: true },
  { name: "Loyalty Program", starter: false, growth: false, premium: true },
  { name: "Priority Support", starter: false, growth: false, premium: true },
];

const ServiceComparison = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Compare Plans</h2>
          <p className="text-platinum/50">Find the perfect fit for your brand's digital evolution.</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-platinum/40 text-xs uppercase tracking-widest font-medium">Feature</th>
                <th className="py-6 px-4 text-white font-bold text-lg">Starter</th>
                <th className="py-6 px-4 text-white font-bold text-lg">Growth</th>
                <th className="py-6 px-4 text-white font-bold text-lg">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="py-6 px-4 text-platinum/80 text-sm">{feature.name}</td>
                  <td className="py-6 px-4">
                    {typeof feature.starter === 'string' ? (
                      <span className="text-platinum text-xs font-medium">{feature.starter}</span>
                    ) : feature.starter ? (
                      <Check size={16} className="text-platinum" />
                    ) : (
                      <Minus size={16} className="text-platinum/20" />
                    )}
                  </td>
                  <td className="py-6 px-4">
                    {typeof feature.growth === 'string' ? (
                      <span className="text-platinum text-xs font-medium">{feature.growth}</span>
                    ) : feature.growth ? (
                      <Check size={16} className="text-platinum" />
                    ) : (
                      <Minus size={16} className="text-platinum/20" />
                    )}
                  </td>
                  <td className="py-6 px-4">
                    {typeof feature.premium === 'string' ? (
                      <span className="text-platinum text-xs font-medium">{feature.premium}</span>
                    ) : feature.premium ? (
                      <Check size={16} className="text-platinum" />
                    ) : (
                      <Minus size={16} className="text-platinum/20" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;