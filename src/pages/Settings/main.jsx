import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Settings from "./Settings";

createRoot(document.getElementById("hmg-setting")).render(
  <StrictMode>
    <Settings/>
  </StrictMode>,
);
  