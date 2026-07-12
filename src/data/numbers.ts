/**
 * Content for the "Engineering by the Numbers" page (numbers/).
 * Everything the page renders lives here, same rule as cv.ts for the main page.
 *
 * Figures mix public company data with personal estimates and back-of-envelope
 * math. Estimates are prefixed with "~" or labelled "est." in the copy.
 *
 * Card template (keep panels structurally consistent): tagline, then a
 * vertical flow of numbers, then optional labelled sub-blocks (mini stats,
 * latency, alerts, chips). "Account holder verification" is the reference.
 */

export interface BigStat {
  /** Numeric part that counts up on reveal. */
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub?: string;
}

export interface MiniStat {
  value: string;
  label: string;
}

export type Block =
  | { kind: "mini"; title?: string; stats: MiniStat[] }
  | {
      kind: "latency";
      title: string;
      bars: { label: string; display: string; pct: number; tone: "ok" | "warn" | "bad" }[];
      note?: string;
    }
  | { kind: "formula"; formula: string; substitution: string; result: BigStat; note?: string }
  | { kind: "flow"; steps: { value: string; label: string }[]; note?: string }
  | { kind: "alerts"; title: string; rules: { text: string; tone: "warn" | "bad" }[] }
  | { kind: "chips"; title: string; chips: string[]; note?: string };

export interface ProjectCard {
  title: string;
  /** Key into CARD_ICONS (src/numbers/icons.tsx): the story's animated glyph. */
  icon: string;
  tagline: string;
  blocks: Block[];
  /** Spans both grid columns; sub-blocks flow into two internal columns. */
  wide?: boolean;
  /** Overrides the section brand colour (used in the "Earlier" section). */
  brand?: string;
}

export interface CompanySection {
  id: string;
  num: string;
  company: string;
  descriptor: string;
  brand: string;
  /** Secondary hue for the animated backdrop scene. */
  brand2: string;
  intro: string;
  big?: BigStat[];
  mini?: MiniStat[];
  projects: ProjectCard[];
}

export const numbersMeta = {
  eyebrow: "field notes in numbers",
  title: "Engineering by the numbers",
};

export interface ReachRow {
  company: string;
  brand: string;
  /** Soft bar: total reach. pct values are precomputed on a log10 scale. */
  total: { display: string; label: string; pct: number };
  /** Solid slider bar with knob: the active slice. */
  active: { display: string; label: string; pct: number };
}

/**
 * Hero summary diagram: total vs active reach per company, one slider each.
 * pct = (log10(value) − 3.4) / 4.35 × 100, so 2.5k → 0% and ~56M → 100%.
 */
export const reachRows: ReachRow[] = [
  {
    company: "Travix",
    brand: "#e4002b",
    total: { display: "50M+", label: "yearly visitors", pct: 98 },
    active: { display: "1.7M", label: "monthly active", pct: 65 },
  },
  {
    company: "Box",
    brand: "#0061d5",
    total: { display: "15M+", label: "paid users", pct: 87 },
    active: { display: "100k+", label: "enterprises", pct: 37 },
  },
  {
    company: "Kraken",
    brand: "#5741d9",
    total: { display: "13M+", label: "registered", pct: 85 },
    active: { display: "~1.5M", label: "daily active", pct: 64 },
  },
  {
    company: "Genius Sports",
    brand: "#16a34a",
    total: { display: "~240k", label: "live events per year", pct: 46 },
    active: { display: "300+", label: "sportsbook brands", pct: 3 },
  },
  {
    company: "TimeChimp",
    brand: "#f97316",
    total: { display: "40k+", label: "active users", pct: 28 },
    active: { display: "4k+", label: "companies", pct: 5 },
  },
  {
    company: "Finestmedia",
    brand: "#2563eb",
    total: { display: "~10k+", label: "ETIS researchers (est.)", pct: 14 },
    active: { display: "1", label: "national research registry", pct: 2 },
  },
];

export interface CheatRow {
  feature: string;
  rate: string;
  scale: string;
  impact: string;
}

export interface CheatGroup {
  /** Section id the group header jumps to. */
  id: string;
  company: string;
  brand: string;
  rows: CheatRow[];
}

