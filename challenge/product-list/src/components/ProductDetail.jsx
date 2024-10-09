// components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StarRating from "./StarRating";
import { updateProductRating } from "../store/productsSlice";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) return <p>Loading...</p>;

  const handleRatingChange = (rating) => {
    dispatch(updateProductRating({ id: product.id, rating }));
  };

  return (
    <div>
      <img src={product.image} alt={product.title} width="200" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <StarRating rating={product.rating} onChange={handleRatingChange} />
      <button onClick={() => navigate("/")}>back to home</button>
    </div>
  );
};

export default ProductDetail;
