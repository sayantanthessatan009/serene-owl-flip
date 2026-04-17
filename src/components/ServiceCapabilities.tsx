"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Globe, Zap, ShieldCheck, Database, Share2 } from 'lucide-react';

const capabilities = [
  {
    id: "mobile",
    title: "Mobile Ecosystems",
    icon: Smartphone,
    description: "We build native-performance iOS and Android applications that serve as the primary touchpoint for your elite clientele.",
    features: ["Custom Booking Engines", "Push Notification Strategy", "Biometric Security", "Offline Functionality"]
  },
  {
    id: "web",
    title: "Digital Storefronts",
    icon: Globe,
    description: "High-conversion, SEO-optimized web platforms that mirror the aesthetic excellence of your physical wellness space.",
    features: ["Headless CMS Integration", "Sub-second Load Times", "Responsive Luxury Design", "Interactive Virtual Tours"]
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    icon: Zap,
    description: "Streamline your operations with bespoke automation flows that handle scheduling, payments, and client follow-ups.",
    features: ["WhatsApp API Integration", "Automated Loyalty Rewards", "Dynamic Pricing Engines", "Smart Staff Scheduling"]
  }
];

const ServiceCapabilities = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-platinum/50 max-w-2xl mx-auto">
            A deeper look into the technical pillars that support your digital transformation.
          </p>
        </div>

        <Tabs defaultValue="mobile" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-full p-1 h-auto mb-12">
            {capabilities.map((cap) => (
              <TabsTrigger 
                key={cap.id} 
                value={cap.id}
                className="rounded-full py-4 text-platinum/60 data-[state=active]:bg-white/10 data-[state=active]:text-white transition-all"
              >
                <cap.icon size={18} className="mr-2 hidden md:block" />
                {cap.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {capabilities.map((cap) => (
            <TabsContent key={cap.id} value={cap.id}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">{cap.title}</h3>
                  <p className="text-platinum/60 text-lg leading-relaxed mb-8">
                    {cap.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cap.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-platinum/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-platinum" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-luxtexc-black flex items-center justify-center">
                  <cap.icon size={80} className="text-platinum/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-platinum/5 to-transparent" />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceCapabilities;