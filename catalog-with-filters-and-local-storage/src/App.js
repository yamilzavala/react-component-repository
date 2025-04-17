import "./styles.css";
import ProductsList from "./components/ProductsList";
import { Routes, Route, Link } from "react-router-dom";
import WishList from "./components/WishList";

export default function App() {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}
