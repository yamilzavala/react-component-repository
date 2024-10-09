import React from "react";
import ReactDOM from "react-dom";

type ModalT = {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalT> = ({ showModal, children, onClose }) => {
  if (!showModal) return null;

  const content = (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header>
          <span>Header modal</span>
          <button onClick={onClose} className="close-btn">
            x
          </button>
        </header>

        <section className="modal-body">{children}</section>
        <footer className="modal-footer">footer content</footer>
      </div>
    </div>
  );

  const containerModal = document.getElementById("modal");
  return ReactDOM.createPortal(content, containerModal!);
};

export default Modal;
