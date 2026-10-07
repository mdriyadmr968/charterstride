"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, UserCheck, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <UserCheck className="w-3.5 h-3.5" />
            <span>PROFESSIONAL ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Partner & Client Commendations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Feedback from supervising chartered engagement partners and corporate leadership.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative group hover:border-amber-500/30 transition-all"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/40 mb-4 group-hover:text-amber-500/60 transition-colors" />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-amber-400 font-medium">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {item.organization}
                  </div>
                </div>
                <div className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-white/5">
                  {item.relationship}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
