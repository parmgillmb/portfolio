"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = active === "All" || p.type === active || p.categories.includes(active);
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.subtitle,
        p.summary,
        p.course,
        p.type,
        ...p.tech,
        ...p.categories,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [active, query]);

  return (
    <div className="mt-10">
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === c
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-muted hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative sm:w-64">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="w-full rounded-full border border-border bg-surface py-2 pl-10 pr-4 text-sm outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="card mt-6 p-12 text-center">
          <p className="font-semibold">No projects match your search.</p>
          <p className="mt-1 text-sm text-muted">Try a different keyword or category.</p>
        </div>
      )}
    </div>
  );
}
