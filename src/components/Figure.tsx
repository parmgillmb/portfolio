"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/lib/data";

// A single captioned figure that opens a lightbox on click.
export function Figure({ image, priority = false }: { image: ProjectImage; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure className="card overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block aspect-[4/3] w-full overflow-hidden bg-surface-2"
          aria-label={`Enlarge image: ${image.caption}`}
        >
          <Image
            src={image.src}
            alt={image.caption}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </button>
        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">{image.caption}</figcaption>
      </figure>

      {open && <Lightbox image={image} onClose={() => setOpen(false)} />}
    </>
  );
}

function Lightbox({ image, onClose }: { image: ProjectImage; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <div className="relative max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative mx-auto h-[75vh] w-full">
          <Image src={image.src} alt={image.caption} fill className="object-contain" />
        </div>
        <p className="mt-3 text-center text-sm text-white/80">{image.caption}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
