import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
const ProductListLazy = React.lazy(() => import("./components/ProductList"));
const ProductDetailsLazy = React.lazy(() =>
  import("./components/ProductDetails")
);

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" exac element={<ProductListLazy />} />
          <Route path="/products/:id" element={<ProductDetailsLazy />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
