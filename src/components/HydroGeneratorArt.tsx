// Sectional line art of a vertical hydro generator unit: exciter, stator and
// rotor, guide bearings, shaft, and turbine runner, with drawing-style
// callouts for the bearings the proximity probe brackets serve. Stroke-only
// SVG in drawing line work; key outlines draw in on load.

export function HydroGeneratorArt({ className = "" }: { className?: string }) {
  return (
    <svg
      width="380"
      height="540"
      viewBox="0 0 380 540"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      className={className}
    >
      {/* Vertical shaft centerline */}
      <path d="M190 8v524" strokeDasharray="16 5 3 5" strokeWidth="0.8" className="opacity-60" />

      {/* Exciter housing */}
      <path d="M150 28h80v34h-80z" pathLength={1} className="draw-line" />
      <path d="M158 28v34M222 28v34" strokeWidth="0.8" className="opacity-50" />

      {/* Upper bracket arms */}
      <path d="M70 84h240M70 84l36 26M310 84l-36 26" pathLength={1} className="draw-line" style={{ animationDelay: "0.15s" }} />

      {/* Generator guide bearing (upper) */}
      <path d="M160 110h60v22h-60z" pathLength={1} className="draw-line" style={{ animationDelay: "0.3s" }} />
      <path d="M160 116h60M160 126h60" strokeWidth="0.7" className="opacity-50" />

      {/* Stator with end-winding hatch */}
      <path d="M96 148h188v140H96z" pathLength={1} className="draw-line" style={{ animationDelay: "0.45s" }} />
      {[158, 172, 186, 200, 214, 228, 242, 256, 270].map((y) => (
        <path key={y} d={`M100 ${y}l22 8M280 ${y}l-22 8`} strokeWidth="0.7" className="opacity-40" />
      ))}

      {/* Rotor */}
      <path d="M148 162h84v112h-84z" pathLength={1} className="draw-line" style={{ animationDelay: "0.6s" }} />
      <path d="M148 190h84M148 218h84M148 246h84" strokeWidth="0.7" className="opacity-40" />

      {/* Shaft */}
      <path d="M178 62v466M202 62v466" pathLength={1} className="draw-line" style={{ animationDelay: "0.75s" }} />

      {/* Lower bracket and turbine guide bearing */}
      <path d="M104 318h172M104 318l40 24M276 318l-40 24" pathLength={1} className="draw-line" style={{ animationDelay: "0.9s" }} />
      <path d="M160 348h60v22h-60z" pathLength={1} className="draw-line" style={{ animationDelay: "1.05s" }} />
      <path d="M160 354h60M160 364h60" strokeWidth="0.7" className="opacity-50" />

      {/* Head cover */}
      <path d="M120 396h140M132 396v18M248 396v18" strokeWidth="1" className="opacity-70" />

      {/* Turbine runner: hub and blades */}
      <path d="M170 430h40v34h-40z" pathLength={1} className="draw-line" style={{ animationDelay: "1.2s" }} />
      <path d="M170 438c-26 4-40 14-46 28M210 438c26 4 40 14 46 28M170 452c-18 4-28 10-34 20M210 452c18 4 28 10 34 20" pathLength={1} className="draw-line" style={{ animationDelay: "1.35s" }} />

      {/* Draft tube walls with concrete hatch */}
      <path d="M96 488c20 16 44 24 94 24s74-8 94-24" strokeWidth="1" className="opacity-70" />
      {[108, 134, 160, 232, 258].map((x) => (
        <path key={x} d={`M${x} 500l-12 14`} strokeWidth="0.7" className="opacity-40" />
      ))}

      {/* Callouts: generator bearing, turbine bearing, key phasor */}
      <g strokeWidth="0.9">
        <circle cx="226" cy="121" r="2.2" fill="currentColor" stroke="none" />
        <path d="M226 121L304 96h56" pathLength={1} className="draw-line" style={{ animationDelay: "1.5s" }} />
        <text x="306" y="90" fontFamily="var(--font-mono)" fontSize="9.5" fill="currentColor" stroke="none" letterSpacing="0.08em">
          GEN GUIDE BRG
        </text>

        <circle cx="226" cy="359" r="2.2" fill="currentColor" stroke="none" />
        <path d="M226 359L300 336h60" pathLength={1} className="draw-line" style={{ animationDelay: "1.62s" }} />
        <text x="302" y="330" fontFamily="var(--font-mono)" fontSize="9.5" fill="currentColor" stroke="none" letterSpacing="0.08em">
          TUR GUIDE BRG
        </text>

        <circle cx="178" cy="300" r="2.2" fill="currentColor" stroke="none" />
        <path d="M178 300L84 322H18" pathLength={1} className="draw-line" style={{ animationDelay: "1.74s" }} />
        <text x="18" y="316" fontFamily="var(--font-mono)" fontSize="9.5" fill="currentColor" stroke="none" letterSpacing="0.08em">
          KEY PHASOR
        </text>
      </g>
    </svg>
  );
}
