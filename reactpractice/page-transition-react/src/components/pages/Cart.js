import React from "react";

function Cart({ cart }) {
  return (
    <div style={{ marginLeft: 30 }}>
      <h2>CART ITEMS</h2>
      <ul>
        {cart.map((i, index) => (
          <li key={index}>
            <div>
              <h3>Name: {i.name}</h3>
              <p>Model No: {i.modelNo}</p>
              <p>Price: ${i.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
