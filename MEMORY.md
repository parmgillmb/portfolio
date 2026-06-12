# MEMORY.md — Portfolio Website Knowledge Base

> Authoritative project memory for AI agents and developers. Read this first.
> A future Claude Code session should be able to read only this file and
> understand the website, its owner, the projects, the design system, and the
> development history without re-deriving everything.
>
> **Location:** git repository root (`portfolio-site/`). The git remote is
> `https://github.com/parmgillmb/portfolio.git`, branch `main`.
> **Keep this file updated** whenever significant changes are made (see Change Log).
> A separate provenance document, `PROJECT_AUDIT.md`, lives one directory up in
> `website/` (outside the git repo) and records source-file origins for project content.

---

# Project Overview

**Purpose.** A personal portfolio website for Parmeet Gill, a Mechanical
Engineering graduate, used as the primary public-facing artifact in a job search
for mechanical engineering roles (mechanical design, product development,
manufacturing, robotics, automation).

**Target audience.** Recruiters and hiring managers at engineering companies;
secondarily, engineers reviewing technical depth. Written and designed for a
professional engineering reader, not a general consumer.

**Personal brand goals.**
- Present as a credible new-graduate mechanical engineer with real shipped work
  (production drawings released and sealed by a P.Eng at Manitoba Hydro).
- Emphasize **versatility and adaptability** across disciplines: CAD design, FEA,
  CFD, manufacturing, controls/robotics, biomaterials, energy systems, and field
  installation.
- Look like a modern, premium mechanical-engineering portfolio, not a generic
  developer template and not a steampunk/gaming aesthetic.

**Key objectives.**
- Convert a visit into a recruiter action: view projects, download the resume,
  make contact.
- Document each project end to end (problem, objectives, design, analysis,
  results, learnings) like an engineering report.
- Showcase real CAD drawing deliverables with live embedded PDFs and rendered
  drawing-sheet thumbnails.
- Fast, fully static, mobile-responsive, accessible (reduced-motion aware).

---

# Website Owner

- **Name:** Parmeet Gill
- **Title:** Mechanical Engineer (B.Sc., University of Manitoba, Co-op/IIP, graduated May 2026)
- **Location:** West St. Paul, Manitoba, Canada
- **Email:** parmgill.mb@gmail.com  | **Phone:** 431-997-1613
- **LinkedIn:** https://www.linkedin.com/in/parm-gill-mb/
- **GPA:** 3.76, Dean's Honour List
- Portfolio focuses on engineering, technical design, manufacturing, CAD,
  automation, and project work.
- Core narrative: **versatility and adaptability** demonstrated through experience
  across multiple disciplines, projects, software tools, and engineering
  environments (two Manitoba Hydro internships spanning design and quality, plus
  six documented academic/capstone projects in robotics, controls, biomaterials,
  energy, fluids/CFD, and structural FEA).

---

# Design Philosophy

Overall direction: **modern mechanical / advanced-manufacturing**. Clean,
professional, premium. Engineering-drawing visual language (blueprint grids,
dimension lines, title blocks, drawing callouts) used as restrained decoration.
No cartoonish, flashy, gaming, or steampunk elements. Animations are subtle and
all respect `prefers-reduced-motion`.

### Color palette (CSS custom properties, RGB triplets in `globals.css`)
Theme is toggled by a `.dark` class on `<html>`; persisted in `localStorage`
key `theme`. Tailwind colors map to these vars via `rgb(var(--x) / <alpha>)`.

Light theme:
- `--bg` 248 250 252 · `--surface` 255 255 255 · `--surface-2` 241 245 249
- `--border` 226 232 240 · `--fg` 15 23 42 · `--muted` 100 116 139
- `--accent` 13 148 136 (teal-600) · `--accent-fg` 255 255 255

Dark theme:
- `--bg` 8 11 18 · `--surface` 17 22 33 · `--surface-2` 24 31 45
- `--border` 38 47 64 · `--fg` 226 232 240 · `--muted` 148 163 184
- `--accent` 45 212 191 (teal-400) · `--accent-fg` 8 11 18

Accent is teal throughout. The OG share card uses navy `#0a0e18`→`#080b12`
background with teal `#2dd4bf`.

### Typography
- **Body / sans:** Inter (`--font-sans`, `next/font/google`).
- **Display / headings:** Space Grotesk (`--font-display`). Applied to `h1,h2,h3`
  with tight letter-spacing (`-0.02em`) for a "cinematic" engineering look.
- **Mono:** `ui-monospace`/JetBrains-style (`--font-mono`), used for drawing
  numbers, dates, title-block fields, and technical labels.
- `.text-gradient` puts a teal→fg gradient on the hero title.

### Layout decisions
- Centered content column, `max-w-content` (1180px), `.container-page` wrapper.
- Generous vertical rhythm; sections separated by `TechDivider` (a dimension-line
  divider with a datum-target symbol) on the home page.
- Page headers (`PageHeader`) use an uppercase eyebrow with an engineering icon,
  a large display title, and a `.title-rule` dimension-style accent rule.
- Project grids use `grid-cols-1` on mobile expanding to 2–3 columns; all grids
  explicitly set `grid-cols-1` to prevent mobile horizontal overflow.

### UI component patterns
- `.card` — rounded bordered surface; the base container for most content.
- `.chip` — pill tag for tech/skills, hover raises accent border.
- `.btn-primary` / `.btn-outline` — buttons; primary lifts + accent shadow on
  hover, compresses on active.
- `.liquid-glass` — glassmorphism (blur + saturation + gradient edge highlight),
  theme-aware; used by the floating navbar and the hero availability badge.
- `.tilt-wrap`/`.tilt-inner` — pointer-tracked 3D tilt (desktop mouse only).
- `.draw-line` — stroke-dash "draw-in" animation for SVG line art (flange
  schematic, hydro generator art, exploded assembly).
- `.brushed` — extremely faint (≈1.6% opacity) brushed-metal texture on drawing
  covers; the single "industrial material" touch.
- Drawing-frame corner ticks (small L-shaped accent borders) recur as a motif on
  the profile photo, CTA card, drawing covers, and drawing sheet cards.

### Icon philosophy
All icons are inline stroke-only SVG (no icon font, no raster). Two icon sets:
- `SectionIcon` (section/nav level): `compass` (Projects), `wrench` (Skills),
  `hardhat` (Experience), `caliper` (About), `ruler` (Education), `mail`
  (Contact), `document` (Resume).
