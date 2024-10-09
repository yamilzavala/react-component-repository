import React, { useState } from "react";

export default function DynamicFormComponent() {
  const [fields, setFields] = useState([""]);

  const handleAddField = () => setFields([...fields, ""]);

  const handleOnChange = (idx, e) => {
    const newFields = fields.slice();
    newFields[idx] = e.target.value;
    setFields(newFields);
  };

  return (
    <div className="container">
      {fields.map((field, idx) => {
        return (
          <input
            type="text"
            value={field}
            onChange={(e) => handleOnChange(idx, e)}
          />
        );
      })}
      <button className="btn" onClick={handleAddField}>
        add field
      </button>
    </div>
  );
}
