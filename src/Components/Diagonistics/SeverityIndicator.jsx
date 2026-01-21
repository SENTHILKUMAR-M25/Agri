import { TRANSLATIONS } from "./Language";

const severityConfig = {
  low: { bars: 1, color: "bg-success" },
  medium: { bars: 2, color: "bg-warning" },
  high: { bars: 3, color: "bg-destructive" },
};

export function SeverityIndicator({ level, language }) {
  const config = severityConfig[level];
  const t = TRANSLATIONS[language];

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-end gap-1 h-6">
        {[1, 2, 3].map((bar) => {
          const heightClass = bar === 1 ? "h-2" : bar === 2 ? "h-4" : "h-6";
          const colorClass = bar <= config.bars ? config.color : "bg-muted";

          return (
            <div
              key={bar}
              className={`w-2 rounded-sm transition-all duration-500 ${heightClass} ${colorClass}`}
              style={{ animationDelay: `${bar * 100}ms` }}
            />
          );
        })}
      </div>
      <span className="font-medium text-foreground">{t[level]}</span>
    </div>
  );
}
