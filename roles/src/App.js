import "./styles.css";
import { useState } from "react";
import RoleComponent from "./RoleComponent";

export default function App() {
  const [role, setRole] = useState("guest");
  return (
    <div className="App">
      <h1>Render base on role</h1>
      <p>Role: {role}</p>
      <div>
        <button onClick={() => setRole("guest")}>set guest</button>
        <button onClick={() => setRole("admin")}>set admin</button>
        <button onClick={() => setRole("user")}>set user</button>
      </div>
      <RoleComponent currRole={role} roles={["user", "admin"]}>
        <h2>Admin and User Panel</h2>
        <p>This content is visible to users with 'admin' or 'user' roles.</p>
      </RoleComponent>
    </div>
  );
}
