import { useParams } from "react-router";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchSingleProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      };
      fetchSingleProduct();
    } catch (err) {
      console.log("There was an error in fetch single product");
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(id);

  return (
    <>
      <h2>Product Details Page</h2>
      {!loading ? (
        <div className="single-product-container">
          <div
            className="product-card"
            style={{ width: "350px", padding: "0 1rem" }}
          >
            <img
              className="product-img"
              src={product?.thumbnail}
              alt={product?.title}
            />
            <h3>{product?.title}</h3>
            <p>${product?.description}</p>
            <h3>${product?.price}</h3>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;
