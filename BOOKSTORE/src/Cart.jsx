import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon
import Checkout from './Checkout'; // Importing Checkout component

function Cart({ cartItems }) {
  // State for managing cart visibility and checkout modal
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // State for managing cart items
  const [cart, setCart] = useState([]);

  // Update cart when cartItems prop changes
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  // Toggle cart visibility
  const toggleCart = (event) => {
    event.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  // Toggle checkout modal visibility
  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Count total items in cart
  const cartItemCount = cart ? cart.length : 0;

  // Log cart items for debugging
  console.log("Cart Items:", cartItems);

  return (
    <div>
      {/* Cart header with item count, clickable to toggle cart visibility */}
      <h2 style={{ fontSize: '25px', marginBottom: '10px', color: 'red', cursor: 'pointer', backgroundColor: 'black', padding: '10px', border: '1px solid #cc' }} onClick={toggleCart}>
        {/* Cart icon */}
        <FaShoppingCart style={{ marginRight: '5px' }} /> 
        ({cartItemCount})
      </h2>
      {/* Render cart contents if cart is open */}
      {isCartOpen && (
        <div style={{
          border: '2px solid blue',
          padding: '10px',
          borderRadius: '15px',
          marginBottom: '20px',
          backgroundColor: 'black',
          gap: '3rem',
          alignItems: 'center',
          textAlign: 'center',
          margin: '1rem',
          paddingLeft: '4px',
          paddingTop: '24px',
          paddingInlineStart: '20px',
        }}>
          {/* Render each item in cart */}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart && cart.map((book, index) => (
              <li key={index} style={{ color: 'white', fontSize: '19px', marginBottom: '10px' }}>
                {/* Display book title, fallback to 'Book' if title not available */}
                {book.volumeInfo ? book.volumeInfo.title : 'Book'}
                {/* Button to remove item from cart */}
                <button onClick={() => removeFromCart(index)} style={{ marginBottom: '15px', marginLeft: '15px', backgroundColor: 'white', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
              </li>
            ))}
          </ul>
          {/* Button to open checkout modal */}
          <button onClick={toggleCheckout} style={{ marginBottom: '15px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Checkout</button>
        </div>
      )}
      {/* Render checkout modal if open */}
      {isCheckoutOpen && <Checkout />}
    </div>
  );
}


export default Cart;
