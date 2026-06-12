// ---------------------------------------------------------------------------
// Single source of truth for the portfolio. Content is extracted from the
// resume (resume june 10.tex), four LaTeX engineering reports, and four CAD
// drawing PDFs. See PROJECT_AUDIT.md in the repository root for provenance.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Parmeet Gill",
  title: "Mechanical Engineer",
  tagline:
    "Mechanical design, FEA, and automation. I take requirements through CAD, analysis, and manufacturing to validated hardware.",
  location: "West St. Paul, Manitoba, Canada",
  email: "parmgill.mb@gmail.com",
  phone: "431-997-1613",
  linkedin: "https://www.linkedin.com/in/parm-gill-mb/",
  linkedinLabel: "linkedin.com/in/parm-gill-mb",
  summary:
    "Mechanical engineering graduate (University of Manitoba, Co-op/IIP) with two years of industry experience at Manitoba Hydro across design and quality engineering. I build detailed SolidWorks and Inventor models, produce fabrication and installation drawings, apply GD&T (ASME Y14.5) and Design for Manufacturability, and validate designs with finite element analysis. Project work covers automated inspection and robotics, renewable energy systems, controls, and biomaterials, backed by a 3.76 GPA and Dean's Honour List standing.",
  shortSummary:
    "Mechanical engineering graduate working across CAD, FEA, GD&T, and manufacturing, with delivered work in robotics, automated inspection, energy systems, and field hardware.",
  education: {
    school: "University of Manitoba",
    faculty: "Price Faculty of Engineering",
    degree: "Bachelor of Science in Mechanical Engineering, Co-op/IIP Option",
    location: "Winnipeg, MB",
    graduated: "Graduated May 2026",
    gpa: "3.76",
    honours: "Dean's Honour List",
  },
  availability: "Open to mechanical design, product development, manufacturing, and robotics roles",
};

// Evidence-based statements of versatility, each tied to specific work.
export const versatilityPoints = [
  "Worked both sides of the design cycle at Manitoba Hydro: CAD modelling, drawing release, and FEA in design engineering (GDD), and inspection, non-conformance tracking, and process automation in quality engineering (CSD).",
  "Produced production hardware in two CAD environments: SolidWorks for academic and capstone work, and Autodesk Inventor for issued Manitoba Hydro fabrication and installation drawings.",
  "Delivered coursework across robotic inspection and automation, renewable energy systems, mechatronic controls, biomaterials characterization, CFD, structural FEA, and machine design.",
  "Moved between design and field: released drawings, then supported installation and commissioning, resolving design-to-field discrepancies on site.",
  "Combined mechanical work with software and automation: a CAD-driven robot inspection workflow, a Python navigation controller, and AI document automation in Power Automate.",
];

export type Experience = {
  company: string;
  division: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Manitoba Hydro",
    division: "Generation Design Department (GDD)",
    role: "Mechanical Engineering Intern",
    period: "May 2024 – Aug 2025",
    location: "Winnipeg, MB",
    summary:
      "Mechanical design and analysis for generating-station components and mounts, from CAD modelling and drawing release through FEA validation and field commissioning support.",
    highlights: [
      "Developed detailed CAD models and assemblies in SolidWorks, applying GD&T (ASME Y14.5) and Design for Manufacturability so parts were optimized for fabrication, precision, and compliance with design specifications.",
      "Prepared and revised technical drawings, BOMs, and engineering reports; performed tolerance analysis and stack-up reviews to verify fit and function across mating components.",
      "Designed the Long Spruce Generating Station proximity probe bracket and its fabrication and installation drawings in Autodesk Inventor, specifying A36 steel weldments, CSA W59/W47.1 welding, fastener torques, and protective coatings; the drawings were sealed by a Professional Engineer and released for fabrication and installation.",
      "Managed document revisions using Autodesk Vault PDM for version control and release tracking.",
      "Conducted Finite Element Analysis to evaluate structural integrity, stress distribution, and performance under load for components and mounts.",
      "Provided engineering guidance to field technicians during installation and commissioning, documenting findings and resolving design-to-field discrepancies.",
    ],
    tech: ["SolidWorks", "Autodesk Inventor", "GD&T (ASME Y14.5)", "DFM", "FEA", "Autodesk Vault PDM", "Tolerance Stack-Up", "Weldment Design"],
  },
  {
    company: "Manitoba Hydro",
    division: "Construction Services Department (CSD)",
    role: "Quality Engineering Intern",
    period: "May 2023 – Dec 2023",
    location: "Winnipeg, MB",
    summary:
      "Quality control and inspection workflows, with automation that reduced manual data entry across multiple active projects.",
    highlights: [
      "Executed Inspection & Test Plans (ITPs), QC record forms, and quality workflow processes in accordance with company standards.",
      "Developed GIS-based field applications, optimized post-processing workflows, and improved spatial data accuracy.",
      "Integrated AI models with Microsoft Power Automate to extract structured data from PDF documents, reducing manual data entry and increasing data-collection speed across 3+ active projects.",
      "Identified and documented non-conformances, tracked corrective actions, and verified timely closeout to maintain compliance.",
      "Standardized QC documentation and inspection procedures across projects through cross-functional collaboration, reducing review cycle time.",
    ],
    tech: ["Quality Control", "ITPs / QC Records", "Non-Conformance Tracking", "Microsoft Power Automate", "AI Document Extraction", "GIS Applications"],
  },
];

export type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "CAD & Modelling",
    icon: "cube",
    skills: ["SolidWorks", "Autodesk Inventor", "AutoCAD", "Assemblies & Weldments", "Fabrication & Installation Drawings", "3D Renders"],
  },
  {
    category: "Simulation & Analysis",
    icon: "wave",
    skills: ["SolidWorks Simulation (FEA)", "ANSYS", "Mesh Convergence Studies", "SolidWorks Flow Simulation (CFD)", "Stress & Deflection Analysis", "Topology Optimization"],
  },
  {
    category: "Design for Manufacturing & GD&T",
    icon: "gauge",
    skills: ["GD&T (ASME Y14.5)", "Tolerance Analysis & Stack-Up", "Design for Manufacturability", "FMEA", "Bolt & Joint Analysis", "Material Selection"],
  },
  {
    category: "Manufacturing & Fabrication",
    icon: "tool",
    skills: ["CNC Machining", "Sheet Metal Fabrication", "Steel Weldments (CSA W59/W47.1)", "Extrusion / T-Slot Framing", "Machine Shop Practices"],
  },
  {
    category: "Programming, Controls & Robotics",
    icon: "code",
    skills: ["Python", "C++", "Control Theory", "A* Path Planning", "Robot Kinematics", "Fairino FR10 Cobot SDK", "Collaborative Robotics"],
  },
  {
    category: "Engineering Data & Documentation",
    icon: "doc",
    skills: ["Autodesk Vault PDM", "Engineering Change Orders", "BOM Management", "Inspection & Test Plans", "Excel Modelling", "Power Automate (AI)"],
  },
  {
    category: "Testing & Characterization",
    icon: "beaker",
    skills: ["Digital Dial-Gauge Metrology", "FTIR Spectroscopy", "Compression Testing", "Rheological Analysis", "Electrospinning"],
  },
  {
    category: "Fluid & Energy Systems",
    icon: "flow",
    skills: ["Pipe Flow Analysis", "Pump Selection & Sizing", "Nozzle Design", "Conservation of Mass & Momentum", "Combustion Analysis", "Renewable Energy Systems"],
  },
];

export const certifications = ["WHMIS", "Class 5 Driver's Licence"];
export const languages = ["English", "Hindi", "Punjabi"];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type ProjectImage = { src: string; caption: string };

export type CaseStudySection = {
  heading: string;
  body: string[];
  images?: ProjectImage[];
};

export type Metric = { label: string; value: string };

export type BomRow = { item: string; qty: string; desc: string };

export type SupplementarySheet = { title: string; file: string; note?: string };

export type Project = {
  slug: string;
  kind: "case" | "drawing";
  title: string;
  subtitle: string;
  course: string;
  source?: string; // shown on drawing entries (origin of the deliverable)
  type: string; // category for filtering
  categories: string[];
  team: string;
  year: string;
  featured: boolean;
  cover: string;
  summary: string;
  tech: string[];
  metrics: Metric[];
  sections: CaseStudySection[];
  gallery: ProjectImage[];
  // Drawing-specific
  drawingFile?: string;
  drawingNumber?: string;
  bom?: BomRow[];
  related?: { slug: string; label: string };
  // Case-study supplementary CAD drawing deliverables (links to drawing entries)
  relatedDrawings?: { slug: string; label: string }[];
  // Case-study raw drawing sheets (PDF only, no dedicated page)
  supplementarySheets?: SupplementarySheet[];
};

