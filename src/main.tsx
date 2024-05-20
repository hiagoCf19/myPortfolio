import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import RoutesApp from "./routes";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <RoutesApp />
  </React.StrictMode>
);
