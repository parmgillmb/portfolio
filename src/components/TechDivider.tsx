// Section divider styled like a drawing dimension line: hairlines with end
// ticks and a datum-target symbol at centre.
export function TechDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`container-page ${className}`}>
      <div className="flex items-center gap-3">
        <span className="h-2 w-px bg-border" />
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="rgb(var(--accent) / 0.6)" strokeWidth="1">
          <circle cx="9" cy="9" r="6" />
          <path d="M9 0v18M0 9h18" stroke="rgb(var(--border))" />
          <path d="M9 3a6 6 0 0 1 6 6H9z" fill="rgb(var(--accent) / 0.35)" stroke="none" />
        </svg>
        <span className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
        <span className="h-2 w-px bg-border" />
      </div>
    </div>
  );
}
