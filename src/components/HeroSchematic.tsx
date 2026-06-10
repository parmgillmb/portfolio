// Dimensioned technical drawing rendered as stroke-only SVG, modelled on the
// end-effector flange: outer profile, dashed bolt circle, four bolt holes,
// centerlines, and dimension callouts. Lines draw in once on load
// (pathLength=1 + CSS dash animation); static under reduced motion.

const cx = 210;
const cy = 200;
const R = 118;
const BC = 80;
const HOLE = 11;

function boltHoles() {
  return [45, 135, 225, 315].map((deg, i) => {
    const a = (deg * Math.PI) / 180;
    return (
      <circle
        key={deg}
        cx={(cx + Math.cos(a) * BC).toFixed(1)}
        cy={(cy + Math.sin(a) * BC).toFixed(1)}
        r={HOLE}
        pathLength={1}
        className="draw-line"
        style={{ animationDelay: `${0.55 + i * 0.12}s` }}
      />
    );
  });
}

export function HeroSchematic({ className = "" }: { className?: string }) {
  return (
    <svg
      width="460"
      height="460"
      viewBox="0 0 420 440"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      className={className}
    >
      {/* Outer flange profile */}
      <circle cx={cx} cy={cy} r={R} pathLength={1} className="draw-line" />
      {/* Pilot bore */}
      <circle cx={cx} cy={cy} r={34} pathLength={1} className="draw-line" style={{ animationDelay: "0.3s" }} />
      {/* Bolt circle (phantom line) */}
      <circle cx={cx} cy={cy} r={BC} strokeDasharray="7 4 1.5 4" pathLength={undefined} className="opacity-70" />
      {boltHoles()}

      {/* Centerlines, long-short dash past the profile */}
      <path d={`M${cx - R - 22} ${cy}H${cx + R + 22}`} strokeDasharray="14 5 3 5" strokeWidth="1" className="opacity-70" />
      <path d={`M${cx} ${cy - R - 22}V${cy + R + 22}`} strokeDasharray="14 5 3 5" strokeWidth="1" className="opacity-70" />

      {/* Diameter dimension, leader at 30 deg */}
      <g strokeWidth="1">
        <path d={`M${cx + R * 0.866} ${cy - R * 0.5}L${cx + R + 52} ${cy - R - 6}H${cx + R + 96}`} pathLength={1} className="draw-line" style={{ animationDelay: "1.0s" }} />
        <path d={`M${cx + R * 0.866} ${cy - R * 0.5}l9 -1.5-4.5 8z`} fill="currentColor" stroke="none" />
        <text x={cx + R + 54} y={cy - R - 12} fontFamily="var(--font-mono)" fontSize="13" fill="currentColor" stroke="none">
          &#8960;236
        </text>
      </g>

      {/* Bolt-circle callout */}
      <g strokeWidth="1">
        <path d={`M${cx - BC * 0.707} ${cy + BC * 0.707}L${cx - R - 42} ${cy + R + 14}H${cx - R - 88}`} pathLength={1} className="draw-line" style={{ animationDelay: "1.15s" }} />
        <text x={cx - R - 90} y={cy + R + 8} fontFamily="var(--font-mono)" fontSize="13" fill="currentColor" stroke="none" textAnchor="start">
          4&#215; &#8960;24
        </text>
      </g>

      {/* Vertical dimension with extension lines and arrows */}
      <g strokeWidth="1">
        <path d={`M${cx + R} ${cy}h44`} className="opacity-60" />
        <path d={`M${cx} ${cy - R}h${R + 44}`} className="opacity-0" />
        <path d={`M${cx + R + 34} ${cy - R}V${cy + R}`} pathLength={1} className="draw-line" style={{ animationDelay: "1.3s" }} />
        <path d={`M${cx} ${cy - R}h${R + 44}M${cx} ${cy + R}h${R + 44}`} className="opacity-40" />
        <path d={`M${cx + R + 34} ${cy - R}l-3.5 9h7zM${cx + R + 34} ${cy + R}l-3.5 -9h7z`} fill="currentColor" stroke="none" />
      </g>

      {/* Datum target at center */}
      <path d={`M${cx - 7} ${cy}h14M${cx} ${cy - 7}v14`} strokeWidth="1" />

      {/* Title-block fragment, bottom right */}
      <g strokeWidth="1">
        <path d="M252 398h150v34h-150z" pathLength={1} className="draw-line" style={{ animationDelay: "1.45s" }} />
        <path d="M252 415h150M327 398v34" className="opacity-60" />
        <text x="259" y="410" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" stroke="none">SCALE 1:2</text>
        <text x="334" y="410" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" stroke="none">REV A</text>
        <text x="259" y="427" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" stroke="none">AL 6061-T6</text>
        <text x="334" y="427" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor" stroke="none">SHT 1/1</text>
      </g>
    </svg>
  );
}
