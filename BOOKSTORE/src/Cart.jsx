import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';

function Cart({ cartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

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

  const cartItemCount = cart ? cart.length : 0;

  console.log("Cart Items:", cartItems); 


  return (
    <div>
      <h2 style={{ fontSize: '25px', marginBottom: '10px', color: 'black', cursor: 'pointer', backgroundColor: 'white', padding: '10px', border: '1px solid #cc' }} onClick={toggleCart}>
        Basket ({cartItemCount})
      </h2>
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
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart && cart.map((book, index) => (
              <li key={index} style={{ color: 'white', fontSize: '19px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                {book.volumeInfo && book.volumeInfo.imageLinks && (
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={{ width: '200px', height: 'auto', marginRight: '10px', }} />
                )}
                <strong>{book.volumeInfo ? book.volumeInfo.title : 'Title not available'}</strong> - {book.saleInfo && book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'Price not available'} {book.saleInfo && book.saleInfo.listPrice ? book.saleInfo.listPrice.currencyCode : ''}
                <button onClick={() => removeFromCart(index)} style={{ marginBottom: '15px', marginLeft: '15px', backgroundColor: 'white', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={toggleCheckout} style={{ marginBottom: '15px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Checkout</button>
        </div>
      )}

      {isCheckoutOpen && <Checkout />}
    </div>
  );
}

export default Cart;