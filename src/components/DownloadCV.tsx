import { useEffect, useRef, useState } from "react";

type Variant = "designed" | "ats";
type Status = "idle" | "working" | "error";

/**
 * Downloads a deterministic, client-generated PDF (via @react-pdf/renderer,
 * lazy-loaded — no Chrome "Print to PDF"). Rendered as a split button:
 *
 *  - The main blue button downloads the "designed" CV in one click — the
 *    polished, one-page, visually-styled variant — with no extra menu step.
 *  - The divided caret segment reveals the "ats" variant: a single-column,
 *    keyword-rich CV tuned to pass Applicant Tracking Systems / AI résumé
 *    filters (the designed variant is repeated there for completeness).
 */
export function DownloadCV() {
  const [status, setStatus] = useState<Status>("idle");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close the menu on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const download = async (variant: Variant) => {
    if (status === "working") return;
    setOpen(false);
    setStatus("working");
    try {
      const [blob, filename] =
        variant === "ats"
          ? [
              await (await import("../cv/AtsCvDocument.tsx")).buildAtsCvBlob(),
              "Jevgeni_Rumjantsev_CV_ATS.pdf",
            ]
          : [
              await (await import("../cv/CvDocument.tsx")).buildCvBlob(),
              "Jevgeni_Rumjantsev_CV.pdf",
            ];
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      setStatus("idle");
    } catch (err) {
      console.error("CV generation failed", err);
      setStatus("error");
    }
  };

  const label =
    status === "working"
      ? "Building PDF…"
      : status === "error"
        ? "Retry — Download CV"
        : "Download CV";

  return (
    <div className="dlcv" ref={wrapRef}>
      <div className="dlcv__split">
        {/* Primary action: one click downloads the polished PDF — no menu. */}
        <button
          type="button"
          className="btn btn--primary dlcv__main"
          onClick={() => download("designed")}
          disabled={status === "working"}
        >
          {label}
        </button>
        {/* Secondary: an explicit, divided segment for the other format. */}
        <button
          type="button"
          className="btn btn--primary dlcv__toggle"
          onClick={() => setOpen((o) => !o)}
          disabled={status === "working"}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="More CV formats"
          title="More CV formats"
        >
          <span className="dlcv__caret" aria-hidden="true">▾</span>
        </button>
      </div>

      {open && (
        <div className="dlcv__menu" role="menu">
          <button
            type="button"
            className="dlcv__item"
            role="menuitem"
            onClick={() => download("designed")}
          >
            <span className="dlcv__item-title">Designed CV</span>
            <span className="dlcv__item-sub">One page · polished layout</span>
          </button>
          <button
            type="button"
            className="dlcv__item"
            role="menuitem"
            onClick={() => download("ats")}
          >
            <span className="dlcv__item-title">ATS-friendly CV</span>
            <span className="dlcv__item-sub">Keyword-rich · plain · passes filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
