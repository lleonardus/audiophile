import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./Routes.jsx";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </StrictMode>,
);
