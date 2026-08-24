"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, FileText, Globe } from "lucide-react";
import GithubGraph from "@/components/GithubGraph";
import GithubIcon from "@/components/icons/GithubIcon";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("harsh100xdev.work@gmail.com");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <section id="hero" className="bg-black text-white relative pt-28 pb-12 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Main Centered Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 sm:space-y-8">
        
        {/* Top Profile Header & Availability Status */}
        <div className="flex items-center justify-between gap-3 border-b border-zinc-900 pb-3 sm:pb-6">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900">
              <img 
                src="/profile.jpeg" 
                alt="Harsh Vardhan Singh Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-sm sm:text-2xl font-mono font-bold tracking-tight text-white leading-tight">
                Hi, I'm Harsh Vardhan Singh
              </h1>
              <p className="text-[10px] sm:text-xs font-mono text-zinc-400 mt-0.5">
                frontend • backend • ai & agentic systems
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to work</span>
          </div>
        </div>

        {/* Bio Punchline Split Row: Left (Punchline) / Right (Paper Disco GIF) - Side-by-side on all screen sizes */}
        <div className="grid grid-cols-12 gap-3 sm:gap-6 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="col-span-7 space-y-2 sm:space-y-4 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed flex flex-col justify-center">
            <p className="text-[11px] sm:text-sm leading-normal sm:leading-relaxed">
              I&apos;m a software engineer and builder who enjoys taking ideas from a blank screen to production. I care about understanding how things work under the hood. I&apos;m happiest when I&apos;m learning something new, building something challenging, and shipping it to real users.
            </p>
            <p className="hidden sm:block text-xs text-zinc-400">
              Available for full-time roles, contract work, and freelance projects. Reach out via email or connect below.
            </p>
          </div>

          {/* Right Column (5 cols) - Paper Disco Image/GIF */}
          <div className="col-span-5 flex items-center justify-center sm:justify-end h-full">
            <img 
              src="/herogif.gif" 
              alt="Harsh Paper Disco Visual" 
              className="w-full max-h-[220px] sm:max-h-[280px] object-contain rounded-xl"
            />
          </div>

        </div>

        {/* Sleek Bracketed Action Links Row */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5 sm:pt-1 font-mono text-[11px] sm:text-xs">
          <a
            href="https://github.com/BerrySeriousCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
          >
            <GithubIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
            <span>[ GitHub ↗ ]</span>
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-vardhan-singh-2ab454257/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
            <span>[ LinkedIn ↗ ]</span>
          </a>

          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
          >
            <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400">𝕏</span>
            <span>[ X / Twitter ↗ ]</span>
          </a>

          <button
            onClick={handleCopyClick}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
            <span>{copied ? "[ Email Copied! ]" : "[ Mail ✉ ]"}</span>
          </button>

          <a
            href="/resumeharsh.pdf"
            download="Harsh_Vardhan_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
            <span>[ Resume ↗ ]</span>
          </a>
        </div>

        {/* GitHub Graph Container inside Flow with Corner Brackets */}
        <div className="relative group bg-zinc-950/80 border border-dashed border-zinc-800 p-4 flex flex-col gap-3 transition-colors hover:border-zinc-700">
          {/* Corner Brackets */}
          <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
          <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
          <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
          <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />

          <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-900 pb-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#39d353] animate-pulse shrink-0" />
              <span className="text-zinc-200 font-medium whitespace-nowrap text-[11px] sm:text-xs">
                Recent Activity
              </span>
              <span className="text-zinc-500 hidden sm:inline text-[11px]">
                (@BerrySeriousCoder)
              </span>
            </div>
            <a
              href="https://github.com/BerrySeriousCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline text-[11px] flex items-center gap-1 shrink-0 whitespace-nowrap"
            >
              <span>Repos</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <GithubGraph />
        </div>

      </div>
    </section>
  );
}



