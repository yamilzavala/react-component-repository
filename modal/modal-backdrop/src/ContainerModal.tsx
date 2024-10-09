import React, { useState } from "react";
import Modal from "./Modal";

import "./styles.css";

const ContainerModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {!show ? "open modal" : "close modal"}
      </button>
      {show && (
        <Modal showModal={show} onClose={() => setShow(false)}>
          <p>Modal content</p>
        </Modal>
      )}
    </div>
  );
};

export default ContainerModal;
