import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import YouTubeView from "./components/YouTube/YouTubeView";
import YouTubeSubs from "./components/YouTube/YouTubeSubs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let arr = [];
root.render(
  <StrictMode>
    <App />
    <YouTubeSubs arr={arr} />
    <YouTubeView arr={arr} />
    <antdDeneme />
  </StrictMode>
);
