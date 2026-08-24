"use client";

import { useState, useEffect } from "react";
import { Mail, Calendar, FileText, X, Check, ArrowUpRight, MessageSquare } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("harsh100xdev.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative group w-full max-w-lg bg-zinc-950 border border-dashed border-zinc-800 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        {/* Corner Brackets */}
        <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
        <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
        <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
        <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 text-[10px] sm:text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
              [ Ready to collaborate ]
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
            Book a Call or Drop a Message
          </h3>
        </div>

        {/* Direct Email Box */}
        <div className="bg-zinc-900/60 p-4 border border-zinc-800 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10px] font-mono text-zinc-500">DIRECT EMAIL</div>
            <div className="font-mono text-xs sm:text-sm text-white font-semibold truncate">
              harsh100xdev.work@gmail.com
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200 transition-colors shrink-0 flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span className="text-white font-bold">Copied</span>
              </>
            ) : (
              <span>[ Copy Email ]</span>
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 font-mono text-xs">
          <a
            href="mailto:harsh100xdev.work@gmail.com"
            className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-zinc-200 text-black font-bold transition-all shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>[ Send Direct Email ↗ ]</span>
          </a>

          <a
            href="https://github.com/BerrySeriousCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">[ Explore GitHub (@BerrySeriousCoder) ↗ ]</span>
            <span className="sm:hidden">[ Explore GitHub ↗ ]</span>
          </a>
        </div>

        <div className="pt-1 text-center text-[11px] font-mono text-zinc-500">
          Press <kbd className="px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 font-mono">H</kbd> anytime to open/close this modal
        </div>
      </div>
    </div>
  );
}

export default function ContactSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section id="contact" className="py-20 bg-black relative border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative group bg-zinc-950 border border-dashed border-zinc-800 p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          {/* Corner Brackets */}
          <span className="absolute -top-[1px] -left-[1px] w-2.5 h-2.5 border-t-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
          <span className="absolute -top-[1px] -right-[1px] w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
          <span className="absolute -bottom-[1px] -left-[1px] w-2.5 h-2.5 border-b-2 border-l-2 border-zinc-400 group-hover:border-white transition-colors z-20" />
          <span className="absolute -bottom-[1px] -right-[1px] w-2.5 h-2.5 border-b-2 border-r-2 border-zinc-400 group-hover:border-white transition-colors z-20" />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300">
            <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
            <span>[ GET IN TOUCH ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight leading-tight">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="text-zinc-400 font-mono text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            I am currently open to full-time engineering roles, freelance projects, and AI product collaborations.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>[ Book a Consultation / Call ]</span>
            </button>

            <a
              href="mailto:harsh100xdev.work@gmail.com"
              className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-white hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>harsh100xdev.work@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
