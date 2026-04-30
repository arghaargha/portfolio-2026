import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ProjectVisual } from "@/components/visuals/project-visual";
import { leadership } from "@/data/portfolio";

export const metadata = {
  title: "Leadership",
  description:
    "BIOGENIX - AI & Biotechnology Club leadership profile for Antara Chakraborty.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={leadership.title}
        description={`${leadership.institution}. ${leadership.mission} ${leadership.note}`}
        aside={<ProjectVisual type="leadership" />}
      />

      <SectionShell className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="BIOGENIX"
            title="A student-led bridge between biotechnology, AI, and collaborative learning."
            description={leadership.timeline}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {leadership.responsibilities.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#dce4dc] bg-[#fbfaf5] p-5 text-sm leading-7 text-[#526170]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#10223a] text-white">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#83dfd1]">
              Founder Note
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Curiosity, technical learning, and interdisciplinary confidence.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              BIOGENIX was created to encourage biotechnology students to explore
              how AI, computational methods, and laboratory biology can work
              together. It positions student learning as an active practice beyond
              coursework.
            </p>
            <div className="mt-6">
              <ButtonLink
                href="/contact"
                variant="secondary"
                icon={<ArrowRight size={18} aria-hidden="true" />}
              >
                Connect About BIOGENIX
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {leadership.areas.map((area) => (
              <div
                key={area}
                className="rounded-lg border border-white/12 bg-white/8 p-6"
              >
                <h3 className="font-semibold">{area}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Part of the club&apos;s interdisciplinary learning direction.
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
