import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-border bg-surface">
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.title} · {profile.location}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-fg">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-fg">
            LinkedIn
          </a>
          <Link href="/resume" className="text-muted transition-colors hover:text-fg">
            Resume
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-4 text-center text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </footer>
  );
}
