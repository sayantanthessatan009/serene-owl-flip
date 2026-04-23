"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider";
import LuxxButton from './LuxxButton';
import { TrendingUp, Users, Clock } from 'lucide-react';

const ROICalculator = () => {
  const [monthlyBookings, setMonthlyBookings] = useState([500]);
  const [avgTicket, setAvgTicket] = useState([150]);
  
  const currentRevenue = monthlyBookings[0] * avgTicket[0];
  const projectedGrowth = 0.45; // 45% increase based on case studies
  const projectedRevenue = currentRevenue * (1 + projectedGrowth);
  const revenueIncrease = projectedRevenue - currentRevenue;

  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ROI Projection</h2>
            <p className="text-platinum/50">Calculate the potential impact of a LUXTEXC digital transformation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-12 p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium">Monthly Bookings</label>
                  <span className="text-platinum font-bold">{monthlyBookings[0]}</span>
                </div>
                <Slider 
                  value={monthlyBookings} 
                  onValueChange={setMonthlyBookings} 
                  max={2000} 
                  step={10}
                  className="py-4"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium">Average Ticket Value ($)</label>
                  <span className="text-platinum font-bold">${avgTicket[0]}</span>
                </div>
                <Slider 
                  value={avgTicket} 
                  onValueChange={setAvgTicket} 
                  max={1000} 
                  step={5}
                  className="py-4"
                />
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-platinum/40 text-xs uppercase tracking-widest mb-4">Estimated Gains</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-platinum" />
                    <span className="text-sm text-platinum/60">+45% Bookings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-platinum" />
                    <span className="text-sm text-platinum/60">-20hrs Admin/wk</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-platinum/10 blur-[100px] rounded-full" />
              <motion.div 
                key={revenueIncrease}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative p-10 rounded-3xl border border-platinum/20 bg-luxtexc-black shadow-neon-platinum text-center"
              >
                <TrendingUp className="mx-auto text-platinum mb-6" size={48} />
                <h3 className="text-platinum/60 text-sm uppercase tracking-[0.2em] mb-2">Projected Annual Growth</h3>
                <div className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                  ${(revenueIncrease * 12).toLocaleString()}
                </div>
                <p className="text-platinum/40 text-sm mb-10 leading-relaxed">
                  Based on our average client performance metrics after implementing a full digital ecosystem.
                </p>
                <LuxxButton className="w-full">Get Your Custom Roadmap</LuxxButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;