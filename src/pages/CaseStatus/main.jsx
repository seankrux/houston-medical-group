import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CaseStatus from "./CaseStatus";

createRoot(document.getElementById("hmg-case-status")).render(
    <StrictMode>
      <CaseStatus/>
    </StrictMode>,
  );
  