export const projects: Project[] = [
  {
    slug: "automated-cone-inspection",
    kind: "case",
    title: "Automated Cone Inspection System",
    subtitle:
      "A vertically mounted collaborative robot with an integrated digital dial gauge that standardizes dimensional inspection of industrial fan cones.",
    course: "MECH 4860, Engineering Design Capstone",
    type: "Robotics & Automation",
    categories: ["Robotics & Automation", "Design & FEA", "Manufacturing"],
    team: "Team of 5, industry-sponsored capstone",
    year: "2025",
    featured: true,
    cover: "/projects/cone-inspection/final-design.png",
    summary:
      "An automated inspection cell for Northern Blower Inc. to replace a manual sheet-metal jig that left about 1 in 5 cones flawed. The system holds a ±1/16 in profile tolerance across roughly 40 cone geometries using a Fairino FR10 cobot, a Mitutoyo digital dial gauge, an adjustable 76 in centering table, and a CAD-driven SDK inspection workflow, validated with FEA inside a $30,000 budget.",
    tech: ["SolidWorks", "FEA", "GD&T", "DFM", "CNC Machining", "Fairino FR10 Cobot", "Mitutoyo Metrology", "Python / C++ SDK", "IGES Workflow"],
    metrics: [
      { label: "Profile tolerance held", value: "±1/16 in" },
      { label: "Cone variants supported", value: "~40" },
      { label: "Mount max deflection (FEA)", value: "0.79 mm" },
      { label: "Table max deflection (FEA)", value: "0.089 mm" },
      { label: "Project budget", value: "$30,000 CAD" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Northern Blower Inc. builds custom industrial centrifugal fans. The inlet and fan wheel cones, complex spun-metal geometries supplied by an outside vendor, are inspected on arrival before assembly. The legacy method was a sheet-metal cutout jig checked at about three points per cone, plus a few diameter readings.",
          "That approach was operator-dependent, slow, and unable to detect deviations across the full curved profile. About one in five cones was found flawed, and errors that passed inspection propagated downstream as misalignment, imbalance, vibration, and weld-induced stress, driving rework and scrap.",
        ],
        images: [
          { src: "/projects/cone-inspection/fan.png", caption: "A custom Northern Blower Inc. centrifugal fan, the end product the cones feed into." },
          { src: "/projects/cone-inspection/current-process.jpg", caption: "The legacy manual sheet-metal jig inspection it replaces." },
        ],
      },
      {
        heading: "Objectives & Requirements",
        body: [
          "Deliver a standardized, repeatable inspection process that holds the ±1/16 in profile tolerance, accommodates all ~40 inlet and fan wheel cone sizes without major reconfiguration, and is operable with minimal training, within a $30,000 CAD budget and the limited floor space of the receiving area.",
          "Client needs were converted into quantifiable target specifications covering diameter range, height range, inspection time, durability cycles, repeatability, and digital compatibility, so the design could be measured against them at every phase.",
        ],
        images: [
          { src: "/projects/cone-inspection/inlet-cone.png", caption: "3D-modelled inlet cone geometry." },
          { src: "/projects/cone-inspection/fanwheel-cone.png", caption: "3D-modelled fan wheel cone geometry." },
        ],
      },
      {
        heading: "Concept Selection",
        body: [
          "Six concepts, from handheld and adjustable-arm 3D scanners to 3D-printed surface checks, were screened against the current jig as a reference datum, then ranked in a weighted decision matrix scoring measurement accuracy, repeatability, part-size adaptability, speed, ease of operation, cost, durability, and safety.",
          "The Vertically Mounted Robotic Arm with an Integrated Digital Dial Gauge ranked first with a weighted score of 4.45, ahead of a handheld 3D scanner, on accuracy, repeatability, and adaptability across the cone range.",
        ],
      },
      {
        heading: "Detailed Design",
        body: [
          "The final cell places each cone on a universal adjustable table; a Fairino FR10 cobot mounted directly overhead carries the dial-gauge end effector and follows a programmed inspection path with full 3D access to the geometry.",
          "Inspection table: a 76 in diameter, 2 in anodized Aluminum 6061-T6 top on powder-coated steel legs. CNC-machined radial grooves carry guide bars, sliding plates, centering blocks, and locking pins. Eight guide bars, four for inlet and four for fan wheel cones spaced 90 degrees apart, re-center any cone size and lock it for repeatable positioning.",
          "Robotic arm mount: 3 in t-slotted Anodized Aluminum 6063-T6 framing forming a plus-shaped main and support structure, topped by a 1 in A36 steel plate that bolts the FR10 base overhead. The modular t-slot design keeps it adjustable and serviceable.",
          "End effector: a CNC-machined aluminum mount, a 2.44 in circular base on the FR10 flange pattern with a rectangular extension that clamps the Mitutoyo digital dial gauge (±0.001 in) in line with the robot Tool Center Point. Aluminum keeps tooling mass low to preserve the arm's dynamic accuracy.",
        ],
        images: [
          { src: "/projects/cone-inspection/final-design.png", caption: "Final design: overhead-mounted FR10 cobot, dial-gauge end effector, and adjustable centering table." },
          { src: "/projects/cone-inspection/table-design.png", caption: "Adjustable inspection table assembly." },
          { src: "/projects/cone-inspection/table-top.png", caption: "Top view of the centering system embedded in the table." },
          { src: "/projects/cone-inspection/mount-iso1.png", caption: "Isometric view of the t-slotted robotic-arm mount." },
          { src: "/projects/cone-inspection/fr10.png", caption: "Fairino FR10 collaborative robot: 6 DoF, 55.1 in reach, ±0.002 in repeatability." },
          { src: "/projects/cone-inspection/dial-gauge.jpg", caption: "Mitutoyo digital dial gauge fastened to the machined end-effector mount." },
        ],
      },
      {
        heading: "CAD-Driven Programming Workflow",
        body: [
          "Inspection paths are generated from the nominal CAD models. In SolidWorks, the cone profile is projected, fit to a spline, and sampled with evenly distributed intersection points, then exported as IGES and cleaned in Excel into raw XYZ coordinates, a procedure repeated for every cone size.",
          "The FR10 runs an external SDK (Python/C++) master program rather than separate scripts per cone. The operator selects the cone, the program loads its coordinate file and organizes points into axial layers. For each layer the robot zeroes the gauge, contacts the surface to a 1/16 in compression, sweeps a full 360 degrees, and records deviations wirelessly.",
          "A Workpiece Frame calibration, origin at the table center with a 5.4025 in TCP offset for the end-effector and gauge stack, aligns the robot coordinate system to the physical cone so CAD coordinates map to real-world motion. Each point is graded PASS or FAIL against the ±1/16 in tolerance and logged for traceability.",
        ],
        images: [
          { src: "/projects/cone-inspection/path1.jpg", caption: "Programmed rotational inspection: 360 degree scan at each axial layer." },
          { src: "/projects/cone-inspection/path2.jpg", caption: "Inspection point increments mapped down the cone profile in SolidWorks." },
          { src: "/projects/cone-inspection/workpiece-frame.png", caption: "Workpiece Frame reference point at the table center for calibration." },
        ],
      },
      {
        heading: "Engineering Analysis (FEA)",
        body: [
          "Both structural subsystems were validated in SolidWorks FEA with mesh-convergence studies to confirm the results were mesh-independent before drawing conclusions.",
          "Mount: analysed on a quarter model by symmetry, loaded with the 88 lbf arm weight at a safety factor of 5 and a 2028.3 ft·lbf operating torque at a safety factor of 10, with legs fixed to simulate ground bolting. Maximum deflection was 0.794 mm, below the 1.588 mm (±1/16 in) tolerance, and zeroable on the dial gauge after install.",
          "Table: analysed on a half model under the 250 lb load of the largest inlet cone with a 0.15 in converged mesh. Maximum deflection was 0.089 mm, confirming a stiff inspection platform.",
        ],
        images: [
          { src: "/projects/cone-inspection/mount-fea.png", caption: "Mount displacement plot, 0.794 mm maximum deflection." },
          { src: "/projects/cone-inspection/table-fea.png", caption: "Table displacement results, 0.089 mm maximum deflection." },
        ],
      },
      {
        heading: "Outcome & Key Learnings",
        body: [
          "The design meets the functional and accuracy requirements: it holds the ±1/16 in tolerance, supports all ~40 cone variants from a single SDK program, removes operator subjectivity, and adds digital QC traceability, within budget.",
          "The main lesson was systems integration. A working inspection cell required mechanical fixturing, robot programming, and digital metrology to share one calibrated coordinate frame. Tying CAD geometry, FEA validation, and a scalable software workflow together mattered more than optimizing any single part.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/cone-inspection/final-design-2.png", caption: "Full inspection-cell render." },
      { src: "/projects/cone-inspection/fan-schematic.png", caption: "Centrifugal fan schematic showing inlet and fan wheel cones." },
      { src: "/projects/cone-inspection/mount-iso2.png", caption: "Robotic-arm mount, second isometric view." },
      { src: "/projects/cone-inspection/slider-assem.png", caption: "Centering assembly with locking pin." },
      { src: "/projects/cone-inspection/fr10-dof.png", caption: "FR10 degree-of-freedom schematic." },
      { src: "/projects/cone-inspection/mount-fea-deformed.png", caption: "Mount FEA, deformed-shape plot." },
      { src: "/projects/cone-inspection/wiring.png", caption: "FR10 essential-equipment wiring schematic." },
    ],
    relatedDrawings: [
      { slug: "end-effector-drawing", label: "End Effector Mount" },
      { slug: "table-components-drawing", label: "Inspection Table Components" },
    ],
    supplementarySheets: [
      { title: "Final Design Assembly", file: "/drawings/final-design-assembly.pdf", note: "Full inspection cell" },
      { title: "Main Mount", file: "/drawings/main-mount.pdf", note: "T-slot arm mount frame" },
      { title: "Support Mount", file: "/drawings/support-mount.pdf", note: "Secondary frame support" },
      { title: "Robotic Arm Mounting Plate", file: "/drawings/robotic-arm-mounting-plate.pdf", note: "A36 steel top plate" },
      { title: "Table Assembly", file: "/drawings/table-assembly.pdf", note: "Adjustable centering table" },
      { title: "Table Top", file: "/drawings/table-top.pdf", note: "76 in Al 6061-T6 top" },
    ],
  },

  {
    slug: "unicycle-navigation-controller",
    kind: "case",
    title: "Unicycle Navigation Controller",
    subtitle:
      "A path-following controller for a nonholonomic warehouse robot that raises navigation success from 35 to 95-100 percent.",
    course: "MECH 4342, Mechatronics in AI-Driven Robotics",
    type: "Controls & Robotics",
    categories: ["Controls & Robotics", "Programming"],
    team: "Solo project",
    year: "2026",
    featured: false,
    cover: "/projects/navigation/stress-test.png",
    summary:
      "A path-following controller for a nonholonomic unicycle robot navigating a known warehouse map. A* planning with uniform path resampling, heading-error speed scheduling, and near-goal deceleration reached 95 percent success on the nominal test and 100 percent on the stress test, against 35 and 30 percent for the provided baseline.",
    tech: ["Python", "Control Theory", "A* Path Planning", "Robot Kinematics", "Proportional Control", "Simulation", "Mechatronics"],
    metrics: [
      { label: "Nominal success rate", value: "95% (was 35%)" },
      { label: "Stress-test success rate", value: "100% (was 30%)" },
      { label: "Improvement", value: "+60 to +70 pts" },
      { label: "Control rate", value: "20 Hz" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The task was a path-following controller for a unicycle robot (radius 0.18 m) crossing a 10 m by 6 m warehouse occupancy grid from a fixed start (0.8, 0.8) to a goal (9.2, 5.2), arriving within 0.15 m while avoiding obstacles and respecting bounded inputs (v up to 0.5 m/s, omega up to 2.0 rad/s).",
          "The robot is nonholonomic; it can drive and turn but not move sideways, so paths must respect its turning radius and sharp grid corners are not executable. The provided baseline controller succeeded 35 percent of the time on the nominal test and 30 percent under stress.",
        ],
        images: [
          { src: "/projects/navigation/map-grid.png", caption: "Warehouse map (left) and inflated obstacle grid (right) used for planning." },
        ],
      },
      {
        heading: "Approach",
        body: [
          "Path planning, path representation, and control were treated as equal parts of the design. A* searched the inflated grid (0.18 m robot radius plus safety margin) with 8-directional motion and a Euclidean heuristic to produce a globally optimal collision-free path.",
          "The raw A* output, 198 sparse and unevenly spaced waypoints, was resampled into 114 uniformly spaced 0.10 m waypoints. Even spacing removes the large heading jumps that made the baseline overshoot and oscillate, giving the proportional heading controller continuous guidance.",
        ],
      },
      {
        heading: "Control Strategy",
        body: [
          "Four structural changes, not parameter tweaks, drove the result. First, speed scheduling scales forward velocity by normalized heading error, so a misaligned robot slows and reorients instead of arcing into obstacles, replacing the baseline binary stop-turn-go. Second, near-goal deceleration scales speed with distance over the final 0.5 m for an accurate terminal approach.",
          "Third, tighter tolerances (goal 0.15 m, waypoint 0.06 m, 60 degree heading threshold) enforce closer path following. Fourth, higher gains (heading gain 1.5, omega max 2.0 rad/s) increase responsiveness. The speed-heading coupling keeps the higher gains stable, since the robot slows automatically when misaligned.",
        ],
        images: [
          { src: "/projects/navigation/single-run.png", caption: "A single successful run tracing the resampled path from start to goal." },
        ],
      },
      {
        heading: "Results & Key Learnings",
        body: [
          "Across randomized initial headings, the controller reached 95 percent success on the nominal test (was 35 percent) and 100 percent on the stress test with larger inflation margins (was 30 percent), a 60 to 70 percentage-point improvement.",
          "Robustness came from architecture, not fine-tuning. Coupling speed to heading error and goal distance produced a controller that is fast in open space and controlled in tight passages, the behaviour a mobile robot needs.",
        ],
        images: [
          { src: "/projects/navigation/nominal-test.png", caption: "Nominal-test trajectories across many randomized initial conditions." },
          { src: "/projects/navigation/stress-test.png", caption: "Stress-test trajectories, 100 percent success under tighter clearances." },
        ],
      },
    ],
    gallery: [],
  },

  {
    slug: "eggshell-alginate-microspheres",
    kind: "case",
    title: "Eggshell-Alginate Microspheres",
    subtitle:
      "Waste-derived bioactive microspheres for bone tissue engineering, characterized across mechanical and chemical properties.",
    course: "MECH 4360, Biomaterials Design",
    type: "Biomaterials & R&D",
    categories: ["Biomaterials & R&D", "Systems Analysis"],
    team: "Team project",
    year: "2026",
    featured: false,
    cover: "/projects/microspheres/microsphere.jpg",
    summary:
      "Development and characterization of eggshell-incorporated alginate microspheres as a low-cost scaffold for bone tissue engineering. Eggshell food-waste supplies bioactive calcium; the microspheres were fabricated by ionic crosslinking and evaluated with FTIR, compression testing, rheology, and electrospinning.",
    tech: ["Biomaterials", "FTIR Spectroscopy", "Compression Testing", "Rheological Analysis", "Electrospinning", "Hydrogel Chemistry", "Lab Fabrication"],
    metrics: [
      { label: "Alginate concentration", value: "1.0-2.0 wt%" },
      { label: "CaCl2 crosslinker", value: "3-6 wt%" },
      { label: "Eggshell filler", value: "0-10 wt%" },
      { label: "Characterization methods", value: "4" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Bone defects from trauma, surgery, and degenerative disease are a clinical burden, with millions of fractures annually needing scaffolds. Alginate microspheres are used in bone tissue engineering but are limited in mechanical strength, cost, and sustainability.",
          "This project evaluated eggshell-incorporated alginate microspheres. Reusing eggshell food-waste as a calcium- and hydroxyapatite-rich bioactive filler targets improved mechanical performance and osteogenic potential while reusing a byproduct.",
        ],
      },
      {
        heading: "Fabrication",
        body: [
          "Microspheres were formed by ionic crosslinking, extruding aqueous sodium alginate (1.0-2.0 wt%) into a calcium chloride bath (3-6 wt%), where divalent Ca2+ ions chelate the alginate backbone into an egg-box gel network. Eggshell powder (0-10 wt%) was added as a second internal Ca2+ source.",
          "Eggshell was ground with a mortar and pestle, and electrospinning was trialed to produce more uniform, size-controlled spheres by varying applied voltage.",
        ],
        images: [
          { src: "/projects/microspheres/mortar.jpg", caption: "Mortar-and-pestle grinding of eggshell into bioactive filler." },
          { src: "/projects/microspheres/mold.jpg", caption: "Compression-sample mold preparation." },
          { src: "/projects/microspheres/electrospinner.jpg", caption: "Electrospinning apparatus used to vary microsphere size." },
        ],
      },
      {
        heading: "Characterization & Findings",
        body: [
          "FTIR spectroscopy confirmed the chemistry. O-H, N-H, C=C, C-C, and C-N peaks verified that alginate, calcium chloride, and eggshell were incorporated across the tested formulations.",
          "Compression and rheology used a 2 wt% alginate, 6 wt% CaCl2 baseline. Adding 10 wt% eggshell raised the storage modulus (G') and improved compressive performance, and the 2ALG6CA10ES samples showed a viscous-to-elastic G'/G'' crossover under dynamic loading. Coarse mortar-ground particles caused non-uniform samples and scattered results.",
          "Electrospinning improved uniformity for plain alginate but failed for eggshell suspensions, which were too coarse to pass through the needle, identifying particle-size control as the key process variable.",
        ],
        images: [
          { src: "/projects/microspheres/ftir.png", caption: "FTIR spectra confirming incorporation of alginate, CaCl2, and eggshell." },
          { src: "/projects/microspheres/compression.png", caption: "Compression stress-strain curves, with and without 10 wt% eggshell." },
          { src: "/projects/microspheres/rheology.png", caption: "Rheology: storage modulus vs angular frequency." },
          { src: "/projects/microspheres/electrospun.jpg", caption: "Electrospun samples of varying size." },
        ],
      },
      {
        heading: "Outcome & Key Learnings",
        body: [
          "The work showed that waste-derived eggshell-alginate microspheres are a feasible scaffold material, with eggshell providing measurable mechanical reinforcement and a sustainability benefit.",
          "The governing variable was process control: filler particle size and dispersion determined both mechanical consistency and processability. The report defines a future-work path covering finer grinding, growth-factor and stem-cell integration, 3D bioprinting, in-vivo evaluation, and GMP and clinical translation.",
        ],
      },
    ],
    gallery: [],
  },

  {
    slug: "red-house-retrofit",
    kind: "case",
    title: "RED House Net-Zero Energy Retrofit",
    subtitle:
      "An integrated renewable-energy retrofit that raises an existing Winnipeg home from 20 to 99.9 percent renewable within budget.",
    course: "MECH 4692, Renewable & Sustainable Energy Design",
    type: "Energy Systems",
    categories: ["Energy Systems", "Systems Analysis"],
    team: "Team project",
    year: "2026",
    featured: false,
    cover: "/projects/red-house/house2.png",
    summary:
      "A whole-home energy retrofit to make an existing Winnipeg house fossil-fuel-free. Solar PV, solar thermal, wind, battery and thermal storage, a biomass stove, and an EV raise the Renewable Energy Ratio from 20.1 to 99.9 percent and reduce about 7,688 kg CO2e/yr to near zero, for $86,699 against a $100,000 budget, with a positive 30-year cash flow.",
    tech: ["Energy Systems Modelling", "Solar PV & Thermal Sizing", "Wind Resource Analysis (Weibull)", "Combustion Stoichiometry", "8,760-hr Storage Simulation", "Discounted Cash Flow", "GHG Accounting", "Excel"],
    metrics: [
      { label: "Renewable Energy Ratio", value: "20.1 to 99.9%" },
      { label: "GHG emissions", value: "7,688 to ~0 kg/yr" },
      { label: "Capital cost", value: "$86,699 of $100k" },
      { label: "30-year net profit", value: "+$41,627" },
      { label: "Renewable generation", value: "173.8 GJ/yr" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The RED House brief: retrofit an existing Winnipeg home to be fossil-fuel-free on a $100,000 budget, while keeping the hydro grid and natural-gas connections for resiliency and supporting multi-month off-grid operation each year.",
          "The baseline home consumed 174.07 GJ/yr and emitted about 7,688 kg CO2e/yr, dominated by natural gas (4,771 kg) and gasoline (2,389 kg), for a Renewable Energy Ratio of 20.1 percent.",
        ],
        images: [
          { src: "/projects/red-house/house1.png", caption: "The existing home selected for the retrofit." },
          { src: "/projects/red-house/energy-pie.png", caption: "Baseline 2025 energy-load distribution by source." },
          { src: "/projects/red-house/ghg-pie.png", caption: "Baseline GHG-emissions distribution by source." },
        ],
      },
      {
        heading: "Energy-Load Analysis",
        body: [
          "Electricity and natural-gas loads were normalized from monthly data to an hourly basis and extrapolated across the year. Heating load was driven by the indoor-outdoor temperature differential using 2014 hourly MET temperature data, and gasoline and propane loads came from vehicle and appliance usage.",
          "This hourly baseline became the demand profile that every generation and storage subsystem was sized against.",
        ],
        images: [
          { src: "/projects/red-house/eload-plot.png", caption: "Hourly electrical-load profile used to size generation and storage." },
          { src: "/projects/red-house/ng-usage.png", caption: "Monthly natural-gas usage." },
          { src: "/projects/red-house/elec-usage.png", caption: "Monthly electricity usage." },
        ],
      },
      {
        heading: "Renewable Generation Design",
        body: [
          "Solar PV: 12 Canadian Solar TOPHiKu6 470 W N-type TOPCon panels (5.64 kW), tilted 45 degrees south, generating an estimated 22.52 GJ/yr after a 97 percent DC-to-AC conversion.",
          "Solar thermal: 3 ThermoRay TRB-30 flat-plate collectors at a 50 degree tilt, at 57.7 percent net recovery efficiency, delivering an estimated 158.31 GJ/yr, which covers most of the space- and water-heating load.",
          "Wind: 16 Primus AIR 40 micro-turbines. The Winnipeg wind resource was characterized from 8,760 hourly observations (mean 4.59 m/s; Weibull k = 2.086, c = 4.02 m/s), and the turbine power curve was integrated over the velocity histogram with altitude- and temperature-corrected air density and Region I/II/III control logic, yielding about 305 kWh/yr per unit. Wind output is anti-correlated with solar, stronger on cold, cloudy days.",
        ],
      },
      {
        heading: "Storage, Controls & Biomass",
        body: [
          "A 9.9 kWh LiFePO4 battery (90 percent round-trip) and a hot-water thermal buffer tank balance the hourly mismatch between generation and demand. The control logic prioritizes local renewable self-consumption, charges the battery with surplus, exports the remainder to Manitoba Hydro, and meets deficits from battery first then grid, reaching net-zero grid interaction (minus $5.01/yr in Year 1).",
          "A Nissan LEAF EV replaces the gasoline car, removing 34.47 GJ/yr of fuel and acting as a controllable load scheduled for high-generation hours. A Sedore Canadian 2000 multi-fuel stove provides winter space heat. A first-principles combustion analysis (5.66 kg air per kg dry fuel, 45 percent excess air, flue gas exiting at 315 C) gave a 57.7 percent net recovery efficiency and about 1,484 kW of useful heat from roughly 2.07 cords of wood per year.",
        ],
      },
      {
        heading: "Budget & Economics",
        body: [
          "Capital cost totalled $86,699, $13,301 under the $100,000 ceiling, split across solar PV ($3,600), solar thermal ($12,600), the EV ($20,000), battery storage ($14,000), wind turbines ($32,000), and the biomass stove ($4,499).",
          "A 30-year discounted cash-flow analysis, fed by avoided electricity, gas, and gasoline costs, turns cash-flow positive in Year 22 and reaches a cumulative net profit of $41,627 by Year 30.",
        ],
      },
      {
        heading: "Outcome & Key Learnings",
        body: [
          "Combined renewable generation, solar PV (22.52), solar thermal (158.31), wind (1.10), and EV gasoline displacement (8.10), totals 173.83 GJ/yr against the 174.07 GJ/yr load, raising the Renewable Energy Ratio from 20.1 to 99.9 percent and cutting emissions to near zero while staying on budget and meeting the off-grid requirement.",
          "No single technology was sufficient alone. Solar thermal carried the heating load, wind backfilled solar's weakest days, and storage with a grid-as-battery strategy reconciled supply and demand hour by hour. Designing the system as a coordinated whole, and proving it over 30 years, was what met the net-zero target within the constraints.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/red-house/house2.png", caption: "Retrofitted home concept." },
    ],
  },

  {
    slug: "hovercraft-flow-optimization",
    kind: "case",
    title: "Hovercraft Aerodynamic Optimization",
    subtitle:
      "A CFD and experiment driven redesign of a foam-board hovercraft that rebalances skirt airflow with a flow director and graduated intake holes.",
    course: "MECH 3992, Mechanical Laboratories in Thermofluids",
    type: "Fluids & CFD",
    categories: ["Fluids & CFD", "Systems Analysis"],
    team: "Team of 4 (B03-4)",
    year: "2025",
    featured: false,
    cover: "/projects/hovercraft/design.png",
    summary:
      "A Phase 2 redesign of a laser-cut foam-board hovercraft built to maximize top speed. SolidWorks Flow Simulation, analytical momentum and Bernoulli analysis, and load-cell testing guided two changes: a 14 degree flow director that splits airflow cleanly into the skirt channels, and graduated intake holes that even out flow from back to front. The craft reached 6.42 m/s with a more balanced skirt flow, though the added mass cut top speed 12.5 percent against a Phase 1 setup that benefited from a misplaced splitter gap.",
    tech: ["SolidWorks Flow Simulation (CFD)", "Momentum & Bernoulli Analysis", "Conservation of Mass", "Load-Cell Thrust Testing", "Foam-Board Fabrication", "Design Iteration"],
    metrics: [
      { label: "Top speed (Phase 2)", value: "6.42 m/s" },
      { label: "Flow splitter angle", value: "14 deg" },
      { label: "Lift pressure (analytical)", value: "30 Pa" },
      { label: "Total mass", value: "100 g" },
      { label: "Analysis methods", value: "3" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The hovercraft channels airflow from a single fixed BLDC motor, propeller, and duct into a plastic-film skirt to generate lift and forward motion. The motor, propeller, and duct cannot be changed, so every improvement targets airflow distribution, weight, and drag.",
          "Phase 1 testing exposed uneven air distribution in the skirt that slowed the craft, with stagnant high-pressure zones where flow struck the channel back walls. Phase 2 set out to maximize top speed by redistributing skirt airflow, fixing the flow splitter at 14 degrees, the best-performing angle found in Phase 1.",
        ],
        images: [
          { src: "/projects/hovercraft/design.png", caption: "Phase 2 hovercraft design." },
          { src: "/projects/hovercraft/flow-director-render.png", caption: "Flow director integrated at the splitter." },
        ],
      },
      {
        heading: "Analysis Methods",
        body: [
          "Three methods worked in tandem. The analytical model reduced the rectilinear momentum equation to a static thrust relation, F = rho A V squared, showing that reducing frontal area and increasing thrust raise top speed, while conservation of mass and Bernoulli pointed to minimizing the perimeter-to-area ratio and internal pressure to improve lift efficiency.",
          "Those equations set the numerical boundary conditions: a 0.91 N lift force and a 30 Pa lift pressure drove the internal flow. Experimental velocity tests ran on a circular guide-arm track, and a static thrust test used a load cell. Battery placement mattered: mounting it on the flow splitter reached 6.42 m/s versus 4.33 m/s in front of the duct.",
          "Numerical simulation used SolidWorks Flow Simulation 2024 in separate internal and external flow studies, treating the air as incompressible at atmospheric conditions with pressure-driven flow.",
        ],
        images: [
          { src: "/projects/hovercraft/velocity-test.png", caption: "Circular-track velocity test with guide arm." },
          { src: "/projects/hovercraft/thrust-test.png", caption: "Static thrust test against a load cell." },
        ],
      },
      {
        heading: "Flow Director",
        body: [
          "The Phase 1 splitter left a crevice that raised speed only because the test track was circular. Phase 2 replaced it with a Flow Director: a 14 degree top face that sets the splitter angle, two curved front faces, and a center fillet that steer flow into the two channels and ease manufacturing.",
          "CFD trajectories confirmed the change. The Phase 1 profile showed flow slamming the channel back walls, creating turbulence, eddies, and a high stagnant-pressure zone. The Phase 2 profile directed flow into the separate channels without the sudden impact.",
        ],
        images: [
          { src: "/projects/hovercraft/flow-director.png", caption: "Flow director geometry: 14 degree top face, curved front, center fillet." },
          { src: "/projects/hovercraft/flow-phase1.png", caption: "Phase 1 internal flow: impact and eddies at the channel back wall." },
          { src: "/projects/hovercraft/flow-phase2.png", caption: "Phase 2 internal flow: directed cleanly into the channels." },
        ],
      },
      {
        heading: "Graduated Intake Holes",
        body: [
          "The channel intake holes were redesigned to grow from small at the back to large at the front, pushing more air toward the front of the skirt where Phase 1 ran short.",
          "Cut-plot velocity profiles taken 2.54 mm below the holes showed the effect: Phase 1 concentrated flow in the rear holes, while Phase 2 distributed flow evenly through every hole, matching the even-distribution objective.",
        ],
        images: [
          { src: "/projects/hovercraft/holes-design.png", caption: "Graduated intake holes, small at the back to large at the front." },
          { src: "/projects/hovercraft/holes-phase1.png", caption: "Phase 1 skirt velocity: flow concentrated at the back." },
          { src: "/projects/hovercraft/holes-phase2.png", caption: "Phase 2 skirt velocity: balanced across all holes." },
        ],
      },
      {
        heading: "Results & Tradeoff",
        body: [
          "The combined changes evened out the skirt flow, but raw speed fell. The hovercraft reached 6.42 m/s, a 12.5 percent decrease from Phase 1. The flow director added 7 g to a 100 g craft, and the analytical model showed that added mass outweighed the airflow gains for top speed.",
          "Part of the Phase 1 advantage was also an artifact: a gap left at the back of the splitter raised speed only on the circular track and was removed for Phase 2. The redesign therefore traded measured top speed for the cleaner, more repeatable airflow it was built to deliver.",
        ],
        images: [
          { src: "/projects/hovercraft/combined-phase1.png", caption: "Phase 1 combined velocity profile." },
          { src: "/projects/hovercraft/combined-phase2.png", caption: "Phase 2 combined velocity profile." },
        ],
      },
      {
        heading: "Outcome & Key Learnings",
        body: [
          "Phase 2 met its airflow-distribution goal but not the raw-speed goal, a clear mass-versus-flow tradeoff that the three methods agreed on. The internal-flow redesign worked; the weight it cost did not pay back in speed.",
          "An external-flow CFD study set the next targets: frontal drag and a low-pressure wake behind the splitter. Future work is to reduce weight and improve external aerodynamics while keeping the improved internal distribution.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/hovercraft/external-velocity.jpg", caption: "External-flow velocity study." },
      { src: "/projects/hovercraft/external-pressure.jpg", caption: "External-flow pressure study highlighting frontal drag." },
    ],
  },

  {
    slug: "rover-structural-analysis",
    kind: "case",
    title: "Ground Rover Structural Redesign",
    subtitle:
      "An analytical, FEA, and experimental redesign of a four-wheel rover chassis and wheels that lightens the structure and nearly doubles obstacle clearance.",
    course: "MECH 3892, Mechanical Laboratories in Solid Mechanics",
    type: "Structural Analysis & FEA",
    categories: ["Structural Analysis & FEA", "Design & FEA"],
    team: "Team of 4 (B01-1)",
    year: "2025",
    featured: false,
    cover: "/projects/rover/rover-side.jpg",
    summary:
      "A Phase 2 structural redesign of a prototype four-wheel ground rover with an HDF body, PLA wheels, and four 24 V motors. Hand calculations, SolidWorks FEA with mesh convergence, and static, aggregate, and obstacle testing validated two changes: chassis lightening holes and larger 4 in paddle wheels. The rover stayed well under the 0.1 in deflection limit at 7 lbf (0.042 in), dropped weight, and raised obstacle clearance from 2.25 to 3.75 in.",
    tech: ["SolidWorks FEA", "Mesh Convergence Studies", "Beam Bending & Stress Analysis", "Load-Cell Testing", "St. Venant's Principle", "HDF / PLA Materials"],
    metrics: [
      { label: "Max obstacle cleared", value: "3.75 in (was 2.25)" },
      { label: "Deflection at 7 lbf", value: "0.042 in" },
      { label: "Deflection limit", value: "0.1 in" },
      { label: "Max towing force", value: "2.19 lbf" },
      { label: "Wheel diameter", value: "4 in (was 3)" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The prototype is a four-wheel ground rover with a high-density fiberboard (HDF) body and four 24 V motors paired per side for skid steering. Phase 1 found it could carry the static load and cross gravel, but it could not climb obstacles taller than 0.75 in on a head-on approach.",
          "Phase 2 set out to improve climbing and reduce weight without losing strength or exceeding the 0.1 in chassis deflection limit at a 7 lbf payload.",
        ],
        images: [
          { src: "/projects/rover/rover-side.jpg", caption: "Prototype four-wheel rover." },
          { src: "/projects/rover/rover-top.jpg", caption: "Top view on the gravel test bed." },
        ],
      },
      {
        heading: "Approach",
        body: [
          "Three methods cross-checked every decision. Analytical models reduced each component, chassis, rocker, motor mount, and wheel paddles, to beam-bending cases to estimate stress, deflection, and moment of inertia, treating the materials as linear-elastic and isotropic under static load.",
          "SolidWorks FEA then localized stress and displacement, with a mesh-convergence study on each part holding stress change under 5 percent and symmetry models to cut computation. St. Venant's principle was used to discount sharp-corner stress artifacts the solver cannot resolve.",
          "Experimental tests rounded out the static models: a static load test with a threaded rod, load cell, and caliper; an aggregate pulling-force test on 0.15 in gravel; and an obstacle-climb test on stacked blocks.",
        ],
        images: [
          { src: "/projects/rover/chassis-convergence.png", caption: "Mesh convergence study for the chassis." },
        ],
      },
      {
        heading: "Design Changes & FEA",
        body: [
          "Two changes drove Phase 2. Lightening holes were cut into low-stress regions of the chassis to shed mass without losing stiffness; FEA put chassis deflection at 9.56e-4 in and stress at 0.179 ksi, confirming the structure was stiffer than the load required. The wheels were enlarged to 4 in diameter with every other paddle extended outward for climbing and traction.",
          "The wheel paddles were checked in two load cases. Peak FEA stresses were sharp-corner artifacts; probe values of 0.39 and 2.11 ksi sat in the same order as the analytical estimates and below the HDF yield strength, giving confidence to move to physical testing.",
        ],
        images: [
          { src: "/projects/rover/chassis-stress.png", caption: "Chassis von Mises stress, Phase 2." },
          { src: "/projects/rover/chassis-displacement.png", caption: "Chassis y-displacement, Phase 2." },
          { src: "/projects/rover/wheel-case1-stress.png", caption: "Wheel paddle stress, Case 1." },
          { src: "/projects/rover/wheel-case2-stress.png", caption: "Wheel paddle stress, Case 2." },
        ],
      },
      {
        heading: "Testing Results",
        body: [
          "Static load: vertical deflection was 0.042 in at 7.01 lbf, well under the 0.1 in limit, and 0.059 in at 9.82 lbf, still within limit, with no cracking or permanent deformation.",
          "Obstacle climb: the rover cleared 2.25 in at both 0 and 45 degree approaches, where Phase 1 had failed the 2.25 in head-on case, and cleared 3.75 in at 45 degrees, a 1.5 in improvement.",
          "Aggregate: pulling forces ranged from 0.60 to 2.19 lbf. The aggressive paddles dug into the gravel and lifted the front of the rover, shifting weight onto the rear wheels and pointing to a center-of-mass correction.",
        ],
        images: [
          { src: "/projects/rover/static-test.jpg", caption: "Static load test with threaded rod and caliper." },
          { src: "/projects/rover/obstacle-test.jpg", caption: "Obstacle climb test on stacked blocks." },
          { src: "/projects/rover/aggregate-test.jpg", caption: "Aggregate pulling-force test on gravel." },
          { src: "/projects/rover/static-p1vsp2.png", caption: "Static-load deflection, Phase 1 vs Phase 2." },
        ],
      },
      {
        heading: "Outcome & Key Learnings",
        body: [
          "Phase 2 met its goals: a lighter chassis, obstacle clearance up to 3.75 in, and deflection held under limit. The three methods reinforced each other, analytical bounding the problem, FEA localizing stress and deflection with judgment on artifacts, and testing exposing the dynamic front-lift behavior the static models could not predict.",
          "The clearest lesson was that static analysis alone misses real terrain behavior: the traction gain from the new paddles created a weight-transfer problem only the experiment revealed. Next steps are to rebalance the center of mass and evaluate a rocker-bogie suspension.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/rover/motor-mount-stress.png", caption: "Motor mount FEA stress." },
      { src: "/projects/rover/rocker-stress.png", caption: "Rocker arm FEA stress." },
    ],
  },

  {
    slug: "cantilever-support-structure",
    kind: "case",
    title: "Lightweight Cantilever Support Structure",
    subtitle:
      "A welded A36 I-beam frame optimized to carry a 1000 N offset load at 2.96 kg, verified for fatigue, buckling, weld strength, and anchorage.",
    course: "MECH 3652, Machine Design",
    type: "Machine Design",
    categories: ["Machine Design", "Structural Analysis & FEA", "Design & FEA"],
    team: "Team of 5 (Group 4)",
    year: "2025",
    featured: false,
    cover: "/projects/support-structure/ibeam-stress.png",
    summary:
      "A floor-mounted steel structure carrying a 1000 N horizontal load applied 500 mm from the floor without touching the adjacent wall. Five concepts were screened in a weighted matrix, then the selected frame was optimized through a cross-section study, topology study, and a seven-step mesh convergence to 3.06 million elements. The final four-member I-beam design weighs 2.964 kg with 77.6 MPa peak stress, 3.80 mm deflection, and FOS 3.22, with welds, anchor bolts, Euler buckling, and Marin-Goodman fatigue all verified for 10,000 cycles at 99 percent reliability.",
    tech: ["SolidWorks FEA", "Topology Optimization", "Mesh Convergence", "ASTM A36 Steel", "Weld Sizing (AWS)", "Anchor Bolt Design (F1554)", "Euler Buckling", "Marin / Goodman Fatigue"],
    metrics: [
      { label: "Final weight", value: "2.964 kg" },
      { label: "Peak stress", value: "77.6 MPa" },
      { label: "Max deflection", value: "3.80 mm" },
      { label: "Factor of safety", value: "3.22 (req. 2.0)" },
      { label: "Predicted fatigue life", value: "6.2M cycles (req. 10k)" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The structure must resist a 1000 N horizontal load applied 500 mm above the floor and 500 mm out from a wall it is prohibited from touching, fixed only to the top surface of the floor. The design is limited to ASTM A36 steel and must hold a minimum factor of safety of 2.0 with 99 percent reliability over 10,000 load cycles.",
          "The load path puts the frame in combined bending, shear, and axial action with buckling potential, so the central tradeoff is strength and rigidity against mass. The objective was the lightest structure that still meets every failure-mode check.",
        ],
        images: [
          { src: "/projects/support-structure/member-diagram.png", caption: "Member diagram of the optimized frame: vertical AB, diagonal BC, horizontal BD, overhang DE." },
        ],
      },
      {
        heading: "Concept Selection",
        body: [
          "Each of the five team members modelled and FEA-tested an independent concept. My concept was a three-beam inverted-V frame: 59.8 MPa, 2.11 mm, 1.67 kg, FOS 4.18, the lightest and safest of the five, but its 3D weld geometry scored poorly on manufacturability.",
          "A weighted decision matrix (deflection 30%, manufacturability 30%, mass 20%, FOS 20%) selected a three-member planar frame at 7.8 of 10. It scored a 10 on manufacturability: every member lies in one plane, so it can be cut and welded from standard sections with simple fixturing.",
        ],
        images: [
          { src: "/projects/support-structure/concept1-stress.png", caption: "My concept, an inverted-V frame: lightest and highest FOS, penalized on weld complexity." },
          { src: "/projects/support-structure/initial-model.png", caption: "Selected concept as initially modelled with a hollow square section." },
        ],
      },
      {
        heading: "Cross-Section Optimization",
        body: [
          "Three cross-sections were compared at near-constant structure weight so stiffness, not added material, decided the result. The hollow square baseline gave 81.8 MPa and 5.45 mm at 2.984 kg. A hollow circle was worse on both counts (96.1 MPa, 7.47 mm). The I-beam won decisively: 77.6 MPa, 3.80 mm, FOS 3.22 at 2.964 kg.",
          "Two I-beam profiles were sized: a 25.2 mm deep section with 20 x 2.5 mm flanges and 5 mm web for the diagonal, and a 22.45 mm deep section with 20 x 3 mm flanges for the remaining members.",
        ],
        images: [
          { src: "/projects/support-structure/ibeam-section.png", caption: "Final I-beam cross-section." },
          { src: "/projects/support-structure/ibeam-stress.png", caption: "Von Mises stress on the I-beam frame, 77.6 MPa peak." },
          { src: "/projects/support-structure/ibeam-deflection.png", caption: "Deflection plot, 3.80 mm maximum at the load point." },
        ],
      },
      {
        heading: "Topology and Mesh Verification",
        body: [
          "I ran the topology study and the mesh convergence. The topology optimization, constrained to hold FOS 2.0 at minimum mass, proposed web and flange cutouts that were rejected as impractical to manufacture; the fact that it removed little else confirmed the frame was already near-optimal.",
          "The convergence study refined the global mesh from 5 mm to 1 mm (40,939 to 3,056,413 elements), keeping at least three elements across the 5 mm webs and probing 1 mm away from the singular corner. Stress converged within 5 percent over three consecutive refinements at 126.7 MPa, the conservative value carried into the fatigue calculations.",
        ],
        images: [
          { src: "/projects/support-structure/topology.png", caption: "Topology study: proposed mass removal along the webs, rejected for manufacturability." },
          { src: "/projects/support-structure/convergence-plot.png", caption: "Mesh convergence, flattening over the final three refinements." },
          { src: "/projects/support-structure/stress-location.png", caption: "Converged stress location at the inner frame corner, 1 mm mesh." },
        ],
      },
      {
        heading: "Fixtures, Buckling, and Fatigue",
        body: [
          "Hand calculations closed every remaining failure mode. Fillet welds were sized per AWS minimum leg for 5 mm material with E60xx electrodes; weld shear works out to under 1 MPa against a 124 MPa allowable (static FOS above 130, fatigue FOS above 70 using the 2.7 end-of-weld concentration factor with shear Goodman).",
          "The frame anchors through welded A36 base plates and four 0.50 in F1554 Grade 36 concrete anchor bolts, each loaded below 0.7 MPa against a 36.6 kN tensile capacity. An Euler check on the compressed horizontal member gave a 24.3 kN critical load against 0.77 kN applied.",
          "Member fatigue used the Marin equation (surface, size, load, and 99 percent reliability factors) for an endurance limit near 104 MPa, then the Goodman criterion on the converged FEA stress. The 10,000-cycle fatigue strength is 237.9 MPa against the 126.7 MPa applied, and the predicted life is 6.2 million cycles. A SolidWorks fatigue study on the converged model showed no damage at 10,000 cycles.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The recommended design is a four-member welded I-beam frame at 2.964 kg that exceeds every requirement: FOS 3.22 against the required 2.0, deflection held to 3.80 mm, welds and anchorage with large margins, no buckling risk, and fatigue life three orders of magnitude past the requirement.",
          "The discipline of the project was closing the loop between methods: FEA results were only trusted after convergence, analytical checks used the converged values, and the topology study validated rather than redrew the geometry.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/support-structure/square-section.png", caption: "Baseline hollow square section before optimization." },
    ],
  },

  {
    slug: "tractor-speed-reducer",
    kind: "case",
    title: "4:1 Tractor Speed Reducer",
    subtitle:
      "Chain, gear, and belt drives designed in full for a 60 hp tractor; the selected gear train and its output shaft sized for fatigue with bearings, keys, and retaining rings.",
    course: "MECH 3652, Machine Design",
    type: "Machine Design",
    categories: ["Machine Design", "Design & FEA"],
    team: "Team of 5 (Group 1)",
    year: "2025",
    featured: false,
    cover: "/projects/speed-reducer/drive-train.png",
    summary:
      "A 4:1 speed reducer carrying 60 hp from a diesel tractor engine at 640 RPM to a 160 RPM output at 2670 N·m. Complete chain, gear, and belt drives were designed and compared on transmission efficiency, contamination resistance, and packaging; the gear train won with two stacked 2:1 spur stages in AISI 4140, sized by AGMA bending and contact methods. The 42 in output shaft was designed end to end with Marin fatigue at four critical locations, iterating material from 1020 CR to 1050 CR steel to hold FOS above 2, and verified by FEA converged at 31.85 ksi.",
    tech: ["AGMA Gear Design", "Lewis Bending", "Shaft Fatigue (Marin)", "Stress Concentrations (Kf, Kfs)", "AISI 4140 / 1050 CR Steel", "Bearing Selection", "SolidWorks FEA", "Chain & Belt Design"],
    metrics: [
      { label: "Reduction", value: "4:1 (two 2:1 stages)" },
      { label: "Power", value: "60 hp" },
      { label: "Output torque", value: "2670 N·m" },
      { label: "Shaft FOS", value: "2.17 min" },
      { label: "Shaft FEA stress", value: "31.85 ksi converged" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The brief: design a speed reducer between 1.5:1 and 10:1 for 1 to 75 hp, with complete designs for a chain drive, gear drive, and belt drive, select one on engineering criteria, and fully design one of its shafts with bearings and retaining rings.",
          "The chosen application is a tractor wheel drive: 60 hp in at 640 RPM, 160 RPM out, torque rising from 667.6 N·m at the input to 2670.3 N·m at the output. The drive operates outdoors in dirt, at low speed and high torque, with packaging on the tractor frame at a premium.",
        ],
      },
      {
        heading: "Drive Trade Study",
        body: [
          "All three drives were designed, not just compared on paper. The chain design used No. 100/120 single-strand roller chain with four sprockets and 15 in centers (about 44 in end to end); the belt design used two 2:1 V-belt stages with 9 and 18 in sheaves (43.5 in end to end, and a single-stage option would have needed a 36 in sheave); the gear design used four spur gears, two at 10 in and two at 20 in diameter (50 in tip to tip).",
          "Selection weighed transmission efficiency, resistance to dust and debris, and installed size. Chain and gears beat the belt on efficiency and contamination; the gear train then won overall because it needs no tensioning or wrap-angle allowance, transmits torque tooth to tooth with no elongation or slip, and can be fully enclosed in a gearbox, which suits a machine that lives in dirt. Its slightly longer package was accepted as the cost of that robustness.",
        ],
        images: [
          { src: "/projects/speed-reducer/drive-train.png", caption: "Selected gear train: input shaft left, two stacked 2:1 stages to the output." },
          { src: "/projects/speed-reducer/chain-alternative.jpg", caption: "Chain alternative with pitch diameters and wrap angles." },
          { src: "/projects/speed-reducer/belt-alternative.png", caption: "Belt alternative, two 2:1 V-belt stages." },
        ],
      },
      {
        heading: "Gear Design",
        body: [
          "Each 2:1 stage pairs a 15-tooth, 10 in pitch-diameter pinion with a 30-tooth, 20 in gear, both 2 in face width at a 20 degree pressure angle in AISI 4140 Grade 1 steel (Sy 93 ksi, 197 HB). Sizing followed the AGMA method: Lewis form factor, dynamic factor Kv, geometry factor J, stress-cycle factors YN and ZN at 10^7 cycles, and through-hardened bending and contact strengths.",
          "Tooth profiles were generated as DXF involutes and rebuilt in SolidWorks. Each gear carries a 1-9/16 in bore with a 3/8 x 1/2 in keyseat for torque transmission.",
        ],
        images: [
          { src: "/projects/speed-reducer/pinion-gear.png", caption: "15-tooth pinion, 10 in pitch diameter, 2 in face." },
          { src: "/projects/speed-reducer/driven-gear.png", caption: "30-tooth driven gear, 20 in pitch diameter." },
          { src: "/projects/speed-reducer/gear-dxf.png", caption: "Involute tooth profile generated as DXF for the CAD model." },
        ],
      },
      {
        heading: "Output Shaft Design",
        body: [
          "The 42 in output shaft carries the final gear and drives both wheel hubs. Diameters at four critical locations (gear-seat shoulder, keyway edge, retaining-ring groove, bearing shoulder) were found iteratively: conservative first-pass stress concentrations from standard tables, a nominal diameter, then refined Kf and Kfs from notch sensitivity and the actual D/d and r/d ratios.",
          "The first pass in 1020 CR steel held the shoulders (FOS 2.13) but failed the keyway at 1.63, so the material was stepped up to 1050 CR (Sy 580 MPa), bringing the keyway to 2.17. The retaining-ring groove initially screened at 1.61 using the worst-case Kt of 5.0; with measured groove geometry (0.068 x 0.047 in, 0.010 in radius) the true factors gave 2.61. The bearing seat was set at 1.1810 in to match a standard NTN 6406ZZ double-shielded ball bearing (8,800 RPM rating against 160 required), and keys were crush-checked to length: 0.472 in at the gear, 1.106 in at the wheel ends.",
        ],
        images: [
          { src: "/projects/speed-reducer/shaft-layout.png", caption: "Initial shaft layout: gear seat (green) and bearing seats (orange)." },
          { src: "/projects/speed-reducer/shaft-full.png", caption: "Final assembled shaft." },
          { src: "/projects/speed-reducer/shaft-section.png", caption: "Section view through the gear, bearings, keys, and retaining rings." },
          { src: "/projects/speed-reducer/shaft-closeup.png", caption: "Gear and bearing interface detail." },
        ],
      },
      {
        heading: "FEA Verification",
        body: [
          "Each gear stage was checked under its stage torque with the driven bore fixed, representing a jammed wheel as the worst case. Stage one peaked at 82.9 MPa and stage two at 133.7 MPa, both at the tooth contact patch with a secondary concentration at the keyseat corner, an order of magnitude below the 4140 yield and consistent with the AGMA sizing.",
          "The shaft was meshed from 0.25 in down to 0.05 in elements (90k to 3.5M), converging within 1 percent over three refinements at 31.85 ksi near the gear edge, with 0.006 in total deflection under bearing supports and the full 1969.5 lb-ft output torque.",
        ],
        images: [
          { src: "/projects/speed-reducer/stage1-stress.png", caption: "Stage one stress, 82.9 MPa at the contact patch." },
          { src: "/projects/speed-reducer/stage2-stress.png", caption: "Stage two stress under doubled torque, 133.7 MPa." },
          { src: "/projects/speed-reducer/shaft-fea-stress.png", caption: "Shaft stress near the gear seat, converged at 31.85 ksi." },
          { src: "/projects/speed-reducer/shaft-convergence.png", caption: "Shaft mesh convergence over seven refinements." },
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The gear-driven reducer meets the 4:1 ratio at 60 hp with every component sized by hand calculation and confirmed by FEA: gears within AGMA bending and contact limits, and a shaft holding FOS above 2 at all four critical locations after one material iteration.",
          "The shaft design was the core lesson: real factors of safety live in the details, keyways, ring grooves, and shoulder fillets, and the first material that survives the nominal sections is not necessarily the one that survives its own features.",
        ],
        images: [
          { src: "/projects/speed-reducer/shaft-fea-deflection.png", caption: "Shaft deflection under full output torque, 0.006 in total." },
        ],
      },
    ],
    gallery: [],
  },

  // ---------------------------------------------------------------------------
  // CAD drawing deliverables (live PDF sheets)
  // ---------------------------------------------------------------------------
  {
    slug: "end-effector-drawing",
    kind: "drawing",
    title: "End Effector Mount",
    subtitle:
      "Machined aluminum end-effector that interfaces the Fairino FR10 tool flange with the digital dial gauge.",
    course: "MECH 4860, Engineering Design Capstone",
    source: "Capstone CAD deliverable",
    type: "Technical Drawings",
    categories: ["Technical Drawings", "Design & FEA", "Manufacturing"],
    team: "Capstone CAD deliverable",
    year: "2025",
    featured: false,
    cover: "/projects/drawings/end-effector.png",
    summary:
      "A SolidWorks part and detail drawing for the inspection-cell end effector. The mount carries the Mitutoyo dial gauge on the FR10 robot and aligns the probe tip with the Tool Center Point.",
    tech: ["SolidWorks", "Detail Drawing", "CNC Machining", "Aluminium 6061-T6", "Tooling Design"],
    metrics: [
      { label: "Material", value: "Aluminium 6061-T6" },
      { label: "Flange base", value: "Ø2.44 in" },
      { label: "Flange holes", value: "4 × Ø0.24 in" },
      { label: "Drawing scale", value: "1:1" },
    ],
    drawingFile: "/drawings/end-effector.pdf",
    related: { slug: "automated-cone-inspection", label: "Automated Cone Inspection System" },
    sections: [
      {
        heading: "Function",
        body: [
          "The end effector is the interface between the FR10 robot tool flange and the digital dial gauge. It holds the gauge in a fixed position so the probe tip stays collinear with the robot Tool Center Point throughout the inspection path.",
        ],
      },
      {
        heading: "Design Features",
        body: [
          "A Ø2.44 in circular base carries four Ø0.24 in through holes matching the FR10 flange bolt pattern. A rectangular extension off the base holds the dial gauge, with a Ø0.25 in cross hole for a hex screw and nut that clamps the gauge and prevents relative motion during measurement.",
          "Detailing covers flat, side, and top views at 1:1 scale on a B-size sheet, dimensioned for machining.",
        ],
      },
      {
        heading: "Manufacturing & Constraints",
        body: [
          "The part is machined from Aluminium 6061-T6 to keep tooling mass low and preserve the robot's dynamic accuracy. The flange hole pattern and probe-axis alignment are the controlling features, since any offset shifts the measurement reference.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/cone-inspection/dial-gauge.jpg", caption: "Dial gauge fastened to the machined end-effector mount." },
    ],
    bom: [{ item: "1", qty: "1", desc: "62 mm thick, 90 mm tall rod, Aluminium 6061-T6" }],
  },

  {
    slug: "table-components-drawing",
    kind: "drawing",
    title: "Inspection Table Components",
    subtitle:
      "Centering and locking hardware that positions inlet and fan wheel cones repeatably on the inspection table.",
    course: "MECH 4860, Engineering Design Capstone",
    source: "Capstone CAD deliverable",
    type: "Technical Drawings",
    categories: ["Technical Drawings", "Design & FEA", "Manufacturing"],
    team: "Capstone CAD deliverable",
    year: "2025",
    featured: false,
    cover: "/projects/drawings/table-components.png",
    summary:
      "A multi-part detail drawing for the inspection table's centering system: slider bars, profile blocks, keys, and sliding racks that index and lock each cone size on the table.",
    tech: ["SolidWorks", "Detail Drawing", "Aluminium 6061-T6", "CNC Machining", "Fixture Design"],
    metrics: [
      { label: "Material", value: "Aluminium 6061-T6" },
      { label: "Unique parts", value: "5" },
      { label: "Slider bars", value: "8 (inlet + fan wheel)" },
      { label: "Index hole", value: "Ø0.25 in" },
    ],
    drawingFile: "/drawings/table-components.pdf",
    related: { slug: "automated-cone-inspection", label: "Automated Cone Inspection System" },
    sections: [
      {
        heading: "Function",
        body: [
          "These parts make up the centering system on the inspection table. They position both inlet and fan wheel cones on a common datum and lock them so each cone size is measured from the same reference.",
        ],
      },
      {
        heading: "Parts & Operation",
        body: [
          "The parts list covers four fan-wheel slider bars, four inlet slider bars, four profile blocks, four keys, and eight sliding racks. The slider bars carry rows of Ø0.25 in through holes at set positions; these discrete locations index the cone sizes. Profile blocks and keys locate and lock the sliding racks along the bars.",
          "Slider bars use a 1/4 scale plan view to show the full hole pattern; profile blocks, keys, and racks are detailed at 1:1 on a C-size sheet.",
        ],
      },
      {
        heading: "Constraints",
        body: [
          "Hole positions set the cone diameters the table accepts, so their spacing drives the range of sizes supported. Four arms spaced at 90 degrees center the cone, requiring consistent hole positions across paired bars.",
        ],
      },
    ],
    gallery: [
      { src: "/projects/cone-inspection/table-top.png", caption: "Centering system embedded in the inspection table." },
      { src: "/projects/cone-inspection/slider-assem.png", caption: "Centering assembly with locking pin." },
    ],
    bom: [
      { item: "1", qty: "4", desc: "Slider bar, fan wheel cone" },
      { item: "2", qty: "4", desc: "Slider bar, inlet cone" },
      { item: "3", qty: "4", desc: "Profile block, Aluminium 6061-T6" },
      { item: "4", qty: "4", desc: "Key, Aluminium 6061-T6" },
      { item: "5", qty: "8", desc: "Sliding rack" },
    ],
  },

  {
    slug: "proximity-probe-bracket-fabrication",
    kind: "drawing",
    title: "Proximity Probe Bracket (Fabrication)",
    subtitle:
      "A welded A36 steel bracket that secures a vibration proximity probe to the generator guide bearing of a hydro generator unit.",
    course: "Manitoba Hydro, Long Spruce Generating Station",
    source: "Manitoba Hydro, GDD (issued for fabrication)",
    type: "Technical Drawings",
    categories: ["Technical Drawings", "Manufacturing"],
    team: "Professional work, drawn and designed by P. Gill",
    year: "2024",
    featured: true,
    cover: "/projects/drawings/proximity-fabrication.png",
    summary:
      "A fabrication drawing for the generator guide bearing proximity probe bracket at Long Spruce Generating Station, drawn in Autodesk Inventor. The bracket holds a vibration proximity probe at a fixed position on the lower bracket of the generator unit.",
    tech: ["Autodesk Inventor", "Fabrication Drawing", "ASTM A36 Steel", "Weldment Design", "CSA W59 / W47.1", "GD&T"],
    metrics: [
      { label: "Material", value: "ASTM A36 steel" },
      { label: "Assembly weight", value: "~17 lb" },
      { label: "Welding", value: "CSA W59 / W47.1" },
      { label: "Drawing no.", value: "1-00194-DD-60060-0004" },
      { label: "Release", value: "P.Eng sealed, issued for fabrication" },
    ],
    drawingFile: "/drawings/ls-vibe-bracket-fabrication.pdf",
    drawingNumber: "1-00194-DD-60060-0004, Rev 00",
    sections: [
      {
        heading: "Function",
        body: [
          "The bracket fixes a vibration (proximity) probe to the generator guide bearing lower bracket of a hydro generator unit. It holds the probe rigidly at a set position so the gap between the probe and the rotating shaft stays within the measurement range.",
        ],
      },
      {
        heading: "Construction",
        body: [
          "The bracket is a welded steel assembly: a 1/2 in base plate and a 4x4 in, 1/4 in wall HSS section, with a 1/4 in plate, all ASTM A36. Two 1/2-13 UNC grade 5 hex bolts fasten it in place. The drawing scope is to fabricate the plate and HSS items, supply the bolts, and weld the base plate to the HSS. Approximate assembly weight is 17 lb.",
        ],
      },
      {
        heading: "Specifications & Standards",
        body: [
          "Welding is specified to CSA W59 by a Canadian Welding Bureau shop certified to CSA W47.1, with 100 percent visual inspection and repair by grinding and re-welding. Surfaces are cleaned to SSPC SP-2/SP-3 and SP-1, then coated to a minimum 10 mil total thickness in grey RAL 7042. Fraction tolerance is ±1/16 in with a 125 surface finish. The drawing was sealed by a Professional Engineer and issued for fabrication, and references the installation drawing 1-00194-DE-60060-0001.",
        ],
      },
    ],
    gallery: [],
    bom: [
      { item: "1", qty: "1", desc: "Plate, 1/2 in thick, steel ASTM A36" },
      { item: "2", qty: "1", desc: "4x4 HSS, 1/4 in thick, steel ASTM A36" },
      { item: "3", qty: "1", desc: "Plate, 1/4 in thick, steel ASTM A36" },
      { item: "4", qty: "2", desc: "Hex bolt, 1/2-13 UNC x 1 1/2 long, grade 5 (ASME B18.2.1)" },
    ],
  },

  {
    slug: "proximity-probe-bracket-installation",
    kind: "drawing",
    title: "Proximity Probe Bracket (Installation)",
    subtitle:
      "The installation drawing showing how the generator and turbine bearing proximity probe brackets mount onto the generator unit.",
    course: "Manitoba Hydro, Long Spruce Generating Station",
    source: "Manitoba Hydro, GDD (issued for construction)",
    type: "Technical Drawings",
    categories: ["Technical Drawings", "Manufacturing"],
    team: "Professional work, drawn and designed by P. Gill",
    year: "2024",
    featured: true,
    cover: "/projects/drawings/proximity-installation.png",
    summary:
      "An A0 installation drawing, drawn in Autodesk Inventor, that defines how the generator and turbine bearing proximity probe brackets and the key-phasor bracket are installed on the hydro generator unit, with sectioned assembly views and a joint torque table.",
    tech: ["Autodesk Inventor", "Installation Drawing", "Assembly Sections", "Joint Torque Specification", "CSA W59 / W47.1"],
    metrics: [
      { label: "Probe brackets installed", value: "5 (2 turbine, 2 gen., 1 key-phasor)" },
      { label: "Sheet size", value: "A0" },
      { label: "Max joint torque", value: "40 ft-lb" },
      { label: "Drawing no.", value: "1-00194-DE-60060-0001" },
      { label: "Release", value: "P.Eng sealed, issued for construction" },
    ],
    drawingFile: "/drawings/ls-vibe-bracket-installation.pdf",
    drawingNumber: "1-00194-DE-60060-0001, Rev 00",
    sections: [
      {
        heading: "Function",
        body: [
          "The drawing defines the installation of the proximity probe brackets on the generator unit. It locates the generator and turbine guide bearing probe brackets and the key-phasor bracket relative to the shaft, bearing covers, and existing hardware, using sectioned assembly views and details.",
        ],
      },
      {
        heading: "Installation Scope",
        body: [
          "Scope covers installing two brackets each for the turbine and generator bearing probes, modifying the existing grounding brush bracket to accept the key-phasor bracket bolts, drilling and tapping holes in the lower bracket, and adding velometer probe holes installed by Manitoba Hydro. The turbine bracket is welded to the guide bearing cover after lead-paint removal, followed by touch-up painting. The probe gap is set by Manitoba Hydro.",
        ],
      },
      {
        heading: "Joints & Standards",
        body: [
          "A joint table specifies each connection: generator guide bearing bracket to lower bracket (1/2-13 UNC, 4 fasteners, Loctite 242, 40 ft-lb), key-phasor bracket to creep-indicator bracket (3/8-16 UNC, 12 fasteners, 30 ft-lb), and turbine guide bearing bracket to cover plate (3/8-16 UNC, 8 fasteners, 20 ft-lb). Welding follows CSA W59 and W47.1 with 100 percent visual inspection. The drawing was sealed by a Professional Engineer and issued for construction.",
        ],
      },
    ],
    gallery: [],
    bom: [
      { item: "1", qty: "2", desc: "Generator guide bearing proximity probe bracket (dwg 1-00194-DD-60060-0004)" },
      { item: "2", qty: "1", desc: "Key phasor probe bracket (dwg 1-00194-DD-60060-0003)" },
      { item: "3", qty: "1", desc: "Existing grounding brush bracket (modified)" },
      { item: "4", qty: "2", desc: "Turbine guide bearing proximity probe bracket (dwg 1-00194-DE-60060-0002)" },
      { item: "5", qty: "As req'd", desc: "Threadlocker, Loctite 242" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.type))),
];
