import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // IMPORTAR App corretamente!

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
