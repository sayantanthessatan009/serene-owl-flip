"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LuxxButton from './LuxxButton';
import { X, Smartphone, CheckCircle2, ExternalLink } from 'lucide-react';

interface StarterPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StarterPaymentModal = ({ isOpen, onClose }: StarterPaymentModalProps) => {
  const steps = [
    "Open Paytm app on your phone",
    "Tap \"Pay\" on the home screen",
    "Search by mobile number: 8777319551",
    "Enter amount: ₹7,000",
    "Add note: Starter Plan - LUXTEXC",
    "Tap Pay & confirm"
  ];

  const handleOpenPaytm = () => {
    window.location.href = "paytmmp://";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-luxtexc-black border border-white/10 text-white max-w-md rounded-3xl p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-2xl font-bold tracking-tight">Starter Plan Payment</DialogTitle>
              <button onClick={onClose} className="text-platinum/40 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-8">
            {/* Summary Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-platinum/40 text-xs uppercase tracking-widest">Amount</span>
                <span className="text-xl font-bold text-white">₹7,000</span>
              </div>
              <div className="flex justify-between items-center">
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

            {/* Action */}
            <div className="pt-4 space-y-4 text-center">
              <LuxxButton onClick={handleOpenPaytm} className="w-full py-4 text-lg shadow-neon-platinum">
                <Smartphone size={20} />
                Open Paytm App
              </LuxxButton>
              <p className="text-[10px] text-platinum/30 uppercase tracking-widest">
                Or manually open Paytm and follow steps above
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-platinum/20">
              <CheckCircle2 size={12} />
              <span className="text-[10px] uppercase tracking-widest">Secure Payment via Paytm</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StarterPaymentModal;