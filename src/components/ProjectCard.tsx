import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { DrawingCover } from "./DrawingCover";

export function ProjectCard({ project }: { project: Project }) {
  const isDrawing = project.kind === "drawing";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/5"
    >
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
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">{project.source ?? project.course}</p>
        <h3 className="mt-1.5 text-lg font-bold tracking-tight group-hover:text-accent">{project.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && <span className="chip">+{project.tech.length - 4}</span>}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          {isDrawing ? "View drawing" : "View case study"}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
