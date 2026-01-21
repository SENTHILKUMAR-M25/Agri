import { Leaf } from "lucide-react";
import { TRANSLATIONS } from "./Language";

export function LoadingAnalysis({ language }) {
  const t = TRANSLATIONS[language];

  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-primary animate-spin" />

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 rounded-full gradient-leaf animate-pulse-slow">
            <Leaf className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>

      <p className="mt-8 text-lg font-semibold text-foreground animate-pulse">
        {t.analyzing}
      </p>

      {/* Progress dots */}
      <div className="flex gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
