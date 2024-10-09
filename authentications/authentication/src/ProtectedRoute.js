import React from "react";
import { useLoginContext } from "./context";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useLoginContext();
  if (!isAuthenticated) navigate("/");
  return children;
}
