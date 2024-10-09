import React, { useState } from "react";
import { data } from "./data";

export default function TableComponent() {
  const [filteredData, setFilteredData] = useState(data);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortCol, setSortCol] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  //searching
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const newFiteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredData(newFiteredData);
    setCurrentPage(1);
  };

  //sorting
  const handleSorting = (col) => {
    setSortCol(col);
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    const newSortedData = [...filteredData].sort((a, b) => {
      if (typeof a[col] === "string") {
        return sortDirection === "asc"
          ? a[col].localeCompare(b[col])
          : b[col].localeCompare(a[col]);
      } else {
        return sortDirection === "asc" ? a[col] - b[col] : b[col] - a[col];
      }
    });
    setFilteredData(newSortedData);
  };

  //pagination
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginatedData = filteredData.slice(startIdx, endIdx);

  return (
    <div className="container">
      {/* searching */}
      <input
        placeholder="Filter by name"
        onChange={handleSearch}
        className="input-search"
      />

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSorting("name")}>
              Name
              {sortCol === "name" && (sortDirection === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSorting("age")}>
              Age
              {sortCol === "age" && (sortDirection === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => handleSorting("city")}>
              City
              {sortCol === "city" && (sortDirection === "asc" ? "🔼" : "🔽")}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        Page {currentPage}
        <button
          disabled={currentPage * rowsPerPage >= filteredData.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
