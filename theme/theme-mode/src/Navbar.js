import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./context";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{ display: "flex", gap: "1rem", justifyContent: "space-between" }}
    >
      <Link to="/">home</Link>
      <Link to="/dashboard">dashboard</Link>
      <button onClick={() => toggleTheme()}>
        toggle theme {theme === "light" ? "🌙" : "☀"}
      </button>
    </div>
  );
}
