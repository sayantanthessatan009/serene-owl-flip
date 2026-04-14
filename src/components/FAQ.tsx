"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most luxury web platforms are delivered within 4-6 weeks, while custom mobile applications typically take 8-12 weeks from discovery to launch."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer premium maintenance packages that include security updates, performance optimization, and priority feature requests to ensure your platform stays elite."
  },
  {
    question: "Can you integrate with my existing booking software?",
    answer: "Absolutely. We specialize in seamless integrations with industry leaders like Mindbody, Booker, and Fresha, or we can build a bespoke system tailored to your needs."
  },
  {
    question: "What makes Luxxtexh different from other agencies?",
    answer: "We focus exclusively on the luxury wellness niche. We understand the aesthetic and functional requirements of high-end spas, ensuring your digital presence matches your physical excellence."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-luxx-black relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common Inquiries</h2>
          <p className="text-platinum/50">Everything you need to know about our luxury digital process.</p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 bg-white/5 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-white hover:text-platinum transition-colors text-left py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-platinum/60 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;