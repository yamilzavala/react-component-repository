import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LoginApp from "./LoginApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LoginApp />
  </StrictMode>
);
