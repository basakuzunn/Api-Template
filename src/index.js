import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import YouTubeView from "./components/YouTube/YouTubeView";
import YouTubeSubs from "./components/YouTube/YouTubeSubs";
import FacebookApi from "./components/YouTube/FacebookApi";
import InstagramCount from "./components/YouTube/InstagramCount";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let arr = [];
root.render(
  <StrictMode>
    <App />
    <YouTubeSubs arr={arr} />
    <YouTubeView arr={arr} />
    <FacebookApi arr={arr} />
    <InstagramCount arr={arr} />
  </StrictMode>
);
