"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  FileSpreadsheet, 
  Sparkles, 
  Scale, 
  TrendingUp, 
  CheckCircle2, 
  Building2,
  ExternalLink,
  Briefcase
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const { candidate, keyMetrics } = portfolioData;

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 shadow-sm text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-amber-300">{candidate.badge}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 hidden sm:inline">{candidate.location}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Precision in <span className="text-gradient-gold">Audit</span>.{" "}
                <br className="hidden sm:inline" />
                Clarity in <span className="text-gradient-silver">Financial Strategy</span>.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                {candidate.name} — <span className="text-amber-400/90">{candidate.tagline}</span>
              </p>
            </div>

            {/* Narrative / Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {candidate.bio}
            </p>

            {/* Firm Exposure Tag */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 max-w-xl text-xs text-slate-300">
              <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-slate-400">Articleship Practical Training at: </span>
                <span className="font-semibold text-slate-200">{candidate.articleshipFirm}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#engagements"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/25 transition-all duration-150 group"
              >
                <span>View Audit Engagements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#workbench"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 text-sm font-medium transition-all duration-150"
              >
                <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                <span>Audit Workbench Tool</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-4 py-3 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                View Full Profile & CV
              </button>
            </div>
          </motion.div>

          {/* Right Column: Live Executive Auditor Cockpit Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-blue-500/10 to-amber-600/30 blur-xl opacity-75" />

              {/* Card Body */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/70 p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white tracking-wide uppercase">
                        Auditor Assurance Snapshot
                      </h3>
                      <p className="text-[10px] text-slate-400 font-mono">FY 2024-25 Fieldwork Active</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    VERIFIED
                  </span>
                </div>

                {/* Assurance Live Checklist */}
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">IFRS 15 Revenue Cut-Off Test</div>
                        <div className="text-[10px] text-slate-400">Multi-point substantive sampling (99% confidence)</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      Passed
                    </span>
                  </div>

                  <div className="flex items-start justify-between p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Physical Inventory Reconciliation</div>
                        <div className="text-[10px] text-slate-400">Reconciled variance of $180,000 across 3 plants</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      Reconciled
                    </span>
                  </div>

                  <div className="flex items-start justify-between p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Deferred Tax (IAS 12) Computation</div>
                        <div className="text-[10px] text-slate-400">Temporary timing difference amortization matrix</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      Approved
                    </span>
                  </div>

                  <div className="flex items-start justify-between p-2.5 rounded-lg bg-slate-800/60 border border-white/5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">Internal Financial Control (IFC/SoD)</div>
                        <div className="text-[10px] text-slate-400">Zero tolerance authorization bypass testing</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      Signed Off
                    </span>
                  </div>
                </div>

                {/* Bottom Highlight pill */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                    <span>Charter Track: <strong>Group-1 Cleared</strong></span>
                  </span>
                  <span className="text-amber-400 font-mono text-[11px] font-medium">Final Group Pending</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {keyMetrics.map((metric, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 relative group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-amber-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                {metric.description}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
