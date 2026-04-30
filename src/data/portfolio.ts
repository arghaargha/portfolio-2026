import type {
  Achievement,
  NavItem,
  Project,
  TimelineItem,
} from "@/types/portfolio";

export const profile = {
  name: "Antara Chakraborty",
  initials: "AC",
  brandLine: "Biotechnology - Bioinformatics - AI for Sustainable Life Sciences",
  role:
    "Biotechnology dual-degree student exploring environmental genomics, genomic data analysis, and AI/IoT-enabled sustainable systems.",
  summary:
    "Undergraduate biotechnology student at KIIT University working across environmental bioinformatics, genomic data handling, laboratory techniques, and sustainable biotechnology. Her experience includes Python-based genomic data analysis, IoT-enabled vertical farming, Cryo-EM training, and student leadership through BIOGENIX - AI & Biotechnology Club.",
  reflective:
    "I am interested in biotechnology that does not stay limited to the laboratory. My focus is on how biological systems, computational methods, and intelligent technologies can work together to solve real-world problems in health, environment, and sustainability.",
  email: "antarachakraborty030@gmail.com",
  location: "Bhubaneswar, India",
  linkedin:
    "https://www.linkedin.com/in/antara-chakraborty-9bb7472ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  resumeHref: "/Antara_Chakraborty_Resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Leadership", href: "/leadership" },
  { label: "Achievements", href: "/achievements" },
  { label: "Creative", href: "/creative" },
  { label: "Contact", href: "/contact" },
];

export const profileStats = [
  {
    value: "KIIT University",
    label: "B.Tech & M.Tech Dual Degree in Biotechnology",
  },
  { value: "CGPA 9.02", label: "Till Semester 5, 2025-26" },
  { value: "Research Trainee", label: "Environmental Biotechnology Lab" },
  { value: "Patent Contributor", label: "IoT + AI/ML vertical farming system" },
  { value: "Founder & President", label: "BIOGENIX - AI & Biotechnology Club" },
  { value: "Genomic Data Science", label: "Johns Hopkins University specialisation" },
];

export const focusAreas = [
  {
    title: "Environmental Genomics",
    description:
      "Computational interpretation of real-world genomic sequence data for environmental biotechnology contexts.",
    tags: ["Genomic data", "Python", "Modelling"],
  },
  {
    title: "Wet Lab Biotechnology",
    description:
      "Molecular biology and laboratory-method foundations across PCR, electrophoresis, cloning, SDS-PAGE, chromatography, and spectroscopy.",
    tags: ["PCR", "Cloning", "Spectroscopy"],
  },
  {
    title: "Sustainable Intelligent Systems",
    description:
      "IoT and AI/ML concept integration for vertical farming, sensor automation, and soil health optimization.",
    tags: ["NodeMCU", "Arduino", "Raspberry Pi"],
  },
];

