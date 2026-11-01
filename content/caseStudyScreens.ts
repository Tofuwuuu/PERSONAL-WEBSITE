import type { StaticImageData } from "next/image";
import gymWorkout from "@/src/gym-app-tracker/workout.png";
import gymRoutines from "@/src/gym-app-tracker/routines.png";
import gymHistory from "@/src/gym-app-tracker/history-phone.png";
import gymProgress from "@/src/gym-app-tracker/progress.png";
import aiInbox from "@/src/ai-ops-assistant/inbox.png";
import aiTicket from "@/src/ai-ops-assistant/ticket-detail.png";
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
  /** Tall phone shots are shown whole instead of cropped. */
  portrait?: boolean;
};

/**
 * Real app screens per project slug, shown in the "What it does" grid.
 * The hero shot is the project's card image. Projects with their own case study
 * component (Hyperledger, Procurement, Collaborative) keep their existing galleries.
 */
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
    { src: gymProgress, alt: "Progress page with training volume, estimated 1RM and personal records" },
  ],
  "ai-ops-assistant": [
    { src: aiInbox, alt: "AI Ops Archivist inbox" },
    { src: aiTicket, alt: "AI Ops Archivist ticket detail" },
    { src: aiAnalytics, alt: "AI Ops Archivist analytics" },
  ],
  "smartdoc-analyzer": [{ src: smartdocInsights, alt: "SmartDoc Analyzer document insights and entities" }],
  "fashion-ecommerce-platform": [{ src: ecommerceAdmin, alt: "Fashion e-commerce admin dashboard preview" }],
  "on-chain-wallet-risk-analyzer": [
    { src: wallet2, alt: "Wallet risk score breakdown" },
    { src: wallet3, alt: "Shareable wallet risk report" },
  ],
};
