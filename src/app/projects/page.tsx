import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies and CAD drawing deliverables across robotics, energy systems, controls, biomaterials, and field hardware, with problem statements, analysis, results, and embedded drawings.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Engineering case studies."
        description="Case studies are documented end to end: problem, objectives, design process, analysis, results, and key learnings. Drawing entries include the engineering intent, specifications, and the live drawing sheet. Filter by discipline or search by tool."
      />
      <div className="container-page">
        <ProjectsExplorer />
      </div>
    </>
  );
}
