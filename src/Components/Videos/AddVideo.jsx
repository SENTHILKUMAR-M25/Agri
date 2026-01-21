import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../Redux/Slice/VideoSlice";
import { useNavigate } from "react-router-dom";
import { Upload, Link as LinkIcon, Youtube, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { nanoid } from "nanoid";

export default function AddVideo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputType, setInputType] = useState("file"); // 'file' or 'url'

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    videoUrl: "",
    duration: "--:--",
    uploadDate: "",
    isYoutube: false
  });

  // Helper to extract YouTube ID
  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Logic for Auto-detecting YouTube Metadata
    if (name === "videoUrl" && inputType === "url") {
      const id = getYouTubeID(value);
      if (id) {
        setFormData(prev => ({
          ...prev,
          thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
          isYoutube: true,
          uploadDate: "YouTube Content"
        }));
      }
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoURL = URL.createObjectURL(file);
    const videoElement = document.createElement("video");
    videoElement.src = videoURL;

    videoElement.onloadedmetadata = () => {
      const totalSeconds = Math.floor(videoElement.duration);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      
      setFormData(prev => ({
        ...prev,
        videoUrl: videoURL,
        duration: `${minutes}:${seconds.toString().padStart(2, "0")}`,
        uploadDate: new Date().toLocaleDateString(),
        isYoutube: false
      }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVideo({ ...formData, id: nanoid(), }));
    navigate("/videos");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-slate-900 p-8 text-white">
          <h1 className="text-3xl font-bold tracking-tight">Post New Content</h1>
          <p className="text-slate-400 mt-2">Share agricultural techniques with the community.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Video Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Modern Hydroponics 101"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all font-medium"
              onChange={handleChange}
            />
          </div>

          {/* Source Toggle */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Video Source</label>
            <div className="flex p-1 bg-gray-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setInputType("file")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${inputType === "file" ? "bg-white text-green-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <Upload size={18} /> Local File
              </button>
              <button
                type="button"
                onClick={() => setInputType("url")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${inputType === "url" ? "bg-white text-green-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                <LinkIcon size={18} /> URL / YouTube
              </button>
            </div>
          </div>

          {/* Conditional Inputs */}
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            {inputType === "file" ? (
              <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-green-400 transition-colors group">
                <input type="file" accept="video/*" required className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleVideoUpload} />
                <div className="space-y-2">
                  <div className="mx-auto w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload size={24} />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Click to upload or drag & drop</p>
                  <p className="text-xs text-slate-400">MP4, WebM or Ogg (Max. 500MB)</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" size={20} />
                  <input
                    type="url"
                    name="videoUrl"
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
                {formData.isYoutube && (
                  <div className="flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 p-2 rounded-lg">
                    <CheckCircle2 size={14} /> YouTube Metadata Detected
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Thumbnail Preview / Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Thumbnail Preview</label>
            <div className="relative aspect-video rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden">
              {formData.thumbnail ? (
                <img src={formData.thumbnail} className="w-full h-full object-cover" alt="Preview" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                   <p className="text-xs font-medium">Automatic preview will appear here</p>
                </div>
              )}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase mb-1">
                <Clock size={14} /> Duration
              </div>
              <p className="text-lg font-black text-slate-800">{formData.duration}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase mb-1">
                <Calendar size={14} /> Upload Date
              </div>
              <p className="text-lg font-black text-slate-800">{formData.uploadDate || "--/--/--"}</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-600/20 transition-all active:scale-[0.98]"
          >
            Publish Video
          </button>
        </form>
      </div>
    </div>
  );
}