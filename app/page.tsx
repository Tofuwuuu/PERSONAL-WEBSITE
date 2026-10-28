import { About } from "@/components/About";
import { ScrollMotion } from "@/components/ScrollMotion";
import { Contact } from "@/components/Contact";
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
      <ScrollMotion />
      <Hero />
      <About />
      <ProjectsSection />
      <div className="relative">
        {/* Decorative: blurred magenta striped sun and horizon lines behind Experience and Contact. */}
        <div aria-hidden className="lower-band">
          <div className="lower-band-sun" data-parallax="0.12" />
          <div className="lower-band-lines" />
        </div>
        <Experience />
        <Contact />
      </div>
    </>
  );
}
