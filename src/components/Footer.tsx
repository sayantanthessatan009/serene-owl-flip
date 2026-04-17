"use client";

import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-16 bg-luxx-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-tighter mb-4">LUXXTEXH</h2>
            <p className="text-platinum/40 text-sm max-w-xs leading-relaxed">
              Led by Sayantan Acharya, we craft high-end digital experiences for elite wellness brands. Elevate your presence, maximize your bookings.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-platinum/60 hover:text-white hover:border-white/30 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/in/sayantan-acharya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-platinum/60 hover:text-white hover:border-white/30 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-platinum/60 hover:text-white hover:border-white/30 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-platinum/40 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Direct Contact</h4>
            <ul className="space-y-4 text-sm text-platinum/40">
              <li>sayantanacharya.work@gmail.com</li>
              <li>Kolkata, West Bengal, India</li>
              <li>+91 89107 65432</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-platinum/20 text-xs">
            © {new Date().getFullYear()} Luxxtexh. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-platinum/20">
            <a href="#" className="hover:text-platinum/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-platinum/40 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;