export const projects: Project[] = [
  {
    slug: "environmental-genomics",
    title: "Environmental Genomics and Bioinformatics-Based Data Analysis",
    category: ["Research", "Bioinformatics", "Sustainability"],
    institution: "KIIT School of Biotechnology",
    supervisor: "Dr Vishakha Raina",
    timeline: "Aug 2025 - Present",
    role: "Undergraduate Research Trainee",
    summary:
      "Contributing to environmental genomics research through data analysis, Python scripting, computational modelling, and interpretation of real-world genomic sequence data.",
    problem:
      "Environmental biotechnology increasingly depends on the ability to interpret genomic sequence data from complex biological and ecological systems.",
    methods: [
      "Python scripting",
      "Genomic data handling",
      "Biostatistical analysis",
      "Computational modelling",
      "Data interpretation",
    ],
    outcome:
      "Ongoing research exposure at the intersection of environmental biotechnology and bioinformatics.",
    status: "Ongoing",
    visual: "genomics",
  },
  {
    slug: "vertical-farming",
    title: "System for Harnessing IoT and AI/ML for Sustainable Vertical Farming",
    category: ["IoT/AI", "Sustainability"],
    institution: "KIIT University",
    supervisor: "Dr Subhra Debdas",
    timeline: "Sep 2024 - Aug 2025",
    role: "Student contributor and patent co-author",
    summary:
      "Worked on a multidisciplinary system integrating sensors, automation, and AI/ML concepts for sustainable vertical farming and soil health optimization.",
    problem:
      "Modern agriculture needs intelligent, resource-efficient systems for environmental monitoring, automation, and sustainable food production.",
    methods: [
      "NodeMCU",
      "Arduino",
      "Raspberry Pi",
      "Sensor integration",
      "Automation concepts",
      "AI/ML system thinking",
    ],
    outcome:
      "Named co-author on Indian Ideation Patent No. 202431099109, issued Dec 27, 2024.",
    status: "Patent issued",
    visual: "farm",
  },
  {
    slug: "cryo-em-training",
    title: "Cryo-Electron Microscopy Training Program",
    category: ["Training", "Structural Biology", "Wet Lab"],
    institution: "CSIR - Indian Institute of Chemical Biology, Kolkata",
    timeline: "Jun 2025",
    role: "Training participant",
    summary:
      "Received practical training in Cryo-EM workflows for macromolecular structural biology.",
    problem:
      "Structural biology relies on careful sample preparation, vitrification, imaging, and analysis to study macromolecules at high resolution.",
    methods: [
      "Sample preparation",
      "Grid handling",
      "Vitrification principles",
      "Structural biology workflow",
      "Macromolecular analysis",
    ],
    outcome:
      "Built exposure to advanced research instrumentation and structural biology applications.",
    status: "Completed",
    visual: "microscopy",
  },
  {
    slug: "laboratory-methods-training",
    title:
      "Animal Handling, Tissue Sectioning, In Vivo Drug Monitoring, and Microbial Biology",
    category: ["Training", "Wet Lab"],
    institution: "KIIT School of Biotechnology",
    timeline: "Dec 2024 - date to verify",
    role: "Winter internship participant",
    summary:
      "Hands-on training in experimental biology techniques spanning animal handling exposure, tissue sectioning, in vivo drug monitoring, and microbial biology.",
    problem:
      "Applied biotechnology training requires controlled exposure to experimental workflows and biological sample handling.",
    methods: [
      "Animal handling exposure",
      "Tissue sectioning",
      "In vivo drug monitoring",
      "Microbial biology",
    ],
    outcome:
      "Expanded laboratory-method familiarity beyond core molecular biology coursework.",
    status: "Completed, date needs verification",
    visual: "lab",
    note:
      "The source CV lists 16 Dec 2024 - 20 Dec 2023. Verify the final date before publishing.",
  },
];

