import React, { useState } from "react";

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    console.log("e.target.selectedOptions: ", e.target.selectedOptions);
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(value);
  };

  return (
    <div>
      <select multiple={true} value={selectedOptions} onChange={handleChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <div>Selected: {selectedOptions.join(", ")}</div>
    </div>
  );
};

export default MultiSelect;
