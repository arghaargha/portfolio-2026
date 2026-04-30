import type { Achievement } from "@/types/portfolio";

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <article className="rounded-lg border border-[#dce4dc] bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-[#10223a] px-2.5 py-1 text-xs font-semibold text-white">
          {achievement.type}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#a27b33]">
          {achievement.date}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#10223a]">
        {achievement.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-[#2b6f63]">
        {achievement.issuer}
      </p>
      {achievement.identifier ? (
        <p className="mt-2 font-mono text-xs text-[#62717a]">
          ID: {achievement.identifier}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-6 text-[#62717a]">
        {achievement.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {achievement.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-[#d7ddd4] bg-[#fbfaf5] px-2.5 py-1 text-xs text-[#526170]"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
