import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
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
      <div className="lg:flex lg:justify-between lg:gap-12">
        <Intro />
        <main id="content" className="lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <ProjectsSection />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
