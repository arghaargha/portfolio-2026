"use client";

import { KeyboardEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  barFill,
  dnaFloat,
  gentleGlow,
  pulseNode,
  signalFlow,
} from "./bioHeroAnimations";
import { BioHeroInfoCard } from "./BioHeroInfoCard";
import {
  aiDecisionStatuses,
  defaultBioHeroModuleId,
  getBioHeroModule,
  type BioHeroModuleId,
} from "./bioHeroData";
import {
  farmLayers,
  heroVisualCanvas,
  heroVisualPipelines,
  matrixCells,
  sequenceRows,
} from "@/lib/hero-visual";

const cellColors = {
  gold: "#e6b85c",
  purple: "#8e7dd7",
  teal: "#4ab6a7",
};

const interactiveClass = "cursor-pointer outline-none";


export default function InteractiveBioHero() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeModule, setActiveModule] =
    useState<BioHeroModuleId>(defaultBioHeroModuleId);
  const [hoveredModule, setHoveredModule] = useState<BioHeroModuleId | null>(null);
  const [aiStatusIndex, setAiStatusIndex] = useState(0);

  const activeModuleData = useMemo(
    () => getBioHeroModule(activeModule),
    [activeModule],
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setAiStatusIndex((current) => (current + 1) % aiDecisionStatuses.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  function scrollToSection(target?: string) {
    if (!target) {
      return;
    }

    const element = document.querySelector(target);
    element?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <div className="mx-auto w-full max-w-[820px]">
      <figure
        aria-label="Interactive bioinformatics hero interface"
        className="relative w-full overflow-hidden rounded-lg border border-white/20 bg-[#10223a] shadow-[0_28px_80px_rgba(16,34,58,0.24)]"
        style={{ aspectRatio: heroVisualCanvas.aspectRatio }}
      >
        <svg
          className="block h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          viewBox={heroVisualCanvas.viewBox}
        >
          <title>Interactive Bioinformatics Hero Interface</title>
          <desc>
            A clickable biotechnology dashboard showing genomic input, DNA core,
            vertical farming, sensor layer, AI decision, and sustainable biotech.
          </desc>

          <defs>
            <pattern id="interactive-hero-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" stroke="rgba(43,140,127,0.16)" strokeWidth="1" />
            </pattern>
            <linearGradient id="interactive-dna-left" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#83dfd1" />
              <stop offset="1" stopColor="#8e7dd7" />
            </linearGradient>
            <linearGradient id="interactive-dna-right" x1="1" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#e6b85c" />
              <stop offset="1" stopColor="#4ab6a7" />
            </linearGradient>
            <filter id="interactive-soft-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background layer */}
          <rect width="760" height="520" fill="#10223a" rx="10" />
          <rect width="760" height="520" fill="url(#interactive-hero-grid)" opacity="0.28" />
          <motion.circle
            animate={gentleGlow(shouldReduceMotion)}
            cx="642"
            cy="84"
            fill="#2b8c7f"
            r="138"
          />
          <motion.circle
            animate={gentleGlow(shouldReduceMotion, 1.2)}
            cx="418"
            cy="452"
            fill="#8e7dd7"
            r="154"
          />

          {/* Visual content layer - all module visuals rendered here, no hit areas. */}
          <g pointerEvents="none">
            <GenomicInputModule
              active={activeModule === "genomic-input"}
              hovered={hoveredModule === "genomic-input"}
              shouldReduceMotion={shouldReduceMotion}
            />

            <DnaCoreModule
              active={activeModule === "dna-core"}
              hovered={hoveredModule === "dna-core"}
              shouldReduceMotion={shouldReduceMotion}
            />

            <VerticalFarmingModule
              active={activeModule === "vertical-farming"}
              hovered={hoveredModule === "vertical-farming"}
              shouldReduceMotion={shouldReduceMotion}
            />

            <SensorLayerVisual
              active={activeModule === "sensor-layer"}
              hovered={hoveredModule === "sensor-layer"}
            />

            <AiDecisionModule
              active={activeModule === "ai-decision"}
              hovered={hoveredModule === "ai-decision"}
              status={aiDecisionStatuses[aiStatusIndex]}
            />

            <SignalPaths shouldReduceMotion={shouldReduceMotion} />

            <PipelineTabVisuals
              activeModule={activeModule}
              hoveredModule={hoveredModule}
            />
          </g>

          {/* Interactive hit-area layer - rendered last so it sits on top. */}
          <g>
            <HitArea
              hitArea={{ x: 34, y: 42, width: 254, height: 338 }}
              id="genomic-input"
              setActiveModule={setActiveModule}
              setHoveredModule={setHoveredModule}
            />
            <HitArea
              hitArea={{ x: 286, y: 36, width: 255, height: 310 }}
              id="dna-core"
              setActiveModule={setActiveModule}
              setHoveredModule={setHoveredModule}
            />
            <HitArea
              hitArea={{ x: 546, y: 42, width: 180, height: 230 }}
              id="vertical-farming"
              setActiveModule={setActiveModule}
              setHoveredModule={setHoveredModule}
            />
            <HitArea
              hitArea={{ x: 546, y: 280, width: 180, height: 80 }}
              id="sensor-layer"
              setActiveModule={setActiveModule}
              setHoveredModule={setHoveredModule}
            />
            <HitArea
              hitArea={{ x: 546, y: 362, width: 180, height: 98 }}
              id="ai-decision"
              setActiveModule={setActiveModule}
              setHoveredModule={setHoveredModule}
            />
            <PipelineTabHitAreas
              setActiveModule={setActiveModule}
              setHoveredModule={setHoveredModule}
            />
          </g>
        </svg>
      </figure>

      <div className="mt-4">
        <BioHeroInfoCard
          module={activeModuleData}
          onExplore={() => scrollToSection(activeModuleData.scrollTarget)}
        />
      </div>
    </div>
  );
}

type HitAreaProps = {
  id: BioHeroModuleId;
  hitArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  setHoveredModule: (id: BioHeroModuleId | null) => void;
  setActiveModule: (id: BioHeroModuleId) => void;
};

function HitArea({
  id,
  hitArea,
  setHoveredModule,
  setActiveModule,
}: HitAreaProps) {
  const moduleInfo = getBioHeroModule(id);

  function handleKeyDown(event: KeyboardEvent<SVGRectElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveModule(id);
    }
  }

  return (
    <rect
      aria-label={moduleInfo.ariaLabel}
      className={interactiveClass}
      fill="transparent"
      focusable="true"
      height={hitArea.height}
      onBlur={() => setHoveredModule(null)}
      onClick={() => setActiveModule(id)}
      onFocus={() => setHoveredModule(id)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHoveredModule(id)}
      onMouseLeave={() => setHoveredModule(null)}
      pointerEvents="all"
      role="button"
      tabIndex={0}
      width={hitArea.width}
      x={hitArea.x}
      y={hitArea.y}
    />
  );
}

