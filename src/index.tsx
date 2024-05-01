import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/styles.scss";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
