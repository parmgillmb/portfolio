"use client";

import { useEffect } from "react";

// Scrubs a subtle rotation and lift on the home hero flange schematic, tied to
// scroll position, while the schematic's own draw-in still plays on load. No
// pin (the hero never freezes) and the schematic stays visible regardless, so
// there is no failure mode that hides it. Loads GSAP only on the home page.
// No-ops under reduced motion or below the schematic's breakpoint.
export function HeroScrub() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return; // schematic is desktop-only

    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const wrap = document.querySelector<HTMLElement>("[data-hero-schematic]");
    if (!hero || !wrap) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(wrap, {
          rotation: 12,
          yPercent: -14,
          transformOrigin: "50% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return null;
}
