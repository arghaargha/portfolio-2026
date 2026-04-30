import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { creativeStudio } from "@/data/portfolio";

export const metadata = {
  title: "Creative Studio",
  description:
    "Creative interests of Antara Chakraborty across digital art, photography, poetry, and vocal classical music.",
};

export default function CreativePage() {
  return (
    <>
      <PageHero
        eyebrow="Creative Studio"
        title="Visual storytelling as a strength in scientific communication."
        description="Beyond the lab and data, Antara explores digital art, photography, poetry, and music. These interests shape the way she communicates science with clarity, emotion, and visual depth."
        aside={
          <Image
            src="/assets/creative-grid.svg"
            alt="Placeholder gallery for digital art, photography, poetry, and music"
            width={760}
            height={520}
            className="h-auto w-full rounded-lg border border-[#dce4dc] bg-white"
          />
        }
      />

      <SectionShell className="bg-white">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Practice Areas"
            title="A gallery-like space ready for future artwork and photography."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {creativeStudio.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#dce4dc] bg-[#fbfaf5] p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#10223a]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#62717a]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
