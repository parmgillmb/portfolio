// Exploded-view line art of a bolted flange stack: fasteners, washer plate,
// flanged disc, gasket, and base, separated along a dashed assembly axis.
// Stroke-only SVG used as decor on the projects index header.
export function ExplodedAssembly({ className = "" }: { className?: string }) {
  return (
    <svg
      width="300"
      height="380"
      viewBox="0 0 300 380"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
      className={className}
    >
      {/* Assembly axis */}
      <path d="M150 6v368" strokeDasharray="12 5 3 5" strokeWidth="0.8" className="opacity-60" />

      {/* Hex bolts */}
      {[92, 208].map((x, i) => (
        <g key={x} pathLength={undefined}>
          <path
            d={`M${x - 11} 34l5.5-9h11l5.5 9-5.5 9h-11z`}
            pathLength={1}
            className="draw-line"
            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
          />
          <path d={`M${x - 4} 43v26M${x + 4} 43v26`} strokeWidth="1" className="opacity-80" />
          <path d={`M${x - 4} 52h8M${x - 4} 58h8M${x - 4} 64h8`} strokeWidth="0.7" className="opacity-50" />
          <path d={`M${x} 70v36`} strokeDasharray="4 4" strokeWidth="0.7" className="opacity-45" />
        </g>
      ))}

      {/* Washer plate */}
      <ellipse cx="150" cy="122" rx="92" ry="18" pathLength={1} className="draw-line" style={{ animationDelay: "0.35s" }} />
      <ellipse cx="92" cy="119" rx="9" ry="3.5" strokeWidth="0.9" className="opacity-70" />
      <ellipse cx="208" cy="119" rx="9" ry="3.5" strokeWidth="0.9" className="opacity-70" />
      <path d="M58 122v10c0 10 41 18 92 18s92-8 92-18v-10" strokeWidth="1" className="opacity-80" />

      {/* Drop leaders */}
      <path d="M150 158v30" strokeDasharray="4 4" strokeWidth="0.7" className="opacity-45" />

      {/* Flanged disc */}
      <ellipse cx="150" cy="212" rx="110" ry="24" pathLength={1} className="draw-line" style={{ animationDelay: "0.55s" }} />
      <ellipse cx="150" cy="212" rx="36" ry="9" strokeWidth="1" className="opacity-80" />
      <path d="M40 212v16c0 13 49 24 110 24s110-11 110-24v-16" strokeWidth="1" className="opacity-80" />
      <ellipse cx="86" cy="208" rx="8" ry="3" strokeWidth="0.9" className="opacity-70" />
      <ellipse cx="214" cy="208" rx="8" ry="3" strokeWidth="0.9" className="opacity-70" />

      <path d="M150 256v28" strokeDasharray="4 4" strokeWidth="0.7" className="opacity-45" />

      {/* Gasket ring */}
      <ellipse cx="150" cy="300" rx="74" ry="15" pathLength={1} className="draw-line" style={{ animationDelay: "0.75s" }} />
      <ellipse cx="150" cy="300" rx="40" ry="8" strokeWidth="0.9" className="opacity-70" />

      <path d="M150 318v18" strokeDasharray="4 4" strokeWidth="0.7" className="opacity-45" />

      {/* Base boss */}
      <ellipse cx="150" cy="348" rx="52" ry="11" pathLength={1} className="draw-line" style={{ animationDelay: "0.95s" }} />
      <path d="M98 348v12c0 6 23 11 52 11s52-5 52-11v-12" strokeWidth="1" className="opacity-80" />

      {/* Item balloons */}
      <g strokeWidth="0.9">
        <path d="M242 122h28" />
        <circle cx="280" cy="122" r="11" />
        <text x="280" y="126" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" stroke="none">2</text>
        <path d="M260 212h26" />
        <circle cx="296" cy="212" r="11" className="opacity-0" />
        <circle cx="286" cy="212" r="11" />
        <text x="286" y="216" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" stroke="none">3</text>
        <path d="M103 34H66" />
        <circle cx="55" cy="34" r="11" />
        <text x="55" y="38" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" stroke="none">1</text>
      </g>
    </svg>
  );
}
