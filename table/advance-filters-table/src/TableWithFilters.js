import React, { useState, useEffect } from "react";

const dataValues = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 40 },
];

const TableWithFilters = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [data, setData] = useState(dataValues);

  const filteredData = data.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());
    const ageMatches = ageFilter ? item.age === +ageFilter : true;
    return ageMatches && nameMatches;
  });

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by number"
        value={ageFilter}
        onChange={(e) => setAgeFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithFilters;
