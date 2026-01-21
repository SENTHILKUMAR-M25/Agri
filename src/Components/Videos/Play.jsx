


// import { useParams, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Share2, Heart, Info, Clock, Calendar } from "lucide-react";

// export default function VideoPlay() {
//   const { id } = useParams();
//   const videos = useSelector((state) => state.videos.videoList);

//   // ✅ nanoid-safe lookup (string id)
//   const currentVideo = videos.find((v) => v.id === id);

//   if (!currentVideo) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl font-bold text-slate-600">
//         Video not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-16 bg-white">
//       <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">
        
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-8 space-y-6">
          
//           {/* Player */}
//           <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
//             {currentVideo.isYoutube ? (
//               <iframe
//                 src={`${currentVideo.videoUrl}?autoplay=1&rel=0`}
//                 title={currentVideo.title}
//                 className="w-full h-full"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             ) : (
//               <video
//                 src={currentVideo.videoUrl}
//                 controls
//                 autoPlay
//                 className="w-full h-full"
//               />
//             )}
//           </div>

//           {/* Metadata */}
//           <div className="space-y-4">
//             <h1 className="text-3xl font-black text-slate-900 leading-tight">
//               {currentVideo.title}
//             </h1>

//             <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
//               <div className="flex items-center gap-6">
//                 <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
//                   <Calendar size={18} className="text-green-600" />
//                   {currentVideo.uploadDate || "—"}
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
//                   <Clock size={18} className="text-green-600" />
//                   {currentVideo.duration || "--:--"}
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => console.log("Liked:", currentVideo.id)}
//                   className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-700 font-bold transition-all active:scale-95"
//                 >
//                   <Heart size={20} /> Like
//                 </button>
//                 <button className="p-2.5 rounded-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-700 transition-all">
//                   <Share2 size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
//               <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
//                 <Info size={18} /> Detailed Insights
//               </div>
//               <p className="text-slate-600 leading-relaxed">
//                 This session covers advanced{" "}
//                 <span className="font-semibold">
//                   {currentVideo.title.toLowerCase()}
//                 </span>{" "}
//                 tailored for modern agricultural practices. Learn real-world,
//                 scalable techniques demonstrated in this video.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN – RELATED VIDEOS */}
//         <div className="lg:col-span-4 space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-black text-slate-900">Up Next</h2>
//             <Link
//               to="/videos"
//               className="text-sm font-bold text-green-600 hover:underline"
//             >
//               View Library
//             </Link>
//           </div>

//           <div className="space-y-4 overflow-y-auto max-h-[800px] no-scrollbar pr-2">
//             {videos
//               .filter((v) => v.id !== currentVideo.id)
//               .map((video) => (
//                 <Link
//                   to={`/video/${video.id}`}
//                   key={video.id}
//                   className="group block"
//                 >
//                   <div className="flex gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-all">
//                     <div className="relative w-40 aspect-video rounded-xl overflow-hidden shrink-0">
//                       <img
//                         src={video.thumbnail}
//                         alt={video.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform"
//                       />
//                       <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
//                         {video.duration}
//                       </span>
//                     </div>
//                     <div className="flex flex-col justify-center">
//                       <h3 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-green-600 transition-colors">
//                         {video.title}
//                       </h3>
//                       <p className="text-[11px] text-slate-400 mt-1 font-medium">
//                         {video.uploadDate}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Share2, Heart, Info, Clock, Calendar } from "lucide-react";

export default function VideoPlay() {
  const { id } = useParams();
  const videos = useSelector((state) => state.videos?.videoList || []);

  // ✅ nanoid-safe + optimized lookup
  const currentVideo = useMemo(
    () => videos.find((v) => v.id === id),
    [videos, id]
  );

  if (!currentVideo) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold text-slate-600">
        Video not found
      </div>
    );
  }

  // ✅ Auto-detect YouTube
  const isYoutube =
    currentVideo.videoUrl?.includes("youtube.com") ||
    currentVideo.videoUrl?.includes("youtu.be");

  // ✅ Share handler
  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: currentVideo.title,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Video link copied!");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-white">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-6">

          {/* Player */}
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
            {isYoutube ? (
              <iframe
                src={`${currentVideo.videoUrl}?autoplay=1&rel=0`}
                title={currentVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={currentVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            )}
          </div>

          {/* Metadata */}
          <div className="space-y-4">
            <h1 className="text-3xl font-black text-slate-900 leading-tight">
              {currentVideo.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar size={18} className="text-green-600" />
                  {currentVideo.uploadDate || "—"}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Clock size={18} className="text-green-600" />
                  {currentVideo.duration || "--:--"}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => console.log("Liked:", currentVideo.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-700 font-bold transition-all active:scale-95"
                >
                  <Heart size={20} /> Like
                </button>

                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-700 transition-all"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                <Info size={18} /> Detailed Insights
              </div>
              <p className="text-slate-600 leading-relaxed">
                This session explores advanced{" "}
                <span className="font-semibold">
                  {currentVideo.title.toLowerCase()}
                </span>{" "}
                techniques designed for modern agricultural practices with
                real-world demonstrations.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – RELATED VIDEOS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900">Up Next</h2>
            <Link
              to="/videos"
              className="text-sm font-bold text-green-600 hover:underline"
            >
              View Library
            </Link>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[800px] no-scrollbar pr-2">
            {videos
              .filter((v) => v.id !== currentVideo.id)
              .map((video) => (
                <Link
                  to={`/video/${video.id}`}
                  key={video.id}
                  className="group block"
                >
                  <div className="flex gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-all">
                    <div className="relative w-40 aspect-video rounded-xl overflow-hidden shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
                        {video.duration}
                      </span>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium">
                        {video.uploadDate}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
