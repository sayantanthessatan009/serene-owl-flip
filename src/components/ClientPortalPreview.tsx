"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, BarChart3, Bell, Settings } from 'lucide-react';

const ClientPortalPreview = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-platinum/40 uppercase tracking-[0.3em] text-xs font-medium mb-4 block">The Elite Experience</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Private <br />
              <span className="text-platinum">Digital Command Center</span>
            </h2>
            <p className="text-platinum/60 text-lg mb-8 leading-relaxed">
              Every LUXTEXC partner receives access to a bespoke client portal. Monitor your growth, manage bookings, and communicate with your dedicated team in one secure, high-end environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: BarChart3, title: "Real-time Analytics", desc: "Track revenue and booking trends instantly." },
                { icon: Users, title: "Client Insights", desc: "Deep dive into your most loyal customers." },
                { icon: Calendar, title: "Smart Scheduling", desc: "AI-optimized staff and room allocation." },
                { icon: Bell, title: "Instant Alerts", desc: "Never miss a high-value booking or inquiry." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-platinum">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-platinum/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            {/* Mockup of the Portal */}
            <div className="relative rounded-2xl border border-white/10 bg-luxtexc-black shadow-2xl overflow-hidden aspect-[16/10]">
              {/* Sidebar */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 border-r border-white/5 bg-white/[0.02] flex flex-col items-center py-8 gap-8">
                <div className="w-8 h-8 rounded-full bg-platinum/20 mb-4" />
                <LayoutDashboard size={20} className="text-platinum" />
                <Users size={20} className="text-platinum/20" />
                <Calendar size={20} className="text-platinum/20" />
                <BarChart3 size={20} className="text-platinum/20" />
                <div className="mt-auto flex flex-col gap-8">
                  <Bell size={20} className="text-platinum/20" />
                  <Settings size={20} className="text-platinum/20" />
                </div>
              </div>
              
              {/* Main Content */}
              <div className="ml-16 md:ml-20 p-6 md:p-10">
                <div className="flex justify-between items-center mb-10">
                  <div className="h-4 w-32 bg-white/10 rounded" />
                  <div className="h-8 w-8 rounded-full bg-white/10" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-24 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="h-2 w-12 bg-white/10 rounded mb-4" />
                      <div className="h-4 w-20 bg-white/20 rounded" />
                    </div>
                  ))}
                </div>
                
                <div className="h-48 rounded-xl border border-white/5 bg-white/[0.03] p-6 relative overflow-hidden">
                  <div className="h-2 w-24 bg-white/10 rounded mb-8" />
                  <div className="flex items-end gap-2 h-24">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                        className="flex-grow bg-platinum/20 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Glass Overlay for "Preview" feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxtexc-black/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-platinum/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalPreview;