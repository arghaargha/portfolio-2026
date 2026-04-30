import type { TimelineItem } from "@/types/portfolio";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-5 border-l border-[#cfd9cf] pl-6">
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#f8f5ed] bg-[#2b8c7f]" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a27b33]">
            {item.year}
          </p>
          <h3 className="mt-1 text-base font-semibold text-[#10223a]">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-[#62717a]">{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}
