"use client";

import Image, { type StaticImageData } from "next/image";
import type { KeyboardEvent } from "react";
import { useId, useState } from "react";
import hyperledgerHomeImage from "@/src/hyperledger/1.png";
import hyperledgerAboutImage from "@/src/hyperledger/2.png";
import hyperledgerLoginImage from "@/src/hyperledger/login.png";
import hyperledgerStudentDashboardImage from "@/src/hyperledger/Student dashboard.png";
import hyperledgerAlumniProfileImage from "@/src/hyperledger/Alumni profile.png";
import hyperledgerMyDocumentsImage from "@/src/hyperledger/My Document.png";
import hyperledgerUploadDocumentImage from "@/src/hyperledger/Upload document.png";
import hyperledgerDocumentRequestImage from "@/src/hyperledger/Document request + download.png";
import hyperledgerAdminDashboardImage from "@/src/hyperledger/Admin Dashboard.png";
import hyperledgerAdminUserVerificationImage from "@/src/hyperledger/Admin User verification.png";
import hyperledgerAdminDocumentVerificationImage from "@/src/hyperledger/Admin Document Verication.png";
import hyperledgerAdminRequestManagementImage from "@/src/hyperledger/Admin Manage Document requests.png";

type FeatureScreen = {
  id: string;
  label: string;
  src: StaticImageData;
  alt: string;
  caption: string;
};

const featureScreens: FeatureScreen[] = [
  {
    id: "landing-page",
    label: "Home",
    src: hyperledgerHomeImage,
    alt: "Home page for the CvSU-Carmona alumni portal",
    caption:
      "The public landing page introduces the alumni portal and directs users toward document requests and verification.",
  },
  {
    id: "about-portal",
    label: "About",
    src: hyperledgerAboutImage,
    alt: "About page for the CvSU-Carmona alumni portal",
    caption:
      "The about page frames the portal around alumni services, admin-reviewed records, and trusted academic credentials.",
  },
  {
    id: "login-auth",
    label: "Login & Auth",
    src: hyperledgerLoginImage,
    alt: "Login screen for the Hyperledger alumni document verification system",
    caption:
      "Role-based login separates alumni and administrative workflows, keeping verification actions tied to authenticated users.",
  },
  {
    id: "student-dashboard",
    label: "Student Dashboard",
    src: hyperledgerStudentDashboardImage,
    alt: "Student dashboard showing profile, document status, and document journey steps",
    caption:
      "Alumni can see profile status, document shortcuts, and the full document journey from profile completion to released downloads.",
  },
  {
    id: "alumni-profile",
    label: "Alumni Profile",
    src: hyperledgerAlumniProfileImage,
    alt: "Alumni profile page with profile completion and personal information",
    caption:
      "The profile workspace keeps personal, educational, eligibility, employment, and skills records organized for verification.",
  },
  {
    id: "my-documents",
    label: "My Documents",
    src: hyperledgerMyDocumentsImage,
    alt: "Alumni documents page with uploaded verified documents",
    caption:
      "Alumni can manage uploaded credentials, review verification status, and access document actions from a single documents table.",
  },
  {
    id: "upload-hashing",
    label: "Upload & Hashing",
    src: hyperledgerUploadDocumentImage,
    alt: "Document upload screen for alumni verification",
    caption:
      "Uploaded documents are prepared for hashing before verification, so the system can detect changes between the stored record and the submitted file.",
  },
  {
    id: "blockchain-verification",
    label: "Blockchain Verification",
    src: hyperledgerAdminDocumentVerificationImage,
    alt: "Admin document verification screen with blockchain-backed status checks",
    caption:
      "Administrators can verify document records against the Hyperledger ledger, making tampering visible without relying on manual inspection alone.",
  },
  {
    id: "admin-dashboard",
    label: "Admin Dashboard",
    src: hyperledgerAdminDashboardImage,
    alt: "Admin dashboard for the Hyperledger alumni document verification system",
    caption:
      "The dashboard gives registrar staff a single view of verification volume, pending work, and system activity for faster day-to-day review.",
  },
  {
    id: "request-management",
    label: "Request Management",
    src: hyperledgerAdminRequestManagementImage,
    alt: "Admin document requests management page with request status filters",
    caption:
      "Registrar staff can filter and review document requests by status before approving, rejecting, or releasing credentials.",
  },
  {
    id: "audit-trail",
    label: "Audit Trail",
    src: hyperledgerAdminUserVerificationImage,
    alt: "Admin user verification screen showing verification records",
    caption:
      "Verification activity is traceable through administrative records, giving stakeholders a clearer audit trail for document requests and approvals.",
  },
  {
    id: "request-workflow",
    label: "Request Workflow",
    src: hyperledgerDocumentRequestImage,
    alt: "Document request and download workflow for alumni users",
    caption:
      "Alumni can request and download verified documents through a guided workflow, reducing the back-and-forth normally handled by the registrar.",
  },
];

const impactItems = [
  {
    value: "CvSU-Carmona",
    label: "Deployed as a client-facing capstone for Cavite State University - Carmona Campus.",
  },
  {
    value: "Tamper checks",
    label: "Made document changes detectable through hash comparison and ledger-backed verification.",
  },
  {
    value: "Registrar flow",
    label: "Reduced manual verification bottlenecks by centralizing requests, review, and audit records.",
  },
];

export function HyperledgerCaseStudy() {
  return (
    <>
      <ArchitectureOverview />
      <FeatureShowcase />
      <ResultsImpact />
    </>
  );
}

function ArchitectureOverview() {
  const layers = ["Frontend", "Backend API", "Hyperledger Fabric", "MongoDB"];

  return (
    <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-text">
        Architecture Overview
      </h2>
      <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted">
        The system uses a web frontend for alumni and registrar workflows, a backend API for document requests and verification logic, Hyperledger Fabric for tamper-evident ledger records, and MongoDB for application data. When a document is submitted, the backend hashes the file, stores request metadata, commits or checks the hash through the Fabric layer, then returns a verification result to the user-facing screens.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {layers.map((layer, index) => (
          <div
            key={layer}
            className="relative rounded-2xl border border-white/10 bg-black/20 p-4 shadow-lg shadow-black/20"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm font-semibold text-text">{layer}</p>
            {index < layers.length - 1 ? (
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-accent/50 md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
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
        Key flows from the Hyperledger blockchain verification project.
      </p>

      <div
        role="tablist"
        aria-label="Hyperledger feature screens"
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

function ResultsImpact() {
  return (
    <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-text">
        Results / Impact
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {impactItems.map((item) => (
          <div
            key={item.value}
            className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-lg shadow-black/20"
          >
            <p className="text-lg font-semibold text-accent">{item.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
