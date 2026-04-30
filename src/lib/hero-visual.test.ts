import { describe, expect, it } from "vitest";
import {
  heroVisualCanvas,
  heroVisualLayers,
  heroVisualPipelines,
  sequenceRows,
} from "./hero-visual";

describe("hero visual model", () => {
  it("communicates DNA, genomic data, vertical farming, and AI in one scene", () => {
    expect(heroVisualLayers.map((layer) => layer.id)).toEqual([
      "genomic-data",
      "dna-helix",
      "vertical-farm",
      "ai-decision",
    ]);
  });

  it("keeps the hero pipeline concise and portfolio-specific", () => {
    expect(heroVisualPipelines).toEqual([
      "Sequence Data",
      "Sensor Layer",
      "AI Decision",
      "Sustainable Biotech",
    ]);
  });

  it("uses short genomic sequence rows suitable for the visual panel", () => {
    expect(sequenceRows).toHaveLength(6);
    expect(sequenceRows.every((row) => row.length <= 34)).toBe(true);
  });

  it("defines a scalable SVG canvas instead of a fixed-size image layout", () => {
    expect(heroVisualCanvas.viewBox).toBe("0 0 760 520");
    expect(heroVisualCanvas.aspectRatio).toBeCloseTo(760 / 520, 3);
  });
});
