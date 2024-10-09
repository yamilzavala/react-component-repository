import "./styles.css";
import { useState } from "react";

export default function App() {
  const fruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "mango",
    "blueberry",
    "pineapple",
  ];
  const [fruitsState, setFruit] = useState(fruits);
  const [inputValue, setInput] = useState("");

  const highlightedText = (currentOption, search) => {
    const parts = currentOption.split(new RegExp(`(${search})`, "gi"));
    return (
      <span>
        {parts.map((part, idx) => {
          return part.toLowerCase() === search.toLowerCase() ? (
            <b>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  const filteredFruit = fruitsState.filter((fruit) =>
    fruit.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Finter input</h1>
      <div>
        <input
          type="text"
          placeholder="search a fruit"
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
        {filteredFruit.map((fruit) => (
          <p>{highlightedText(fruit, inputValue)}</p>
        ))}
      </div>
    </div>
  );
}
