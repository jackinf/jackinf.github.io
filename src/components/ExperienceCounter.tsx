import { useEffect, useState } from "react";
import { CAREER_START } from "../data/cv.ts";

function diff(from: Date, to: Date) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const decimal = (to.getTime() - from.getTime()) / (365.25 * 24 * 3600 * 1000);
  return { years, months, days, decimal };
}

/**
 * A styled, self-updating "years of experience" panel, dynamically calculated
 * from the first day of work (20 Jun 2012).
 */
export function ExperienceCounter() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const { years, months, days, decimal } = diff(CAREER_START, now);

  return (
    <div className="stat stat--counter reveal is-visible">
      <span className="stat__value">{years}+</span>
      <span className="stat__label">Years engineering</span>
      <span className="stat__ticker" title="Since 20 June 2012">
        {years}y · {months}m · {days}d &nbsp;
        <span className="stat__decimal">({decimal.toFixed(6)})</span>
      </span>
    </div>
  );
}
