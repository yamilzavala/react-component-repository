import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";
import Products from "./pages/products";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>breadcrubs</h1>

      {/* breadcrubs */}

      {/* routes */}
      <BrowserRouter>
        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
