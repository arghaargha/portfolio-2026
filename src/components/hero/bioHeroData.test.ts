import { describe, expect, it } from "vitest";
import {
  bioHeroModules,
  defaultBioHeroModuleId,
  getBioHeroModule,
} from "./bioHeroData";

describe("bio hero modules", () => {
  it("defines the six required interactive modules in order", () => {
    expect(bioHeroModules.map((module) => module.id)).toEqual([
      "genomic-input",
      "dna-core",
      "vertical-farming",
      "sensor-layer",
      "ai-decision",
      "sustainable-biotech",
    ]);
  });

  it("uses DNA Core as the default active module", () => {
    expect(defaultBioHeroModuleId).toBe("dna-core");
    expect(getBioHeroModule(defaultBioHeroModuleId).title).toBe("DNA Core");
  });

  it("keeps every module accessible and connected to a page section", () => {
    for (const moduleInfo of bioHeroModules) {
      expect(moduleInfo.title.length).toBeGreaterThan(3);
      expect(moduleInfo.subtitle.length).toBeGreaterThan(8);
      expect(moduleInfo.description.length).toBeGreaterThan(40);
      expect(moduleInfo.scrollTarget).toMatch(/^#/);
      expect(moduleInfo.ariaLabel).toContain(moduleInfo.title);
    }
  });
});
