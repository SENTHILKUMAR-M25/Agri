import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
      navigate("/login");
    }, 3500); // Slightly longer to appreciate the animation

    return () => clearTimeout(timer);
  }, [navigate, onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#062c12]">
      {/* 1. Dynamic Organic Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* 2. Glassmorphism Content Card */}
      <div className="z-10 flex flex-col items-center p-12 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl">
        
        {/* Logo with Floating Animation */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={logo}
            alt="Agri Kisan"
            className="relative w-32 h-32 object-contain drop-shadow-2xl animate-float"
          />
        </div>

        {/* Text Content with Staggered Entrance */}
        <div className="text-center mt-8 space-y-2">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-green-200 tracking-tight animate-reveal">
            Agri Kisan
          </h1>
          <p className="text-green-300/80 font-medium tracking-wide text-sm uppercase animate-reveal delay-300">
            Cultivating the Future
          </p>
        </div>

        {/* Modern Progress Bar instead of just text */}
        <div className="mt-10 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 animate-progress" />
        </div>
      </div>

      {/* Subtle Bottom Footer */}
      <p className="absolute bottom-10 text-green-500/50 text-xs font-mono tracking-widest uppercase">
        Digital Farming Ecosystem
      </p>
    </div>
  );
};

export default SplashScreen;