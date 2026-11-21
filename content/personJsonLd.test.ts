import { describe, expect, it } from "vitest";
import { personJsonLd, SITE_URL } from "@/content/personJsonLd";
import { profile } from "@/content/profile";

describe("Person JSON-LD", () => {
  it("uses only values stated on the site", () => {
    expect(personJsonLd).toEqual({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mark Roderick I. Salise",
      url: "https://markroderick.vercel.app/",
      jobTitle: "Junior Software Engineer",
      description: "React, TypeScript and Python.",
      sameAs: [
        "https://github.com/Tofuwuuu",
        "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/",
      ],
    });
    expect(personJsonLd.name).toBe(profile.name);
    expect(personJsonLd.description).toBe(profile.tagline);
    expect(SITE_URL).toBe("https://markroderick.vercel.app/");
    expect(JSON.stringify(personJsonLd)).not.toMatch(/[—–]/);
  });
});
