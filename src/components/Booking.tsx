"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import LuxxButton from './LuxxButton';
import { showSuccess, showError } from '@/utils/toast';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dates = ["Oct 24", "Oct 25", "Oct 26", "Oct 27", "Oct 28"];
  const times = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleBook = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "ce9f7557-639f-4cf4-bcf9-9e4174a8cfce");
    formData.append("date", selectedDate);
    formData.append("time", selectedTime);
    formData.append("from_name", "LUXTEXC-REGISTRATION");
    formData.append("subject", "New Strategy Session Booking - LUXTEXC");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showSuccess(`Consultation scheduled for ${selectedDate} at ${selectedTime}.`);
        setSelectedDate(null);
        setSelectedTime(null);
      } else {
        showError("Booking failed. Please try again.");
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
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Schedule a Consultation</h2>
            <p className="text-platinum/50">Reserve your private strategy session with our elite team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Date Selection */}
            <div>
              <div className="flex items-center gap-2 text-platinum/60 text-xs uppercase tracking-widest mb-6">
                <CalendarIcon size={14} />
                <span>Select Date</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`py-3 rounded-xl border transition-all ${
                      selectedDate === date 
                      ? "border-platinum bg-white/10 text-white" 
                      : "border-white/10 bg-white/5 text-platinum/40 hover:border-white/30"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <div className="flex items-center gap-2 text-platinum/60 text-xs uppercase tracking-widest mb-6">
                <Clock size={14} />
                <span>Select Time</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl border transition-all ${
                      selectedTime === time 
                      ? "border-platinum bg-white/10 text-white" 
                      : "border-white/10 bg-white/5 text-platinum/40 hover:border-white/30"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center">
            <LuxxButton 
              disabled={!selectedDate || !selectedTime || isSubmitting}
              onClick={handleBook}
              className="w-full md:w-auto px-12"
            >
              {isSubmitting ? "Booking..." : "Confirm Strategy Session"}
            </LuxxButton>
            <p className="text-platinum/20 text-[10px] uppercase tracking-widest mt-6">
              Limited availability for Q4 2023
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;