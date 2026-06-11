import type { SupplementarySheet } from "@/lib/data";

// Compact card for a raw CAD drawing sheet (PDF only, no dedicated page).
// Mirrors the title-block aesthetic of DrawingCover. The cover opens the sheet
// in a new tab; a sibling link downloads it. Two sibling anchors, no nesting.
export function DrawingSheetCard({ sheet }: { sheet: SupplementarySheet }) {
  return (
    <div className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/[0.07]">
      <a
        href={sheet.file}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col"
      >
        {/* Title-block header strip */}
        <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-2/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span className="min-w-0 truncate text-accent">Drawing Sheet</span>
          <span className="shrink-0">PDF</span>
        </div>

        {/* Blueprint cover with corner ticks */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border)) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute inset-3 rounded-md border border-border" />
          <span aria-hidden="true" className="absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-accent/60" />
          <span aria-hidden="true" className="absolute right-3 top-3 h-2.5 w-2.5 border-r border-t border-accent/60" />
          <span aria-hidden="true" className="absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-accent/60" />
          <span aria-hidden="true" className="absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-accent/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mb-2 text-accent">
              <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
            </svg>
            <p className="font-bold leading-tight">{sheet.title}</p>
            {sheet.note && <p className="mt-1 text-xs text-muted">{sheet.note}</p>}
          </div>
        </div>

        <span className="flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-accent">
          Open sheet
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </a>

      <a
        href={sheet.file}
        download
        className="flex items-center justify-center gap-1.5 border-t border-border px-4 py-2.5 text-xs font-semibold text-muted transition-colors hover:bg-surface-2 hover:text-fg"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        </svg>
        Download PDF
      </a>
    </div>
  );
}
