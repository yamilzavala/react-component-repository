import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const resp = await fetch("https://dummyjson.com/products?limit=100");
    const data = await resp.json();
    console.log(data);
    if (data && data?.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //products
  const renderedProducts = products
    .slice(page * 10 - 10, page * 10)
    .map((product, idx) => {
      return (
        <div className="card" key={idx}>
          <img
            class="product-image"
            src={product.thumbnail}
            alt={product.title}
          />
          <span className="product-title">{product.title}</span>
        </div>
      );
    });

  //number pages
  const numerPages = [...Array(products.length / 10)].map((_, idx) => {
    return (
      <span
        onClick={() => selectPageHandler(idx + 1)}
        className={page === idx + 1 ? "selected page" : "page"}
        key={idx}
      >
        {idx + 1}
      </span>
    );
  });

  //handles
  const selectPageHandler = (page) => {
    setPage(page);
  };

  const handlePrevPage = () => {
    if (page < 2) {
      setPage(1);
    } else if (page <= products.length / 10) {
      setPage(page - 1);
    } else {
      setPage(products.length / 10);
    }
  };

  const handleNextPage = () => {
    if (page < products.length / 10) {
      setPage(page + 1);
    } else {
      setPage(products.length / 10);
    }
  };

  return (
    <div className="wrapper">
      <div className="container">{products.length && renderedProducts}</div>
      <div className="pagination">
        <span
          className={page === 1 ? "disabled" : "page"}
          onClick={handlePrevPage}
        >
          ◀
        </span>
        {numerPages}
        <span
          className={page === 10 ? "disabled" : "page"}
          onClick={handleNextPage}
        >
          ▶
        </span>
      </div>
    </div>
  );
}
