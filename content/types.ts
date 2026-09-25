export type ExternalLink = {
  label: string;
  href: string;
};

export type ProjectLink = ExternalLink & {
  kind: "repo" | "demo" | "video" | "case-study";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  madeAt?: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  featured?: boolean;
  placeholder?: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
};
