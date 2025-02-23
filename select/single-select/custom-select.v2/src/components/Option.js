import React from "react";
import "./Option.css";
const Option = ({ option, selected, onSelect }) => {
  return (
    <div className="option-container" onClick={() => onSelect(option)}>
      <span className="option" style={{ backgroundColor: option?.color }}>
        {option?.label}
      </span>
      {selected && <span>✔</span>}
    </div>
  );
};

export default Option;
