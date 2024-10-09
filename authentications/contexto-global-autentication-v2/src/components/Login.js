import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticationContext } from "../context/context";

export default function Login() {
  const { login } = useAuthenticationContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

    if (
      formObject.email === "test@gmail.com" &&
      formObject.password === "123456"
    ) {
      login("logged");
      navigate("/dashborad");
    } else {
      navigate("/");
      alert("invalid credentials");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">submit</button>
    </form>
  );
}
