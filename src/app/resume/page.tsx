import type { Metadata } from "next";
import {
  profile,
  experience,
  skillGroups,
  certifications,
  languages,
  projects,
} from "@/lib/data";
import { PrintButton } from "@/components/PrintButton";
import { SectionIcon } from "@/components/SectionIcon";

export const metadata: Metadata = {
  title: "Resume",
  description: "Interactive resume for Parmeet Gill, Mechanical Engineer. Education, experience, projects, and skills.",
};

export default function ResumePage() {
  return (
    <div className="container-page py-12 sm:py-16">
      {/* Action bar */}
      <div className="no-print mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <SectionIcon name="document" size={17} />
            Resume
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">Interactive Resume</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Download the PDF, or use the print button to save a copy. Everything below mirrors my full resume.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <a href="/Parmeet-Gill-Resume.pdf" download className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      {/* Resume sheet */}
      <div className="card mx-auto max-w-3xl p-8 sm:p-10 print:border-0 print:p-0 print:shadow-none">
        {/* Header */}
        <header className="border-b border-border pb-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">{profile.name}</h2>
          <p className="mt-1 text-accent">{profile.title}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted">
            <span>{profile.phone}</span>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${profile.email}`} className="hover:text-fg">{profile.email}</a>
            <span aria-hidden="true">·</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              {profile.linkedinLabel}
            </a>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-muted">{profile.summary}</p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-1">
            <h3 className="font-semibold">{profile.education.school}</h3>
            <span className="text-sm text-muted">{profile.education.graduated}</span>
          </div>
          <p className="text-sm italic text-muted">{profile.education.degree}</p>
          <p className="mt-1 text-sm text-muted">GPA: {profile.education.gpa} · {profile.education.honours}</p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-5">
            {experience.map((e) => (
              <div key={e.role + e.period}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-semibold">{e.company}, {e.division}</h3>
                  <span className="text-sm text-muted">{e.period}</span>
                </div>
                <p className="text-sm italic text-muted">{e.role} · {e.location}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Selected Projects">
          <div className="space-y-3">
            {projects
              .filter((p) => p.kind === "case")
              .map((p) => (
                <div key={p.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="text-sm text-muted">{p.course}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{p.summary}</p>
                </div>
              ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <dl className="space-y-3 text-sm">
            {skillGroups.map((g) => (
              <div key={g.category} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-4">
                <dt className="font-semibold text-accent">{g.category}</dt>
                <dd className="text-muted">{g.skills.join(", ")}</dd>
              </div>
            ))}
            <div className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-4">
              <dt className="font-semibold text-accent">Certifications</dt>
              <dd className="text-muted">{certifications.join(", ")}</dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-4">
              <dt className="font-semibold text-accent">Languages</dt>
              <dd className="text-muted">{languages.join(", ")}</dd>
            </div>
          </dl>
        </Section>

        {/* References */}
        <Section title="References">
          <p className="text-sm leading-relaxed text-muted">
            Available upon request, including supervisors and managers from my Manitoba Hydro internships.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 border-b border-border pb-6 last:border-0">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">{title}</h2>
      {children}
    </section>
  );
}
