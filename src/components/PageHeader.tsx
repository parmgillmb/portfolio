import { SectionIcon, type SectionIconName } from "./SectionIcon";

export function PageHeader({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: SectionIconName;
}) {
  return (
    <header className="container-page pt-12 sm:pt-16">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {icon && <SectionIcon name={icon} size={16} />}
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
      <div className="title-rule" aria-hidden="true" />
    </header>
  );
}
