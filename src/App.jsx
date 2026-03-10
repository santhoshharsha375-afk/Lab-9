import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import CartSummary from "./components/CartSummary.jsx";
import "./index.css";

const PRODUCTS = [
  { id: 1, name: "Wireless Mouse", price: 799 },
  { id: 2, name: "Mechanical Keyboard", price: 2499 },
  { id: 3, name: "USB Headset", price: 1299 },
];

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems((items) => [...items, product]);
  }

  return (
    <div className="app">
      <h1>Testing React Components (Jest + RTL)</h1>
      <div className="layout">
        <ProductList products={PRODUCTS} onAddToCart={handleAddToCart} />
        <CartSummary items={cartItems} />
      </div>
    </div>
  );
}
