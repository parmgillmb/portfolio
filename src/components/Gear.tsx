// Parametric line-art gear rendered as inline SVG. Geometry is computed at
// build time (static export), so there is no runtime cost beyond the CSS
// rotation. Stroke-only styling keeps it consistent with drawing line work.

function gearPath(teeth: number, outer: number, root: number): string {
  const step = (Math.PI * 2) / teeth;
  const pts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const t0 = i * step;
    const angles: Array<[number, number]> = [
      [t0, root],
      [t0 + step * 0.22, root],
      [t0 + step * 0.3, outer],
      [t0 + step * 0.52, outer],
      [t0 + step * 0.6, root],
    ];
    for (const [a, r] of angles) {
      pts.push(`${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r).toFixed(2)}`);
    }
  }
  return `M${pts.join("L")}Z`;
}

export function Gear({
  size = 160,
  teeth = 12,
  duration = 60,
  reverse = false,
  className = "",
}: {
  size?: number;
  teeth?: number;
  /** Seconds per full revolution. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const outer = 48;
  const root = 40;
  const holes = Math.min(teeth, 6);
  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={`gear-spin ${reverse ? "gear-spin-reverse" : ""} ${className}`}
      style={{ "--gear-dur": `${duration}s` } as React.CSSProperties}
    >
      <path d={gearPath(teeth, outer, root)} />
      <circle r={root * 0.62} />
      <circle r={root * 0.2} />
      {Array.from({ length: holes }, (_, i) => {
        const a = (i / holes) * Math.PI * 2;
        const r = root * 0.41;
        return (
          <circle
            key={i}
            cx={(Math.cos(a) * r).toFixed(2)}
            cy={(Math.sin(a) * r).toFixed(2)}
            r={root * 0.09}
          />
        );
      })}
    </svg>
  );
}
