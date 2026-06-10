import type { Metadata } from "next";
import { profile } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name}. Open to mechanical design, product development, manufacturing, and robotics roles.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        icon="mail"
        eyebrow="Contact"
        title="Let's talk."
        description={profile.availability + ". Send a message and I'll get back to you quickly."}
      />

      <div className="container-page mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />

        <aside className="space-y-4">
          <ContactRow
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
            icon={<path d="M4 4h16v16H4zM22 6l-10 7L2 6" />}
          />
          <ContactRow
            label="LinkedIn"
            value={profile.linkedinLabel}
            href={profile.linkedin}
            external
            icon={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><path d="M2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></>}
          />
          <ContactRow
            label="Phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}
            icon={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />}
          />
          <ContactRow
            label="Location"
            value={profile.location}
            icon={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>}
          />
        </aside>
      </div>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}) {
  const inner = (
    <div className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/50">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icon}
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
      {inner}
    </a>
  );
}
