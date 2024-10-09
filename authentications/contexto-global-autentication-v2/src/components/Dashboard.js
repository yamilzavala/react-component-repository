import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticationContext } from "../context/context";

export default function Dashboard() {
  const { logout, user } = useAuthenticationContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <button onClick={logout}>logout</button>
    </div>
  );
}
