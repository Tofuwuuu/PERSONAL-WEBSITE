"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import type { Project } from "@/content/types";
import { ProjectCard } from "@/components/ProjectCard";

function getVisibleCount(width: number) {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

function subscribeToViewport(onStoreChange: () => void) {
  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
}

function getViewportVisibleCount() {
  return getVisibleCount(window.innerWidth);
}

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const carouselId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visibleCount = useSyncExternalStore(
    subscribeToViewport,
    getViewportVisibleCount,
    () => 3,
  );
  const maxIndex = Math.max(0, projects.length - visibleCount);
  const pageCount = maxIndex + 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackedProjects, setTrackedProjects] = useState(projects);

  if (projects !== trackedProjects) {
    setTrackedProjects(projects);
    setActiveIndex(0);
  } else if (activeIndex > maxIndex) {
    setActiveIndex(maxIndex);
  }

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [projects]);

  const scrollToIndex = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    const item = itemRefs.current[clamped];

    if (item && trackRef.current) {
      trackRef.current.scrollTo({
        left: item.offsetLeft,
        behavior: "smooth",
      });
    }

    setActiveIndex(clamped);
  }, [maxIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const offsets = itemRefs.current
        .map((item) => item?.offsetLeft ?? 0)
        .filter((_, index) => index <= maxIndex);

      if (!offsets.length) return;

      const scrollLeft = track.scrollLeft;
      let nearest = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      offsets.forEach((offset, index) => {
        const distance = Math.abs(scrollLeft - offset);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = index;
        }
      });

      setActiveIndex(nearest);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [maxIndex, projects.length, visibleCount]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(maxIndex);
    }
  }

  if (!projects.length) {
    return (
      <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-sm text-muted">
        No projects match this filter.
      </p>
    );
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Project carousel"
      className="relative"
    >
      <div className="flex items-stretch gap-3 md:gap-4">
        <button
          type="button"
          aria-label="Previous projects"
          aria-controls={`${carouselId}-track`}
          disabled={activeIndex === 0}
          onClick={() => scrollToIndex(activeIndex - 1)}
          className="hidden h-11 w-11 shrink-0 self-center items-center justify-center rounded-full border border-white/10 bg-card/95 text-text shadow-lg shadow-black/30 transition hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-35 md:flex"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ←
          </span>
        </button>

        <div
          id={`${carouselId}-track`}
          ref={trackRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="projects-carousel-track min-w-0 flex-1 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 pt-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#04060a] md:gap-4"
        >
          {projects.map((project, index) => (
            <div
              key={project.slug}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              className="w-full shrink-0 snap-start md:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)]"
              aria-label={`${index + 1} of ${projects.length}`}
            >
              <ProjectCard project={project} compact equalSize />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next projects"
          aria-controls={`${carouselId}-track`}
          disabled={activeIndex >= maxIndex}
          onClick={() => scrollToIndex(activeIndex + 1)}
          className="hidden h-11 w-11 shrink-0 self-center items-center justify-center rounded-full border border-white/10 bg-card/95 text-text shadow-lg shadow-black/30 transition hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-35 md:flex"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            →
          </span>
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 md:mt-5">
        <button
          type="button"
          aria-label="Previous projects"
          disabled={activeIndex === 0}
          onClick={() => scrollToIndex(activeIndex - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text transition hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
        >
          ←
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: pageCount }, (_, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to project slide ${index + 1}`}
                aria-current={selected ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
                className={[
                  "h-2.5 rounded-full transition focus:outline-none focus:ring-2 focus:ring-accent",
                  selected
                    ? "w-7 bg-accent"
                    : "w-2.5 bg-white/20 hover:bg-white/35",
                ].join(" ")}
              />
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next projects"
          disabled={activeIndex >= maxIndex}
          onClick={() => scrollToIndex(activeIndex + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-text transition hover:border-accent/40 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
        >
          →
        </button>
      </div>
    </section>
  );
}
