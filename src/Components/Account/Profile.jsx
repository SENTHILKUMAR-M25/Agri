import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit3, Phone, MapPin, Award, ShieldCheck, Zap, Bookmark, Grid } from "lucide-react";

const posts = [
  "/img/posts/1.jpg", "/img/posts/2.jpg", "/img/posts/3.jpg",
  "/img/posts/4.jpg", "/img/posts/5.jpg", "/img/posts/6.jpg",
  "/img/posts/7.jpg", "/img/posts/8.jpg", "/img/posts/9.jpg",
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-[#F0F4F1] pb-24">
      {/* 🌿 TOP DECORATIVE ELEMENT */}
      <div className="h-48 w-full bg-gradient-to-r from-green-800 to-emerald-600 absolute top-0 left-0" />

      <div className="relative max-w-4xl mx-auto pt-15 top-10 px-4 sm:px-6">
        
        {/* 👤 MAIN PROFILE CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-2xl shadow-green-900/10 border border-white p-6 sm:p-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image with Animated Ring */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-orange-400 to-green-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <img
                src="/img/profile.jpg"
                alt="Profile"
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] object-cover border-4 border-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-2xl shadow-lg">
                <ShieldCheck size={20} />
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h3 className="text-3xl font-black text-slate-800">Raj Rathod</h3>
                  <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Expert Farmer
                  </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500 font-medium">
                  <p className="flex items-center gap-1.5 text-sm"><Phone size={14} className="text-green-600"/> +91 9697448866</p>
                  <p className="flex items-center gap-1.5 text-sm"><MapPin size={14} className="text-green-600"/> Akola, Maharashtra</p>
                </div>
              </div>

              {/* Bento-style Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-slate-50 p-4 rounded-[2rem]">
                {[
                  { value: "180", label: "Posts", icon: <Grid size={12}/> },
                  { value: "10k", label: "Network", icon: <Zap size={12}/> },
                  { value: "230", label: "Vouched", icon: <Award size={12}/> },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl font-black text-slate-800">{stat.value}</p>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center justify-center gap-1">
                      {stat.icon} {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🏷️ EXPERTISE TAGS */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-6">
          {["Organic Wheat", "Soil Health Expert", "Drip Irrigation", "Market Leader"].map((tag, i) => (
            <span key={i} className="flex-shrink-0 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl text-xs font-bold text-slate-600 shadow-sm hover:border-green-500 transition-colors">
              #{tag}
            </span>
          ))}
        </div>

        {/* 📌 MODERN TAB SYSTEM */}
        <div className="bg-white rounded-[2.5rem] p-2 shadow-xl shadow-slate-200 flex mb-8">
          {[
            { id: "posts", label: "My Harvest", icon: <Grid size={18}/> },
            { id: "saved", label: "Saved Knowledge", icon: <Bookmark size={18}/> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-[2rem] text-sm font-black transition-all ${
                activeTab === tab.id
                  ? "bg-green-600 text-white shadow-lg shadow-green-200"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 🖼️ MASONRY-INSPIRED GRID */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {posts.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-md"
              >
                <img
                  src={img}
                  alt="post"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-[10px] font-bold">View Update</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✏️ FLOATING EDIT BUTTON (Better for Mobile UX) */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-5 rounded-3xl shadow-2xl shadow-orange-200 z-50 flex items-center gap-2"
      >
        <Edit3 size={24} />
        <span className="hidden md:inline font-bold">Edit Profile</span>
      </motion.button>
    </div>
  );
};

export default Profile;