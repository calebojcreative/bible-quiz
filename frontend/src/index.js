import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QuizProvider } from "./context/QuizContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
