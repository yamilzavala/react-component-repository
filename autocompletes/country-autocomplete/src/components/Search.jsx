import React, { useState, useCallback, useEffect, useRef } from "react";
import "./Search.css";
import useFetchCountries from "../hook/useFetchCountries";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1); // For keyboard navigation

  // Referencia para los elementos de la lista
  const listItemRefs = useRef([]); // Array de referencias a los elementos li
  //hook
  const { loading, fetchCountries } = useFetchCountries(setFilteredValues);

  //fn
  const handleClick = (countrySelected) => {
    setInputValue(countrySelected);
    setFilteredValues([]);
    setHighlightedIndex(-1); // Reset after selection
  };

  // handle keyboard navigation
  const handleKeyDown = (e) => {
    if (filteredValues.length > 0) {
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === filteredValues.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? filteredValues.length - 1 : prevIndex - 1
        );
      } else if (e.key === "Enter" && highlightedIndex >= 0) {
        handleClick(filteredValues[highlightedIndex]);
      }
    }
  };

  // Scroll the highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listItemRefs.current[highlightedIndex]) {
      listItemRefs.current[highlightedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  //side effect
  useEffect(() => {
    if (!loading) {
      fetchCountries(inputValue);
    }
  }, [inputValue]);

  // Function to highlight the matching text
  const highlightMatch = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, idx) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={idx} className="highlighted">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="container">
      {/* search */}
      <input
        type="text"
        placeholder="Enter a country..."
        value={loading ? "loading..." : inputValue}
        disabled={loading}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // add keydown event
      />

      {/* list */}
      {filteredValues.length > 0 && (
        <ul className="list">
          {filteredValues.map((country, idx) => (
            <li
              key={country}
              ref={(el) => (listItemRefs.current[idx] = el)} // save reference to each li
              className={idx === highlightedIndex ? "highlighted-item" : ""}
              onClick={() => handleClick(country)}
            >
              {highlightMatch(country, inputValue)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
