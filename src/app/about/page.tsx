import type { Metadata } from "next";
import Image from "next/image";
import { profile, versatilityPoints } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortSummary,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        icon="caliper"
        eyebrow="About"
        title="Design, analysis, and the field."
        description="My work spans CAD, simulation, manufacturing, controls, and on-site installation. Each claim below is tied to a specific project or release."
      />

      <div className="container-page mt-12 grid gap-12 lg:grid-cols-3">
        {/* Main column */}
        <div className="lg:col-span-2">
          <Reveal className="space-y-4">
            <p className="text-base leading-relaxed text-muted">{profile.summary}</p>
            <p className="text-base leading-relaxed text-muted">
              Two internships at Manitoba Hydro covered both ends of engineering practice. In the Generation Design
              Department I modelled components, released fabrication and installation drawings in Autodesk Inventor,
              ran tolerance analysis and FEA, and supported field commissioning. Earlier, in quality engineering, I
              executed inspection plans, tracked non-conformances, and built AI document automation that reduced
              manual data entry across multiple active projects.
            </p>
          </Reveal>

          {/* Versatility, evidence-based */}
          <Reveal className="mt-12">
            <h2 className="section-title">Versatility and Adaptability</h2>
            <ul className="mt-6 space-y-3">
              {versatilityPoints.map((point) => (
                <li key={point} className="card flex gap-3 p-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm leading-relaxed text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Reveal className="card overflow-hidden p-0">
            <div className="relative aspect-[4/5] w-full bg-surface-2">
              <Image
                src="/profile.jpg"
                alt={`${profile.name}, ${profile.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
              {/* Drawing-frame corner ticks */}
              <span aria-hidden="true" className="absolute left-2.5 top-2.5 h-3 w-3 border-l border-t border-accent/70" />
              <span aria-hidden="true" className="absolute right-2.5 top-2.5 h-3 w-3 border-r border-t border-accent/70" />
              <span aria-hidden="true" className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-accent/70" />
              <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b border-r border-accent/70" />
            </div>
          </Reveal>

          <Reveal className="card p-6" delay={60}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Based in</h2>
            <p className="mt-3 text-sm">{profile.location}</p>
            <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              {profile.email}
            </a>
          </Reveal>
        </aside>
      </div>
    </>
  );
}
