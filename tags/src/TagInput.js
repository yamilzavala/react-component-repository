import React, { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue]);
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a tag value"
      />
      <div className="container-tags">
        {tags.map((tag, index) => (
          <span className="tag" key={index} style={{ marginRight: "5px" }}>
            {tag}{" "}
            <button className="btn" onClick={() => handleDelete(index)}>
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
