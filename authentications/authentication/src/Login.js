import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "./context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login API call
    if (email === "user@example.com" && password === "password") {
      login();
      navigate("/dashboard");
    } else {
      navigate("/");
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
