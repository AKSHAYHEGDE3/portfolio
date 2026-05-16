export const profile = {
  name: "Akshay Hegde",
  title: "Senior Software Engineer",
  company: "Oren",
  location: "India",
  tagline:
    "I build full-stack web products with React, Next.js, TypeScript, and Postgres — currently leading ESG-reporting features end-to-end on the OSH platform.",
  email: "akshayhegde158@gmail.com",
  resumePath: "/resume.pdf",
};

export const social = {
  email: `mailto:${profile.email}`,
  linkedin: "https://linkedin.com/in/akshay-hegde-47ba05206",
  github: "https://github.com/AKSHAYHEGDE3",
  twitter: "https://twitter.com/AkshayHegde39",
};

export const about = [
  "I'm a Senior Software Engineer with around 3.5 years of full-stack experience, currently at Oren where I work across React, Next.js, TypeScript, tRPC, and PostgreSQL.",
  "I joined as an intern in October 2022 and have shipped feature work across the product since — most recently as a Senior engineer owning delivery end-to-end on critical modules of the ESG-reporting platform.",
  "Outside work I follow cricket, watch films and series, and read manga and manhwa. If any of that overlaps with you, happy to chat.",
];

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export const roles: Role[] = [
  {
    company: "Oren",
    title: "Senior Software Engineer",
    start: "Apr 2025",
    end: "Present",
    current: true,
    bullets: [
      "Own end-to-end delivery across the ESG-reporting stack: framework-based reports, emissions modules, dashboards, supplier portals.",
      "Shipped 250+ tickets at Senior level with a 93% close rate, including 70+ High/Highest-priority production items.",
      "Led the Scope 3 emissions module migration and authored cleanup scripts that repaired thousands of broken historical records without downtime.",
      "Designed a per-account USD token-billing system across prod and demo tenants; rebuilt the monthly data-status email cron.",
    ],
  },
  {
    company: "Oren",
    title: "Software Engineer",
    start: "Jun 2023",
    end: "Mar 2025",
    bullets: [
      "Shipped 500+ Jira tickets across frontend, backend, and database layers on a Next.js / tRPC / Prisma / PostgreSQL / Azure stack.",
      "Built the ESG Dashboard module from scratch end-to-end — Next.js + tRPC + Prisma + PostgreSQL — powering daily workflows for sustainability officers.",
      "Cut report-data API latency by 75% through query restructuring, indexed access paths, and tRPC payload shaping.",
      "Designed and deployed the automated PDF report pipeline: cron + server-side PDF generation + email delivery.",
      "Architected the reusable component library that became the foundation of the product UI revamp across 15+ pages.",
    ],
  },
  {
    company: "Oren",
    title: "Software Engineer Intern",
    start: "Oct 2022",
    end: "May 2023",
    bullets: [
      "Foundations: shipped reusable React components, designed CRUD tRPC APIs against Prisma/PostgreSQL, and fixed production bugs across the early product.",
    ],
  },
  {
    company: "Omikron Technologies",
    title: "Software Developer Intern",
    start: "Jun 2022",
    end: "Sep 2022",
    bullets: ["Built frontend and backend features across an internal software product (full-stack JavaScript)."],
  },
  {
    company: "HireQuotient",
    title: "Full Stack Developer Intern",
    start: "Jan 2022",
    end: "Apr 2022",
    bullets: ["Debugged and resolved frontend / backend defects on a hiring-platform codebase, contributing to quality and stability."],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  github?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "Oren — OSH Platform",
    blurb:
      "ESG SaaS platform serving large enterprises for BRSR, GRI and Scope 1-2-3 reporting. Built the dashboard module from scratch, cut a critical API by 75%, and own Senior-level delivery across reporting, emissions, and supplier portals.",
    tags: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Azure"],
    caseStudy: "/projects/oren",
  },
  {
    title: "Slack & MS Teams Bot ↔ WebMethods.io",
    blurb:
      "Custom webhooks integrating Slack and Microsoft Teams with WebMethods.io (Software AG). OpenAI-powered query resolution and Tesseract OCR for image-to-text extraction.",
    tags: ["Node.js", "Python", "Tesseract OCR", "OpenAI"],
  },
  {
    title: "Yatagram — College Social Media App",
    blurb:
      "MERN-stack social platform built during undergrad. JWT auth, Cloudinary media storage, and an admin panel for college event management.",
    tags: ["MERN", "JWT", "Cloudinary"],
    href: "https://yatagram-6fe2f.web.app",
    github: "https://github.com/AKSHAYHEGDE3/yatagram",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Jotai", "shadcn/ui"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "tRPC", "REST APIs", "Cron schedulers", "Server-side PDF rendering"],
  },
  {
    group: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Azure", "AWS", "Vercel", "Git / GitHub", "Cypress E2E"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
];
