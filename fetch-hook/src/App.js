import { useFetch } from "./hooks/useFetch";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products/search?q=",
    1500,
    text
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data fetched:</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