function moduleStroke(active: boolean, hovered: boolean, fallback: string) {
  if (active) {
    return "#83dfd1";
  }

  if (hovered) {
    return "#e6b85c";
  }

  return fallback;
}

function GenomicInputModule({
  active,
  hovered,
  shouldReduceMotion,
}: {
  active: boolean;
  hovered: boolean;
  shouldReduceMotion: boolean;
}) {
  return (
    <g aria-label="Genomic input module">
      <rect
        x="40"
        y="48"
        width="242"
        height="326"
        fill="rgba(255,255,255,0.055)"
        rx="8"
        stroke={moduleStroke(active, hovered, "rgba(255,255,255,0.13)")}
        strokeWidth="1.8"
      />
      <text
        fill="#83dfd1"
        fontFamily="Consolas, monospace"
        fontSize="15"
        fontWeight="700"
        letterSpacing="5"
        x="62"
        y="84"
      >
        GENOMIC INPUT
      </text>
      <motion.circle animate={pulseNode(shouldReduceMotion)} cx="246" cy="70" fill="#4ab6a7" r="6" />
      {sequenceRows.map((row, index) => (
        <motion.text
          animate={
            shouldReduceMotion
              ? { opacity: 0.72 }
              : { opacity: [0.52, 0.92, 0.52] }
          }
          transition={{
            duration: 3.2,
            repeat: shouldReduceMotion ? 0 : Infinity,
            delay: index * 0.18,
            ease: "easeInOut",
          }}
          key={row}
          fill="#b7efe0"
          fontFamily="Consolas, monospace"
          fontSize="12"
          fontWeight="700"
          x="62"
          y={118 + index * 26}
        >
          {row}
        </motion.text>
      ))}
      {matrixCells.map((cell, index) => (
        <motion.rect
          animate={
            shouldReduceMotion
              ? { opacity: cell.intensity }
              : { opacity: [cell.intensity, Math.min(cell.intensity + 0.2, 1), cell.intensity] }
          }
          fill={cellColors[cell.hue]}
          height="14"
          key={cell.id}
          rx="4"
          transition={{
            duration: 2.8,
            repeat: shouldReduceMotion ? 0 : Infinity,
            delay: (index % 6) * 0.1,
            ease: "easeInOut",
          }}
          width="26"
          x={62 + (index % 6) * 32}
          y={250 + Math.floor(index / 6) * 22}
        />
      ))}
    </g>
  );
}

