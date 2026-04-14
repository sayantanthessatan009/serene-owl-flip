"use client";

import React from 'react';
import GlassCard from './GlassCard';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rossi",
    role: "Owner, Serenity Spa",
    content: "Luxxtexh transformed our booking process. Our clients love the premium feel of the app, and our bookings have increased by 40% since launch.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Marcus Thorne",
    role: "Director, Zenith Wellness",
    content: "The attention to detail is unmatched. They didn't just build a website; they built a digital experience that perfectly matches our brand's luxury status.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sophia Chen",
    role: "Founder, Aura Retreats",
    content: "Working with a developer who understands the wellness industry made all the difference. The automation systems have saved us hours of manual work.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-luxx-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Success</h2>
          <p className="text-platinum/50">Trusted by the world's most exclusive wellness brands.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-platinum text-platinum" />
                ))}
              </div>
              
              <p className="text-platinum/80 italic mb-8 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-platinum/40 text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;