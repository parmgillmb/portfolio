import { HeroSchematic } from "./HeroSchematic";
import { Gear } from "./Gear";

// Blueprint-style decor for the home hero: a denser local grid with major
// lines, registration crosshairs, a dimensioned flange schematic that draws
// in like CAD linework, and a slow meshed gear pair in the lower corner.
// Pure decoration, hidden from assistive tech.
export function HeroBlueprint() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Fine grid with major lines every 5 cells */}
      <div
        className="absolute inset-0 opacity-50 dark:opacity-40 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(var(--border)) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgb(var(--border)) 1px, transparent 1px)," +
            "linear-gradient(to right, rgb(var(--border)) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgb(var(--border)) 1px, transparent 1px)",
          backgroundSize: "24px 24px, 24px 24px, 120px 120px, 120px 120px",
        }}
      />

      {/* Registration crosshairs */}
      {[
        { left: "12%", top: "18%" },
        { left: "46%", top: "70%" },
        { left: "78%", top: "12%" },
      ].map((pos, i) => (
        <svg
          key={i}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="rgb(var(--accent) / 0.35)"
          strokeWidth="1"
          className="absolute"
          style={pos}
        >
          <path d="M11 0v22M0 11h22" />
          <circle cx="11" cy="11" r="5" />
        </svg>
      ))}

      {/* Dimensioned flange schematic, right side */}
      <div className="absolute -top-2 right-[2%] hidden text-accent/25 lg:block dark:text-accent/20">
        <HeroSchematic />
      </div>
      <div className="absolute -right-16 -top-6 hidden text-accent/20 md:block lg:hidden">
        <HeroSchematic className="h-[360px] w-[360px]" />
      </div>

      {/* Meshed gear pair, lower right corner. Speeds follow the 14:9 tooth
          ratio so the mesh reads as a real drive. */}
      <div className="absolute -bottom-14 -right-6 origin-bottom-right scale-[0.62] text-fg/[0.13] sm:scale-90 lg:scale-100 dark:text-fg/[0.16]">
        <div className="relative h-[340px] w-[360px]">
          <div className="absolute bottom-0 right-0">
            <Gear size={220} teeth={14} duration={84} />
          </div>
          <div className="absolute bottom-[114px] right-[150px] text-accent/25">
            <Gear size={145} teeth={9} duration={54} reverse phase={20} />
          </div>
        </div>
      </div>

      {/* Soft accent wash */}
      <div className="absolute -right-[10%] -top-[15%] h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-3xl" />
    </div>
  );
}
