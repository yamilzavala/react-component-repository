import React, { useState, useEffect } from "react";
import SuggestionList from "./Suggestion-list";

const Autocomplete = ({
  staticData,
  fetchSuggestions,
  placeholder = "",
  customloading = "Loading...",
  // caching = true,
  onSelect = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onChange = () => {},
  customStyles = {},
  dataKey = "",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueDebounce, setInputValueDebounce] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handeOnChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;
      if (staticData) {
        result = staticData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        result = await fetchSuggestions(query);
      }
      // setCache(query, result);
      console.log(result);
      setSuggestions(result);
    } catch (err) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let debounceTime = setTimeout(() => {
      setInputValueDebounce(inputValue);
    }, 300);

    return () => clearTimeout(debounceTime);
  }, [inputValue]);

  useEffect(() => {
    if (inputValueDebounce) {
      getSuggestions(inputValueDebounce);
    } else {
      setSuggestions([]);
    }
  }, [inputValueDebounce]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder={placeholder}
        style={{ customStyles }}
        value={inputValue}
        onChange={handeOnChange}
      />

      {(suggestions.length > 0 || error || loading) && (
        <ul className="suggestion-list">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">{customloading}</div>}
          <SuggestionList
            dataKey={dataKey}
            suggestions={suggestions}
            highlight={inputValue}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
