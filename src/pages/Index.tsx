"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import ServiceCapabilities from '@/components/ServiceCapabilities';
import Portfolio from '@/components/Portfolio';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import Stats from '@/components/Stats';
import DigitalEcosystem from '@/components/DigitalEcosystem';
import LuxuryStandards from '@/components/LuxuryStandards';
import ClientPortalPreview from '@/components/ClientPortalPreview';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import WhyLuxtexc from '@/components/WhyLuxtexc';
import Philosophy from '@/components/Philosophy';
import Founder from '@/components/Founder';
import GlobalPresence from '@/components/GlobalPresence';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Newsletter from '@/components/Newsletter';
import InquiryWizard from '@/components/InquiryWizard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import GrainEffect from '@/components/GrainEffect';
import Preloader from '@/components/Preloader';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="bg-luxtexc-black min-h-screen selection:bg-platinum selection:text-black cursor-none relative">
      <Preloader />
      <GrainEffect />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Partners />
      <div id="services">
        <Services />
      </div>
      <ServiceCapabilities />
      <Stats />
      <div id="portfolio">
        <Portfolio />
      </div>
      <FeaturedCaseStudy />
      <DigitalEcosystem />
      <LuxuryStandards />
      <ClientPortalPreview />
      <div id="process">
        <Process />
      </div>
      <TechStack />
      <div id="why-luxtexc">
        <WhyLuxtexc />
      </div>
      <Philosophy />
      <Founder />
      <GlobalPresence />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Journal />
      <div id="faq">
        <FAQ />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Newsletter />
      <InquiryWizard />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Index;