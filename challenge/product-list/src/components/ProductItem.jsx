import React from "react";
import StarRating from "./StarRating";

const ProductItem = ({ product, onClick }) => {
  const { image, description, title, rating } = product;
  return (
    <div onClick={onClick}>
      <img src={image} alt={title} width={100} />
      <h3>{title}</h3>
      <p>{description}</p>
      <StarRating rating={rating} />
    </div>
  );
};

export default ProductItem;
