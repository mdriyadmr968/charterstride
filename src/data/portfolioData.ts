export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Engagement {
  id: string;
  title: string;
  clientType: string;
  category: "Statutory Audit" | "Taxation & GST" | "Financial Advisory" | "Internal Controls";
  duration: string;
  summary: string;
  responsibilities: string[];
  keyDeliverables: string[];
  standardsUsed: string[];
  toolsUsed: string[];
  impactMetric: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    tag: string;
  }[];
  standards: string[];
}

export interface Milestone {
  year: string;
  stage: string;
  title: string;
  institution: string;
  status: "Completed" | "In Progress" | "Upcoming";
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  relationship: string;
}

export interface PortfolioData {
  candidate: {
    name: string;
    tagline: string;
    badge: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    articleshipFirm: string;
    status: string;
    bio: string;
  };
  keyMetrics: Metric[];
  skillDomains: SkillCategory[];
  engagements: Engagement[];
  journeyMilestones: Milestone[];
  certifications: { name: string; issuer: string; year: string }[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  candidate: {
    name: "Ayaan Rahman",
    tagline: "Chartered Accountant Finalist & Articled Audit Trainee",
    badge: "CA Finalist • Senior Articled Assistant",
    location: "Dhaka / Regional Financial Hub",
    email: "ayaan.rahman.ca@example.com",
    phone: "+880 1700-000000",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    articleshipFirm: "A. Qasem & Co. Chartered Accountants (Member Firm of BDO)",
    status: "Actively seeking Post-Articleship & Financial Analyst opportunities",
    bio: "Articled Assistant with 2.5+ years of practical field experience in statutory audits, direct & indirect taxation, internal control evaluations, and IFRS/Ind AS financial reporting. Dedicated to rigorous data-driven assurance, fraud risk deterrence, and automated financial modeling.",
  },

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
  ],

  skillDomains: [
    {
      category: "Statutory & Internal Audit",
      description: "Risk-based auditing, internal control testing, vouching & verification, and audit workpaper documentation under International Standards on Auditing (ISA).",
      standards: ["ISA 240 (Fraud Risk)", "ISA 315 (Material Misstatement)", "ISA 500 (Audit Evidence)", "ISA 700 (Audit Opinions)"],
      skills: [
        { name: "Substantive Testing & Analytical Review", level: 95, tag: "Audit Execution" },
        { name: "Internal Financial Control (IFC / SOX)", level: 90, tag: "Risk & Controls" },
        { name: "Inventory Physical Verification & Cut-off", level: 92, tag: "Verification" },
        { name: "Sampling & Materiality Calculation", level: 94, tag: "Assurance" },
      ],
    },
    {
      category: "Taxation & Regulatory Filing",
      description: "Direct corporate tax computation, deferred tax accounting, withholding tax audits, VAT reconciliation, and regulatory disclosure prep.",
      standards: ["Income Tax Act", "Value Added Tax (VAT) Act", "Transfer Pricing Regulations", "Customs & Tariff Rules"],
      skills: [
        { name: "Corporate Tax Return Preparation", level: 88, tag: "Direct Tax" },
        { name: "VAT Input-Output Tax Reconciliation", level: 90, tag: "Indirect Tax" },
        { name: "Withholding Tax (TDS / VDS) Compliance", level: 92, tag: "Statutory" },
        { name: "Tax Audit Report & Statement Scrutiny", level: 85, tag: "Advisory" },
      ],
    },
    {
      category: "Financial Reporting & Standards",
      description: "Hands-on preparation of financial statements complying with IFRS / Ind AS / Local GAAP, including footnote disclosures and valuation checks.",
      standards: ["IFRS 15 (Revenue)", "IFRS 16 (Leases)", "IAS 2 (Inventories)", "IAS 12 (Income Taxes)"],
      skills: [
        { name: "Statement of Financial Position & P&L", level: 95, tag: "Reporting" },
        { name: "Cash Flow Statement (Direct/Indirect)", level: 90, tag: "Cash Accounting" },
        { name: "IFRS 16 Lease Amortization Modeling", level: 86, tag: "Compliance" },
        { name: "Ratio Analysis & Financial Diagnostics", level: 94, tag: "Advisory" },
      ],
    },
    {
      category: "Tech, ERP & Analytics Tools",
      description: "Blending traditional financial scrutiny with modern analytics software, ERP systems, and automated financial models.",
      standards: ["Advanced Excel (VBA/PowerQuery)", "ERP Navigation", "Power BI Dashboards"],
      skills: [
        { name: "Advanced MS Excel (Index/Match, XLOOKUP, Modeling)", level: 98, tag: "Core Tool" },
        { name: "Tally Prime & ERP Ledger Audits", level: 90, tag: "Accounting Software" },
        { name: "Power BI Data Visualization & Variance Scrutiny", level: 84, tag: "Analytics" },
        { name: "SAP FICO / Oracle General Ledger Navigation", level: 80, tag: "Enterprise ERP" },
      ],
    },
  ],

