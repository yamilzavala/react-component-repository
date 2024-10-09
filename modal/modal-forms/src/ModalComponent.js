import React from "react";

export const ModalComponent = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="backdrop">
      <div className="form-container">
        <form>
          <div>
            <label htmlFor="name">
              name:
              <input type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              email:
              <input type="email" />
            </label>
          </div>

          <button type="submit">submit</button>
        </form>
        <button onClick={() => setIsOpen(false)}>close modal</button>
      </div>
    </div>
  );
};
