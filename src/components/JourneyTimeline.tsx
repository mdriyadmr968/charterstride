"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function JourneyTimeline() {
  const { journeyMilestones, certifications } = portfolioData;

  return (
    <section id="journey" className="py-20 md:py-28 bg-slate-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>PROGRESSION & PEDIGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Chartered Accountancy Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From premier university academic honors through rigorous professional articleship and CA examinations.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line indicator */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500 via-slate-700 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-12`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center z-10 shadow-lg shadow-amber-500/20">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>

                  {/* Card container */}
                  <div className="ml-10 md:ml-0 md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all"
                    >
                      {/* Badge & Year */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/20">
                          {item.stage}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-300 mt-1">
                        {item.institution}
                      </p>

                      {/* Achievements */}
                      <ul className="mt-3.5 space-y-1.5 border-t border-white/5 pt-3">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Certifications Bar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Accredited Financial Certifications
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Verified Credentials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-800/60 border border-white/5 flex flex-col justify-between"
                >
                  <div className="text-xs font-semibold text-slate-200">
                    {cert.name}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-2 pt-1 border-t border-white/5">
                    <span>{cert.issuer}</span>
                    <span className="text-amber-400">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
