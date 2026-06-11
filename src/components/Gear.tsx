// Parametric line-art spur gear. Geometry is computed at build time; rotation
// is pure CSS (.gear-spin). Stroke-only, matching drawing line work.

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
  phase = 0,
  className = "",
}: {
  size?: number;
  teeth?: number;
  /** Seconds per revolution. */
  duration?: number;
  reverse?: boolean;
  /** Initial rotation in degrees, used to mesh gear pairs. */
  phase?: number;
  className?: string;
}) {
  const outer = 48;
  const root = 40;
  const spokes = 5;
  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <g
        className={`gear-spin ${reverse ? "gear-spin-reverse" : ""}`}
        style={{ "--gear-dur": `${duration}s`, "--gear-phase": `${phase}deg` } as React.CSSProperties}
      >
        <path d={gearPath(teeth, outer, root)} />
        <circle r={root * 0.66} />
        <circle r={root * 0.22} />
        {Array.from({ length: spokes }, (_, i) => {
          const a = (i / spokes) * Math.PI * 2;
          return (
            <path
              key={i}
              d={`M${(Math.cos(a) * root * 0.22).toFixed(2)} ${(Math.sin(a) * root * 0.22).toFixed(2)}L${(Math.cos(a) * root * 0.66).toFixed(2)} ${(Math.sin(a) * root * 0.66).toFixed(2)}`}
              strokeWidth="1"
            />
          );
        })}
      </g>
    </svg>
  );
}
