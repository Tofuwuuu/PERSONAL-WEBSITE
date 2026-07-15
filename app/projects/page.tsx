import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectsPageContent } from "@/components/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-[calc(50%-50vw)] w-screen px-4 py-5 sm:px-6 lg:px-10 md:py-6">
      <div className="mx-auto w-full max-w-[1700px]">
        <ProjectsPageContent projects={projects} />
      </div>
    </div>
  );
}
