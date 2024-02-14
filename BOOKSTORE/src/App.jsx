import React, { useState } from 'react';
import BookList from './BookList';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (book) => {
    setCartItems(prevItems => [...prevItems, book]);
  };

  return (
    <div>
      <Cart cartItems={cartItems} />
      <BookList addToCart={addToCart} />
      
    </div>
  );
}

export default App;
