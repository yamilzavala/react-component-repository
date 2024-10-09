// components/ProductList.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, page } = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts(page));
    }
    console.log("products: ", products);
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }

      dispatch(fetchProducts(page));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={() => navigate(`/product/${product.id}`)}
        />
      ))}
      {status === "loading" && <p>Loading more products...</p>}
    </div>
  );
};

export default ProductList;
