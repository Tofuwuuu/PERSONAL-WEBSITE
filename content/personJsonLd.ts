import { profile } from "./profile";

export const SITE_URL = "https://markroderick.vercel.app/";

/** schema.org Person for the homepage. Every value comes from content already on the site. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Roderick Salise",
  url: SITE_URL,
  jobTitle: profile.role,
  sameAs: profile.links.map((link) => link.href),
} as const;
