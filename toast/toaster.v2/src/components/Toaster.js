import React, { useState } from "react";
import "./Toaster.css";

const Toaster = ({ title, message, buttonText, duration }) => {
  const [showToast, setShowToast] = useState(false);
  const [closing, setClosing] = useState(false);
  const [animate, setAnimate] = useState(false); // Nuevo estado para activar la animación

  const handleShowToast = () => {
    setShowToast(true);
    setClosing(false);
    setAnimate(false); // Reiniciamos la animación

    setTimeout(() => {
      setAnimate(true); // Activamos la animación un poco después de montar el Toaster
    }, 10);

    setTimeout(() => handleClose(), duration);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setShowToast(false), 300);
  };

  return (
    <div className="toaster-container">
      <button className="calendar-btn" onClick={handleShowToast}>
        Add to calendar
      </button>

      {showToast && (
        <div
          className={`toast ${animate ? "show" : ""} ${
            closing ? "closing" : ""
          }`}
        >
          <div className="toast-content">
            <div>
              <strong>{title}</strong>
              <p>{message}</p>
            </div>
            <button className="undo-btn" onClick={handleClose}>
              {buttonText}
            </button>
          </div>
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Toaster;
