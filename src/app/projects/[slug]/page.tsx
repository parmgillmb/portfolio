import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import { PdfViewer } from "@/components/PdfViewer";
import { DrawingCover } from "@/components/DrawingCover";
import { ProjectCard } from "@/components/ProjectCard";
import { DrawingSheetCard } from "@/components/DrawingSheetCard";
import { HydroGeneratorArt } from "@/components/HydroGeneratorArt";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const isDrawing = project.kind === "drawing";
  const isHydro = (project.source ?? "").includes("Manitoba Hydro");
  const supplementaryDrawings = (project.relatedDrawings ?? [])
    .map((d) => getProject(d.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          {isDrawing ? (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(var(--fg)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--fg)) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
              {isHydro && (
                <div aria-hidden="true" className="absolute -top-6 right-[3%] hidden text-fg/[0.16] lg:block dark:text-fg/[0.2]">
                  <HydroGeneratorArt />
                </div>
              )}
            </>
          ) : (
            <>
              <Image src={project.cover} alt="" fill className="object-cover opacity-[0.12]" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/40 to-bg" />
            </>
          )}
        </div>
        <div className="container-page py-12 sm:py-16">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All projects
          </Link>
          <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{project.source ?? project.course}</p>
          <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{project.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span><span className="font-semibold text-fg">Type:</span> {project.type}</span>
            <span><span className="font-semibold text-fg">Source:</span> {project.team}</span>
            <span><span className="font-semibold text-fg">Year:</span> {project.year}</span>
            {project.drawingNumber && (
              <span className="font-mono"><span className="font-semibold text-fg">Dwg:</span> {project.drawingNumber}</span>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          {project.related && (
            <p className="mt-5 text-sm text-muted">
              Part of{" "}
              <Link href={`/projects/${project.related.slug}`} className="font-semibold text-accent hover:underline">
                {project.related.label}
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Cover */}
      <div className="container-page mt-10">
        {isDrawing && project.cover ? (
          <div className="card relative aspect-[16/10] w-full max-w-2xl overflow-hidden bg-white">
            <Image src={project.cover} alt={`${project.title} drawing sheet`} fill priority sizes="(max-width: 768px) 100vw, 672px" className="object-contain p-2" />
          </div>
        ) : isDrawing ? (
          <div className="card relative aspect-[4/3] w-full max-w-sm overflow-hidden bg-surface-2">
            <DrawingCover project={project} />
          </div>
        ) : (
          <div className="card relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
            <Image src={project.cover} alt={project.title} fill priority sizes="100vw" className="object-contain p-3" />
          </div>
        )}
      </div>

      {/* Metrics / specs */}
      <section className="container-page mt-10">
        <div className={`grid grid-cols-2 gap-4 ${isDrawing ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-3 lg:grid-cols-5"}`}>
          {project.metrics.map((m) => (
            <div key={m.label} className="card p-5">
              <p className="font-mono text-lg font-semibold tracking-tight text-accent sm:text-xl">{m.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="container-page mt-12">
        <div className="card border-l-4 border-l-accent p-6 sm:p-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">Overview</h2>
          <p className="mt-3 text-base leading-relaxed">{project.summary}</p>
        </div>
      </section>

      {/* Bill of materials (drawing entries) */}
      {isDrawing && project.bom && project.bom.length > 0 && (
        <section className="container-page mt-12">
          <Reveal>
            <h2 className="section-title">Bill of Materials</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-2 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Item</th>
                    <th className="px-4 py-3 font-semibold">Qty</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {project.bom.map((row) => (
                    <tr key={row.item} className="border-t border-border">
                      <td className="px-4 py-3 font-mono">{row.item}</td>
                      <td className="px-4 py-3">{row.qty}</td>
                      <td className="px-4 py-3 text-muted">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>
      )}

      {/* Sections */}
      <div className="container-page mt-16 space-y-20">
        {project.sections.map((section, si) => (
          <Reveal as="section" key={section.heading}>
            <div className="flex items-center gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/50 font-mono text-sm text-accent">
                {String(si + 1).padStart(2, "0")}
              </span>
              <h2 className="section-title">{section.heading}</h2>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent sm:block" />
            </div>
            <div className="mt-5 space-y-4">
              {section.body.map((p, pi) => (
                <p key={pi} className="max-w-3xl text-[15px] leading-relaxed text-muted">{p}</p>
              ))}
            </div>
            {section.images && section.images.length > 0 && (
              <div className={`mt-8 grid gap-5 ${section.images.length === 1 ? "max-w-3xl" : "sm:grid-cols-2"}`}>
                {section.images.map((img) => (
                  <Figure key={img.src} image={img} />
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>

      {/* Drawing sheet */}
      {isDrawing && project.drawingFile && (
        <section className="container-page mt-16">
          <Reveal>
            <h2 className="section-title">Drawing Sheet</h2>
            <p className="mt-2 max-w-3xl text-muted">
              The full vector drawing with title block, views, and dimensions. Open in a new tab or download the PDF.
            </p>
            <div className="mt-6">
              <PdfViewer file={project.drawingFile} title={project.title} />
            </div>
          </Reveal>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="container-page mt-20">
          <Reveal>
            <h2 className="section-title">{isDrawing ? "Related Views" : "Image Gallery"}</h2>
            {!isDrawing && <p className="mt-2 text-muted">Additional renders, drawings, and analysis outputs from the project.</p>}
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img) => (
              <Figure key={img.src} image={img} />
            ))}
          </div>
        </section>
      )}

      {/* Supplementary CAD drawings (case studies with released drawings) */}
      {(supplementaryDrawings.length > 0 || (project.supplementarySheets?.length ?? 0) > 0) && (
        <section className="container-page mt-20">
          <Reveal>
            <h2 className="section-title">Supplementary Drawings</h2>
            <p className="mt-2 max-w-3xl text-muted">
              Released CAD drawing deliverables produced for this project. The documented deliverables open to a full page with title block, views, and bill of materials; the assembly and part sheets open directly as PDF drawings.
            </p>
          </Reveal>

          {supplementaryDrawings.length > 0 && (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {supplementaryDrawings.map((d, i) => (
                <Reveal key={d.slug} delay={i * 80} as="div">
                  <ProjectCard project={d} />
                </Reveal>
              ))}
            </div>
          )}

          {project.supplementarySheets && project.supplementarySheets.length > 0 && (
            <>
              <Reveal>
                <h3 className="mt-12 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Assembly &amp; Part Sheets</h3>
              </Reveal>
              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.supplementarySheets.map((sheet, i) => (
                  <Reveal key={sheet.file} delay={i * 60} as="div">
                    <DrawingSheetCard sheet={sheet} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* Next */}
      <section className="container-page mt-20">
        <Link href={`/projects/${next.slug}`} className="card group flex items-center justify-between gap-4 p-6 transition-colors hover:border-accent/50">
          <div>
            <p className="text-sm text-muted">Next project</p>
            <p className="mt-1 text-lg font-bold group-hover:text-accent">{next.title}</p>
          </div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </article>
  );
}
