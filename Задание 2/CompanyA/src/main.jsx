import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/null.css";
import App from "./Component/App/App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
