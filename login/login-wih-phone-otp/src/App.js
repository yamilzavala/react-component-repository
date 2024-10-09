import { useState } from "react";
import "./styles.css";
import PhoneOtpForm from "./components/PhoneOtpForm";

function App() {
  return (
    <div className="App">
      <h1>login with phone</h1>
      <PhoneOtpForm />
    </div>
  );
}

export default App;