function DnaCoreModule({
  active,
  hovered,
  shouldReduceMotion,
}: {
  active: boolean;
  hovered: boolean;
  shouldReduceMotion: boolean;
}) {
  const glow = active || hovered ? "url(#interactive-soft-glow)" : undefined;

  return (
    <g
      aria-label="DNA core module"
      filter={glow}
      transform="translate(286 54) scale(0.82)"
    >
      <motion.g animate={dnaFloat(shouldReduceMotion)}>
      <path
        d="M88 0 C218 46, 218 98, 88 144 C8 190, 8 242, 88 288 C126 302, 166 312, 206 330"
        fill="none"
        stroke="url(#interactive-dna-left)"
        strokeLinecap="round"
        strokeWidth={active || hovered ? 12 : 10}
      />
      <path
        d="M222 0 C92 46, 92 98, 222 144 C302 190, 302 242, 222 288 C184 302, 144 312, 104 330"
        fill="none"
        stroke="url(#interactive-dna-right)"
        strokeLinecap="round"
        strokeWidth={active || hovered ? 12 : 10}
      />
      {[
        [105, 38, 205, 38],
        [92, 82, 218, 82],
        [88, 126, 222, 126],
        [88, 170, 222, 170],
        [92, 214, 218, 214],
        [105, 258, 205, 258],
        [128, 302, 182, 302],
      ].map(([x1, y1, x2, y2]) => (
        <line
          key={`${x1}-${y1}`}
          stroke="rgba(255,255,255,0.36)"
          strokeLinecap="round"
          strokeWidth="4"
          x1={x1}
          x2={x2}
          y1={y1}
          y2={y2}
        />
      ))}
      {[
        { cx: 88, cy: 0, color: "#83dfd1" },
        { cx: 222, cy: 0, color: "#e6b85c" },
        { cx: 88, cy: 144, color: "#8e7dd7" },
        { cx: 222, cy: 144, color: "#4ab6a7" },
        { cx: 88, cy: 288, color: "#e6b85c" },
        { cx: 222, cy: 288, color: "#8e7dd7" },
      ].map(({ cx, cy, color }, index) => (
        <motion.circle
          animate={pulseNode(shouldReduceMotion, index * 0.2)}
          cx={cx}
          cy={cy}
          fill={color}
          key={`${cx}-${cy}`}
          r="12"
        />
      ))}
      <path
        d="M68 164 C126 130, 184 130, 244 164"
        fill="none"
        stroke="#83dfd1"
        strokeDasharray="8 9"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M126 330 C176 350, 224 350, 270 330"
        fill="none"
        stroke="#8e7dd7"
        strokeDasharray="8 9"
        strokeLinecap="round"
        strokeWidth="3"
      />
      </motion.g>
    </g>
  );
}

