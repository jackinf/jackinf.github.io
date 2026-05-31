/**
 * Single source of truth for all portfolio content.
 * Compiled from the complete career history (ABB 2012 → present).
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
  /** Domain ids this role belongs to — drives the domain selector highlight. */
  domains: DomainId[];
  /** Decimal years used by the right-hand timeline minimap (e.g. 2012.5). */
  start: number;
  end: number;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  year?: string;
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface HumanLanguage {
  language: string;
  level: string;
  /** 0–100 proficiency used for the meter. */
  proficiency: number;
}

/** Programming-language usage spans for the colour-coded timeline. */
export interface LanguageTrack {
  name: string;
  color: string;
  /** Usage windows in decimal years. */
  spans: { from: number; to: number }[];
  note?: string;
}

export type DomainId =
  | "all"
  | "crypto"
  | "payments"
  | "betting"
  | "saas"
  | "content"
  | "govtech"
  | "logistics"
  | "gamedev";

export interface Domain {
  id: DomainId;
  label: string;
  icon: string;
  /** Generalized, domain-flavoured headline shown in the hero. */
  blurb: string;
  /** Accent colour used for the selector + background tint. */
  color: string;
}

/** First day of professional work — drives the dynamic "years of experience" panel. */
export const CAREER_START = new Date("2012-06-20T00:00:00Z");

/** Inclusive bounds for the timeline / minimap axis. */
export const TIMELINE_FROM = 2012;
export const TIMELINE_TO = 2026;

export const profile = {
  name: "Jevgeni Rumjantsev",
  title: "Software Engineer",
  tagline: "Payments · Crypto · Distributed Systems",
  location: "Barcelona, Spain",
  email: "zeka.rum@gmail.com",
  linkedin: "linkedin.com/in/jevgenir",
  linkedinUrl: "https://www.linkedin.com/in/jevgenir/",
  github: "github.com/jackinf",
  githubUrl: "https://github.com/jackinf",
  summary:
    "Full-stack engineer who has spent over a decade building scalable, fault-tolerant systems end to end — from high-stakes crypto and payments backends to government portals and SaaS platforms. Comfortable owning systems in production, on-call, across a polyglot stack (Node.js, Rust, C#/.NET, Java, Python). Daily user of AI coding agents to ship production-grade software faster.",
} as const;

/**
 * Domain selector content. Choosing a domain re-frames the main description and
 * lights up the roles that belong to it. `all` is the default neutral view.
 */
export const domains: Domain[] = [
  {
    id: "all",
    label: "Everything",
    icon: "✦",
    blurb:
      "A polyglot engineer who builds reliable systems end to end — backend, frontend, infra and the glue in between — and has done it across eight very different industries.",
    color: "#c4622d",
  },
  {
    id: "crypto",
    label: "Crypto & Exchanges",
    icon: "₿",
    blurb:
      "Owns deposits & withdrawals at a top global crypto exchange — instant local rails, banking-vendor integrations and the on-call ownership that high-value money movement demands.",
    color: "#f7931a",
  },
  {
    id: "payments",
    label: "Payments & Fintech",
    icon: "💳",
    blurb:
      "Ships payment systems that move real money: Apple/Google Pay, 3-D Secure 2.0 SCA, SEPA Direct Debit, Confirmation of Payee and multi-vendor banking integrations — measured in conversion and revenue.",
    color: "#2d7dd2",
  },
  {
    id: "betting",
    label: "Sports Betting & Data",
    icon: "🎲",
    blurb:
      "Built risk-management and sports-data microservices for a betting & integrity company — pushing business logic out of stored procedures and into tested services, cutting errors threefold.",
    color: "#16a34a",
  },
  {
    id: "saas",
    label: "SaaS & Productivity",
    icon: "📈",
    blurb:
      "Architected and led product SaaS — ten CQRS / Event-Sourced microservices for time-tracking, plus team leadership of eight and end-to-end CI/CD ownership.",
    color: "#7c3aed",
  },
  {
    id: "content",
    label: "Cloud Content",
    icon: "🗂️",
    blurb:
      "Delivered Digital Signatures and Document Generation for a global secure-content platform — Java & Django backends, React & Vue frontends, all running on Kubernetes.",
    color: "#0ea5e9",
  },
  {
    id: "govtech",
    label: "GovTech & Enterprise",
    icon: "🏛️",
    blurb:
      "Lead developer on Estonia's national research-grant portal — X-Road government data exchange, rights management and authentication for enterprise and public-sector clients.",
    color: "#b45309",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "📦",
    blurb:
      "Architected a B2B parcel-tracking platform from scratch — five .NET microservices, three React frontends and integrations with external delivery carriers.",
    color: "#0d9488",
  },
  {
    id: "gamedev",
    label: "Game Dev",
    icon: "🕹️",
    blurb:
      "Builds games for the love of it — a 2D tank game in Rust/Bevy, a multiplayer drawing game, and explorations across Unity, MonoGame and DirectX 11.",
    color: "#db2777",
  },
];

