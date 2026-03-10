import React from "react";

export default function CartSummary({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="card">
      <h2>Cart Summary</h2>
      <p data-testid="item-count">Items: {items.length}</p>
      <p data-testid="total-amount">Total: ₹ {total}</p>
    </aside>
  );
}
