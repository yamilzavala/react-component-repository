import React from "react";
import Tooltip from "./Tooltip";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gap: "1rem",
        marginTop: "5rem",
        width: "100%",
      }}
    >
      <Tooltip text="Este es un tooltip" position="top">
        <button>Hover sobre mí</button>
      </Tooltip>

      <Tooltip text="Otro tooltip a la derecha" position="left">
        <span>Pasa el mouse por aquí</span>
      </Tooltip>
    </div>
  );
};

export default App;
