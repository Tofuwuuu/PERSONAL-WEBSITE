import type { StaticImageData } from "next/image";
import gymHero from "@/src/gym-app-tracker/hero.png";
import gymWorkout from "@/src/gym-app-tracker/workout.png";
import gymRoutines from "@/src/gym-app-tracker/routines.png";
import gymHistory from "@/src/gym-app-tracker/history-phone.png";
import gymProgress from "@/src/gym-app-tracker/progress.png";
import aiAnalytics from "@/src/ai-ops-assistant/analytics.png";
import smartdocInsights from "@/src/SmartDocAnalyzer/2.png";
import ecommerceAdmin from "@/src/Ecommerce/2.jpg";
import wallet2 from "@/src/OnChainWallet/2.png";
import wallet3 from "@/src/OnChainWallet/3.png";

export type CaseStudyScreen = {
  src: StaticImageData;
  alt: string;
  /** Only when it describes what is visibly on screen. */
  caption?: string;
  /** Tall phone shot: shown whole (contain) at a scale matching the desktop tiles. */
  portrait?: boolean;
};

/**
 * Real app screens per project slug, shown in the "What it does" grid.
 * The hero shot is the project's card image. Projects with their own case study
 * component (Hyperledger, Procurement, Collaborative) keep their existing galleries.
 */
/** Hero overrides where the card image does not crop cleanly to 16:9. */
export const caseStudyHeroes: Record<string, { src: StaticImageData; alt: string }> = {
  "gym-app-tracker": { src: gymHero, alt: "Gym App Tracker overview with stats, calendar and equipment" },
};

export const caseStudyScreens: Record<string, CaseStudyScreen[]> = {
  "gym-app-tracker": [
    {
      src: gymWorkout,
      alt: "Active workout with sets, weight and reps inputs, and the rest timer",
      caption: "Log each set with weight and reps. The rest timer starts on its own.",
    },
    {
      src: gymRoutines,
      alt: "Routines page listing saved Legs, Pull and Push splits",
      caption: "Save a routine once and reuse it for every session.",
    },
    {
      src: gymHistory,
      alt: "History list of completed sessions on a phone",
      caption: "Open any past session to see what you lifted.",
      portrait: true,
    },
    {
      src: gymProgress,
      alt: "Progress page with training volume, estimated 1RM and personal records",
      caption: "Track training volume, estimated one-rep max, and personal records over time.",
    },
  ],
  "ai-ops-assistant": [
    {
      src: aiAnalytics,
      alt: "AI Ops Archivist analytics insights",
      caption: "See tickets handled, approval rate, and average confidence, computed live from the tickets in the app.",
    },
  ],
  "smartdoc-analyzer": [
    {
      src: smartdocInsights,
      alt: "SmartDoc Analyzer document summary and compliance risk flags",
      caption: "Upload a contract and get a summary plus risk flags, like missing termination or liability clauses.",
    },
  ],
  "fashion-ecommerce-platform": [
    {
      src: ecommerceAdmin,
      alt: "Atelier Commerce storefront with featured products and prices",
      caption: "Browse the store like a shopper, with seeded products, variants and prices in pesos.",
    },
  ],
  "on-chain-wallet-risk-analyzer": [
    {
      src: wallet2,
      alt: "Wallet report with a low risk score",
      caption: "A wallet report with a 0 to 100 risk score, flagged activity, and a breakdown of what raised it.",
    },
    {
      src: wallet3,
      alt: "Wallet report with a critical risk score",
      caption: "A critical-risk wallet, flagged for blacklist ties and large sudden transfers. Share it or save it as a PDF.",
    },
  ],
};
