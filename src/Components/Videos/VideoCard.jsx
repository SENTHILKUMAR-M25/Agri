// // src/components/VideoCard.jsx
// import { Link } from "react-router-dom";

// export default function VideoCard({ video }) {
//   return (
//     <Link to={`/video/${video.id}`}>
//       <div className="bg-white rounded-xl shadow hover:scale-105 transition">
//         <div className="relative">
//           <img
//             src={video.thumbnail}
//             alt={video.title}
//             className="rounded-t-xl w-full h-44 object-cover"
//           />
//           <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
//             {video.duration}
//           </span>
//         </div>

//         <div className="p-3">
//           <h3 className="font-semibold text-sm line-clamp-2">
//             {video.title}
//           </h3>
//           <p className="text-xs text-gray-500 mt-1">
//             {video.uploadDate}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }



import { Link } from "react-router-dom";
import { Play, Calendar, Clock } from "lucide-react"; // npm install lucide-react

export default function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="group block">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-slate-800">
        
        {/* Thumbnail Wrapper */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-green-600 p-3 rounded-full text-white shadow-lg shadow-green-600/40">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Time Badge (Glassmorphism) */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wide">
            <Clock size={12} className="text-green-400" />
            {video.duration}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-md">
              <Calendar size={10} />
              {video.uploadDate}
            </div>
          </div>

          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-snug line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
            {video.title}
          </h3>

          <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600">
              Watch Insight
            </span>
            <div className="h-0.5 w-0 group-hover:w-12 bg-green-500 transition-all duration-500" />
          </div>
        </div>
      </div>
    </Link>
  );
}