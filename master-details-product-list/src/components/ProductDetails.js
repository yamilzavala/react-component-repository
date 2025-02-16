import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "./Rating";
import { updateRating } from "../store/products.slice";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((s) =>
    s.products.products.find((x) => x.id === +id)
  );

  if (!product) return <p>Loading product...</p>;

  const onChangeRating = (rating) => {
    dispatch(updateRating({ id: product.id, rating }));
  };

  return (
    <div className="product-details-container">
      <article>
        <h3>{product?.title}</h3>
        <img src={product?.image} alt={product?.title} />
        <p>{product?.description}</p>
        <Rating rating={product?.rating} onClick={onChangeRating} />
      </article>
      <button onClick={() => navigate("/")}>Back home</button>
    </div>
  );
}
