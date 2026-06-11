"use client";

import { useRef } from "react";

// Pointer-tracked 3D tilt for cards. Tilt angles are written as CSS variables
// so the transform stays in CSS (see .tilt-wrap/.tilt-inner). Inactive for
// touch input and reduced motion.
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || e.pointerType !== "mouse") return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.setProperty("--tilt-x", `${(-py * 5).toFixed(2)}deg`);
    node.style.setProperty("--tilt-y", `${(px * 7).toFixed(2)}deg`);
  }

  function onLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", "0deg");
    node.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div className={`tilt-wrap ${className}`}>
      <div ref={ref} className="tilt-inner" onPointerMove={onMove} onPointerLeave={onLeave}>
        {children}
      </div>
    </div>
  );
}
