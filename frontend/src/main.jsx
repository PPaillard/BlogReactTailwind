import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { DarkModeContextProvider } from "./contexts/DarkmodeContext";
import { UserContextProvider } from "./contexts/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
