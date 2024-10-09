import React, { useState } from "react";

export default function EditableTableComponent() {
  const [data, setData] = useState([
    { id: 1, name: "yamil", age: 39 },
    { id: 2, name: "josue", age: 29 },
  ]);

  const handleOnchange = (id, field, value) => {
    const newValues = data.map((item) => {
      return item.id === id ? { ...item, [field]: value } : item;
    });
    setData(newValues);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {data.map((field, tdx) => {
            return (
              <tr key={field.id}>
                <td>
                  <input
                    name="name"
                    value={field.name}
                    type="text"
                    onChange={(e) =>
                      handleOnchange(field.id, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    name="age"
                    value={field.age}
                    type="number"
                    onChange={(e) =>
                      handleOnchange(field.id, "age", e.target.value)
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
