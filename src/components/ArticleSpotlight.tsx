"use client";

import { FileText, ArrowUpRight, BookOpen, Terminal, Check } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ArticleSpotlight() {
  const publications = [
    {
      id: "medium-attribution",
      type: "ARTICLE",
      tag: "AI ATTRIBUTION",
      title: "“Your AI read the document, can it prove it?”",
      subtitle: "Zero-Latency PDF Highlight Attribution in Production RAG",
      platform: "Medium Publication",
      readTime: "6 min read",
      description: "How to eliminate LLM citation hallucinations by extracting exact PDF bounding box coordinates in real-time without secondary model overhead.",
      highlights: [
        "0 Secondary LLM Overhead",
        "Bounding Box Verification",
        "Production-Grade PDF Parsing"
      ],
      url: "https://medium.com/@harsh100xdev.work/your-ai-read-the-document-can-it-prove-it-b0a8d0c44a23",
      buttonText: "Read Article on Medium",
      commandLine: "cat ~/writing/pdf_attribution.md",
      isGithub: false,
    },
    {
      id: "eval-research",
      type: "RESEARCH REPO",
      tag: "EVALS & OBSERVABILITY",
      title: "Evaluating, Monitoring & Deploying Production AI Systems",
      subtitle: "Open Technical Benchmarks & Evals Framework",
      platform: "GitHub Repository",
      readTime: "Open Source",
      description: "In-depth technical research, code patterns, and latency/hallucination tracking guidelines for monitoring enterprise AI deployments.",
      highlights: [
        "LLM Evaluation Benchmarks",
        "Latency & Token Cost Tracing",
        "Hallucination Detection Guardrails"
      ],
      url: "https://github.com/BerrySeriousCoder/eval",
      buttonText: "Explore Research Repo",
      commandLine: "git clone github.com/BerrySeriousCoder/eval",
      isGithub: true,
    },
  ];

  return (
    <section id="writing" className="py-16 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-300 uppercase tracking-wider whitespace-nowrap">
              [ Technical Writing & AI Research ]
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-500">2 Publications</span>
        </div>

        {/* Publications Cards */}
        <div className="grid grid-cols-1 gap-6">
          {publications.map((item) => (
            <div
              key={item.id}
              className="relative group bg-zinc-950 border border-dashed border-zinc-800/90 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Corner Brackets */}
              <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
              {/* Terminal Title Bar */}
              <div className="bg-zinc-900/60 border-b border-zinc-900 px-4 py-2 flex items-center justify-between font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2 min-w-0">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span className="text-zinc-300 font-semibold truncate">{item.commandLine}</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] bg-zinc-800/80 text-zinc-300 rounded-xs shrink-0">
                  {item.tag}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-zinc-900/80 pb-3">
                  <div className="flex items-center gap-2">
                    {item.isGithub ? (
                      <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                    ) : (
                      <BookOpen className="w-3.5 h-3.5 text-zinc-300" />
                    )}
                    <span className="text-zinc-400 font-medium">{item.platform}</span>
                  </div>
                  <span>{item.readTime}</span>
                </div>

                {/* Article Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-zinc-100 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {item.subtitle}
                  </p>
                </div>

                {/* Abstract Description */}
                <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Takeaways / Highlights */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-zinc-400" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                {/* Footer Action Button */}
                <div className="pt-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white transition-all shadow-md group/btn"
                  >
                    <span>[ {item.buttonText} ]</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


