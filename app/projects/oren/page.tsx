import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, FileDown } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/app/content";

export const metadata: Metadata = {
  title: "Oren — OSH Platform · Case Study",
  description:
    "Senior SWE work on the OSH ESG-reporting platform: dashboards, performance, supplier portals, Scope 3 emissions, and AI-automated dev workflows.",
};

const wins = [
  {
    title: "ESG Dashboard module — built end-to-end",
    body:
      "Designed and shipped the dashboard module from scratch across Next.js + tRPC + Prisma + PostgreSQL. Interactive Environment / Social / Governance views, Executive variants, and drill-down supplier analytics powering daily workflows for sustainability officers.",
  },
  {
    title: "Report workflow: ~30–40s → under 1s",
    body:
      "The core report workflow was the heaviest on the platform. I split one over-fetching API into targeted endpoints, added indexed access paths, and virtualized + progressively rendered the frontend — bringing render time from ~30–40s down to under 1s.",
  },
  {
    title: "AI-automated dev workflow — Claude Code skills & agents",
    body:
      "Built custom Claude Code skills and AI agents that automate the team's ticket-to-PR workflow — planning, implementation scaffolding, Cypress E2E test generation, and automated PR review.",
  },
  {
    title: "Reusable component library — 15+ pages",
    body:
      "Architected a responsive, type-safe component library that became the foundation of the product UI revamp, enforcing visual consistency and accelerating downstream feature delivery.",
  },
  {
    title: "Automated PDF + email pipeline",
    body:
      "Cron job + server-side PDF generation + email delivery, replacing manual weekly exports across every customer tenant.",
  },
  {
    title: "Scope 3 emissions — new categories & ingestion",
    body:
      "Extended the Scope 3 emissions module with new Fuel & Energy (C3) and Waste (C5) categories — building the data model, calculation logic, and bulk-upload ingestion pipelines for historical data.",
  },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "tRPC",
  "Prisma",
  "PostgreSQL",
  "Redis",
  "Cypress",
];

export default function OrenCaseStudy() {
  return (
    <>
      <Nav />
      <main className="container-content pt-32 pb-16 sm:pt-40">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Oren — OSH Platform</h1>
        <p className="mt-3 font-mono text-sm text-accent">
          Senior Software Engineer · Oct 2022 – Present
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          ESG SaaS platform serving large enterprises for BRSR, GRI and Scope 1-2-3 sustainability reporting. I
          joined as an intern in October 2022 and am currently Senior Software Engineer, owning end-to-end
          delivery across multiple modules.
        </p>

        <p className="mt-4 max-w-2xl font-mono text-xs text-text-tertiary">
          Product is private. The work below is described without exposing customer data or product screenshots.
        </p>

        <AnimatedSection className="mt-16">
          <SectionHeading number="01" title="Stack" />
          <ul className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-text-secondary"
              >
                {s}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <SectionHeading number="02" title="Selected wins" />
          <ol className="space-y-6">
            {wins.map((w, i) => (
              <li
                key={i}
                className="rounded-lg border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40"
              >
                <h3 className="mb-2 flex items-baseline gap-3 text-lg font-semibold text-text-primary">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {w.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary sm:text-base">{w.body}</p>
              </li>
            ))}
          </ol>
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <SectionHeading number="03" title="Growth at Oren" />
          <p className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Joined Oct 2022 as an intern. Promoted to full-time Software Engineer in June 2023, and to Senior
            Software Engineer on the April 2025 appraisal cycle after consistently owning customer-critical work
            across the product.
          </p>
        </AnimatedSection>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            <FileDown className="h-4 w-4" />
            Full résumé
          </a>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded border border-border px-5 py-3 font-mono text-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            More projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
