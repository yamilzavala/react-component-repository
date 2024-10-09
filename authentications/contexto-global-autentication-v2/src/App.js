import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <h1>Global Authentication</h1>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/dashborad"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
