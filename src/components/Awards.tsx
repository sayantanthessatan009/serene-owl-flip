"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const awards = [
  { title: "Best Wellness App 2023", organization: "Digital Excellence Awards", icon: Trophy },
  { title: "Luxury Design of the Year", organization: "Global Web Awards", icon: Award },
  { title: "Innovation in UX", organization: "Tech Innovators", icon: Star },
  { title: "Top Agency 2024", organization: "Wellness Business Review", icon: Medal },
];

const Awards = () => {
  return (
    <section className="py-24 bg-luxtexc-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-platinum mb-6">
                <award.icon size={28} />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{award.title}</h4>
              <p className="text-platinum/30 text-[10px] uppercase tracking-widest">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;