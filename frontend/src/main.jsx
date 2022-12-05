import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { DarkModeContextProvider } from "./contexts/DarkmodeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeContextProvider>
  </React.StrictMode>
);
