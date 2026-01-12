
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Edit3,
  Phone,
  MapPin,
  Award,
  ShieldCheck,
  Zap,
  Bookmark,
  Grid,
  Package,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  Plus,
  ArrowLeft,
  Image as ImageIcon,
  X,
  ChevronRight,
  IndianRupee,
  Info,
  Truck,
  Calendar
} from "lucide-react";
import { useSelector } from "react-redux";

// --- MAIN DASHBOARD COMPONENT ---
const FarmerDashboard = () => {
  const [currentView, setCurrentView] = useState("profile"); // 'profile' or 'add'
  
  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <AnimatePresence mode="wait">
        {currentView === "profile" ? (
          <ProfessionalProfile key="profile" onAdd={() => setCurrentView("add")} />
        ) : (
          <AddProduct key="add" onBack={() => setCurrentView("profile")} />
        )}
      </AnimatePresence>
    </div>
  );
};

// --- COMPONENT 1: PROFESSIONAL PROFILE ---
const ProfessionalProfile = ({ onAdd }) => {
  const [activeTab, setActiveTab] = useState("posts");
  const user = useSelector((state) => state.auth.user);
  const savedProducts = useSelector((state) => state.saved.items);

  const name = user?.name || "Raj Rathod";
  const mobile = user?.mobile || "+91 96974 48866";
  const location = user?.location || "Maharashtra, India";

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* HEADER */}
      <div className="h-72 w-full bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-slate-900" />
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 -mt-32">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            <div className="relative">
              <div className="w-44 h-44 rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl">
                <img src={user?.profileImg || "/img/profile.jpg"} alt="profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-3 rounded-2xl shadow-lg border-4 border-white">
                <ShieldCheck size={20} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <h1 className="text-4xl font-black text-slate-900">{name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 font-bold text-[11px] uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Phone size={14} className="text-emerald-500" /> {mobile}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-emerald-500" /> {location}</span>
              </div>
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <div className="text-center bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                  <p className="text-lg font-black text-slate-900">4.9</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase">Rating</p>
                </div>
                <div className="text-center bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                  <p className="text-lg font-black text-slate-900">1.2k</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase">Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex bg-slate-100 p-1.5 rounded-[2rem] my-10 max-w-md mx-auto">
          {[{id: "posts", label: "Inventory", icon: <Grid size={18}/>}, {id: "liked", label: "Liked", icon: <Bookmark size={18}/>}].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[1.8rem] text-xs font-black uppercase transition-all ${activeTab === tab.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-400"}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "posts" ? (
             user?.inventory?.map((item, i) => (
               <div key={i} className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <img src={item.img} className="rounded-3xl h-40 w-full object-cover mb-4" />
                  <h4 className="font-black text-slate-800 ml-2">{item.name}</h4>
                  <p className="text-emerald-600 font-black ml-2">₹{item.price}/{item.unit}</p>
               </div>
             )) || <div className="col-span-full text-center py-20 text-slate-400 font-bold">No Products Yet</div>
          ) : (
            savedProducts.map((p) => (
              <div key={p.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 flex items-center gap-4">
                <img src={p.img} className="w-16 h-16 rounded-2xl object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                  <p className="text-emerald-600 font-black text-xs">₹{p.price}/{p.unit}</p>
                </div>
                <ExternalLink size={16} className="text-slate-300" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* FLOATING ACTION BAR */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-slate-900 p-2 rounded-[2.5rem] shadow-2xl z-50">
        <button onClick={onAdd} className="flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black hover:bg-emerald-400 transition-all">
          <Plus size={20} /> Add Product
        </button>
        <button className="p-4 bg-white/10 text-white rounded-full"><Edit3 size={20} /></button>
      </div>
    </motion.div>
  );
};

// --- COMPONENT 2: ADD PRODUCT VIEW ---
const AddProduct = ({ onBack }) => {
  const [images, setImages] = useState([]);
  const [delivery, setDelivery] = useState("pickup");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
      className="max-w-4xl mx-auto py-12 px-6"
    >
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest mb-8 hover:text-slate-900 transition-colors">
        <ArrowLeft size={16} /> Back to Profile
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* PHOTOS */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Product Media</h3>
            <div className="grid grid-cols-2 gap-3">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden"><img src={img} className="w-full h-full object-cover" /></div>
              ))}
              <label className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50">
                <Plus size={20} className="text-slate-300" />
                <input type="file" className="hidden" onChange={(e) => setImages([...images, URL.createObjectURL(e.target.files[0])])} />
              </label>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Product Name" placeholder="e.g. Fresh Tomatoes" />
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Category</label>
              <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none appearance-none border border-transparent focus:border-emerald-500">
                <option>Vegetables</option><option>Fruits</option><option>Grains</option>
              </select>
            </div>
          </div>

          <InputField label="Description" placeholder="Tell buyers about your harvest..." isTextArea />

          <div className="grid grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Price / Unit</label>
                <div className="relative">
                  <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl font-black outline-none" placeholder="0.00" />
                </div>
             </div>
             <InputField label="Stock Qty" placeholder="e.g. 500" />
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-50">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-1 flex items-center gap-1"><Calendar size={12}/> Date</label>
              <input type="date" className="w-full px-6 py-4 bg-slate-50 rounded-2xl font-bold outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-1 flex items-center gap-1"><Truck size={12}/> Logistics</label>
              <div className="flex bg-slate-50 p-1 rounded-2xl">
                {['pickup', 'delivery'].map(m => (
                  <button key={m} onClick={() => setDelivery(m)} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all ${delivery === m ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}>{m}</button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={onBack} className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl">
            Post Product <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const InputField = ({ label, placeholder, isTextArea }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    {isTextArea ? (
      <textarea rows="3" placeholder={placeholder} className="w-full px-6 py-4 bg-slate-50 rounded-[2rem] font-medium text-slate-600 outline-none border border-transparent focus:border-emerald-500" />
    ) : (
      <input type="text" placeholder={placeholder} className="w-full px-6 py-4 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none border border-transparent focus:border-emerald-500" />
    )}
  </div>
);

export default FarmerDashboard;