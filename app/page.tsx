import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <div className="py-10">
      <Hero />
      <div className="mt-12 space-y-16">
        <About />
        <Skills />
        <ProjectsSection />
        <Contact />
      </div>
    </div>
  );
}

