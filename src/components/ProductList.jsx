import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
