"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Revenue Growth", value: "120%", suffix: "+" },
  { label: "Active Users", value: "50", suffix: "k+" },
  { label: "Client Retention", value: "95", suffix: "%" },
  { label: "Projects Delivered", value: "200", suffix: "+" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-luxx-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-platinum/40 text-sm uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;