import { useState } from "react";

/**
 * Generates a polished, deterministic PDF on the client via @react-pdf/renderer
 * (lazy-loaded) and downloads it. No Chrome "Print to PDF".
 */
export function DownloadCV() {
  const [state, setState] = useState<"idle" | "working" | "error">("idle");

  const onClick = async () => {
    if (state === "working") return;
    setState("working");
    try {
      const { buildCvBlob } = await import("../cv/CvDocument.tsx");
      const blob = await buildCvBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Jevgeni_Rumjantsev_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      setState("idle");
    } catch (err) {
      console.error("CV generation failed", err);
      setState("error");
    }
  };

  return (
    <button
      type="button"
      className="btn btn--primary"
      onClick={onClick}
      disabled={state === "working"}
    >
      {state === "working"
        ? "Building PDF…"
        : state === "error"
          ? "Retry download"
          : "Download CV"}
    </button>
  );
}