function VerticalFarmingModule({
  active,
  hovered,
  shouldReduceMotion,
}: {
  active: boolean;
  hovered: boolean;
  shouldReduceMotion: boolean;
}) {
  return (
    <g aria-label="Vertical farming module">
      <rect
        x="552"
        y="48"
        width="168"
        height="218"
        fill="rgba(255,255,255,0.055)"
        rx="8"
        stroke={moduleStroke(active, hovered, "rgba(255,255,255,0.13)")}
        strokeWidth="1.8"
      />
      <text
        fill="#e6d39d"
        fontFamily="Consolas, monospace"
        fontSize="15"
        fontWeight="700"
        letterSpacing="5"
        x="572"
        y="84"
      >
        VERTICAL
      </text>
      <text
        fill="#e6d39d"
        fontFamily="Consolas, monospace"
        fontSize="15"
        fontWeight="700"
        letterSpacing="5"
        x="572"
        y="106"
      >
        FARMING
      </text>
      {farmLayers.map((layer, layerIndex) => (
        <g key={layer.id} transform={`translate(572 ${132 + layerIndex * 58})`}>
          <rect
            width="126"
            height="42"
            fill="rgba(255,255,255,0.08)"
            rx="7"
            stroke="rgba(255,255,255,0.14)"
          />
          {[0, 1, 2, 3].map((plant) => (
            <motion.circle
              animate={pulseNode(shouldReduceMotion, plant * 0.16 + layerIndex * 0.12)}
              key={`${layer.id}-${plant}`}
              cx={19 + plant * 25}
              cy="21"
              fill="#4ab6a7"
              opacity={0.66 + plant * 0.06}
              r="11"
            />
          ))}
          <motion.rect
            animate={barFill(layer.health * 1.22, shouldReduceMotion)}
            height="5"
            fill="#e6b85c"
            opacity="0.68"
            rx="2.5"
            x="0"
            y="37"
          />
          <text
            fill="#dce8ef"
            fontFamily="Consolas, monospace"
            fontSize="11"
            fontWeight="700"
            textAnchor="end"
            x="116"
            y="19"
          >
            {layer.health}%
          </text>
        </g>
      ))}
    </g>
  );
}

