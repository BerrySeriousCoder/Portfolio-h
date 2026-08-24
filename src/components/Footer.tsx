"use client";

import { FileText, Mail, ArrowUp } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">Harsh Vardhan Singh</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-500">Built with ❤️</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/BerrySeriousCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://medium.com/@harsh100xdev.work/your-ai-read-the-document-can-it-prove-it-b0a8d0c44a23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Medium</span>
          </a>

          <a
            href="mailto:harsh100xdev.work@gmail.com"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href="#hero"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
