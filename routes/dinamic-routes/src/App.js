import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const WrapperRoter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<div>Home page</div>} />
      <Route path="/item/:id" element={<ItemDetails />} />
    </Routes>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Dinamic routes</h1>
      <WrapperRoter />
    </div>
  );
}
