import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./Login";

createRoot(document.getElementById("hmg-login")).render(
  <StrictMode>
    <Login/>
  </StrictMode>
);