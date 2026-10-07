# CharterStride Customization Guide

This guide walks you through personalizing every section of the **CharterStride** portfolio to match your own professional credentials, training firm, and career background.

---

## 1. Central Data Configuration: `portfolioData.ts`

95% of your customizations are made in one file:
📁 **`src/data/portfolioData.ts`**

### Candidate Profile

Update the `candidate` object:
```typescript
candidate: {
  name: "Your Full Name",
  tagline: "Chartered Accountant Finalist & Articled Audit Trainee",
  badge: "CA Finalist • Senior Articled Assistant",
  location: "Your City / Country",
  email: "your.email@example.com",
  phone: "+1 (555) 000-0000",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourhandle",
  articleshipFirm: "Your Audit Firm Name (e.g. PwC, BDO, KPMG, Local Leading Firm)",
  status: "Actively seeking Corporate Finance / Audit Senior opportunities",
  bio: "Write a 2-3 sentence executive summary highlighting your field experience, audit standards mastery, and technical analytical tools.",
}
```

---

## 2. Career Key Metrics

These four cards appear below the Hero section and in your downloadable executive CV.
```typescript
keyMetrics: [
  {
    label: "Audit Engagements",
    value: "28+",
    description: "Across manufacturing, textile, FMCG, and financial services",
  },
  {
    label: "Portfolio Scrutiny",
    value: "$140M+",
    description: "Cumulative gross revenue & balance sheet assets audited",
  },
  {
    label: "Tax Compliance",
    value: "100%",
    description: "On-time statutory return filings & 3CD audit documentation",
  },
  {
    label: "Academic Standing",
    value: "Top 5%",
    description: "Cleared Intermediate & Professional Stages on first attempts",
  },
]
```

---

## 3. Practical Audit & Tax Engagements (Case Studies)

Each engagement card provides full details when a recruiter clicks **"Full Audit Scope"**.

```typescript
{
  id: "unique-slug-id",
  title: "Statutory Audit of Multi-Plant Manufacturing Entity",
  clientType: "Public Limited Manufacturer ($65M Turnover)",
  category: "Statutory Audit", // Must be one of: "Statutory Audit" | "Taxation & GST" | "Financial Advisory" | "Internal Controls"
  duration: "4 Months (Senior Team Lead)",
  summary: "Brief paragraph explaining your fieldwork role and primary focus.",
  responsibilities: [
    "Specific audit procedure 1 (e.g. physical inventory count)...",
    "Specific audit procedure 2 (e.g. substantive testing on revenue)...",
    "Specific audit procedure 3 (e.g. internal financial control IFC testing)...",
  ],
  keyDeliverables: [
    "Audit Working Papers (A-WP)",
    "Management Representation Letter",
    "Inventory Reconciliation Schedule",
  ],
  standardsUsed: ["ISA 501", "IFRS 15", "IAS 2"],
  toolsUsed: ["MS Excel", "Tally ERP 9", "CaseWare"],
  impactMetric: "Identified $210K unrecorded liabilities prior to sign-off",
}
```

> **Confidentiality Tip:** In compliance with the IESBA / ICAI / ACCA Code of Ethics, do not publish real corporate client names without permission. Use descriptive terms such as *"Tier-1 FMCG Conglomerate"* or *"Listed Commercial Bank"*.

---

## 4. Skills & Accounting Standards Matrix

Located under `skillDomains`:
- You can add or adjust categories (`Statutory & Internal Audit`, `Taxation & Regulatory Filing`, etc.).
- Update `standards` to reflect the specific standards you work with (e.g., `ISA`, `IFRS`, `Ind AS`, `US GAAP`, or local Tax Acts).
- Update `level` (from 1 to 100) to adjust the proficiency bar.

---

## 5. Journey Milestones & Certifications

- **`journeyMilestones`**: Chronological order of your exams and roles (e.g., Graduation $\rightarrow$ CA Foundation $\rightarrow$ CA Intermediate $\rightarrow$ Articleship $\rightarrow$ CA Final).
- **`certifications`**: Displays badges for credentials like Bloomberg Market Concepts, FMVA, CFA Level 1, ACCA certificates, or Advanced Excel courses.

---

## 6. Partner & Client Endorsements

Under `testimonials`:
- Include quotes from your supervising engagement partner, senior manager, or auditee finance controller.

---

## 7. Branding & Colors

The project uses Tailwind CSS v4 in `src/app/globals.css`.

- **Background Color**: `#080c14` (Deep obsidian slate)
- **Primary Accent**: Gold/Amber (`#f59e0b` to `#d97706`)
- **Assurance Green**: `#10b981` (Verified badges and checks)

To customize the monogram logo initials, open `src/components/Navbar.tsx` and `src/components/Footer.tsx` and change `CS` to your own initials (e.g., `AR` for Ayaan Rahman).
