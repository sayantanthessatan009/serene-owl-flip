"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LuxxButton from './LuxxButton';
import { X, CheckCircle2, Info, Copy, ExternalLink } from 'lucide-react';

interface GrowthPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GrowthPaymentModal = ({ isOpen, onClose }: GrowthPaymentModalProps) => {
  const [copied, setCopied] = useState(false);

  const steps = [
    "Open Paytm app on your phone",
    "Tap \"Pay\" on the home screen",
    "Search by mobile number: 8777319551",
    "Enter amount: ₹5,000",
    "Add note: Growth Plan Advance - LUXTEXC",
    "Tap Pay & confirm"
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("8777319551");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-luxtexc-black border border-white/10 text-white max-w-md rounded-3xl p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-2xl font-bold tracking-tight">Growth Plan — Advance Booking</DialogTitle>
              <button onClick={onClose} className="text-platinum/40 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-8">
            {/* Summary Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-platinum/40 text-xs uppercase tracking-widest">Advance Amount</span>
                <span className="text-xl font-bold text-white">₹5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-platinum/40 text-xs uppercase tracking-widest">Full Plan Value</span>
                <span className="text-sm font-medium">₹20,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-platinum/40 text-xs uppercase tracking-widest">Remaining After Booking</span>
                <span className="text-sm font-medium text-platinum">₹15,000</span>
              </div>
              <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                <span className="text-platinum/40 text-xs uppercase tracking-widest">Pay To</span>
                <span className="text-sm font-medium">Sayantan Acharya</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-platinum/40 text-xs uppercase tracking-widest">Paytm Number</span>
                <span className="text-sm font-medium">+91 8777319551</span>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              <p className="text-platinum/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Follow these steps</p>
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-bold text-platinum group-hover:border-platinum/50 transition-colors">
                    {index + 1}
                  </div>
                  <p className="text-sm text-platinum/80 leading-tight pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://paytm.com/pay/8777319551" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-full hover:bg-platinum transition-colors text-sm"
                >
                  Pay via Paytm
                  <ExternalLink size={14} />
                </a>
                <button 
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 border border-white text-white font-bold py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  {copied ? "Copied ✓" : "Copy Number"}
                  {!copied && <Copy size={14} />}
                </button>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-platinum/30 uppercase tracking-widest">
                  Open Paytm → Tap Pay → Search 8777319551
                </p>
              </div>
            </div>

            {/* Notice */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
              <Info size={16} className="text-platinum/40 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] text-platinum/40 leading-relaxed uppercase tracking-wider">
                This advance secures your Growth Plan booking. Remaining ₹15,000 due before project start.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-platinum/20">
              <CheckCircle2 size={12} />
              <span className="text-[10px] uppercase tracking-widest">Secure Advance via Paytm</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GrowthPaymentModal;