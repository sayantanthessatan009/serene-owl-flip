"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LuxxButton from './LuxxButton';
import { ChevronRight, ChevronLeft, Check, Sparkles } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';

const steps = [
  {
    id: "service",
    title: "What are we building?",
    subtitle: "Select the primary focus of your digital transformation.",
    options: ["Custom Mobile App", "Premium Web Platform", "Automation Ecosystem", "Full Brand Identity"]
  },
  {
    id: "scale",
    title: "Business Scale",
    subtitle: "Help us understand the scope of your operations.",
    options: ["Boutique (1-2 Locations)", "Regional (3-10 Locations)", "Global Enterprise", "New Venture"]
  },
  {
    id: "timeline",
    title: "Desired Timeline",
    subtitle: "When do you envision your digital launch?",
    options: ["Immediate (1-2 Months)", "Strategic (3-6 Months)", "Planning Phase", "Flexible"]
  }
];

const InquiryWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelect = (option: string) => {
    setSelections({ ...selections, [steps[currentStep].id]: option });
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 400);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
    setIsComplete(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with your actual key
    formData.append("from_name", "LUXTEXC-REGISTRATION");
    formData.append("subject", "New Concierge Inquiry - LUXTEXC");
    
    // Add selections to form data
    Object.entries(selections).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showSuccess("Concierge inquiry received. Sayantan will reach out shortly.");
        handleReset();
      } else {
        showError("Submission failed. Please try again.");
      }
    } catch (error) {
      showError("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-luxtexc-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-platinum/20 bg-white/5 text-platinum/60 text-xs uppercase tracking-widest mb-6">
            <Sparkles size={12} />
            <span>Concierge Service</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Your Journey</h2>
          <p className="text-platinum/50">A tailored approach to your digital excellence.</p>
        </div>

        <div className="relative min-h-[400px] bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="mb-10">
                  <div className="text-platinum/40 text-xs uppercase tracking-widest mb-2">Step {currentStep + 1} of {steps.length}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{steps[currentStep].title}</h3>
                  <p className="text-platinum/60">{steps[currentStep].subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                        selections[steps[currentStep].id] === option 
                        ? "border-platinum bg-white/10" 
                        : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className={`text-lg font-medium transition-colors ${
                        selections[steps[currentStep].id] === option ? "text-white" : "text-platinum/60 group-hover:text-platinum"
                      }`}>
                        {option}
                      </span>
                      {selections[steps[currentStep].id] === option && (
                        <motion.div 
                          layoutId="check"
                          className="absolute right-6 top-1/2 -translate-y-1/2 text-platinum"
                        >
                          <Check size={20} />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-12 flex justify-between items-center">
                  <button 
                    disabled={currentStep === 0}
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex items-center gap-2 text-platinum/40 hover:text-platinum transition-colors disabled:opacity-0"
                  >
                    <ChevronLeft size={18} />
                    Back
                  </button>
                  <div className="flex gap-2">
                    {steps.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === currentStep ? "w-8 bg-platinum" : "w-2 bg-white/10"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-platinum/10 border border-platinum/20 flex items-center justify-center mx-auto mb-8 text-platinum">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Tailored Strategy Ready</h3>
                <p className="text-platinum/60 mb-10 max-w-md mx-auto">
                  Based on your selections, we've prepared a preliminary roadmap for your digital transformation.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <LuxxButton onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Finalize Inquiry"}
                    {!isSubmitting && <ChevronRight size={18} />}
                  </LuxxButton>
                  <button 
                    onClick={handleReset}
                    className="text-platinum/40 hover:text-platinum transition-colors text-sm"
                  >
                    Start Over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-platinum/5 rounded-full blur-[100px] -mr-32 -mt-32" />
        </div>
      </div>
    </section>
  );
};

export default InquiryWizard;