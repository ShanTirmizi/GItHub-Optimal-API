import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GithubProvider } from "./context/github_context.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GithubProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GithubProvider>
);
