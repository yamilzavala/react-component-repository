import "./styles.css";
import { useState } from "react";
import { useDebounceText } from "./useDebounceText";
export default function App() {
  const [text, setText] = useState("");
  const { value: textAfterDelay } = useDebounceText(text, 2000);

  return (
    <div className="App">
      <h1>Debounce with text</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text after delay 2 seconds: {textAfterDelay}</p>
    </div>
  );
}
