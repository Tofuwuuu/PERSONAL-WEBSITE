import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SITE_URL, personJsonLd } from "@/content/personJsonLd";

export default function HomePage() {
  return (
    <>
      {/* Rendered directly: Next metadata would drop the trailing slash. React hoists it into head. */}
      <link rel="canonical" href={SITE_URL} />
      <script
        type="application/ld+json"
        // JSON.stringify output with "<" escaped so the block cannot close the script tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <ProjectsSection />
      <Experience />
    </>
  );
}
