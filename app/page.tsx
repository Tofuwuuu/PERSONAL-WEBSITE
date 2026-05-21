import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <div className="py-8 md:py-12">
      <Hero />
      <div className="mt-14 space-y-20 md:mt-20 md:space-y-24">
        <ProjectsSection />
        <Skills />
        <About />
        <Contact />
      </div>
    </div>
  );
}
