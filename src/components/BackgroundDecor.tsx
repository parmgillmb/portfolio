// Fixed, subtle background for a technical/CAD theme: a cool gradient wash,
// a faint engineering grid, and a soft accent glow. Sits behind all content.
export function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-bg to-bg" />
      {/* Accent tint in the top corner */}
      <div className="absolute -right-[15%] -top-[10%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -left-[20%] top-[30%] h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-3xl" />
      {/* Faint engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
