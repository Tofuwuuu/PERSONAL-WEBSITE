import type { StaticImageData } from "next/image";
import hyperledgerCardImage from "@/src/hyperledger/1.png";
import procurementCardImage from "@/src/procurement/Admin dashboard.png";
import ecommerceCardImage from "@/src/Ecommerce/1.jpg";
import collaborativeCardImage from "@/src/collaborative Real-Time Document Editor/Main page.png";
import smartdocCardImage from "@/src/SmartDocAnalyzer/1.png";
import todoListCardImage from "@/src/todolist/1.jpg";
import calculatorCardImage from "@/src/calculator/calculator.jpg";
import onChainWalletCardImage from "@/src/OnChainWallet/1.png";

/** Card thumbnail per project slug (folder names under `src/`). */
export const projectCardImages: Record<
  string,
  { src: StaticImageData; alt: string }
> = {
  "hyperledger-blockchain-verification": {
    src: hyperledgerCardImage,
    alt: "Hyperledger blockchain verification preview",
  },
  "procurement-blockchain-system": {
    src: procurementCardImage,
    alt: "Procurement blockchain system admin dashboard preview",
  },
  "fashion-ecommerce-platform": {
    src: ecommerceCardImage,
    alt: "Fashion e-commerce storefront preview",
  },
  "collaborative-realtime-document-editor": {
    src: collaborativeCardImage,
    alt: "Collaborative real-time document editor preview",
  },
  "smartdoc-analyzer": {
    src: smartdocCardImage,
    alt: "SmartDoc Analyzer upload dashboard preview",
  },
  "todo-list-vanilla-js": {
    src: todoListCardImage,
    alt: "To-do list app vanilla JavaScript preview",
  },
  calculator: {
    src: calculatorCardImage,
    alt: "Calculator app preview",
  },
  "on-chain-wallet-risk-analyzer": {
    src: onChainWalletCardImage,
    alt: "On-chain wallet risk analyzer preview",
  },
};

export function getProjectCardImage(slug: string) {
  return projectCardImages[slug] ?? null;
}
