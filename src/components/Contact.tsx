"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LuxxButton from './LuxxButton';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-luxx-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-platinum/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-platinum/60 text-lg">Book a free consultation to discuss your luxury digital strategy.</p>
          </div>
          
          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-platinum/60 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-platinum/60 ml-1">Business Email</label>
              <input 
                type="email" 
                placeholder="john@luxury-spa.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm text-platinum/60 ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your vision..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <LuxxButton className="w-full md:w-auto px-12">
                Send Inquiry
              </LuxxButton>
            </div>
          </form>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="#"
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