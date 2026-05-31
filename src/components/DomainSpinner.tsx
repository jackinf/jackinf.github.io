import { useEffect, useRef, useState, type CSSProperties, type WheelEvent } from "react";
import { domains, type DomainId } from "../data/cv.ts";

interface Props {
  value: DomainId;
  onChange: (id: DomainId) => void;
}

/** Degrees between items on the cylindrical picker wheel. */
const STEP = 30;

/**
 * A 3-D cylindrical picker wheel ("spinner") for choosing a domain. The
 * selected domain re-frames the headline shown beside it. Fully keyboard- and
 * pointer-operable; falls back to a flat list under prefers-reduced-motion.
 */
export function DomainSpinner({ value, onChange }: Props) {
  const index = Math.max(0, domains.findIndex((d) => d.id === value));
  const active = domains[index];
  const [reduce, setReduce] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const fn = () => setReduce(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const step = (dir: number) => {
    const next = (index + dir + domains.length) % domains.length;
    onChange(domains[next].id);
  };

  // Wheel scroll / drag handling.
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    step(e.deltaY > 0 ? 1 : -1);
  };

  return (
    <div
      className="spinner"
      style={{ "--domain-color": active.color } as CSSProperties}
    >
      <div className="spinner__picker" role="listbox" aria-label="Filter by domain">
        <button
          type="button"
          className="spinner__arrow"
          aria-label="Previous domain"
          onClick={() => step(-1)}
        >
          ▲
        </button>

        <div
          className={`spinner__stage${reduce ? " is-flat" : ""}`}
          tabIndex={0}
          ref={wheelRef}
          onWheel={reduce ? undefined : onWheel}
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
              e.preventDefault();
              step(-1);
            } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
              e.preventDefault();
              step(1);
            }
          }}
        >
          <div
            className="spinner__wheel"
            style={
              reduce
                ? undefined
                : ({ transform: `translateZ(-92px) rotateX(${index * STEP}deg)` } as CSSProperties)
            }
          >
            {domains.map((d, i) => {
              const selected = i === index;
              return (
                <button
                  type="button"
                  key={d.id}
                  role="option"
                  aria-selected={selected}
                  className={`spinner__item${selected ? " is-selected" : ""}`}
                  style={
                    reduce
                      ? undefined
                      : ({
                          transform: `rotateX(${-i * STEP}deg) translateZ(92px)`,
                          "--c": d.color,
                        } as CSSProperties)
                  }
                  onClick={() => onChange(d.id)}
                >
                  <span className="spinner__icon" aria-hidden="true">
                    {d.icon}
                  </span>
                  <span className="spinner__label">{d.label}</span>
                </button>
              );
            })}
          </div>
          <span className="spinner__mask spinner__mask--top" aria-hidden="true" />
          <span className="spinner__mask spinner__mask--bottom" aria-hidden="true" />
        </div>

        <button
          type="button"
          className="spinner__arrow"
          aria-label="Next domain"
          onClick={() => step(1)}
        >
          ▼
        </button>
      </div>
      <p className="spinner__hint">Spin to re-frame ↻</p>
    </div>
  );
}
