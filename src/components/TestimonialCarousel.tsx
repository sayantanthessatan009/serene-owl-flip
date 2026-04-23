"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rossi",
    role: "Owner, Serenity Spa",
    content: "Luxtexc transformed our booking process. Our clients love the premium feel of the app, and our bookings have increased by 40% since launch.",
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

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-luxtexc-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Success</h2>
          <p className="text-platinum/50">Trusted by the world's most exclusive wellness brands.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="p-10 md:p-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm relative">
                    <Quote className="absolute top-10 right-10 text-platinum/10" size={80} />
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, starI) => (
                        <Star key={starI} size={16} className="fill-platinum text-platinum" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl text-white italic mb-10 leading-relaxed">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border border-white/10 object-cover" />
                      <div>
                        <h4 className="text-white font-bold">{t.name}</h4>
                        <p className="text-platinum/40 text-xs uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-platinum hover:bg-white/10 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-platinum hover:bg-white/10 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;