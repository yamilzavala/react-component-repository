import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticationContext } from "../context/context";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useAuthenticationContext();

  if (!user) navigate("/");
  return children;
}
