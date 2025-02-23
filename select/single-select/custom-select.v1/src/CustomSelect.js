import React, { useState } from "react";

export default function CustomSelect({ options }) {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // filter
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  //higlighted
  function highlightedText(option, search) {
    const parts = option.split(new RegExp(`(${search})`, "gi"));
    return (
      <span>
        {parts.map((part) =>
          part.toLowerCase() === search ? <b>{part}</b> : part
        )}
      </span>
    );
  }

  return (
    <>
      {/* search */}
      <input
        placeholder="Search..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* options */}
      {filteredOptions.map((option) => {
        return (
          <li onClick={() => setSelectedOption(option)}>
            {highlightedText(option, search)}
          </li>
        );
      })}

      {/* selected value */}
      {selectedOption ? <p>Selected Option: {selectedOption}</p> : null}
    </>
  );
}
