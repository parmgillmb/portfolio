import type { Metadata } from "next";
import Link from "next/link";
import { profile, skillGroups, certifications, languages, versatilityPoints } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SectionIcon } from "@/components/SectionIcon";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortSummary,
};

const interests = [
  {
    title: "Mechanical Design & CAD",
    body: "SolidWorks and Inventor models, assemblies, and weldments, released as fabrication and installation drawings driven by GD&T and DFM.",
  },
  {
    title: "Simulation & Validation",
    body: "FEA and CFD with mesh-convergence checks to confirm structural integrity and performance before fabrication.",
  },
  {
    title: "Robotics & Automation",
    body: "Collaborative robots, metrology, and CAD-driven software combined into repeatable inspection and motion systems.",
  },
  {
    title: "Energy & Systems Analysis",
    body: "Renewable-energy and combustion systems modelled from hourly load analysis through 30-year economics and GHG impact.",
  },
];

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

          <Reveal className="mt-12">
            <h2 className="section-title">Engineering Interests</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {interests.map((it) => (
                <div key={it.title} className="card p-5">
                  <h3 className="font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="section-title">Technical Strengths</h2>
            <div className="mt-6 space-y-4">
              {skillGroups.map((g) => (
                <div key={g.category} className="card p-5">
                  <h3 className="text-sm font-bold text-accent">{g.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/skills" className="text-sm font-semibold text-accent hover:underline">
                See the detailed skills breakdown
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Reveal className="card p-6">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted">
              <SectionIcon name="ruler" size={15} className="text-accent" />
              Education
            </h2>
            <p className="mt-3 font-bold">{profile.education.school}</p>
            <p className="text-sm text-muted">{profile.education.faculty}</p>
            <p className="mt-2 text-sm">{profile.education.degree}</p>
            <p className="mt-2 text-sm text-muted">{profile.education.graduated}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="chip">GPA {profile.education.gpa}</span>
              <span className="chip">{profile.education.honours}</span>
            </div>
          </Reveal>

          <Reveal className="card p-6" delay={60}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Certifications</h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card p-6" delay={120}>
            <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Languages</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {languages.map((l) => (
                <span key={l} className="chip">{l}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="card p-6" delay={180}>
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