export const experience: Role[] = [
  {
    company: "Kraken",
    companyNote: "Top global crypto exchange",
    role: "Software Engineer · Payments",
    period: "Apr 2025 – Jun 2026",
    location: "Remote / Amsterdam, NL",
    current: true,
    domains: ["crypto", "payments"],
    start: 2025.25,
    end: 2026.45,
    highlights: [
      "Owned deposits & withdrawals on the Payments team, shipping in Node.js and Rust (~50/50) for a top global crypto exchange.",
      "Delivered Blik Deposits and Blik Instant Buy, expanding instant local payment coverage for Polish users.",
      "Implemented Confirmation/Verification of Payee (CoP/VoP) name-matching to cut misdirected payments and meet anti-fraud requirements.",
      "Built a SEPA Direct Debit notification system to keep the platform SEPA-compliant, plus automatic returns via Ivy to streamline failed-payment handling.",
      "Integrated and operated 4 banking vendors — Banking Circle, Ivy, OpenPayd and Plaid — and carried on-call ownership for live payment incidents.",
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
    domains: ["content", "saas"],
    start: 2022.25,
    end: 2025.25,
    highlights: [
      "Developed the Digital Signatures application within scrum teams for an enterprise content platform used globally.",
      "Built the Document Generation application end to end.",
      "Worked across Java and Django (Python) backends with React and Vue frontends.",
      "Configured infrastructure as code (Terraform / Terragrunt) and ran workloads on Kubernetes.",
      "Developed internal tooling in Python, TypeScript and Rust.",
    ],
    stack: ["Java", "Django", "React", "Vue", "Kubernetes", "Terraform", "Rust"],
  },
  {
    company: "TimeChimp",
    companyNote: "Time-tracking SaaS",
    role: "Lead Software Engineer",
    period: "Sep 2020 – Mar 2022",
    location: "Amsterdam, NL",
    domains: ["saas"],
    start: 2020.7,
    end: 2022.25,
    highlights: [
      "Architected and built 10 microservices in .NET with performance and scalability in mind.",
      "Applied CQRS and Event Sourcing patterns across the platform.",
      "Covered services with unit, integration and end-to-end tests.",
      "Developed the frontend in React / TypeScript.",
      "Owned CI/CD pipelines; deployed and maintained applications on Kubernetes + Terraform on Azure.",
      "Led a team of 8 people and partly performed the responsibilities of Scrum Master.",
    ],
    stack: [".NET", "CQRS", "Event Sourcing", "Azure", "Terraform", "Team lead"],
  },
  {
    company: "Travix",
    companyNote: "Global travel search & booking",
    role: "Senior Full-Stack Engineer",
    period: "Sep 2018 – Aug 2020",
    location: "Amsterdam, NL",
    domains: ["payments"],
    start: 2018.7,
    end: 2020.65,
    highlights: [
      "Developed microservices and a React / TypeScript frontend for the payments module.",
      "Introduced Google Pay & Apple Pay as payment options, lifting revenue by ~10%.",
      "Delivered the 3-D Secure 2.0 (Strong Customer Authentication) standard, improving security and increasing conversions by hundreds of thousands of euros.",
      "Rebuilt the Virtual Card Number (VCN) service from a monolith into microservices for maintainability.",
      "Created internal deployment tooling that reduced rollout time from 1 working day to 2 hours.",
      "Contributed to GDPR-compliance work — wrote scripts to retrieve data from incorrectly indexed NoSQL databases, removed sensitive records and made queries ~10x faster via cleanup and obfuscation.",
      "Automated long-running end-to-end tests across 40 affiliates.",
      "Maintained payments backends in .NET and Node.js, plus the React frontend; ran cron jobs on Kubernetes in Google Cloud Platform.",
    ],
    stack: ["Microservices", "React", "Google Pay", "Apple Pay", "3DS 2.0", "GCP"],
  },
  {
    company: "Genius Sports",
    companyNote: "Sports data, technology & betting integrity",
    role: "Software Engineer · .NET",
    period: "Jun 2017 – Aug 2018",
    location: "Tallinn, Estonia",
    domains: ["betting"],
    start: 2017.45,
    end: 2018.65,
    highlights: [
      "Developed unit-tested microservices in .NET with performance and scalability in mind.",
      "Designed microservices for a Risk Management system, resulting in 3x fewer errors.",
      "Migrated business logic from database stored procedures into a tested backend, making the system less error-prone.",
      "Integrated pub/sub messaging (AMQP) for inter-service communication.",
      "Maintained a legacy desktop application and acted as Release Manager, synchronising versions across microservices.",
      "Wrote T-SQL scripts, worked with TeamCity and Jenkins CI, and built & deployed Docker images.",
    ],
    stack: [".NET", "AMQP", "Docker", "TeamCity", "T-SQL", "Release mgmt"],
  },
  {
    company: "Finestmedia",
    companyNote: "B2B / government & enterprise IT",
    role: "Senior Full-Stack Engineer · Lead Developer",
    period: "Nov 2013 – Jun 2017",
    location: "Tallinn, Estonia",
    domains: ["govtech"],
    start: 2013.85,
    end: 2017.45,
    highlights: [
      "Developed Estonia's national research-grant submission portal (3 years) — ASP MVC, ASP Web API, ASMX/WCF.",
      "Worked with X-Road, the Estonian government data-exchange layer, making cross-system data more secure.",
      "Implemented rights-management and authentication systems.",
      "Set up and optimized RavenDB (NoSQL): query optimization, database structure and setup.",
      "Built a file-uploading component that made uploads 5x faster and considerably safer.",
      "Promoted to Lead Developer on the portal; established and maintained the Git workflow.",
      "Earlier project (KopioNiini, 1 year): ASP MVC 4, Angular, MongoDB, with extensive testing.",
      "In 2017, helped a startup build a digital invoicing system using microservices, Entity Framework and Angular.",
    ],
    stack: ["ASP MVC", "Angular", "X-Road", "RavenDB", "WCF", "Lead dev"],
  },
  {
    company: "Speys (SpeysCloud)",
    companyNote: "Finnish logistics automation",
    role: "Full-Stack .NET Developer · Contract",
    period: "Jan 2017 – Aug 2019 (intermittent)",
    location: "Finland (remote)",
    domains: ["logistics"],
    start: 2017.0,
    end: 2019.65,
    highlights: [
      "Architected the entire system from scratch — frontend, backend and CI/CD.",
      "Built 5 microservices in .NET (email, translations, authentication, delivery and more).",
      "Built 3 frontends in React / TypeScript for B2B parcel-tracking use cases.",
      "Used a JWT Authority Server, .NET Core Web API, React + Redux + TypeScript, Docker and Azure.",
      "Architected B2B integrations with other package-delivery services.",
    ],
    stack: [".NET Core", "React", "Redux", "Docker", "Azure", "JWT"],
  },
  {
    company: "ABB",
    companyNote: "Global electrification & automation",
    role: "Junior .NET Engineer",
    period: "Jun 2012 – Dec 2012",
    location: "Jüri, Estonia",
    domains: ["govtech"],
    start: 2012.45,
    end: 2012.95,
    highlights: [
      "Imported data from Excel into MSSQL, mapped/reduced it and displayed it in WinForms charts; extensive work with MSSQL functions and stored procedures.",
      "Built a WPF program for working with tabular data — searching, grouping, sorting and pagination over different statuses.",
      "Built an ASP MVC safety questionnaire for company workers.",
      "Built a WPF statistical-analytics application for accident data; contributed to a 3x reduction in workplace accidents.",
    ],
    stack: ["C#", "WPF", "WinForms", "ASP MVC", "MSSQL"],
  },
];

export const projects: Project[] = [
  {
    name: "Charlie-seven",
    description:
      "A real-time multiplayer drawing & guessing game built in December 2025 — players sketch on a shared canvas while others race to guess the prompt.",
    tags: ["TypeScript", "Realtime", "WebSockets", "Canvas", "Game"],
    year: "2025",
  },
  {
    name: "Triven / Skynda",
    description:
      "A platform to make buying & selling cars easier, built in a 48-hour Garage48 hackathon with a team of 7.",
    tags: [".NET", "Spring Boot", "React", "Redux", "EF Core", "Hackathon"],
    year: "2016",
  },
  {
    name: "Tank game",
    description:
      "A 2D top-down tank game written entirely in Rust on the Bevy game engine.",
    tags: ["Rust", "Bevy", "ECS", "Game dev"],
  },
  {
    name: "Jira & GitHub aggregator",
    description:
      "A developer-productivity CLI written entirely in Rust, leaning on traits and async (Tokio) to merge Jira and GitHub activity.",
    tags: ["Rust", "Tokio", "Async", "CLI"],
  },
  {
    name: "Space shooter explorations",
    description:
      "Game-dev learning across DirectX 11 (C++), MonoGame (C#) and Unity — sprites, animation, 3D modelling basics and a Unity mini-game shooting asteroids around a sphere.",
    tags: ["Unity", "MonoGame", "DirectX 11", "C++", "C#"],
  },
  {
    name: "This portfolio + gamified CV",
    description:
      "This site (Bun + React 19) plus a sidescroller game that tells the same story — built and maintained with AI coding agents.",
    tags: ["React", "Bun", "TypeScript", "Canvas"],
    url: "/game/",
  },
];

/**
 * Programming-language usage over time. Spans are decimal years and drive the
 * colour-coded horizontal timeline panel.
 */
export const languageTracks: LanguageTrack[] = [
  {
    name: "C# / .NET",
    color: "#9b4dca",
    spans: [{ from: 2012.45, to: 2022.25 }],
    note: "Primary language for a decade",
  },
  {
    name: "SQL",
    color: "#0d9488",
    spans: [{ from: 2012.45, to: 2026.45 }],
    note: "T-SQL → PostgreSQL",
  },
  {
    name: "JavaScript / TypeScript",
    color: "#2563eb",
    spans: [{ from: 2013.85, to: 2026.45 }],
    note: "TS from ~2016 onward",
  },
  {
    name: "Angular",
    color: "#dd0031",
    spans: [{ from: 2013.85, to: 2017.45 }],
  },
  {
    name: "React",
    color: "#06b6d4",
    spans: [{ from: 2017.0, to: 2026.45 }],
  },
  {
    name: "Java",
    color: "#e76f00",
    spans: [
      { from: 2016.75, to: 2016.95 },
      { from: 2022.25, to: 2025.25 },
    ],
  },
  {
    name: "C++",
    color: "#6c8ebf",
    spans: [{ from: 2019.0, to: 2021.5 }],
    note: "Game-dev exploration",
  },
  {
    name: "Rust",
    color: "#c0613a",
    spans: [{ from: 2021.5, to: 2026.45 }],
  },
  {
    name: "Python",
    color: "#3776ab",
    spans: [{ from: 2022.25, to: 2026.45 }],
  },
  {
    name: "Vue",
    color: "#42b883",
    spans: [{ from: 2022.25, to: 2025.25 }],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "TypeScript / JavaScript",
      "Rust",
      "C# / .NET",
      "Java",
      "Python",
      "SQL (T-SQL, PostgreSQL)",
      "C++",
      "Bash / PowerShell",
    ],
  },
  {
    label: "Backend & Frameworks",
    items: [
      ".NET Core / Framework",
      "Node.js",
      "Spring Boot",
      "Django",
      "Entity Framework / EF Core",
      "NServiceBus",
      "MassTransit",
      "MediatR",
      "WPF / WinForms",
      "WCF / ASMX",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Vue",
      "Angular",
      "Redux / MobX / RxJS",
      "HTML5 / CSS / SASS",
      "Webpack / Gulp / Grunt",
      "Canvas / WebSockets",
    ],
  },
  {
    label: "Architecture & Patterns",
    items: [
      "Microservices / SOA",
      "CQRS",
      "Event Sourcing",
      "Domain-Driven Design",
      "REST APIs",
      "Pub/Sub messaging (AMQP)",
      "Distributed systems",
    ],
  },
  {
    label: "Payments & Compliance",
    items: [
      "SEPA Direct Debit",
      "Confirmation / Verification of Payee",
      "3-D Secure 2.0 (SCA)",
      "Apple Pay / Google Pay",
      "Blik instant payments",
      "PCI / GDPR awareness",
      "Banking Circle · Ivy · OpenPayd · Plaid",
      "On-call incident response",
    ],
  },
  {
    label: "Data & Storage",
    items: [
      "PostgreSQL",
      "MSSQL / SQL Server",
      "MongoDB",
      "RavenDB",
      "Redis",
      "ElasticSearch",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "Kubernetes",
      "Docker",
      "Terraform / Terragrunt",
      "Google Cloud Platform",
      "Microsoft Azure",
      "CircleCI · TeamCity · Jenkins · Octopus",
      "IIS",
    ],
  },
  {
    label: "Security & Auth",
    items: [
      "JWT / OpenIddict",
      "Auth0",
      "X-Road government data exchange",
      "Rights management",
    ],
  },
  {
    label: "AI-Assisted Engineering",
    items: [
      "Claude Code (agents, skills, schedulers)",
      "Cursor",
      "Obsidian long-term memory",
      "Agentic workflow design",
      "Prompt engineering",
    ],
  },
  {
    label: "Testing & QA",
    items: [
      "xUnit / NUnit / Moq",
      "Jasmine / Chai",
      "Selenium / Nightwatch",
      "Unit · Integration · E2E",
    ],
  },
  {
    label: "Game Dev",
    items: ["Bevy (Rust)", "Unity", "MonoGame", "DirectX 11", "ECS"],
  },
  {
    label: "Tooling",
    items: ["Git (GitHub, GitLab)", "Postman", "Tokio (async)", "SVN / TFS (legacy)"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. — Computer Science Engineering",
    school: "Tallinn University of Technology",
    period: "2014 – 2015",
  },
  {
    degree: "B.Sc. — Computer Science Engineering",
    school: "Tallinn University of Technology",
    period: "2010 – 2013",
    note: "Business Information Technology",
  },
];

export const certifications: Certification[] = [
  { name: "Microsoft Certified Solutions Developer (MCSD)", issuer: "Microsoft" },
  { name: "Microsoft Certified Professional", issuer: "Microsoft" },
  {
    name: "Programming in HTML5 with JavaScript & CSS3 — Specialist",
    issuer: "Microsoft",
    year: "2014",
  },
  { name: "Developing Web Applications", issuer: "Microsoft", year: "2014" },
  { name: "Architecting with Google Cloud Platform", issuer: "Google Cloud" },
  { name: "Architecting with Kubernetes", issuer: "Google Cloud" },
  {
    name: "Divide & Conquer, Sorting, Searching & Randomized Algorithms",
    issuer: "Stanford / Coursera",
  },
  {
    name: "Advanced CSS and Sass: Flexbox, Grid, Animations",
    issuer: "Udemy",
  },
];

export const humanLanguages: HumanLanguage[] = [
  { language: "Russian", level: "Native", proficiency: 100 },
  { language: "English", level: "Fluent", proficiency: 95 },
  { language: "Estonian", level: "Fluent", proficiency: 90 },
  { language: "German", level: "Basic", proficiency: 30 },
];
