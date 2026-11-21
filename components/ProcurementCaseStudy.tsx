"use client";

import Image, { type StaticImageData } from "next/image";
import type { KeyboardEvent } from "react";
import { useId, useState } from "react";
import procurementLoginImage from "@/src/procurement/login.png";
import procurementAdminDashboardImage from "@/src/procurement/Admin dashboard.png";
import procurementPurchaseRequestImage from "@/src/procurement/Purchase Request.png";
import procurementAbstractOfCanvassImage from "@/src/procurement/Abstract of Canvass.png";
import procurementSupplierSearchImage from "@/src/procurement/Supplier Search.png";
import procurementPurchaseOrderImage from "@/src/procurement/Purchase Order.png";
import procurementInventoryCustodianSlipImage from "@/src/procurement/Inventory Custodian Slip.png";
import procurementInventoryTransferReportImage from "@/src/procurement/Invetory Transfer Report.png";
import procurementPropertyAcknowledgementReceiptImage from "@/src/procurement/Property Acknoledgement Receipt.png";
import procurementPropertyTransferReportImage from "@/src/procurement/Property Transfer report.png";
import procurementPropertyReturnSlipImage from "@/src/procurement/Property return slip.png";
import procurementInspectionImage from "@/src/procurement/Inspection.png";
import procurementWasteMaterialsReportImage from "@/src/procurement/Waste materials report.png";
import procurementBlockchainImage from "@/src/procurement/Blockchain.png";

type FeatureScreen = {
  id: string;
  label: string;
  src: StaticImageData;
  alt: string;
  caption: string;
};

const featureScreens: FeatureScreen[] = [
  {
    id: "login-auth",
    label: "Login & Auth",
    src: procurementLoginImage,
    alt: "Procurement blockchain system login screen",
    caption:
      "Role-based login routes staff into the procurement admin workspace with authenticated access to each workflow stage.",
  },
  {
    id: "admin-dashboard",
    label: "Admin Dashboard",
    src: procurementAdminDashboardImage,
    alt: "Procurement blockchain system admin dashboard",
    caption:
      "The dashboard summarizes procurement activity, pending work, and system status so administrators can monitor the full lifecycle at a glance.",
  },
  {
    id: "purchase-request",
    label: "Purchase Request",
    src: procurementPurchaseRequestImage,
    alt: "Procurement blockchain system purchase request form",
    caption:
      "Purchase requests capture item details, justification, and routing information before approvals and supplier selection begin.",
  },
  {
    id: "abstract-of-canvass",
    label: "Abstract of Canvass",
    src: procurementAbstractOfCanvassImage,
    alt: "Procurement blockchain system abstract of canvass",
    caption:
      "The abstract of canvass compares supplier quotes and selected bids to document procurement decisions with audit-ready detail.",
  },
  {
    id: "supplier-search",
    label: "Supplier Search",
    src: procurementSupplierSearchImage,
    alt: "Procurement blockchain system supplier search",
    caption:
      "Supplier search helps staff find approved vendors and attach the right supplier records to purchase requests and orders.",
  },
  {
    id: "purchase-order",
    label: "Purchase Order",
    src: procurementPurchaseOrderImage,
    alt: "Procurement blockchain system purchase order",
    caption:
      "Issued purchase orders formalize approved procurement actions and connect downstream receiving, inspection, and payment steps.",
  },
  {
    id: "inventory-custodian-slip",
    label: "Custodian Slip",
    src: procurementInventoryCustodianSlipImage,
    alt: "Procurement blockchain system inventory custodian slip",
    caption:
      "Inventory custodian slips record custody handoffs so assets remain traceable after delivery and acceptance.",
  },
  {
    id: "inventory-transfer-report",
    label: "Transfer Report",
    src: procurementInventoryTransferReportImage,
    alt: "Procurement blockchain system inventory transfer report",
    caption:
      "Inventory transfer reports document movement between custodians or locations while preserving accountability across departments.",
  },
  {
    id: "property-acknowledgement",
    label: "Acknowledgement",
    src: procurementPropertyAcknowledgementReceiptImage,
    alt: "Procurement blockchain system property acknowledgement receipt",
    caption:
      "Property acknowledgement receipts confirm receipt of assets and establish the responsible custodian for each item.",
  },
  {
    id: "property-transfer",
    label: "Property Transfer",
    src: procurementPropertyTransferReportImage,
    alt: "Procurement blockchain system property transfer report",
    caption:
      "Property transfer reports track reassignment of accountable property between offices, units, or personnel.",
  },
  {
    id: "property-return",
    label: "Property Return",
    src: procurementPropertyReturnSlipImage,
    alt: "Procurement blockchain system property return slip",
    caption:
      "Property return slips close the loop when assets are returned, supporting accurate inventory and disposal records.",
  },
  {
    id: "inspection",
    label: "Inspection",
    src: procurementInspectionImage,
    alt: "Procurement blockchain system inspection screen",
    caption:
      "Inspection and acceptance screens capture delivery verification before items are recorded as received and ready for use.",
  },
  {
    id: "waste-materials",
    label: "Waste Materials",
    src: procurementWasteMaterialsReportImage,
    alt: "Procurement blockchain system waste materials report",
    caption:
      "Waste materials reports document disposal accountability, including damaged items, proceeds, approvals, and inspection details.",
  },
  {
    id: "blockchain-explorer",
    label: "Blockchain Explorer",
    src: procurementBlockchainImage,
    alt: "Procurement blockchain system ledger view",
    caption:
      "The blockchain event explorer surfaces immutable on-chain records for approvals, purchase orders, receiving, and payments.",
  },
];

export function ProcurementCaseStudy() {
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
        Key flows from the procurement blockchain system workflow.
      </p>

      <div
        role="tablist"
        aria-label="Procurement feature screens"
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
