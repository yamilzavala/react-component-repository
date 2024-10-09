// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  </Router>
);

export default App;
