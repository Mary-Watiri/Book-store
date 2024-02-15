

import React, { useState } from "react";


function Cart({ cartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartItemCount = cartItems.length;

  return (
    <div>
      <h2 onClick={toggleCart}>Basket ({cartItemCount})</h2>
      {isCartOpen && (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "400px",
                    height: "600px",
                    marginRight: "10px",
                  }}
                />
                <strong>{item.title}</strong> - {item.price}
              </li>
            ))}
          </ul>
          
            <button>Checkout</button>
          
        </div>
      )}
    </div>
  );
}

export default Cart;
