import { useState } from "react";
import { Leaf, Sprout, Globe } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { ImageUploader } from "./ImageUploader";
import { DiagnosisReport } from "./DiagnosisReport";
import { LoadingAnalysis } from "./LoadingAnalysis";
import { useDiagnosis } from "./hook/useDiagnosis";
import { TRANSLATIONS } from "./Language";

const Dialysis = () => {
  const [language, setLanguage] = useState("en");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const { isAnalyzing, diagnosis, analyzePlant, reset } = useDiagnosis();
  const t = TRANSLATIONS[language];

  const handleImageSelect = (file, preview) => {
    setImageFile(file);
    setSelectedImage(preview);
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setImageFile(null);
  };

  const handleAnalyze = () => {
    if (selectedImage) {
      analyzePlant(selectedImage, language);
    }
  };

  const handleNewAnalysis = () => {
    reset();
    handleClearImage();
  };

  return (
    <div className="min-h-screen gradient-hero">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mt-5 mb-7">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl gradient-leaf shadow-elevated mb-6 animate-float">
            <Sprout className="w-10 h-10 text-primary-foreground" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </header>

        {/* Language Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 p-4 bg-card rounded-2xl shadow-card">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe className="w-5 h-5" />
            <span className="font-medium">{t.selectLanguage}</span>
          </div>
          <LanguageSelector selected={language} onSelect={setLanguage} />
        </div>

        {/* Main Content */}
        <main className="space-y-6">
          {diagnosis ? (
            <DiagnosisReport
              diagnosis={diagnosis}
              language={language}
              onNewAnalysis={handleNewAnalysis}
            />
          ) : isAnalyzing ? (
            <LoadingAnalysis language={language} />
          ) : (
            <>
              <ImageUploader
                language={language}
                onImageSelect={handleImageSelect}
                selectedImage={selectedImage}
                onClear={handleClearImage}
              />

              {selectedImage && (
                <div className="flex justify-center animate-slide-up">
                  <button
                    variant="hero"
                    size="xl"
                    onClick={handleAnalyze}
                    className="w-full sm:w-auto"
                  >
                    <Leaf className="w-5 h-5" />
                    {t.analyze}
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>🌱 Powered by AI • Helping farmers protect their crops</p>
        </footer>
      </div>
    </div>
  );
};

export default Dialysis;
