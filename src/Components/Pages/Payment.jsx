import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, Smartphone, Truck, ChevronRight, 
  ShieldCheck, TicketPercent, Wallet, CheckCircle2, Lock
} from "lucide-react";

const paymentMethods = [
  { id: "gpay", label: "Google Pay", icon: Smartphone },
  { id: "phonepe", label: "PhonePe", icon: Wallet },
  { id: "paytm", label: "Paytm", icon: CreditCard },
  { id: "upi", label: "Other UPI", icon: Smartphone },
];

const PaymentMethod = () => {
  const [selected, setSelected] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center p-0 sm:p-6 lg:p-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl bg-white sm:rounded-[3rem] shadow-2xl shadow-slate-300/50 overflow-hidden flex flex-col lg:flex-row min-h-screen sm:min-h-[600px]"
      >
        
        {/* --- LEFT SIDE: ORDER SUMMARY (Blue/Dark Section) --- */}
        {/* Visible as top bar on mobile, left sidebar on laptop */}
        <div className="lg:w-2/5 bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8 text-green-400">
              <ShieldCheck size={20} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Secure Checkout</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black mb-2 leading-tight">Review your <br/> Purchase.</h2>
            <p className="text-slate-400 text-sm font-medium mb-10">Order #AK-99210</p>

            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-slate-400 text-sm">Subtotal</span>
                <span className="font-bold">₹5,949</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-slate-400 text-sm">H Kisan Discount</span>
                <span className="font-bold text-green-400">-₹500</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold">Total Amount</span>
                <span className="text-3xl font-black text-green-50">₹5,449</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl mt-12">
            <Lock className="text-slate-500" size={18} />
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-bold tracking-widest">
              Your data is encrypted with 256-bit SSL security protocol.
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: PAYMENT SELECTION --- */}
        <div className="lg:w-3/5 p-6 lg:p-12 flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-black text-slate-800 mb-2">Payment Method</h3>
            <p className="text-slate-400 text-sm">Choose how you want to pay for your harvest.</p>
          </div>

          <div className="space-y-8 flex-1">
            {/* Digital Wallets Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelected(method.id)}
                  className={`flex flex-col items-center p-5 rounded-[2rem] border-2 transition-all group
                    ${selected === method.id 
                      ? "border-green-600 bg-green-50 shadow-md scale-95" 
                      : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"}`}
                >
                  <div className={`p-3 rounded-2xl mb-3 transition-colors 
                    ${selected === method.id ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <method.icon size={24} />
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-tight text-center
                    ${selected === method.id ? 'text-green-700' : 'text-slate-500'}`}>
                    {method.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Pay on Delivery Option */}
            <button
              onClick={() => setSelected("cod")}
              className={`w-full flex items-center justify-between p-6 rounded-[2.5rem] border-2 transition-all
                ${selected === "cod" 
                  ? "border-green-600 bg-green-50" 
                  : "border-slate-100 bg-white hover:border-slate-200"}`}
            >
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-[1.5rem] ${selected === "cod" ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <Truck size={28} />
                </div>
                <div className="text-left">
                  <span className={`block font-black text-base uppercase tracking-tight ${selected === "cod" ? 'text-green-900' : 'text-slate-700'}`}>
                    Pay on Delivery
                  </span>
                  <p className="text-xs text-slate-400 font-medium">No advance payment required</p>
                </div>
              </div>
              <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all
                ${selected === "cod" ? 'border-green-600 bg-green-600' : 'border-slate-200'}`}>
                {selected === "cod" && <CheckCircle2 className="text-white" size={18} />}
              </div>
            </button>
          </div>

          {/* Action Button */}
          <div className="mt-12">
            <button 
              disabled={isProcessing}
              onClick={() => setIsProcessing(true)}
              className="w-full relative overflow-hidden py-6 bg-green-600 hover:bg-green-700 text-white rounded-[2rem] text-lg font-black transition-all shadow-xl shadow-green-100 active:scale-[0.98] disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {isProcessing ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2">
                    <span>Pay ₹5,449 & Place Order</span>
                    <ChevronRight size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default PaymentMethod;