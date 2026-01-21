


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Filter, PlayCircle, SlidersHorizontal } from "lucide-react";
// import VideoCard from "./VideoCard";
// import { useSelector } from "react-redux";

// export default function Videos() {
//     const videos = useSelector((state) => state.videos.videoList);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");

//   const categories = ["All", "Organic", "Irrigation", "Soil", "Technology"];

//   const filteredVideos = videos.filter((video) => {
//     const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = activeFilter === "All" || video.title.includes(activeFilter);
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="min-h-screen pt-10 bg-white">
//       {/* Top Navigation / Header */}
//       <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//             <div className="space-y-1">
              
//               <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
//                 Video Library
//               </h1>
//             </div>

//             {/* Innovative Search Bar */}
//             <div className="relative w-full md:w-96 group">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search agriculture insights..."
//                 className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-500/5 focus:border-green-500 transition-all outline-none text-sm font-medium"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Filter Bar */}
//           <div className="flex items-center gap-4 mt-8">
//             <div className="p-2 bg-gray-50 rounded-lg text-slate-500">
//               <SlidersHorizontal size={18} />
//             </div>
//             <div>
//             <div className="flex gap-2 overflow-x-auto no-scrollbar">
//               {categories.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveFilter(cat)}
//                   className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
//                     activeFilter === cat
//                       ? "bg-slate-900 text-white shadow-xl shadow-slate-200"
//                       : "bg-white text-slate-500 border border-gray-100 hover:bg-gray-50"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//             <button navigate={'/add-video'}>Add Video </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Grid Section */}
//       <main className="max-w-7xl mx-auto px-6 py-12">
//         <div className="mb-10 flex items-end justify-between">
//           <div>
//             <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
//               Results
//             </h2>
//             <p className="text-2xl font-bold text-slate-900">
//               {filteredVideos.length} Curated Videos
//             </p>
//           </div>
//         </div>

//         <motion.div 
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredVideos.map((video, index) => (
//               <motion.div
//                 key={video.id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//               >
//                 <VideoCard video={video} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Empty State */}
//         {filteredVideos.length === 0 && (
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             className="text-center py-32 border-2 border-dashed border-gray-100 rounded-3xl"
//           >
//             <div className="inline-flex p-6 bg-gray-50 rounded-full mb-4 text-slate-300">
//               <Search size={48} />
//             </div>
//             <h3 className="text-xl font-bold text-slate-900">No matches found</h3>
//             <p className="text-slate-500 mt-2">Try adjusting your filters or checking your spelling.</p>
//           </motion.div>
//         )}
//       </main>
//     </div>
//   );
// }


import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const navigate = useNavigate();

  // ✅ Safe Redux selector
  const videos = useSelector((state) => state.videos?.videoList || []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Organic", "Irrigation", "Soil", "Technology"];

  // ✅ Optimized filtering
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = video.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeFilter === "All" ||
        video.category?.toLowerCase() === activeFilter.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [videos, searchTerm, activeFilter]);

  return (
    <div className="min-h-screen pt-10 bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">

          {/* Title + Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Video Library
            </h1>

            <div className="relative w-full md:w-96 group">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600"
              />
              <input
                type="text"
                placeholder="Search agriculture insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl
                focus:bg-white focus:ring-4 focus:ring-green-500/5 focus:border-green-500
                transition-all outline-none text-sm font-medium"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              <div className="p-2 bg-gray-50 rounded-lg text-slate-500">
                <SlidersHorizontal size={18} />
              </div>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all
                    ${
                      activeFilter === cat
                        ? "bg-slate-900 text-white shadow-lg"
                        : "bg-white text-slate-500 border border-gray-100 hover:bg-gray-50"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* ✅ Fixed navigation */}
            <button
              onClick={() => navigate("/add-video")}
              className="px-6 py-2 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all"
            >
              Add Video
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Results
          </h2>
          <p className="text-2xl font-bold text-slate-900">
            {filteredVideos.length} Curated Videos
          </p>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <VideoCard video={video} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 border-2 border-dashed border-gray-100 rounded-3xl"
          >
            <div className="inline-flex p-6 bg-gray-50 rounded-full mb-4 text-slate-300">
              <Search size={48} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              No matches found
            </h3>
            <p className="text-slate-500 mt-2">
              Try adjusting your search or filters.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
