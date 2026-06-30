import Image, { type StaticImageData } from "next/image";
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

type ProcurementScreen = {
  src: StaticImageData;
  caption: string;
  alt: string;
};

const procurementScreens: ProcurementScreen[] = [
  {
    src: procurementLoginImage,
    caption: "Login",
    alt: "Procurement blockchain system login screen",
  },
  {
    src: procurementAdminDashboardImage,
    caption: "Admin dashboard",
    alt: "Procurement blockchain system admin dashboard",
  },
  {
    src: procurementPurchaseRequestImage,
    caption: "Purchase Request",
    alt: "Procurement blockchain system purchase request form",
  },
  {
    src: procurementAbstractOfCanvassImage,
    caption: "Abstract of Canvass",
    alt: "Procurement blockchain system abstract of canvass",
  },
  {
    src: procurementSupplierSearchImage,
    caption: "Supplier Search",
    alt: "Procurement blockchain system supplier search",
  },
  {
    src: procurementPurchaseOrderImage,
    caption: "Purchase Order",
    alt: "Procurement blockchain system purchase order",
  },
  {
    src: procurementInventoryCustodianSlipImage,
    caption: "Inventory Custodian Slip",
    alt: "Procurement blockchain system inventory custodian slip",
  },
  {
    src: procurementInventoryTransferReportImage,
    caption: "Invetory Transfer Report",
    alt: "Procurement blockchain system inventory transfer report",
  },
  {
    src: procurementPropertyAcknowledgementReceiptImage,
    caption: "Property Acknoledgement Receipt",
    alt: "Procurement blockchain system property acknowledgement receipt",
  },
  {
    src: procurementPropertyTransferReportImage,
    caption: "Property Transfer report",
    alt: "Procurement blockchain system property transfer report",
  },
  {
    src: procurementPropertyReturnSlipImage,
    caption: "Property return slip",
    alt: "Procurement blockchain system property return slip",
  },
  {
    src: procurementInspectionImage,
    caption: "Inspection",
    alt: "Procurement blockchain system inspection screen",
  },
  {
    src: procurementWasteMaterialsReportImage,
    caption: "Waste materials report",
    alt: "Procurement blockchain system waste materials report",
  },
  {
    src: procurementBlockchainImage,
    caption: "Blockchain",
    alt: "Procurement blockchain system ledger view",
  },
];

export function ProcurementCaseStudy() {
  return (
    <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-text">
        Project Screens
      </h2>
      <p className="mt-2 text-sm text-muted">
        Key views from the procurement blockchain system workflow.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {procurementScreens.map((screen) => (
          <figure
            key={screen.caption}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black/20"
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              className="h-auto w-full object-cover object-top"
              priority={screen.caption === "Login"}
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
              {screen.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
