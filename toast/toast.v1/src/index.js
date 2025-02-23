import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { toaststore } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={toaststore}>
      <App />
    </Provider>
  </StrictMode>
);
