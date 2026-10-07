"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  HelpCircle, 
  Activity, 
  Check, 
  AlertTriangle, 
  Info,
  DollarSign,
  TrendingDown,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

export default function AuditMaterialityTool() {
  const [activeTab, setActiveTab] = useState<"materiality" | "ratios">("materiality");

  // Materiality State
  const [benchmarkType, setBenchmarkType] = useState<"revenue" | "pbt" | "assets">("revenue");
  const [baseValue, setBaseValue] = useState<number>(12500000); // 12.5M
  const [riskProfile, setRiskProfile] = useState<"standard" | "high" | "low">("standard");

  // Ratio Analysis State
  const [currentAssets, setCurrentAssets] = useState<number>(4500000);
  const [currentLiabilities, setCurrentLiabilities] = useState<number>(2500000);
  const [inventory, setInventory] = useState<number>(1200000);
  const [totalDebt, setTotalDebt] = useState<number>(3000000);
  const [totalEquity, setTotalEquity] = useState<number>(5000000);

  // Materiality Calculation (ISA 320 standards)
  const getPercentage = () => {
    switch (benchmarkType) {
      case "revenue":
        return riskProfile === "high" ? 0.005 : riskProfile === "low" ? 0.015 : 0.01; // 0.5% - 1.5%
      case "pbt":
        return riskProfile === "high" ? 0.03 : riskProfile === "low" ? 0.07 : 0.05; // 3% - 7%
      case "assets":
        return riskProfile === "high" ? 0.005 : riskProfile === "low" ? 0.015 : 0.01; // 0.5% - 1.5%
      default:
        return 0.01;
    }
  };

  const pct = getPercentage();
  const overallMateriality = Math.round(baseValue * pct);
  const performanceMaterialityFactor = riskProfile === "high" ? 0.60 : riskProfile === "low" ? 0.80 : 0.75;
  const performanceMateriality = Math.round(overallMateriality * performanceMaterialityFactor);
  const trivialThreshold = Math.round(overallMateriality * 0.05); // Clearly Trivial Threshold (5%)

  // Ratio Calculations
  const currentRatio = currentLiabilities > 0 ? (currentAssets / currentLiabilities).toFixed(2) : "0";
  const quickRatio = currentLiabilities > 0 ? ((currentAssets - inventory) / currentLiabilities).toFixed(2) : "0";
  const debtToEquity = totalEquity > 0 ? (totalDebt / totalEquity).toFixed(2) : "0";

  return (
    <section id="workbench" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE AUDIT WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Financial & Materiality Diagnostic Tool
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test how statutory materiality thresholds (ISA 320) and working capital liquidity diagnostics are computed during engagement planning.
          </p>

          {/* Sub Tab Switcher */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/10">
              <button
                onClick={() => setActiveTab("materiality")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "materiality"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ISA 320 Audit Materiality
              </button>
              <button
                onClick={() => setActiveTab("ratios")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "ratios"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Liquidity & Solvency Diagnostics
              </button>
            </div>
          </div>
        </div>

        {/* Workbench Body */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          
          {activeTab === "materiality" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Controls */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Engagement Parameters</span>
                    <span className="text-xs font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      ISA 320
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Select the audited entity&apos;s financial baseline to generate statutory thresholds.
                  </p>
                </div>

                {/* Benchmark Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Audit Benchmark Baseline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "revenue", label: "Gross Revenue", hint: "0.5% - 1.5%" },
                      { key: "pbt", label: "Profit Before Tax", hint: "3% - 7%" },
                      { key: "assets", label: "Total Assets", hint: "0.5% - 1.5%" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setBenchmarkType(item.key as any)}
                        className={`p-2.5 rounded-xl text-left border transition-all ${
                          benchmarkType === item.key
                            ? "bg-amber-500/15 border-amber-500/40 text-amber-300"
                            : "bg-slate-900 border-white/5 text-slate-400 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        <div className="text-xs font-bold">{item.label}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{item.hint}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Base Value */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Baseline Amount ($ USD)</span>
                    <span className="font-mono text-amber-400 text-xs">
                      ${baseValue.toLocaleString()}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={1000000}
                    max={50000000}
                    step={500000}
                    value={baseValue}
                    onChange={(e) => setBaseValue(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>$1M (SME)</span>
                    <span>$25M</span>
                    <span>$50M (Enterprise)</span>
                  </div>
                </div>

                {/* Inherent Risk Assessment */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Engagement Inherent & Control Risk
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: "low", label: "Low Risk", mult: "Higher Benchmark" },
                      { key: "standard", label: "Moderate Risk", mult: "Standard (Default)" },
                      { key: "high", label: "High Risk", mult: "Conservative Scope" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setRiskProfile(item.key as any)}
                        className={`p-2.5 rounded-xl text-left border transition-all ${
                          riskProfile === item.key
                            ? "bg-slate-800 border-amber-500/50 text-white shadow-sm"
                            : "bg-slate-900 border-white/5 text-slate-400 hover:text-white"
                        }`}
                      >
                        <div className="text-xs font-semibold">{item.label}</div>
                        <div className="text-[10px] text-slate-400">{item.mult}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Threshold Output */}
              <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-700 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Computed Audit Thresholds
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Applied Rate: {(pct * 100).toFixed(1)}%
                  </span>
                </div>

                {/* Overall Materiality */}
                <div className="p-4 rounded-xl bg-slate-800/70 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Overall Materiality (OM)</span>
                    <span className="font-mono text-[10px] text-slate-400">ISA 320 Para 10</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono text-gradient-gold">
                    ${overallMateriality.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Misstatements above this value will influence economic decisions of users.
                  </p>
                </div>

                {/* Performance Materiality */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-800/50 border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400">Performance Materiality (PM)</div>
                    <div className="text-xl font-bold text-slate-200 font-mono">
                      ${performanceMateriality.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Factor: {(performanceMaterialityFactor * 100)}% of OM
                    </div>
                  </div>

                  {/* Clearly Trivial */}
                  <div className="p-3.5 rounded-xl bg-slate-800/50 border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400">Trivial Threshold (CTT)</div>
                    <div className="text-xl font-bold text-slate-200 font-mono">
                      ${trivialThreshold.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      ISA 450 (5% of OM)
                    </div>
                  </div>
                </div>

                {/* Auditor Note */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>Auditor Sampling Guidance</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    Sample test items individually exceeding ${performanceMateriality.toLocaleString()} for 100% substantive scrutiny. Post-audit variances beneath ${trivialThreshold.toLocaleString()} do not require accumulation on the audit summary of unadjusted differences (SUD).
                  </p>
                </div>
              </div>

            </div>
          ) : (
            /* Ratio Analysis Tab */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Ratio Inputs */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Balance Sheet Diagnostics</span>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    Liquidity & Solvency
                  </span>
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300 flex justify-between">
                      <span>Current Assets ($)</span>
                      <span className="font-mono text-amber-400">${currentAssets.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min={1000000}
                      max={10000000}
                      step={250000}
                      value={currentAssets}
                      onChange={(e) => setCurrentAssets(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 rounded h-1.5 cursor-pointer mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 flex justify-between">
                      <span>Current Liabilities ($)</span>
                      <span className="font-mono text-amber-400">${currentLiabilities.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min={500000}
                      max={8000000}
                      step={250000}
                      value={currentLiabilities}
                      onChange={(e) => setCurrentLiabilities(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 rounded h-1.5 cursor-pointer mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 flex justify-between">
                      <span>Inventory ($)</span>
                      <span className="font-mono text-amber-400">${inventory.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min={200000}
                      max={3000000}
                      step={100000}
                      value={inventory}
                      onChange={(e) => setInventory(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 rounded h-1.5 cursor-pointer mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="text-xs font-medium text-slate-300 flex justify-between">
                        <span>Total Debt</span>
                        <span className="font-mono text-slate-400">${(totalDebt / 1000000).toFixed(1)}M</span>
                      </label>
                      <input
                        type="range"
                        min={500000}
                        max={10000000}
                        step={500000}
                        value={totalDebt}
                        onChange={(e) => setTotalDebt(Number(e.target.value))}
                        className="w-full accent-cyan-500 bg-slate-800 rounded h-1.5 cursor-pointer mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-slate-300 flex justify-between">
                        <span>Equity</span>
                        <span className="font-mono text-slate-400">${(totalEquity / 1000000).toFixed(1)}M</span>
                      </label>
                      <input
                        type="range"
                        min={1000000}
                        max={10000000}
                        step={500000}
                        value={totalEquity}
                        onChange={(e) => setTotalEquity(Number(e.target.value))}
                        className="w-full accent-cyan-500 bg-slate-800 rounded h-1.5 cursor-pointer mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ratio Cards Output */}
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-center">
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Current Ratio</div>
                    <div className="text-2xl font-bold font-mono text-white mt-1">
                      {currentRatio}x
                    </div>
                    <div className={`text-[10px] mt-1 font-semibold ${Number(currentRatio) >= 1.5 ? "text-emerald-400" : "text-amber-400"}`}>
                      {Number(currentRatio) >= 1.5 ? "Healthy Buffer" : "Tight Liquidity"}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-center">
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Quick Ratio</div>
                    <div className="text-2xl font-bold font-mono text-white mt-1">
                      {quickRatio}x
                    </div>
                    <div className={`text-[10px] mt-1 font-semibold ${Number(quickRatio) >= 1.0 ? "text-emerald-400" : "text-amber-400"}`}>
                      {Number(quickRatio) >= 1.0 ? "Liquid" : "Inventory Reliant"}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-center">
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Debt / Equity</div>
                    <div className="text-2xl font-bold font-mono text-white mt-1">
                      {debtToEquity}x
                    </div>
                    <div className={`text-[10px] mt-1 font-semibold ${Number(debtToEquity) <= 1.0 ? "text-emerald-400" : "text-rose-400"}`}>
                      {Number(debtToEquity) <= 1.0 ? "Prudent Gearing" : "High Leverage"}
                    </div>
                  </div>
                </div>

                {/* Analytical Commentary */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 space-y-2">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Analytical Auditor Commentary</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Working capital stands at <strong className="text-white">${((currentAssets - currentLiabilities) / 1000000).toFixed(2)}M</strong>. With an acid-test quick ratio of <strong className="text-amber-300">{quickRatio}x</strong>, the entity {Number(quickRatio) >= 1 ? "retains sufficient immediate liquid cash to settle short-term obligations without forced inventory liquidations" : "may experience short-term cash flow stress if trade debtor cycles elongate"}.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
