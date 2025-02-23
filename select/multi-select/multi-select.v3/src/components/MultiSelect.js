import { useState } from "react";
import "./MultiSelect.css";

// Opciones con colores personalizados
const options = [
  { id: 1, label: "VALUE", color: "#B3B3B3" },
  { id: 2, label: "VALUE", color: "#6B9EFF" },
  { id: 3, label: "VALUE", color: "#FFD700" },
  { id: 4, label: "VALUE", color: "#74C365" },
  { id: 5, label: "VALUE", color: "#FF4C4C" },
  { id: 6, label: "VALUE", color: "#FF99CC" },
];

// Componente de opción dentro del dropdown
const Option = ({ option, isSelected, onToggle }) => {
  return (
    <div
      className="option"
      style={{ borderColor: option.color }}
      onClick={() => onToggle(option)}
    >
      <span style={{ color: option.color }}>{option.label}</span>
      {isSelected && <span className="checkmark">✔</span>}
    </div>
  );
};

// Componente del dropdown con lista de opciones
const Dropdown = ({ options, selectedOptions, onToggle }) => {
  return (
    <div className="dropdown">
      {options.map((option) => (
        <Option
          key={option.id}
          option={option}
          isSelected={selectedOptions.some((o) => o.id === option.id)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// Componente principal de selección múltiple
const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Función para agregar o quitar opciones seleccionadas
  const toggleOption = (option) => {
    setSelectedOptions(
      (prev) =>
        prev.some((o) => o.id === option.id)
          ? prev.filter((o) => o.id !== option.id) // Si ya está, la quitamos
          : [...prev, option] // Si no está, la agregamos
    );
  };

  // Función para eliminar una opción individualmente
  const removeOption = (optionId) => {
    setSelectedOptions(selectedOptions.filter((o) => o.id !== optionId));
  };

  // Limpiar todas las selecciones
  const clearSelection = () => setSelectedOptions([]);

  return (
    <div className="multi-select">
      <label>Label</label>
      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        {selectedOptions.length > 0 ? (
          <div className="selected-options">
            {selectedOptions.map((option) => (
              <span
                key={option.id}
                className="selected-tag"
                style={{ backgroundColor: option.color }}
              >
                {option.label}
                <button onClick={() => removeOption(option.id)}>✖</button>
              </span>
            ))}
          </div>
        ) : (
          <span className="placeholder">Select options</span>
        )}
        {selectedOptions.length > 0 && (
          <button className="clear" onClick={clearSelection}>
            ✖
          </button>
        )}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <Dropdown
          options={options}
          selectedOptions={selectedOptions}
          onToggle={toggleOption}
        />
      )}
    </div>
  );
};

export default MultiSelect;
