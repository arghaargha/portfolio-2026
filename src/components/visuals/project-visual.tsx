import type { Project } from "@/types/portfolio";

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "farm") {
    return <VerticalFarmVisual />;
  }

  if (type === "microscopy") {
    return <MicroscopyVisual />;
  }

  if (type === "lab") {
    return <LabVisual />;
  }

  if (type === "leadership") {
    return <LeadershipVisual />;
  }

  return <GenomicsVisual />;
}

function GenomicsVisual() {
  return (
    <div className="grid min-h-40 grid-cols-[0.8fr_1fr] gap-4 rounded-lg bg-[#10223a] p-4 text-[#b7efe0]">
      <div className="space-y-2 font-mono text-[10px] leading-5 opacity-90">
        {["ATG CCA TTA", "GCT AAG TCC", "TTA CGA GGT", "AAC TGG CTA"].map(
          (line) => (
            <p key={line}>{line}</p>
          ),
        )}
      </div>
      <div className="grid grid-cols-6 gap-1 self-center">
        {Array.from({ length: 36 }).map((_, index) => (
          <span
            key={index}
            className="h-4 rounded-sm"
            style={{
              backgroundColor:
                index % 5 === 0 ? "#e6b85c" : index % 3 === 0 ? "#8e7dd7" : "#4ab6a7",
              opacity: 0.35 + ((index % 4) * 0.14),
            }}
          />
        ))}
      </div>
    </div>
  );
}

function VerticalFarmVisual() {
  return (
    <div className="rounded-lg bg-[#edf6ef] p-4">
      <div className="space-y-3">
        {[0, 1, 2].map((layer) => (
          <div key={layer} className="relative h-10 rounded-md bg-white shadow-sm">
            <div className="absolute left-3 top-2 flex gap-2">
              {[0, 1, 2, 3].map((plant) => (
                <span
                  key={`${layer}-${plant}`}
                  className="h-6 w-6 rounded-full border border-[#9dcaa8] bg-[#4d9b72]"
                />
              ))}
            </div>
            <span className="absolute right-3 top-3 h-4 w-4 rounded-sm bg-[#2b8c7f]" />
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#496a61]">
        <span>Sensor</span>
        <span>Cloud</span>
        <span>AI</span>
      </div>
    </div>
  );
}

function MicroscopyVisual() {
  return (
    <div className="relative min-h-40 overflow-hidden rounded-lg bg-[#111827] p-5">
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6fd1c4]/70" />
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#bda9ff]/70" />
      {[20, 35, 48, 62, 76].map((position, index) => (
        <span
          key={position}
          className="absolute h-2.5 w-2.5 rounded-full bg-[#e6b85c]"
          style={{ left: `${position}%`, top: `${24 + index * 10}%` }}
        />
      ))}
    </div>
  );
}

function LabVisual() {
  return (
    <div className="grid min-h-40 grid-cols-4 gap-3 rounded-lg bg-[#fbfaf5] p-4">
      {["PCR", "Gel", "SDS", "Micro"].map((label, index) => (
        <div
          key={label}
          className="flex flex-col justify-end rounded-md border border-[#dce4dc] bg-white p-2"
        >
          <span
            className="mb-2 block rounded-sm"
            style={{
              height: `${42 + index * 12}px`,
              backgroundColor:
                index % 2 === 0 ? "rgba(43, 140, 127, 0.65)" : "rgba(142, 125, 215, 0.6)",
            }}
          />
          <span className="text-center text-[10px] font-bold text-[#526170]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function LeadershipVisual() {
  return (
    <div className="grid min-h-40 grid-cols-2 gap-3 rounded-lg bg-[#10223a] p-4">
      {["AI", "Bioinfo", "Wet Lab", "Teams"].map((label) => (
        <div
          key={label}
          className="flex items-center justify-center rounded-md border border-white/10 bg-white/8 text-xs font-bold uppercase tracking-[0.16em] text-white"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
