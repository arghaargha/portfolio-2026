import type { Project, ProjectCategory } from "@/types/portfolio";

export const PROJECT_FILTERS = [
  "All",
  "Bioinformatics",
  "IoT/AI",
  "Wet Lab",
  "Training",
  "Leadership",
  "Sustainability",
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export function filterProjects(
  projects: Project[],
  selected: ProjectFilter,
): Project[] {
  if (selected === "All") {
    return projects;
  }

  return projects.filter((project) =>
    project.category.includes(selected as ProjectCategory),
  );
}
