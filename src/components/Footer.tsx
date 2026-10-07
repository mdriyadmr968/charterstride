"use client";

import React from "react";
import { Shield, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { candidate } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06090f] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-mono font-bold text-sm">
              CS
            </div>
            <div>
              <div className="font-bold text-sm text-white tracking-tight">CharterStride</div>
              <div className="text-[11px] text-slate-400">
                {candidate.name} • Chartered Accountancy Trainee Portfolio
              </div>
            </div>
          </div>

          {/* Nav Jumps */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <a href="#overview" className="hover:text-amber-400 transition-colors">Overview</a>
            <a href="#engagements" className="hover:text-amber-400 transition-colors">Engagements</a>
            <a href="#domains" className="hover:text-amber-400 transition-colors">Skills Matrix</a>
            <a href="#workbench" className="hover:text-amber-400 transition-colors">Audit Workbench</a>
            <a href="#journey" className="hover:text-amber-400 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 hover:border-amber-500/30 text-xs text-slate-300 hover:text-white transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Ethical Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <Shield className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>
              All client information anonymized in accordance with professional confidentiality standards (IESBA Code of Ethics).
            </span>
          </p>
          <p className="text-center sm:text-right font-mono">
            &copy; 2026 {candidate.name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
