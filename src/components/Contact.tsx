"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LuxxButton from './LuxxButton';
import { MessageSquare, Mail, MapPin } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showSuccess("Inquiry sent! Sayantan will review this personally.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 bg-luxx-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-platinum/60 leading-relaxed">
                Ready to scale your wellness brand? Reach out to Sayantan Acharya, Owner & CEO of Luxxtexh.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-platinum/80">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-platinum/40 uppercase tracking-widest">Email</p>
                  <p className="text-sm">acharyasayantan716@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-platinum/80">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-platinum/40 uppercase tracking-widest">Location</p>
                  <p className="text-sm">Kolkata, West Bengal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-platinum/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-platinum/60 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-platinum/60 ml-1">Business Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@luxury-spa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm text-platinum/60 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell Sayantan about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors resize-none"
                />
              </div>
              <div className="md:col-span-2 flex justify-start mt-4">
                <LuxxButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry to Sayantan"}
                </LuxxButton>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918777319551"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-luxx-black border border-platinum/30 rounded-full flex items-center justify-center shadow-neon-platinum z-50 text-platinum"
      >
        <MessageSquare size={24} />
      </motion.a>
    </section>
  );
};

export default Contact;