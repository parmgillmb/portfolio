import { Gear } from "./Gear";

// Blueprint-style decor for the home hero: a denser local grid with major
// lines, registration crosshairs, and a meshed gear train rotating slowly.
// Pure decoration, hidden from assistive tech, fully behind content.
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

      {/* Meshed gear train, right side */}
      <div className="absolute -right-20 -top-24 hidden text-accent/[0.13] sm:block dark:text-accent/[0.17]">
        <Gear size={380} teeth={18} duration={90} />
      </div>
      <div className="absolute right-[208px] top-[160px] hidden text-accent/[0.11] md:block dark:text-accent/[0.14]">
        <Gear size={200} teeth={11} duration={52} reverse />
      </div>
      <div className="absolute right-[120px] top-[330px] hidden text-accent/[0.09] lg:block dark:text-accent/[0.12]">
        <Gear size={110} teeth={8} duration={34} />
      </div>

      {/* Single faint gear on mobile so the motif carries through */}
      <div className="absolute -right-12 -top-14 text-accent/10 sm:hidden">
        <Gear size={180} teeth={12} duration={80} />
      </div>

      {/* Soft accent wash behind the gears */}
      <div className="absolute -right-[10%] -top-[15%] h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-3xl" />
    </div>
  );
}
