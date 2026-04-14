"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-luxx-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tighter">LUXXTEXH</h2>
            <p className="text-platinum/40 text-sm mt-2">Luxury Apps Delivered.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-platinum/60">
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-platinum/40 text-xs">
            © {new Date().getFullYear()} Luxxtexh. All rights reserved.
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <div className="inline-block h-1 w-24 bg-gradient-to-r from-transparent via-platinum/20 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;