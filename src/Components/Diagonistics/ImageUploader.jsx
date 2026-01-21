import { useCallback, useState } from "react";
import { Upload, Camera, ImageIcon, X, Sparkles, ImagePlus, MousePointer2 } from "lucide-react";
import { TRANSLATIONS } from "./Language";

export function ImageUploader({ language, onImageSelect, selectedImage, onClear }) {
  const [isDragging, setIsDragging] = useState(false);
  const t = TRANSLATIONS[language];

  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => onImageSelect(file, reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    processFile(files[0]);
  }, [onImageSelect]);

  const handleFileSelect = (e) => processFile(e.target.files[0]);

  // --- Selected State View (Innovative "Scanner" UI) ---
  if (selectedImage) {
    return (
      <div className="group relative w-full max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-700">
        {/* Main Image Container with 8px thick "frame" look */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white p-3 border border-slate-100">
          <div className="relative rounded-[2.2rem] overflow-hidden aspect-[4/3] sm:aspect-video">
            <img
              src={selectedImage}
              alt="Selected plant"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* INNOVATION: The Digital Scan Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_#10b981] animate-scan-line top-0 absolute opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Top Action Bar */}
            <div className="absolute top-4 right-4 left-4 flex justify-between items-start">
              <div className="px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-[10px] text-white font-mono tracking-widest uppercase">
                Image_Processed_v1.0
              </div>
              <button
                onClick={onClear}
                className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl text-rose-500 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:rotate-90 active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Status Badge */}
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-emerald-100 shadow-lg">
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
                  <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-40" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">Ready for Analysis</span>
                  <span className="text-[9px] text-slate-500">Neural Engine Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Default Upload View (Innovative "Bento" UI) ---
  return (
    <div
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="relative w-full max-w-2xl mx-auto group"
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
      />

      <div className={`
        relative overflow-hidden rounded-[3rem] border-2 transition-all duration-700 min-h-[400px]
        flex flex-col items-center justify-center p-8 text-center
        ${isDragging 
          ? "border-emerald-500 bg-emerald-50/50 scale-[1.02] shadow-2xl shadow-emerald-100" 
          : "border-slate-100 bg-white hover:border-emerald-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
        }
      `}>
        
        {/* INNOVATION: Floating Background Blobs */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl transition-all duration-1000 ${isDragging ? 'opacity-100 scale-150' : 'opacity-40'}`} />
        <div className={`absolute -bottom-24 -left-24 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl transition-all duration-1000 ${isDragging ? 'opacity-100 scale-150' : 'opacity-40'}`} />

        {/* Interaction Center */}
        <div className="relative z-10 flex flex-col items-center">
          <div className={`
            relative p-8 rounded-[2.5rem] transition-all duration-700 mb-6
            ${isDragging 
              ? "bg-emerald-600 text-white rotate-[15deg] scale-110 shadow-2xl shadow-emerald-200" 
              : "bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 group-hover:-translate-y-4"
            }
          `}>
            {isDragging ? <ImagePlus className="w-14 h-14" /> : <Camera className="w-14 h-14" />}
            
            {/* Floating Mini Icons for Detail */}
            {!isDragging && (
              <div className="absolute -right-2 -bottom-2 p-2 bg-white rounded-xl shadow-md border border-slate-100 group-hover:rotate-12 transition-transform">
                <ImageIcon className="w-4 h-4 text-emerald-400" />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight leading-none">
              {isDragging ? "Release to Scan" : t.uploadTitle}
            </h3>
            <p className="text-slate-500 text-lg font-medium max-w-sm mx-auto leading-relaxed">
              {t.uploadDesc}
            </p>
          </div>

          {/* New Innovative Action Button */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className={`
              px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm transition-all duration-300
              group-hover:bg-emerald-600 group-hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)]
              flex items-center gap-3
            `}>
              <MousePointer2 className="w-4 h-4" />
              Browse Local Files
            </div>
            
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
              <span>PNG</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full" />
              <span>HEIC</span>
              <span className="w-1 h-1 bg-slate-200 rounded-full" />
              <span>JPG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}