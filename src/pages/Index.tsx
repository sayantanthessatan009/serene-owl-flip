"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import WhyLuxtexc from '@/components/WhyLuxtexc';
import Philosophy from '@/components/Philosophy';
import Founder from '@/components/Founder';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import GrainEffect from '@/components/GrainEffect';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="bg-luxtexc-black min-h-screen selection:bg-platinum selection:text-black cursor-none relative">
      <GrainEffect />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Partners />
      <div id="services">
        <Services />
      </div>
      <Stats />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="process">
        <Process />
      </div>
      <div id="why-luxtexc">
        <WhyLuxtexc />
      </div>
      <Philosophy />
      <Founder />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Newsletter />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Index;