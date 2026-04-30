import type { ReactNode } from "react";
import { SectionShell } from "./section-shell";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <SectionShell className="overflow-hidden bg-[#f8f5ed]">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2b8c7f]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-[#10223a] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#526170]">
            {description}
          </p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </SectionShell>
  );
}
