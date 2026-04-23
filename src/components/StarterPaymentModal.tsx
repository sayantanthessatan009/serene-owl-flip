"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LuxxButton from './LuxxButton';
import { X, ShieldCheck, CreditCard } from 'lucide-react';

interface StarterPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StarterPaymentModal = ({ isOpen, onClose }: StarterPaymentModalProps) => {
  const [customerName, setCustomerName] = useState("");
  const [note, setNote] = useState("Starter Plan - LUXTEXC");

  const paytmLink = `paytmmp://pay?pa=8777319551@paytm&pn=Sayantan%20Acharya&am=7000&cu=INR&tn=${encodeURIComponent(note)}&mc=IN`;

  const handlePayment = () => {
    window.location.href = paytmLink;
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

          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-platinum/40 text-xs uppercase tracking-widest mb-1">Receiver</p>
              <p className="text-lg font-semibold">Sayantan Acharya</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-platinum/60 ml-1">Amount (Locked)</label>
                <div className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white font-bold text-xl">
                  ₹7,000
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-platinum/60 ml-1">Your Name</label>
                <input 
                  type="text" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-platinum/60 ml-1">Note (Optional)</label>
                <input 
                  type="text" 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-platinum/50 transition-colors"
                />
              </div>
            </div>

            <div className="py-6 border-y border-white/5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-platinum/40">Amount</span>
                <span className="font-medium">₹7,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-platinum/40">To</span>
                <span className="font-medium">Sayantan Acharya</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-platinum/40">UPI ID</span>
                <span className="font-medium">8777319551@paytm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-platinum/40">Country</span>
                <span className="font-medium">India (+91)</span>
              </div>
            </div>

            <LuxxButton onClick={handlePayment} className="w-full py-4 text-lg">
              <CreditCard size={20} />
              Pay via Paytm
            </LuxxButton>

            <div className="flex items-center justify-center gap-2 text-[10px] text-platinum/20 uppercase tracking-widest">
              <ShieldCheck size={12} />
              <span>Secured Paytm Wallet Payment · India</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StarterPaymentModal;