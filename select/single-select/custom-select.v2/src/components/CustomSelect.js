import { useState } from "react";
import "./CustomSelect.css";
// Datos simulados de opciones con diferentes estilos
const options = [
  { id: 1, label: "VALUE", color: "#B3B3B3" },
  { id: 2, label: "VALUE", color: "#6B9EFF" },
  { id: 3, label: "VALUE", color: "#FFD700" },
  { id: 4, label: "VALUE", color: "#74C365" },
  { id: 5, label: "VALUE", color: "#FF4C4C" },
  { id: 6, label: "VALUE", color: "#FF99CC" },
];

// Componente de opción dentro del dropdown
const Option = ({ option, isSelected, onSelect }) => {
  return (
    <div
      className="option"
      style={{ borderColor: option.color }}
      onClick={() => onSelect(option)}
    >
      <span style={{ color: option.color }}>{option.label}</span>
      {isSelected && <span className="checkmark">✔</span>}
    </div>
  );
};

// Componente del dropdown con lista de opciones
const Dropdown = ({ options, selected, onSelect }) => {
  return (
    <div className="dropdown">
      {options.map((option) => (
        <Option
          key={option.id}
          option={option}
          isSelected={selected?.id === option.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

// Componente principal de selección personalizada
const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const clearSelection = () => setSelectedOption(null);

  return (
    <div className="custom-select">
      <label>Label</label>
      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <span
            className="selected"
            style={{ backgroundColor: selectedOption.color }}
          >
            {selectedOption.label}
          </span>
        ) : (
          <span className="placeholder">Select an option</span>
        )}
        {selectedOption && (
          <button className="clear" onClick={clearSelection}>
            ✖
          </button>
        )}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <Dropdown
          options={options}
          selected={selectedOption}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default CustomSelect;
