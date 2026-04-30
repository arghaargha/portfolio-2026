"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { infoCardVariants } from "./bioHeroAnimations";
import type { BioHeroModule } from "./bioHeroData";

type BioHeroInfoCardProps = {
  module: BioHeroModule;
  onExplore?: () => void;
};

export function BioHeroInfoCard({ module, onExplore }: BioHeroInfoCardProps) {
  return (
    <motion.aside
      key={module.id}
      animate="visible"
      className="rounded-lg border border-[#dce8ef] bg-white/92 p-4 shadow-[0_18px_40px_rgba(16,34,58,0.12)] backdrop-blur"
      initial="hidden"
      variants={infoCardVariants}
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2b8c7f]">
        Active Module
      </p>
      <h2 className="mt-2 text-xl font-semibold text-[#10223a]">{module.title}</h2>
      <p className="mt-1 text-sm font-semibold text-[#7a652d]">{module.subtitle}</p>
      <p className="mt-3 text-sm leading-6 text-[#526170]">{module.description}</p>
      {module.scrollTarget ? (
        <button
          className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#113f35] bg-[#113f35] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#0b2f28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b8c7f]"
          onClick={onExplore}
          type="button"
        >
          <ArrowRight size={16} aria-hidden="true" />
          Explore section
        </button>
      ) : null}
    </motion.aside>
  );
}
