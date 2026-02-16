import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { QueryProvider } from "./providers/QueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>

);
