"use client";

import { 
  Building2, 
  GraduationCap, 
  ArrowUpRight, 
  Sparkles,
  Terminal,
  Calendar,
  MapPin,
  Briefcase
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "UnderAI",
      role: "Software Developer",
      period: "Oct 2025 — Present",
      type: "Full-Time",
      location: "Remote / Delhi NCR",
      description: "Leading AI systems development, agentic workflows, and document intelligence pipelines for enterprise risk & RFQ automation.",
      achievements: [
        "Built a multi-agent risk intelligence system performing live industry research, document parsing, and hazard analysis—enabling clients to upsell relevant coverages by 50%+ and accelerating deal closure.",
        "Architected an AI document analysis pipeline ingesting and correlating historical policy data, exposure documents, and inspection reports to extract structured business-critical information.",
        "Built a multi-stage agent orchestration workflow using LangChain and LangGraph for document understanding, rule-based reasoning, and decision synthesis.",
        "Designed an AI-powered RFQ automation system with an interactive spreadsheet-style playground, cutting manual RFQ creation time from ~140 hours to ~15 minutes."
      ],
      skills: ["LangChain", "LangGraph", "Multi-Agent AI", "Next.js", "TypeScript", "Python", "Document Intelligence", "RFQ Automation"]
    },
    {
      company: "Freelance & Contract Work",
      role: "Full-Stack & AI Systems Developer",
      period: "2024 — Present",
      type: "Contract / Freelance",
      location: "Remote",
      description: "Partnered with independent clients and early-stage startups to deliver high-converting web applications, custom AI integrations, and full-stack platforms.",
      achievements: [],
      skills: ["Next.js", "React", "Node.js", "Express", "C++", "Python", "Tailwind CSS", "PostgreSQL", "Vertex AI"]
    }
  ];



  const techCategories = [
    {
      category: "Frontend & Frameworks",
      skills: [
        { name: "Next.js", bg: "bg-zinc-900 text-white border-zinc-800" },
        { name: "React", bg: "bg-cyan-950/60 text-cyan-400 border-cyan-800/80" },
        { name: "TypeScript", bg: "bg-blue-950/60 text-blue-400 border-blue-800/80" },
        { name: "Tailwind CSS", bg: "bg-teal-950/60 text-teal-400 border-teal-800/80" },
        { name: "Framer Motion", bg: "bg-purple-950/60 text-purple-400 border-purple-800/80" },
        { name: "Redux", bg: "bg-indigo-950/60 text-indigo-400 border-indigo-800/80" }
      ]
    },
    {
      category: "AI & Systems",
      skills: [
        { name: "LangChain", bg: "bg-emerald-950/60 text-emerald-400 border-emerald-800/80" },
        { name: "LangGraph", bg: "bg-green-950/60 text-green-400 border-green-800/80" },
        { name: "Gemini Vision", bg: "bg-amber-950/60 text-amber-400 border-amber-800/80" },
        { name: "Vertex AI", bg: "bg-sky-950/60 text-sky-400 border-sky-800/80" },
        { name: "Python", bg: "bg-yellow-950/60 text-yellow-400 border-yellow-800/80" },
        { name: "C++", bg: "bg-blue-950/60 text-blue-300 border-blue-800/80" }
      ]
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "Node.js", bg: "bg-emerald-950/60 text-emerald-300 border-emerald-800/80" },
        { name: "Express.js", bg: "bg-zinc-900 text-zinc-300 border-zinc-800" },
        { name: "PostgreSQL", bg: "bg-blue-950/60 text-blue-400 border-blue-800/80" },
        { name: "MongoDB", bg: "bg-green-950/60 text-green-400 border-green-800/80" },
        { name: "Prisma", bg: "bg-indigo-950/60 text-indigo-300 border-indigo-800/80" },
        { name: "Docker", bg: "bg-sky-950/60 text-sky-400 border-sky-800/80" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Title Header */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap">
              [ Places I've Made an Impact ]
            </span>
          </div>

          <a
            href="/resumeharsh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all shrink-0"
          >
            <span>Full Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Timeline Experience Track */}
        <div className="relative pl-4 sm:pl-6 space-y-10 border-l border-zinc-800/80 ml-2 sm:ml-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node */}
              <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-3 h-3 rounded-full bg-zinc-300 ring-4 ring-black group-hover:bg-white transition-all" />

              {/* Card Container */}
              <div className="bg-zinc-950/90 border border-zinc-900/90 hover:border-zinc-800 p-5 sm:p-6 space-y-4 transition-all">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-zinc-900 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-mono text-base sm:text-lg font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-medium">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono shrink-0">
                    <div className="flex items-center gap-1.5 text-zinc-200 font-semibold">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 text-[11px]">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-mono text-zinc-400 leading-relaxed">
                        <span className="text-white font-bold shrink-0 mt-0.5">❯</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Skills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900/90 border border-zinc-800 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Tech Stack Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
              [ Tech Stack ]
            </span>
            <span className="text-xs font-mono text-zinc-500">The tools behind my builds</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {techCategories.map((cat, i) => (
              <div
                key={i}
                className="relative group bg-zinc-950/80 border border-dashed border-zinc-800/90 p-4 flex flex-col gap-3 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Corner Brackets */}
                <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
                <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
                <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
                <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />

                <div className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider font-semibold border-b border-zinc-900 pb-1.5 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-[9px] text-zinc-500 font-mono">[{cat.skills.length}]</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className={`px-2.5 py-1 text-xs font-mono border ${s.bg} rounded-xs transition-transform hover:scale-105`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



