import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, Wallet, CheckCircle2, Lock, CreditCard, ArrowLeft,
  Banknote, Receipt, Fingerprint, ShieldCheck, Tag, Info, MapPin
} from "lucide-react";

const paymentMethods = [
  { id: "gpay", label: "Google Pay", icon: Smartphone, desc: "Direct UPI Transfer" },
  { id: "phonepe", label: "PhonePe", icon: Wallet, desc: "Instant Secure Pay" },
  { id: "cards", label: "Debit / Credit Card", icon: CreditCard, desc: "Visa, Mastercard, RuPay" },
  { id: "cod", label: "Cash on Delivery", icon: Banknote, desc: "Pay at your doorstep" },
];

const ProfessionalPayment = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  const deliveryFee = subtotal > 500 || subtotal === 0 ? 0 : 40;
  const totalAmount = subtotal + deliveryFee;

  const [selected, setSelected] = useState("gpay");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handlePayment = () => {
    if (cartItems.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsDone(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans pb-20">
      
      {/* 1. TOP PROGRESS BAR */}
      <nav className="w-full border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="group flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-all font-semibold text-sm">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Cart
          </button>
          
          <div className="hidden md:flex items-center gap-10">
            <Step number="1" label="Cart" completed />
            <div className="w-12 h-[1px] bg-slate-200" />
            <Step number="2" label="Payment" active />
            <div className="w-12 h-[1px] bg-slate-200" />
            <Step number="3" label="Confirmation" />
          </div>

          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            <Lock size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">256-Bit SSL Secured</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.div 
              key="payment-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              {/* LEFT: SELECTION */}
              <div className="lg:col-span-7">
                <header className="mb-10">
                  <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Payment Method</h1>
                  <p className="text-slate-500">Choose how you'd like to complete your purchase safely.</p>
                </header>

                <div className="grid gap-4 mb-8">
                  {paymentMethods.map((method) => (
                    <PaymentOption 
                      key={method.id}
                      method={method}
                      isSelected={selected === method.id}
                      onSelect={() => setSelected(method.id)}
                    />
                  ))}
                </div>

                {/* TRUST SECTION */}
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex gap-5 items-start">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <ShieldCheck className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Agri-Kisan Purchase Protection</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Your transaction is protected. If your order doesn't arrive or isn't as described, 
                      we guarantee a full refund within 7 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: SUMMARY */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm sticky top-32">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Receipt size={20} className="text-slate-400" /> Order Summary
                  </h3>

                  {/* ITEM LIST */}
                  <div className="space-y-4 mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-100">
                            {item.qty}x
                          </span>
                          <span className="font-medium text-slate-700">{item.name}</span>
                        </div>
                        <span className="font-bold">₹{(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  {/* PROMO CODE */}
                  <div className="relative mb-8">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Promo Code" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-emerald-500 transition-all"
                    />
                  </div>

                  {/* CALCULATION */}
                  <div className="space-y-3 border-t border-slate-50 pt-6">
                    <div className="flex justify-between text-sm text-slate-500 font-medium">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-500 font-medium">
                      <span>Logistics Fee</span>
                      <span className={deliveryFee === 0 ? "text-emerald-600 font-bold" : ""}>
                        {deliveryFee === 0 ? "Complimentary" : `₹${deliveryFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-4 mt-2 border-t-2 border-dashed border-slate-100">
                      <span className="font-bold text-slate-900">Total Payable</span>
                      <span className="text-3xl font-black text-slate-900 tracking-tighter">₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <button 
                    disabled={isProcessing}
                    onClick={handlePayment}
                    className="w-full mt-8 py-5 bg-slate-900 hover:bg-black text-white rounded-2xl font-bold transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 disabled:bg-slate-300"
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      `Secure Payment · ₹${totalAmount.toLocaleString()}`
                    )}
                  </button>

                  <p className="mt-6 text-[10px] text-center text-slate-400 font-medium uppercase tracking-widest flex items-center justify-center gap-2">
                    <Fingerprint size={12} /> Biometric & 3D Secure Verification Enabled
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* SUCCESS STATE */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-[3rem] p-16 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 shadow-lg shadow-emerald-200">
                <CheckCircle2 size={40} className="text-white -rotate-12" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Transaction Successful</h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Your order <span className="text-slate-900 font-bold">#AK-202688</span> has been confirmed. 
                Our local logistics partner will contact you shortly for the delivery schedule.
              </p>
              <div className="flex gap-4">
                <button onClick={() => navigate("/myorder")} className="flex-1 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all">Track Order</button>
                <button onClick={() => navigate("/")} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">Return to Hub</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* Helper Components */

const Step = ({ number, label, active, completed }) => (
  <div className={`flex items-center gap-2 ${active ? 'opacity-100' : 'opacity-40'}`}>
    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 
      ${completed ? 'bg-emerald-500 border-emerald-500 text-white' : active ? 'border-slate-900 text-slate-900' : 'border-slate-300 text-slate-400'}`}>
      {completed ? <CheckCircle2 size={12} /> : number}
    </div>
    <span className={`text-[10px] font-black uppercase tracking-widest ${active ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
  </div>
);

const PaymentOption = ({ method, isSelected, onSelect }) => (
  <label className={`group cursor-pointer flex items-center justify-between p-6 rounded-3xl border-2 transition-all 
    ${isSelected ? 'border-emerald-500 bg-emerald-50/30 ring-4 ring-emerald-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}>
    <div className="flex items-center gap-5">
      <input type="radio" checked={isSelected} onChange={onSelect} className="w-5 h-5 accent-emerald-500 cursor-pointer" />
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors 
        ${isSelected ? 'bg-white text-emerald-500' : 'bg-slate-50 text-slate-400'}`}>
        <method.icon size={22} />
      </div>
      <div>
        <p className="font-bold text-slate-900">{method.label}</p>
        <p className="text-xs text-slate-500">{method.desc}</p>
      </div>
    </div>
  </label>
);

export default ProfessionalPayment;