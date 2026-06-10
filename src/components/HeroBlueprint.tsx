// Blueprint-style decor for the home hero: a denser local grid with major
// lines and registration crosshairs. Pure decoration, hidden from assistive
// tech, fully behind content.
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

      {/* Soft accent wash */}
      <div className="absolute -right-[10%] -top-[15%] h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-3xl" />
    </div>
  );
}
