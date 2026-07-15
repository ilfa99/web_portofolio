import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);