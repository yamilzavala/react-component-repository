import { useTheme } from "./context";
import "./styles.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <h1>Theme mode</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
