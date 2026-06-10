import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { DrawingCover } from "./DrawingCover";

// Styled after an engineering document: a mono header strip like a title
// block row, crop marks on hover, and a bordered footer row for the CTA.
export function ProjectCard({ project }: { project: Project }) {
  const isDrawing = project.kind === "drawing";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/[0.07]"
    >
      {/* Title-block header strip */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-2/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-muted">
        <span className="truncate text-accent">{project.source ?? project.course}</span>
        <span className="shrink-0">{project.drawingNumber ?? project.year}</span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        {isDrawing ? (
          <DrawingCover project={project} compact />
        ) : (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute left-3 top-3 chip border-transparent bg-bg/80 text-fg backdrop-blur">
          {project.type}
        </span>
        {/* Crop marks, revealed on hover */}
        <span aria-hidden="true" className="absolute left-2 top-2 h-3 w-3 border-l border-t border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
        <span aria-hidden="true" className="absolute right-2 top-2 h-3 w-3 border-r border-t border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
        <span aria-hidden="true" className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
        <span aria-hidden="true" className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight group-hover:text-accent">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && <span className="chip">+{project.tech.length - 4}</span>}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 border-t border-border pt-3 text-sm font-semibold text-accent">
          {isDrawing ? "View drawing" : "View case study"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
