import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CaseDetails from "./CaseDetails";

createRoot(document.getElementById("hmg-case-details")).render(
    <StrictMode>
      <CaseDetails/>
    </StrictMode>,
  );
  