import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../store/theme-context";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/blog">blog</Link>
      </div>
      <span onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀"} </span>
    </nav>
  );
}

export default Navbar;
