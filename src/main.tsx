// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar.tsx";
import AppRouter from "./Router.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useAnalytics } from "./hooks/useAnalytics";

const App = () => {
  useAnalytics();

  return (
    <React.StrictMode>
      {/* Global layout */}
      <div className="flex w-screen h-screen overflow-x-hidden relative">
        <Navbar />
        {/* Main page */}
        <AppRouter />
        {/* Footer */}
        <SpeedInsights />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
