"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    date: "Oct 12, 2023",
    title: "The Future of Digital Wellness: AI and Personalization",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Sep 28, 2023",
    title: "Why Mobile-First is Non-Negotiable for Luxury Spas",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Sep 15, 2023",
    title: "Crafting the Perfect Digital Client Journey",
    category: "Design",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  }
];

const Journal = () => {
  return (
    <section className="py-24 bg-luxtexc-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Luxury Journal</h2>
            <p className="text-platinum/50">Insights on digital transformation for the elite wellness industry.</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-platinum text-sm font-medium flex items-center gap-2 border-b border-platinum/20 pb-1"
          >
            View All Insights <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-platinum uppercase tracking-widest">
                  {article.category}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-platinum/40 text-xs uppercase tracking-widest">{article.date}</p>
                <h3 className="text-xl font-bold text-white group-hover:text-platinum transition-colors leading-tight">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;