function AiDecisionModule({
  active,
  hovered,
  status,
}: {
  active: boolean;
  hovered: boolean;
  status: string;
}) {
  return (
    <g aria-label="AI decision module">
      <rect
        x="552"
        y="368"
        width="168"
        height="86"
        fill="rgba(142,125,215,0.14)"
        rx="8"
        stroke={moduleStroke(active, hovered, "rgba(142,125,215,0.42)")}
        strokeWidth="1.8"
      />
      <motion.rect
        animate={{ opacity: active || hovered ? 1 : [0.7, 0.95, 0.7] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        x="572"
        y="392"
        width="28"
        height="42"
        fill="rgba(16,34,58,0.72)"
        rx="6"
        stroke="rgba(131,223,209,0.34)"
      />
      <text fill="#b7efe0" fontSize="15" fontWeight="900" x="579" y="419">
        AI
      </text>
      <text
        fill="#d5cdfc"
        fontFamily="Consolas, monospace"
        fontSize="13"
        fontWeight="800"
        letterSpacing="4"
        x="612"
        y="400"
      >
        {status.toUpperCase()}
      </text>
      <text fill="#e8edfb" fontSize="13" x="612" y="424">
        Soil + growth
      </text>
      <text fill="#e8edfb" fontSize="13" x="612" y="444">
        interpretation
      </text>
    </g>
  );
}

function SignalPaths({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    <g aria-label="Sensor signal layer" pointerEvents="none">
      <motion.path
        animate={signalFlow(shouldReduceMotion)}
        d="M282 222 C330 196, 376 188, 428 202"
        fill="none"
        stroke="#83dfd1"
        strokeDasharray="8 10"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <motion.path
        animate={signalFlow(shouldReduceMotion, 0.8)}
        d="M596 238 C552 294, 550 344, 602 388"
        fill="none"
        stroke="#e6b85c"
        strokeDasharray="8 10"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <motion.path
        animate={signalFlow(shouldReduceMotion, 1.4)}
        d="M350 330 C418 384, 484 398, 552 408"
        fill="none"
        stroke="#8e7dd7"
        strokeDasharray="8 10"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </g>
  );
}

function SensorLayerVisual({
  active,
  hovered,
}: {
  active: boolean;
  hovered: boolean;
}) {
  return (
    <g aria-label="Sensor layer module">
      <rect
        x="572"
        y="318"
        width="126"
        height="32"
        fill="rgba(74,182,167,0.11)"
        rx="6"
        stroke={moduleStroke(active, hovered, "rgba(74,182,167,0.42)")}
      />
      <text fill="#b7efe0" fontSize="12" fontWeight="700" x="586" y="339">
        NodeMCU
      </text>
      <text fill="#b7efe0" fontSize="12" fontWeight="700" x="650" y="339">
        Sensors
      </text>
    </g>
  );
}

const tabMap: Array<{ label: string; id: BioHeroModuleId; x: number }> = [
  { label: heroVisualPipelines[0], id: "genomic-input", x: 40 },
  { label: heroVisualPipelines[1], id: "sensor-layer", x: 220 },
  { label: heroVisualPipelines[2], id: "ai-decision", x: 400 },
  { label: heroVisualPipelines[3], id: "sustainable-biotech", x: 580 },
];

/** Visual-only pipeline tabs (no pointer events) */
function PipelineTabVisuals({
  activeModule,
  hoveredModule,
}: {
  activeModule: BioHeroModuleId;
  hoveredModule: BioHeroModuleId | null;
}) {
  return (
    <g aria-label="System pipeline">
      {tabMap.map((tab) => {
        const isActive = activeModule === tab.id;
        const isHovered = hoveredModule === tab.id;

        return (
          <motion.g
            animate={{ opacity: isActive || isHovered ? 1 : 0.86 }}
            key={tab.id}
            transform={`translate(${tab.x} 466)`}
          >
            <rect
              width="154"
              height="36"
              fill={isActive ? "rgba(131,223,209,0.18)" : "rgba(255,255,255,0.1)"}
              rx="7"
              stroke={moduleStroke(isActive, isHovered, "rgba(255,255,255,0.16)")}
              strokeWidth={isActive || isHovered ? 2 : 1}
            />
            <text
              fill="#ffffff"
              fontFamily="Consolas, monospace"
              fontSize="12"
              fontWeight="900"
              letterSpacing="1.3"
              textAnchor="middle"
              x="77"
              y="22"
            >
              {tab.label.toUpperCase()}
            </text>
          </motion.g>
        );
      })}
    </g>
  );
}

/** Interactive hit areas for pipeline tabs, rendered in the top hit-area layer. */
function PipelineTabHitAreas({
  setActiveModule,
  setHoveredModule,
}: {
  setActiveModule: (id: BioHeroModuleId) => void;
  setHoveredModule: (id: BioHeroModuleId | null) => void;
}) {
  function handleKeyDown(event: KeyboardEvent<SVGRectElement>, id: BioHeroModuleId) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveModule(id);
    }
  }

  return (
    <g aria-label="System pipeline controls">
      {tabMap.map((tab) => (
        <rect
          key={tab.id}
          aria-label={getBioHeroModule(tab.id).ariaLabel}
          className={interactiveClass}
          fill="transparent"
          focusable="true"
          height={36}
          onBlur={() => setHoveredModule(null)}
          onClick={() => setActiveModule(tab.id)}
          onFocus={() => setHoveredModule(tab.id)}
          onKeyDown={(event) => handleKeyDown(event, tab.id)}
          onMouseEnter={() => setHoveredModule(tab.id)}
          onMouseLeave={() => setHoveredModule(null)}
          pointerEvents="all"
          role="button"
          tabIndex={0}
          width={154}
          x={tab.x}
          y={466}
        />
      ))}
    </g>
  );
}
