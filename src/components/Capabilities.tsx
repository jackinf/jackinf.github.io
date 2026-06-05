import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal.tsx";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ *
 * §Capabilities — "What I can do": an animated bento of 12 tiles.     *
 * Pure-CSS vizzes live in the markup; the four data-driven ones       *
 * (money ticker, log feed, k8s pods, dashboard bars) animate from JS  *
 * and are gated off under prefers-reduced-motion.                     *
 * ------------------------------------------------------------------ */

/** Live "settled today" money ticker. */
function MoneyTicker() {
  const [val, setVal] = useState(1284302);
  const [cur, setCur] = useState("€");

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setVal((v) => v + Math.floor(Math.random() * 9000) + 500);
      setCur(Math.random() > 0.5 ? "€" : "$");
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="money">
      <div className="money__val">
        {cur} {val.toLocaleString("en-US")}
      </div>
      <div className="money__sub">settled today · live</div>
    </div>
  );
}

type LogTuple = ["m" | "w" | "e" | "dim", string, string, string];
const LOG_VERBS: LogTuple[] = [
  ["m", "POST /v2/deposits", "200", "id=dp_8f3a"],
  ["m", "sepa.return.processed", "ok", "€4,120"],
  ["dim", "GET /health", "200", "2ms"],
  ["m", "blik.instant_buy", "200", "PLN 540"],
  ["w", "rate_limit soft", "429", "retry=1"],
  ["m", "cop.match", "HIT", "score=0.98"],
  ["dim", "consume orders.q", "ack", "lag=3"],
  ["e", "gateway.timeout", "504", "adyen"],
  ["m", "withdrawal.settled", "200", "id=wd_22c"],
  ["m", "k8s scale payments", "+2", "replicas=7"],
  ["dim", "prometheus scrape", "ok", "14ms"],
  ["w", "circuit half-open", "—", "openpayd"],
];

function clock() {
  return new Date().toTimeString().slice(0, 8);
}

interface LogLine {
  key: number;
  t: string;
  verb: LogTuple;
}

