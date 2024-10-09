// import { useQuery } from "@tanstack/react-query";

// const fetchProducts = async (page) => {
//   const resp = await fetch(
//     `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
//   );
//   return resp.json();
// };

// export const useProducts = (page) => {
//   return useQuery(["products", page], () => fetchProducts(page));
// };

// ProductsApi.js
import { useQuery } from "react-query";

const fetchProducts = async (page) => {
  const response = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useProducts = (page) => {
  return useQuery(["products", page], () => fetchProducts(page));
};
