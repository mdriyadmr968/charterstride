"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  FileText 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { candidate, keyMetrics, engagements, journeyMilestones, skillDomains, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-10 my-8 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Top Action Header */}
          <div className="p-4 sm:px-6 bg-slate-800/90 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                CharterStride Executive Dossier & CV
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                title="Print or Save PDF"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-300 print:text-black print:bg-white print:p-0">
            
            {/* Header / Candidate Info */}
            <div className="border-b border-white/10 pb-6 print:border-black/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                    {candidate.name}
                  </h1>
                  <p className="text-sm font-semibold text-amber-400 print:text-amber-700 mt-0.5">
                    {candidate.tagline}
                  </p>
                  <p className="text-xs text-slate-400 print:text-gray-600 mt-1">
                    {candidate.articleshipFirm}
                  </p>
                </div>

                <div className="text-xs space-y-1 sm:text-right text-slate-300 print:text-gray-700">
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Mail className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{candidate.email}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Phone className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{candidate.phone}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{candidate.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio summary */}
              <p className="mt-4 text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
                {candidate.bio}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-800/40 print:bg-gray-100 p-3 rounded-xl border border-white/5 print:border-gray-300">
              {keyMetrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-base font-extrabold font-mono text-amber-400 print:text-amber-700">
                    {m.value}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-300 print:text-gray-700">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Articleship Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800 border-b border-amber-500/20 pb-1">
                Practical Articleship Engagements
              </h2>

              <div className="space-y-4">
                {engagements.map((eng) => (
                  <div key={eng.id} className="text-xs space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span className="font-bold text-white print:text-black text-sm">
                        {eng.title}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 print:text-gray-600">
                        {eng.duration}
                      </span>
                    </div>
                    <div className="text-amber-300 print:text-amber-900 font-medium text-[11px]">
                      Client: {eng.clientType} • Focus: {eng.category}
                    </div>
                    <p className="text-slate-400 print:text-gray-700 leading-relaxed">
                      {eng.summary}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {eng.standardsUsed.map((s, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 print:bg-gray-200 text-slate-300 print:text-black">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Milestones */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800 border-b border-amber-500/20 pb-1">
                Chartered Accountancy Education & Academics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {journeyMilestones.map((m, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-800/40 print:bg-gray-50 border border-white/5 print:border-gray-200">
                    <div className="font-bold text-white print:text-black">{m.title}</div>
                    <div className="text-amber-400 print:text-amber-800 text-[11px]">{m.institution} ({m.year})</div>
                    <div className="text-[10px] text-slate-400 print:text-gray-600 mt-1">{m.achievements[0]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800 border-b border-amber-500/20 pb-1">
                Certifications & Key Toolchain
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {certifications.map((c, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-slate-800 print:bg-gray-200 text-slate-200 print:text-black border border-white/10 font-medium">
                    {c.name} ({c.issuer})
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
