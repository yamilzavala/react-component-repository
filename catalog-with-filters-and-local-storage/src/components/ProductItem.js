import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/wishlistSlice";

const ProductItem = React.memo(({ product, onAddItem }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.wishlist.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <article>
      {/* item */}
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt="product image" width={100} height={100} />
        <span>{product.price}</span>
        <p>{product.description}</p>
      </div>

      {/* add to cart */}
      <button onClick={() => onAddItem(product)}>Add to cart</button>

      {/* favorites */}
      <button onClick={() => dispatch(toggleFavorite(product))}>
        {isFavorite ? "remove💔" : "add ❤"}
      </button>
    </article>
  );
});

export default ProductItem;
