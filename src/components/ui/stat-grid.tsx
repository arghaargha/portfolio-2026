type Stat = {
  value: string;
  label: string;
};

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className="rounded-lg border border-[#dce4dc] bg-white p-5 shadow-sm"
        >
          <p className="text-base font-semibold text-[#10223a]">{stat.value}</p>
          <p className="mt-2 text-sm leading-6 text-[#62717a]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
