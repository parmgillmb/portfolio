import type { Metadata } from "next";
import { skillGroups, certifications, languages } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SkillIcon } from "@/components/SkillIcon";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across CAD, FEA/CFD, GD&T & DFM, manufacturing, programming & robotics, metrology, and energy systems.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The toolkit behind the work."
        description="Grouped by discipline. Every tool listed is backed by coursework, projects, or two years of industry use."
      />

      <div className="container-page mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.category} delay={i * 60} as="div" className="card flex flex-col p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <SkillIcon name={g.icon} />
              </span>
              <h2 className="text-base font-bold leading-tight">{g.category}</h2>
            </div>
            <ul className="mt-5 space-y-2">
              {g.skills.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="container-page mt-10 grid gap-6 sm:grid-cols-2">
        <Reveal className="card p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Certifications</h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {certifications.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="card p-6" delay={60}>
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Languages</h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {languages.map((l) => (
              <span key={l} className="chip">{l}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