/** Hero cheat sheet: one line per system for a 1-2 screen overview. */
export const cheatSheet: CheatGroup[] = [
  {
    id: "kraken",
    company: "Kraken",
    brand: "#5741d9",
    rows: [
      { feature: "Account holder verification", rate: "~0.1 rps", scale: "5-15k checks/day · ~9M rows", impact: "p99 3 s budget" },
      { feature: "BLIK instant buy", rate: "~1.5k/day", scale: "~15-20k monthly depositors", impact: "~15% conversion lift" },
      { feature: "CoP / VoP name matching", rate: "~0.1 rps", scale: "every outbound payment", impact: "~25% fewer misdirected" },
      { feature: "SEPA advance notice", rate: "~5-7k/day", scale: "~150-200k schedules", impact: "14 d notice window" },
      { feature: "AI-augmented delivery", rate: "daily runs", scale: "whole payments team", impact: "~30% less routine work" },
    ],
  },
  {
    id: "box",
    company: "Box",
    brand: "#0061d5",
    rows: [
      { feature: "Document generation", rate: "~1.2 msg/s", scale: "100k docs/day", impact: "≈12 in flight (Little's law)" },
      { feature: "Digital signatures", rate: "~5 rps backend", scale: "300k envelopes/mo", impact: "99.9% uptime" },
      { feature: "WDIO test library", rate: "2-3 runs/day each", scale: "50+ engineers", impact: "~2,000 h/yr saved" },
      { feature: "Backstage deploy tool", rate: "seconds", scale: "3 sources merged", impact: "was ~10 min by hand" },
    ],
  },
  {
    id: "timechimp",
    company: "TimeChimp",
    brand: "#f97316",
    rows: [
      { feature: "Time tracking, v2", rate: "~2.3 entries/s", scale: "40k users · ~200k entries/day", impact: "~180M events/yr" },
      { feature: "Monolith to microservices", rate: "releases daily+", scale: "10 services", impact: "<5 min deploys" },
    ],
  },
  {
    id: "travix",
    company: "Travix",
    brand: "#e4002b",
    rows: [
      { feature: "3D Secure 2.0", rate: "~1 rps peak", scale: "7 browser signals", impact: "€100k+/yr recovered" },
      { feature: "Google Pay + Apple Pay", rate: "~0.02 rps", scale: "~0.5M wallet payments/yr", impact: "~10% revenue lift" },
      { feature: "GDPR obfuscation", rate: "batch job", scale: "full bookings dataset", impact: "~10x faster queries" },
      { feature: "Virtual cards (VCN)", rate: "low rate", scale: "Amex-issued cards", impact: "carved from monolith" },
      { feature: "Deploy tooling + e2e", rate: "nightly", scale: "40 affiliates", impact: "1 day to 2 h rollouts" },
    ],
  },
  {
    id: "geniussports",
    company: "Genius Sports",
    brand: "#16a34a",
    rows: [
      { feature: "Betting risk management", rate: "real-time", scale: "~240k events/yr", impact: "3x fewer errors" },
    ],
  },
  {
    id: "finestmedia",
    company: "Finestmedia",
    brand: "#2563eb",
    rows: [
      { feature: "ETIS research portal", rate: "~10k+ users", scale: "X-Road exchange", impact: "5x faster uploads" },
      { feature: "KopioNiini", rate: "1 y build", scale: "MVC 4 + Angular + Mongo", impact: "heavy testing" },
    ],
  },
  {
    id: "earlier",
    company: "Earlier",
    brand: "#0d9488",
    rows: [
      { feature: "Speys logistics platform", rate: "5 services", scale: "3 frontends", impact: "0 to 1 as contractor" },
      { feature: "ABB safety analytics", rate: "nightly imports", scale: "accident data in MSSQL", impact: "3x fewer accidents" },
    ],
  },
];

