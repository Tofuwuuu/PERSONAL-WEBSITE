"use client";

import Image, { type StaticImageData } from "next/image";
import type { KeyboardEvent } from "react";
import { useId, useState } from "react";
import collaborativeMainPageImage from "@/src/collaborative Real-Time Document Editor/Main page.png";
import collaborativeDocumentPageImage from "@/src/collaborative Real-Time Document Editor/Document page.png";

type FeatureScreen = {
  id: string;
  label: string;
  src: StaticImageData;
  alt: string;
  caption: string;
};

const featureScreens: FeatureScreen[] = [
  {
    id: "main-page",
    label: "Main Page",
    src: collaborativeMainPageImage,
    alt: "Collaborative document editor main page",
    caption:
      "The landing page lets users start a new document or join an existing one by ID, keeping entry into the editor simple and fast.",
  },
  {
    id: "document-page",
    label: "Document Page",
    src: collaborativeDocumentPageImage,
    alt: "Collaborative document editor workspace",
    caption:
      "The document workspace combines live editing with people and history sidebars, so collaborators can write together and track changes in real time.",
  },
];

export function CollaborativeCaseStudy() {
  return <FeatureShowcase />;
}

function FeatureShowcase() {
  const [activeId, setActiveId] = useState(featureScreens[0].id);
  const baseId = useId();
  const activeScreen =
    featureScreens.find((screen) => screen.id === activeId) ?? featureScreens[0];
  const activeIndex = featureScreens.findIndex((screen) => screen.id === activeId);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const lastIndex = featureScreens.length - 1;
    const nextIndex =
      event.key === "ArrowRight"
        ? activeIndex === lastIndex
          ? 0
          : activeIndex + 1
        : event.key === "ArrowLeft"
          ? activeIndex <= 0
            ? lastIndex
            : activeIndex - 1
          : null;

    if (nextIndex === null) return;
    event.preventDefault();
    setActiveId(featureScreens[nextIndex].id);
  }

  return (
    <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-text">
        Feature Showcase
      </h2>
      <p className="mt-2 text-sm text-muted">
        Key flows from the collaborative real-time document editor.
      </p>

      <div
        role="tablist"
        aria-label="Collaborative editor feature screens"
        className="mt-6 hidden flex-wrap gap-2 md:flex"
      >
        {featureScreens.map((screen) => {
          const selected = screen.id === activeId;

          return (
            <button
              key={screen.id}
              id={`${baseId}-${screen.id}-tab`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-${screen.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(screen.id)}
              onKeyDown={handleTabKeyDown}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition focus:outline-none focus:ring-2 focus:ring-accent",
                selected
                  ? "bg-accent text-bg shadow-sm shadow-accent/20 ring-accent/50"
                  : "bg-white/[0.045] text-muted ring-white/10 hover:bg-white/[0.08] hover:text-text",
              ].join(" ")}
            >
              {screen.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 hidden md:block">
        <FeaturePanel baseId={baseId} screen={activeScreen} priority />
      </div>

      <div className="mt-6 space-y-3 md:hidden">
        {featureScreens.map((screen) => {
          const selected = screen.id === activeId;

          return (
            <div
              key={screen.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
            >
              <button
                type="button"
                aria-expanded={selected}
                aria-controls={`${baseId}-${screen.id}-mobile-panel`}
                onClick={() => setActiveId(screen.id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold text-text focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              >
                <span>{screen.label}</span>
                <span className="text-lg leading-none text-accent/80">
                  {selected ? "-" : "+"}
                </span>
              </button>
              {selected ? (
                <div id={`${baseId}-${screen.id}-mobile-panel`} className="px-3 pb-3">
                  <FeaturePanel baseId={baseId} screen={screen} compact />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-2" aria-label="Screen previews">
        {featureScreens.map((screen) => {
          const selected = screen.id === activeId;

          return (
            <button
              key={screen.id}
              type="button"
              onClick={() => setActiveId(screen.id)}
              className={[
                "group min-w-36 overflow-hidden rounded-xl border bg-black/30 text-left transition focus:outline-none focus:ring-2 focus:ring-accent",
                selected
                  ? "border-accent/70 shadow-lg shadow-accent/10"
                  : "border-white/10 hover:border-white/20",
              ].join(" ")}
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                className="aspect-video w-full object-cover object-top opacity-80 transition group-hover:opacity-100"
                loading="lazy"
                sizes="144px"
              />
              <span className="block truncate border-t border-white/10 px-3 py-2 text-xs font-medium text-muted">
                {screen.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function FeaturePanel({
  baseId,
  screen,
  priority = false,
  compact = false,
}: {
  baseId: string;
  screen: FeatureScreen;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <figure
      id={`${baseId}-${screen.id}-panel`}
      role="tabpanel"
      aria-labelledby={`${baseId}-${screen.id}-tab`}
      className={[
        "animate-[fadeIn_220ms_ease-out] overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-2xl shadow-black/45",
        compact ? "" : "mx-auto max-w-6xl",
      ].join(" ")}
    >
      <Image
        key={screen.id}
        src={screen.src}
        alt={screen.alt}
        className="h-auto w-full object-cover object-top"
        loading={priority ? undefined : "lazy"}
        priority={priority}
        sizes="(max-width: 768px) 92vw, 1040px"
      />
      <figcaption className="border-t border-white/10 px-4 py-4 text-sm leading-relaxed text-muted">
        {screen.caption}
      </figcaption>
    </figure>
  );
}
