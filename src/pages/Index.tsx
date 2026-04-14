"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="bg-luxx-black min-h-screen selection:bg-platinum selection:text-black">
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Index;