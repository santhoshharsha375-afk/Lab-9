import React from "react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p data-testid="price">₹ {product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
