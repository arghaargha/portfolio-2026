type FocusCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function FocusCard({ title, description, tags }: FocusCardProps) {
  return (
    <article className="rounded-lg border border-[#dce4dc] bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#10223a]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#62717a]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[#edf6ef] px-2.5 py-1 text-xs font-semibold text-[#2b6f63]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
