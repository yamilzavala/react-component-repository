import React, { useState, useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";

const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Err: ", error);
  }
};

const ProductsList = () => {
  const [page, setPage] = useState(0);
  const [filtered, setFiltered] = useState("all");

  //store
  const { cartItems } = useSelector((s) => s.cart);

  //react-query
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const dispatch = useDispatch();
  //pagination
  const itemsPerPage = 10;
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  //filters
  const filteredItems =
    filtered === "all"
      ? data
      : data.filter((item) => item.category === filtered);
  const currentItems = useMemo(() => {
    return filteredItems?.slice(start, end);
  }, [filteredItems, page]);
  const totalPages = Math.ceil(filteredItems?.length / itemsPerPage);

  //prev
  const handlePrev = (pageValue) => {
    if (pageValue < 0) return;
    setPage(pageValue);
  };
  //next
  const handleNext = (pageValue) => {
    if (pageValue >= totalPages) return;
    setPage(pageValue);
  };

  //add
  const addItemToCart = useCallback(
    (product) => {
      dispatch(addItem(product));
    },
    [dispatch]
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error {isError.message}</div>;

  return (
    <div>
      {/* filters */}
      <header>
        <label htmlFor="category" aria-label="filter by category">
          Filter by category
        </label>
        <select
          id="category"
          value={filtered}
          onChange={(e) => setFiltered(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men Clothing</option>
          <option value="women's clothing">Women Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </header>

      {/* list */}
      <section>
        <ul>
          {currentItems.map((product) => (
            <ProductItem product={product} onAddItem={addItemToCart} />
          ))}
        </ul>
      </section>

      {/* pagination */}
      <footer>
        <div>
          <button disabled={page < 1} onClick={() => handlePrev(page - 1)}>
            prev
          </button>
          <span>{page + 1}</span>
          <button
            disabled={page >= totalPages}
            onClick={() => handleNext(page + 1)}
          >
            next
          </button>
        </div>

        <div>Item in cart: {cartItems.length}</div>
      </footer>
    </div>
  );
};

export default ProductsList;
