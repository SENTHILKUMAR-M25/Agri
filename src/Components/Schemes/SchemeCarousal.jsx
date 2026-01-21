
import { useSelector } from "react-redux";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";
import SchemeCard from "./SchemesCard";
import { MoveLeft, MoveRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SchemeExplorer() {
  const navigate = useNavigate();
  const allSchemes = useSelector((state) => state.schemes.list || []);
  const schemes = allSchemes.slice(0, 6);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!schemes.length) return <CarouselSkeleton />;

  return (
    <div
      className="relative min-h-[600px] mt-10 rounded-xl flex items-center overflow-hidden transition-colors duration-700 ease-in-out py-20"
      style={{
        backgroundColor: activeIndex % 2 === 0 ? "#f0fdf4" : "#f0f9ff",
      }}
    >
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-[0.03] rotate-[-10deg]">
        <h2 className="text-[15rem] font-black leading-none">SCHEMES</h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Innovation Hub
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
                Indian Agriculture
              </span>
            </h2>
          </div>

          {/* Custom Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-4xl font-light text-gray-300">
                0{activeIndex + 1}{" "}
                <span className="text-lg text-gray-300">
                  / 0{schemes.length}
                </span>
              </span>

              <div className="h-1 w-24 bg-gray-200 mt-2 relative overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-green-600 transition-all duration-500"
                  style={{
                    width: `${((activeIndex + 1) / schemes.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="nav-prev p-4 rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transition-all">
                <MoveLeft className="text-gray-700" />
              </button>
              <button className="nav-next p-4 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-200 transition-all">
                <MoveRight />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          grabCursor
          loop
          centeredSlides
          autoplay={{ delay: 5000 }}
          slidesPerView={1.2}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
          creativeEffect={{
            prev: { shadow: true, translate: ["-120%", 0, -500] },
            next: { shadow: true, translate: ["120%", 0, -500] },
          }}
          breakpoints={{
            768: { slidesPerView: 2.5, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="!overflow-visible"
        >
          {schemes.map((scheme) => (
            <SwiperSlide key={scheme.schemeId}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-700 ${
                    isActive
                      ? "scale-110 z-20"
                      : "scale-90 opacity-40 blur-[1px]"
                  }`}
                >
                  <SchemeCard scheme={scheme} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Show More Button */}
        {allSchemes.length > 6 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/scheme")}
              className="px-10 py-4 rounded-full bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-300"
            >
              Show More Schemes →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* Skeleton Loader */
function CarouselSkeleton() {
  return (
    <div className="h-[500px] w-full bg-gray-50 flex items-center justify-center">
      <div className="animate-pulse flex gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-80 w-64 bg-gray-200 rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
}
