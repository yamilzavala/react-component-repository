import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { LoginContextProvider } from "./context";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import "./styles.css";

export default function App() {
  return (
    <LoginContextProvider>
      <div className="App">
        <h1>Authentication</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </LoginContextProvider>
  );
}