- `SkillIcon` (skills cards): `cube`, `wave`, `gauge`, `tool`, `code`, `doc`,
  `beaker`, `flow`.
Engineering-themed, minimal, functional. No decorative gears (gears were trialed
and removed twice at the owner's request; do not reintroduce without asking).

### Background and gradient decisions
- `BackgroundDecor` (global, fixed, behind all content): a cool gradient wash,
  two soft accent blurs, and a faint 40px engineering grid that fades out ~80%
  down the page.
- `HeroBlueprint` (home hero only): denser local grid with major lines every 5
  cells, registration crosshairs, the dimensioned flange `HeroSchematic`, and a
  soft accent wash. (No gears.)
- `ScrollProgress`: a thin accent gradient bar fixed to the top, driven by scroll.

---

# Site Architecture

### Stack
- **Next.js 14.2.15** (App Router) + **React 18.3** + **TypeScript 5.6**
- **Tailwind CSS 3.4** (config-driven theme tokens) + PostCSS + Autoprefixer
- No UI component library, no animation library (GSAP/three.js were requested but
  intentionally **not** added; all effects are CSS + tiny custom components to
  keep the bundle small and the site fully static). No state management library.

### Build & deployment
- **Static export:** `next.config.mjs` sets `output: "export"`, `trailingSlash:
  true`, `images.unoptimized: true`. Build emits `out/`.
- **Host:** Cloudflare (Workers static assets). `wrangler.toml` sets
  `name = "portfolio"` and `[assets] directory = "./out"`,
  `not_found_handling = "404-page"`. Deploy = build then `wrangler deploy` (or
  Cloudflare's git integration on push to `main`).
- **Live URLs:** custom domain `https://parmgill-mb.ca` (Cloudflare registered),
  and `https://portfolio.parmgill-mb.workers.dev`.
- **GitHub:** `https://github.com/parmgillmb/portfolio.git`, branch `main`.
  Commits are made from the `portfolio-site/` directory (the git root).

### Local dev environment notes (Windows)
- Node was installed via `winget install OpenJS.NodeJS.LTS` and is **not on PATH**
  in fresh shells. Prepend `C:\Program Files\nodejs` to PATH before `npm`.
- Desktop launcher: `C:\Users\Parmeet\Desktop\Portfolio Website.bat` runs the dev
  server and opens the browser.
- LaTeX (MiKTeX) and Poppler (`pdftoppm`) are available for resume compilation and
  PDF→PNG thumbnail rendering; Edge (EdgeCore) is used headless to rasterize the
  OG card. Build scratch dirs (`.resume-build/`, `.og-build/`) are gitignored.

### Folder / routing structure (`portfolio-site/`)
```
src/
  app/
    layout.tsx            root layout: fonts, metadata (OG/Twitter), ScrollProgress,
                          BackgroundDecor, Navbar, Footer, skip link
    page.tsx              Home (/)
    about/page.tsx        /about
    experience/page.tsx   /experience
    projects/page.tsx     /projects  (header + ProjectsExplorer)
    projects/[slug]/page.tsx  dynamic project pages (generateStaticParams over all)
    skills/page.tsx       /skills
    resume/page.tsx       /resume
    contact/page.tsx      /contact
    not-found.tsx         404
    icon.svg              favicon ("PG" monogram on teal) — Next auto-serves
    robots.ts             robots + sitemap URL (https://parmgill-mb.ca)
    sitemap.ts            sitemap (base https://parmgill-mb.ca, all routes+projects)
    globals.css           theme tokens + component classes + animations
  lib/
    data.ts               SINGLE SOURCE OF TRUTH for all content
  components/             (see Reusable UI elements)
public/
  profile.jpg             owner headshot (used on About)
  og.png                  1200x630 social share card
  Parmeet-Gill-Resume.pdf downloadable resume (compiled from portfolio resume.tex)
  drawings/               10 source drawing PDFs (live-embedded)
  projects/drawings/      4 rendered drawing-sheet thumbnails (PNG)
  projects/<slug>/        case-study figure images
portfolio resume.tex      LaTeX resume source (editable; recompile to update PDF)
next.config.mjs, wrangler.toml, tailwind.config.ts, tsconfig.json, postcss.config
```

### Data source & "state"
- **`src/lib/data.ts`** is the single source of truth: `profile`,
  `versatilityPoints`, `experience[]`, `skillGroups[]`, `certifications`,
  `languages`, `projects[]`, plus helpers `getProject(slug)`, `featuredProjects`,
  `projectCategories`. All pages import from here. To change site content, edit
  this file; do not hardcode copy in pages.
- **Types in data.ts:** `Project` has `kind: "case" | "drawing"`, plus optional
  `drawingFile`, `drawingNumber`, `bom[]`, `related`, `relatedDrawings[]`,
  `supplementarySheets[]`, and `cover` (now set for drawings to a rendered PNG).
- **State:** none beyond local component state. Theme is class-based with a
  pre-hydration `ThemeScript`. `ProjectsExplorer` holds filter/search state
  client-side. Scroll/observer effects in `ScrollProgress`, `Reveal`, `CountUp`,
  `TiltCard`, `Navbar`.

### Reusable UI elements (`src/components/`)
- `Navbar` — glassmorphic floating pill, active-link accent + underline, mobile
  glass menu, `ThemeToggle`.
- `Footer` — accent hairline, contact links, build credit.
- `ThemeScript` / `ThemeToggle` — dark/light via `localStorage.theme`.
- `BackgroundDecor` — global fixed background.
- `ScrollProgress` — top scroll bar.
- `PageHeader` — eyebrow+icon, display title, dimension rule.
- `SectionIcon` / `SkillIcon` — SVG icon sets.
- `TechDivider` — dimension-line section divider.
- `HeroBlueprint` + `HeroSchematic` — home hero decor (grid, crosshairs,
  dimensioned flange that draws in).
- `HydroGeneratorArt` — sectional hydro generator line art shown on the two
  Manitoba Hydro drawing pages (callouts: GEN/TUR GUIDE BRG, KEY PHASOR).
- `ExplodedAssembly` — exploded bolted-flange line art on the Projects header.
- `ProjectCard` — `TiltCard`-wrapped; title-block mono header, crop marks on
  hover; drawings show the rendered thumbnail (`cover`), else `DrawingCover`.
- `DrawingCover` — generated blueprint title-block cover (fallback for drawings
  without a thumbnail), brushed texture + corner ticks.
- `DrawingSheetCard` — compact PDF "sheet" card (open in new tab + download) for
  capstone supplementary sheets.
- `ProjectsExplorer` — category filter chips + text search (client component).
- `Figure` — image with lightbox.
- `PdfViewer` — `<object>` PDF embed + open/download buttons.
- `Reveal` — IntersectionObserver scroll-reveal wrapper.
- `TiltCard` — pointer 3D tilt. `CountUp` — animated stat numbers.
- `PrintButton` — `window.print()` (labeled "Print", outline style).
- `ContactForm` — contact form UI.

---

# Portfolio Sections

### Home (`/`, `app/page.tsx`)
- **Purpose:** strong 5-second first impression and routing to projects/resume/contact.
- **Content:** hero (name, gradient title, tagline, short summary, availability
  badge, CTAs, four count-up stats: GPA 3.76, 2 yrs, 6 engineering projects,
  B.Sc.), Featured Projects grid, Industry Experience snapshot, Core Engineering
  Toolkit (skills strip), CTA card.
- **Files:** `app/page.tsx`, `HeroBlueprint`, `HeroSchematic`, `TechDivider`,
  `SectionIcon`, `CountUp`, `ProjectCard`, `Reveal`.
- **Dependencies:** `profile`, `featuredProjects`, `experience`, `skillGroups`.
- **Future ideas:** consider a one-line "shipped work" proof metric; optional
  headshot in hero.

### About (`/about`, `app/about/page.tsx`)
- **Purpose:** establish the versatility narrative and a human face.
- **Content:** intro paragraphs (summary + Manitoba Hydro experience), a
  "Versatility and Adaptability" evidence list (`versatilityPoints`), and a
  sidebar with the **profile photo** (framed, corner ticks) and a "Based in" card.
- **History:** Engineering Interests, Technical Strengths, Education,
  Certifications, and Languages blocks were intentionally removed (owner request,
  2026-06-11). Skills now live only on `/skills`; education/certs/languages live
  on `/resume`.
- **Files:** `app/about/page.tsx` (uses `next/image` for `/profile.jpg`).
- **Future ideas:** optional short manager quote/testimonial.

### Experience (`/experience`, `app/experience/page.tsx`)
- **Purpose:** detail the two Manitoba Hydro internships + education as a timeline.
- **Content:** an engineering-schedule timeline (accent gradient rail, datum-target
  station nodes, mono date chips) with education and both roles, each with
  highlights and tech tags.
- **Files:** `app/experience/page.tsx`, `Reveal`, `PageHeader`.
- **Dependencies:** `experience`, `profile.education`.

### Projects (`/projects`, `app/projects/page.tsx` + `ProjectsExplorer`)
- **Purpose:** browse all case studies and drawing deliverables.
- **Content:** header with faint `ExplodedAssembly` art; filterable/searchable grid
  of `ProjectCard`s. Filter categories: All, Robotics & Automation, Controls &
  Robotics, Biomaterials & R&D, Energy Systems, Fluids & CFD, Structural Analysis
  & FEA, Technical Drawings.
- **Files:** `app/projects/page.tsx`, `ProjectsExplorer`, `ProjectCard`,
  `ExplodedAssembly`.

### Project detail (`/projects/[slug]`, `app/projects/[slug]/page.tsx`)
- **Purpose:** full engineering write-up per project.
- **Content:** hero (source/course, title, subtitle, type/source/year/dwg, tech
  chips, related link; `HydroGeneratorArt` for Manitoba Hydro drawings); cover
  (rendered drawing thumbnail for drawings, else figure); metrics grid; overview;
  BOM table (drawings); numbered sections with drawing-callout balloon numbers;
  live `PdfViewer` drawing sheet (drawings); gallery; supplementary drawings
  (capstone: `relatedDrawings` cards + `supplementarySheets` PDF cards); next link.
- **Files:** `app/projects/[slug]/page.tsx`, `ProjectCard`, `DrawingSheetCard`,
  `DrawingCover`, `HydroGeneratorArt`, `PdfViewer`, `Figure`, `Reveal`.

### Skills (`/skills`, `app/skills/page.tsx`)
- **Purpose:** full categorized skill inventory.
- **Content:** `skillGroups` cards with `SkillIcon`, plus certifications and
  languages cards.

### Resume (`/resume`, `app/resume/page.tsx`)
- **Purpose:** on-page resume + downloadable PDF.
- **Content:** action bar with **Download PDF** (`/Parmeet-Gill-Resume.pdf`) and
  **Print** buttons; a resume sheet mirroring summary, education, experience,
  selected projects (case studies), technical skills, certifications, languages,
  and a **References** section ("available upon request, including Manitoba Hydro
  supervisors and managers").
- **Files:** `app/resume/page.tsx`, `PrintButton`, `public/Parmeet-Gill-Resume.pdf`.
- **Maintenance:** the PDF is compiled from `portfolio resume.tex` with MiKTeX
  `pdflatex`; recompile and copy to `public/` when the resume changes.

### Contact (`/contact`, `app/contact/page.tsx`)
- **Purpose:** make contact easy.
- **Content:** `ContactForm` + contact rows (email, LinkedIn, phone, location) and
  a **References** card.

---

# Project Database

Order in `projects[]` (also the Projects-page order): cone-inspection, unicycle,
microspheres, red-house, hovercraft, rover, cantilever-support-structure,
tractor-speed-reducer, end-effector (drawing), table-components (drawing),
proximity-fabrication (drawing), proximity-installation (drawing). **Featured
(home):** Automated Cone Inspection System, Proximity Probe Bracket
(Fabrication), Proximity Probe Bracket (Installation).

Provenance for all entries: `PROJECT_AUDIT.md` (in `website/`), the four LaTeX
reports, and the CAD PDFs. Authoritative material note: the **End Effector drawing
specifies Al 6061-T6** (overrides report text that said 6063-T6).

## Machine Design — MECH 3652 (Dr. Paul Labossiere), two projects

### Lightweight Cantilever Support Structure (Project 1, Group 4, Oct 2025)
- **Slug:** `cantilever-support-structure` · kind: case · type Machine Design ·
  team of 5 (Ivan Thoroski, Parmeet Gill, Gurleen Lakhanpal, Emily Kruk, Siumi
  Gonzales Pinedo).
- **Problem:** support a 1000 N horizontal load applied 500 mm above the floor and
  500 mm from a wall the structure may not touch; floor-top mounting only; ASTM
  A36; FOS ≥ 2.0 at 99% reliability for 10,000 cycles; minimize mass.
- **Process:** five member-concepts FEA'd (Parmeet's: inverted-V 3-beam frame,
  59.8 MPa / 2.11 mm / 1.67 kg / FOS 4.18, lost on weld manufacturability) →
  weighted matrix (deflection 30 / manufacturability 30 / mass 20 / FOS 20)
  selected a planar 3-member frame (7.8/10) → cross-section study at constant
  weight: hollow square 81.8 MPa/5.45 mm vs hollow circle 96.1 MPa/7.47 mm vs
  **I-beam 77.6 MPa/3.80 mm/FOS 3.22 at 2.964 kg** (two profiles: 25.2 mm deep
  diagonal, 22.45 mm deep elsewhere; 20 mm flanges, 5 mm web).
- **Verification (Parmeet ran topology + mesh convergence):** topology study
  cuts rejected as impractical, confirming near-optimal geometry; convergence
  5 mm→1 mm, 40,939→3,056,413 elements, ≥3 elements across webs, probe 1 mm off
  the singularity, converged 126.7 MPa. Welds: AWS min leg for 5 mm material,
  E60xx, shear <1 MPa vs 124 MPa allowable (static FOS >130, weld fatigue FOS
  70/95 with Kf 2.7 + shear Goodman). Anchorage: A36 base plates + 4× 0.50 in
  F1554 Grade 36 bolts (≤0.7 MPa vs 36.6 kN capacity). Euler buckling: 24.3 kN
  critical vs 0.77 kN applied. Marin fatigue: Se ≈ 104 MPa; 10k-cycle fatigue
  strength 237.9 MPa vs 126.7 applied; predicted life 6.2M cycles; SolidWorks
  fatigue study showed no damage at 10k.
- **Files:** `public/projects/support-structure/*` (member-diagram,
  concept1-stress, initial-model, ibeam-section/stress/deflection, topology,
  convergence-plot, stress-location, square-section). Source: LaTeX report in
  `website/Group_4_Machine_Design_Project_1/`.

### 4:1 Tractor Speed Reducer (Project 2, Group 1, Dec 2025)
- **Slug:** `tractor-speed-reducer` · kind: case · type Machine Design · team of
  5 (Owen Dee, Parmeet Gill, Brook Rivard, Peter Kolodziej, Joshua Limpright).
- **Problem:** speed reducer 1.5:1–10:1 at 1–75 hp; chosen application a tractor
  wheel drive: 60 hp, 640→160 RPM, 667.57→2670.28 N·m. Full chain, gear, AND
  belt designs required; select one; fully design one shaft with bearings and
  retaining rings.
- **Trade study:** chain = No. 100/120 roller chain, 4 sprockets, 15 in centers,
  ~44 in; belt = two 2:1 V-belt stages, 9/18 in sheaves, 43.5 in (single-stage
  would need 36 in sheave); gear = four spur gears 10/20 in dia × 2 in face,
  50 in tip-to-tip. **Gear drive selected**: efficiency + contamination
  resistance (enclosable gearbox), no tensioning/wrap-angle allowance, no
  elongation/slip, right for low-speed high-torque outdoor duty.
- **Gear design:** two stacked 2:1 stages; 15T pinion (10 in PD) + 30T gear
  (20 in PD), 2 in face, 20° PA, AISI 4140 Grade 1 (Sy 93 ksi, 197 HB), AGMA
  method (Lewis Y=0.290, Kv, J, YN/ZN at 10^7 cycles, through-hardened St
  28,028 psi); DXF involute profiles → SolidWorks; 1-9/16 in bore with
  3/8 × 1/2 in keyseat.
- **Output shaft:** 42 in long; four critical locations (gear-seat shoulder,
  keyway, retaining-ring groove, bearing shoulder) sized iteratively with Marin
  + Kf/Kfs from notch sensitivity and D/d, r/d. 1020 CR failed keyway (1.63) →
  **1050 CR steel (Sy 580 MPa), keyway FOS 2.17**; ring groove screened 1.61
  with Kt 5.0, real groove geometry (0.068×0.047 in, r 0.010) gave 2.61; bearing
  seat 1.1810 in for NTN 6406ZZ double-shielded (8,800 RPM rating); keys
  crush-checked: 0.472 in (gear), 1.106 in (wheel ends); retaining rings rated
  7,210 / 12,400 lb thrust.
- **FEA:** per-stage gear checks with driven bore fixed (jammed-wheel worst
  case): 82.9 MPa stage 1, 133.7 MPa stage 2 at the contact patch (order of
  magnitude under 4140 yield). Shaft: 0.25→0.05 in mesh, 90k→3.5M elements,
  converged within 1% at **31.85 ksi**, 0.006 in deflection under 1969.5 lb·ft.
- **Files:** `public/projects/speed-reducer/*` (drive-train, pinion/driven-gear,
  gear-dxf, stage1/2-stress, shaft-layout/full/section/closeup,
  shaft-fea-stress/deflection, shaft-convergence, chain-alternative,
  belt-alternative). Source: LaTeX report in
  `website/Machine_Design_Project_2/`.

## Capstone Project — MECH 4860, Automated Cone Inspection System
Industry-sponsored capstone (Northern Blower Inc.), team of 5, 2025. This single
capstone produced the case study plus the End Effector and Table Components CAD
deliverables, which are linked from it (`relatedDrawings`) along with six
supplementary assembly/part sheets (`supplementarySheets`).

- **Slug:** `automated-cone-inspection` · kind: case · featured.
- **Summary:** An automated inspection cell to replace a manual sheet-metal jig
  that left ~1 in 5 cones flawed. Holds a ±1/16 in profile tolerance across ~40
  cone geometries using a Fairino FR10 cobot, a Mitutoyo digital dial gauge, a 76
  in adjustable centering table, and a CAD-driven SDK inspection workflow,
  validated with FEA, within a $30,000 budget.
- **Objectives:** standardized repeatable inspection holding ±1/16 in across all
  ~40 inlet and fan-wheel cone sizes, minimal training, within $30k and limited
  floor space; client needs converted to quantified target specs.
- **Engineering challenges:** systems integration of mechanical fixturing, robot
  programming, and digital metrology on one calibrated coordinate frame; mapping
  CAD geometry to real-world robot motion (Workpiece Frame, 5.4025 in TCP offset).
- **Design constraints:** $30k budget; ~40 cone variants without reconfiguration;
  receiving-area floor space; operability with minimal training.
- **Tools/software:** SolidWorks, SolidWorks FEA, IGES workflow, Excel, Fairino
  FR10 SDK (Python/C++), Mitutoyo digital dial gauge, CNC machining.
- **Skills demonstrated:** mechanical design, GD&T, DFM, FEA with mesh
  convergence, robot programming, metrology, systems integration.
- **Key metrics:** profile tolerance ±1/16 in; ~40 cone variants; mount max
  deflection 0.794 mm (FEA); table max deflection 0.089 mm (FEA); budget $30,000.
- **Files/images:** `public/projects/cone-inspection/*` (final-design, fan,
  current-process, inlet/fanwheel cone, table-design/top, mount isos, fr10,
  dial-gauge, path1/2, workpiece-frame, mount/table FEA, gallery renders).
- **Outcome:** met functional and accuracy requirements within budget; removed
  operator subjectivity and added digital QC traceability.

### End Effector (capstone CAD deliverable)
- **Slug:** `end-effector-drawing` · kind: drawing · source: "Capstone CAD
  deliverable" · related to the capstone.
- **What it is:** SolidWorks part + detail drawing for the inspection-cell end
  effector that interfaces the Fairino FR10 tool flange with the Mitutoyo dial
  gauge, keeping the probe tip collinear with the robot Tool Center Point.
- **Design features:** Ø2.44 in circular base with 4× Ø0.24 in through holes
  matching the FR10 flange pattern; rectangular extension holding the gauge with a
  Ø0.25 in cross hole for a clamping hex screw/nut; flat/side/top views at 1:1 on
  a B-size sheet. Machined from **Aluminium 6061-T6** (low tooling mass to preserve
  dynamic accuracy).
- **BOM:** 1× 62 mm thick, 90 mm tall rod, Aluminium 6061-T6.
- **Files:** PDF `public/drawings/end-effector.pdf`; thumbnail
  `public/projects/drawings/end-effector.png`; gallery `dial-gauge.jpg`.

### Table Components / Inspection Table Components (capstone CAD deliverable)
- **Slug:** `table-components-drawing` · kind: drawing · related to the capstone.
- **What it is:** multi-part detail drawing of the inspection table's centering
  system (slider bars, profile blocks, keys, sliding racks) that indexes and locks
  each cone size on a common datum.
- **Parts/operation:** 4 fan-wheel slider bars, 4 inlet slider bars, 4 profile
  blocks, 4 keys, 8 sliding racks; Ø0.25 in index holes set the supported cone
  diameters; 1/4-scale plan for the hole pattern, 1:1 details on a C-size sheet.
  Material Aluminium 6061-T6; four arms at 90°.
- **Files:** PDF `public/drawings/table-components.pdf`; thumbnail
  `public/projects/drawings/table-components.png`; gallery `table-top.png`,
  `slider-assem.png`.

### Capstone supplementary sheets (`supplementarySheets`, PDF-only, on the case page)
Six released assembly/part sheets shown as `DrawingSheetCard`s (open + download):
Final Design Assembly, Main Mount (T-slot arm mount frame), Support Mount,
Robotic Arm Mounting Plate (A36 steel top plate), Table Assembly (adjustable
centering table), Table Top (76 in Al 6061-T6). PDFs in `public/drawings/`:
`final-design-assembly.pdf`, `main-mount.pdf`, `support-mount.pdf`,
`robotic-arm-mounting-plate.pdf`, `table-assembly.pdf`, `table-top.pdf`.

## Generation Design Department (GDD) — Manitoba Hydro, Long Spruce Generating Station
Professional work, drawn and designed by P. Gill in Autodesk Inventor, 2024. Both
drawings were **sealed by a Professional Engineer and released** (fabrication /
construction). These are the strongest credibility items: real production hardware.

### LS Vibe Bracket — Proximity Probe Bracket (Fabrication)
- **Slug:** `proximity-probe-bracket-fabrication` · kind: drawing · featured ·
  source: "Manitoba Hydro, GDD (issued for fabrication)".
- **Description:** a welded ASTM A36 steel bracket that securely holds a vibration
  (proximity) probe at a fixed position on the lower/guide-bearing bracket of a
  hydro generator unit, keeping the probe-to-shaft gap within measurement range.
- **Construction:** 1/2 in base plate + 4x4 in (1/4 in wall) HSS + 1/4 in plate,
  all A36; two 1/2-13 UNC grade-5 hex bolts; base plate welded to HSS. ~17 lb.
- **Specs/standards:** welding to CSA W59 by a CWB shop certified to CSA W47.1,
  100% visual inspection; SSPC SP-2/SP-3 + SP-1 surface prep; ≥10 mil grey RAL
  7042 coating; ±1/16 in fraction tolerance, 125 surface finish. **Sealed by a
  P.Eng, issued for fabrication;** references installation drawing
  1-00194-DE-60060-0001.
- **Drawing no.:** 1-00194-DD-60060-0004, Rev 00.
- **BOM:** (1) plate 1/2 in A36; (2) 4x4 HSS 1/4 in A36; (3) plate 1/4 in A36;
  (4) 2× hex bolt 1/2-13 UNC × 1 1/2, grade 5 (ASME B18.2.1).
- **Files:** PDF `public/drawings/ls-vibe-bracket-fabrication.pdf`; thumbnail
  `public/projects/drawings/proximity-fabrication.png`.

### LS Vibe Bracket Installation Drawing — Proximity Probe Bracket (Installation)
- **Slug:** `proximity-probe-bracket-installation` · kind: drawing · featured ·
  source: "Manitoba Hydro, GDD (issued for construction)".
- **Description:** A0 installation drawing defining how the generator and turbine
  bearing proximity probe brackets and the key-phasor bracket are installed on the
  hydro generator unit, with sectioned assembly views and a joint torque table.
- **Scope:** installs **5 probe brackets total — 2 turbine, 2 generator, 1
  key-phasor**; modify the existing grounding brush bracket to accept key-phasor
  bolts; drill/tap holes in the lower bracket; turbine bracket welded to the guide
  bearing cover after lead-paint removal; probe gap set by Manitoba Hydro.
- **Joints/standards:** generator guide bearing bracket to lower bracket (1/2-13
  UNC, 4 fasteners, Loctite 242, 40 ft-lb); key-phasor to creep-indicator bracket
  (3/8-16 UNC, 12 fasteners, 30 ft-lb); turbine guide bearing bracket to cover
  plate (3/8-16 UNC, 8 fasteners, 20 ft-lb); welding CSA W59/W47.1, 100% visual.
  **Sealed by a P.Eng, issued for construction.** Max joint torque 40 ft-lb.
- **Drawing no.:** 1-00194-DE-60060-0001, Rev 00.
- **BOM:** (1) 2× generator guide bearing probe bracket (dwg ...-0004); (2) 1× key
  phasor probe bracket (dwg ...-0003); (3) existing grounding brush bracket
  (modified); (4) 2× turbine guide bearing probe bracket (dwg ...-0002); (5)
  threadlocker Loctite 242 as req'd.
- **Files:** PDF `public/drawings/ls-vibe-bracket-installation.pdf`; thumbnail
  `public/projects/drawings/proximity-installation.png`; hero shows
  `HydroGeneratorArt`.

## Academic projects (case studies)

### Unicycle Navigation Controller — MECH 4342, Mechatronics in AI-Driven Robotics
- **Slug:** `unicycle-navigation-controller` · solo · 2026 · type Controls & Robotics.
- **Summary:** path-following controller for a nonholonomic unicycle robot on a
  known 10×6 m warehouse grid. A* planning + uniform path resampling (198→114
  waypoints) + heading-error speed scheduling + near-goal deceleration.
- **Results:** 95% nominal success (was 35%), 100% stress-test (was 30%); 20 Hz.
- **Tools:** Python, control theory, A* path planning, robot kinematics, simulation.
- **Files:** `public/projects/navigation/*` (map-grid, single-run, nominal-test,
  stress-test).

### Eggshell-Alginate Microspheres — MECH 4360, Biomaterials Design
- **Slug:** `eggshell-alginate-microspheres` · team · 2026 · type Biomaterials & R&D.
- **Summary:** waste-derived eggshell-incorporated alginate microspheres for bone
  tissue engineering; ionic crosslinking; characterized via FTIR, compression,
  rheology, electrospinning. Eggshell (0–10 wt%) raised storage modulus and
  compressive performance; particle-size control identified as the governing
  variable. Alginate 1.0–2.0 wt%, CaCl2 3–6 wt%.
- **Files:** `public/projects/microspheres/*` (microsphere, mortar, mold,
  electrospinner, ftir, compression, rheology, electrospun). NOTE: the Problem
  section images (`microsphere.jpg`, `samples.jpg`) were removed at owner request
  (wrong images); `microsphere.jpg` remains the card cover.

### RED House Net-Zero Energy Retrofit — MECH 4692, Renewable & Sustainable Energy
- **Slug:** `red-house-retrofit` · team · 2026 · type Energy Systems.
- **Summary:** whole-home Winnipeg retrofit to fossil-fuel-free. Solar PV, solar
  thermal, wind, battery + thermal storage, biomass stove, EV raise the Renewable
  Energy Ratio from 20.1% to 99.9% and cut ~7,688 kg CO2e/yr to ~0, for $86,699 of
  a $100k budget, +$41,627 30-year net profit, 173.8 GJ/yr generation.
- **Tools:** energy-systems modelling, solar/wind sizing (Weibull), combustion
  stoichiometry, 8,760-hr storage simulation, discounted cash flow, GHG
  accounting, Excel.
- **Files:** `public/projects/red-house/*` (house1/2, energy/ghg pies, eload-plot,
  ng/elec usage).

### Hovercraft Aerodynamic Optimization — MECH 3992, Mechanical Laboratories in Thermofluids
- **Slug:** `hovercraft-flow-optimization` · team of 4 (B03-4) · 2025 · type Fluids & CFD.
- **Summary:** Phase 2 redesign of a laser-cut foam-board hovercraft for top speed.
  SolidWorks Flow Simulation (CFD) + analytical momentum/Bernoulli + load-cell
  testing. A 14° flow director and graduated intake holes evened skirt airflow;
  reached 6.42 m/s but added mass cut top speed 12.5% vs a Phase 1 setup that
  benefited from a misplaced splitter gap (honest mass-vs-flow tradeoff).
- **Metrics:** 6.42 m/s; 14° splitter; 30 Pa lift pressure (analytical); 100 g; 3
  analysis methods.
- **Files:** `public/projects/hovercraft/*` (design, flow-director(-render),
  flow-phase1/2, holes-design/phase1/2, combined-phase1/2, velocity/thrust-test,
  external-velocity/pressure).

### Ground Rover Structural Redesign — MECH 3892, Mechanical Laboratories in Solid Mechanics
- **Slug:** `rover-structural-analysis` · team of 4 (B01-1) · 2025 · type Structural Analysis & FEA.
- **Summary:** Phase 2 structural redesign of a four-wheel rover (HDF body, PLA
  wheels, 4× 24 V motors). Hand calcs + SolidWorks FEA (mesh convergence, St.
  Venant on sharp-corner artifacts) + static/aggregate/obstacle testing. Chassis
  lightening holes + 4 in paddle wheels: held 0.042 in deflection at 7 lbf (limit
  0.1 in), raised obstacle clearance from 2.25 to 3.75 in.
- **Metrics:** obstacle 3.75 in (was 2.25); 0.042 in deflection at 7 lbf; max
  towing 2.19 lbf; wheels 4 in (was 3).
- **Files:** `public/projects/rover/*` (rover-side/top/concept, chassis
  stress/displacement/convergence, wheel-case1/2-stress, motor-mount-stress,
  rocker-stress, static/aggregate/obstacle-test, static-p1vsp2). NOTE: an earlier
  "Rover Shaft" supplementary PDF was added then removed at owner request.

---

# Technical Assets

### Drawing PDFs (`public/drawings/`, live-embedded via `PdfViewer` / downloadable)
- `end-effector.pdf` — End Effector Mount detail (capstone).
- `table-components.pdf` — Inspection Table Components detail (capstone).
- `ls-vibe-bracket-fabrication.pdf` — Proximity Probe Bracket fabrication (GDD).
- `ls-vibe-bracket-installation.pdf` — Proximity Probe Bracket installation (GDD).
- Capstone supplementary sheets: `final-design-assembly.pdf`, `main-mount.pdf`,
  `support-mount.pdf`, `robotic-arm-mounting-plate.pdf`, `table-assembly.pdf`,
  `table-top.pdf`.

### Rendered drawing-sheet thumbnails (`public/projects/drawings/`, PNG)
`end-effector.png`, `table-components.png`, `proximity-fabrication.png`,
`proximity-installation.png` — page 1 of each drawing PDF rasterized at 1100px via
`pdftoppm`; used as the `cover` for the four drawing project cards.

### Case-study figures (`public/projects/<slug>/`)
PNG/JPG figures for each case study (cone-inspection, navigation, microspheres,
red-house, hovercraft, rover) used in section `images[]` and `gallery[]`.

### Brand / meta assets
- `public/profile.jpg` — owner headshot (About page portrait).
- `public/og.png` — 1200×630 social share card (navy blueprint, name, teal title,
  flange motif, `parmgill-mb.ca` footer); referenced by OG + Twitter meta.
- `src/app/icon.svg` — favicon, "PG" monogram on teal.
- `public/Parmeet-Gill-Resume.pdf` — downloadable resume.

### Generated SVG illustrations (no raster, in components)
`HeroSchematic` (dimensioned flange), `HydroGeneratorArt` (hydro generator
section), `ExplodedAssembly` (bolted flange exploded view), plus `SectionIcon` /
`SkillIcon` icon sets and `DrawingCover` blueprint covers.

### Source documents (outside the git repo, in `website/` and parent folders)
`website/PROJECT_AUDIT.md` (provenance); four LaTeX reports (Mech 4860/4360/4692/
4342) and additional Mech 3992/3892 reports under `portfolio/DESIGN_PORTFOLIO/`;
`portfolio-site/portfolio resume.tex` (resume source).

---

# Resume Knowledge Base

Source: `portfolio resume.tex` (compiled to `public/Parmeet-Gill-Resume.pdf`),
mirrored on `/resume` and in `data.ts`.

- **Education:** University of Manitoba, Price Faculty of Engineering — B.Sc.
  Mechanical Engineering, Co-op/IIP Option. Graduated May 2026. GPA 3.76, Dean's
  Honour List.
- **Experience:**
  1. **Manitoba Hydro — Generation Design Department (GDD)**, Mechanical
     Engineering Intern, May 2024–Aug 2025, Winnipeg, MB. Detailed CAD/assemblies
     (SolidWorks), GD&T (ASME Y14.5) + DFM, technical drawings/BOMs, tolerance
     stack-up, FEA, Autodesk Vault PDM; designed the Long Spruce proximity probe
     bracket and its fabrication + installation drawings in Autodesk Inventor
     (A36 weldments, CSA W59/W47.1, fastener torques, coatings) — **sealed by a
     P.Eng and released for fabrication and installation**; field
     commissioning/installation support.
  2. **Manitoba Hydro — Construction Services Department (CSD)**, Quality
     Engineering Intern, May 2023–Dec 2023, Winnipeg, MB. ITPs/QC records, GIS
     field apps, non-conformance tracking; integrated AI models with Microsoft
     Power Automate to extract structured PDF data, reducing manual entry across
     3+ active projects.
- **Certifications:** WHMIS; Class 5 Driver's Licence.
- **Languages:** English, Hindi, Punjabi.
- **References:** available upon request, including Manitoba Hydro supervisors and
  managers.
- **Major accomplishments:** production drawings released and P.Eng-sealed at
  Manitoba Hydro; capstone automated inspection cell holding ±1/16 in across ~40
  parts within $30k; AI document automation reducing manual entry; 3.76 GPA /
  Dean's Honour List.

---

# Engineering Skill Inventory

Categorized from `skillGroups` in `data.ts` (also on `/skills`).

- **CAD software / modelling:** SolidWorks, Autodesk Inventor, AutoCAD;
  assemblies & weldments; fabrication & installation drawings; 3D renders.
- **Simulation / analysis tools:** SolidWorks Simulation (FEA), ANSYS, mesh
  convergence studies, SolidWorks Flow Simulation (CFD), stress & deflection
  analysis, topology optimization.
- **Design for Manufacturing & GD&T:** GD&T (ASME Y14.5), tolerance analysis &
  stack-up, DFM, FMEA, bolt & joint analysis, material selection.
- **Manufacturing knowledge:** CNC machining, sheet metal fabrication, steel
  weldments (CSA W59/W47.1), extrusion / T-slot framing, machine-shop practices.
- **Programming / controls / robotics:** Python, C++, control theory, A* path
  planning, robot kinematics, Fairino FR10 cobot SDK, collaborative robotics.
- **Engineering data & documentation:** Autodesk Vault PDM, engineering change
  orders, BOM management, inspection & test plans, Excel modelling, Power
  Automate (AI).
- **Testing & characterization:** digital dial-gauge metrology, FTIR
  spectroscopy, compression testing, rheological analysis, electrospinning.
- **Fluid & energy systems:** pipe flow analysis, pump selection & sizing, nozzle
  design, conservation of mass & momentum, combustion analysis, renewable energy
  systems.
- **Engineering methodologies:** weighted decision matrices / concept selection,
  mesh-convergence-validated FEA, CAD-driven inspection workflows, hourly load
  modelling + 30-year discounted cash flow + GHG accounting, design-to-field
  commissioning.
- **Technical communication:** engineering reports, released drawings + BOMs,
  evidence-based documentation (this site itself).

---

# Content Style Guide

How website copy must be written (carried from the owner's standing instructions):
- Professional engineering tone; recruiter-friendly but technical-first.
- Clear and concise; do not over-explain simple concepts.
- **No em dashes.** Use commas or periods. (Unicode `Ø`, `°`, `·`, `×` are fine.)
- Avoid repetitive phrasing and redundant explanation.
- Technical accuracy first; never invent specs, numbers, or outcomes.
- Engineering-report style: problem → objectives → design → analysis → results →
  learnings.
- Evidence-based statements tied to specific work; quantify where possible.
- Minimal marketing language; no exaggerated or vague adjectives.
- Focus on outcomes, design decisions, and technical contributions.
- When adding visuals: stroke-only SVG line art preferred over raster; keep the
  drawing/blueprint vocabulary; respect `prefers-reduced-motion`; verify no mobile
  horizontal overflow (all card grids must set `grid-cols-1`).

---

# Future Development Roadmap

- **Domain/DNS:** confirm `parmgill-mb.ca` fully propagated; www redirect
  (`www.parmgill-mb.ca/*` → apex, 301) and CNAME `www` → apex set in Cloudflare.
- **Email:** optional SPF (`v=spf1 -all`) + DMARC TXT records to prevent spoofing;
  optional Cloudflare Email Routing for a custom `you@parmgill-mb.ca` forwarding to
  Gmail.
- **Analytics:** add privacy-friendly analytics (e.g., Cloudflare Web Analytics) to
  measure recruiter visits.
- **EIT registration:** add Engineers Geoscientists Manitoba EIT status once
  registered (Certifications / Resume) to signal the P.Eng path.
- **Content:** optional manager quote/testimonial; optional hero proof metric;
  consider promoting any supplementary sheet to a full drawing page if desired.
- **Social cache:** after deploys touching `og.png`, re-scrape via LinkedIn Post
  Inspector / Facebook Sharing Debugger.
- **Missing content / parity:** keep LinkedIn in sync with the site; tailor the
  PDF resume per role.

---

# Change Log

Newest first. Commits are on `main` (`parmgillmb/portfolio`). Append an entry for
every significant change.

- **2026-06-12** Added two MECH 3652 Machine Design case studies (Lightweight
  Cantilever Support Structure; 4:1 Tractor Speed Reducer) with 25 curated
  figures and a new "Machine Design" filter category (now 12 projects, 8 case
  studies). De-templating pass: removed the home availability badge and the
  duplicate hero summary paragraph; CTA heading "Let's build something
  well-engineered." replaced with factual contact copy; footer "Built with
  Next.js..." credit removed; "Interactive Resume" retitled "Resume"; resume
  "Selected Projects" section removed (now points to /projects); About header
  copy made evidence-based; versatility "four domains" claim corrected; home
  stat updated to 8 engineering projects. Impact: projects-first, engineer-toned
  site; resume page shorter and intentional.

- **2026-06-11 — `de386e9`** Removed transient resume build artifacts from the
  repo; gitignored `.resume-build/` and `.og-build/`. Repo hygiene.
- **2026-06-11 — `1e5fdc2`** Added the 1200×630 social share card (`public/og.png`)
  with OG + Twitter meta in `layout.tsx`; recompiled the updated resume PDF.
  Impact: branded link previews; current resume download.
- **2026-06-11 — `c0c1367`** Fixed the placeholder domain (`parmeetgill.dev` →
  `parmgill-mb.ca`) in `layout.tsx`/`robots.ts`/`sitemap.ts`; added favicon
  (`icon.svg`), downloadable resume PDF + Download button, profile photo on About,
  P.Eng "sealed/released" notes on the GDD drawings + experience, and References on
  Contact/Resume. Impact: correct SEO/OG; stronger credibility and conversion.
- **2026-06-11 — `2306aa4`** Drawing project cards now use rendered drawing-sheet
  thumbnails (`public/projects/drawings/*.png`) instead of generated covers;
  trimmed About to intro + versatility + location (removed Engineering Interests,
  Technical Strengths, Education, Certifications, Languages blocks).
- **2026-06-11 — `3e175be`** Removed the meshed gear pair from the hero; dropped the
  unused `Gear` component and `gear-spin` CSS (owner request).
- **2026-06-11 — `855aeb6`** Engineering identity pass: `HydroGeneratorArt` on the
  Manitoba Hydro drawing pages, `ExplodedAssembly` on the Projects header,
  schedule-style Experience timeline, drawing-callout section numbers, Education
  icon, brushed-metal drawing covers. (Hero gears from this commit were removed in
  `3e175be`.)
- **2026-06-11 — `824bd95`** UI modernization: glassmorphic floating navbar,
  Space Grotesk display type + gradient hero title, scroll progress bar, count-up
  stats, 3D tilt project cards, `fade-rise` hero entrance; removed the rover
  supplementary sheet; fixed mobile horizontal overflow (grids set `grid-cols-1`).
- **2026-06-11 — `8bef110`** Added two case studies: Hovercraft Aerodynamic
  Optimization (MECH 3992, CFD) and Ground Rover Structural Redesign (MECH 3892,
  FEA), with curated figures; added two filter categories (Fluids & CFD, Structural
  Analysis & FEA); home stat updated to "6 engineering projects".
- **2026-06-11 — `66d89ef`** Added six capstone assembly/part drawing sheets as
  supplementary PDF cards (`DrawingSheetCard`) on the cone-inspection page.
- **2026-06-11 — `a05deba`** Content fixes: featured set (cone + both probe
  brackets), project order (RED House after microspheres), supplementary drawings
  links, CSD expanded to "Construction Services Department", installation probe
  count corrected to 5 (2 turbine, 2 gen., 1 key-phasor), removed wrong microsphere
  images.
- **2026-06-11 — `f3b8876`** Added the dimensioned flange `HeroSchematic`,
  dimension-callout hero stats, and drawing-frame accents.
- **Earlier (initial build)** Scaffolded the Next.js + TypeScript + Tailwind site;
  built all pages (Home, About, Experience, Projects, Skills, Resume, Contact);
  extracted content from the LaTeX resume, four engineering reports, and four CAD
  PDFs into `data.ts`; added the four CAD drawing entries with embedded PDFs;
  stripped em dashes site-wide; added the gradient/grid background, icon set, and
  documentation-style layout; configured static export + Cloudflare deploy
  (`wrangler.toml`); deployed to `parmgill-mb.ca`. See `git log` for full history.

---

## Maintenance note for future sessions
When you make a significant change: (1) update the relevant section(s) above,
(2) add a Change Log entry (date, files/areas, reason, impact), and (3) keep
`data.ts` as the single source of truth for content. Verify builds with Node on
PATH (`C:\Program Files\nodejs`), check mobile at 375px for overflow, and confirm
both light and dark themes.
