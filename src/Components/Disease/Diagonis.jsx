

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "./Supabse";
import { 
  Upload, Leaf, Camera, AlertCircle, CheckCircle, 
  Loader2, Sparkles, RefreshCcw, ShieldCheck, Microscope 
} from "lucide-react";
import { useToast } from "./Toast";
import { cn } from './Utils';
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

const DiseasePage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const steps = ["Reading Image...", "Identifying Plant...", "Searching Pathogens...", "Finalizing Report..."];

  // Simulation of multi-step analysis for better UX
  useEffect(() => {
    let interval;
    if (analyzing) {
      interval = setInterval(() => {
        setAnalysisStep((prev) => (prev < 3 ? prev + 1 : prev));
      }, 1000);
    } else {
      setAnalysisStep(0);
    }
    return () => clearInterval(interval);
  }, [analyzing]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;
    setAnalyzing(true);
    try {
      const response = await supabase.functions.invoke("analyze-plant", {
        body: { image: selectedImage },
      });
      if (response.error) throw response.error;
      setResult(response.data);
    } catch (error) {
      // Mock result for demo
      setResult({
        disease: "Early Tomato Blight",
        confidence: 94,
        severity: "Moderate",
        treatment: "Prune infected lower leaves and apply chlorothalonil-based fungicide.",
        prevention: "Rotate crops annually and use drip irrigation to keep foliage dry."
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-50 via-background to-background">
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Plant Health <span className="text-primary">Scanner</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Identify crop diseases instantly using our advanced neural vision model.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image Input */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="overflow-hidden border-none shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  {!selectedImage ? (
                    <div 
                      onClick={() => fileInputRef.current.click()}
                      className="h-[350px] flex flex-col items-center justify-center border-4 border-dashed border-muted hover:border-primary/50 transition-all cursor-pointer group m-4 rounded-3xl"
                    >
                      <div className="p-6 rounded-full bg-primary/5 group-hover:scale-110 transition-transform">
                        <Camera className="h-12 w-12 text-primary" />
                      </div>
                      <p className="mt-4 font-medium text-lg">Drop image or click to capture</p>
                      <p className="text-sm text-muted-foreground">High-res leaf photos work best</p>
                    </div>
                  ) : (
                    <div className="relative group h-[500px]">
                      <img src={selectedImage} alt="Plant" className="w-full h-full object-cover" />
                      
                      {/* Scanning HUD Overlay */}
                      {analyzing && (
                        <div className="absolute inset-0 z-10">
                          <motion.div 
                            initial={{ top: "0%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-1 bg-primary shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20"
                          />
                          <div className="absolute inset-0 bg-primary/10 backdrop-grayscale-[0.5]" />
                        </div>
                      )}

                      {!analyzing && !result && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <button onClick={() => fileInputRef.current.click()} className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2">
                              <RefreshCcw className="h-4 w-4" /> Retake
                           </button>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {selectedImage && !result && (
                <button 
                  onClick={analyzeImage} 
                  disabled={analyzing}
                  className="w-full py-6 rounded-2xl bg-primary text-primary-foreground font-bold text-xl shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70"
                >
                  {analyzing ? (
                    <span className="flex items-center justify-center gap-3">
                      <Loader2 className="animate-spin" /> {steps[analysisStep]}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2 italic">
                      <Sparkles className="fill-current" /> RUN AI DIAGNOSIS
                    </span>
                  )}
                </button>
              )}
            </div>

            {/* Right Column: Results */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-3xl"
                  >
                    <Microscope className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <h3 className="text-xl font-semibold text-muted-foreground">Waiting for Data...</h3>
                    <p className="text-sm text-muted-foreground/60">System ready for biological analysis</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <Card className="bg-destructive/5 border-destructive/20 overflow-hidden relative">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <AlertCircle className="h-24 w-24" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-destructive flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" /> Detected Condition
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h2 className="text-3xl font-bold mb-1">{result.disease}</h2>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="bg-background px-3 py-1 rounded-lg border">
                            <p className="text-[10px] uppercase text-muted-foreground font-bold">Confidence</p>
                            <p className="font-mono font-bold text-primary">{result.confidence}%</p>
                          </div>
                          <div className="bg-background px-3 py-1 rounded-lg border">
                            <p className="text-[10px] uppercase text-muted-foreground font-bold">Severity</p>
                            <p className="font-mono font-bold text-orange-500">MODERATE</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      <Card className="border-l-4 border-l-green-500">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-500" /> Professional Treatment
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm leading-relaxed">{result.treatment}</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                      <Card className="border-l-4 border-l-primary">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm flex items-center gap-2">
                            <Leaf className="h-4 w-4 text-primary" /> Long-term Prevention
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm leading-relaxed text-muted-foreground">{result.prevention}</p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <button 
                      onClick={() => {setSelectedImage(null); setResult(null);}}
                      className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-4"
                    >
                      <RefreshCcw className="h-4 w-4" /> Start New Session
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
    </div>
  );
};

export default DiseasePage;



