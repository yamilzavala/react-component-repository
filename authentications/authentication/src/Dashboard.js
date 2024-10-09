import React, { useEffect } from "react";
import { useLoginContext } from "./context";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { logout, isAuthenticated } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, []);

  return (
    <div>
      <button onClick={logout}>logout</button>
      Dashboard
    </div>
  );
}
