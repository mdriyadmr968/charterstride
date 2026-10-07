"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  Filter,
  CheckCircle2
} from "lucide-react";
import { portfolioData, Engagement } from "@/data/portfolioData";
import EngagementModal from "./EngagementModal";

export default function Engagements() {
  const { engagements } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalEngagement, setActiveModalEngagement] = useState<Engagement | null>(null);

  const categories = ["All", "Statutory Audit", "Taxation & GST", "Internal Controls", "Financial Advisory"];

  const filtered: Engagement[] = selectedCategory === "All"
    ? engagements
    : engagements.filter((e) => e.category === selectedCategory);

  return (
    <section id="engagements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PRACTICAL ARTICLES EXPOSURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Audit & Advisory Engagements
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Real-world fieldwork execution across public manufacturing, consumer goods, and high-growth ventures under International Standards on Auditing.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Engagements Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 group relative"
              >
                <div>
                  {/* Top metadata row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Title & Client Type */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-300 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.clientType}</span>
                  </div>

                  {/* Summary */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Standards Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.standardsUsed.map((std, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/5"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Banner & Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1.5 truncate">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.impactMetric}</span>
                  </div>

                  <button
                    onClick={() => setActiveModalEngagement(item)}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-amber-400 shrink-0 group/btn transition-colors"
                  >
                    <span>Full Audit Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for viewing engagement detail */}
        <EngagementModal
          engagement={activeModalEngagement}
          onClose={() => setActiveModalEngagement(null)}
        />

      </div>
    </section>
  );
}
