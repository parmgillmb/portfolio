// Fixed, subtle background for a technical/CAD theme: a cool gradient wash,
// a faint engineering grid, and a soft accent glow. Sits behind all content.
export function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-bg to-bg" />
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
