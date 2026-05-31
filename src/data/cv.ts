/**
 * Single source of truth for all portfolio content.
 * Derived from CV_Jevgeni_Rumjantsev_2026.md (latest experience weighted first).
 * Edit here — every section of the site and the printable CV reads from this file.
 */

export interface Role {
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  location: string;
  /** True for current / most recent role — gets visual emphasis. */
  current?: boolean;
  highlights: string[];
  /** Short tags surfaced under the role (tech / domain keywords). */
  stack?: string[];
}

export interface EarlierRole {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  degree: string;
  period: string;
}

export const profile = {
  name: "Jevgeni Rumjantsev",
  title: "Senior Software Engineer",
  tagline: "Payments & Fintech · AI-Augmented Delivery",
  location: "Barcelona, Spain",
  phone: "+31 6 457 554 07",
  phoneHref: "tel:+31645755407",
  email: "zeka.rum@gmail.com",
  linkedin: "linkedin.com/in/jevgenir",
  linkedinUrl: "https://www.linkedin.com/in/jevgenir/",
  github: "github.com/jackinf",
  githubUrl: "https://github.com/jackinf",
  summary:
    "Senior engineer with 12+ years building scalable, fault-tolerant backends across payments, travel and SaaS. Specialist in high-stakes deposits & withdrawals, banking-vendor integrations and regulatory compliance (CoP/VoP, SEPA). Daily user of AI coding agents — Cursor and Claude Code (agents, skills, schedulers) — to accelerate delivery while keeping production-grade quality. Polyglot in Node.js and Rust; comfortable owning systems end-to-end, on-call and in production.",
} as const;

/** Compact one-liners shown as animated stats in the hero. */
export const stats: { value: string; label: string }[] = [
  { value: "12+", label: "Years engineering" },
  { value: "Node · Rust", label: "Daily languages" },
  { value: "Payments", label: "Domain focus" },
  { value: "AI-augmented", label: "Delivery" },
];

export const experience: Role[] = [
  {
    company: "Kraken",
    companyNote: "Top global crypto exchange",
    role: "Senior Software Engineer · Payments",
    period: "Apr 2025 – Jun 2026",
    location: "Remote / Amsterdam, NL",
    current: true,
    highlights: [
      "Owned deposits & withdrawals on the Payments team, shipping in Node.js and Rust (≈50/50) for a top global crypto exchange.",
      "Delivered Blik Deposits and Blik Instant Buy, expanding instant local payment coverage for Polish users.",
      "Implemented Confirmation/Verification of Payee (CoP/VoP) name-matching to cut misdirected payments and meet anti-fraud requirements.",
      "Built a SEPA Direct Debit notification system to keep the platform SEPA-compliant, plus automatic returns via Ivy to streamline failed-payment handling.",
      "Integrated and operated multiple banking vendors — Banking Circle, Ivy, OpenPayd, Plaid — and carried on-call ownership for live payment incidents.",
      "Drove AI-augmented delivery: built internal tooling and used Claude Code agents with up-to-date practices (skills, schedulers, Obsidian as long-term memory) to raise team productivity.",
    ],
    stack: ["Node.js", "Rust", "SEPA", "CoP/VoP", "Blik", "On-call"],
  },
  {
    company: "Box",
    companyNote: "Secure cloud content management",
    role: "Senior Software Engineer",
    period: "Apr 2022 – Apr 2025",
    location: "Amsterdam, NL",
    highlights: [
      "Built Digital Signatures and Document Generation products in scrum teams; Java & Django backends with React & Vue frontends.",
      "Configured infrastructure as code and ran workloads on Kubernetes; developed tooling in Python, TypeScript and Rust.",
    ],
    stack: ["Java", "Django", "React", "Vue", "Kubernetes", "Rust"],
  },
  {
    company: "TimeChimp",
    companyNote: "Time-tracking startup",
    role: "Lead Software Engineer",
    period: "Sep 2020 – Mar 2022",
    location: "Amsterdam, NL",
    highlights: [
      "Built 10 microservices in .NET applying CQRS and Event Sourcing, with full unit/integration/e2e coverage and a React/TypeScript frontend.",
      "Owned CI/CD and deployed to Kubernetes + Terraform on Azure; led a team of 8 and partly acted as Scrum Master.",
    ],
    stack: [".NET", "CQRS", "Event Sourcing", "Azure", "Terraform", "Team lead"],
  },
  {
    company: "Travix",
    companyNote: "Travel search & booking",
    role: "Senior Software Engineer",
    period: "Sep 2018 – Aug 2020",
    location: "Amsterdam, NL",
    highlights: [
      "Developed payments-module microservices and a React/TypeScript frontend; introduced Google Pay & Apple Pay, lifting turnover.",
      "Deployed cron jobs on Kubernetes / Google Cloud Platform.",
    ],
    stack: ["Microservices", "React", "Google Pay", "Apple Pay", "GCP"],
  },
];

export const earlier: EarlierRole[] = [
  {
    company: "Genius Sports",
    role: "Software Engineer",
    period: "Jun 2017 – Aug 2018",
    location: "Tallinn",
    summary: "Built unit-tested, high-performance .NET microservices for sports data.",
  },
  {
    company: "Finestmedia",
    role: "Software Engineer",
    period: "Aug 2013 – Jun 2017",
    location: "Tallinn",
    summary: "Developed the Estonian Government application-submission portal (.NET Framework).",
  },
  {
    company: "Speys",
    role: "Software Engineer (part-time)",
    period: "Jun 2017 – Jun 2019",
    location: "Remote",
    summary: "Built 5 .NET microservices and 3 React/TS frontends for B2B parcel tracking.",
  },
];

export const projects: Project[] = [
  {
    name: "Jira & GitHub aggregator",
    description: "Internal CLI fully in Rust leveraging traits & async (Tokio).",
    tags: ["Rust", "Tokio", "CLI"],
  },
  {
    name: "Tank game",
    description: "2D top-down game built on the Bevy engine (100% Rust).",
    tags: ["Rust", "Bevy", "Game dev"],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Node.js / TypeScript",
      "Rust (Tokio)",
      "C# / .NET Core",
      "Java / Spring Boot",
      "Python / Django",
      "JavaScript",
    ],
  },
  {
    label: "AI-Assisted Development",
    items: [
      "Cursor",
      "Claude Code (agents, skills, schedulers)",
      "Obsidian long-term memory",
      "Prompt engineering for agentic workflows",
    ],
  },
  {
    label: "Payments & Compliance",
    items: [
      "Banking Circle",
      "Ivy",
      "OpenPayd",
      "Plaid",
      "CoP/VoP",
      "SEPA Direct Debit",
      "Blik",
      "On-call incident response",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MSSQL", "Redis", "MongoDB", "RavenDB", "ElasticSearch"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "GCP",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform / Terragrunt",
      "Git",
      "CQRS",
      "Event Sourcing",
      "Auth0",
    ],
  },
];

export const education: Education[] = [
  { degree: "M.Sc. Software Engineering", period: "2014 – 2015" },
  { degree: "B.Sc. Software Engineering", period: "2010 – 2013" },
];
