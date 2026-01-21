export function ConfidenceMeter({ percentage = 0 }) {
  const getColor = () => {
    if (percentage >= 80) return "bg-success";
    if (percentage >= 60) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={
            "h-full rounded-full transition-all duration-1000 ease-out " + getColor()
          }
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="font-bold text-lg text-foreground min-w-[4rem] text-right">
        {percentage}%
      </span>
    </div>
  );
}