export const skillDomains = [
  {
    domain: "Bioinformatics & Data Analysis",
    depth: "Intermediate",
    evidence: "Research trainee role and Johns Hopkins Genomic Data Science Specialisation",
    skills: [
      "Data interpretation",
      "Biostatistical analysis",
      "Python scripting",
      "R programming",
      "Perl",
      "C",
      "C++",
      "Unix/Linux",
      "Bioconductor",
      "NGS data concepts",
    ],
  },
  {
    domain: "Biotechnology & Laboratory Techniques",
    depth: "Intermediate",
    evidence: "Academic training, lab exposure, and structural biology workshop exposure",
    skills: [
      "Molecular cloning",
      "PCR",
      "Gel electrophoresis",
      "Recombinant DNA technology",
      "Buffer preparation",
      "SDS-PAGE",
      "Chromatography",
      "Spectroscopy",
      "Cryo-EM workflow exposure",
    ],
  },
  {
    domain: "IoT, Automation & Sustainable Systems",
    depth: "Applied exposure",
    evidence: "Vertical farming project and patent contribution",
    skills: [
      "NodeMCU",
      "Arduino",
      "Raspberry Pi",
      "Sensor integration",
      "Automation",
      "Vertical farming",
      "Soil health optimization",
      "AI/ML concepts",
    ],
  },
  {
    domain: "Communication & Leadership",
    depth: "Strong",
    evidence: "Founder and President of BIOGENIX, presentations, and technical sessions",
    skills: [
      "Technical presentation",
      "Team collaboration",
      "Academic planning",
      "Student club leadership",
      "Scientific communication",
    ],
  },
  {
    domain: "Creative Communication",
    depth: "Personal practice",
    evidence: "Digital art, photography, poetry, and classical vocal music",
    skills: [
      "Digital art",
      "Illustration",
      "Photography",
      "Visual storytelling",
      "Poetry",
      "Vocal classical music",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "System for Harnessing IoT and AI/ML for Sustainable Vertical Farming",
    type: "Patent",
    issuer: "Indian Ideation Patent",
    date: "Dec 27, 2024",
    identifier: "202431099109",
    description:
      "Patent contribution related to IoT and AI/ML-enabled sustainable vertical farming systems.",
    skills: ["IoT", "AI/ML", "Vertical farming", "Sustainability"],
  },
  {
    title: "Genomic Data Science Specialisation",
    type: "Certification",
    issuer: "The Johns Hopkins University",
    date: "Completed",
    identifier: "P4OW4XP6ZOLD",
    description:
      "Six-course specialisation on analysing and interpreting data from next-generation sequencing experiments.",
    skills: ["NGS", "Python", "R", "Bioconductor", "Unix/Linux"],
  },
  {
    title: "mRNAs as Medicines",
    type: "Certification",
    issuer: "Moderna",
    date: "Completed",
    identifier: "KV2AU9UU07TQ",
    description:
      "Explored molecular principles of mRNA therapeutics and their role in infectious diseases.",
    skills: ["mRNA therapeutics", "Molecular biology", "Infectious disease"],
  },
  {
    title: "9th INSCR International Conference 2025 - Microbes & One Health",
    type: "Workshop",
    issuer: "KIIT, Bhubaneswar",
    date: "Jan 16, 2025",
    description:
      "Workshop exposure in genomics, metagenomics, and bioinformatics for microbial ecology.",
    skills: ["Genomics", "Metagenomics", "Bioinformatics", "Microbial ecology"],
  },
  {
    title: "B.Tech & M.Tech Dual Degree in Biotechnology",
    type: "Academic",
    issuer: "KIIT School of Biotechnology",
    date: "Expected Jun 2028",
    description: "Current CGPA: 9.02 till Semester 5, 2025-26.",
    skills: ["Biotechnology", "Research foundation", "Academic performance"],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2021",
    title: "Secondary School Certificate",
    detail: "St. Paul's School, Agartala - 87%, Grade A.",
  },
  {
    year: "2023",
    title: "Higher Education, CBSE Science (PCMB)",
    detail: "Swami D.D.K. Baba Mission School, Agartala - 73.4%.",
  },
  {
    year: "2024",
    title: "Vertical farming patent issued",
    detail: "Patent No. 202431099109, issued Dec 27, 2024.",
  },
  {
    year: "2025",
    title: "INSCR workshop and Cryo-EM training",
    detail:
      "Microbes & One Health workshop at KIIT, followed by Cryo-EM training at CSIR-IICB.",
  },
  {
    year: "2025",
    title: "Environmental bioinformatics research begins",
    detail:
      "Undergraduate Research Trainee at Environment Biotechnology Lab, KIIT School of Biotechnology.",
  },
  {
    year: "2026",
    title: "BIOGENIX founded",
    detail: "Founder & President, BIOGENIX - AI & Biotechnology Club.",
  },
  {
    year: "2028",
    title: "Expected dual degree completion",
    detail: "B.Tech & M.Tech Dual Degree in Biotechnology.",
  },
];

export const leadership = {
  title: "Founder & President, BIOGENIX - AI & Biotechnology Club",
  institution: "KIIT University, Bhubaneswar, Odisha",
  timeline: "Jan 2026 - Present",
  mission:
    "BIOGENIX was created to encourage biotechnology students to explore how AI, computational methods, and laboratory biology can work together.",
  note:
    "The goal is to build a student-led space where curiosity, technical learning, and interdisciplinary collaboration can grow beyond the classroom.",
  responsibilities: [
    "Founded and led an interdisciplinary student club focused on AI-driven biotechnology.",
    "Planned academic and technical activities for biotechnology students.",
    "Organized technical sessions and collaborative initiatives.",
    "Built student engagement around wet-lab biology, computational methods, and applied AI.",
  ],
  areas: [
    "AI in biotechnology",
    "Bioinformatics",
    "Wet-lab learning",
    "Student collaboration",
  ],
};

export const creativeStudio = [
  {
    title: "Digital Art & Illustration",
    description:
      "A visual practice that supports scientific communication, concept sketches, and clear storytelling.",
  },
  {
    title: "Photography & Visual Storytelling",
    description:
      "Observation-led creative work that strengthens framing, attention to detail, and narrative flow.",
  },
  {
    title: "Poetry",
    description:
      "A reflective writing practice that brings precision, rhythm, and emotional clarity to communication.",
  },
  {
    title: "Vocal Classical Music",
    description:
      "A disciplined performance practice rooted in listening, structure, and expressive control.",
  },
];

export const languages = [
  { language: "Bengali", level: "First language" },
  { language: "English", level: "C2 proficient" },
  { language: "Hindi", level: "C2 proficient" },
];
