import { skillDomains } from "@/data/portfolio";

export function SkillMatrix({ compact = false }: { compact?: boolean }) {
  const domains = compact ? skillDomains.slice(0, 4) : skillDomains;

  return (
    <div className="overflow-hidden rounded-lg border border-[#dce4dc] bg-white shadow-sm">
      <div className="hidden grid-cols-[1fr_0.75fr_1.2fr] border-b border-[#dce4dc] bg-[#eef5f0] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#39515c] md:grid">
        <span>Domain</span>
        <span>Depth</span>
        <span>Evidence</span>
      </div>
      <div className="divide-y divide-[#e3e9e2]">
        {domains.map((domain) => (
          <div
            key={domain.domain}
            className="grid gap-4 px-5 py-5 md:grid-cols-[1fr_0.75fr_1.2fr]"
          >
            <div>
              <h3 className="text-base font-semibold text-[#10223a]">
                {domain.domain}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {domain.skills.slice(0, compact ? 5 : domain.skills.length).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#d7ddd4] bg-[#fbfaf5] px-2.5 py-1 text-xs text-[#526170]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm font-semibold text-[#2b6f63]">{domain.depth}</p>
            <p className="text-sm leading-6 text-[#62717a]">{domain.evidence}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
