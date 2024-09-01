import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { ReduxProvider } from "./redux/ReduxProvider";
import App from "./App";
import { AppThemeProvider } from "./context/theme-changing-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppThemeProvider>
        <ReduxProvider>
          <App />
        </ReduxProvider>
      </AppThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
