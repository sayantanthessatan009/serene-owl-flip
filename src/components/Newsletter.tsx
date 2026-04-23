"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LuxxButton from './LuxxButton';
import { showSuccess, showError } from '@/utils/toast';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with your actual key
    formData.append("email", email);
    formData.append("from_name", "LUXTEXC-REGISTRATION");
    formData.append("subject", "New Newsletter Subscription - LUXTEXC");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showSuccess("Welcome to the inner circle. Check your inbox soon.");
        setEmail("");
      } else {
        showError("Subscription failed. Please try again.");
      }
    } catch (error) {
      showError("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(229,228,226,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Luxury Digital Digest</h2>
            <p className="text-platinum/60 text-lg mb-10">
              Join 5,000+ wellness founders receiving weekly insights on digital transformation and premium branding.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your elite email"
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-platinum/50 transition-colors"
              />
              <LuxxButton type="submit" disabled={isSubmitting} className="px-8">
                {isSubmitting ? "Joining..." : "Subscribe"}
              </LuxxButton>
            </form>
            <p className="text-platinum/20 text-xs mt-6">
              No spam. Only pure value. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;