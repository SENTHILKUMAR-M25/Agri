import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loadingText, setLoadingText] = useState("Initializing Core");

  // Professional "System Check" messages
  const messages = [
    "Initializing Core",
    "Securing Farm Data",
    "Syncing Market Indices",
    "Optimizing Ecosystem",
    "Ready"
  ];

  useEffect(() => {
    // Cycle through messages for a "High-Tech" feel
    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length - 1) {
        i++;
        setLoadingText(messages[i]);
      }
    }, 800);

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
      navigate("/landingpage");
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate, onFinish]);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 25,
      y: (e.clientY / window.innerHeight - 0.5) * 25,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#020b05] cursor-none select-none"
    >
      {/* 1. AMBIENT BACKGROUND LAYER */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. LOGO & CENTRAL IDENTITY */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Subtle Rotating Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-emerald-500/10 rounded-full border-t-emerald-500/40"
          />
          
          <div className="relative p-10 rounded-[3rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
            <motion.img
              src={logo}
              alt="Agri Kisan"
              className="w-28 h-28 object-contain brightness-110"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* 3. BRANDING */}
        <div className="mt-12 text-center">
          <motion.h1 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl font-black text-white tracking-[0.5em] ml-[0.5em]"
          >
            AGRI KISAN
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-4 opacity-50"
          />
          
          <p className="mt-4 text-[10px] font-bold tracking-[0.4em] text-emerald-500/60 uppercase italic">
            Precision Agriculture Ecosystem
          </p>
        </div>

        {/* 4. TECH PROGRESS & STATUS */}
        <div className="mt-20 flex flex-col items-center">
            {/* Status Text with AnimatePresence for smooth transitions */}
            <div className="h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={loadingText}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-[9px] font-mono text-emerald-400 tracking-[0.3em] uppercase"
                    >
                        {loadingText}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-[1px] bg-white/5 mt-4 relative overflow-hidden">
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                />
            </div>
        </div>
      </div>

      {/* 5. PRECISION CURSOR (Crosshair Style) */}
      <div 
        className="fixed w-10 h-10 pointer-events-none z-50 mix-blend-difference"
        style={{ 
            left: `${mousePos.x * 0.5 + window.innerWidth/2}px`, 
            top: `${mousePos.y * 0.5 + window.innerHeight/2}px`, 
            transform: 'translate(-50%, -50%)' 
        }}
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-500/40" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-emerald-500/40" />
        <div className="absolute inset-0 border border-emerald-500/20 rounded-full" />
      </div>
    </motion.div>
  );
};

export default SplashScreen;