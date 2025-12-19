import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import heroBackground from "@/assets/hero-background.jpg";

// Preload hero image for better LCP
const preloadLink = document.createElement('link');
preloadLink.rel = 'preload';
preloadLink.as = 'image';
preloadLink.href = heroBackground;
preloadLink.setAttribute('fetchpriority', 'high');
document.head.appendChild(preloadLink);

createRoot(document.getElementById("root")!).render(<App />);
