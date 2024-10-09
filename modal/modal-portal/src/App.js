import "./styles.css";
import { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const elToRender = (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto",
        marginTop: "1rem",
        border: "1px solid black",
        width: "40%",
      }}
    >
      <button onClick={onClose}>x</button>
      {children}
    </div>
  );

  const targetDivWhereRender = document.getElementById("root-portal");

  return ReactDOM.createPortal(elToRender, targetDivWhereRender);
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <h1>Modal with portals</h1>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <header>modal title</header>
          <section>modal body</section>
          <footer>modal footer</footer>
        </div>
      </Modal>
    </div>
  );
}