/** Scrolling, colour-coded production log feed. */
function LogFeed() {
  const [lines, setLines] = useState<LogLine[]>(() =>
    Array.from({ length: 8 }, (_, i) => ({
      key: i,
      t: clock(),
      verb: LOG_VERBS[i % LOG_VERBS.length],
    })),
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    let next = 8;
    const id = setInterval(() => {
      setLines((prev) => {
        const verb = LOG_VERBS[Math.floor(Math.random() * LOG_VERBS.length)];
        const appended = [...prev, { key: next++, t: clock(), verb }];
        return appended.length > 9 ? appended.slice(1) : appended;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="logs">
      {lines.map((l) => (
        <div className="logs__line" key={l.key}>
          <span className="logs__dim">{l.t}</span>{" "}
          <span className={`logs__${l.verb[0]}`}>{l.verb[1]}</span> {l.verb[2]}{" "}
          <span className="logs__dim">{l.verb[3]}</span>
        </div>
      ))}
    </div>
  );
}

interface Pod {
  up: boolean;
  boot: boolean;
}

/** A grid of Kubernetes pods popping in and out of existence. */
function Pods() {
  const N = 24;
  const [pods, setPods] = useState<Pod[]>(() =>
    Array.from({ length: N }, () => ({ up: Math.random() < 0.7, boot: false })),
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const id = setInterval(() => {
      const i = Math.floor(Math.random() * N);
      setPods((prev) => {
        const nextPods = prev.slice();
        const p = nextPods[i];
        if (p.up) {
          if (Math.random() < 0.5) nextPods[i] = { up: false, boot: false };
        } else {
          nextPods[i] = { up: true, boot: true };
          const to = setTimeout(() => {
            setPods((cur) => {
              const c = cur.slice();
              c[i] = { ...c[i], boot: false };
              return c;
            });
          }, 600);
          timeouts.push(to);
        }
        return nextPods;
      });
    }, 480);
    return () => {
      clearInterval(id);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="pods">
      {pods.map((p, i) => (
        <div
          key={i}
          className={`pod${p.up ? " up" : ""}${p.boot ? " boot" : ""}`}
        />
      ))}
    </div>
  );
}

/** Animated metric-dashboard bars with staggered, randomised timing. */
function DashBars() {
  const bars = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        delay: `${(-(Math.random() * 2.6)).toFixed(2)}s`,
        duration: `${(1.8 + Math.random() * 1.6).toFixed(2)}s`,
      })),
    [],
  );
  return (
    <div className="dash">
      {bars.map((b, i) => (
        <div
          key={i}
          className="dash__bar"
          style={{ animationDelay: b.delay, animationDuration: b.duration }}
        />
      ))}
    </div>
  );
}

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="section__head">
        <Reveal as="span" className="section__num">
          02 / What I can do
        </Reveal>
        <Reveal as="h2" className="section__title">
          Designing &amp; implementing distributed systems
        </Reveal>
        <Reveal as="p" className="section__sub">
          Fault-tolerant services that move real money — queues, polyglot
          backends, datastores, orchestration and the observability to keep it
          all honest in production.
        </Reveal>
      </div>

      <Reveal className="bento">
        {/* message queues */}
        <div className="tile tile--queues">
          <div className="tile__label">Message queues</div>
          <div className="tile__viz">
            <div className="pipes">
              <div className="pipe" />
              <div className="pipe" />
              <div className="pipe" />
              <div className="pipe" />
            </div>
          </div>
          <p className="tile__exp">
            Integrated <b>AMQP pub/sub</b> at Genius Sports; event-driven payment
            flows &amp; order queues across services at <b>Kraken</b> and{" "}
            <b>TimeChimp</b>.
          </p>
        </div>

        {/* polyglot */}
        <div className="tile tile--poly">
          <div className="tile__label">Polyglot</div>
          <div className="tile__viz">
            <div className="poly">
              <span className="poly__chip" style={{ background: "#c0613a" }}>
                Rust
              </span>
              <span className="poly__chip" style={{ background: "#2563eb" }}>
                TS
              </span>
              <span className="poly__chip" style={{ background: "#e76f00" }}>
                Java
              </span>
              <span className="poly__chip" style={{ background: "#7c3aed" }}>
                C#
              </span>
              <span className="poly__chip" style={{ background: "#16a34a" }}>
                Py
              </span>
            </div>
          </div>
          <p className="tile__exp">
            Shipped production code in <b>Rust, TypeScript, Java, C#/.NET</b> and{" "}
            <b>Python</b> — across all eight companies.
          </p>
        </div>

        {/* databases */}
        <div className="tile tile--db">
          <div className="tile__label">Datastores</div>
          <div className="tile__viz">
            <div className="dbs">
              {[0, 1, 2].map((i) => (
                <div className="db" key={i}>
                  <div className="db__cyl" />
                  <div className="db__top" />
                  <div className="db__pulse" />
                </div>
              ))}
            </div>
          </div>
          <p className="tile__exp">
            <b>PostgreSQL, MSSQL, MongoDB, RavenDB, Redis</b> &amp; ElasticSearch
            — from query tuning to schema design.
          </p>
        </div>

        {/* network */}
        <div className="tile tile--net">
          <div className="tile__label">Service mesh</div>
          <div className="tile__viz">
            <div className="net">
              <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <path className="edge" d="M40,40 L100,75" />
                <path className="edge" d="M40,110 L100,75" />
                <path className="edge" d="M100,75 L160,40" />
                <path className="edge" d="M100,75 L160,110" />
                <path className="edge" d="M40,40 L40,110" />
                <path className="edge" d="M160,40 L160,110" />
                <circle className="node" cx="40" cy="40" r="4" />
                <circle className="node" cx="40" cy="110" r="4" />
                <circle className="node" cx="100" cy="75" r="5" />
                <circle className="node" cx="160" cy="40" r="4" />
                <circle className="node" cx="160" cy="110" r="4" />
              </svg>
            </div>
          </div>
          <p className="tile__exp">
            Microservices with <b>CQRS &amp; Event Sourcing</b> — 10 services at
            TimeChimp, 5 at Speys, payment services at Kraken.
          </p>
        </div>

        {/* money */}
        <div className="tile tile--money">
          <div className="tile__label">Money in motion</div>
          <div className="tile__viz">
            <MoneyTicker />
          </div>
          <p className="tile__exp">
            Owned <b>deposits &amp; withdrawals</b> at Kraken (100Ks/day);{" "}
            <b>Apple/Google Pay</b> &amp; 3-D Secure at Travix.
          </p>
        </div>

        {/* logs */}
        <div className="tile tile--logs">
          <div className="tile__label">Live logs &amp; observability</div>
          <div className="tile__viz">
            <LogFeed />
          </div>
          <p className="tile__exp">
            Set up <b>Grafana &amp; Prometheus</b> dashboards and alerting at Box;
            carried <b>on-call</b> ownership for live payment incidents at Kraken.
          </p>
        </div>

        {/* pods */}
        <div className="tile tile--pods">
          <div className="tile__label">Orchestration</div>
          <div className="tile__viz">
            <Pods />
          </div>
          <p className="tile__exp">
            <b>Kubernetes + Terraform</b> on GCP &amp; Azure — cut deploy time
            from ~30 min to under 5 at TimeChimp.
          </p>
        </div>

        {/* terraform / terragrunt */}
        <div className="tile tile--tf">
          <div className="tile__label">Infrastructure as code</div>
          <div className="tile__viz">
            <div className="tf">
              <div className="tf__row">
                <span className="tf__sign">+</span>
                <span className="tf__name">module.vpc</span>
                <span className="tf__bar" />
              </div>
              <div className="tf__row">
                <span className="tf__sign mod">~</span>
                <span className="tf__name">gke_cluster</span>
                <span className="tf__bar" />
              </div>
              <div className="tf__row">
                <span className="tf__sign">+</span>
                <span className="tf__name">payments_db</span>
                <span className="tf__bar" />
              </div>
            </div>
          </div>
          <p className="tile__exp">
            <b>Terraform &amp; Terragrunt</b> at Box, TimeChimp &amp; Travix —
            reproducible environments on GCP &amp; Azure.
          </p>
        </div>

        {/* AI / Claude */}
        <div className="tile tile--ai">
          <div className="tile__label">Working with AI</div>
          <div className="tile__viz">
            <div className="ai">
              <div className="ai__orb" />
              <div className="ai__line">
                agent running skill{" "}
                <span className="ai__dots">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
          </div>
          <p className="tile__exp">
            Standardized <b>Claude Code agents</b> — skills, schedulers, Obsidian
            memory — cutting routine PR-review &amp; boilerplate time <b>~30%</b>{" "}
            at Kraken.
          </p>
        </div>

        {/* clean code */}
        <div className="tile tile--clean">
          <div className="tile__label">Clean, tested code</div>
          <div className="tile__viz">
            <div className="clean">
              <div className="ring" style={{ "--p": 85 } as CSSProperties}>
                <span>85%</span>
              </div>
              <div className="clean__checks">
                <div>
                  <i>✓</i>unit
                </div>
                <div>
                  <i>✓</i>integration
                </div>
                <div>
                  <i>✓</i>e2e
                </div>
                <div>
                  <i>✓</i>lint
                </div>
              </div>
            </div>
          </div>
          <p className="tile__exp">
            Coverage to <b>~85%</b> with unit/integration/E2E &amp; <b>CQRS/DDD</b>{" "}
            — cut production bugs <b>~40%</b> at TimeChimp.
          </p>
        </div>

        {/* metric dashboard */}
        <div className="tile tile--dash">
          <div className="tile__label">Metric dashboards</div>
          <div className="tile__viz">
            <DashBars />
          </div>
          <p className="tile__exp">
            <b>Grafana &amp; Prometheus</b> dashboards, metrics &amp; alerting —
            held the signing service at <b>~99.9% uptime</b> at Box.
          </p>
        </div>

        {/* communication & leadership */}
        <div className="tile tile--lead">
          <div className="tile__label">Communication &amp; leadership</div>
          <div className="tile__viz">
            <div className="team">
              <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <line className="tedge" x1="100" y1="75" x2="45" y2="35" />
                <line className="tedge" x1="100" y1="75" x2="35" y2="90" />
                <line className="tedge" x1="100" y1="75" x2="90" y2="125" />
                <line className="tedge" x1="100" y1="75" x2="160" y2="45" />
                <line className="tedge" x1="100" y1="75" x2="165" y2="105" />
                <circle className="ping" cx="100" cy="75" r="8" />
                <circle className="mem" cx="45" cy="35" r="5" />
                <circle className="mem" cx="35" cy="90" r="5" />
                <circle className="mem" cx="90" cy="125" r="5" />
                <circle className="mem" cx="160" cy="45" r="5" />
                <circle className="mem" cx="165" cy="105" r="5" />
                <circle className="lead" cx="100" cy="75" r="7" />
              </svg>
            </div>
          </div>
          <p className="tile__exp">
            <b>Led a team of 8</b> at TimeChimp (part Scrum Master);{" "}
            <b>Lead Developer</b> at Finestmedia — mentoring &amp; cross-team
            delivery.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
