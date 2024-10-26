import { useState } from "react";
import AuthCodeInput from "./components/AuthCodeInput";

const baseUrl = "https://www.greatfrontend.com/api/questions/auth-code-input";

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(code: string) {
    try {
      const resp = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({ otp: code }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const text = await resp.text();
      alert(text);
    } catch (error) {
      console.log("An error ocurred fetching data!");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthCodeInput onSubmit={onSubmit} length={6} isDisabled={isSubmitting} />
  );
}
