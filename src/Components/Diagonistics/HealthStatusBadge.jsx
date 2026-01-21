import { TRANSLATIONS } from "./Language";
import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const statusConfig = {
  healthy: {
    icon: CheckCircle,
    className: "bg-success/10 text-success border-success/30",
  },
  mild: {
    icon: AlertCircle,
    className: "bg-warning/10 text-warning border-warning/30",
  },
  moderate: {
    icon: AlertTriangle,
    className: "bg-warning/20 text-warning border-warning/50",
  },
  severe: {
    icon: XCircle,
    className: "bg-destructive/10 text-destructive border-destructive/30",
  },
};

const sizeClasses = {
  sm: "px-2 py-1 text-xs gap-1",
  md: "px-3 py-1.5 text-sm gap-2",
  lg: "px-4 py-2 text-base gap-2",
};

const iconSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function HealthStatusBadge({ status, language, size = "md" }) {
  const config = statusConfig[status];
  const Icon = config.icon;
  const t = TRANSLATIONS[language];

  return (
    <div
      className={
        "inline-flex items-center rounded-full font-semibold border animate-scale-in " +
        config.className +
        " " +
        sizeClasses[size]
      }
    >
      <Icon className={iconSizes[size]} />
      <span>{t[status]}</span>
    </div>
  );
}
