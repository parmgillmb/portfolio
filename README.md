# Parmeet Gill — Engineering Portfolio

A modern, responsive portfolio website for Parmeet Gill, Mechanical Engineer. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Home, About, Experience (timeline), Projects (filter + search), per-project case studies, Skills, Resume (print-to-PDF), and Contact pages
- Dark / light mode toggle with no flash on load and OS-preference detection
- Subtle scroll-reveal animations (respects `prefers-reduced-motion`)
- Image galleries with click-to-zoom lightbox on every project
- SEO: per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`
- Accessible: semantic landmarks, skip link, keyboard-friendly controls, ARIA labels
- Reusable component architecture with a single typed content source (`src/lib/data.ts`)

## Content source

All copy and data is extracted from the engineer's resume and four LaTeX engineering reports. See `../PROJECT_AUDIT.md` for the full provenance of every project, image, and claim. To edit content, update `src/lib/data.ts` — pages and the resume render from it automatically.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/                 # App Router pages (home, about, experience, projects, skills, resume, contact)
    projects/[slug]/   # Dynamic project case-study pages (statically generated)
  components/          # Reusable UI (Navbar, Footer, ProjectCard, Figure, Reveal, ...)
  lib/data.ts          # Single source of truth for all content
public/projects/       # Project images, grouped per project
```
