"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Shield, Wrench, BarChart3, Building } from "lucide-react";
import { Engagement } from "@/data/portfolioData";

interface EngagementModalProps {
  engagement: Engagement | null;
  onClose: () => void;
}

export default function EngagementModal({ engagement, onClose }: EngagementModalProps) {
  if (!engagement) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-8"
        >
          {/* Header pill & close button */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                {engagement.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {engagement.duration}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Organization */}
          <div className="mt-4 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {engagement.title}
            </h3>
            <p className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Building className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{engagement.clientType}</span>
            </p>
          </div>

          {/* Overview text */}
          <p className="mt-4 text-sm text-slate-300 leading-relaxed bg-slate-800/40 p-3.5 rounded-xl border border-white/5">
            {engagement.summary}
          </p>

          {/* Impact Metric Banner */}
          <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-slate-800 to-amber-500/10 border border-amber-500/30 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold font-mono">
                Quantifiable Engagement Impact
              </div>
              <div className="text-sm font-semibold text-white">
                {engagement.impactMetric}
              </div>
            </div>
          </div>

          {/* Core Responsibilities */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Fieldwork Procedures & Audit Responsibilities
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {engagement.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">
              Formal Workpapers & Deliverables
            </h4>
            <div className="flex flex-wrap gap-2">
              {engagement.keyDeliverables.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Standards & Tools */}
          <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Accounting & Audit Standards</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {engagement.standardsUsed.map((std, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-amber-500/20"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Software & Toolchain</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {engagement.toolsUsed.map((tool, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-cyan-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Close button at bottom */}
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
