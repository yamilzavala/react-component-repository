import "./styles.css";
import React, { useState, useEffect } from "react";

// Supongamos que estos son los datos que se cargarán progresivamente
const mockData = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
];

// Esta función simula la carga de datos paginados desde un servidor
const fetchMoreData = (() => {
  let itemsPerPage = 5;
  let currentPage = 0;
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = mockData.slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );
        currentPage += 1;
        resolve(result);
      }, 1000);
    });
  };
})();

//component
const InfiniteScrollList = ({ fetchMoreData }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //primera carga
    fetchMoreData().then((data) => setItems(data));

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      fetchMoreData().then((newData) =>
        setItems((prev) => [...prev, ...newData])
      );
    };

    //scroll
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMoreData]);

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Infinite Scroll</h1>
      <InfiniteScrollList fetchMoreData={fetchMoreData} />
    </div>
  );
};

export default App;
