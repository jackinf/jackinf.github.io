import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NumbersApp } from "./NumbersApp.tsx";
import "../styles/theme.css";
import "../styles/global.css";
import "../styles/numbers.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <NumbersApp />
  </StrictMode>,
);
