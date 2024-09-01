// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalState from "./Components/GlobalContext/Context.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <App/>
    </GlobalState>
    </StrictMode>
);
