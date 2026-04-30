export type BioHeroModuleId =
  | "genomic-input"
  | "dna-core"
  | "vertical-farming"
  | "sensor-layer"
  | "ai-decision"
  | "sustainable-biotech";

export type BioHeroModule = {
  id: BioHeroModuleId;
  title: string;
  subtitle: string;
  description: string;
  scrollTarget?: string;
  ariaLabel: string;
};

export const defaultBioHeroModuleId: BioHeroModuleId = "dna-core";

export const bioHeroModules: BioHeroModule[] = [
  {
    id: "genomic-input",
    title: "Genomic Input",
    subtitle: "Sequence data and bioinformatics workflows",
    description:
      "Sequence data, genome mapping, and computational biology workflows form the foundation of this portfolio's bioinformatics direction.",
    scrollTarget: "#research",
    ariaLabel: "Open Genomic Input information",
  },
  {
    id: "dna-core",
    title: "DNA Core",
    subtitle: "Biotechnology foundation",
    description:
      "Represents biotechnology fundamentals, molecular biology, genetics, and biological data interpretation.",
    scrollTarget: "#about",
    ariaLabel: "Open DNA Core information",
  },
  {
    id: "vertical-farming",
    title: "Vertical Farming",
    subtitle: "Sustainable IoT systems",
    description:
      "Represents sustainable agriculture, controlled environments, IoT monitoring, and plant-growth data systems.",
    scrollTarget: "#research",
    ariaLabel: "Open Vertical Farming information",
  },
  {
    id: "sensor-layer",
    title: "Sensor Layer",
    subtitle: "Environmental data collection",
    description:
      "Represents sensor-based data collection from environmental systems such as humidity, temperature, soil, and growth conditions.",
    scrollTarget: "#research",
    ariaLabel: "Open Sensor Layer information",
  },
  {
    id: "ai-decision",
    title: "AI Decision",
    subtitle: "AI-assisted interpretation",
    description:
      "Represents AI-assisted interpretation of biological and environmental data for smarter decision-making.",
    scrollTarget: "#research",
    ariaLabel: "Open AI Decision information",
  },
  {
    id: "sustainable-biotech",
    title: "Sustainable Biotech",
    subtitle: "Applied life sciences outcome",
    description:
      "Represents the final mission of combining biotechnology, environmental awareness, and AI-powered systems for sustainable life sciences.",
    scrollTarget: "#achievements",
    ariaLabel: "Open Sustainable Biotech information",
  },
];

export function getBioHeroModule(id: BioHeroModuleId): BioHeroModule {
  return (
    bioHeroModules.find((module) => module.id === id) ??
    bioHeroModules.find((module) => module.id === defaultBioHeroModuleId) ??
    bioHeroModules[0]
  );
}

export const aiDecisionStatuses = ["Analyzing", "Interpreting", "Ready"] as const;
