"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/cards/project-card";
import { filterProjects, PROJECT_FILTERS, type ProjectFilter } from "@/lib/project-filters";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/cn";

export function FilterableProjects({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<ProjectFilter>("All");
  const visibleProjects = filterProjects(projects, selected);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Project filters">
        {PROJECT_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setSelected(filter)}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b8c7f]",
              selected === filter
                ? "border-[#113f35] bg-[#113f35] text-white"
                : "border-[#d7ddd4] bg-white text-[#526170] hover:border-[#78a88f]",
            )}
            aria-pressed={selected === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
