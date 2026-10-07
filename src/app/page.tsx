"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Engagements from "@/components/Engagements";
import DomainMatrix from "@/components/DomainMatrix";
import AuditMaterialityTool from "@/components/AuditMaterialityTool";
import JourneyTimeline from "@/components/JourneyTimeline";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 flex flex-col">
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Practical Field Engagements */}
        <Engagements />

        {/* Technical Domain Competency Matrix */}
        <DomainMatrix />

        {/* Interactive Audit & Materiality Workbench */}
        <AuditMaterialityTool />

        {/* Chartered Accountancy Journey Roadmap */}
        <JourneyTimeline />

        {/* Supervising Partner Testimonials */}
        <Testimonials />

        {/* Direct Contact & Scheduling Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-Browser Executive Dossier & CV Viewer */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