export const sections: CompanySection[] = [
  {
    id: "kraken",
    num: "01",
    company: "Kraken",
    descriptor: "Payments · Apr 2025 – Jun 2026",
    brand: "#5741d9",
    brand2: "#8b5cf6",
    intro:
      "Fiat deposits and withdrawals for one of the largest global crypto exchanges. Node.js and Rust, SQL as the system of record, on-call for live payment incidents.",
    big: [
      { value: 13, suffix: "M+", label: "registered users", sub: "worldwide" },
      { value: 1.5, decimals: 1, prefix: "~", suffix: "M", label: "daily active users" },
      { value: 3, prefix: "~", suffix: "M", label: "EU users", sub: "est. 25 to 30% of the base" },
      { value: 100, suffix: "-500k", label: "payments processed", sub: "per day" },
    ],
    mini: [
      { value: "10k+", label: "third party payments per day" },
      { value: "100k+", label: "users in Poland" },
      { value: "100k+", label: "Krak app users" },
      { value: "6+", label: "banking gateways integrated" },
      { value: "SQL", label: "system of record" },
    ],
    projects: [
      {
        title: "Account holder verification",
        icon: "shield-check",
        wide: true,
        tagline:
          "Checking that the name on a bank account matches the account holder before money moves. Low traffic, high stakes: every request sits on the critical path of a deposit or withdrawal.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "5-15k", label: "verifications per day" },
              { value: "~0.1 rps", label: "average request rate" },
              { value: "1-4 KB", label: "per stored row" },
              { value: "~9M rows", label: "over 5 years, roughly 25 GB" },
            ],
            note: "At ~25 GB over five years a single SQL primary handles this comfortably. The interesting problems are correctness and provider reliability, not scale.",
          },
          {
            kind: "latency",
            title: "Latency targets",
            bars: [
              { label: "p50", display: "250 ms", pct: 29, tone: "ok" },
              { label: "p95", display: "1.2 s", pct: 63, tone: "warn" },
              { label: "p99", display: "3 s", pct: 100, tone: "bad" },
            ],
            note: "The tail is dominated by the upstream verification provider, so p99 is budgeted generously and guarded by timeouts.",
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Verification error rate above 2% over 5 minutes", tone: "bad" },
              { text: "p99 latency above 5 s over 10 minutes", tone: "warn" },
              { text: "External provider timeout rate above 5%", tone: "warn" },
              { text: "Pending verification backlog above 500", tone: "warn" },
              { text: "Zero successful verifications in 15 minutes", tone: "bad" },
            ],
          },
        ],
      },
      {
        title: "BLIK instant buy",
        icon: "bolt",
        tagline:
          "Instant local payments for the Polish market, wired into the buy flow so a deposit and a purchase feel like one step.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "~45k", label: "Polish deposits per month" },
              { value: "~1.5k", label: "deposits per day" },
              { value: "~15-20k", label: "monthly active depositors, est. at 2 to 3 deposits each" },
            ],
          },
          {
            kind: "mini",
            title: "Impact",
            stats: [
              { value: "~15%", label: "deposit conversion lift for Polish users" },
              { value: "1 in 10", label: "Polish users deposit via BLIK in a month (est.)" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "BLIK deposit success rate below 95% over 10 minutes", tone: "bad" },
              { text: "Provider callback latency p99 above 10 s", tone: "warn" },
              { text: "Pending deposits without confirmation above 50", tone: "warn" },
              { text: "Conversion drop above 30% vs the 7-day baseline", tone: "warn" },
              { text: "Zero successful deposits in 30 minutes during Polish daytime", tone: "bad" },
            ],
          },
        ],
      },
      {
        title: "Confirmation of Payee (CoP / VoP)",
        icon: "user-check",
        tagline:
          "Name matching before money moves: does the destination account actually belong to the person the user typed in. Rolled out as the EU verification rules landed.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "every", label: "outbound payment checked against the account holder name" },
              { value: "~25%", label: "fewer misdirected payments" },
              { value: "fewer", label: "support tickets about lost transfers" },
            ],
          },
          {
            kind: "mini",
            title: "Under the hood",
            stats: [
              { value: "AHV", label: "backed by the account holder verification data" },
              { value: "~0.1 rps", label: "same low-rate, high-stakes traffic profile" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Name-match error rate above 2% over 5 minutes", tone: "bad" },
              { text: "No-match rate above 40% over 1 hour (smells like a matching bug)", tone: "warn" },
              { text: "Verification provider timeout rate above 5%", tone: "warn" },
              { text: "p99 latency above 4 s over 10 minutes", tone: "warn" },
              { text: "Zero completed checks in 15 minutes", tone: "bad" },
            ],
          },
        ],
      },
      {
        title: "SEPA advance notice for recurring buy",
        icon: "bell",
        tagline:
          "SEPA direct debit rules require notifying the payer before each debit. Recurring buys made that a scheduled, batched notification pipeline.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "~150-200k", label: "active recurring schedules (est.)" },
              { value: "~5-7k", label: "advance notices per day" },
              { value: "batched", label: "sent by scheduled jobs, not per request" },
            ],
          },
          {
            kind: "mini",
            title: "Compliance and returns",
            stats: [
              { value: "14 d", label: "default pre-notification window before a debit" },
              { value: "~40%", label: "less manual handling of failed payments via automatic returns" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Notice batch job missed its schedule window", tone: "bad" },
              { text: "Any debit scheduled inside the notice window without a sent notice", tone: "bad" },
              { text: "Notice volume deviating above 50% from the daily baseline", tone: "warn" },
              { text: "Notification delivery failure rate above 3%", tone: "warn" },
              { text: "Return rate above 2x the weekly baseline", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "AI-augmented delivery",
        icon: "sparkles",
        tagline:
          "Internal tooling and standardized Claude Code agents for the team: skills, schedulers and Obsidian as long-term memory.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "1 set", label: "of standardized agents, skills and schedulers" },
              { value: "~30%", label: "less time on routine PR review and boilerplate" },
              { value: "team-wide", label: "adopted across the payments team" },
            ],
          },
          {
            kind: "mini",
            title: "Memory",
            stats: [
              { value: "Obsidian", label: "as the agents' long-term memory" },
              { value: "daily", label: "part of the normal delivery loop, not a side experiment" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Scheduled agent runs missed twice in a row", tone: "bad" },
              { text: "Agent job failure rate above 20% in a day", tone: "warn" },
              { text: "PR review agent turnaround above 10 minutes", tone: "warn" },
              { text: "Token spend above 2x the weekly baseline", tone: "warn" },
              { text: "Zero completed agent runs in a workday", tone: "bad" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "box",
    num: "02",
    company: "Box",
    descriptor: "Content cloud · Apr 2022 – Apr 2025",
    brand: "#0061d5",
    brand2: "#0ea5e9",
    intro:
      "Secure content management for enterprises. Java and Django backends on Kubernetes, GCP Pub/Sub in between, Grafana and Prometheus on top.",
    big: [
      { value: 100, suffix: "k+", label: "paying enterprise customers" },
      { value: 15, suffix: "M+", label: "paid users", sub: "public estimate" },
      { value: 99.9, decimals: 1, suffix: "%", label: "signing service uptime" },
    ],
    projects: [
      {
        title: "Document generation",
        icon: "documents",
        tagline:
          "Workflows take a DOCX template with Box variables plus groups of template values, fire on schedules or events, and the service renders the documents. Ran on GKE, fed by Pub/Sub.",
        blocks: [
          {
            kind: "formula",
            formula: "L = λ × W",
            substitution: "≈ 1.2 docs/s × 10 s",
            result: { value: 12, prefix: "≈", label: "documents in flight at any moment" },
            note: "Little's law, sized at an assumed 100k documents per day. Average render takes 10 s with a 60 s timeout, so steady state keeps about a dozen documents in the system.",
          },
          {
            kind: "mini",
            title: "Pub/Sub flow control (Java client)",
            stats: [
              { value: "100 KB", label: "average DOCX size" },
              { value: "20-50", label: "max outstanding messages per pod" },
              { value: "~10 MB", label: "max outstanding bytes per pod" },
              { value: "60 s", label: "ack deadline, matched to the timeout" },
            ],
          },
          {
            kind: "mini",
            title: "Outcome",
            stats: [{ value: "~35%", label: "cut in average document generation time" }],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Oldest unacked Pub/Sub message above 5 minutes", tone: "bad" },
              { text: "Timeout (60 s) rate above 1% of renders", tone: "bad" },
              { text: "Render p99 above 30 s over 10 minutes", tone: "warn" },
              { text: "Dead-letter queue receiving messages", tone: "warn" },
              { text: "GKE pod restarts above 3 in 10 minutes", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "Digital signatures",
        icon: "signature",
        tagline:
          "The signing product behind Box Sign envelopes. The edge traffic looks tiny until you count the fan-out to backend services.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "300k", label: "envelopes per month" },
              { value: "10k", label: "per day, ~0.1 rps at the edge" },
              { value: "×40", label: "backend requests per envelope" },
              { value: "~5 rps", label: "steady load across backend services" },
            ],
            note: "The ×40 fan-out is my upper-bound estimate; the honest range is probably a bit lower. Peaks run several times the steady rate.",
          },
          {
            kind: "mini",
            title: "Reliability",
            stats: [
              { value: "99.9%", label: "uptime held on the signing service" },
              { value: "~20%", label: "error rate reduction" },
              { value: "1,000s", label: "of enterprise customers on the product" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Envelope error rate above 1% over 10 minutes", tone: "bad" },
              { text: "Uptime probe failing 3 checks in a row", tone: "bad" },
              { text: "Backend fan-out p99 above 2 s", tone: "warn" },
              { text: "Webhook delivery failure rate above 5%", tone: "warn" },
              { text: "Stuck envelopes above 100", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "WDIO test library",
        icon: "stopwatch",
        tagline:
          "Internal end-to-end test tooling on WebdriverIO, used across teams. The win was not one big fix but shaving minutes off a loop that 50+ engineers run daily.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "6 min", label: "per run before, ~20 tests, remote VM against UAT or prod only" },
              { value: "1-2 min", label: "after user caching, flake fixes and a local dev env" },
              { value: "50+", label: "engineers on the tool" },
              { value: "~2,000 h", label: "saved per year, est. at 2 to 3 runs each per day" },
            ],
          },
          {
            kind: "mini",
            title: "What changed",
            stats: [
              { value: "−2 min", label: "per run from registered user caching alone" },
              { value: "local", label: "dev env replaced the remote VM entirely" },
              { value: "~25%", label: "faster team iteration cycle from internal tooling overall" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Suite hard-failing on main twice in a row", tone: "bad" },
              { text: "Median suite duration back above 4 minutes (regression)", tone: "warn" },
              { text: "Flake rate above 5% over a week", tone: "warn" },
              { text: "Registered-user cache hit rate below 80%", tone: "warn" },
              { text: "CI queue wait above 10 minutes", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "Deploy reconciliation in Backstage",
        icon: "rocket",
        tagline:
          "Before each deploy someone gathered commits, synced Jira statuses and checked DB migrations by hand. I turned that into a plugin in the dev portal, built on Spotify's Backstage.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "~10 min", label: "manual reconciliation per deploy, 0 to 20 min spread" },
              { value: "seconds", label: "gathered automatically in the dev portal" },
              { value: "auto", label: "Jira tickets created for the release" },
            ],
          },
          {
            kind: "mini",
            title: "One place",
            stats: [
              { value: "3 sources", label: "commits, Jira statuses and DB migrations, together" },
              { value: "Backstage", label: "shipped inside the company dev portal" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Automatic Jira ticket creation failing", tone: "bad" },
              { text: "Listed commits diverging from what actually deployed", tone: "bad" },
              { text: "Jira sync failures above 3 in an hour", tone: "warn" },
              { text: "Reconciliation fetch taking above 30 s", tone: "warn" },
              { text: "Plugin error rate above 2%", tone: "warn" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "timechimp",
    num: "03",
    company: "TimeChimp",
    descriptor: "Time-tracking SaaS · Sep 2020 – Mar 2022",
    brand: "#f97316",
    brand2: "#facc15",
    intro:
      "Time tracking and project management for businesses, strongest in the Netherlands and Belgium. Led a team of 8 while rebuilding the core domain in .NET.",
    big: [
      { value: 40, suffix: "k+", label: "active users" },
      { value: 4, suffix: "k+", label: "companies", sub: "one tenant each" },
      { value: 10, label: "microservices", sub: "carved out of the monolith" },
    ],
    projects: [
      {
        title: "Core time tracking, v2",
        icon: "clock",
        tagline:
          "Users enter times per day, viewed per week and per month. CQRS with event sourcing on MSSQL. The week aggregate is the single source of truth; month totals are a read-side projection, so there is exactly one place that owns the data.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "40k", label: "users" },
              { value: "~200k", label: "time entries per day, est. at ~5 each" },
              { value: "~500k", label: "domain events per day" },
              { value: "~180M", label: "events per year" },
            ],
            note: "Averages ~2.3 entries per second with business-hour peaks around 10 to 20 per second, Mondays worst. Comfortable for MSSQL if the write side is partitioned sensibly.",
          },
          {
            kind: "chips",
            title: "Scaling and sharding strategy",
            chips: [
              "CQRS",
              "Event sourcing",
              "Week aggregate = source of truth",
              "Month totals = projection",
              "Stream id = user + ISO week",
              "Sharded by tenant across 4k+ companies",
              "MSSQL event store",
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Read-side projection lag above 30 s", tone: "bad" },
              { text: "Any week vs month aggregate mismatch", tone: "bad" },
              { text: "Event store write p99 above 200 ms", tone: "warn" },
              { text: "Command failure rate above 1%", tone: "warn" },
              { text: "Monday-peak entry queue above 1,000", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "Monolith to microservices",
        icon: "grid",
        tagline:
          "Ten services carved out of the legacy monolith, with the delivery pipeline rebuilt around them on Kubernetes, Terraform and Azure.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "~30 min", label: "deploy time before the split" },
              { value: "<5 min", label: "after the split and pipeline rework" },
              { value: "multiple/day", label: "release cadence, up from roughly weekly" },
            ],
          },
          {
            kind: "mini",
            title: "Quality",
            stats: [
              { value: "~85%", label: "test coverage across unit, integration and e2e" },
              { value: "~40%", label: "fewer production bugs" },
              { value: "8", label: "people led while shipping it" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Two failed deploys in a row", tone: "bad" },
              { text: "Service health checks failing after a rollout", tone: "bad" },
              { text: "Pipeline duration above 10 minutes", tone: "warn" },
              { text: "Error rate up 50% vs the pre-deploy baseline", tone: "warn" },
              { text: "More than one rollback in a week", tone: "warn" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "travix",
    num: "04",
    company: "Travix",
    descriptor: "Online travel · Sep 2018 – Aug 2020",
    brand: "#e4002b",
    brand2: "#f97316",
    intro:
      "Payments for a global travel booking group, now part of Trip.com. Five brands, 20+ localized sites, PSPs including Amex and Worldpay.",
    big: [
      { value: 1.7, decimals: 1, suffix: "M", label: "monthly active users" },
      { value: 50, suffix: "M+", label: "unique visitors per year" },
      { value: 4, suffix: "M", label: "paying customers per year" },
      { value: 5, suffix: "M+", label: "passenger bookings per year" },
    ],
    mini: [
      { value: "20+", label: "localized travel sites" },
      { value: "5", label: "brands: CheapTickets, BudgetAir, Vliegwinkel, Vayama, Flugladen" },
      { value: "2", label: "PSPs I worked against: Amex, Worldpay" },
    ],
    projects: [
      {
        title: "3D Secure 2.0 (SCA)",
        icon: "lock",
        tagline:
          "PSD2 strong customer authentication for card payments. I built the frontend side: the hidden 3DS Method iframe, the challenge iframe and the browser device data collection that feeds the risk decision.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "2", label: "iframes: hidden 3DS Method + challenge" },
              { value: "7", label: "browser signals collected for the risk decision" },
              { value: "€100k+", label: "in recovered conversion (hundreds of thousands of euros)" },
            ],
          },
          {
            kind: "chips",
            title: "EMVCo browser data collected",
            chips: [
              "User agent",
              "Browser language",
              "Screen width and height",
              "Color depth",
              "Timezone offset",
              "Java enabled",
              "JavaScript enabled",
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Authentication success below 85% over 15 minutes", tone: "bad" },
              { text: "Zero completed authentications in 10 minutes (ACS unreachable)", tone: "bad" },
              { text: "Challenge rate above 30% (frictionless flow degraded)", tone: "warn" },
              { text: "3DS Method iframe timeout rate above 5%", tone: "warn" },
              { text: "Device data collection failures above 2%", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "GDPR data obfuscation",
        icon: "eye-off",
        tagline:
          "A .NET app that obfuscated personal data in GCP's Cloud Datastore, where ad-hoc querying was painful. Names and other PII had to go, bookings had to stay useful.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "NoSQL", label: "bookings PII sitting in GCP Cloud Datastore" },
              { value: "1 app", label: ".NET obfuscation tool over the dataset" },
              { value: "~10x", label: "faster queries after cleanup and re-indexing" },
            ],
          },
          {
            kind: "chips",
            title: "PII handled",
            chips: [
              "Passenger names",
              "Emails",
              "Phone numbers",
              "Passport and ID numbers",
              "Dates of birth",
              "Addresses",
              "Payment card data",
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Obfuscation job failed or missed its schedule", tone: "bad" },
              { text: "Verification sample finding any un-obfuscated PII", tone: "bad" },
              { text: "Any record with PII past its retention date", tone: "warn" },
              { text: "Job throughput below 50% of baseline", tone: "warn" },
              { text: "Datastore read error rate above 2%", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "Google Pay and Apple Pay",
        icon: "wallet",
        tagline:
          "New wallet payment options across the brands. Mostly frontend work with minimal, contained changes in the payments backend.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "2", label: "wallets introduced: Google Pay and Apple Pay" },
              { value: "~10%", label: "revenue increase after launch" },
            ],
          },
          {
            kind: "mini",
            title: "Scope",
            stats: [
              { value: "frontend", label: "led, with minimal backend changes" },
              { value: "20+", label: "sites picked the wallets up via the shared payments module" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Wallet authorisation success below 90%", tone: "bad" },
              { text: "Zero wallet transactions in 30 minutes on a top brand", tone: "bad" },
              { text: "Tokenisation failure rate above 3%", tone: "warn" },
              { text: "Wallet share of payments down 40% vs baseline", tone: "warn" },
              { text: "Frontend SDK load failures above 1%", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "Virtual cards (VCN)",
        icon: "card",
        tagline:
          "One of my first tasks: a new microservice so Amex could issue virtual cards for supplier payments, carved out of the monolith to make the flow maintainable.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "1 module", label: "VCN logic tangled inside the payments monolith" },
              { value: "1 service", label: "extracted, tested microservice" },
            ],
          },
          {
            kind: "mini",
            title: "What it enables",
            stats: [
              { value: "VCN", label: "Amex-issued virtual card numbers" },
              { value: "suppliers", label: "paid with single-use cards instead of shared credentials" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Card issuance failure rate above 2%", tone: "bad" },
              { text: "Any reconciliation mismatch between cards and bookings", tone: "bad" },
              { text: "Amex issuing API p99 above 5 s", tone: "warn" },
              { text: "Issued-but-unused cards above 2x the daily baseline", tone: "warn" },
              { text: "Service 5xx rate above 1%", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "Deployment tooling and e2e automation",
        icon: "gauge",
        wide: true,
        tagline:
          "Internal tooling around rollouts and the long-running end-to-end test suite that guarded them.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "1 day", label: "rollout time before" },
              { value: "2 h", label: "after the internal deployment tooling" },
            ],
          },
          {
            kind: "mini",
            title: "Also automated",
            stats: [
              { value: "40", label: "affiliates covered by automated long-running e2e tests" },
              { value: "k8s", label: "cron jobs on Kubernetes in GCP" },
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Post-deploy smoke test failing", tone: "bad" },
              { text: "More than 5 of the 40 affiliate suites failing", tone: "bad" },
              { text: "Nightly e2e run not finished within 2 hours", tone: "warn" },
              { text: "A rollout step stuck above 30 minutes", tone: "warn" },
              { text: "Any Kubernetes cron job missing its schedule", tone: "warn" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "geniussports",
    num: "05",
    company: "Genius Sports",
    descriptor: "Sports betting · Jun 2017 – Aug 2018",
    brand: "#16a34a",
    brand2: "#4ade80",
    intro:
      "Sports data, technology and betting integrity. Core sports betting project: risk management microservices in .NET with RabbitMQ (AMQP) between them.",
    big: [
      { value: 3, suffix: "x", label: "fewer errors", sub: "after the risk management redesign" },
      { value: 240, prefix: "~", suffix: "k", label: "live events per year", sub: "public company figure" },
      { value: 300, suffix: "+", label: "sportsbook brands", sub: "served by the platform, public figure" },
      { value: 8, label: "engineers", sub: "international team" },
    ],
    projects: [
      {
        title: "Risk management for sports betting",
        icon: "activity",
        wide: true,
        tagline:
          "The system that keeps a bookmaker's exposure sane while odds move in real time. The core work was pulling business logic out of the database and into services that could actually be tested.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "MSSQL", label: "business logic buried in stored procedures, hard to test" },
              { value: ".NET", label: "unit-tested microservices, built for performance" },
              { value: "AMQP", label: "RabbitMQ pub/sub between the services" },
              { value: "3x", label: "fewer errors in the risk management system" },
            ],
          },
          {
            kind: "chips",
            title: "Delivery",
            chips: [
              "Docker images built and deployed",
              "TeamCity + Jenkins CI",
              "T-SQL scripting",
              "Release manager across microservice versions",
              "Legacy desktop app kept alive",
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Odds consumer lag above 5 s (stale exposure numbers)", tone: "bad" },
              { text: "Exposure calculation error rate above 0.5%", tone: "bad" },
              { text: "RabbitMQ queue depth above 10,000", tone: "warn" },
              { text: "Risk decision p99 above 500 ms", tone: "warn" },
              { text: "Dead-lettered messages appearing within 10 minutes", tone: "warn" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "finestmedia",
    num: "06",
    company: "Finestmedia",
    descriptor: "GovTech · Nov 2013 – Jun 2017",
    brand: "#2563eb",
    brand2: "#0ea5e9",
    intro:
      "B2B and government IT in Tallinn. Grew from engineer to lead developer on ETIS, Estonia's national research information system.",
    big: [
      { value: 3, suffix: "y", label: "on the national portal", sub: "promoted to lead developer" },
      { value: 5, suffix: "x", label: "faster file uploads", sub: "after rebuilding the uploader" },
      { value: 4, prefix: "~", suffix: "y", label: "in Estonian govtech and B2B" },
    ],
    projects: [
      {
        title: "ETIS, the Estonian research portal",
        icon: "flask",
        tagline:
          "The national portal where scientists submit and track research grant applications. Government data flows through X-Road, Estonia's data exchange layer.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "3 y", label: "on the portal, ending as lead developer" },
              { value: "~10k+", label: "researchers and applicants served (est.)" },
              { value: "5x", label: "faster uploads via the rebuilt file component" },
              { value: "X-Road", label: "secure data exchange with government registries" },
            ],
          },
          {
            kind: "chips",
            title: "Stack and responsibilities",
            chips: [
              "ASP MVC",
              "ASP Web API",
              "ASMX / WCF",
              "RavenDB tuning",
              "Rights management and auth",
              "Git workflow owner",
              "Java-stack v1.5 maintained (2013 to 2015)",
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Portal health probe failing 3 checks in a row", tone: "bad" },
              { text: "X-Road gateway error rate above 2%", tone: "bad" },
              { text: "File upload failure rate above 3%", tone: "warn" },
              { text: "RavenDB query p95 above 1 s", tone: "warn" },
              { text: "Auth or rights-management errors above 1%", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "KopioNiini",
        icon: "doc",
        tagline:
          "A Finnish product built over a year with heavy testing discipline, before the portal years.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "1 y", label: "of delivery on the project" },
              { value: "3", label: "core technologies: ASP MVC 4, Angular, MongoDB" },
            ],
          },
          {
            kind: "chips",
            title: "Stack",
            chips: ["ASP MVC 4", "Angular", "MongoDB", "Extensive testing"],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Background job failing twice in a row", tone: "bad" },
              { text: "Application error rate above 1%", tone: "warn" },
              { text: "Page load p95 above 2 s", tone: "warn" },
              { text: "MongoDB replication lag above 10 s", tone: "warn" },
              { text: "Database disk usage above 80%", tone: "warn" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "earlier",
    num: "07",
    company: "Earlier systems",
    descriptor: "Contract & early career · 2012 – 2019",
    brand: "#0d9488",
    brand2: "#e30613",
    intro:
      "Contract work and the first engineering job. Smaller systems that still had numbers attached.",
    projects: [
      {
        title: "Speys: logistics platform from scratch",
        icon: "package",
        tagline:
          "Finnish logistics automation for B2B parcel tracking, architected end to end as a contractor: frontend, backend and CI/CD.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "0 → 1", label: "whole platform architected from scratch" },
              { value: "5", label: "microservices in .NET (email, translations, auth, delivery…)" },
              { value: "3", label: "React / TypeScript frontends" },
            ],
          },
          {
            kind: "chips",
            title: "Stack",
            chips: [
              "JWT authority server",
              ".NET Core Web API",
              "React + Redux + TypeScript",
              "Docker",
              "Azure",
              "B2B carrier integrations",
            ],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Carrier integration failure rate above 5%", tone: "bad" },
              { text: "Zero tracking updates in 1 hour during business hours", tone: "bad" },
              { text: "Delivery status sync lag above 15 minutes", tone: "warn" },
              { text: "Auth service 5xx rate above 1%", tone: "warn" },
              { text: "Email delivery failure rate above 3%", tone: "warn" },
            ],
          },
        ],
      },
      {
        title: "ABB: safety analytics",
        icon: "chart",
        brand: "#e30613",
        tagline:
          "First engineering job: analytics and safety tooling for a global electrification company, WPF and MSSQL heavy.",
        blocks: [
          {
            kind: "flow",
            steps: [
              { value: "1 app", label: "WPF statistical analytics over workplace accident data" },
              { value: "3x", label: "reduction in workplace accidents it contributed to" },
            ],
          },
          {
            kind: "chips",
            title: "Stack",
            chips: ["C#", "WPF", "WinForms", "ASP MVC", "MSSQL stored procedures", "Excel imports"],
          },
          {
            kind: "alerts",
            title: "Five alert rules",
            rules: [
              { text: "Nightly Excel import job failed", tone: "bad" },
              { text: "Import row rejection rate above 5%", tone: "warn" },
              { text: "Stored procedure runtime above 5 minutes", tone: "warn" },
              { text: "Zero questionnaire submissions in a week", tone: "warn" },
              { text: "Analytics app unresponsive on open", tone: "bad" },
            ],
          },
        ],
      },
    ],
  },
];
