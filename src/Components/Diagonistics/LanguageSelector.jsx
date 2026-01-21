import { LANGUAGES } from "./Language";

export function LanguageSelector({ selected, onSelect }) {
  return (
    <div className="flex gap-2">
      {LANGUAGES.map((lang) => {
        const isSelected = selected === lang.code;
        const buttonClass = `flex items-center gap-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
          isSelected
            ? "gradient-leaf text-primary-foreground shadow-card"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`;

        return (
          <button
            key={lang.code}
            onClick={() => onSelect(lang.code)}
            className={buttonClass}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.nativeName}</span>
          </button>
        );
      })}
    </div>
  );
}
