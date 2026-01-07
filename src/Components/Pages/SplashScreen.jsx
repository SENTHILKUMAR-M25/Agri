


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Subtle Parallax Effect
  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
      navigate("/home");
    }, 4000); 

    return () => clearTimeout(timer);
  }, [navigate, onFinish]);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#041a0b] cursor-none"
    >
      {/* --- BACKGROUND LAYER: Organic "Cells" --- */}
      <div 
        className="absolute transition-transform duration-700 ease-out opacity-40"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="absolute top-[-20vh] left-[-10vw] w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10vh] right-[-5vw] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-bounce-slow" />
      </div>

      {/* --- MESH GRADIENT OVERLAY --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* --- CENTRAL CONTENT --- */}
      <div className="z-10 relative flex flex-col items-center">
        
        {/* Innovative Logo Container */}
        <div className="relative group perspective-1000">
          {/* Animated Rings */}
          <div className="absolute inset-0 rounded-full border border-green-500/30 animate-ping-slow scale-150" />
          <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-ping-slow scale-[2] opacity-50" />
          
          <div className="relative bg-gradient-to-b from-white/10 to-transparent p-8 rounded-full backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
            <img
              src={logo}
              alt="Agri Kisan"
              className="w-32 h-32 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-float"
            />
          </div>
        </div>

        {/* Brand Reveal */}
        <div className="mt-12 text-center">
          <h1 className="overflow-hidden text-5xl font-black tracking-tighter text-white">
            <span className="block animate-reveal-up bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-green-400">
              AGRI KISAN
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mt-4 overflow-hidden">
            <div className="h-[1px] w-8 bg-green-500/50 animate-stretch-width" />
            <p className="text-xs font-bold tracking-[0.3em] text-green-400/80 uppercase animate-fade-in">
              The Digital Seed
            </p>
            <div className="h-[1px] w-8 bg-green-500/50 animate-stretch-width" />
          </div>
        </div>

        {/* Minimalist Tech Progress */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-scan" />
          </div>
          <span className="text-[10px] font-mono text-green-600 animate-pulse tracking-widest">
            INITIALIZING ECOSYSTEM...
          </span>
        </div>
      </div>

      {/* Interactive Cursor Follower (Optional) */}
      <div 
        className="fixed w-8 h-8 border border-green-400/50 rounded-full pointer-events-none transition-all duration-150 ease-out z-50 mix-blend-screen"
        style={{ left: `${mousePos.x * 2 + window.innerWidth/2}px`, top: `${mousePos.y * 2 + window.innerHeight/2}px`, transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default SplashScreen;