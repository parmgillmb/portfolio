import type { Metadata } from "next";
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
        title="A versatile engineer across design, analysis, and the field."
        description="My work moves between CAD, simulation, manufacturing, controls, and on-site installation. The range is the point: I adapt to the tool and the problem in front of me."
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
          <Reveal className="card p-6">
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
