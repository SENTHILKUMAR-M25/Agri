import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Package,
  CheckCircle2,
  Truck,
  MapPin,
  FileText,
  MessageSquare,
  Clock,
  ChevronRight,
  ShoppingBag
} from "lucide-react";

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  // 🔗 LINKING TO REDUX (Showing items from the last successful transaction)
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  // Fallback data if cart is empty
  const hasActiveOrder = cartItems.length > 0;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* 🔹 HEADER SECTION */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Package size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Logistics Portal</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Track Orders.</h1>
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search by Order ID or Item..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm"
            />
          </div>
        </header>

        {/* 🔹 TABS SYSTEM */}
        <div className="flex p-1.5 bg-slate-200/50 backdrop-blur-sm rounded-[2rem] mb-10 w-fit">
          {["active", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all
                ${activeTab === tab ? "bg-white text-slate-900 shadow-md" : "text-slate-500 hover:text-slate-700"}`}
            >
              {tab === "active" ? "In Transit" : "Completed"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "active" ? (
            <motion.div
              key="active-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-12 gap-8"
            >
              {/* 🛠 LEFT: ACTIVE ORDER CONTENT */}
              <div className="lg:col-span-7 space-y-6">
                {!hasActiveOrder ? (
                  <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-16 text-center">
                    <ShoppingBag className="mx-auto text-slate-200 mb-4" size={48} />
                    <p className="text-slate-400 font-bold">No active shipments found.</p>
                  </div>
                ) : (
                  <div className="bg-white rounded-[3rem] border border-slate-200 p-8 shadow-sm">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                          Out for Delivery
                        </span>
                        <h2 className="text-xl font-black text-slate-900 tracking-tight">Shipment #AK-2101233</h2>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Estimated Arrival</p>
                        <p className="text-lg font-black text-emerald-600">Today, 4:00 PM</p>
                      </div>
                    </div>

                    {/* DYNAMIC ITEM LIST FROM CART */}
                    <div className="space-y-4 mb-8">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                          <img src={item.img} alt="" className="w-12 h-12 object-contain" />
                          <div className="flex-grow">
                            <p className="text-sm font-bold text-slate-800">{item.name}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">{item.qty} Unit • {item.unit}</p>
                          </div>
                          <span className="font-black text-slate-900 text-sm">₹{item.price * item.qty}</span>
                        </div>
                      ))}
                    </div>

                    {/* LIVE TRACKING BAR */}
                    <div className="pt-8 border-t border-slate-100">
                        <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                            <span>Status: In Transit</span>
                            <span>75% Complete</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                            />
                        </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 🛠 RIGHT: TRACKING TIMELINE BENTO */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                    <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                        <Clock size={18} className="text-emerald-400" /> Live Timeline
                    </h3>
                    
                    <div className="space-y-8 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-800" />
                        
                        <TimelineStep title="Order Placed" time="9:00 AM" completed />
                        <TimelineStep title="Processed at Hub" time="11:30 AM" completed />
                        <TimelineStep title="Out for Delivery" time="02:15 PM" active />
                        <TimelineStep title="Delivered" time="Expecting 4:00 PM" pending />
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                        <MessageSquare className="text-slate-400 group-hover:text-emerald-600 mb-2" size={20} />
                        <span className="text-[10px] font-black uppercase text-slate-600">Chat Support</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                        <FileText className="text-slate-400 group-hover:text-emerald-600 mb-2" size={20} />
                        <span className="text-[10px] font-black uppercase text-slate-600">Get Invoice</span>
                    </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* 🔹 PAST ORDERS LIST */
            <motion.div
              key="past-tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Re-use your map logic but with enhanced styling */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="group bg-white rounded-[2rem] p-6 border border-slate-100 hover:border-emerald-500/30 transition-all flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 tracking-tight">Harvest Bundle #{1200 + i}</h4>
                        <p className="text-xs text-slate-400 font-medium tracking-wide">Delivered on 14 Jan 2024 • ₹1,250</p>
                    </div>
                  </div>
                  <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* 🔹 HELPER COMPONENT: TIMELINE STEP */
const TimelineStep = ({ title, time, completed, active, pending }) => (
  <div className="flex items-start gap-4 relative z-10">
    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-4 border-slate-900 
      ${completed ? "bg-emerald-500" : active ? "bg-white animate-pulse" : "bg-slate-800"}`}>
      {completed && <CheckCircle2 size={12} className="text-slate-900" strokeWidth={3} />}
      {active && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
    </div>
    <div>
      <p className={`text-sm font-black tracking-tight ${pending ? "text-slate-600" : "text-white"}`}>{title}</p>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{time}</p>
    </div>
  </div>
);

export default MyOrders;