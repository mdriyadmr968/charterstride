"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  BookOpen, 
  Layers, 
  Cpu, 
  Calculator, 
  FileCheck,
  TrendingUp,
  Award
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function DomainMatrix() {
  const { skillDomains } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentDomain = skillDomains[activeTab];

  const domainIcons = [
    FileCheck,
    Calculator,
    TrendingUp,
    Cpu,
  ];

  return (
    <section id="domains" className="py-20 md:py-28 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive CA Skill Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Equipped with deep foundational knowledge of International Financial Reporting Standards, statutory taxation statutes, and risk-based audit methodologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {skillDomains.map((domain, index) => {
            const Icon = domainIcons[index % domainIcons.length];
            const isActive = activeTab === index;
            return (
              <button
                key={domain.category}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border ${
                  isActive
                    ? "bg-slate-800 text-amber-400 border-amber-500/40 shadow-lg shadow-amber-500/10"
                    : "bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                <span>{domain.category}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Domain Narrative & Standards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {currentDomain.category}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentDomain.description}
                  </p>
                </div>

                {/* Standards pill section */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Statutory Frameworks & Standards Applied</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentDomain.standards.map((std, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-white/10"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 leading-relaxed">
                  <strong>Practical Articleship Rigor:</strong> All procedures tested against live general ledgers, bank statements, supporting third-party confirmations, and management representations.
                </div>
              </div>

              {/* Right Column: Proficiency Breakdown Bars */}
              <div className="lg:col-span-7 space-y-5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Demonstrated Competencies & Confidence Levels
                </h4>

                <div className="space-y-4">
                  {currentDomain.skills.map((skill, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                        <span className="text-white flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{skill.name}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-amber-500/20">
                            {skill.tag}
                          </span>
                          <span className="font-mono text-slate-300 text-xs">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
