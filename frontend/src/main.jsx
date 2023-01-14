import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { DarkModeContextProvider } from "./contexts/DarkmodeContext";
import { CurrentUserContextProvider } from "./contexts/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <CurrentUserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrentUserContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
