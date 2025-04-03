import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ImportExcel from "./ImportExcel";

createRoot(document.getElementById("hmg-import-excel")).render(
  <StrictMode>
    <ImportExcel/>
  </StrictMode>
);
  