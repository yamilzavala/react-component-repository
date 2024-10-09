import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    const resp = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await resp.json();
    console.log(data);
    if (data && data?.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10));
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  //products
  const renderedProducts = products.map((product, idx) => {
    return (
      <div className="card" key={idx}>
        <img
          className="product-image"
          src={product.thumbnail}
          alt={product.title}
        />
        <span className="product-title">{product.title}</span>
      </div>
    );
  });

  //number pages
  const numerPages = [...Array(totalPages)].map((_, idx) => {
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

  //handlers
  const selectPageHandler = (page) => {
    setPage(page);
  };

  const handlePrevPage = () => {
    if (page < 2) {
      setPage(1);
    } else if (page <= totalPages) {
      setPage(page - 1);
    } else {
      setPage(totalPages);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    } else {
      setPage(totalPages);
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
          className={page === totalPages ? "disabled" : "page"}
          onClick={handleNextPage}
        >
          ▶
        </span>
      </div>
    </div>
  );
}
