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
  category: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  featured?: boolean;
  placeholder?: boolean;
};
