import React, { useState } from "react";
import Checkout from "./Checkout";

function Cart({ cartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cart, setCart] = useState(cartItems);

  const toggleCart = (event) => {
    event.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const cartItemCount = cart.length;

  return (
    <div>
      <h2 onClick={toggleCart}>Basket ({cartItemCount})</h2>
      {isCartOpen && (
        <div>
          <ul>
            {cart.map((item, index) => (
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
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={toggleCheckout}>Checkout</button>
        </div>
      )}
      {isCheckoutOpen && <Checkout />}
    </div>
  );
}

export default Cart;
