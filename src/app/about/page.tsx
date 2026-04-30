import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Timeline } from "@/components/ui/timeline";
import { focusAreas, languages, profile, timeline } from "@/data/portfolio";

export const metadata = {
  title: "About",
  description:
    "About Antara Chakraborty, biotechnology dual-degree student at KIIT University.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A biotechnology student building fluency across lab work, genomic data, sustainability, and communication."
        description={profile.summary}
        aside={
          <div className="rounded-lg border border-[#dce4dc] bg-white p-4 shadow-sm">
            <Image
              src="/assets/portrait-placeholder.svg"
              alt="Professional portrait placeholder for Antara Chakraborty"
              width={640}
              height={640}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>
        }
      />

      <SectionShell className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Bio"
            title="Research-oriented, interdisciplinary, and still intentionally growing."
          />
          <div className="space-y-5 text-base leading-8 text-[#526170]">
            <p>
              Antara Chakraborty is a biotechnology dual-degree student at KIIT
              School of Biotechnology, Bhubaneswar, with a strong academic record
              and growing experience across environmental bioinformatics, genomic
              data handling, laboratory techniques, and AI/IoT-enabled sustainable
              biotechnology.
            </p>
            <p>
              Her work includes undergraduate research in environmental genomics,
              Python-based data analysis, and the integration of real-world genomic
              sequence data. She has also contributed to IoT and AI/ML-based
              vertical farming systems and is a named co-author on an Indian
              ideation patent related to sustainable vertical farming.
            </p>
            <p>{profile.reflective}</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#fbfaf5]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Academic Journey"
              title="A timeline built around learning, research, and initiative."
            />
            <div className="mt-8">
              <Timeline items={timeline} />
            </div>
          </div>
          <div className="rounded-lg border border-[#dce4dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#10223a]">
              Interdisciplinary Focus
            </h2>
            <div className="mt-5 space-y-5">
              {focusAreas.map((area) => (
                <div key={area.title}>
                  <h3 className="font-semibold text-[#2b6f63]">{area.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#62717a]">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="mt-8 text-xl font-semibold text-[#10223a]">Languages</h2>
            <div className="mt-4 grid gap-2">
              {languages.map((language) => (
                <div
                  key={language.language}
                  className="flex items-center justify-between rounded-md bg-[#edf6ef] px-3 py-2 text-sm"
                >
                  <span className="font-semibold text-[#10223a]">
                    {language.language}
                  </span>
                  <span className="text-[#526170]">{language.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
