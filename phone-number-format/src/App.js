import "./styles.css";
import { useState } from "react";

function formatPhoneNumber(value) {
  if (!value) return value;

  const phoneNumber = value.replace(/\D/g, ""); // Eliminar todos los caracteres que no son números

  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div>
      <label htmlFor="phone">Phone Number:</label>
      <input
        id="phone"
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="(123) 456-7890"
        maxLength="14" // Limitar la longitud para coincidir con el formato
      />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Phone number format</h1>
      <PhoneNumberInput />
    </div>
  );
}
