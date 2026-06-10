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
  "Delivered across four engineering domains in coursework: robotic inspection and automation, renewable energy systems, mechatronic controls, and biomaterials characterization.",
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
      "Designed and released the Long Spruce Generating Station proximity probe bracket and its installation drawing in Autodesk Inventor, specifying A36 steel weldments, CSA W59/W47.1 welding, fastener torques, and protective coatings.",
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
    cover: "",
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
    cover: "",
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
    cover: "",
    summary:
      "A fabrication drawing for the generator guide bearing proximity probe bracket at Long Spruce Generating Station, drawn in Autodesk Inventor. The bracket holds a vibration proximity probe at a fixed position on the lower bracket of the generator unit.",
    tech: ["Autodesk Inventor", "Fabrication Drawing", "ASTM A36 Steel", "Weldment Design", "CSA W59 / W47.1", "GD&T"],
    metrics: [
      { label: "Material", value: "ASTM A36 steel" },
      { label: "Assembly weight", value: "~17 lb" },
      { label: "Fraction tolerance", value: "±1/16 in" },
      { label: "Welding", value: "CSA W59 / W47.1" },
      { label: "Drawing no.", value: "1-00194-DD-60060-0004" },
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
          "Welding is specified to CSA W59 by a Canadian Welding Bureau shop certified to CSA W47.1, with 100 percent visual inspection and repair by grinding and re-welding. Surfaces are cleaned to SSPC SP-2/SP-3 and SP-1, then coated to a minimum 10 mil total thickness in grey RAL 7042. Fraction tolerance is ±1/16 in with a 125 surface finish. The sheet was issued for fabrication and references the installation drawing 1-00194-DE-60060-0001.",
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
    cover: "",
    summary:
      "An A0 installation drawing, drawn in Autodesk Inventor, that defines how the generator and turbine bearing proximity probe brackets and the key-phasor bracket are installed on the hydro generator unit, with sectioned assembly views and a joint torque table.",
    tech: ["Autodesk Inventor", "Installation Drawing", "Assembly Sections", "Joint Torque Specification", "CSA W59 / W47.1"],
    metrics: [
      { label: "Probe brackets installed", value: "5 (2 turbine, 2 gen., 1 key-phasor)" },
      { label: "Sheet size", value: "A0" },
      { label: "Max joint torque", value: "40 ft-lb" },
      { label: "Drawing no.", value: "1-00194-DE-60060-0001" },
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
          "A joint table specifies each connection: generator guide bearing bracket to lower bracket (1/2-13 UNC, 4 fasteners, Loctite 242, 40 ft-lb), key-phasor bracket to creep-indicator bracket (3/8-16 UNC, 12 fasteners, 30 ft-lb), and turbine guide bearing bracket to cover plate (3/8-16 UNC, 8 fasteners, 20 ft-lb). Welding follows CSA W59 and W47.1 with 100 percent visual inspection. The sheet was issued for construction.",
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
