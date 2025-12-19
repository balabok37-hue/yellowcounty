import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hero image is preloaded in index.html for faster LCP
createRoot(document.getElementById("root")!).render(<App />);
