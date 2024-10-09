import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const dataValues = await res.json();
        setData(dataValues.products);
      } catch (error) {
        console.log("There was an error fetching data...");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Products Page</h2>

      <div className="products-grid">
        {data.map((prod) => {
          return (
            <div className="product-card" key={prod.id}>
              <Link to={`/products/${prod.id}`}>
                <img
                  className="product-img"
                  src={prod.thumbnail}
                  alt={prod?.title}
                />
                <h3>{prod?.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
