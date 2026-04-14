"use client";

import React from 'react';
import GlassCard from './GlassCard';
import LuxxButton from './LuxxButton';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Custom",
    description: "Perfect for boutique spas establishing their digital presence.",
    features: ["Premium Website Design", "SEO Optimization", "Mobile Responsive", "Contact Form Integration"],
    highlight: false
  },
  {
    name: "Growth",
    price: "Custom",
    description: "Advanced systems for growing wellness businesses.",
    features: ["Everything in Starter", "Custom Booking System", "Client CRM", "WhatsApp Automation"],
    highlight: true
  },
  {
    name: "Premium",
    price: "Custom",
    description: "The ultimate digital ecosystem for elite brands.",
    features: ["Everything in Growth", "Custom Mobile App", "Loyalty Program", "Priority Support"],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-luxx-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Investment Plans</h2>
          <p className="text-platinum/50">Transparent pricing for luxury digital transformation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1}
              className={plan.highlight ? "border-platinum/40 shadow-neon-platinum" : ""}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-platinum mb-4">{plan.price}</div>
                <p className="text-platinum/60 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-platinum/80 text-sm">
                    <Check size={16} className="text-platinum" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <LuxxButton 
                variant={plan.highlight ? "primary" : "outline"} 
                className="w-full"
              >
                Inquire Now
              </LuxxButton>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;