import React from "react";
import "./ProductItem.css";
import Rating from "./Rating";

export default function ProductItem({ product, onClick }) {
  console.log("product: ", product);
  if (!product) {
    return <p>Loading product...</p>;
  } else {
    const { title, description, image, rating } = product;
    return (
      <div onClick={onClick}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}
