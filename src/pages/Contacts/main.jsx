import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Contacts from "./Contacts";

createRoot(document.getElementById("hmg-contacts")).render(
    <StrictMode>
      <Contacts/>
    </StrictMode>,
  );
  