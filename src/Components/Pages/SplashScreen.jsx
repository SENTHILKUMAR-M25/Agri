import { useEffect } from "react";
import logo from "../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center 
                    bg-gradient-to-br from-green-900 via-green-700 to-green-500">
      
      {/* Logo */}
      <img
        src={logo}
        alt="Agri Kisan"
        className="w-32 animate-logo"
      />

      {/* App Name */}
      <h1 className="mt-4 text-3xl font-bold text-white tracking-widest animate-text">
        Agri Kisan
      </h1>

      {/* Loading */}
      <p className="mt-2 text-sm text-green-100 animate-pulse">
        Growing digitally 🌱
      </p>
    </div>
  );
};

export default SplashScreen;
