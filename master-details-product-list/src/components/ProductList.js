import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import { fetchProducts } from "../store/products.slice";
import "./ProductList.css";

export default function ProductList() {
  const { products, status } = useSelector((s) => s.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function hadleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    dispatch(fetchProducts());
  }

  useEffect(() => {
    if (status === "idle" && products.length === 0) dispatch(fetchProducts());
    window.addEventListener("scroll", hadleScroll);
    return () => window.removeEventListener("scroll", hadleScroll);
  }, []);

  if (status === "pending") return <p>Loading products...</p>;

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={() => navigate(`/products/${product.id}`)}
        />
      ))}
    </div>
  );
}
