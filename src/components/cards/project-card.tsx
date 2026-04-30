import { ProjectVisual } from "@/components/visuals/project-visual";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-[#dce4dc] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <ProjectVisual type={project.visual} />
      <div className="mt-5">
        <div className="flex flex-wrap gap-2">
          {project.category.map((category) => (
            <span
              key={category}
              className="rounded-md bg-[#edf6ef] px-2.5 py-1 text-xs font-semibold text-[#2b6f63]"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-normal text-[#10223a]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-[#8b6b2d]">
          {project.role} | {project.timeline}
        </p>
        <p className="mt-3 text-sm leading-6 text-[#62717a]">{project.summary}</p>
        <details className="mt-4 group">
          <summary className="cursor-pointer list-none text-sm font-semibold text-[#2b6f63] outline-none focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2b8c7f]">
            <span className="group-open:hidden">View details</span>
            <span className="hidden group-open:inline">Hide details</span>
          </summary>
          <div className="mt-4 space-y-4 border-t border-[#e3e9e2] pt-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#39515c]">
                Context
              </p>
              <p className="mt-2 text-sm leading-6 text-[#62717a]">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#39515c]">
                Methods
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.methods.map((method) => (
                  <span
                    key={method}
                    className="rounded-md border border-[#d7ddd4] px-2.5 py-1 text-xs text-[#526170]"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm leading-6 text-[#526170]">
              <span className="font-semibold text-[#10223a]">Outcome: </span>
              {project.outcome}
            </p>
            {project.note ? (
              <p className="rounded-md border border-[#ead8a7] bg-[#fff8e8] px-3 py-2 text-xs leading-5 text-[#6c501d]">
                {project.note}
              </p>
            ) : null}
          </div>
        </details>
      </div>
    </article>
  );
}
