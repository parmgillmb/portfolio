"use client";

import { useEffect } from "react";

// Scrubs the horizontal "dimension rules" beside section headings so they draw
// outward from the heading as the section scrolls into view, like a dimension
// line being pulled. Targets [data-rule] elements on the page. GSAP and
// ScrollTrigger load only on pages that mount this component. No-ops under
// reduced motion (rules stay fully drawn).
export function ScrollDraw() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
        const rules = gsap.utils.toArray<HTMLElement>("[data-rule]");
        rules.forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 56%",
                scrub: true,
              },
            }
          );
        });
        ScrollTrigger.refresh();
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return null;
}
