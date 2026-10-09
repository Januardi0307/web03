import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { RTDataProvider } from "./context/RTDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RTDataProvider>
      <App />
    </RTDataProvider>
  </StrictMode>
);