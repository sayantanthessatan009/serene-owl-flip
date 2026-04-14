"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const projects = [
  {
    title: "Aura Wellness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    impact: "+45% Bookings"
  },
  {
    title: "Zenith Spa Portal",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    impact: "2x Client Retention"
  },
  {
    title: "Luxe Retreats",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800",
    impact: "Premium Positioning"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-luxx-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-platinum/50">A glimpse into the luxury digital worlds we've built.</p>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 mx-8 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ oncethink
The user wants me to continue the previous response which was cut off.
The last file being written was `src/components/Portfolio.tsx`.
I need to finish that file and then continue with the rest of the requested components and pages.

Looking at the previous output:
```tsx
<dyad-write path="src/components/Portfolio.tsx" description="Creating the portfolio showcase section">
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const projects = [
  {
    title: "Aura Wellness App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    impact: "+45% Bookings"
  },
  {
    title: "Zenith Spa Portal",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    impact: "2x Client Retention"
  },
  {
    title: "Luxe Retreats",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800",
    impact: "Premium Positioning"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-luxx-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-platinum/50">A glimpse into the luxury digital worlds we've built.</p>
          </div>
          <div className="h-[1px] flex-grow bg-white/10 mx-8 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once
```

I will complete `src/components/Portfolio.tsx` and then proceed with:
- `src/components/Pricing.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/pages/Index.tsx` (to include all components)
- `src/components/Navbar.tsx` (for navigation)

I'll start by finishing the `Portfolio.tsx` file.true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxx-black via-luxx-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-platinum/60 text-sm mb-2 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-platinum">
                    {project.impact}
                  </span>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;