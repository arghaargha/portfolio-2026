import { FilterableProjects } from "@/components/sections/filterable-projects";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { projects, skillDomains } from "@/data/portfolio";

export const metadata = {
  title: "Research & Projects",
  description:
    "Research and project portfolio across environmental genomics, bioinformatics, IoT, AI/ML, structural biology, and laboratory training.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Projects"
        title="Environmental genomics, genomic data analysis, sustainable systems, and advanced training."
        description="The project archive is structured around context, problem, role, methods, and learning outcome, keeping the work credible and easy to scan."
        aside={<ProjectVisual type="genomics" />}
      />

      <SectionShell className="bg-white">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Project Archive"
            title="Filter by domain and expand each project for methods and outcomes."
          />
        </div>
        <FilterableProjects projects={projects} />
      </SectionShell>

      <SectionShell className="bg-[#fbfaf5]">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Tools & Techniques"
            title="The technical foundation behind the project work."
          />
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {skillDomains.slice(0, 3).map((domain) => (
            <article
              key={domain.domain}
              className="rounded-lg border border-[#dce4dc] bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#10223a]">
                {domain.domain}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#62717a]">
                {domain.evidence}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[#edf6ef] px-2.5 py-1 text-xs font-semibold text-[#2b6f63]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
