import type { CSSProperties } from "react";
import { useReveal } from "../hooks/useReveal.ts";
import { ArrowIcon } from "../components/icons.tsx";
import { scrollToId } from "../lib/scroll.ts";
import { CountUp } from "./CountUp.tsx";
import type { BigStat, Block, CheatGroup, MiniStat, ReachRow } from "../data/numbers.ts";

/** Big count-up tile. Self-revealing so the count starts when it scrolls in. */
export function BigStatTile({ stat, delay = 0 }: { stat: BigStat; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-reveal=""
      className={`nm-big__tile${visible ? " is-visible" : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <span className="nm-big__value">
        {stat.prefix}
        <CountUp value={stat.value} decimals={stat.decimals} active={visible} />
        {stat.suffix}
      </span>
      <span className="nm-big__label">{stat.label}</span>
      {stat.sub && <span className="nm-big__sub">{stat.sub}</span>}
    </div>
  );
}

/**
 * Hero summary: one slider per company. Soft bar = total reach, solid bar
 * with a knob = the active slice. Widths animate in when the parent Reveal
 * gets .is-visible (see .nm-reach rules in numbers.css).
 */
export function ReachPanel({ rows }: { rows: ReachRow[] }) {
  return (
    <div className="nm-reach">
      {rows.map((r, i) => (
        <div
          key={r.company}
          className="nm-reach__row"
          style={{ "--brand": r.brand } as CSSProperties}
        >
          <div className="nm-reach__head">
            <span className="nm-reach__co">{r.company}</span>
            <span className="nm-reach__vals">
              <b>{r.total.display}</b> {r.total.label} · <b>{r.active.display}</b>{" "}
              {r.active.label}
            </span>
          </div>
          <div className="nm-reach__track">
            <span
              className="nm-reach__bar nm-reach__bar--total"
              style={{ "--w": `${r.total.pct}%`, transitionDelay: `${i * 120}ms` } as CSSProperties}
            />
            <span
              className="nm-reach__bar nm-reach__bar--active"
              style={
                { "--w": `${r.active.pct}%`, transitionDelay: `${160 + i * 120}ms` } as CSSProperties
              }
            />
          </div>
        </div>
      ))}
      <div className="nm-reach__legend">
        <span className="nm-reach__swatch nm-reach__swatch--active" /> active
        <span className="nm-reach__swatch nm-reach__swatch--total" /> total reach
        <span className="nm-reach__scale">log scale · public and estimated figures</span>
      </div>
    </div>
  );
}

/**
 * Hero cheat sheet: one compact line per system, grouped by company.
 * Group headers jump to the company's section.
 */
export function CheatSheet({ groups }: { groups: CheatGroup[] }) {
  return (
    <div className="nm-cheat">
      <div className="nm-cheat__cols" aria-hidden="true">
        <span>system</span>
        <span>rate</span>
        <span>scale</span>
        <span>impact</span>
      </div>
      {groups.map((g) => (
        <div
          key={g.id}
          className="nm-cheat__grp"
          style={{ "--brand": g.brand } as CSSProperties}
        >
          <button type="button" className="nm-cheat__co" onClick={() => scrollToId(g.id)}>
            <span className="nm-cheat__dot" />
            {g.company}
          </button>
          {g.rows.map((r) => (
            <div key={r.feature} className="nm-cheat__row">
              <span className="nm-cheat__feature">{r.feature}</span>
              <span className="nm-cheat__rate">{r.rate}</span>
              <span className="nm-cheat__scale">{r.scale}</span>
              <span className="nm-cheat__impact">{r.impact}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="nm-cheat__foot">rates are averages · estimates marked with ~</div>
    </div>
  );
}

export function MiniStats({ stats, title }: { stats: MiniStat[]; title?: string }) {
  return (
    <div>
      {title && <h4 className="nm-block__title">{title}</h4>}
      <ul className="nm-mini">
        {stats.map((s) => (
          <li key={s.label} className="nm-mini__item">
            <span className="nm-mini__value">{s.value}</span>
            <span className="nm-mini__label">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Renders one content block inside a project card. */
export function CardBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "mini":
      return <MiniStats stats={block.stats} title={block.title} />;

    case "flow":
      return (
        <div>
          <div className="nm-flow">
            {block.steps.map((s, i) => (
              <div key={s.label} className="nm-flow__step">
                {i > 0 && <ArrowIcon className="nm-flow__arrow" />}
                <div className="nm-flow__box">
                  <span className="nm-flow__value">{s.value}</span>
                  <span className="nm-flow__label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
          {block.note && <p className="nm-note">{block.note}</p>}
        </div>
      );

    case "latency":
      return (
        <div>
          <h4 className="nm-block__title">{block.title}</h4>
          <div className="nm-lat">
            {block.bars.map((b) => (
              <div key={b.label} className="nm-lat__row">
                <span className="nm-lat__label">{b.label}</span>
                <span className="nm-lat__track">
                  <span
                    className={`nm-lat__fill nm-lat__fill--${b.tone}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </span>
                <span className="nm-lat__ms">{b.display}</span>
              </div>
            ))}
          </div>
          {block.note && <p className="nm-note">{block.note}</p>}
        </div>
      );

    case "formula":
      return <FormulaBlock block={block} />;

    case "alerts":
      return (
        <div>
          <h4 className="nm-block__title">{block.title}</h4>
          <ul className="nm-alerts">
            {block.rules.map((r) => (
              <li key={r.text} className={`nm-alerts__rule nm-alerts__rule--${r.tone}`}>
                {r.text}
              </li>
            ))}
          </ul>
        </div>
      );

    case "chips":
      return (
        <div>
          <h4 className="nm-block__title">{block.title}</h4>
          <div className="nm-chips">
            {block.chips.map((c) => (
              <span key={c} className="nm-chips__chip">
                {c}
              </span>
            ))}
          </div>
          {block.note && <p className="nm-note">{block.note}</p>}
        </div>
      );
  }
}

function FormulaBlock({ block }: { block: Extract<Block, { kind: "formula" }> }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className="nm-formula">
      <div className="nm-formula__math">
        <span className="nm-formula__eq">{block.formula}</span>
        <span className="nm-formula__sub">{block.substitution}</span>
      </div>
      <div className="nm-formula__result">
        <span className="nm-big__value">
          {block.result.prefix}
          <CountUp value={block.result.value} decimals={block.result.decimals} active={visible} />
          {block.result.suffix}
        </span>
        <span className="nm-big__label">{block.result.label}</span>
      </div>
      {block.note && <p className="nm-note nm-formula__note">{block.note}</p>}
    </div>
  );
}
