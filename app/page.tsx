'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// --- GLOW SETTINGS ---
const glowColors: any = {
  purple: "bg-purple-500/40 group-hover:bg-purple-500/80",
  blue:   "bg-blue-500/40   group-hover:bg-blue-500/80",
  pink:   "bg-pink-500/40   group-hover:bg-pink-500/80",
  cyan:   "bg-cyan-500/40   group-hover:bg-cyan-500/80",
  green:  "bg-emerald-500/40 group-hover:bg-emerald-500/80",
  orange: "bg-orange-500/40 group-hover:bg-orange-500/80",
  rose:   "bg-rose-500/40   group-hover:bg-rose-500/80",
};

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ title, tags, description, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-white/50 transition-colors duration-500"
  >
    <div className={`absolute -right-10 -top-10 w-40 h-40 blur-[80px] rounded-full transition-all duration-500 group-hover:scale-150 ${glowColors[color] || glowColors.purple}`} />
    <h3 className="text-2xl font-bold mb-2 relative z-10">{title}</h3>
    <div className="flex gap-2 mb-4 relative z-10">
      {tags.map((t: string) => (
        <span key={t} className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded-md text-white/60">{t}</span>
      ))}
    </div>
    <p className="text-white/50 text-sm leading-relaxed relative z-10">{description}</p>
  </motion.div>
);

// --- COMPONENT: SKILL BADGE ---
const SkillBadge = ({ name }: { name: string }) => (
  <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm hover:bg-white/10 hover:border-white/30 transition-all cursor-default">
    {name}
  </div>
);

// --- MAIN PAGE ---
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={container} className="relative w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
        <motion.div style={{ y }} className="text-center z-10 px-4">
          <div className="mb-4 inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60">
            ARGHA DAS • 2026
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-8">
            ENGINEERING<br />THE FUTURE
          </h1>
        </motion.div>
      </section>

      {/* 2. NEW: ABOUT ME SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-32 text-center">
        <h2 className="text-white/40 text-sm tracking-widest uppercase mb-8">About This Wonderful Gentleman</h2>
        <p className="text-3xl md:text-5xl font-medium leading-tight text-white/90">
          I'm an aspiring Software developer and tester based in India, obsessed with building things that look impossible. 
          <span className="text-purple-400"> I turn caffeine into code</span> and problems into elegant solutions.
        </p>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-purple-500 pl-6">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ProjectCard title="Disk Scheduling" tags={['React', 'Algorithms']} description="Visualizing complex OS algorithms with interactive animations." color="purple" />
          </div>
          <ProjectCard title="Doc Buddy" tags={['Next.js', 'Healthcare']} description="Smart medical documentation assistant." color="blue" />
          <ProjectCard title="Memory Manager" tags={['System', 'Simulation']} description="Real-time memory allocation visualizer." color="cyan" />
          <ProjectCard title="Antara's Gift" tags={['React', 'Three.js', 'Audio']} description="An interactive 3D birthday experience." color="rose" />
        </div>
      </section>

      {/* 4. NEW: SKILLS ARSENAL */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold mb-12 border-l-4 border-blue-500 pl-6">Technological Arsenal</h2>
        <div className="flex flex-wrap gap-4">
            {/* You can add more skills here later! */}
            <SkillBadge name="React" />
            <SkillBadge name="Next.js" />
            <SkillBadge name="TypeScript" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="Python" />
            <SkillBadge name="MongoDB" />
            <SkillBadge name="Java" />
            <SkillBadge name="Tailwind CSS" />
            <SkillBadge name="Framer Motion" />
            <SkillBadge name="Git & GitHub" />
            <SkillBadge name="System Design" />
        </div>
      </section>

      {/* 5. MARQUEE SECTION */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="flex overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap text-white/30 text-4xl font-bold items-center">
            <span>BUILD</span> <span>•</span> <span>SHIP</span> <span>•</span> <span>ITERATE</span> <span>•</span> <span>DEPLOY</span> <span>•</span> <span>REPEAT</span>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-20 relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex gap-8 mb-8">
            <a href="https://instagram.com/your_username" target="_blank" className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500/10 hover:border-pink-500/50 transition-all">
              <svg className="w-6 h-6 text-white/70 group-hover:text-pink-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://linkedin.com/in/your_username" target="_blank" className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/10 hover:border-blue-600/50 transition-all">
              <svg className="w-6 h-6 text-white/70 group-hover:text-blue-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://youtube.com/@your_channel" target="_blank" className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-red-600/10 hover:border-red-600/50 transition-all">
              <svg className="w-6 h-6 text-white/70 group-hover:text-red-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="tel:+919876543210" className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-green-500/10 hover:border-green-500/50 transition-all">
              <svg className="w-6 h-6 text-white/70 group-hover:text-green-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
          </div>
          <p className="text-white/20 text-sm">Designed & Engineered by Argha Das</p>
        </div>
      </footer>
    </div>
  );
}