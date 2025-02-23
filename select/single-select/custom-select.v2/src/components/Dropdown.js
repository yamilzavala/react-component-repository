import React from "react";
import Option from "./Option";
import "./Dropdown.css";

const Dropdown = ({ selected, onSelect, options }) => {
  return (
    <div className="dropdown">
      {options.map((option, idx) => (
        <Option
          key={idx}
          option={option}
          selected={selected?.id === option?.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default Dropdown;
