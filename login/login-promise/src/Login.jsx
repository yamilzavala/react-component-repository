import React, { useState } from "react";
import { login } from "./utils";

export default function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await login(mail, pass);
      alert("you are logged");
      setMail("");
      setPass("");
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      {err ? <span className="error">{err}</span> : null}
      <button
        disabled={!mail || pass.length < 6 || loading}
        onClick={handleLogin}
        className="btn"
      >
        login
      </button>
    </div>
  );
}
