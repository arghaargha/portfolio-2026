export type ProjectCategory =
  | "Bioinformatics"
  | "IoT/AI"
  | "Wet Lab"
  | "Training"
  | "Leadership"
  | "Sustainability"
  | "Structural Biology"
  | "Research";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory[];
  institution: string;
  supervisor?: string;
  timeline: string;
  role: string;
  summary: string;
  problem: string;
  methods: string[];
  outcome: string;
  status: string;
  visual: "genomics" | "farm" | "microscopy" | "lab" | "leadership";
  note?: string;
};

export type ContactFormInput = {
  name?: string;
  email?: string;
  organization?: string;
  reason?: string;
  message?: string;
  website?: string;
};

export type ContactValidationResult = {
  ok: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
};

export type NavItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

export type Achievement = {
  title: string;
  type: "Patent" | "Certification" | "Workshop" | "Academic" | "Training";
  issuer: string;
  date: string;
  identifier?: string;
  description: string;
  skills: string[];
};
