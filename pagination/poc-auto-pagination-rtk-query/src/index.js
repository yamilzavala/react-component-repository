import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { store } from "./store/store";
// import { productsApi } from "./store/api/apiSlice";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={productsApi}> */}
      <App />
      {/* </ApiProvider> */}
    </Provider>
  </StrictMode>
);
