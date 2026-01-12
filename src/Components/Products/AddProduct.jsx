import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  Image as ImageIcon, 
  X, 
  ChevronRight, 
  Leaf, 
  Truck, 
  Calendar,
  IndianRupee,
  Info
} from "lucide-react";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "vegetables",
    description: "",
    price: "",
    unit: "kg",
    quantity: "",
    harvestDate: "",
    delivery: "pickup"
  });

  const categories = ["Vegetables", "Fruits", "Grains", "Seeds", "Fertilizers", "Others"];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImgs = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImgs]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* HEADER */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">List New Product</h1>
          <p className="text-slate-500 font-medium mt-2">Fill in the details to reach verified buyers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: IMAGE UPLOAD */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-4">
                Product Images
              </label>
              
              <div className="grid grid-cols-2 gap-3">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-100">
                    <img src={img} className="w-full h-full object-cover" alt="upload" />
                    <button 
                      onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                      className="absolute top-1 right-1 bg-white/90 p-1 rounded-lg text-red-500 shadow-sm"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                
                {images.length < 4 && (
                  <label className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors group">
                    <ImageIcon className="text-slate-300 group-hover:text-emerald-500 transition-colors" size={24} />
                    <span className="text-[10px] font-bold text-slate-400 mt-2">Add Photo</span>
                    <input type="file" multiple className="hidden" onChange={handleImageUpload} />
                  </label>
                )}
              </div>
              <p className="text-[10px] text-slate-400 mt-4 leading-relaxed">
                <Info size={12} className="inline mr-1" />
                Upload up to 4 high-quality photos. Clear images increase sales by 40%.
              </p>
            </div>
          </div>

          {/* RIGHT: FORM DETAILS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
              
              {/* Basic Info */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Organic Alphonso Mango"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-bold text-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-bold text-slate-700 appearance-none">
                      {categories.map(cat => <option key={cat} value={cat.toLowerCase()}>{cat}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                  <textarea 
                    rows="3"
                    placeholder="Describe freshness, farming method, etc."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-medium text-slate-600"
                  ></textarea>
                </div>
              </div>

              {/* Pricing & Stock */}
              <div className="pt-6 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 text-emerald-600">Price / Unit</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number" 
                      placeholder="0.00"
                      className="w-full pl-12 pr-24 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-black text-slate-800"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      {['kg', 'quintal', 'pc'].map(u => (
                        <button key={u} className={`text-[10px] px-2 py-1 rounded-lg font-bold uppercase ${formData.unit === u ? 'bg-slate-900 text-white' : 'bg-white text-slate-400'}`}>
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Stock Available</label>
                  <div className="relative">
                    <Plus className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number" 
                      placeholder="Qty"
                      className="w-full pl-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-black text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Delivery */}
              <div className="pt-6 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Calendar size={12} /> Harvest/Expiry Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Truck size={12} /> Delivery Mode
                  </label>
                  <div className="flex gap-2">
                    {['pickup', 'delivery'].map(mode => (
                      <button 
                        key={mode}
                        onClick={() => setFormData({...formData, delivery: mode})}
                        className={`flex-1 py-4 rounded-2xl font-bold text-xs uppercase border transition-all ${
                          formData.delivery === mode 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700 ring-1 ring-emerald-200' 
                          : 'bg-white border-slate-100 text-slate-400'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SUBMIT */}
              <button className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1">
                Post Product <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddProduct;