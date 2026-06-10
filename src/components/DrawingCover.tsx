import type { Project } from "@/lib/data";

// A title-block style cover used for drawing-type project cards, in place of a
// raster image. Renders the title, drawing number, and a faint grid.
export function DrawingCover({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface-2">
      {/* Faint blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border)) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Drawing-frame border with corner ticks */}
      <div className="absolute inset-3 rounded-md border border-border" />
      <span aria-hidden="true" className="absolute left-3 top-3 h-2.5 w-2.5 border-l border-t border-accent/60" />
      <span aria-hidden="true" className="absolute right-3 top-3 h-2.5 w-2.5 border-r border-t border-accent/60" />
      <span aria-hidden="true" className="absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-accent/60" />
      <span aria-hidden="true" className="absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-accent/60" />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-center gap-2 text-accent">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest">Engineering Drawing</span>
        </div>
        <div>
          <p className={`font-bold leading-tight ${compact ? "text-base" : "text-lg"}`}>{project.title}</p>
          {project.drawingNumber && (
            <p className="mt-1 font-mono text-xs text-muted">{project.drawingNumber}</p>
          )}
        </div>
        {/* Title-block footer: first two spec fields plus source */}
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded border border-border text-[10px]">
          <Cell label={project.metrics[0]?.label ?? "Material"} value={project.metrics[0]?.value} />
          <Cell label={project.metrics[1]?.label ?? "Spec"} value={project.metrics[1]?.value} />
          <Cell label="Source" value={project.source ?? "CAD"} />
        </div>
      </div>
    </div>
  );
}

function Cell({ label, value }: { label: string; value?: string }) {
  return (
    <div className="bg-surface px-2 py-1.5">
      <p className="text-[9px] uppercase tracking-wide text-muted">{label}</p>
      <p className="truncate font-medium">{value ?? "N/A"}</p>
    </div>
  );
}
