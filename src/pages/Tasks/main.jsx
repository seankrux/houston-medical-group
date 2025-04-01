import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Tasks from "./Tasks";

createRoot(document.getElementById("hmg-tasks")).render(
    <StrictMode>
      <Tasks/>
    </StrictMode>,
  );
  