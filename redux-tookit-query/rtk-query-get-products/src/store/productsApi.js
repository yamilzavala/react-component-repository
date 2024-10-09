// productsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi", // Nombre del slice de la API
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/", // URL base de tu API
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (page) => `products?limit=10&skip=${page * 10 - 10}`, // Parámetros de paginación
    }),
  }),
});

// Exporta los hooks generados automáticamente
export const { useGetAllProductsQuery } = productsApi;
