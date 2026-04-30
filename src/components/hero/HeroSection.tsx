import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/data/portfolio";
import InteractiveBioHero from "./InteractiveBioHero";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ed]">
      <div className="absolute inset-0 scientific-grid opacity-55" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(86svh-4rem)] max-w-7xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-16">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2b8c7f]">
            {profile.brandLine}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-[#10223a] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#10223a] sm:text-2xl sm:leading-9">
            Biotechnology student exploring bioinformatics, environmental genomics,
            and AI-powered sustainable systems.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:hidden">
            KIIT biotechnology dual-degree student working across genomic data,
            AI/IoT sustainability, and student research leadership.
          </p>
          <p className="mt-5 hidden max-w-3xl text-lg leading-8 text-[#526170] sm:block">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/research" icon={<ArrowRight size={18} aria-hidden="true" />}>
              View Research & Projects
            </ButtonLink>
            <ButtonLink
              href={profile.resumeHref}
              variant="secondary"
              icon={<Download size={18} aria-hidden="true" />}
            >
              Download Resume
            </ButtonLink>
            <ButtonLink
              href={profile.linkedin}
              variant="ghost"
              external
              icon={<ExternalLink size={18} aria-hidden="true" />}
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>
        <div className="relative z-10">
          <InteractiveBioHero />
        </div>
      </div>
    </section>
  );
}
