
import { useRef, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VideoCarousel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const videos = useSelector((state) => state.videos?.videoList || []);

  // ✅ First 6 videos (memoized)
  const firstSixVideos = useMemo(() => videos.slice(0, 6), [videos]);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 300);
  };

  if (!firstSixVideos.length) return null;

  return (
    <section className="px-6 mt-10 py-8 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-1">
            Curated Insights
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Latest Agriculture Videos
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/videos"
            className="hidden sm:block text-slate-500 hover:text-green-600 font-medium transition-colors"
          >
            Explore All Videos
          </Link>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border bg-white shadow-sm transition-all active:scale-95
                ${canScrollLeft ? "hover:bg-gray-50" : "opacity-40 cursor-not-allowed"}`}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border bg-white shadow-sm transition-all active:scale-95
                ${canScrollRight ? "hover:bg-gray-50" : "opacity-40 cursor-not-allowed"}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {firstSixVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-start"
          >
            <div className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden">
              <VideoCard video={video} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
