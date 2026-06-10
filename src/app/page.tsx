import Link from "next/link";
import { profile, featuredProjects, experience, skillGroups } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { HeroBlueprint } from "@/components/HeroBlueprint";
import { TechDivider } from "@/components/TechDivider";
import { SectionIcon } from "@/components/SectionIcon";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBlueprint />
        <div className="container-page pb-12 pt-16 sm:pt-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {profile.name}
              <span className="mt-2 block text-accent">{profile.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{profile.shortSummary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/resume" className="btn-outline">
                Resume
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {[
                { v: profile.education.gpa, l: "GPA" },
                { v: "2 yrs", l: "Industry experience" },
                { v: "4", l: "Engineering projects" },
                { v: "B.Sc.", l: "Mech. Eng. (Co-op)" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-accent/30 pl-3">
                  <dt className="text-2xl font-bold tracking-tight sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-sm text-muted">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <TechDivider className="mt-6" />

      {/* Featured projects */}
      <section className="container-page mt-12">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <SectionIcon name="compass" size={17} />
              Selected Work
            </p>
            <h2 className="section-title mt-2">Featured Projects</h2>
          </div>
          <Link href="/projects" className="hidden shrink-0 text-sm font-semibold text-accent hover:underline sm:inline">
            All projects →
          </Link>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} as="div">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/projects" className="btn-outline w-full">
            View all projects
          </Link>
        </div>
      </section>

      <TechDivider className="mt-20" />

      {/* Experience snapshot */}
      <section className="container-page mt-12">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <SectionIcon name="hardhat" size={17} />
            Where I&apos;ve Worked
          </p>
          <h2 className="section-title mt-2">Industry Experience</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.period} delay={i * 80} as="div" className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold">{e.role}</h3>
                  <p className="text-sm text-accent">{e.company}, {e.division}</p>
                </div>
                <span className="chip shrink-0">{e.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{e.summary}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/experience" className="text-sm font-semibold text-accent hover:underline">
            See full timeline →
          </Link>
        </div>
      </section>

      <TechDivider className="mt-20" />

      {/* Skills strip */}
      <section className="container-page mt-12">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
            <SectionIcon name="wrench" size={17} />
            Capabilities
          </p>
          <h2 className="section-title mt-2">Core Engineering Toolkit</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.slice(0, 8).map((g, i) => (
            <Reveal key={g.category} delay={i * 50} as="div" className="card p-5">
              <h3 className="text-sm font-bold">{g.category}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.skills.slice(0, 4).join(" · ")}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/skills" className="text-sm font-semibold text-accent hover:underline">
            Explore all skills →
          </Link>
        </div>
      </section>

      <TechDivider className="mt-20" />

      {/* CTA */}
      <section className="container-page mt-12">
        <Reveal className="card relative overflow-hidden p-8 sm:p-12 text-center">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
          <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-accent/40" />
          <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-accent/40" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-accent/40" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-accent/40" />
          <h2 className="section-title">Let&apos;s build something well-engineered.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            I&apos;m looking for mechanical design, product development, manufacturing, and robotics opportunities. I&apos;d love to talk.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Contact me</Link>
            <a href={`mailto:${profile.email}`} className="btn-outline">{profile.email}</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
