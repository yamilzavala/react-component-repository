import "./styles.css";
import React, { useState, useEffect } from "react";

//urls
//https://dummyjson.com/products/category/smartphones
//https://dummyjson.com/products/category/tops
//https://dummyjson.com/products/category/tablets

//hook input
const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, text]);

  return debounce;
};

//hook API
const useDebounceAPI = (text, delay) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://dummyjson.com/products/category";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(`${baseUrl}/${text}`);
        if (!resp.ok) {
          setError("something went wrong");
        }
        const dataValues = await resp.json();
        setData(dataValues.products);
      } catch (error) {
        setError("Fetch Failed");
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, text]);

  return { data, error, loading };
};

//component
export default function App() {
  const [text, setText] = useState("");
  const debounceText = useDebounce(text, 1000);

  const [searchProduct, setSearchProduct] = useState("");
  const { data, error, loading } = useDebounceAPI(searchProduct, 1000);

  console.log("data:", data);

  return (
    <div className="App">
      <h1>Debounce hook</h1>
      {/* simple input */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type something"
      />
      <p>Debounce value: {debounceText}</p>

      {/* search product */}
      <input
        type="text"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        placeholder="type (tablets or tops)"
      />
      {loading ? <div>loading...</div> : null}
      {data?.map((prod) => (
        <li style={{ listStyle: "none" }}>{prod.title}</li>
      ))}
    </div>
  );
}
