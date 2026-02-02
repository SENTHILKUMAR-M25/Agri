


import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import {
  PlayCircle,
  CloudSun,
  BarChart3,
  ArrowUpRight,
  UserCircle,
  Sprout,
  TrendingUp,
  Leaf,
  Landmark,
  ShoppingCart,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import SchemeCarousel from "../Schemes/SchemeCarousal";
import VideoCarousel from "../Videos/VideoCarousal";
import PriceMonitoring from "../PriceChart/Chart";

const Home = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const data = await res.json();
          setWeather(data.current_weather);
        } catch {
          console.log("Weather fetch failed");
        }
      },
      () => console.log("Location permission denied")
    );
  }, []);

  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const cards = [
    {
      title: "Products",
      desc: "Master modern farming with 4K expert tutorials.",
      icon: <PlayCircle size={28} />,
      path: "/products",
      color: "from-emerald-500 to-teal-600",
      stats: "24 New Videos",
    },
    {
      title: "Climate Report",
      desc: "Hyper-local weather insights & rain alerts.",
      icon: <CloudSun size={28} />,
      path: "/climate",
      color: "from-blue-500 to-cyan-500",
      stats: "98% Accuracy",
    },
    {
      title: "Government Schemes",
      desc:
        "Latest central and state agriculture schemes, subsidies, and farmer benefits.",
      icon: <Landmark size={28} />,
      path: "/#schemes",
      color: "from-green-600 to-emerald-500",
      stats: "Updated daily",
    },
    {
      title: "Trade Report",
      desc: "Direct farm-to-buyer marketplace access.",
      icon: <BarChart3 size={28} />,
      path: "/trade",
      color: "from-violet-600 to-purple-500",
      stats: "1.2k Active Leads",
    },
    {
      title: "Plant Disease Diagnosis",
      desc:
        "AI-powered plant and leaf disease detection with treatment guidance.",
      icon: <Leaf size={28} />,
      path: "/Desisse",
      color: "from-green-600 to-emerald-500",
      stats: "95% Detection Accuracy",
    },
  ];

  return (
    <div className="min-h-screen pt-12 bg-[#f0f4f2] text-slate-900 relative overflow-hidden font-sans">

      {/* Background blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-200/40 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="relative z-20 px-6 py-8 max-w-7xl mx-auto">

        {/* Weather widget */}
        {weather && (
          <Link to='/climate' className="fixed top-24 left-6 z-30 bg-white/90 backdrop-blur-md shadow-lg border border-slate-100 rounded-xl px-4 py-2 hidden md:block">
            <p className="text-xs text-slate-500">Current Weather</p>
            <p className="font-bold text-slate-800">
              🌡 {weather.temperature}°C
            </p>
            <p className="text-xs text-slate-500">
              Wind: {weather.windspeed} km/h
            </p>
          </Link>
        )}

        {/* Hero Section */}
        <header className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6"
          >
            <Sprout size={16} className="text-green-500" />

            <div className="flex items-center gap-4">
              <UserCircle size={45} className="text-green-600" />

              <div>
                <p className="text-[10px] text-green-600 font-black uppercase tracking-[0.2em] mb-0.5">
                  {greeting}
                </p>
                <h3 className="text-lg font-bold">
                  {isAuthenticated && user?.name
                    ? user.name
                    : "Kisan Friend"}
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            BHUMMI
          </motion.h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Precision farming at your fingertips. Join smart farmers.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link to={card.path} className="block h-full">
                <div className="h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white`}
                    >
                      {card.icon}
                    </div>

                    <ArrowUpRight className="text-slate-300 group-hover:text-green-500" />
                  </div>

                  <h2 className="text-2xl font-extrabold mb-3 group-hover:text-green-600">
                    {card.title}
                  </h2>

                  <p className="text-slate-500 text-sm mb-6">
                    {card.desc}
                  </p>

                  <div className="flex justify-between pt-4 border-t">
                    <span className="text-xs font-bold text-slate-400">
                      {card.stats}
                    </span>
                    <TrendingUp size={14} className="text-green-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Sections */}
        <div id="schemes">
          <SchemeCarousel />
        </div>

        <VideoCarousel />
        <PriceMonitoring />

        {/* Footer */}
        <footer className="mt-24 mb-10">
          <div className="bg-slate-900 rounded-[3rem] p-12 text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Ready to grow your yield?
            </h2>

            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Join thousands of farmers improving harvest daily.
            </p>

            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-2xl">
              Explore Tools
            </button>
          </div>
        </footer>
      </div>

      {/* Floating Cart */}
      {/* <Link to="/mycart" className="fixed bottom-28 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl">
        <ShoppingCart size={24} />
      </Link> */}
{/* Floating Cart */}
<Link 
  to="/mycart" 
  className="fixed bottom-28 md:bottom-10 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all active:scale-95 group"
>
  <motion.div
    whileHover={{ rotate: -10 }}
    className="relative"
  >
    <ShoppingCart size={24} />
    {/* Optional: Add a small notification dot if items are in cart */}
    <span className="absolute -top-1 -right-1 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
    </span>
  </motion.div>
</Link>
    </div>
  );
};

export default Home;
