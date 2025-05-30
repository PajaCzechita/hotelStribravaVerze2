import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./global.css";

createRoot(document.querySelector("#app")).render(<App />);