  engagements: [
    {
      id: "stat-mfg",
      title: "Statutory Audit of Multi-Plant Manufacturing Entity",
      clientType: "Public Limited Manufacturer ($65M Turnover)",
      category: "Statutory Audit",
      duration: "4 Months (Senior Team Lead)",
      summary: "Led fieldwork for a multi-plant industrial textile manufacturer, directing physical stock-taking across 3 warehouses and auditing raw materials and finished goods valuation.",
      responsibilities: [
        "Conducted end-to-end inventory physical counts reconciling discrepancies over $180,000.",
        "Executed substantive procedures on revenue recognition under IFRS 15 across export contracts.",
        "Tested internal controls over Fixed Assets Addition and Depreciation registers.",
        "Drafted management letter points highlighting inventory shrinkage and unrecorded liabilities.",
      ],
      keyDeliverables: [
        "Comprehensive Audit Working Papers (A-WP File)",
        "Audit Findings & Management Representation Letter",
        "Inventory Reconciliation Matrix with valuation adjustments",
      ],
      standardsUsed: ["ISA 501", "IFRS 15", "IAS 2 (Inventories)"],
      toolsUsed: ["MS Excel", "Tally ERP 9", "CaseWare"],
      impactMetric: "Identified $210K unrecorded year-end liabilities prior to board sign-off",
    },
    {
      id: "tax-corporate",
      title: "Corporate Tax Assessment & Transfer Pricing Benchmark",
      clientType: "Multinational FMCG Subsidiary ($35M Turnover)",
      category: "Taxation & GST",
      duration: "3 Months (Tax Associate)",
      summary: "Spearheaded corporate tax computation, deferred tax reconciliation (IAS 12), and transfer pricing document verification for cross-border management fees.",
      responsibilities: [
        "Formulated the annual corporate income tax return and audited TDS reconciliations.",
        "Calculated temporary differences for Deferred Tax Assets/Liabilities on accelerated depreciation.",
        "Reviewed withholding tax challans and contested disallowances during tax authority scrutiny.",
        "Benchmarked arm's length profit margins against local industry comparables.",
      ],
      keyDeliverables: [
        "Corporate Tax Return Filing Pack",
        "IAS 12 Deferred Tax Schedule",
        "Transfer Pricing Local File documentation",
      ],
      standardsUsed: ["IAS 12", "Local Corporate Tax Code", "OECD Guidelines"],
      toolsUsed: ["Excel Financial Modeling", "Tax Portal", "Enterprise SAP"],
      impactMetric: "Saved $45K in potential penalty exposure via proactive withholding reconciliations",
    },
    {
      id: "internal-control",
      title: "Internal Control & Segregation of Duties (SoD) Review",
      clientType: "Nationwide Retail & E-Commerce Network",
      category: "Internal Controls",
      duration: "2.5 Months (Risk Auditor)",
      summary: "Evaluated procure-to-pay (P2P) and order-to-cash (O2C) cycles across 45 retail outlets, identifying critical authorization bypass vulnerabilities.",
      responsibilities: [
        "Mapped user authorization profiles in the ERP system to uncover Segregation of Duties conflicts.",
        "Conducted surprise cash counts and inventory audits across flagship retail locations.",
        "Benchmarked vendor onboarding and 3-way matching procedures for purchase invoices.",
        "Co-authored standard operating procedure (SOP) enhancements with executive management.",
      ],
      keyDeliverables: [
        "Risk & Control Matrix (RCM)",
        "Segregation of Duties (SoD) Conflict Heatmap",
        "P2P Process Optimization Roadmap",
      ],
      standardsUsed: ["COSO Internal Control Framework", "ISA 315", "ISO 27001 (Access Controls)"],
      toolsUsed: ["Visio Process Mapping", "Advanced Excel", "Custom Retail ERP"],
      impactMetric: "Eliminated 14 high-risk SoD system conflicts across user billing permissions",
    },
    {
      id: "advisory-due-diligence",
      title: "Financial Due Diligence & Working Capital Stress Test",
      clientType: "High-Growth FinTech / Logistics Venture",
      category: "Financial Advisory",
      duration: "1.5 Months (Financial Analyst)",
      summary: "Assisted senior partners in buy-side financial due diligence for a prospective strategic acquisition, analyzing normalized EBITDA and quality of earnings.",
      responsibilities: [
        "Reconstructed historical 3-year cash flows and normalized non-recurring operational expenses.",
        "Stress-tested working capital cycles and debtor aging profile to evaluate provisioning adequacy.",
        "Assessed revenue churn, customer acquisition cost (CAC) vs. lifetime value (LTV) unit economics.",
        "Prepared presentations for venture capital investment committee deliberations.",
      ],
      keyDeliverables: [
        "Quality of Earnings (QoE) Analytical Report",
        "Working Capital Target Peg Schedule",
        "Financial Valuation Sensitivity Table",
      ],
      standardsUsed: ["IFRS 9", "Discounted Cash Flow (DCF)", "Quality of Earnings (QoE)"],
      toolsUsed: ["Power BI", "Financial Modeling (3-Statement)", "Excel Macros"],
      impactMetric: "Identified $320K in aggressive revenue recognitions requiring purchase price adjustment",
    },
  ],

