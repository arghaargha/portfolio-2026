export const heroVisualCanvas = {
  width: 760,
  height: 520,
  viewBox: "0 0 760 520",
  aspectRatio: 760 / 520,
} as const;

export const heroVisualLayers = [
  {
    id: "genomic-data",
    label: "Genomic data",
    description: "Sequence reads and expression-style matrix",
  },
  {
    id: "dna-helix",
    label: "DNA helix",
    description: "Wet-lab biology and molecular foundations",
  },
  {
    id: "vertical-farm",
    label: "Vertical farm",
    description: "IoT sensing for sustainable systems",
  },
  {
    id: "ai-decision",
    label: "AI decision",
    description: "Computational interpretation layer",
  },
] as const;

export const heroVisualPipelines = [
  "Sequence Data",
  "Sensor Layer",
  "AI Decision",
  "Sustainable Biotech",
] as const;

export const sequenceRows = [
  "ATG CCA GTT AAC TGA CGA",
  "GCT TTA AAG TCC GAT CCA",
  "RNA MAP  0.72  0.51  0.88",
  "SNP IDX  142  219  377",
  "META OTU 18A  24F  31C",
  "QC PASS  MODEL READY",
] as const;

export type MatrixHue = "gold" | "purple" | "teal";

export const matrixCells: Array<{
  id: string;
  intensity: number;
  hue: MatrixHue;
}> = Array.from({ length: 36 }, (_, index) => ({
  id: `cell-${index}`,
  intensity: 0.25 + ((index * 7) % 10) / 14,
  hue:
    index % 6 === 0
      ? "gold"
      : index % 4 === 0
        ? "purple"
        : "teal",
}));

export const farmLayers = [
  { id: "canopy", label: "Light", health: 92 },
  { id: "root", label: "Moisture", health: 76 },
  { id: "soil", label: "Soil", health: 84 },
] as const;
