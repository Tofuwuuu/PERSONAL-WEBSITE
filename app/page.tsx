import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
    </>
  );
}
