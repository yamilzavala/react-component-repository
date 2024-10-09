import React, { useState } from "react";
import { data } from "./data";

export default function DynamicTable() {
  //states
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataValue, setDataValue] = useState(data);
  const [filter, setFilter] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortCol, setSortCol] = useState(null);

  //filtering

  let filteredRows = dataValue.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  filteredRows = filteredRows.filter((row) =>
    row.name.toLowerCase().includes(filter.toLowerCase())
  );

  //sorting
  const handleSorting = (col) => {
    setSortCol(col);
    setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
    const newDataValues = dataValue.slice();
    newDataValues.sort((a, b) => {
      if (typeof a[col] === "string") {
        return sortDirection === "asc"
          ? a[col].localeCompare(b[col])
          : b[col].localeCompare(a[col]);
      } else {
        return sortDirection === "asc" ? a[col] - b[col] : b[col] - a[col];
      }
    });
    setDataValue(newDataValues);
  };

  //pagination
  const pages = Math.ceil(dataValue.length / pageSize);
  const pagesArray = Array.from({ length: pages }, (_, idx) => idx + 1);

  //console.log("filteredRows: ", filteredRows);

  return (
    <div>
      {/* input filter */}
      <input
        placeholder="filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* table */}
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th onClick={() => handleSorting("name")}>
              Name{" "}
              {sortCol === "name" && (sortDirection === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSorting("age")}>
              Age {sortCol === "age" && (sortDirection === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSorting("city")}>
              City{" "}
              {sortCol === "city" && (sortDirection === "asc" ? "🔼" : "🔽")}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row) => {
            return (
              <tr>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* pagination */}
      <div style={{ margin: "0 auto" }}>
        {pagesArray.map((btn, idx) => (
          <button
            style={{
              background: `${idx + 1 === currentPage ? "gray" : ""}`,
              margin: "3px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentPage(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
