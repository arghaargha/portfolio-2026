import { AchievementCard } from "@/components/cards/achievement-card";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { achievements } from "@/data/portfolio";

export const metadata = {
  title: "Achievements",
  description:
    "Patent, certifications, workshops, academic milestones, and training proof for Antara Chakraborty.",
};

export default function AchievementsPage() {
  const patent = achievements.find((achievement) => achievement.type === "Patent");
  const rest = achievements.filter((achievement) => achievement.type !== "Patent");

  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Proof points that support the research and technical story."
        description="Patent contribution, genomic data science certification, mRNA therapeutics learning, workshop exposure, and academic performance are presented as evidence rather than decoration."
      />

      {patent ? (
        <SectionShell className="bg-white">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              eyebrow="Patent Highlight"
              title="IoT and AI/ML for sustainable vertical farming."
              description="This is one of the strongest applied-systems credibility points in the portfolio."
            />
            <AchievementCard achievement={patent} />
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className="bg-[#fbfaf5]">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Certifications & Milestones"
            title="Academic and training credentials."
          />
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {rest.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
