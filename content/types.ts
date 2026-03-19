export type ExternalLink = {
  label: string;
  href: string;
};

export type ProjectLink = ExternalLink & {
  kind: "repo" | "demo" | "case-study";
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  cover?: {
    alt: string;
    src: string;
    width: number;
    height: number;
  };
};

