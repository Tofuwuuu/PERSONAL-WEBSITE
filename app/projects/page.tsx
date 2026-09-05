import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectsPageContent } from "@/components/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-12">
      <ProjectsPageContent projects={projects} />
    </div>
  );
}
