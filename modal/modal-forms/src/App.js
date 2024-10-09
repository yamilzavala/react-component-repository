import "./styles.css";
import { useState } from "react";
import { ModalComponent } from "./ModalComponent";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <h1>Modal Forms</h1>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
