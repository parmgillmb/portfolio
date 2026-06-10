import type { Metadata } from "next";
import { experience, profile } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "Mechanical and quality engineering internships at Manitoba Hydro, covering responsibilities, achievements, and technologies.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        icon="hardhat"
        eyebrow="Experience"
        title="Two years of hands-on engineering."
        description="Design and quality engineering internships at Manitoba Hydro, where I moved from CAD and FEA to field commissioning, and from QC inspection to building AI-powered automation."
      />

      <div className="container-page mt-12">
        <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
          {/* Education entry */}
          <Reveal as="li" className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <div className="card p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold">{profile.education.degree}</h2>
                  <p className="text-sm text-accent">{profile.education.school}, {profile.education.faculty}</p>
                </div>
                <span className="chip">{profile.education.graduated}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="chip">GPA {profile.education.gpa}</span>
                <span className="chip">{profile.education.honours}</span>
              </div>
            </div>
          </Reveal>

          {experience.map((e, i) => (
            <Reveal as="li" key={e.role + e.period} className="relative" delay={i * 80}>
              <span className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <article className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-bold">{e.role}</h2>
                    <p className="text-sm text-accent">{e.company}, {e.division}</p>
                    <p className="text-sm text-muted">{e.location}</p>
                  </div>
                  <span className="chip shrink-0">{e.period}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{e.summary}</p>

                <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-muted">Responsibilities &amp; Achievements</h3>
                <ul className="mt-3 space-y-2.5">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-muted">Technologies</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </>
  );
}