  journeyMilestones: [
    {
      year: "2024 - Present",
      stage: "CA Final Stage",
      title: "Chartered Accountancy Final Examination Candidate",
      institution: "Institute of Chartered Accountants",
      status: "In Progress",
      achievements: [
        "Advanced Financial Reporting (IFRS/Ind AS/IAS) specialization",
        "Strategic Financial Management & Corporate Laws deep dive",
        "Advanced Audit & Professional Ethics curriculum",
      ],
    },
    {
      year: "2022 - 2025",
      stage: "Articleship Training",
      title: "Senior Articled Assistant (Audit & Tax Advisory)",
      institution: "A. Qasem & Co. Chartered Accountants (BDO Network)",
      status: "In Progress",
      achievements: [
        "Promoted to Senior Articled Assistant leading audit teams of 3-5 trainees",
        "Managed 28+ statutory audits, internal control reviews, and corporate tax files",
        "Commended by Audit Partners for rigorous documentation and zero audit review queries",
      ],
    },
    {
      year: "2022",
      stage: "CA Intermediate",
      title: "Intermediate Examination Passed (Group I & II)",
      institution: "Institute of Chartered Accountants",
      status: "Completed",
      achievements: [
        "Cleared both groups on the first attempt with distinction in Financial Accounting",
        "Achieved 82nd percentile in Cost & Management Accounting",
      ],
    },
    {
      year: "2018 - 2022",
      stage: "Graduation",
      title: "Bachelor of Business Administration (BBA) in Accounting & Finance",
      institution: "University Faculty of Business Studies",
      status: "Completed",
      achievements: [
        "CGPA: 3.85 / 4.00 (Dean's Honor List across 4 semesters)",
        "President of the University Accounting & Finance Club",
      ],
    },
  ],

  certifications: [
    { name: "Bloomberg Market Concepts (BMC)", issuer: "Bloomberg LP", year: "2024" },
    { name: "Financial Modeling & Valuation Analyst (FMVA)", issuer: "CFI", year: "2023" },
    { name: "Advanced Excel for Corporate Finance & Audit", issuer: "PwC / Coursera", year: "2023" },
    { name: "IFRS Certificate in Financial Reporting", issuer: "ACCA Global", year: "2022" },
  ],

  testimonials: [
    {
      name: "Tariqul Islam, FCA",
      role: "Audit Engagement Partner",
      organization: "Top-Tier Chartered Accountancy Firm",
      quote: "Ayaan demonstrates an analytical sharpness that is rare among articled trainees. His thoroughness in physical stock counts, working paper structuring, and understanding of IFRS 15 revenue rules saved our engagement team valuable hours during tight year-end deadlines.",
      relationship: "Direct Supervising Partner",
    },
    {
      name: "Mahmud Hasan, ACA",
      role: "Head of Internal Audit",
      organization: "Leading Industrial Conglomerate",
      quote: "During our statutory audit, Ayaan conducted himself with impeccable professional skepticism. His queries were always grounded in substantive standards, and his findings on our inventory shrinkage were constructive and actionable.",
      relationship: "Auditee Client Lead",
    },
  ],
};
