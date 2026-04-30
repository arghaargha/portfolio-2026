import { describe, expect, it } from "vitest";
import { filterProjects } from "./project-filters";
import type { Project } from "@/types/portfolio";

const projects: Project[] = [
  {
    slug: "genomics",
    title: "Environmental genomics",
    category: ["Research", "Bioinformatics", "Sustainability"],
    institution: "KIIT School of Biotechnology",
    timeline: "Aug 2025 - Present",
    role: "Undergraduate Research Trainee",
    summary: "Genomic data analysis.",
    problem: "Interpret environmental sequence data.",
    methods: ["Python"],
    outcome: "Ongoing research exposure.",
    status: "Ongoing",
    visual: "genomics",
  },
  {
    slug: "vertical-farming",
    title: "IoT vertical farming",
    category: ["IoT/AI", "Sustainability"],
    institution: "KIIT University",
    timeline: "2024 - 2025",
    role: "Student Intern",
    summary: "Sensor-enabled farming system.",
    problem: "Support resource-efficient farming.",
    methods: ["NodeMCU"],
    outcome: "Patent contribution.",
    status: "Patent issued",
    visual: "farm",
  },
];

describe("filterProjects", () => {
  it("returns every project for the All filter", () => {
    expect(filterProjects(projects, "All")).toHaveLength(2);
  });

  it("returns only projects matching the selected category", () => {
    const filtered = filterProjects(projects, "Bioinformatics");

    expect(filtered).toHaveLength(1);
    expect(filtered[0].slug).toBe("genomics");
  });

  it("keeps projects that match secondary categories", () => {
    const filtered = filterProjects(projects, "Sustainability");

    expect(filtered.map((project) => project.slug)).toEqual([
      "genomics",
      "vertical-farming",
    ]);
  });
});
