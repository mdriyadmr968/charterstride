import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CharterStride | CA Finalist & Articled Audit Portfolio",
  description:
    "Professional portfolio of Ayaan Rahman — CA Finalist & Senior Articled Assistant specializing in Statutory Audits, IFRS/Ind AS Financial Reporting, Corporate Taxation, and Internal Controls.",
  keywords: [
    "Chartered Accountant Student",
    "CA Finalist",
    "Articled Assistant",
    "Statutory Audit",
    "IFRS Financial Reporting",
    "Corporate Tax",
    "Internal Controls",
    "CharterStride",
  ],
  authors: [{ name: "Ayaan Rahman" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-amber-500/25 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
