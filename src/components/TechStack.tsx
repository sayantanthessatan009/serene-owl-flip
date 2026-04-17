"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Lock, Rocket, Smartphone } from 'lucide-react';

const techs = [
  { name: "React / Next.js", desc: "High-performance frontend architecture.", icon: Code2 },
  { name: "Node.js / Bun", desc: "Lightning-fast server-side execution.", icon: Cpu },
  { name: "Supabase / PostgreSQL", desc: "Secure, scalable data management.", icon: Lock },
  { name: "Tailwind CSS", desc: "Bespoke, responsive luxury styling.", icon: Globe2 },
  { name: "Framer Motion", desc: "Fluid, cinematic user interactions.", icon: Rocket },
  { name: "React Native", desc: "Native mobile performance for iOS & Android.", icon: Smartphone },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Tech Stack</h2>
            <p className="text-platinum/50">We utilize the world's most advanced technologies to ensure your platform is fast, secure, and future-proof.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-white/5 mx-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-platinum/5 flex items-center justify-center text-platinum mb-6 group-hover:scale-110 transition-transform duration-500">
                <tech.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
              <p className="text-platinum/40 text-sm leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;