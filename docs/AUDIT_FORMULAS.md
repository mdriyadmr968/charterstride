# Audit & Financial Diagnostic Formulas

This document details the formulas and auditing standards implemented in the **Audit Workbench** component (`src/components/AuditMaterialityTool.tsx`).

---

## 1. Audit Materiality (ISA 320 / SA 320)

**Materiality** represents the threshold above which financial misstatements, individually or in aggregate, could reasonably be expected to influence the economic decisions of users taken on the basis of the financial statements.

### A. Overall Materiality (OM)

$$\text{Overall Materiality} = \text{Benchmark Baseline} \times \text{Benchmark Percentage}$$

#### Standard Benchmarks & Percentages:
| Benchmark | Typical Range | High Risk (Conservative) | Standard Risk | Low Risk |
| :--- | :--- | :--- | :--- | :--- |
| **Gross Revenue** | 0.5% – 1.5% | 0.5% | 1.0% | 1.5% |
| **Profit Before Tax (PBT)** | 3.0% – 7.0% | 3.0% | 5.0% | 7.0% |
| **Total Assets** | 0.5% – 1.5% | 0.5% | 1.0% | 1.5% |

---

### B. Performance Materiality (PM)

Performance Materiality is set by the auditor to reduce to an appropriately low level the probability that the aggregate of uncorrected and undetected misstatements exceeds Overall Materiality.

$$\text{Performance Materiality} = \text{Overall Materiality} \times \text{Factor}$$

#### Factors based on assessed Risk of Material Misstatement (RoMM):
- **High Risk / Weak Internal Controls:** $60\%$ of Overall Materiality
- **Moderate / Standard Risk:** $75\%$ of Overall Materiality
- **Low Risk / Robust Internal Controls:** $80\%$ of Overall Materiality

---

### C. Clearly Trivial Threshold (CTT / ISA 450)

Misstatements below this threshold are matters that are clearly inconsequential, whether taken individually or in the aggregate, and do not need to be accumulated on the Summary of Unadjusted Differences (SUD).

$$\text{Clearly Trivial Threshold} = \text{Overall Materiality} \times 5\%$$

---

## 2. Balance Sheet Liquidity & Solvency Diagnostics

### A. Current Ratio

Measures an entity's ability to cover its short-term obligations with its short-term assets.

$$\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}$$

- **Benchmark:** $\ge 1.5\text{x}$ is considered healthy for most commercial industries.
- **Auditor Flag:** $< 1.0\text{x}$ triggers going-concern and working capital stress scrutiny.

---

### B. Quick Ratio (Acid-Test)

Evaluates immediate short-term liquidity by excluding inventories, which take longer to liquidate into cash.

$$\text{Quick Ratio} = \frac{\text{Current Assets} - \text{Inventory}}{\text{Current Liabilities}}$$

- **Benchmark:** $\ge 1.0\text{x}$ reflects strong immediate solvency.
- **Auditor Flag:** $< 0.8\text{x}$ suggests heavy reliance on inventory liquidation to pay trade payables.

---

### C. Debt-to-Equity Ratio (Financial Leverage)

Calculates the proportion of debt financing relative to shareholders' equity.

$$\text{Debt-to-Equity} = \frac{\text{Total Debt}}{\text{Total Shareholders' Equity}}$$

- **Benchmark:** $\le 1.0\text{x}$ to $1.5\text{x}$ represents prudent financial gearing.
- **Auditor Flag:** $\ge 2.5\text{x}$ indicates high leverage risk and heightened interest coverage scrutiny.
