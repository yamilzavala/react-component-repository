import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites } from "../store/wishlistSlice";

const WishList = React.memo(() => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.wishlist.items);

  return (
    <section>
      <h2>Favorites</h2>
      {favorites?.length < 1 ? (
        <p>No favoritos yet.</p>
      ) : (
        <ul>
          {favorites?.map((p) => (
            <li key={p.id}>
              <h3>{p.title}</h3>
              <img src={p.image} width={80} alt={p.title} />
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => dispatch(clearFavorites())}>
        Clear favorites
      </button>
    </section>
  );
});

export default WishList;
