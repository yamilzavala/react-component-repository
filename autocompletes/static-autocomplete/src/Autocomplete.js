import React, { useState } from "react";

const suggestions = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];

export default function Autocomplete() {
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleOnchange = (e) => {
    const value = e.target.value;
    setInput(value);
    const newFilteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(value)
    );
    setFilteredSuggestions(newFilteredSuggestions);
  };

  const handleSelect = (value) => {
    setInput(value);
    setFilteredSuggestions([]);
  };

  return (
    <div className="container">
      <input
        value={input}
        onChange={handleOnchange}
        placeholder="Enter a fruit"
        type="text"
      />
      <ul className={filteredSuggestions.length > 0 ? "suggestions" : null}>
        {filteredSuggestions.map((suggestion, idx) => {
          return (
            <li key={idx} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
