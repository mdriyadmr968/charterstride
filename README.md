# CharterStride — Chartered Accountant Trainee Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-f43f5e?style=flat&logo=framer)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

A high-performance portfolio application built specifically for **Junior Chartered Accountants**, **CA Finalists**, and **Articled Audit Trainees** to present their practical assurance experience, taxation acumen, and financial modeling competencies to audit partners, recruiting directors, and corporate finance executives.

---

## 📑 Project Documentation Index

Comprehensive guides have been added to the [`docs/`](./docs) directory:

| Document | Description |
| :--- | :--- |
| **[Architecture Guide](./docs/ARCHITECTURE.md)** | Technical stack, component hierarchy, data flow, and state design. |
| **[Customization Guide](./docs/CUSTOMIZATION_GUIDE.md)** | Step-by-step instructions to update your bio, metrics, engagements, and firm details. |
| **[Audit & Financial Formulas](./docs/AUDIT_FORMULAS.md)** | Explanation of ISA 320 materiality calculations and balance sheet liquidity diagnostics. |
| **[Deployment Guide](./docs/DEPLOYMENT.md)** | Guide for deploying to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or a custom domain. |

---

## 🌟 Key Application Features

- **Modern Executive Finance UI/UX**: Deep charcoal theme (`#080c14`) with warm gold (`#F59E0B`) and emerald assurance accents, glassmorphic cards, and typography optimized for audit leaders.
- **Auditor Cockpit & Real-time Metrics**: Live KPI counters (Engagements Assisted, Scrutiny Volume, Compliance Rate, Exam Distinctions) and active audit field status checks.
- **Filterable Practical Engagements Showcase**: Real-world fieldwork execution categorized by **Statutory Audit**, **Taxation & GST**, **Internal Controls**, and **Financial Advisory**.
- **Interactive Case Study Modal**: Deep-dive inspection of fieldwork scope, substantive procedures, standards (ISA/IFRS), and quantifiable impacts.
- **Technical Domain Competency Matrix**: Tabbed architecture covering ISA Audit standards (ISA 240, 315, 500, 700), Taxation (TDS, VAT, Transfer Pricing), IFRS/Ind AS financial reporting (IFRS 15, 16, IAS 2, 12), and tools (Excel, SAP FICO, Tally Prime, Power BI).
- **Interactive Audit Materiality & Working Capital Workbench**:
  - **ISA 320 Materiality Calculator**: Real-time calculation of Overall Materiality (OM), Performance Materiality (PM), and Clearly Trivial Thresholds (CTT) across benchmarks and risk profiles.
  - **Liquidity & Solvency Diagnostics**: Real-time Current Ratio, Quick Ratio, and Debt-to-Equity calculator with live auditor commentary.
- **Charter Journey Roadmap**: Chronological timeline from University Graduation through CA Intermediate (First Attempt Distinction) to Senior Articleship and CA Final exams.
- **In-Browser Executive Dossier & CV Viewer**: Clean, high-density dossier with built-in Print / Save-to-PDF button.
- **Direct Engagement Inquiry & Scheduling**: Contact form with pre-filled discussion topics, copy-to-clipboard email feedback, and professional ethics confidentiality disclaimer (IESBA Code of Ethics).

---

## 🚀 Quickstart Guide

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ (tested on Node v24.12.0)
- **Package Manager**: npm

### 2. Installation & Running
```bash
# Navigate to the project directory
cd C:\Projects\charter-stride

# Start the development server
npm run dev
```

Visit **`http://localhost:3000`** in your browser.

### 3. Production Build
```bash
# Build the optimized static application
npm run build

# Start the production server
npm start
```

---

## ⚙️ How to Personalize the Content

All candidate details, career metrics, engagement case studies, academic milestones, and testimonials are managed in **one central file**:

📁 **`src/data/portfolioData.ts`**

Simply update the values in the typed `portfolioData` object. See the [Customization Guide](./docs/CUSTOMIZATION_GUIDE.md) for full details.

---

## ⚖️ Professional Ethics Notice

This portfolio template is designed in compliance with the **IESBA International Code of Ethics for Professional Accountants** and regional institutes (ICAI, ICAB, ACCA, ICAEW). All mock client engagements are anonymized to preserve strict auditor-client confidentiality.
