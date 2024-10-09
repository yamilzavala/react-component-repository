import React from "react";

export default function SuggestionList({
  suggestions = [],
  dataKey,
  highlight,
  onSuggestionClick,
}) {
  const getHighlightedText = (text, highlight) => {
    console.log("text: ", text);
    console.log("highlight: ", highlight);
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, idx) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={idx}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };
  return (
    <>
      {suggestions.map((suggestion, idx) => {
        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <li
            key={idx}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
          >
            {getHighlightedText(currSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
}
