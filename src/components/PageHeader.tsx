export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="container-page pt-12 sm:pt-16">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </header>
  );
}
