import { ArrowRight, Download, Mail } from "lucide-react";
import { AchievementCard } from "@/components/cards/achievement-card";
import { FocusCard } from "@/components/cards/focus-card";
import { ProjectCard } from "@/components/cards/project-card";
import { HeroSection } from "@/components/hero/HeroSection";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SkillMatrix } from "@/components/ui/skill-matrix";
import { StatGrid } from "@/components/ui/stat-grid";
import {
  achievements,
  focusAreas,
  leadership,
  profile,
  profileStats,
  projects,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionShell className="bg-white">
        <StatGrid stats={profileStats} />
      </SectionShell>

      <SectionShell className="bg-[#fbfaf5]" id="about">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Profile"
            title="Wet-lab foundations with a data-forward research direction."
            description={profile.reflective}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {focusAreas.map((focus) => (
              <FocusCard key={focus.title} {...focus} />
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white" id="research">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Research & Projects"
            title="Evidence-led work across genomics, sustainability, and structural biology."
            description="Each card is written in a problem, role, methods, and outcome structure so professors and recruiters can scan quickly without losing depth."
          />
          <ButtonLink href="/research" variant="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Open Research Page
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-[#f8f5ed]">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Skills"
            title="A domain matrix instead of vague percentage bars."
            description="The portfolio groups skills by evidence and context, making the interdisciplinary profile easier to trust."
          />
        </div>
        <SkillMatrix compact />
      </SectionShell>

      <SectionShell className="bg-[#10223a] text-white" id="leadership">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#83dfd1]">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              {leadership.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              {leadership.mission} {leadership.note}
            </p>
            <div className="mt-6">
              <ButtonLink
                href="/leadership"
                variant="secondary"
                icon={<ArrowRight size={18} aria-hidden="true" />}
              >
                Explore BIOGENIX
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {leadership.areas.map((area) => (
              <div
                key={area}
                className="rounded-lg border border-white/12 bg-white/8 p-5 text-sm font-semibold"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white" id="achievements">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Proof"
            title="Patent, certifications, training, and academic milestones."
          />
          <ButtonLink href="/achievements" variant="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
            View Achievements
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {achievements.slice(0, 3).map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-[#edf6ef]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Contact"
            title="Let us connect around biotechnology, bioinformatics, sustainability, or student-led innovation."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" icon={<Mail size={18} aria-hidden="true" />}>
              Contact Me
            </ButtonLink>
            <ButtonLink
              href={profile.resumeHref}
              variant="secondary"
              icon={<Download size={18} aria-hidden="true" />}
            >
              Resume
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
