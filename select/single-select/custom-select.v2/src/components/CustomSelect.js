import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./CustomSelect.css";

const options = [
  { id: 1, label: "VALUE", color: "#B3B3B3" },
  { id: 2, label: "VALUE", color: "#6B9EFF" },
  { id: 3, label: "VALUE", color: "#FFD700" },
  { id: 4, label: "VALUE", color: "#74C365" },
  { id: 5, label: "VALUE", color: "#FF4C4C" },
  { id: 6, label: "VALUE", color: "#FF99CC" },
];

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const clearSelection = () => {
    setSelectedOption(null);
  };

  const onSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <label>Label</label>

      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        <div>
          {/* options */}
          {selectedOption ? (
            <span
              className="option-selected"
              style={{ background: selectedOption.color }}
            >
              {selectedOption?.label}
            </span>
          ) : (
            <span>Select an option...</span>
          )}
          {/* cross */}
          {selectedOption && (
            <button className="btn" onClick={clearSelection}>
              ✖
            </button>
          )}
        </div>
        {/* arrow */}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <Dropdown
          selected={selectedOption}
          onSelect={onSelect}
          options={options}
        />
      )}
    </div>
  );
};

export default CustomSelect;
