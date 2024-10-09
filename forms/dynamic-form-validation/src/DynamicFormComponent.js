import React, { useState } from "react";

export default function DynamicFormComponent() {
  const [errors, setErrors] = useState([]);
  const [fields, setFields] = useState([
    { name: "juan", age: 23 },
    { name: "pepe", age: 24 },
  ]);

  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };
  const onChangeField = (i, e) => {
    const newFields = fields.slice();
    newFields[i][e.target.name] = e.target.value;
    setFields(newFields);
  };
  const handleSubmit = () => {
    const validations = fields.map((field, idx) => {
      let err = "";
      if (!field.name) err += "Name: invalid name";
      if (!field.age || isNaN(field.age)) err += " - Age: invalid age";
      return err;
    });
    if (validations.length) {
      setErrors(validations);
    } else {
      alert("Form submitted");
      setErrors([]);
    }
  };
  return (
    <div className="form-container">
      {fields.map((field, idx) => {
        return (
          <div>
            <input
              name="name"
              value={field.name}
              type="text"
              onChange={(e) => onChangeField(idx, e)}
            />
            <input
              name="age"
              value={field.age}
              type="number"
              onChange={(e) => onChangeField(idx, e)}
            />
            {errors[idx] && <p className="form-text-error">{errors[idx]}</p>}
          </div>
        );
      })}
      <div className="form-container-btn">
        <button onClick={addField}>add field</button>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}
