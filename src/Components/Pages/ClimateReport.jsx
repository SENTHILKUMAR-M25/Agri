

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CloudSun, 
  Wind, 
  Droplets, 
  Thermometer, 
  Navigation, 
  Sunrise, 
  Sunset,
  CloudRain,
  MapPin,
  Calendar
} from "lucide-react";

const ClimateReport = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const weather = {
    temp: 28,
    condition: "Sunny Intervals",
    location: "Punjab, India",
    humidity: "62%",
    windSpeed: "12 km/h",
    uvIndex: "Moderate",
    rainfall: "0.2mm",
    forecast: [
      { day: "Tue", temp: 29, icon: <CloudSun size={24} className="text-amber-500" /> },
      { day: "Wed", temp: 27, icon: <CloudRain size={24} className="text-emerald-500" /> },
      { day: "Thu", temp: 26, icon: <CloudRain size={24} className="text-emerald-500" /> },
      { day: "Fri", temp: 30, icon: <CloudSun size={24} className="text-amber-500" /> },
    ]
  };

  return (
    <div className="min-h-screen bg-[#F0F9F4] relative top-15 p-4 md:p-8 text-slate-800 font-sans selection:bg-green-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 text-green-700 mb-1">
              <MapPin size={18} className="animate-bounce" />
              <span className="font-black tracking-tight text-xl uppercase">{weather.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
              <Calendar size={14} />
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
          
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-green-100 text-green-600 font-mono font-bold text-xl">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Temperature Hero Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-green-900/5 border border-white flex flex-col md:flex-row justify-between items-center relative overflow-hidden"
          >
            {/* Decorative Background Leaf Pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <CloudSun size={300} strokeWidth={1} />
            </div>

            <div className="text-center md:text-left z-10">
              <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-green-200">
                Current Atmosphere
              </span>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                <h2 className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter">
                  {weather.temp}°
                </h2>
                <div className="text-left">
                  <p className="text-4xl font-black text-green-600">C</p>
                  <p className="text-sm font-bold text-slate-400">Feels like 31°</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-600 mt-4 flex items-center gap-3 justify-center md:justify-start">
                {weather.condition} 
                <div className="p-2 bg-amber-50 rounded-2xl">
                    <CloudSun size={32} className="text-amber-500" />
                </div>
              </p>
            </div>
            
            <div className="mt-10 md:mt-0 w-full md:w-64 bg-slate-50 rounded-[2.5rem] p-8 space-y-8 z-10 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-orange-500"><Sunrise size={24} /></div>
                <div><p className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Sunrise</p><p className="font-black text-slate-800">06:12 AM</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-orange-600"><Sunset size={24} /></div>
                <div><p className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Sunset</p><p className="font-black text-slate-800">06:45 PM</p></div>
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
            <StatBox icon={<Droplets className="text-emerald-500" />} label="Humidity" value={weather.humidity} bg="bg-emerald-50" />
            <StatBox icon={<Wind className="text-sky-500" />} label="Wind Speed" value={weather.windSpeed} bg="bg-sky-50" />
            <StatBox icon={<Thermometer className="text-rose-500" />} label="UV Index" value={weather.uvIndex} bg="bg-rose-50" />
            <StatBox icon={<CloudRain className="text-blue-500" />} label="Rainfall" value={weather.rainfall} bg="bg-blue-50" />
          </div>

          {/* Weekly Forecast Bento Grid */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-green-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-green-900/20 relative"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black tracking-tight">Agriculture Outlook</h3>
              <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-4 py-1 rounded-full">Next 4 Days</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {weather.forecast.map((f, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-6 text-center group hover:scale-105 transition-transform duration-300 shadow-lg">
                  <p className="text-slate-400 font-black text-sm uppercase tracking-widest mb-4">{f.day}</p>
                  <div className="flex justify-center mb-4 p-4 bg-slate-50 rounded-2xl">
                    {f.icon}
                  </div>
                  <p className="text-3xl font-black text-slate-900">{f.temp}°</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Satellite Synced: Agri-Sat 104
            </p>
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ icon, label, value, bg }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all"
  >
    <div className={`p-4 ${bg} rounded-[1.25rem]`}>{icon}</div>
    <div>
      <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-1">{label}</p>
      <p className="text-xl font-black text-slate-800">{value}</p>
    </div>
  </motion.div>
);

export default ClimateReport;