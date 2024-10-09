import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (page) => `products?limit=10&skip=${page * 10 - 10}`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
