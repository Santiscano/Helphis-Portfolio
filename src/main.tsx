import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import "./sass/global.scss";
import App from "./App";
import "./index.css";
// Context
import { AppContextProvider } from "./context/AppContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
