import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const dataValues = await res.json();
        setData(dataValues.products.slice(0, 6));
      } catch (error) {
        console.log("There was an error fetching data...");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Home Page</h2>
      <span>Tranding products 🤘</span>

      {/* tranding products */}
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

      {/* all products */}
      <Link to="/products">
        <button className="btn">View all products</button>
      </Link>
    </>
  );
};

export default Home;
