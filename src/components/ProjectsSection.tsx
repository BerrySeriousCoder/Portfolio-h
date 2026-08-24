"use client";

import { useState } from "react";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

interface Project {
  id: string;
  title: string;
  category: "Featured Web Apps" | "AI & Systems" | "Full-Stack Apps";
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  articleUrl?: string;
  demoVideoUrl?: string;
  image: string;
  badge?: string;
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const projects: Project[] = [
    {
      id: "vitch",
      title: "Vitch.AI — AI Agentic Video Editor",
      category: "AI & Systems",
      description: "Browser-based, AI-assisted nonlinear video editor combining multi-track editing, WebGPU preview compositor, FFmpeg export, and an AI Creative Director.",
      tech: ["Next.js", "TypeScript", "AI Agents", "WebGPU", "Python", "FFmpeg"],
      githubUrl: "https://github.com/BerrySeriousCoder/Vitch.AI",
      demoVideoUrl: "https://youtu.be/ODS1ZcMipv0",
      badge: "FEATURED AI",
      image: "/projects/vitchai.png",
    },
    {
      id: "ocular",
      title: "Ocular — AI Document Verification Engine",
      category: "AI & Systems",
      description: "Extract text from PDFs, send to LLMs, and automatically highlight AI responses back to their exact position in the PDF with ZERO 2nd LLM call latency.",
      tech: ["TypeScript", "Python", "PDF Engine", "LLMs", "Zk-Proof Attribution"],
      githubUrl: "https://github.com/BerrySeriousCoder/Ocular",
      demoVideoUrl: "https://www.youtube.com/watch?v=B8nb9d6QuM8",
      articleUrl: "https://medium.com/@harsh100xdev.work/your-ai-read-the-document-can-it-prove-it-b0a8d0c44a23",
      badge: "AI ARCHITECTURE",
      image: "/projects/ocular.png",
    },
    {
      id: "timeloom",
      title: "Timeloom — Prospect Outreach SaaS",
      category: "Full-Stack Apps",
      description: "Productivity & outreach automation tool allowing users to connect across tools and streamline multi-channel prospect messaging.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://timeloom-landingpage.vercel.app/",
      githubUrl: "https://github.com/BerrySeriousCoder/Timeloom",
      badge: "SAAS PLATFORM",
      image: "/projects/timeloom.png",
    },
    {
      id: "shrenik",
      title: "Shrenik Escapes",
      category: "Featured Web Apps",
      description: "Luxury resort & experiential travel booking platform engineered with Next.js, smooth animations, and high-converting visual storytelling.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://shrenikescapes.vercel.app/",
      badge: "LUXURY TRAVEL",
      image: "/projects/shrenik.png",
    },
    {
      id: "fuji",
      title: "Fuji Yatra",
      category: "Featured Web Apps",
      description: "Trekking & pilgrimage travel portal featuring interactive itinerary exploration, booking workflows, and optimized fast-rendering dynamic routes.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fuji-yatra.vercel.app/",
      badge: "TRAVEL PLATFORM",
      image: "/projects/fuji.png",
    },
    {
      id: "snatchedit",
      title: "Snatchedit — AI Virtual Try-On",
      category: "AI & Systems",
      description: "Paste any fashion product link and visualize yourself wearing it using Gemini Vision & Vertex AI computer vision pipelines.",
      tech: ["TypeScript", "Gemini AI", "Vertex AI", "Next.js"],
      githubUrl: "https://github.com/BerrySeriousCoder/Snatchedit",
      demoVideoUrl: "https://www.instagram.com/reel/DS97mt_Ea8z/?igsi=c29jZjc1OHJwazk2",
      badge: "AI & VISION",
      image: "/projects/snatchedit.png",
    },
  ];

  const categories = ["All", "Featured Web Apps", "AI & Systems", "Full-Stack Apps"];

  const filteredProjects = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
              [ Things I've Built ]
            </span>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-2.5 py-1 transition-all ${
                  activeTab === cat
                    ? "bg-zinc-800 text-white font-semibold border border-zinc-700"
                    : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-zinc-950/90 border border-dashed border-zinc-800/90 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300"
            >
              {/* Corner Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />

              {/* Image Preview Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 border-b border-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Overlay */}
                {project.badge && (
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="px-2 py-0.5 text-[9px] font-mono font-semibold tracking-wider bg-black/90 text-zinc-200 border border-zinc-700 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                
                <div className="space-y-2">
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span className="leading-snug">{project.title}</span>
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills & Action Buttons */}
                <div className="space-y-3 pt-2 border-t border-zinc-900/80">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-mono bg-zinc-900 border border-zinc-800/80 text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white transition-colors"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                      </a>
                    )}

                    {project.demoVideoUrl && (
                      <a
                        href={project.demoVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 py-1.5 px-2.5 bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 hover:bg-emerald-900/80 transition-colors"
                        title="Watch Demo Video"
                      >
                        <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                        <span>Demo</span>
                        <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-1 py-1.5 px-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white transition-colors ${
                          !project.liveUrl && !project.demoVideoUrl ? "flex-1" : ""
                        }`}
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </a>
                    )}

                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
                      >
                        <span>Article</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



